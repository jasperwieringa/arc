# Table of contents
1. Quick start
2. Installation
   1. Local installation
   2. Cherry Picking
      1. No framework
      2. React
      3. NextJS
      4. Vue
      5. Angular
3. TypeScript
4. Useful utilities
   1. BasePath
   2. Forms
   3. Styles
      1. getRootVariables
      2. getNamedRootVariables
      3. getRootColors
      4. getRootValue
      5. getPropertyValue
      6. noFOUC

# 1. Quick start
Add the following code to your page, where @x.x.x stands for the version of @arc-web/components.

```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@arc-web/components@x.x.x/dist/themes/index.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@arc-web/components@x.x.x/dist/themes/light.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@arc-web/components@x.x.x/dist/themes/dark.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@arc-web/components@x.x.x/dist/arc.js"></script>
```

Now you have access to all the ARC components.

> **Note**: This will load all the ARC components, but you should probably only load the ones you're actually using.
> Continue reading to learn how to cherry-pick ARC components and for other ways to install ARC.

# 2. Installation

You can use ARC by installing it locally.
You can also cherry-pick individual components for faster load times.

## Local Installation

You can install ARC locally with the following command.

```bash
npm install @arc-web/components
```

or with Yarn

```bash
yarn add @arc-web/components
```

It's up to you to make the source files available to your app.
One way to do this is to create a route in your app called /arc that serves static files from node_modules/@arc-web/components.

Add the following tags to your page. Make sure to update `href` and `src`, so they point to the route you created.

```bash
<head>
  <link rel="stylesheet" href="/arc/dist/themes/index.css">
  <link rel="stylesheet" href="/arc/dist/themes/light.css">
  <link rel="stylesheet" href="/arc/dist/themes/dark.css">
  <script type="module" src="/arc/dist/arc.js"></script>
</head>
```

## Cherry Picking

The previous approach is the easiest way to load ARC, but that isn't always efficient.
You'll incur the full size of the library even if you only use a handful of components.
This is convenient for prototyping, but may result in longer load times in production.
To improve this, you can cherry-pick the components you need.

Cherry-picking can be done from your local install or directly from the CDN.
This will limit the number of files the browser has to download and reduce the amount of bytes being transferred.
The disadvantage is that you need to load components manually.

### Any application that uses a bundler such as Webpack / Parcel / Rollup etc.
#### Example at: https://github.com/jasperwieringa/arc-parcel-test
```bash
# index.html / base.html
<body>
  <arc-container theme="dark"></arc-container>
  <script type="module" src="index.js" data-arc="/path/to/arc/"></script>
</body>
```

```bash
# index.js
import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

import '@arc-web/components/dist/components/container/arc-container.js';
```

### React
#### Example at: https://github.com/jasperwieringa/arc-react-test
```bash
# index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

# Set the base path to the folder you copied ARC's assets to
import { setBasePath } from "@arc-web/components/dist/utilities/base-path.js";
setBasePath('/path/to/arc/');

ReactDOM.render(
  <React.StrictMode>
    <App theme={'dark'} />
  </React.StrictMode>,
  document.getElementById('root')
);
```

```bash
# App.js
import '@arc-web/components/dist/components/container/arc-container.js';

function App(props) {
    return (
        <arc-container theme={props.theme}></arc-container>
    );
}

export default App;
```

### NextJS
```bash
# _app.tsx
import React from 'react';

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

# Set the base path to the folder you copied ARC's assets to
import { setBasePath } from "@arc-web/components/dist/utilities/base-path.js";
setBasePath('/path/to/arc/');

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Component {...pageProps} />
  )
}
```

```bash
# Layout.tsx
import React, { useEffect } from 'react';
import type { NextPage } from "next";
import Head from 'next/head';

export const siteTitle = 'Some title';

const Layout: NextPage = ({ children }) => {
    /* Import the required arc components */
    useEffect(() => {
        import('@arc-web/components/dist/components/container/arc-container.js');
    }, [])

    return (
        <>
            <Head>
                <link rel={'icon'} href={'/favicon.ico'}/>
                <meta
                    name={'description'}
                    content={'App description'}
                />
                <meta
                    name={'og:title'}
                    content={siteTitle}
                />
                <title>{siteTitle}</title>
            </Head>
            <arc-container>
              {children}
            </arc-container>
        </>
    )
}

export default Layout;
```

