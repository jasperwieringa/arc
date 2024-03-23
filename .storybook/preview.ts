import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';
import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../assets/arc-red.svg'
import '../assets/icons.svg'

setCustomElementsManifest(customElementsManifest);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(colorPrimary|colorSecondary|btnColor|btnBackground|iconColor|strokeColor)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
