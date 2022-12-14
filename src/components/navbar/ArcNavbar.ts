import { html, LitElement } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
import styles from './arc-navbar.styles.js';
import { arupLogo } from './arup-logo.js';
import type ArcButton from '../button/ArcButton.js';
import type ArcIconButton from '../icon-button/ArcIconButton.js';
import '../dropdown/arc-dropdown.js';
import '../icon-button/arc-icon-button.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';

/**
 * @slot default - This slot is used to add tabs to the navbar.
 * @slot name - This slot is used to add a tool name or sub branding.
 * @slot user - This slot should be used to display the signed-in user.
 *
 * @event arc-show-accessibility - Emitted when the built-in accessibility button is pressed.
 *
 * @cssproperty --logo-height - Set the height of the tool logo.
 */
export default class ArcNavbar extends LitElement {
  /** @internal */
  static tag = 'arc-navbar';

  static styles = styles;

  /** @internal */
  @query('#tabSlot') tabSlot: HTMLSlotElement;

  /** @internal - State that tracks whether a dropdown component should be visible. */
  @state() private showDropdown: boolean = false;

  /** @internal - State that keeps track of the current (slotted) tabs. */
  @state() private navTabs: (ArcButton | ArcIconButton)[] = [];

  /** When set, the underlying logoWrapper will be rendered as an anchor with this property. */
  @property({ type: String }) home: string;

  /** The url for the logo of the application. */
  @property({ type: String }) logo: string;

  /** The amount of tabs allowed before collapsing into a dropdown. */
  @property({ type: Number, reflect: true }) tabs: number = 5;

  /** Show/hide the Arup logo. Can be useful for non-Arup applications. */
  @property({
    type: Boolean,
    reflect: true,
    converter: (attrValue: string | null) => (attrValue ? attrValue !== 'false' : true),
  })
  arup: boolean = true;

  @watch('tabs', { waitUntilFirstUpdate: true })
  handleTabCountChange() {
    this._updateTemplate();
  }

  /* Whenever a new arc-button or arc-icon-button gets added to the default slot. */
  private _handleTabChange(e: any) {
    const nodes = e.target.assignedElements({ flatten: true });

    /* Store a reference to the button and icon-button components. */
    this.navTabs = nodes.filter((el: Element) => el.tagName === 'ARC-BUTTON' || el.tagName === 'ARC-ICON-BUTTON');
    this._updateTemplate();
  }

  /* Show/hide tabs based on the 'tabs' property and the slotted tabs */
  private _updateTemplate() {
    this.showDropdown = this.navTabs.length > this.tabs;

    /* Show or hide the button and icon-button components. */
    [...this.navTabs].forEach(tab => {
      tab.style.display = this.showDropdown ? 'none' : 'initial';
    });
  }

  /* Emit an event to show the accessibility panel */
  emitAccessibility() {
    emit(this, ARC_EVENTS.showAccessibility);
  }

  protected render() {
    /*
    Template that displays all button and icon-button components inside a dropdown menu.
    Properties are derived from the button and icon-button components.
    */
    const menuInterior = html`
      ${map(
        this.navTabs,
        tab => html`
          <arc-menu-item ?disabled="${tab.disabled}" @click="${() => tab.click()}">
            ${when(
              (tab as ArcIconButton).name,
              () => html`<arc-icon .name=${(tab as ArcIconButton).name} slot="prefix"> }</arc-icon>`
            )}
            ${tab.textContent || (tab as ArcIconButton).label || (tab as ArcIconButton).name || 'Invalid label'}
          </arc-menu-item>
        `
      )}
    `;

    const logoInterior = html`
      ${when(this.logo, () => html`<img id="tool-logo" src="${this.logo}" alt="tool-logo" />`)}
      <slot id="tool-name" name="name"></slot>
    `;

    return html`
      <header id="main">
        <div id="left">
          ${when(
            this.home,
            () => html`<a
              id="logoWrapper"
              href=${this.home}
              rel="noreferrer noopener"
              role="button"
              aria-label="tool logo"
            >
              ${logoInterior}
            </a>`,
            () => html`<div id="logoWrapper">${logoInterior}</div>`
          )}
        </div>
        <div id="right">
          <nav id="tabs" aria-label="primary navigation">
            <slot id="tabSlot" @slotchange=${this._handleTabChange}></slot>
            ${when(
              this.showDropdown,
              () => html`<arc-dropdown id="dropdown" hoist>
                <arc-icon-button slot="trigger" name=${ICON_TYPES.menu}></arc-icon-button>
                <arc-menu>${menuInterior}</arc-menu>
              </arc-dropdown>`
            )}
            <arc-icon-button
              id="accessibility"
              name=${ICON_TYPES.accessibility}
              label="Accessibility panel"
              @click=${this.emitAccessibility}
            ></arc-icon-button>
            <slot name="user"></slot>
          </nav>
          ${when(this.arup, () => html`<span id="company-logo">${arupLogo}</span>`)}
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-navbar': ArcNavbar;
  }
}
