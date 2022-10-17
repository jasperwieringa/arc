import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    #main {
      height: 100%;
    }

    /* Overwrite the scrollbar-tracks to display a border that looks good with the table */
    ::-webkit-scrollbar-track {
      border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-radius: 0;
    }
    ::-webkit-scrollbar-track:horizontal {
      border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-left: none;
    }

    /* Container */
    .gridjs-container {
      display: inline-flex;
      flex-direction: column;
      height: inherit;
      overflow: hidden;
      color: rgb(var(--arc-font-color));
      position: relative;
      z-index: 0;
    }

    /* Header (contains the search input plugin) */
    .gridjs-head {
      width: 100%;
      padding-bottom: var(--arc-spacing-small);
    }
    .gridjs-head:empty,
    .gridjs-footer:empty {
      padding: 0;
      border: none;
    }

    /* Wrapper */
    .gridjs-wrapper {
      display: flex;
      width: 100%;
      position: relative;
      overflow: auto;
      border: var(--arc-border-style) var(--arc-border-width) rgb(var(--arc-color-default));
      z-index: 1;
      -webkit-font-smoothing: antialiased;
    }

    /* Table */
    table.gridjs-table {
      flex: 1 1 100%;
      border-collapse: collapse;
      text-align: left;
      display: table;
      table-layout: fixed;
      overflow: auto;
    }

    /* Rows */
    .gridjs-tr {
      border-top: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-bottom: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }
    .gridjs-tr:hover,
    .gridjs-tr-selected {
      background-color: rgba(var(--arc-font-color), 5%);
    }
    .gridjs-tr:first-of-type {
      border-top: none;
    }
    .gridjs-tr:last-of-type {
      border-bottom: none;
    }

    /* Headers */
    th.gridjs-th {
      position: relative;
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      background-color: rgb(var(--arc-container-color));
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-top: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      white-space: nowrap;
      outline: none;
      vertical-align: middle;
    }
    th.gridjs-th .gridjs-th-content {
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      float: left;
    }
    th.gridjs-th-fixed {
      position: sticky;
      z-index: 1;
    }
    th.gridjs-th:first-of-type {
      border-left: none;
    }
    th.gridjs-th:last-of-type {
      border-right: none;
    }
    th.gridjs-th-sort {
      cursor: pointer;
    }
    th.gridjs-th-sort .gridjs-th-content {
      width: calc(100% - 15px);
    }
    th.gridjs-th-sort:hover,
    th.gridjs-th-sort:focus {
      background-color: currentcolor;
      background-image: linear-gradient(var(--arc-hover-lighter) 0 0);
    }

    /* Data */
    td.gridjs-td {
      border-left: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-right: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      background-color: transparent;
      box-sizing: content-box;
    }
    td.gridjs-td:first-of-type {
      border-left: none;
    }
    td.gridjs-td:last-of-type {
      border-right: none;
    }

    /* Footer */
    .gridjs-footer {
      display: block;
      position: relative;
      width: 100%;
      z-index: 5;
      padding: var(--arc-spacing-small) var(--arc-spacing-medium);
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      border-top: none;
    }

    /* Error message */
    td.gridjs-message {
      color: rgb(var(--arc-grey-050));
      text-align: center;
    }

    /* Loading */
    .gridjs-loading-bar {
      z-index: 10;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: transparent;
      opacity: 0.5;
    }
    .gridjs-loading-bar::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(var(--arc-hover-dark) 0 0);
      background-repeat: no-repeat;
      display: inline-block;

      -webkit-animation-duration: 2s;
      -webkit-animation-fill-mode: forwards;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-name: shimmer;
      -webkit-animation-timing-function: linear;
    }

    @-webkit-keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }

    /* PLUGINS */
    /* Search filter */
    .gridjs-search {
      float: left;
    }
    .gridjs-search-input {
      width: 18.5rem;
    }
    input.gridjs-input {
      outline: none;
      color: inherit;
      background-color: transparent;
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      padding: var(--arc-spacing-x-small) var(--arc-spacing-normal);
      line-height: inherit;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    input.gridjs-input:focus {
      box-shadow: var(--arc-box-shadow);
      border-color: rgb(var(--arc-color-info));
    }

    /* Sorting icon */
    button.gridjs-sort {
      float: right;
      height: 24px;
      width: 13px;
      background-color: rgb(var(--arc-font-color));
      background-repeat: no-repeat;
      background-position-x: center;
      background-size: contain;
      cursor: pointer;
      border: none;
      outline: none;
    }
    button.gridjs-sort-neutral {
      opacity: 0.3;
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z'/%3E%3C/svg%3E");
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z'/%3E%3C/svg%3E");
    }
    button.gridjs-sort-asc {
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M0 21l12-18 12 18z'/%3E%3C/svg%3E")
        no-repeat 50% 35%;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M0 21l12-18 12 18z'/%3E%3C/svg%3E")
        no-repeat 50% 35%;
    }
    button.gridjs-sort-desc {
      -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M24 3l-12 18-12-18z'/%3E%3C/svg%3E")
        no-repeat 50% 65%;
      mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='8' fill='currentColor' stroke='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M24 3l-12 18-12-18z'/%3E%3C/svg%3E")
        no-repeat 50% 65%;
    }
    button.gridjs-sort:focus {
      outline: none;
    }

    /* Resizable */
    .gridjs-resizable {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 3px;
    }
    .gridjs-resizable:hover {
      cursor: ew-resize;
      background-color: rgb(var(--arc-color-info));
    }

    /* Row selection */
    .gridjs-td .gridjs-checkbox {
      display: block;
      margin: auto;
      cursor: pointer;
    }

    /* Pagination */
    .gridjs-pagination,
    .gridjs-pagination .gridjs-pages {
      display: flex;
      align-items: center;
    }
    .gridjs-pagination {
      justify-content: space-between;
    }
    .gridjs-pagination .gridjs-pages {
      margin-left: auto;
    }
    .gridjs-pagination .gridjs-pages button {
      cursor: pointer;
      padding: var(--arc-spacing-x-small) var(--arc-spacing-small);
      border: none;
      color: inherit;
      background-color: transparent;
      outline: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .gridjs-pagination .gridjs-pages button.gridjs-currentPage {
      border-bottom: calc(var(--arc-border-width) * 2) var(--arc-border-style) currentColor;
    }
    .gridjs-pagination .gridjs-pages button:hover,
    .gridjs-pagination .gridjs-pages button:focus-visible {
      background-color: rgba(var(--arc-font-color), 10%);
    }
    .gridjs-pagination .gridjs-pages button:disabled,
    .gridjs-pagination .gridjs-pages button[disabled],
    .gridjs-pagination .gridjs-pages button:hover:disabled {
      cursor: default;
      background-color: transparent;
      color: rgb(var(--arc-grey-050));
    }
    .gridjs-pagination .gridjs-pages button.gridjs-spread {
      cursor: default;
      box-shadow: none;
      background-color: transparent;
    }
  `,
];
