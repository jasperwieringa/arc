import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default [
  componentStyles,
  css`
    #main {
      display: flex;
      flex-direction: column;
      height: inherit;
      min-height: inherit;
      max-height: inherit;
      position: relative;
    }

    /* Hide the input */
    #input {
      cursor: inherit;
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      z-index: -1;
    }

    #editor {
      height: 100%;
      min-height: 8rem;
      max-height: inherit;
      overflow: auto;
    }

    #status {
      display: flex;
      align-self: end;
      margin-top: var(--arc-spacing-x-small);
      gap: var(--arc-spacing-normal);
      color: rgb(var(--arc-grey-050));
    }

    .ql-container {
      box-sizing: border-box;
      height: inherit;
      min-height: inherit;
      margin: 0;
      position: relative;
    }

    .ql-container.ql-disabled .ql-tooltip {
      visibility: hidden;
    }

    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
      pointer-events: none;
    }

    .ql-clipboard {
      left: -100000px;
      height: 1px;
      overflow-y: hidden;
      position: absolute;
      top: 50%;
    }

    .ql-clipboard p {
      margin: 0;
      padding: 0;
    }

    .ql-editor {
      box-sizing: border-box;
      height: 100%;
      min-height: inherit;
      outline: none;
      overflow-y: auto;
      padding: 12px 15px;
      tab-size: 4;
      -moz-tab-size: 4;
      text-align: left;
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    .ql-editor > * {
      cursor: text;
    }

    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
      margin: 0;
      padding: 0;
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }

    .ql-editor ol > li,
    .ql-editor ul > li {
      list-style-type: none;
    }

    .ql-editor ul > li::before {
      content: '\\2022';
    }

    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
      pointer-events: none;
    }

    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
      pointer-events: all;
    }

    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
      color: #777;
      cursor: pointer;
      pointer-events: all;
    }

    .ql-editor ul[data-checked='true'] > li::before {
      content: '\\2611';
    }

    .ql-editor ul[data-checked='false'] > li::before {
      content: '\\2610';
    }

    .ql-editor li::before {
      display: inline-block;
      white-space: nowrap;
      width: 1.2em;
    }

    .ql-editor li:not(.ql-direction-rtl)::before {
      margin-left: -1.5em;
      margin-right: 0.3em;
      text-align: right;
    }

    .ql-editor li.ql-direction-rtl::before {
      margin-left: 0.3em;
      margin-right: -1.5em;
    }

    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
      padding-left: 1.5em;
    }

    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
      padding-right: 1.5em;
    }

    .ql-editor ol li {
      counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
      counter-increment: list-0;
    }

    .ql-editor ol li:before {
      content: counter(list-0, decimal) '. ';
    }

    .ql-editor ol li.ql-indent-1 {
      counter-increment: list-1;
    }

    .ql-editor ol li.ql-indent-1:before {
      content: counter(list-1, lower-alpha) '. ';
    }

    .ql-editor ol li.ql-indent-1 {
      counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }

    .ql-editor ol li.ql-indent-2 {
      counter-increment: list-2;
    }

    .ql-editor ol li.ql-indent-2:before {
      content: counter(list-2, lower-roman) '. ';
    }

    .ql-editor ol li.ql-indent-2 {
      counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }

    .ql-editor ol li.ql-indent-3 {
      counter-increment: list-3;
    }

    .ql-editor ol li.ql-indent-3:before {
      content: counter(list-3, decimal) '. ';
    }

    .ql-editor ol li.ql-indent-3 {
      counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }

    .ql-editor ol li.ql-indent-4 {
      counter-increment: list-4;
    }

    .ql-editor ol li.ql-indent-4:before {
      content: counter(list-4, lower-alpha) '. ';
    }

    .ql-editor ol li.ql-indent-4 {
      counter-reset: list-5 list-6 list-7 list-8 list-9;
    }

    .ql-editor ol li.ql-indent-5 {
      counter-increment: list-5;
    }

    .ql-editor ol li.ql-indent-5:before {
      content: counter(list-5, lower-roman) '. ';
    }

    .ql-editor ol li.ql-indent-5 {
      counter-reset: list-6 list-7 list-8 list-9;
    }

    .ql-editor ol li.ql-indent-6 {
      counter-increment: list-6;
    }

    .ql-editor ol li.ql-indent-6:before {
      content: counter(list-6, decimal) '. ';
    }

    .ql-editor ol li.ql-indent-6 {
      counter-reset: list-7 list-8 list-9;
    }

    .ql-editor ol li.ql-indent-7 {
      counter-increment: list-7;
    }

    .ql-editor ol li.ql-indent-7:before {
      content: counter(list-7, lower-alpha) '. ';
    }

    .ql-editor ol li.ql-indent-7 {
      counter-reset: list-8 list-9;
    }

    .ql-editor ol li.ql-indent-8 {
      counter-increment: list-8;
    }

    .ql-editor ol li.ql-indent-8:before {
      content: counter(list-8, lower-roman) '. ';
    }

    .ql-editor ol li.ql-indent-8 {
      counter-reset: list-9;
    }

    .ql-editor ol li.ql-indent-9 {
      counter-increment: list-9;
    }

    .ql-editor ol li.ql-indent-9:before {
      content: counter(list-9, decimal) '. ';
    }

    .ql-editor .ql-indent-1:not(.ql-direction-rtl) {
      padding-left: 3em;
    }

    .ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
      padding-left: 4.5em;
    }

    .ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 3em;
    }

    .ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
      padding-right: 4.5em;
    }

    .ql-editor .ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 6em;
    }

    .ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
      padding-left: 7.5em;
    }

    .ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 6em;
    }

    .ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
      padding-right: 7.5em;
    }

    .ql-editor .ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 9em;
    }

    .ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
      padding-left: 10.5em;
    }

    .ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 9em;
    }

    .ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
      padding-right: 10.5em;
    }

    .ql-editor .ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 12em;
    }

    .ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
      padding-left: 13.5em;
    }

    .ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 12em;
    }

    .ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
      padding-right: 13.5em;
    }

    .ql-editor .ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 15em;
    }

    .ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
      padding-left: 16.5em;
    }

    .ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 15em;
    }

    .ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
      padding-right: 16.5em;
    }

    .ql-editor .ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 18em;
    }

    .ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
      padding-left: 19.5em;
    }

    .ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 18em;
    }

    .ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
      padding-right: 19.5em;
    }

    .ql-editor .ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 21em;
    }

    .ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
      padding-left: 22.5em;
    }

    .ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 21em;
    }

    .ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
      padding-right: 22.5em;
    }

    .ql-editor .ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 24em;
    }

    .ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
      padding-left: 25.5em;
    }

    .ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 24em;
    }

    .ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
      padding-right: 25.5em;
    }

    .ql-editor .ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 27em;
    }

    .ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
      padding-left: 28.5em;
    }

    .ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 27em;
    }

    .ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
      padding-right: 28.5em;
    }

    .ql-editor .ql-video {
      display: block;
      max-width: 100%;
    }

    .ql-editor .ql-video.ql-align-center {
      margin: 0 auto;
    }

    .ql-editor .ql-video.ql-align-right {
      margin: 0 0 0 auto;
    }

    .ql-editor .ql-font-serif {
      font-family: Georgia, Times New Roman, serif;
    }

    .ql-editor .ql-font-monospace {
      font-family: Monaco, Courier New, monospace;
    }

    .ql-editor .ql-size-small {
      font-size: 0.75em;
    }

    .ql-editor .ql-size-large {
      font-size: 1.5em;
    }

    .ql-editor .ql-size-huge {
      font-size: 2.5em;
    }

    .ql-editor .ql-direction-rtl {
      direction: rtl;
      text-align: inherit;
    }

    .ql-editor .ql-align-center {
      text-align: center;
    }

    .ql-editor .ql-align-justify {
      text-align: justify;
    }

    .ql-editor .ql-align-right {
      text-align: right;
    }

    .ql-editor.ql-blank::before {
      color: rgba(var(--arc-grey-040));
      content: attr(data-placeholder);
      font-style: italic;
      left: 15px;
      pointer-events: none;
      position: absolute;
      right: 15px;
    }

    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
      clear: both;
      content: '';
      display: table;
    }

    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
      background: none;
      border: none;
      cursor: pointer;
      display: inline-block;
      float: left;
      height: 24px;
      padding: 3px 5px;
      width: 28px;
    }

    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
      float: left;
      height: 100%;
    }

    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
      outline: none;
    }

    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
      display: none;
    }

    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
      color: rgb(var(--arc-color-info));
    }

    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
      fill: rgb(var(--arc-color-info));
    }

    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
      stroke: rgb(var(--arc-color-info));
    }

    @media (pointer: coarse) {
      .ql-snow.ql-toolbar button:hover:not(.ql-active),
      .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
      }

      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
      }

      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
      .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
      .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
      }
    }

    .ql-snow {
      box-sizing: border-box;
    }

    .ql-snow * {
      box-sizing: border-box;
    }

    .ql-snow .ql-hidden {
      display: none;
    }

    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
      visibility: hidden;
    }

    .ql-snow .ql-tooltip {
      position: absolute;
      transform: translateY(10px);
      left: 0 !important;
    }

    .ql-snow .ql-tooltip a {
      cursor: pointer;
      text-decoration: none;
    }

    .ql-snow .ql-tooltip.ql-flip {
      transform: translateY(-10px);
    }

    .ql-snow .ql-formats {
      display: inline-block;
      vertical-align: middle;
    }

    .ql-snow .ql-formats:after {
      clear: both;
      content: '';
      display: table;
    }

    .ql-snow .ql-stroke {
      fill: none;
      stroke: rgb(var(--arc-font-color));
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
    }

    .ql-snow .ql-stroke-miter {
      fill: none;
      stroke: rgb(var(--arc-font-color));
      stroke-miterlimit: 10;
      stroke-width: 2;
    }

    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
      fill: rgb(var(--arc-font-color));
    }

    .ql-snow .ql-empty {
      fill: none;
    }

    .ql-snow .ql-even {
      fill-rule: evenodd;
    }

    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
      stroke-width: 1;
    }

    .ql-snow .ql-transparent {
      opacity: 0.4;
    }

    .ql-snow .ql-direction svg:last-child {
      display: none;
    }

    .ql-snow .ql-direction.ql-active svg:last-child {
      display: inline;
    }

    .ql-snow .ql-direction.ql-active svg:first-child {
      display: none;
    }

    .ql-snow .ql-editor h1 {
      font-size: 2em;
    }

    .ql-snow .ql-editor h2 {
      font-size: 1.5em;
    }

    .ql-snow .ql-editor h3 {
      font-size: 1.17em;
    }

    .ql-snow .ql-editor h4 {
      font-size: 1em;
    }

    .ql-snow .ql-editor h5 {
      font-size: 0.83em;
    }

    .ql-snow .ql-editor h6 {
      font-size: 0.67em;
    }

    .ql-snow .ql-editor a {
      text-decoration: underline;
    }

    .ql-snow .ql-editor blockquote {
      border-left: 4px solid #ccc;
      margin-bottom: 5px;
      margin-top: 5px;
      padding-left: var(--arc-spacing-normal);
    }

    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
      background-color: rgb(var(--arc-background-color));
      border-radius: 3px;
    }

    .ql-snow .ql-editor pre {
      white-space: pre-wrap;
      margin-bottom: 5px;
      margin-top: 5px;
      padding: 5px 10px;
    }

    .ql-snow .ql-editor code {
      font-size: 85%;
      padding: 2px 4px;
    }

    .ql-snow .ql-editor pre.ql-syntax {
      background-color: rgb(var(--arc-background-color));
      color: rgb(var(--arc-font-color));
      overflow: visible;
    }

    .ql-snow .ql-editor img {
      max-width: 100%;
    }

    .ql-snow .ql-picker {
      display: inline-block;
      float: left;
      height: 24px;
      position: relative;
      vertical-align: middle;
    }

    .ql-snow .ql-picker-label {
      cursor: pointer;
      display: inline-block;
      height: 100%;
      padding-left: var(--arc-spacing-x-small);
      padding-right: 2px;
      position: relative;
      width: 100%;
    }

    .ql-snow .ql-picker-label::before {
      display: inline-block;
      line-height: 22px;
    }

    .ql-snow .ql-picker-options {
      background-color: rgb(var(--arc-container-color));
      display: none;
      min-width: 100%;
      padding: 4px var(--arc-spacing-x-small);
      position: absolute;
      white-space: nowrap;
    }

    .ql-snow .ql-picker-options .ql-picker-item {
      cursor: pointer;
      display: block;
      padding-bottom: 5px;
      padding-top: 5px;
    }

    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
      color: #ccc;
      z-index: 2;
    }

    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
      fill: #ccc;
    }

    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
      stroke: #ccc;
    }

    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
      display: block;
      margin-top: -1px;
      top: 100%;
      z-index: 1;
    }

    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
      width: 28px;
    }

    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
      padding: 2px 4px;
    }

    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
      right: 4px;
    }

    .ql-snow .ql-icon-picker .ql-picker-options {
      padding: 4px 0;
    }

    .ql-snow .ql-icon-picker .ql-picker-item {
      height: 24px;
      width: 24px;
      padding: 2px 4px;
    }

    .ql-snow .ql-color-picker .ql-picker-options {
      padding: 3px 5px;
      width: 152px;
    }

    .ql-snow .ql-color-picker .ql-picker-item {
      border: 1px solid transparent;
      float: left;
      height: 16px;
      margin: 2px;
      padding: 0;
      width: 16px;
    }

    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
      position: absolute;
      margin-top: -9px;
      right: 0;
      top: 50%;
      width: 18px;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
      content: attr(data-label);
    }

    .ql-snow .ql-picker.ql-header {
      width: 98px;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
      content: 'Normal';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
      content: 'Heading 1';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
      content: 'Heading 2';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
      content: 'Heading 3';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
      content: 'Heading 4';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
      content: 'Heading 5';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
      content: 'Heading 6';
    }

    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
      font-size: 2em;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
      font-size: 1.5em;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
      font-size: 1.17em;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
      font-size: 1em;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
      font-size: 0.83em;
    }

    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
      font-size: 0.67em;
    }

    .ql-snow .ql-picker.ql-font {
      width: 108px;
    }

    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
      content: 'Sans Serif';
    }

    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
      content: 'Serif';
    }

    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
      content: 'Monospace';
    }

    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
      font-family: Georgia, Times New Roman, serif;
    }

    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
      font-family: Monaco, Courier New, monospace;
    }

    .ql-snow .ql-picker.ql-size {
      width: 98px;
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
      content: 'Normal';
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
      content: 'Small';
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
      content: 'Large';
    }

    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
      content: 'Huge';
    }

    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
      font-size: 10px;
    }

    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
      font-size: 18px;
    }

    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
      font-size: 32px;
    }

    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
      background-color: #fff;
    }

    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
      background-color: #000;
    }

    .ql-toolbar.ql-snow {
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      box-sizing: border-box;
      padding: var(--arc-spacing-x-small);
    }

    .ql-toolbar.ql-snow .ql-formats {
      margin-right: 15px;
    }

    .ql-toolbar.ql-snow .ql-picker-label {
      border: 1px solid transparent;
    }

    .ql-toolbar.ql-snow .ql-picker-options {
      border: 1px solid transparent;
      box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }

    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
      border-color: rgb(var(--arc-color-default));
    }

    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
      border-color: #000;
    }

    .ql-toolbar.ql-snow + .ql-container.ql-snow {
      border-top: 0;
    }

    .ql-snow .ql-tooltip {
      background-color: rgb(var(--arc-container-color));
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
      color: rgb(var(--arc-font-color));
      padding: var(--arc-spacing-x-small) var(--arc-spacing-normal);
      white-space: nowrap;
    }

    .ql-snow .ql-tooltip::before {
      content: 'Visit URL:';
      line-height: 26px;
      margin-right: var(--arc-spacing-x-small);
    }

    .ql-snow .ql-tooltip input[type='text'] {
      display: none;
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

    .ql-snow .ql-tooltip a.ql-preview {
      display: inline-block;
      max-width: 200px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
    }

    .ql-snow .ql-tooltip a.ql-action::after {
      border-right: 1px solid #ccc;
      content: 'Edit';
      margin-left: var(--arc-spacing-normal);
      padding-right: var(--arc-spacing-x-small);
    }

    .ql-snow .ql-tooltip a.ql-remove::before {
      content: 'Remove';
      margin-left: var(--arc-spacing-x-small);
    }

    .ql-snow .ql-tooltip a {
      line-height: 26px;
    }

    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
      display: none;
    }

    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
      display: inline-block;
    }

    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
      border-right: 0;
      content: 'Save';
      padding-right: 0;
    }

    .ql-snow .ql-tooltip[data-mode='link']::before {
      content: 'Enter link:';
    }

    .ql-snow .ql-tooltip[data-mode='formula']::before {
      content: 'Enter formula:';
    }

    .ql-snow .ql-tooltip[data-mode='video']::before {
      content: 'Enter video:';
    }

    .ql-snow a {
      color: rgb(var(--arc-color-info));
    }

    .ql-container.ql-snow {
      border: var(--arc-border-width) var(--arc-border-style) rgb(var(--arc-color-default));
    }
  `,
];