export default interface AntdThemeVariables {
  "@theme"?: string;
  // The prefix to use on all css classes from ant.
  "@ant-prefix"?: string;
  // An override for the html selector for theme prefixes
  "@html-selector"?: string;
  // -------- Colors -----------
  "@primary-color"?: string;
  "@info-color"?: string;
  "@success-color"?: string;
  "@processing-color"?: string;
  "@error-color"?: string;
  "@highlight-color"?: string;
  "@warning-color"?: string;
  "@normal-color"?: string;
  "@white"?: string;
  "@black"?: string;
  // Color used by default to control hover and active backgrounds and for
  // alert info backgrounds.
  "@primary-1"?: string;  // replace tint(@primary-color, 90%)
  "@primary-2"?: string;  // replace tint(@primary-color, 80%)
  "@primary-3"?: string;  // unused
  "@primary-4"?: string;  // unused
  "@primary-5"?: string;
  "@primary-6"?: string;  // color used to control the text color of active buttons, don't use, use @primary-color
  "@primary-7"?: string;  // replace shade(@primary-color, 5%)
  "@primary-8"?: string;  // unused
  "@primary-9"?: string;  // unused
  "@primary-10"?: string;  // unused
  // Base Scaffolding Variables
  // ---
  // Background color for `<body>`
  "@body-background"?: string;
  // Base background color for most components
  "@component-background"?: string;
  // Popover background color
  "@popover-background"?: string;
  "@popover-customize-border-color"?: string;
  "@font-family"?: string;
  "@code-family"?: string;
  "@text-color"?: string;
  "@text-color-secondary"?: string;
  "@text-color-inverse"?: string;
  "@icon-color"?: string;
  "@icon-color-hover"?: string;
  "@heading-color"?: string;
  "@text-color-dark"?: string;
  "@text-color-secondary-dark"?: string;
  "@text-selection-bg"?: string;
  "@font-variant-base"?: string;
  "@font-feature-settings-base"?: string;
  "@font-size-base"?: string;
  "@font-size-lg"?: string;
  "@font-size-sm"?: string;
  "@heading-1-size"?: string;
  "@heading-2-size"?: string;
  "@heading-3-size"?: string;
  "@heading-4-size"?: string;
  "@heading-5-size"?: string;
  // https://github.com/ant-design/ant-design/issues/20210
  "@line-height-base"?: string;
  "@border-radius-base"?: string;
  "@border-radius-sm"?: string;
  // vertical paddings
  "@padding-lg"?: string;  // containers
  "@padding-md"?: string;  // small containers and buttons
  "@padding-sm"?: string;  // Form controls and items
  "@padding-xs"?: string;  // small items
  "@padding-xss"?: string;  // more small
  // vertical padding for all form controls
  "@control-padding-horizontal"?: string;
  "@control-padding-horizontal-sm"?: string;
  // vertical margins
  "@margin-lg"?: string;  // containers
  "@margin-md"?: string;  // small containers and buttons
  "@margin-sm"?: string;  // Form controls and items
  "@margin-xs"?: string;  // small items
  "@margin-xss"?: string;  // more small
  // height rules
  "@height-base"?: string;
  "@height-lg"?: string;
  "@height-sm"?: string;
  // The background colors for active and hover states for things like
  // list items or table cells.
  "@item-active-bg"?: string;
  "@item-hover-bg"?: string;
  // ICONFONT
  "@iconfont-css-prefix"?: string;
  // LINK
  "@link-color"?: string;
  "@link-hover-color"?: string;
  "@link-active-color"?: string;
  "@link-decoration"?: string;
  "@link-hover-decoration"?: string;
  "@link-focus-decoration"?: string;
  "@link-focus-outline"?: string;
  // Animation
  "@ease-base-out"?: string;
  "@ease-base-in"?: string;
  "@ease-out"?: string;
  "@ease-in"?: string;
  "@ease-in-out"?: string;
  "@ease-out-back"?: string;
  "@ease-in-back"?: string;
  "@ease-in-out-back"?: string;
  "@ease-out-circ"?: string;
  "@ease-in-circ"?: string;
  "@ease-in-out-circ"?: string;
  "@ease-out-quint"?: string;
  "@ease-in-quint"?: string;
  "@ease-in-out-quint"?: string;
  // Border color
  "@border-color-base"?: string;  // base border outline a component
  "@border-color-split"?: string;  // split border inside a component
  "@border-color-inverse"?: string;
  "@border-width-base"?: string;  // width of the border for a component
  "@border-style-base"?: string;  // style of a components border
  // Outline
  "@outline-blur-size"?: string;
  "@outline-width"?: string;
  "@outline-color"?: string;
  "@outline-fade"?: string;
  "@background-color-light"?: string;  // background of header and selected item
  "@background-color-base"?: string;  // Default grey background color
  // Disabled states
  "@disabled-color"?: string;
  "@disabled-bg"?: string;
  "@disabled-color-dark"?: string;
  // Shadow
  "@shadow-color"?: string;
  "@shadow-color-inverse"?: string;
  "@box-shadow-base"?: string;
  "@shadow-1-up"?: string;
  "@shadow-1-down"?: string;
  "@shadow-1-left"?: string;
  "@shadow-1-right"?: string;
  "@shadow-2"?: string;
  // Buttons
  "@btn-font-weight"?: string;
  "@btn-border-radius-base"?: string;
  "@btn-border-radius-sm"?: string;
  "@btn-border-width"?: string;
  "@btn-border-style"?: string;
  "@btn-shadow"?: string;
  "@btn-primary-shadow"?: string;
  "@btn-text-shadow"?: string;
  "@btn-primary-color"?: string;
  "@btn-primary-bg"?: string;
  "@btn-default-color"?: string;
  "@btn-default-bg"?: string;
  "@btn-default-border"?: string;
  "@btn-danger-color"?: string;
  "@btn-danger-bg"?: string;
  "@btn-danger-border"?: string;
  "@btn-disable-color"?: string;
  "@btn-disable-bg"?: string;
  "@btn-disable-border"?: string;
  "@btn-default-ghost-color"?: string;
  "@btn-default-ghost-bg"?: string;
  "@btn-default-ghost-border"?: string;
  "@btn-font-size-lg"?: string;
  "@btn-font-size-sm"?: string;
  "@btn-padding-horizontal-base"?: string;
  "@btn-padding-horizontal-lg"?: string;
  "@btn-padding-horizontal-sm"?: string;
  "@btn-height-base"?: string;
  "@btn-height-lg"?: string;
  "@btn-height-sm"?: string;
  "@btn-line-height"?: string;
  "@btn-circle-size"?: string;
  "@btn-circle-size-lg"?: string;
  "@btn-circle-size-sm"?: string;
  "@btn-square-size"?: string;
  "@btn-square-size-lg"?: string;
  "@btn-square-size-sm"?: string;
  "@btn-square-only-icon-size"?: string;
  "@btn-square-only-icon-size-sm"?: string;
  "@btn-square-only-icon-size-lg"?: string;
  "@btn-group-border"?: string;
  "@btn-link-hover-bg"?: string;
  "@btn-text-hover-bg"?: string;
  // Checkbox
  "@checkbox-size"?: string;
  "@checkbox-color"?: string;
  "@checkbox-check-color"?: string;
  "@checkbox-check-bg"?: string;
  "@checkbox-border-width"?: string;
  "@checkbox-group-item-margin-right"?: string;
  // Descriptions
  "@descriptions-bg"?: string;
  "@descriptions-title-margin-bottom"?: string;
  "@descriptions-default-padding"?: string;
  "@descriptions-middle-padding"?: string;
  "@descriptions-small-padding"?: string;
  "@descriptions-item-padding-bottom"?: string;
  "@descriptions-item-trailing-colon"?: string;
  "@descriptions-item-label-colon-margin-right"?: string;
  "@descriptions-item-label-colon-margin-left"?: string;
  "@descriptions-extra-color"?: string;
  // Divider
  "@divider-text-padding"?: string;
  "@divider-orientation-margin"?: string;
  "@divider-color"?: string;
  // Dropdown
  "@dropdown-selected-color"?: string;
  "@dropdown-menu-submenu-disabled-bg"?: string;
  // Empty
  "@empty-font-size"?: string;
  // Radio
  "@radio-size"?: string;
  "@radio-top"?: string;
  "@radio-dot-color"?: string;
  "@radio-dot-disabled-color"?: string;
  "@radio-solid-checked-color"?: string;
  // Radio buttons
  "@radio-button-bg"?: string;
  "@radio-button-checked-bg"?: string;
  "@radio-button-color"?: string;
  "@radio-button-hover-color"?: string;
  "@radio-button-active-color"?: string;
  "@radio-disabled-button-checked-bg"?: string;
  "@radio-disabled-button-checked-color"?: string;
  "@radio-wrapper-margin-right"?: string;
  // Media queries breakpoints
  // Extra small screen / phone
  "@screen-xs"?: string;
  "@screen-xs-min"?: string;
  // Small screen / tablet
  "@screen-sm"?: string;
  "@screen-sm-min"?: string;
  // Medium screen / desktop
  "@screen-md"?: string;
  "@screen-md-min"?: string;
  // Large screen / wide desktop
  "@screen-lg"?: string;
  "@screen-lg-min"?: string;
  // Extra large screen / full hd
  "@screen-xl"?: string;
  "@screen-xl-min"?: string;
  // Extra extra large screen / large desktop
  "@screen-xxl"?: string;
  "@screen-xxl-min"?: string;
  // provide a maximum
  "@screen-xs-max"?: string;
  "@screen-sm-max"?: string;
  "@screen-md-max"?: string;
  "@screen-lg-max"?: string;
  "@screen-xl-max"?: string;
  // Grid system
  "@grid-columns"?: string;
  // Layout
  "@layout-body-background"?: string;
  "@layout-header-background"?: string;
  "@layout-header-height"?: string;
  "@layout-header-padding"?: string;
  "@layout-header-color"?: string;
  "@layout-footer-padding"?: string;
  "@layout-footer-background"?: string;
  "@layout-sider-background"?: string;
  "@layout-trigger-height"?: string;
  "@layout-trigger-background"?: string;
  "@layout-trigger-color"?: string;
  "@layout-zero-trigger-width"?: string;
  "@layout-zero-trigger-height"?: string;
  // Layout light theme
  "@layout-sider-background-light"?: string;
  "@layout-trigger-background-light"?: string;
  "@layout-trigger-color-light"?: string;
  // z-index list, order by `z-index`
  "@zindex-badge"?: string;
  "@zindex-table-fixed"?: string;
  "@zindex-affix"?: string;
  "@zindex-back-top"?: string;
  "@zindex-picker-panel"?: string;
  "@zindex-popup-close"?: string;
  "@zindex-modal"?: string;
  "@zindex-modal-mask"?: string;
  "@zindex-message"?: string;
  "@zindex-notification"?: string;
  "@zindex-popover"?: string;
  "@zindex-dropdown"?: string;
  "@zindex-picker"?: string;
  "@zindex-popoconfirm"?: string;
  "@zindex-tooltip"?: string;
  "@zindex-image"?: string;
  // Animation
  "@animation-duration-slow"?: string;  // Modal
  "@animation-duration-base"?: string;
  "@animation-duration-fast"?: string;  // Tooltip
  //CollapsePanel
  "@collapse-panel-border-radius"?: string;
  //Dropdown
  "@dropdown-menu-bg"?: string;
  "@dropdown-vertical-padding"?: string;
  "@dropdown-edge-child-vertical-padding"?: string;
  "@dropdown-font-size"?: string;
  "@dropdown-line-height"?: string;
  // Form
  // ---
  "@label-required-color"?: string;
  "@label-color"?: string;
  "@form-warning-input-bg"?: string;
  "@form-item-margin-bottom"?: string;
  "@form-item-trailing-colon"?: string;
  "@form-vertical-label-padding"?: string;
  "@form-vertical-label-margin"?: string;
  "@form-item-label-font-size"?: string;
  "@form-item-label-height"?: string;
  "@form-item-label-colon-margin-right"?: string;
  "@form-item-label-colon-margin-left"?: string;
  "@form-error-input-bg"?: string;
  // Input
  // ---
  "@input-height-base"?: string;
  "@input-height-lg"?: string;
  "@input-height-sm"?: string;
  "@input-padding-horizontal"?: string;
  "@input-padding-horizontal-base"?: string;
  "@input-padding-horizontal-sm"?: string;
  "@input-padding-horizontal-lg"?: string;
  "@input-padding-vertical-base"?: string;
  "@input-padding-vertical-sm"?: string;
  "@input-padding-vertical-lg"?: string;
  "@input-placeholder-color"?: string;
  "@input-color"?: string;
  "@input-icon-color"?: string;
  "@input-border-color"?: string;
  "@input-bg"?: string;
  "@input-number-hover-border-color"?: string;
  "@input-number-handler-active-bg"?: string;
  "@input-number-handler-hover-bg"?: string;
  "@input-number-handler-bg"?: string;
  "@input-number-handler-border-color"?: string;
  "@input-addon-bg"?: string;
  "@input-hover-border-color"?: string;
  "@input-disabled-bg"?: string;
  "@input-outline-offset"?: string;
  "@input-icon-hover-color"?: string;
  "@input-disabled-color"?: string;
  // Mentions
  // ---
  "@mentions-dropdown-bg"?: string;
  "@mentions-dropdown-menu-item-hover-bg"?: string;
  // Select
  // ---
  "@select-border-color"?: string;
  "@select-item-selected-color"?: string;
  "@select-item-selected-font-weight"?: string;
  "@select-dropdown-bg"?: string;
  "@select-item-selected-bg"?: string;
  "@select-item-active-bg"?: string;
  "@select-dropdown-vertical-padding"?: string;
  "@select-dropdown-font-size"?: string;
  "@select-dropdown-line-height"?: string;
  "@select-dropdown-height"?: string;
  "@select-background"?: string;
  "@select-clear-background"?: string;
  "@select-selection-item-bg"?: string;
  "@select-selection-item-border-color"?: string;
  "@select-single-item-height-lg"?: string;
  "@select-multiple-item-height"?: string;  // Normal 24px
  "@select-multiple-item-height-lg"?: string;
  "@select-multiple-item-spacing-half"?: string;
  "@select-multiple-disabled-background"?: string;
  "@select-multiple-item-disabled-color"?: string;
  "@select-multiple-item-disabled-border-color"?: string;
  // Cascader
  // ---
  "@cascader-bg"?: string;
  "@cascader-item-selected-bg"?: string;
  "@cascader-menu-bg"?: string;
  "@cascader-menu-border-color-split"?: string;
  // Cascader
  // ----
  "@cascader-dropdown-vertical-padding"?: string;
  "@cascader-dropdown-edge-child-vertical-padding"?: string;
  "@cascader-dropdown-font-size"?: string;
  "@cascader-dropdown-line-height"?: string;
  // Anchor
  // ---
  "@anchor-bg"?: string;
  "@anchor-border-color"?: string;
  "@anchor-link-top"?: string;
  "@anchor-link-left"?: string;
  "@anchor-link-padding"?: string;
  // Tooltip
  // ---
  // Tooltip max width
  "@tooltip-max-width"?: string;
  // Tooltip text color
  "@tooltip-color"?: string;
  // Tooltip background color
  "@tooltip-bg"?: string;
  // Tooltip arrow width
  "@tooltip-arrow-width"?: string;
  // Tooltip distance with trigger
  "@tooltip-distance"?: string;
  // Tooltip arrow color
  "@tooltip-arrow-color"?: string;
  // Popover
  // ---
  // Popover body background color
  "@popover-bg"?: string;
  // Popover text color
  "@popover-color"?: string;
  // Popover maximum width
  "@popover-min-width"?: string;
  "@popover-min-height"?: string;
  // Popover arrow width
  "@popover-arrow-width"?: string;
  // Popover arrow color
  "@popover-arrow-color"?: string;
  // Popover outer arrow width
  // Popover outer arrow color
  "@popover-arrow-outer-color"?: string;
  // Popover distance with trigger
  "@popover-distance"?: string;
  "@popover-padding-horizontal"?: string;
  // Modal
  // --
  "@modal-header-padding-vertical"?: string;
  "@modal-header-padding-horizontal"?: string;
  "@modal-body-padding"?: string;
  "@modal-header-bg"?: string;
  "@modal-header-padding"?: string;
  "@modal-header-border-width"?: string;
  "@modal-header-border-style"?: string;
  "@modal-header-title-line-height"?: string;
  "@modal-header-title-font-size"?: string;
  "@modal-header-border-color-split"?: string;
  "@modal-header-close-size"?: string;
  "@modal-content-bg"?: string;
  "@modal-heading-color"?: string;
  "@modal-close-color"?: string;
  "@modal-footer-bg"?: string;
  "@modal-footer-border-color-split"?: string;
  "@modal-footer-border-style"?: string;
  "@modal-footer-padding-vertical"?: string;
  "@modal-footer-padding-horizontal"?: string;
  "@modal-footer-border-width"?: string;
  "@modal-mask-bg"?: string;
  "@modal-confirm-body-padding"?: string;
  // Progress
  // --
  "@progress-default-color"?: string;
  "@progress-remaining-color"?: string;
  "@progress-text-color"?: string;
  "@progress-radius"?: string;
  "@progress-steps-item-bg"?: string;
  "@progress-text-font-size"?: string;
  "@progress-circle-text-font-size"?: string;
  // Menu
  // ---
  "@menu-inline-toplevel-item-height"?: string;
  "@menu-item-height"?: string;
  "@menu-item-group-height"?: string;
  "@menu-collapsed-width"?: string;
  "@menu-bg"?: string;
  "@menu-popup-bg"?: string;
  "@menu-item-color"?: string;
  "@menu-highlight-color"?: string;
  "@menu-highlight-danger-color"?: string;
  "@menu-item-active-bg"?: string;
  "@menu-item-active-danger-bg"?: string;
  "@menu-item-active-border-width"?: string;
  "@menu-item-group-title-color"?: string;
  "@menu-item-vertical-margin"?: string;
  "@menu-item-font-size"?: string;
  "@menu-item-boundary-margin"?: string;
  "@menu-item-padding"?: string;
  "@menu-horizontal-line-height"?: string;
  "@menu-icon-margin-right"?: string;
  "@menu-icon-size"?: string;
  "@menu-icon-size-lg"?: string;
  "@menu-item-group-title-font-size"?: string;
  // dark theme
  "@menu-dark-color"?: string;
  "@menu-dark-danger-color"?: string;
  "@menu-dark-bg"?: string;
  "@menu-dark-arrow-color"?: string;
  "@menu-dark-submenu-bg"?: string;
  "@menu-dark-highlight-color"?: string;
  "@menu-dark-item-active-bg"?: string;
  "@menu-dark-item-active-danger-bg"?: string;
  "@menu-dark-selected-item-icon-color"?: string;
  "@menu-dark-selected-item-text-color"?: string;
  "@menu-dark-item-hover-bg"?: string;
  // Spin
  // ---
  "@spin-dot-size-sm"?: string;
  "@spin-dot-size"?: string;
  "@spin-dot-size-lg"?: string;
  // Table
  // --
  "@table-bg"?: string;
  "@table-header-bg"?: string;
  "@table-header-color"?: string;
  "@table-header-sort-bg"?: string;
  "@table-body-sort-bg"?: string;
  "@table-row-hover-bg"?: string;
  "@table-selected-row-color"?: string;
  "@table-selected-row-bg"?: string;
  "@table-body-selected-sort-bg"?: string;
  "@table-selected-row-hover-bg"?: string;
  "@table-expanded-row-bg"?: string;
  "@table-padding-vertical"?: string;
  "@table-padding-horizontal"?: string;
  "@table-padding-vertical-md"?: string;
  "@table-padding-horizontal-md"?: string;
  "@table-padding-vertical-sm"?: string;
  "@table-padding-horizontal-sm"?: string;
  "@table-border-radius-base"?: string;
  "@table-footer-bg"?: string;
  "@table-footer-color"?: string;
  "@table-header-bg-sm"?: string;
  "@table-font-size"?: string;
  "@table-font-size-md"?: string;
  "@table-font-size-sm"?: string;
  // Sorter
  // Legacy: `table-header-sort-active-bg` is used for hover not real active
  "@table-header-sort-active-bg"?: string;
  // Filter
  "@table-header-filter-active-bg"?: string;
  "@table-filter-btns-bg"?: string;
  "@table-filter-dropdown-bg"?: string;
  "@table-expand-icon-bg"?: string;
  "@table-selection-column-width"?: string;
  "@table-selection-extra-right"?: string;
  // Sticky
  "@table-sticky-scroll-bar-bg"?: string;
  "@table-sticky-scroll-bar-radius"?: string;
  // Tag
  // --
  "@tag-default-bg"?: string;
  "@tag-default-color"?: string;
  "@tag-font-size"?: string;
  "@tag-line-height"?: string;
  // TimePicker
  // ---
  "@picker-bg"?: string;
  "@picker-basic-cell-hover-color"?: string;
  "@picker-basic-cell-active-with-range-color"?: string;
  "@picker-basic-cell-hover-with-range-color"?: string;
  "@picker-basic-cell-disabled-bg"?: string;
  "@picker-border-color"?: string;
  "@picker-date-hover-range-border-color"?: string;
  "@picker-date-hover-range-color"?: string;
  "@picker-time-panel-cell-height"?: string;
  "@picker-panel-cell-height"?: string;
  "@picker-panel-cell-width"?: string;
  "@picker-text-height"?: string;
  "@picker-panel-without-time-cell-height"?: string;
  // Calendar
  // ---
  "@calendar-bg"?: string;
  "@calendar-input-bg"?: string;
  "@calendar-border-color"?: string;
  "@calendar-item-active-bg"?: string;
  "@calendar-full-bg"?: string;
  "@calendar-full-panel-bg"?: string;
  // Carousel
  // ---
  "@carousel-dot-width"?: string;
  "@carousel-dot-height"?: string;
  "@carousel-dot-active-width"?: string;
  // Badge
  // ---
  "@badge-height"?: string;
  "@badge-height-sm"?: string;
  "@badge-dot-size"?: string;
  "@badge-font-size"?: string;
  "@badge-font-size-sm"?: string;
  "@badge-font-weight"?: string;
  "@badge-status-size"?: string;
  "@badge-text-color"?: string;
  "@badge-color"?: string;
  // Rate
  // ---
  "@rate-star-color"?: string;
  "@rate-star-bg"?: string;
  "@rate-star-size"?: string;
  "@rate-star-hover-scale"?: string;
  // Card
  // ---
  "@card-head-color"?: string;
  "@card-head-background"?: string;
  "@card-head-font-size"?: string;
  "@card-head-font-size-sm"?: string;
  "@card-head-padding"?: string;
  "@card-head-padding-sm"?: string;
  "@card-head-height"?: string;
  "@card-head-height-sm"?: string;
  "@card-inner-head-padding"?: string;
  "@card-padding-base"?: string;
  "@card-padding-base-sm"?: string;
  "@card-actions-background"?: string;
  "@card-actions-li-margin"?: string;
  "@card-skeleton-bg"?: string;
  "@card-background"?: string;
  "@card-shadow"?: string;
  "@card-radius"?: string;
  "@card-head-tabs-margin-bottom"?: string;
  "@card-head-extra-color"?: string;
  // Comment
  // ---
  "@comment-bg"?: string;
  "@comment-padding-base"?: string;
  "@comment-nest-indent"?: string;
  "@comment-font-size-base"?: string;
  "@comment-font-size-sm"?: string;
  "@comment-author-name-color"?: string;
  "@comment-author-time-color"?: string;
  "@comment-action-color"?: string;
  "@comment-action-hover-color"?: string;
  "@comment-actions-margin-bottom"?: string;
  "@comment-actions-margin-top"?: string;
  "@comment-content-detail-p-margin-bottom"?: string;
  // Tabs
  // ---
  "@tabs-card-head-background"?: string;
  "@tabs-card-height"?: string;
  "@tabs-card-active-color"?: string;
  "@tabs-card-horizontal-padding"?: string;
  "@tabs-card-horizontal-padding-sm"?: string;
  "@tabs-card-horizontal-padding-lg"?: string;
  "@tabs-title-font-size"?: string;
  "@tabs-title-font-size-lg"?: string;
  "@tabs-title-font-size-sm"?: string;
  "@tabs-ink-bar-color"?: string;
  "@tabs-bar-margin"?: string;
  "@tabs-horizontal-margin"?: string;
  "@tabs-horizontal-margin-rtl"?: string;
  "@tabs-horizontal-padding"?: string;
  "@tabs-horizontal-padding-lg"?: string;
  "@tabs-horizontal-padding-sm"?: string;
  "@tabs-vertical-padding"?: string;
  "@tabs-vertical-margin"?: string;
  "@tabs-scrolling-size"?: string;
  "@tabs-highlight-color"?: string;
  "@tabs-hover-color"?: string;
  "@tabs-active-color"?: string;
  "@tabs-card-gutter"?: string;
  "@tabs-card-tab-active-border-top"?: string;
  // BackTop
  // ---
  "@back-top-color"?: string;
  "@back-top-bg"?: string;
  "@back-top-hover-bg"?: string;
  // Avatar
  // ---
  "@avatar-size-base"?: string;
  "@avatar-size-lg"?: string;
  "@avatar-size-sm"?: string;
  "@avatar-font-size-base"?: string;
  "@avatar-font-size-lg"?: string;
  "@avatar-font-size-sm"?: string;
  "@avatar-bg"?: string;
  "@avatar-color"?: string;
  "@avatar-border-radius"?: string;
  "@avatar-group-overlapping"?: string;
  "@avatar-group-space"?: string;
  "@avatar-group-border-color"?: string;
  // Switch
  // ---
  "@switch-height"?: string;
  "@switch-sm-height"?: string;
  "@switch-min-width"?: string;
  "@switch-sm-min-width"?: string;
  "@switch-disabled-opacity"?: string;
  "@switch-color"?: string;
  "@switch-bg"?: string;
  "@switch-shadow-color"?: string;
  "@switch-padding"?: string;
  "@switch-inner-margin-min"?: string;
  "@switch-inner-margin-max"?: string;
  "@switch-sm-inner-margin-min"?: string;
  "@switch-sm-inner-margin-max"?: string;
  // Pagination
  // ---
  "@pagination-item-bg"?: string;
  "@pagination-item-size"?: string;
  "@pagination-item-size-sm"?: string;
  "@pagination-font-family"?: string;
  "@pagination-font-weight-active"?: string;
  "@pagination-item-bg-active"?: string;
  "@pagination-item-link-bg"?: string;
  "@pagination-item-disabled-color-active"?: string;
  "@pagination-item-disabled-bg-active"?: string;
  "@pagination-item-input-bg"?: string;
  "@pagination-mini-options-size-changer-top"?: string;
  // PageHeader
  // ---
  "@page-header-padding"?: string;
  "@page-header-padding-vertical"?: string;
  "@page-header-padding-breadcrumb"?: string;
  "@page-header-content-padding-vertical"?: string;
  "@page-header-back-color"?: string;
  "@page-header-ghost-bg"?: string;
  "@page-header-heading-title"?: string;
  "@page-header-heading-sub-title"?: string;
  "@page-header-tabs-tab-font-size"?: string;
  // Breadcrumb
  // ---
  "@breadcrumb-base-color"?: string;
  "@breadcrumb-last-item-color"?: string;
  "@breadcrumb-font-size"?: string;
  "@breadcrumb-icon-font-size"?: string;
  "@breadcrumb-link-color"?: string;
  "@breadcrumb-link-color-hover"?: string;
  "@breadcrumb-separator-color"?: string;
  "@breadcrumb-separator-margin"?: string;
  // Slider
  // ---
  "@slider-margin"?: string;
  "@slider-rail-background-color"?: string;
  "@slider-rail-background-color-hover"?: string;
  "@slider-track-background-color"?: string;
  "@slider-track-background-color-hover"?: string;
  "@slider-handle-border-width"?: string;
  "@slider-handle-background-color"?: string;
  "@slider-handle-color"?: string;
  "@slider-handle-color-hover"?: string;
  "@slider-handle-color-focus"?: string;
  "@slider-handle-color-focus-shadow"?: string;
  "@slider-handle-color-tooltip-open"?: string;
  "@slider-handle-size"?: string;
  "@slider-handle-margin-top"?: string;
  "@slider-handle-shadow"?: string;
  "@slider-dot-border-color"?: string;
  "@slider-dot-border-color-active"?: string;
  "@slider-disabled-color"?: string;
  "@slider-disabled-background-color"?: string;
  // Tree
  // ---
  "@tree-bg"?: string;
  "@tree-title-height"?: string;
  "@tree-child-padding"?: string;
  "@tree-directory-selected-color"?: string;
  "@tree-directory-selected-bg"?: string;
  "@tree-node-hover-bg"?: string;
  "@tree-node-selected-bg"?: string;
  // Collapse
  // ---
  "@collapse-header-padding"?: string;
  "@collapse-header-padding-extra"?: string;
  "@collapse-header-bg"?: string;
  "@collapse-content-padding"?: string;
  "@collapse-content-bg"?: string;
  "@collapse-header-arrow-left"?: string;
  // Skeleton
  // ---
  "@skeleton-color"?: string;
  "@skeleton-to-color"?: string;
  "@skeleton-paragraph-margin-top"?: string;
  "@skeleton-paragraph-li-margin-top"?: string;
  "@skeleton-paragraph-li-height"?: string;
  "@skeleton-title-height"?: string;
  "@skeleton-title-paragraph-margin-top"?: string;
  // Transfer
  // ---
  "@transfer-header-height"?: string;
  "@transfer-item-height"?: string;
  "@transfer-disabled-bg"?: string;
  "@transfer-list-height"?: string;
  "@transfer-item-hover-bg"?: string;
  "@transfer-item-padding-vertical"?: string;
  "@transfer-list-search-icon-top"?: string;
  // Message
  // ---
  "@message-notice-content-padding"?: string;
  "@message-notice-content-bg"?: string;
  // Motion
  // ---
  "@wave-animation-width"?: string;
  // Alert
  // ---
  "@alert-success-border-color"?: string;
  "@alert-success-bg-color"?: string;
  "@alert-success-icon-color"?: string;
  "@alert-info-border-color"?: string;
  "@alert-info-bg-color"?: string;
  "@alert-info-icon-color"?: string;
  "@alert-warning-border-color"?: string;
  "@alert-warning-bg-color"?: string;
  "@alert-warning-icon-color"?: string;
  "@alert-error-border-color"?: string;
  "@alert-error-bg-color"?: string;
  "@alert-error-icon-color"?: string;
  "@alert-message-color"?: string;
  "@alert-text-color"?: string;
  "@alert-close-color"?: string;
  "@alert-close-hover-color"?: string;
  "@alert-no-icon-padding-vertical"?: string;
  "@alert-with-description-no-icon-padding-vertical"?: string;
  "@alert-with-description-padding-vertical"?: string;
  "@alert-with-description-padding"?: string;
  "@alert-icon-top"?: string;
  "@alert-with-description-icon-size"?: string;
  "@alert-with-description-icon-top"?: string;
  // List
  // ---
  "@list-header-background"?: string;
  "@list-footer-background"?: string;
  "@list-empty-text-padding"?: string;
  "@list-item-padding"?: string;
  "@list-item-padding-sm"?: string;
  "@list-item-padding-lg"?: string;
  "@list-item-meta-margin-bottom"?: string;
  "@list-item-meta-avatar-margin-right"?: string;
  "@list-item-meta-title-margin-bottom"?: string;
  "@list-customize-card-bg"?: string;
  "@list-item-meta-description-font-size"?: string;
  // Statistic
  // ---
  "@statistic-title-font-size"?: string;
  "@statistic-content-font-size"?: string;
  "@statistic-unit-font-size"?: string;
  "@statistic-font-family"?: string;
  // Drawer
  // ---
  "@drawer-header-padding"?: string;
  "@drawer-body-padding"?: string;
  "@drawer-bg"?: string;
  "@drawer-footer-padding-vertical"?: string;
  "@drawer-footer-padding-horizontal"?: string;
  "@drawer-header-close-size"?: string;
  // Timeline
  // ---
  "@timeline-width"?: string;
  "@timeline-color"?: string;
  "@timeline-dot-border-width"?: string;
  "@timeline-dot-color"?: string;
  "@timeline-dot-bg"?: string;
  "@timeline-item-padding-bottom"?: string;
  // Typography
  // ---
  "@typography-title-font-weight"?: string;
  "@typography-title-margin-top"?: string;
  "@typography-title-margin-bottom"?: string;
  // Upload
  // ---
  "@upload-actions-color"?: string;
  // Steps
  // ---
  "@process-tail-color"?: string;
  "@steps-nav-arrow-color"?: string;
  "@steps-background"?: string;
  "@steps-icon-size"?: string;
  "@steps-icon-custom-size"?: string;
  "@steps-icon-custom-top"?: string;
  "@steps-icon-custom-font-size"?: string;
  "@steps-icon-top"?: string;
  "@steps-icon-font-size"?: string;
  "@steps-icon-margin"?: string;
  "@steps-title-line-height"?: string;
  "@steps-small-icon-size"?: string;
  "@steps-small-icon-margin"?: string;
  "@steps-dot-size"?: string;
  "@steps-dot-top"?: string;
  "@steps-current-dot-size"?: string;
  "@steps-desciption-max-width"?: string;
  "@steps-nav-content-max-width"?: string;
  "@steps-vertical-icon-width"?: string;
  "@steps-vertical-tail-width"?: string;
  "@steps-vertical-tail-width-sm"?: string;
  // Notification
  // ---
  "@notification-bg"?: string;
  "@notification-padding-vertical"?: string;
  "@notification-padding-horizontal"?: string;
  //  Result
  // ---
  "@result-title-font-size"?: string;
  "@result-subtitle-font-size"?: string;
  "@result-icon-font-size"?: string;
  "@result-extra-margin"?: string;
  // Image
  // ---
  "@image-size-base"?: string;
  "@image-font-size-base"?: string;
  "@image-bg"?: string;
  "@image-color"?: string;
  "@image-preview-operation-size"?: string;
  "@image-preview-operation-color"?: string;
  "@image-preview-operation-disabled-color"?: string;
}