```bash
# Index.tsx
import React from 'react';
import type { NextPage } from 'next';
import Layout from './Layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <div>Some content</div>
        </Layout>
    )
}

export default Home;  
```

### Vue
#### Example at: https://github.com/jasperwieringa/arc-vue-test
```bash
# Index.vue
<template>
  <App theme="dark"/>
</template>

<script>
import App from './components/App.vue'

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

# Set the base path to the folder you copied ARC's assets to
import { setBasePath } from '@arc-web/components/dist/utilities/base-path.js';
setBasePath('/path/to/arc/');

export default {
  name: 'Index',
  components: {
    App
  }
}
</script>
```

```bash
# App.vue
<template>
  <arc-container :theme="theme"></arc-container>
</template>

<script>
import '@arc-web/components/dist/components/container/arc-container.js';

export default {
  name: 'Arc',
  props: {
    theme: String
  }
}
</script> 
```

> **Note**: To allow using web-components in Vue `v2.6.0+`, a specific rule needs to be added to the eslintConfig.
When using the `vue create app-name` command in the terminal, this information can be found in the package.json.

```bash
# package.json
"eslintConfig": {
  ...other,
  "rules": {
    "vue/no-deprecated-slot-attribute": "off" # Allows the use of the slot attribute
  }
} 
```

### Angular
#### Example at: https://github.com/jasperwieringa/arc-angular-test
```bash
# main.ts
...other imports

# Set the base path to the folder you copied ARC's assets to
import { setBasePath } from "@arc-web/components/dist/utilities/base-path.js";
setBasePath('/path/to/arc/');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

```bash
#styles.css
@import '~@arc-web/components/dist/themes/index.css';
@import '~@arc-web/components/dist/themes/light.css';
@import '~@arc-web/components/dist/themes/dark.css';
```

```bash
#app.components.ts
import { Component } from '@angular/core';

import '@arc-web/components/dist/components/container/arc-container.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'arc-angular-test';
}
```

```bash
#app.component.html
<arc-container theme="dark"></arc-container>
```

> **Note**: To allow using web-components in Angular, a specific rule needs to be added to the '@NgModule.schemas' of the component.
When using the `ng new app-name` command in the terminal, this information can be found in the app.modules.ts.

```bash
# app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] # Allows the use of web-components
})
export class AppModule { }
```

Component modules include side effects for registration purposes. 
Because of this, importing directly from @arc-web/components may result in a larger bundle size than necessary. 
For optimal tree shaking, always cherry-pick, i.e. import components and utilities from their respective files, as shown in the examples above.

# 3. TypeScript

TypeScript cannot type check the ARC component templates due to it not knowing how to find the CustomElement class reference for the associated tag. 
You can add the tag(s) to the JSX.IntrinsicElements global interface, which will associate the tag to the class reference.
Create the following file in the main directory of your project.

```bash
# declarations.d.ts
import * as React from 'react';
import type ArcContainer from "@arc-web/components";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "arc-container": CustomElement<ArcContainer>;
    }
  }
}
```
Add each component into the interface like shown above.
More on this can be found on: https://coryrylan.com/blog/how-to-use-web-components-with-typescript-and-react

# 4. Useful utilities
## Setting the Base Path

Some components rely on assets and ARC needs to know where they're located.
For convenience, ARC will try to auto-detect the correct location based on the script you've loaded it from.

However, if you're cherry-picking or bundling ARC, you'll need to set the base path. You can do this one of two ways.

**Option 1: the data-arc attribute**
```bash
/* index.html */
<head>
  <script type="module" src="your-own-bundle.js" data-arc="/path/to/arc/"></script>
</head>
```

**Option 2: the setBasePath() method**
```bash
/* index.html */
<body>
  <arc-container></arc-container>

  <script src="your-own-bundle.js"></script>
</body>
```

```bash
/* your-own-bundle.js */
import { setBasePath } from '@arc-web/components/dist/utilities/base-path.js';
setBasePath('/path/to/arc/');

