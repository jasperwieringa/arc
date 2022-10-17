import { THEME_COLORS } from '../internal/constants/styleConstants.js';

/*
The style-utils is a set of functions to work with css variables.
To ensure that all ARC values are stored in one central place, these methods can be useful to retrieve those values.
In general, a css variable consists of a variable, followed by a value, i.e. --arc-red-060: 209, 9, 17
*/

/* Match a given variable with a regular expression, to find ARC specific :root values. */
function matchArcVariable(variable: string): RegExpMatchArray | null {
  const arcRegex = /(?<=--arc-)(.*)/gi;
  return variable.match(arcRegex);
}

/* Retrieves an array of all ARC :root variables within the index.css file. */
function getRootVariables(): string[] | string {
  /*
  Tests cannot add `href` to the added <style>.
  Allow sheets that have no href or that are served from the domain of the application itself.
  */
  const indexCSS = [...document.styleSheets].filter(
    sheet => !sheet.href || (sheet.href?.includes('index') && sheet.href?.startsWith(window.location.origin))
  )[0];

  /* Reduce all properties to ARC :root variables only. */
  return indexCSS
    ? [...indexCSS.cssRules].reduce(
        (def: string[], rule: CSSStyleRule) =>
          rule.selectorText === ':root'
            ? ([...def, [...rule.style].filter((name: string) => name.startsWith('--arc'))] as string[])
            : def,
        []
      )[0]
    : [];
}

/*
Retrieves an array of all named :root variables within the index.css file.
getNamedRootVariables('font-size') will return an array like [
  font-size-xx-small,
  font-size-x-small
]
*/
function getNamedRootVariables(rootName: string): string[] | string {
  const rootVariables = getRootVariables();
  return [...rootVariables].filter(variable => variable.includes(rootName) && variable.startsWith(`--arc-${rootName}`));
}

/*
Retrieves an array of all colors in the :root of the index.css file like [
  rgb(var(--arc-red-050)),
  rgb(var(--arc-red-060))
]
The getNamedRootVariables method cannot be used for this, as there is no shared indicator between any of the colors.
i.e. --arc-red-060 has no overlap with --arc-green-040, hence the custom regex in this method.
*/
function getRootColors(): string[] {
  /* Regular expression to find anything between --arc- and -anyWord. */
  const regex = /(?<=--arc-)(.*?)(?=-(.*?))/gi;

  return [...getRootVariables()].reduce((prev: string[], curr: string) => {
    const hasMatch = curr.match(regex);
    const colorValue = hasMatch && hasMatch.length > 0 ? hasMatch[0] : '';

    return colorValue in THEME_COLORS ? [...prev, `rgb(var(${curr}))`] : prev;
  }, []);
}

/*
Retrieves the computed value of a specific ARC :root value (i.e. --arc-red-060).
This method is used by the accessibility panel to store the value of a property in state before overwriting it.
*/
function getRootValue(property: string) {
  const root: HTMLElement = document.querySelector(':root')!;
  const computedStyles = getComputedStyle(root);
  return computedStyles.getPropertyValue(property).trim();
}

/*
Overwrite the computed value of a specific :root property (i.e. --arc-red-060).
This method is used by the accessibility panel to overwrite the application in the fastest way possible.
Normal accessibility controls would add classes/styles on top of the existing elements.
*/
function setRootValue(variable: string, newVal: string) {
  const root: HTMLElement = document.querySelector(':root')!;

  /* Only overwrite when the css variable changed. */
  if (getRootValue(variable) !== newVal) {
    root.style.setProperty(variable, newVal);
  }
}

/*
Retrieves the computed value of a DOM element.
i.e. <arc-button style='--my-var: 30px;'></arc-button>
getPropertyValue(document.querySelector('arc-button'), '--my-var') will return 30px.
This is mainly used for testing purposes to ensure that the styling works.
*/
function getPropertyValue(element: any, property: string) {
  const computedStyles = window.getComputedStyle(element);
  return computedStyles.getPropertyValue(property).trim();
}

/* Calling this method will resolve the flash-of-unstyled-content (FOUC) */
function noFOUC() {
  document.documentElement.className = 'no-fouc';

  if (document.readyState === 'complete') {
    document.documentElement.classList.remove('no-fouc');
  }

  /* c8 ignore next 5 */
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      document.documentElement.classList.remove('no-fouc');
    }
  };
}

export {
  matchArcVariable,
  getRootVariables,
  getRootColors,
  getNamedRootVariables,
  getRootValue,
  setRootValue,
  getPropertyValue,
  noFOUC,
};
