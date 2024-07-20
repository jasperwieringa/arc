import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';
import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../assets/arc-red.svg'
import '../assets/icons.svg'

export default {
  // Write auto documentation
  tags: ['autodocs'],
};

setCustomElementsManifest(customElementsManifest);