# other imports etc.
```

## Forms
When you are relying on standard form submissions, e.g. `<form action="...">`, you can probably skip this section. 
However, most modern apps use the Fetch API or a library such as axios to submit forms using JavaScript.

The FormData interface offers a standard way to serialize forms in the browser. 
You can create a FormData object from any `<form>` element like this.

```bash
const form = document.querySelector('form');
const data = new FormData(form);

// All form control data is available in a FormData object
```

However, if you find FormData tricky to work with, or need to pass a JSON payload to the server, 
ARC offers a serialization utility that gathers form data and returns a simple JavaScript object instead.

```bash
import { serialize } from '@arc-web/components/dist/utilities/form-utils.js';

const form = document.querySelector('form');
const data = serialize(form);

// All form control data is available in a plain object
```

This results in an object with name/value pairs that map to each form control. 
If more than one form control shares the same name, the values will be passed as an array, e.g. `{ name: ['value1', 'value2'] }`.

## Styles
The ARC design system uses css variables to make your application work seamlessly.
Sometimes it can be useful to get access to these css variables in JavaScript without reading each line of the imported `css` files.
ARC exposes a few APIs that allows you to retrieve ARC css variables that are located in the :root of the application.
A css variable consists of a variable, followed by a value, i.e. `--arc-red-060: 209, 9, 17`.

### getRootVariables
The `getRootVariables` method returns an array of all ARC :root variables within the index.css file.

```bash
/* your-own-bundle.js */
import { getRootVariables } from '@arc-web/components/dist/utilities/style-utils.js';
getRootVariables();
```

The example returns an array like `[
  --arc-white-000,
  --arc-blue-000,
  --arc-green-000,
  --arc-grey-000,
  --arc-orange-000,
  etc.
]`

### getNamedRootVariables
The `getNamedRootVariables` method returns an array of all named :root variables within the index.css file.

```bash
/* your-own-bundle.js */
import { getNamedRootVariables } from '@arc-web/components/dist/utilities/style-utils.js';
getNamedRootVariables('font-size');
```

The example returns an array like `[
  font-size-xx-small,
  font-size-x-small
]`

### getRootColors
The `getRootColors` method returns an array of all color variables in the :root of the index.css file in rgb format.

```bash
/* your-own-bundle.js */
import { getRootColors } from '@arc-web/components/dist/utilities/style-utils.js';
getRootColors();
```

The example returns an array like `[
  rgb(var(--arc-red-000)),
  rgb(var(--arc-red-010)),
  rgb(var(--arc-red-020)),
  rgb(var(--arc-red-030)),
  rgb(var(--arc-red-040)),
  etc.
]`

### getRootValue
The `getRootValue` method returns a single :root value for a given css variable

```bash
/* your-own-bundle.js */
import { getRootValue } from '@arc-web/components/dist/utilities/style-utils.js';
getRootValue('--arc-red-060');
```

The example returns a value like `209, 9, 17`

### getPropertyValue
The `getPropertyValue` method retrieves the computed value of a DOM element.

```bash
/* your-own-bundle.js */
import { getPropertyValue } from '@arc-web/components/dist/utilities/style-utils.js';

const arcButton = document.querySelector('arc-button');
arcButton.style = '--my-var: 50px';
getPropertyValue(arcButton, '--my-var');
```

The example returns `50px`

### Flash of unstyled content (FOUC)
A flash of unstyled content (FOUC, also flash of unstyled text) is an instance where a web page appears briefly with the browser's default styles prior to loading an external CSS stylesheet, 
due to the web browser engine rendering the page before all information is retrieved.
The page corrects itself as soon as the style rules are loaded and applied; however, 
the shift may be distracting or even seem unprofessional.
These problems can be resolved by using the built-in `noFOUC()` utility function as shown below.
This will only display the content once the document.readyState is equal to 'complete'.

```bash
/* index.html */
<body>
  <arc-container></arc-container>
  
  <script src="your-own-bundle.js"></script>
</body>
```

```bash
/* your-own-bundle.js */
import { noFOUC } from '@arc-web/components/dist/utilities/style-utils.js';
noFOUC();
```
