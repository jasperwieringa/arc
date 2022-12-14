import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcMenu from './ArcMenu.js';
import './arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../icon/arc-icon.js';

export default {
  title: 'Components/ArcMenu',
  component: 'arc-menu',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.select],
    },
  },
} as Meta;

const Template: Story<ArcMenu> = () => html`
  <arc-menu>
    <arc-menu-item value="home">
      <arc-icon name="home" slot="prefix"></arc-icon>
      Home
    </arc-menu-item>
    <arc-menu-item value="messages">
      <arc-icon name="speech" slot="prefix"></arc-icon>
      Messages
    </arc-menu-item>
    <arc-menu-item value="calendar" disabled>
      <arc-icon name="calender" slot="prefix"></arc-icon>
      Calendar
    </arc-menu-item>
    <arc-menu-item value="settings">
      <arc-icon name="settings" slot="prefix"></arc-icon>
      Settings
      <arc-icon name="arrow-right" slot="suffix"></arc-icon>
    </arc-menu-item>
  </arc-menu>
`;

export const Default = Template.bind({});
