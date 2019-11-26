export default interface AntdThemeVariables {
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
  "@font-family"?: string;
  "@code-family"?: string;
  "@text-color"?: string;
  "@text-color-secondary"?: string;
  "@text-color-inverse"?: string;
  "@icon-color"?: string;
  "@icon-color-hover"?: string;
  "@heading-color"?: string;
  "@heading-color-dark"?: string;
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
  "@line-height-base"?: string;
  "@border-radius-base"?: string;
  "@border-radius-sm"?: string;
  // vertical paddings
  "@padding-lg"?: string;  // containers
  "@padding-md"?: string;  // small containers and buttons
  "@padding-sm"?: string;  // Form controls and items
  "@padding-xs"?: string;  // small items
  // vertical padding for all form controls
  "@control-padding-horizontal"?: string;
  "@control-padding-horizontal-sm"?: string;
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
  "@btn-padding-base"?: string;
  "@btn-font-size-lg"?: string;
  "@btn-font-size-sm"?: string;
  "@btn-padding-lg"?: string;
  "@btn-padding-sm"?: string;
  "@btn-height-base"?: string;
  "@btn-height-lg"?: string;
  "@btn-height-sm"?: string;
  "@btn-circle-size"?: string;
  "@btn-circle-size-lg"?: string;
  "@btn-circle-size-sm"?: string;
  "@btn-square-size"?: string;
  "@btn-square-size-lg"?: string;
  "@btn-square-size-sm"?: string;
  "@btn-group-border"?: string;
  // Checkbox
  "@checkbox-size"?: string;
  "@checkbox-color"?: string;
  "@checkbox-check-color"?: string;
  "@checkbox-border-width"?: string;
  // Descriptions
  "@descriptions-bg"?: string;
  // Dropdown
  "@dropdown-selected-color"?: string;
  // Empty
  "@empty-font-size"?: string;
  // Radio
  "@radio-size"?: string;
  "@radio-dot-color"?: string;
  // Radio buttons
  "@radio-button-bg"?: string;
  "@radio-button-checked-bg"?: string;
  "@radio-button-color"?: string;
  "@radio-button-hover-color"?: string;
  "@radio-button-active-color"?: string;
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
  "@grid-gutter-width"?: string;
  // Layout
  "@layout-body-background"?: string;
  "@layout-header-background"?: string;
  "@layout-footer-background"?: string;
  "@layout-header-height"?: string;
  "@layout-header-padding"?: string;
  "@layout-footer-padding"?: string;
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
  "@zindex-table-fixed"?: string;
  "@zindex-affix"?: string;
  "@zindex-back-top"?: string;
  "@zindex-badge"?: string;
  "@zindex-picker-panel"?: string;
  "@zindex-popup-close"?: string;
  "@zindex-modal"?: string;
  "@zindex-modal-mask"?: string;
  "@zindex-message"?: string;
  "@zindex-notification"?: string;
  "@zindex-popover"?: string;
  "@zindex-dropdown"?: string;
  "@zindex-picker"?: string;
  "@zindex-tooltip"?: string;
  // Animation
  "@animation-duration-slow"?: string;  // Modal
  "@animation-duration-base"?: string;
  "@animation-duration-fast"?: string;  // Tooltip
  //CollapsePanel
  "@collapse-panel-border-radius"?: string;
  //Dropdown
  "@dropdown-vertical-padding"?: string;
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
  // Select
  // ---
  "@select-border-color"?: string;
  "@select-item-selected-font-weight"?: string;
  "@select-dropdown-bg"?: string;
  "@select-item-selected-bg"?: string;
  "@select-item-active-bg"?: string;
  "@select-background"?: string;
  // Anchor
  // ---
  "@anchor-border-color"?: string;
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
  // Popover arrow width
  "@popover-arrow-width"?: string;
  // Popover arrow color
  "@popover-arrow-color"?: string;
  // Popover outer arrow width
  // Popover outer arrow color
  "@popover-arrow-outer-color"?: string;
  // Popover distance with trigger
  "@popover-distance"?: string;
  // Modal
  // --
  "@modal-body-padding"?: string;
  "@modal-header-bg"?: string;
  "@modal-heading-color"?: string;
  "@modal-footer-bg"?: string;
  "@modal-footer-border-color-split"?: string;
  "@modal-mask-bg"?: string;
  // Progress
  // --
  "@progress-default-color"?: string;
  "@progress-remaining-color"?: string;
  "@progress-text-color"?: string;
  "@progress-radius"?: string;
  // Menu
  // ---
  "@menu-inline-toplevel-item-height"?: string;
  "@menu-item-height"?: string;
  "@menu-collapsed-width"?: string;
  "@menu-bg"?: string;
  "@menu-popup-bg"?: string;
  "@menu-item-color"?: string;
  "@menu-highlight-color"?: string;
  "@menu-item-active-bg"?: string;
  "@menu-item-active-border-width"?: string;
  "@menu-item-group-title-color"?: string;
  "@menu-icon-size"?: string;
  "@menu-icon-size-lg"?: string;
  "@menu-item-vertical-margin"?: string;
  "@menu-item-font-size"?: string;
  "@menu-item-boundary-margin"?: string;
  // dark theme
  "@menu-dark-color"?: string;
  "@menu-dark-bg"?: string;
  "@menu-dark-arrow-color"?: string;
  "@menu-dark-submenu-bg"?: string;
  "@menu-dark-highlight-color"?: string;
  "@menu-dark-item-active-bg"?: string;
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
  "@table-border-radius-base"?: string;
  "@table-footer-bg"?: string;
  "@table-footer-color"?: string;
  // Tag
  // --
  "@tag-default-bg"?: string;
  "@tag-default-color"?: string;
  "@tag-font-size"?: string;
  // TimePicker
  // ---
  "@time-picker-panel-column-width"?: string;
  "@time-picker-panel-width"?: string;
  "@time-picker-selected-bg"?: string;
  // Carousel
  // ---
  "@carousel-dot-width"?: string;
  "@carousel-dot-height"?: string;
  "@carousel-dot-active-width"?: string;
  // Badge
  // ---
  "@badge-height"?: string;
  "@badge-dot-size"?: string;
  "@badge-font-size"?: string;
  "@badge-font-weight"?: string;
  "@badge-status-size"?: string;
  "@badge-text-color"?: string;
  // Rate
  // ---
  "@rate-star-color"?: string;
  "@rate-star-bg"?: string;
  // Card
  // ---
  "@card-head-color"?: string;
  "@card-head-background"?: string;
  "@card-head-padding"?: string;
  "@card-inner-head-padding"?: string;
  "@card-padding-base"?: string;
  "@card-actions-background"?: string;
  "@card-skeleton-bg"?: string;
  "@card-background"?: string;
  "@card-shadow"?: string;
  "@card-radius"?: string;
  // Comment
  // ---
  "@comment-padding-base"?: string;
  "@comment-nest-indent"?: string;
  "@comment-font-size-base"?: string;
  "@comment-font-size-sm"?: string;
  "@comment-author-name-color"?: string;
  "@comment-author-time-color"?: string;
  "@comment-action-color"?: string;
  "@comment-action-hover-color"?: string;
  // Tabs
  // ---
  "@tabs-card-head-background"?: string;
  "@tabs-card-height"?: string;
  "@tabs-card-active-color"?: string;
  "@tabs-title-font-size"?: string;
  "@tabs-title-font-size-lg"?: string;
  "@tabs-title-font-size-sm"?: string;
  "@tabs-ink-bar-color"?: string;
  "@tabs-bar-margin"?: string;
  "@tabs-horizontal-margin"?: string;
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
  // Switch
  // ---
  "@switch-height"?: string;
  "@switch-sm-height"?: string;
  "@switch-sm-checked-margin-left"?: string;
  "@switch-disabled-opacity"?: string;
  "@switch-color"?: string;
  "@switch-shadow-color"?: string;
  // Pagination
  // ---
  "@pagination-item-size"?: string;
  "@pagination-item-size-sm"?: string;
  "@pagination-font-family"?: string;
  "@pagination-font-weight-active"?: string;
  "@pagination-item-bg-active"?: string;
  // PageHeader
  // ---
  "@page-header-padding"?: string;
  "@page-header-padding-vertical"?: string;
  "@page-header-padding-breadcrumb"?: string;
  "@page-header-back-color"?: string;
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
  "@slider-handle-shadow"?: string;
  "@slider-dot-border-color"?: string;
  "@slider-dot-border-color-active"?: string;
  "@slider-disabled-color"?: string;
  "@slider-disabled-background-color"?: string;
  // Tree
  // ---
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
  // Skeleton
  // ---
  "@skeleton-color"?: string;
  // Transfer
  // ---
  "@transfer-header-height"?: string;
  "@transfer-disabled-bg"?: string;
  "@transfer-list-height"?: string;
  // Message
  // ---
  "@message-notice-content-padding"?: string;
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
  // List
  // ---
  "@list-header-background"?: string;
  "@list-footer-background"?: string;
  "@list-empty-text-padding"?: string;
  "@list-item-padding"?: string;
  "@list-item-meta-margin-bottom"?: string;
  "@list-item-meta-avatar-margin-right"?: string;
  "@list-item-meta-title-margin-bottom"?: string;
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
  // Timeline
  // ---
  "@timeline-width"?: string;
  "@timeline-color"?: string;
  "@timeline-dot-border-width"?: string;
  "@timeline-dot-color"?: string;
  "@timeline-dot-bg"?: string;
  // Typography
  // ---
  "@typography-title-font-weight"?: string;
  "@typography-title-margin-top"?: string;
  "@typography-title-margin-bottom"?: string;
}