/**
 * @license
 * Webix SpreadSheet v.10.1.5
 * This software is covered by Webix Commercial License.
 * Usage without proper license is prohibited.
 * (c) XB Software Ltd.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	var en = {
	  labels: {
	    // formats
	    "common": "Common",
	    "currency": "Currency",
	    "number": "Number",
	    "percent": "Percent",
	    "date": "Date",
	    "string": "Text",
	    "custom-format": "Custom",
	    "decimal-places": "Decimal places",
	    "separator": "Group separator",
	    "negative": "Negative number",
	    "currency-symbol": "Сurrency",
	    "date-format": "Date format",
	    "format-docs": "How to create a format",
	    // titles
	    "undo-redo": "Undo/Redo",
	    "font": "Font",
	    "text": "Text",
	    "cell": "Cell",
	    "align": "Align",
	    "format": "Number",
	    "column": "Column",
	    "borders": "Borders",
	    "px": "px",
	    "apply": "Apply",
	    // popups and dialogs
	    "cancel": "Cancel",
	    "save": "Save",
	    // multisheets
	    "sheet": "Sheet",
	    // conditions
	    "conditional-format": "Conditional Format",
	    "conditional-common": "Common",
	    "conditional-text": "Text",
	    "condition": "Condition",
	    "conditional-style": "Style",
	    "conditional-operator": "Operator",
	    "conditional-between": "between",
	    "conditional-not-equal": "not equal",
	    // ranges
	    "range": "Range",
	    "range-title": "Named ranges",
	    "range-name": "Name",
	    "range-cells": "Range",
	    "range-scope": "Scope",
	    "range-global": "Book",
	    // images
	    "image-or": "or",
	    "image-title": "Add image",
	    "image-upload": "Select file for upload",
	    "image-url": "URL (e.g. http://*)",
	    // sparklines
	    "sparkline-title": "Add sparkline",
	    "sparkline-type": "Type",
	    "sparkline-range": "Range",
	    "sparkline-color": "Color",
	    "sparkline-positive": "Positive",
	    "sparkline-negative": "Negative",
	    // custom format
	    "format-title": "Set format",
	    "format-pattern": "Format pattern",
	    //dropdown
	    "dropdown-empty": "Empty cells",
	    "dropdown-empty-option": "Empty option",
	    "dropdown-title": "Add dropdown",
	    "dropdown-range": "Range",
	    // confirm
	    "ok": "OK",
	    // import/export
	    "import-title": "Import",
	    "import-not-support": "Sorry, your browser does not support import",
	    "export-title": "Export",
	    "export-name": "Name of xslx file",
	    "export-all-sheets": "Export all sheets",
	    // add link
	    "link-title": "Add Link",
	    "link-name": "Text",
	    "link-url": "URL",
	    //images
	    "image": "Image",
	    "add-image-cell": "Add to cell",
	    "add-image-top": "Add above cells",
	    //charts
	    "graph": "Graph",
	    "add-sparkline": "Add to cell",
	    "add-chart": "Add above cells",
	    //conditional format labels
	    "display": "Display",
	    "value": "Value",
	    // confirm messages
	    "range-remove-confirm": "Are you sure you want to remove the range permanently?",
	    "sheet-remove-confirm": "Are you sure you want to remove the sheet permanently?",
	    "merge-cell-confirm": "Only the left top value will remain after merging. Continue?",
	    "error-range": "The range is incorrect!",
	    "error-link": "The link is incorrect!",
	    //print
	    "print": "Print",
	    "print-title": "Before you print..",
	    "print-settings": "General settings",
	    "print-paper": "Paper size",
	    "print-layout": "Layout",
	    "sheets": "Sheets:",
	    "selection": "Selected cells",
	    "borderless": "Hide gridlines",
	    "sheet-names": "Show sheet names",
	    "skip-rows": "Skip empty rows",
	    "margin": "Hide margins",
	    "page-letter": "Letter",
	    "page-a4": "A4 (210x297mm)",
	    "page-a3": "A3 (297x420mm)",
	    "page-width": "Page width",
	    "page-actual": "Actual Size",
	    "page-portrait": "Portrait",
	    "page-landscape": "Landscape",
	    "external-ui": "External UI",
	    "print-borders": "Show print borders",
	    //comment
	    "comment": "Comment",
	    //resize
	    "width": "Width",
	    "height": "Height",
	    "fit-content": "Fit to content",
	    "default-size": "Reset to default",
	    //views
	    "edit-view": "Edit",
	    "remove-view": "Remove",
	    "chart-edit": "Edit chart",
	    "chart-common": "Common",
	    "chart-series": "Series",
	    "chart-extras": "Extras",
	    "export-view": "Download",
	    "export-view-pdf": "PDF document",
	    "export-view-png": "PNG image",
	    "export-view-excel": "Excel file",
	    "line-chart": "Line",
	    "area-chart": "Area",
	    "bar-chart": "Bar",
	    "donut-chart": "Donut",
	    "pie-chart": "Pie",
	    "radar-chart": "Radar",
	    "spline-chart": "Spline",
	    "splinearea-chart": "Spline Area",
	    "scatter-chart": "Scatter",
	    "chart-scale": "Scale",
	    "chart-x-axis": "X axis",
	    "chart-y-axis": "Y axis",
	    "chart-lines": "Lines",
	    "chart-scale-color": "Scale color",
	    "chart-xAxis-title": "Title",
	    "chart-yAxis-title": "Title",
	    "chart-col-xAxis": "Use left column as xAxis",
	    "chart-col-yAxis": "Use left column as yAxis",
	    "chart-row-xAxis": "Use top row as xAxis",
	    "chart-row-yAxis": "Use top row as yAxis",
	    "chart-xAxis-range": "Range",
	    "chart-yAxis-origin": "Origin",
	    "chart-yAxis-start": "Start",
	    "chart-yAxis-end": "End",
	    "chart-yAxis-step": "Step",
	    "chart-yAxis-note": "* Set all the following parameters to see the effect",
	    "chart-legend": "Legend",
	    "chart-row-legend": "Use top row as legend",
	    "chart-col-legend": "Use left column as legend",
	    "chart-legend-range": "Legend range",
	    "chart-legend-align": "Align",
	    "chart-legend-left": "Left",
	    "chart-legend-right": "Right",
	    "chart-legend-center": "Center",
	    "chart-legend-valign": "Vertical align",
	    "chart-legend-top": "Top",
	    "chart-legend-middle": "Middle",
	    "chart-legend-bottom": "Bottom",
	    "chart-item": "Data",
	    "stacked-chart": "Stacked",
	    "horizontal-chart": "Horizontal",
	    "chart-range": "Range",
	    "chart-series-color": "Color",
	    "add-line": "Add line",
	    "chart-type": "Type",
	    "chart-tooltip": "Tooltips",
	    "chart-label": "Labels",
	    "chart-data-from": "Data series from",
	    "chart-columns": "columns",
	    "chart-rows": "rows",
	    "chart-markers": "Markers",
	    "chart-markers-square": "Square",
	    "chart-markers-triangle": "Triangle",
	    "chart-markers-diamond": "Diamond",
	    "chart-markers-round": "Round",
	    "chart-pie-3d": "3D",
	    "chart-radar-circle": "Circled lines"
	  },
	  tooltips: {
	    "color": "Font color",
	    "background": "Background color",
	    "font-family": "Font family",
	    "font-size": "Font size",
	    "text-align": "Horizontal align",
	    "vertical-align": "Vertical align",
	    "borders": "Borders",
	    "borders-no": "Clear borders",
	    "borders-left": "Left border",
	    "borders-top": "Top border",
	    "borders-right": "Right border",
	    "borders-bottom": "Bottom border",
	    "borders-all": "All borders",
	    "borders-outer": "Outer borders",
	    "borders-top-bottom": "Top and bottom borders",
	    "borders-color": "Border color",
	    "align-left": "Left align",
	    "align-center": "Center align",
	    "align-right": "Right align",
	    "align-top": "Top align",
	    "align-middle": "Middle align",
	    "align-bottom": "Bottom align",
	    "span": "Merge",
	    "wrap": "Text wrap",
	    "undo": "Undo",
	    "redo": "Redo",
	    "format": "Number format",
	    "increase-decimals": "Increase decimal places",
	    "decrease-decimals": "Decrease decimal places",
	    "font-weight": "Bold",
	    "font-style": "Italic",
	    "underline": "Underline",
	    "strike": "Strike",
	    "hide-gridlines": "Hide/show gridlines",
	    "hide-headers": "Hide/show headers",
	    "show-formulas": "Hide/show formulas",
	    "print-borders": "Hide/show print borders",
	    "create-filter": "Create/remove filters",
	    "freeze-columns": "Freeze/unfreeze columns",
	    "add-range": "Set name for the selected range",
	    "conditional": "Conditional formatting",
	    "add-sheet": "Add Sheet",
	    "lock-cell": "Lock/unlock cell",
	    "clear": "Clear",
	    "add-link": "Add link",
	    "row": "Rows",
	    "column": "Columns",
	    "sheet": "Sheet",
	    "add-image": "Image",
	    "add-sparkline": "Graph",
	    "add-comment": "Comment",
	    "increase-indent": "Increase indent",
	    "decrease-indent": "Decrease indent",
	    "scale": "Scale",
	    "show-sheet": "Show sheet"
	  },
	  menus: {
	    "remove-sheet": "Remove sheet",
	    "rename-sheet": "Rename sheet",
	    "hide-sheet": "Hide sheet",
	    "file": "File",
	    "new": "New",
	    "new-sheet": "New sheet",
	    "excel-import": "Import from Excel",
	    "excel-export": "Export to Excel",
	    "sheet": "Sheets",
	    "copy-sheet": "Copy to new sheet",
	    "edit": "Edit",
	    "undo": "Undo",
	    "redo": "Redo",
	    "columns": "Columns",
	    "insert-column": "Insert column",
	    "delete-column": "Delete column",
	    "show-column": "Show column",
	    "hide-column": "Hide column",
	    "resize-column": "Resize column",
	    "rows": "Rows",
	    "insert-row": "Insert row",
	    "delete-row": "Delete row",
	    "show-row": "Show row",
	    "hide-row": "Hide row",
	    "resize-row": "Resize row",
	    "insert": "Insert",
	    "conditional-format": "Conditional format",
	    "common": "common",
	    "text": "text",
	    "clear": "Clear",
	    "clear-value": "Values",
	    "clear-style": "Styles",
	    "clear-conditional-formats": "Conditional formats",
	    "clear-dropdown-editors": "Dropdowns and filters",
	    "clear-comments": "Comments",
	    "clear-all": "All",
	    "image": "Image",
	    "add-image-cell": "Add to cell",
	    "add-image-top": "Add above cells",
	    "graph": "Graph",
	    "add-sparkline": "Add to cell",
	    "add-chart": "Add above cells",
	    "data": "Data",
	    "add-link": "Add link",
	    "add-range": "Named ranges",
	    "sort": "Sort",
	    "sort-asc": "Sort A to Z",
	    "sort-desc": "Sort Z to A",
	    "view": "View",
	    "freeze-columns": "Freeze/unfreeze columns",
	    "freeze-rows": "Freeze/unfreeze rows",
	    "hide-gridlines": "Hide/show gridlines",
	    "hide-headers": "Hide/show headers",
	    "show-formulas": "Hide/show formulas",
	    "create-filter": "Create/remove filters",
	    "add-dropdown": "Add dropdown",
	    "lock-cell": "Lock/unlock cell",
	    "print": "Print",
	    "print-borders": "Hide/show print borders",
	    "add-comment": "Comment",
	    "cut": "Cut",
	    "copy": "Copy",
	    "paste": "Paste",
	    "special-paste": "Special paste",
	    "paste-values": "Values",
	    "paste-formulas": "Formulas",
	    "paste-styles": "Styles",
	    "paste-conditions": "Conditional formats"
	  },
	  table: {
	    "math-error": "#ERROR!",
	    "math-ref-error": "#REF!",
	    "format-error": "INCORRECT FORMAT"
	  },
	  liveEditor: {
	    "edit": "Edit:"
	  },
	  formats: {
	    "dateFormat": "mm/dd/yyyy",
	    "timeFormat": "hh:mm AM/PM",
	    "longDateFormat": "dd mmmm yyyy",
	    "fullDateFormat": "mm/dd/yyyy hh:mm AM/PM",
	    "parseDateTime": "%m/%d/%Y %G:%i:%s",
	    "parseDate": "%m/%d/%Y",
	    "currencies": ["{obj} €", "¥{obj}", "R$ {obj}", "{obj} rub."]
	  }
	};

	webix.i18n.spreadsheet = en;

	webix.protoUI({
	  name: "ssheet-align",
	  $cssName: "richselect",
	  $init: function (config) {
	    config.options = {
	      view: "datasuggest",
	      body: {
	        view: "ssheet-icons",
	        tooltip: {
	          template: "#tooltip#"
	        },
	        xCount: 3,
	        yCount: 1
	      },
	      data: config.data
	    };
	  }
	}, webix.ui.richselect);

	webix.protoUI({
	  name: "ssheet-borders-suggest",
	  defaults: {
	    width: 300
	  },
	  $init: function (config) {
	    var skin = webix.skin.$name;
	    config.body = {
	      margin: 6,
	      cols: [{
	        view: "ssheet-icons",
	        scroll: false,
	        select: true,
	        xCount: 4,
	        yCount: 2,
	        tooltip: {
	          template: function (obj) {
	            return webix.i18n.spreadsheet.tooltips["borders-" + obj.id];
	          }
	        },
	        on: {
	          onAfterSelect: function () {
	            var suggest = this.getParentView().getParentView();
	            suggest.updateMasterValue(true);
	          }
	        },
	        template: function (obj) {
	          var css = "webix_ssheet_button_icon webix_ssheet_icon ssi-borders-" + obj.value;
	          return "<span class='" + css + "'></span>";
	        },
	        data: config.data
	      }, {
	        view: "ssheet-separator"
	      }, {
	        rows: [{
	          view: "ssheet-color",
	          css: config.css,
	          name: config.name,
	          width: 68,
	          value: skin == "contrast" || skin == "dark" ? "#ffffff" : "#000000",
	          tooltip: webix.i18n.spreadsheet.tooltips["borders-color"],
	          title: "<span class='webix_icon wxi-pencil'></span>",
	          on: {
	            onChange: function () {
	              var suggest = this.getParentView().getParentView().getParentView();
	              suggest.updateMasterValue(false);
	            }
	          }
	        }, {
	          view: "richselect",
	          css: "webix_ssheet_border_type",
	          value: "thin",
	          suggest: {
	            fitMaster: false,
	            width: 130,
	            css: "webix_ssheet_suggest",
	            body: {
	              template: "<div class='webix_ssheet_border webix_ssheet_border_#id#'></div>"
	            },
	            data: [{
	              id: "thin"
	            }, {
	              id: "medium"
	            }, {
	              id: "thick"
	            }, {
	              id: "dashed"
	            }, {
	              id: "dotted"
	            }, {
	              id: "double"
	            }]
	          }
	        }, {}]
	      }]
	    };
	  },
	  updateMasterValue: function (hide) {
	    var value = this.getValue();
	    var master = webix.$$(this.config.master);
	    master.setValue(value, "user");
	    if (hide) this.hide();
	  },
	  setValue: function (value) {
	    if (value[0]) this.getList().select(value[0]);
	    if (value[1]) this.getColorView().setValue(value[1]);
	    if (value[2]) this.getTypeView().setValue(value[2]);
	  },
	  getValue: function () {
	    return [this.getList().getSelectedId(), this.getColorView().getValue() || "", this.getTypeView().getValue() || ""];
	  },
	  getList: function () {
	    return this.getBody().getChildViews()[0];
	  },
	  getColorView: function () {
	    return this.getBody().getChildViews()[2].getChildViews()[0];
	  },
	  getTypeView: function () {
	    return this.getBody().getChildViews()[2].getChildViews()[1];
	  },
	  getItemText: function () {
	    return "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-borders-all'>";
	  }
	}, webix.ui.suggest);
	webix.protoUI({
	  name: "ssheet-borders",
	  $cssName: "richselect",
	  $init: function (config) {
	    config.options = {
	      view: "ssheet-borders-suggest",
	      fitMaster: false,
	      data: config.data
	    };
	    this.$ready.push(webix.bind(function () {
	      this.getPopup().config.master = this.config.id;
	    }, this));
	  },
	  setValue: function (value, config) {
	    if (webix.isArray(value)) {
	      if (!this.config.value || value[0] != this.config.value[0] || value[1] != this.config.value[1]) {
	        this.getPopup().setValue(value);
	      }

	      var old = this.config.value;
	      this.config.value = value;
	      if (value[0]) this.callEvent("onChange", [this.getValue(), old, config]);
	    }

	    return value;
	  },
	  getValue: function () {
	    return this.getPopup().getValue().join(",");
	  },
	  getList: function () {
	    return this.getPopup().getBody().getChildViews()[0];
	  },
	  getColorView: function () {
	    return this.getPopup().getBody().getChildViews()[1].getChildViews()[0];
	  }
	}, webix.ui.richselect);

	// toolbar: color selector
	webix.protoUI({
	  $cssName: "colorboard",
	  name: "ssheet-colorboard",
	  defaults: {
	    height: 196,
	    width: 244,
	    css: "webix_ssheet_colorboard",
	    palette: [["#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff"], ["#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff"], ["#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79"], ["#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#1155cc", "#0b5394", "#351c75", "#741b47"], ["#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130"]]
	  },
	  $init: function () {
	    this.attachEvent("onSelect", function (value) {
	      this.getParentView().setMasterValue({
	        value: value
	      }, false, "user");
	    });
	  }
	}, webix.ui.colorboard);
	webix.protoUI({
	  $cssName: "richselect",
	  name: "ssheet-color",
	  defaults: {
	    css: "webix_ssheet_color",
	    icon: "wxi-menu-down",
	    suggest: {
	      borderless: true,
	      body: {
	        view: "ssheet-colorboard"
	      }
	    }
	  },
	  $init: function () {
	    this.$view.className += " webix_ssheet_color";
	  },
	  $renderInput: function (config, divStart, id) {
	    var color = this.renderColor.call(this);
	    divStart = divStart.replace(/([^>]>)(.*)(<\/div)/, function (match, p1, p2, p3) {
	      return p1 + config.title + color + p3;
	    });
	    return webix.ui.colorpicker.prototype.$renderInput.call(this, config, divStart, id);
	  },
	  $setValue: function (value) {
	    value = value || "";
	    this.getColorNode().style.backgroundColor = value;
	  },
	  renderColor: function () {
	    return "<div class='webix_ssheet_cp_color' style='background-color:" + this.config.value + ";'> </div>";
	  },
	  getColorNode: function () {
	    return this.$view.firstChild.firstChild.childNodes[1];
	  },
	  $renderIcon: function () {
	    return webix.ui.text.prototype.$renderIcon.apply(this, arguments);
	  }
	}, webix.ui.colorpicker);

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var muon = createCommonjsModule(function (module, exports) {
	Object.defineProperty(exports,"__esModule",{value:!0});var t,r={1:"#ERROR",2:"#ERROR",3:"#REF!"},e=function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},e.apply(this,arguments)};function n(t,r,e){return e+64*r+64*t*4096}function o(t){return [t<2147483648?t>>18:t/262144&16777215,t>>6&4095,63&t]}function i(t){return t<2147483648?t>>18:t/262144&16777215}function a(t){return t>>6&4095}function u(t){return 63&t}function f(t,r,e){for(var n=o(t),i=n[0],a=n[1],u=o(r),f=u[0]-i,s=u[1]-a,h=0;h<=f;h++)for(var c=0;c<=s;c++)e(t+64*c+4096*h*64);}function s(t,r){for(var e,n,i,a,f,s,c,p,v=t.code,g=t.source,l="",d=v.length,b=0;b<d;b+=3){switch(v[b]){case 5:var M=void 0;9===v[b+6]&&(M=r.pageName(u(v[b+7]))),l+=(-1!==(p=M||t.source.substr(v[b+1],v[b+2])).indexOf(" ")?"'"+p+"'":p)+"!";break;case 7:l+=h(a=(e=o(v[b+4]))[0],s=e[1],v[b+5]);break;case 4:l+=g.substr(v[b+1],v[b+2]).toUpperCase();break;case 8:a=(n=o(v[b+4]))[0],s=n[1],f=(i=o(v[b+7]))[0],c=i[1],l+=h(a,s,v[b+5]),l+=":",l+=h(f,c,v[b+8]);break;case 9:break;case 2:l+="{{"+g.substr(v[b+1],v[b+2])+"}}";break;case 3:l+="#REF!";break;case 1:l+='"'+g.substr(v[b+1],v[b+2])+'"';break;default:l+=g.substr(v[b+1],v[b+2]);}}return l}function h(t,r,e){var n="";2&e&&(n+="$");var o="";for(r+=1;r>0;){var i=r%26;0===i&&(i=26),o=String.fromCharCode(64+i)+o,r=(r-i)/26;}return n+=o,1&e&&(n+="$"),n+=t+1}function c(t){return t<=122}function p(t){return t<=122?t>=65||35===t||36===t||46===t:t>191}function v(t){return t>=97}function g(t){var r=t.charCodeAt(0);return r>=48&&r<=57}function l(t,r){var e;do{r++,e=t.charCodeAt(r);}while(e>=48&&e<=57);return r}function d(t){return " "===t||"\t"===t||"\n"===t||"\r"===t}function b(t,r){var e;do{e=t[++r];}while(d(e));return r}function M(t,r){if("<"===t[r]){var e=t[r+1];">"!==e&&"="!==e||r++;}else">"===t[r]&&"="===t[r+1]&&r++;return r+1}function y(r,e,n){for(var o=r.length,i=!0,a=e,u=!1,f=!1,s=!1,h=0;a<o;a++){var l=r[a];if("'"!==l){if(!u){s=!0;var d=l.charCodeAt(0);if(p(d)){c(d)?v(d)&&(f=!0):i=!1,1==h&&h++;continue}if(g(l)){0==h&&h++;continue}break}}else{if(s)break;if(u){a++;break}u=!0;}}var b=r[a],M=e,y=a-e;return u&&((y-=1+("'"===r[a-1]?1:0))<0&&(y=0),M++,n=5),0===n&&(":"===b&&i?1!==h?n=3:(n=8,f&&(t=!0)):"!"===b?n="#"===r[M]?3:5:"("===b?(function(t,r,e){var n=t.substr(r,e);return n.toUpperCase()!==n}(r,M,y)&&(t=!0),n=4):"}"===b&&"}"===r[a-1]?n=2:1===h&&i?(n=7,f&&(t=!0)):n=6),[M,y,a,n]}function m(t,r,e){for(var o=0,i=0,a=1,u=1,f=0,s=!1,h=r.length-1;h>=0;h--){var c=r[h].charCodeAt(0);36!==c?c<58?(i+=(c-48)*a,a*=10):(s||(a=1,o=i,i=0,s=!0,u+=1),i+=(c-(c>96?96:64))*a,a*=26):f+=u;}i>4095?t.push(3,0,0):t.push(9,n(o-1,i-1,e),f);}function _(r,e){var n,o,a=[];t=!1;for(var u,f,h=-1,c=0;c<r.length;c++){var p=r[c];if('"'!=p){if(!(h>-1))if("{"!=p||"{"!=r[c+1])if("'"==p||((f=p.charCodeAt(0))<=122?f>=65||35===f||36===f:f>191)){var v=y(r,c,0),_=(L=v[0],P=v[1],v[2]),w=v[3],E=a.length;if(7!==w&&8!==w||5!==a[a.length-3])u=e.z,a.push(w,L,P);else{var I="'"===r[L-2]?1:0,C=a[E-2],T=a[E-1];void 0===(u=e.page(r.substr(C,T)))&&(a.push(3,0,0),u=0),a.push(w,L-T-2*I-1,P+T+2*I+1);}if(c=_-1,6===w)e.name(a,r,e);else if(8===w){var D=a.length;if(m(a,r.substr(L,P),u),L=(n=y(r,c+2,0))[0],P=n[1],_=n[2],5===(w=n[3])&&(L=(o=y(r,_+1,0))[0],P=o[1],_=o[2],w=o[3]),7!==w){a[D-3]=7;continue}m(a,r.substr(L,P),u);var N=a[D+1],A=a[D+4];(N>A||i(N)>i(A))&&(a[D+1]=A,a[D+4]=N),a[D-1]+=P+1,c=_-1;}else 7===w?m(a,r.substr(L,P),u):3!==w&&5!==w||c++;}else if(d(p)){var S=b(r,c);a.push(12,c,S-c),c=S-1;}else if(g(p)){var O=l(r,c);a.push(11,c,O-c),c=O-1;}else{var x=M(r,c);a.push(10,c,x-c),c=x-1;}else{var R=y(r,c+2,2),L=R[0],P=R[1],F=R[2];a.push(2,L,P),c=F+2-1;}}else h>-1?(a.push(1,h+1,c-h-1),h=-1):h=c;}var U={code:a,source:r,exec:null,broken:0,triggers:null};return t&&(U.source=s(U,e)),U}function w(t){return "              ".substr(0,10-t.length)}var E=[">","<","=","+"];function I(t,r){var e=function(t,r){for(var e=t.code,n=t.source,o="",i=0,a=[],u=e.length,f=0;f<u;f+=3){switch(e[f]){case 4:o+='ctx.m["'+n.substr(e[f+1],e[f+2]).toUpperCase()+'"]';break;case 1:o+='"'+n.substr(e[f+1],e[f+2])+'"';break;case 2:o+='ctx.p("'+n.substr(e[f+1],e[f+2])+'")';break;case 6:case 7:var s=void 0,h=void 0;if(10===e[f-3]?s=f-3:12===e[f-3]&&10===e[f-6]&&(s=f-6),10===e[f+6]?h=f+6:12===e[f+6]&&10===e[f+9]&&(h=f+9),s||h){var c=s?n[e[s+1]]:null,p=h?n[e[h+1]]:null;if("&"==c||"&"==p){o+="(ctx.v("+e[f+4]+') === null ? "" : ctx.v('+e[f+4]+"))";break}if(-1!=E.indexOf(c)||-1!=E.indexOf(p)){o+="(ctx.v("+e[f+4]+") === null ? 0 : ctx.v("+e[f+4]+"))";break}}o+="ctx.v("+e[f+4]+")";break;case 8:o+="ctx.r("+e[f+4]+", "+e[f+7]+")";break;case 10:if(1===e[f+2])"&"===(v=n[e[f+1]])?o+='+""+':r&&"+"==v?o+="*1+1*":"="===v?o+="==":";"===v?o+=",":"{"===v?o+="[":"}"===v?o+="]":"%"===v?e[f+3]&&10!==e[f+3]?o+=r?"/0+":v:o+=("/"==a[i]?"*":"/")+"100":("("==v?(i++,a.push("+")):")"==v&&(i--,a.pop()),o+=v),"+"!=v&&"-"!=v&&"*"!=v&&"/"!=v&&"&"!=v||(a[i]=v);else if(2===e[f+2]){var v;o+="<>"===(v=n.substr(e[f+1],e[f+2]))?"!=":v;}else o+=n.substr(e[f+1],e[f+2]);break;case 11:o+=n.substr(e[f+1],e[f+2]);break;case 3:return ""}}return o}(t,r);if(!e)return t.broken=3,void(t.exec=null);try{t.exec=new Function("ctx","return "+e);}catch(r){t.broken=1,t.exec=null;}}var C="#DIV/0!",T="#VALUE!",D="#NUM!",N="#N/A";function A(t){var r=new Date(t.getFullYear(),0,0),e=t.valueOf()-r.valueOf()+60*(r.getTimezoneOffset()-t.getTimezoneOffset())*1e3;return Math.floor(e/864e5)}function S(t){var r=new Date(Math.round(86400*(t-25569)*1e3));return new Date(r.getTime()+6e4*r.getTimezoneOffset())}function O(t){return 25569+(t.getTime()-6e4*t.getTimezoneOffset())/864e5}function x(t){return !(!t&&0!==t||(t*=1,isNaN(t)))&&t}function R(t){if(1===t.length){var r=t[0];return "object"==typeof r?r:[r]}for(var e=[],n=0;n<t.length;n++)e=e.concat(t[n]);return e}function L(t){return !t&&0!==t}function P(t){return "string"==typeof t?"TRUE"===t:!!t}function F(t){var r="string"==typeof t?new Date(t):S(t);if(r.getTime())return r;throw t+" is invalid date"}function U(t){var r=x(t);if("number"!=typeof r)throw t+" is not a number";return r}function k(t,r,e,n,o){var i=x(t);i<0&&8==o&&(r=null);var a,u=r?x(r):null;if("number"!=typeof i||"boolean"==typeof u)throw T;if(i<e&&(i=e),i>n&&(i=n),u<-1)throw D;u&&(u=Math.floor(+u));var f=t<0&&16===o?"FF":"";if(a=n<2147483648?(i>>>0&n-e).toString(o):(i>>>0).toString(o),u&&a.length>u)throw D;return (f+a).padStart(u,"0").toUpperCase()}function V(t,r){var e=+yt(t),n=+mt(t),o=+yt(r),i=+mt(r);return ht(e*o-n*i,e*i+n*o)}function X(t,r){var e=+yt(t),n=+mt(t);return ht(e+ +yt(r),n+ +mt(r))}function H(t){return t>0?Math.floor(t):Math.ceil(t)}function Y(t){return t<0?Math.floor(t):Math.ceil(t)}function B(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0,n=R(t),o=0;o<n.length;o++){var i=x(n[o]);"number"==typeof i&&(e+=i);}return e}function j(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0,n=0,o=R(t),i=0;i<o.length;i++){var a=x(o[i]);"number"==typeof a&&(e+=a,n++);}return n?e/n:0}function z(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=R(t),n=0,o=0,i=0;i<e.length;i++){var a=e[i],u=x(e[i]);"number"==typeof u?(n+=u,o++):(!0===a&&n++,(a||!1===a)&&o++);}return o?n/o:0}function G(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0,n=R(t),o=0;o<n.length;o++){var i=x(n[o]);"number"==typeof i&&e++;}return e}function q(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0,n=R(t),o=0;o<n.length;o++)n[o]&&1*n[o]!=0&&e++;return e}function $(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=-1/0,n=R(t),o=0;o<n.length;o++){var i=x(n[o]);"number"==typeof i&&i>e&&(e=i);}return e===-1/0?0:e}function W(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=1/0,n=R(t),o=0;o<n.length;o++){var i=x(n[o]);"number"==typeof i&&i<e&&(e=i);}return e===1/0?0:e}function K(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=!1,n=1,o=R(t),i=0;i<o.length;i++){var a=x(o[i]);"number"==typeof a&&(e=!0,n*=a);}return e?n:null}function Q(t,r,e){for(var n=R(t),o=r?0:-1,i=e?z.apply(void 0,t):j.apply(void 0,t),a=0,u=0;u<n.length;u++){var f=n[u],s=x(n[u]);if("number"!=typeof s){if(!e||"boolean"!=typeof f&&!f)continue;s=!0===f?1:0;}o++,a+=Math.pow(s-i,2);}return o?a/o:0}function J(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Q(t,!1,!1)}function Z(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Q(t,!1,!0)}function tt(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Q(t,!0,!1)}function rt(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Q(t,!0,!0)}function et(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Math.sqrt(J.apply(void 0,t))}function nt(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Math.sqrt(tt.apply(void 0,t))}function ot(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return Math.pow(e,n)}var it={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};var at=[];function ut(t){var r=x(t);if("number"==typeof r&&r>-1){var e=Math.floor(r);return 0===e||1===e?1:(at[e]>0||(at[e]=ut(e-1)*e),at[e])}}function ft(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return ut(e)/(ut(n)*ut(e-n))}var st=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];function ht(t,r,e){void 0===e&&(e="i");var n=x(t),o=x(r);if("number"!=typeof n&&"number"!=typeof o)throw D;var i="",a="";return t&&(i=t.toString()),r&&1!==r?a=r+e:1===r&&(a=e),r>0?(i?i+"+":"")+a:i+a}function ct(t,r){return void 0===r&&(r=null),k(t,r,-512,511,2)}function pt(t,r){return void 0===r&&(r=null),k(t,r,-274877906944,274877906943,16)}function vt(t,r){return void 0===r&&(r=null),k(t,r,-536870912,536870911,8)}var gt=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17];function lt(t){for(var r,e=t<0,n=0,o=0,i=2/(2+(t=Math.abs(t))),a=4*i-2,u=gt.length-1;u>0;u--)r=a*n-o+gt[u],o=n,n=r;var f=i*Math.exp(-t*t+.5*(gt[0]+a*n)-o);return e?f-1:1-f}function dt(t,r){var e=x(t),n=x(r);if("number"==typeof e)return "number"==typeof n?lt(n)-lt(e):lt(e);throw T}var bt=[.9999999999998099,676.5203681218851,-1259.1392167224028,771.3234287776531,-176.6150291621406,12.507343278686905,-.13857109526572012,9984369578019572e-21,1.5056327351493116e-7];var Mt=Math.pow(2,39);function yt(t){if("string"!=typeof t)throw T;if(["i","+i","1i","+1i","-i","-1i","j","+j","1j","+1j","-j","-1j"].indexOf(t)>=0)return 0;var r=t.indexOf("+"),e=t.indexOf("-");0===r&&(r=t.indexOf("+",1)),0===e&&(e=t.indexOf("-",1));var n=t.substring(t.length-1,t.length),o="i"===n||"j"===n;if(r>=0||e>=0){if(!o)throw D;if(r>=0){if(isNaN(+t.substring(0,r))||isNaN(+t.substring(r+1,t.length-1)))throw D;return Number(t.substring(0,r))}if(isNaN(+t.substring(0,e))||isNaN(+t.substring(e+1,t.length-1)))throw D;return Number(t.substring(0,e))}if(o){if(isNaN(+t.substring(0,t.length-1)))throw D;return 0}if(isNaN(+t))throw D;return +t}function mt(t){if("string"!=typeof t)throw T;if(["i","j"].indexOf(t)>=0)return 1;var r=(t=t.replace("+i","+1i").replace("-i","-1i").replace("+j","+1j").replace("-j","-1j")).indexOf("+"),e=t.indexOf("-");0===r&&(r=t.indexOf("+",1)),0===e&&(e=t.indexOf("-",1));var n=t.substring(t.length-1,t.length),o="i"===n||"j"===n;if(r>=0||e>=0){if(!o)throw D;if(r>=0){if(isNaN(+t.substring(0,r))||isNaN(+t.substring(r+1,t.length-1)))throw D;return Number(t.substring(r+1,t.length-1))}if(isNaN(+t.substring(0,e))||isNaN(+t.substring(e+1,t.length-1)))throw D;return -Number(t.substring(e+1,t.length-1))}if(o){var i=+t.substring(0,t.length-1);if(isNaN(i))throw D;return i}if(isNaN(+t))throw D;return 0}function _t(t){var r=+yt(t),e=+mt(t);return ht(Math.cos(r)*Math.cosh(e),-Math.sin(r)*Math.sinh(e))}function wt(t){var r=+yt(t),e=+mt(t);return ht(Math.cos(e)*(Math.exp(r)+Math.exp(-r))/2,Math.sin(e)*(Math.exp(r)-Math.exp(-r))/2)}function Et(t,r){var e=+yt(t),n=+mt(t),o=+yt(r),i=+mt(r),a=Math.pow(o,2)+Math.pow(i,2);return ht((e*o+n*i)/a,(n*o-e*i)/a)}function It(t){var r=+yt(t),e=+mt(t);return ht(Math.sin(r)*Math.cosh(e),Math.cos(r)*Math.sinh(e))}function Ct(t){var r=+yt(t),e=+mt(t);return ht(Math.cos(e)*(Math.exp(r)-Math.exp(-r))/2,Math.sin(e)*(Math.exp(r)+Math.exp(-r))/2)}var Tt=Math.pow(2,29);function Dt(t,r,e){var n=x(r);if("number"!=typeof n||r<0||r>1||e&&(0===r||1===r))throw T;var o=R(t).sort((function(t,r){return t-r}));e&&(o=function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),o=0;for(r=0;r<e;r++)for(var i=arguments[r],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}([0],o));var i=(o.length+(e?0:-1))*n,a=Math.floor(i);if(void 0===o[a+1])return o[a];var u=o[a+1]-o[a];return o[a]+u*(i-a)}function Nt(t,r,e){var n=x(r);if("number"!=typeof n)throw T;switch(n){case 0:if(e)throw T;return W.apply(void 0,t);case 1:return Dt(t,.25,e);case 2:return Dt(t,.5,e);case 3:return Dt(t,.75,e);case 4:if(e)throw T;return $.apply(void 0,t);default:throw D}}function At(t,r,e,n){var o=U(t),i=U(r),a=U(e);if(1==r)return 1/a;var u=Math.exp(-Math.pow(o/a,i));return n?1-u:i/Math.pow(a,i)*Math.pow(o,i-1)*u}function St(t,r,e,n){void 0===n&&(n=!1);var o=U(t),i=U(r),a=U(e),u=function(t,r,e){return ft(r,t)*Math.pow(e,t)*Math.pow(1-e,r-t)};if(!n)return u(o,i,a);for(var f=0,s=0;s<o+1;s++)f+=u(s,i,a);return f}function Ot(t,r,e){var n=t.filter((function(t){return "number"==typeof t})),o=r.filter((function(t){return "number"==typeof t}));if(n.length!==o.length)throw N;var i=n.length;if(0===i)throw C;for(var a=n.reduce((function(t,r){return t+r}),0)/i,u=o.reduce((function(t,r){return t+r}),0)/i,f=0,s=0;s<i;s++)f+=(n[s]-a)*(o[s]-u);return f/(e?i-1:i)}function xt(t,r){return Ot(t,r,!1)}var Rt={ABS:function(t){var r=x(t);if("number"==typeof r)return Math.abs(r)},ACOS:function(t){var r=x(t);if("number"==typeof r)return Math.acos(r)},ACOSH:function(t){var r=x(t);if("number"==typeof r)return Math.acosh(r)},ACOT:function(t){var r=x(t);if("number"==typeof r)return Math.atan(1/r)},ACOTH:function(t){var r=x(t);if("number"==typeof r)return .5*Math.log((r+1)/(r-1))},ADD:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e+n},ARABIC:function(t){if(!x(t)&&/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(""+t)){var r=0;return (""+t).replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,(function(t){return r+=it[t],t})),+r}},ASIN:function(t){var r=x(t);if("number"==typeof r)return Math.asin(r)},ASINH:function(t){var r=x(t);if("number"==typeof r)return Math.asinh(r)},ATAN:function(t){var r=x(t);if("number"==typeof r)return Math.atan(r)},ATAN2:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return Math.atan2(n,e)},ATANH:function(t){var r=x(t);if("number"==typeof r)return Math.log((1+r)/(1-r))/2},AVEDEV:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=R(t).filter((function(t){return "number"==typeof t})),n=e.length;if(0===n)throw C;var o=e.reduce((function(t,r){return t+r}),0)/n,i=e.reduce((function(t,r){return t+Math.abs(r-o)}),0);return i/n},AVERAGE:j,AVERAGEA:z,BASE:function(t,r,e){void 0===e&&(e=0);var n=x(t),o=x(r),i=x(e);if("number"==typeof n&&"number"==typeof o&&"number"==typeof i){var a=n.toString(o);return new Array(Math.max(i+1-a.length,0)).join("0")+a.toUpperCase()}},BINOMDIST:St,"BINOM.INV":function(t,r,e){for(var n=U(t),o=U(r),i=U(e),a=0;a<=n;a++){if(St(a,n,o,!0)>=i)return a}},"BINOM.DIST.RANGE":function(t,r,e,n){var o=U(t),i=U(r),a=U(e),u=x(n);"number"!=typeof u&&(u=a);for(var f=0,s=a;s<=u;s++){f+=ft(o,s)*Math.pow(i,s)*Math.pow(1-i,o-s);}return f},"BINOM.DIST":St,BITAND:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e&n;throw T},BITLSHIFT:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return n>0?e<<n:e>>-n;throw T},BITOR:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e|n;throw T},BITRSHIFT:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return n>0?e>>n:e<<-n;throw T},BITXOR:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e^n;throw T},CEILING:function(t,r,e){void 0===r&&(r=1),void 0===e&&(e=0);var n=x(t),o=x(r),i=x(e);if("number"==typeof n&&"number"==typeof o&&"number"==typeof i)return 0===o?0:(o=Math.abs(o),n>=0?Math.ceil(n/o)*o:0===e?-1*Math.floor(Math.abs(n)/o)*o:-1*Math.ceil(Math.abs(n)/o)*o)},COMBIN:ft,COMBINA:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return 0===e&&0===n?1:ft(e+n-1,e-1)},COMPLEX:ht,CORREL:function(t,r){if(t.length!==r.length)throw N;for(var e=t.filter((function(t){return "number"==typeof t})),n=r.filter((function(t){return "number"==typeof t})),o=e.length,i=e.reduce((function(t,r){return t+r}),0)/o,a=n.reduce((function(t,r){return t+r}),0)/o,u=0,f=0,s=0,h=0;h<o;h++)u+=(e[h]-i)*(n[h]-a),f+=Math.pow(e[h]-i,2),s+=Math.pow(n[h]-a,2);var c=Math.sqrt(f*s);if(!c)throw C;return u/c},COS:function(t){var r=x(t);if("number"==typeof r)return Math.cos(r)},COSH:function(t){var r=x(t);if("number"==typeof r)return Math.cosh(r)},COT:function(t){var r=x(t);if("number"==typeof r)return 1/Math.tan(r)},COTH:function(t){var r=x(t);if("number"==typeof r){var e=Math.exp(2*r);return (e+1)/(e-1)}},COUNT:G,COUNTA:q,COUNTBLANK:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0,n=R(t),o=0;o<n.length;o++)0===n[o]||n[o]||e++;return e},COVAR:xt,"COVARIANCE.P":xt,"COVARIANCE.S":function(t,r){return Ot(t,r,!0)},CSC:function(t){var r=x(t);if("number"==typeof r)return 1/Math.sin(r)},CSCH:function(t){var r=x(t);if("number"==typeof r)return 2/(Math.exp(r)-Math.exp(-r))},DEC2BIN:ct,DEC2HEX:pt,DEC2OCT:vt,DECIMAL:function(t,r){var e=x(t),n=x(r);if(!(""+e).match("/[2-9]/")&&"number"==typeof e&&"number"==typeof n&&n>1&&n<37)return parseInt(""+e,n)},DEGREES:function(t){var r=x(t);if("number"==typeof r)return 180*r/Math.PI},DELTA:function(t,r){var e=x(t),n=x(r);if("number"==typeof e||"number"==typeof e)return +(e===n);throw T},DEVSQ:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=R(t),n=[];e.forEach((function(t){"number"==typeof t&&n.push(t);}));var o=n.reduce((function(t,r){return t+r}),0)/n.length;return n.reduce((function(t,r){return t+Math.pow(r-o,2)}),0)},DIVIDE:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n&&0!==n)return e/n},EQ:function(t,r){return typeof t==typeof r&&t==r},ERF:dt,ERFC:function(t,r){var e=x(t);if("number"==typeof e)return 1-dt(e,r);throw T},EVEN:function(t){var r=x(t);if("number"==typeof r){var e=Y(r);return e%2?e+Math.sign(r):e}},EXP:function(t){var r=x(t);if("number"==typeof r)return Math.exp(r);throw T},FACT:ut,FACTDOUBLE:function t(r){var e=x(r);if("number"==typeof e){var n=Math.floor(e);return n<=0?1:n*t(n-2)}},FISHER:function(t){var r=x(t);if("number"==typeof r&&r>-1&&r<1)return .5*Math.log((1+r)/(1-r));throw T},FISHERINV:function(t){var r=x(t);if("number"==typeof r){var e=Math.exp(2*r);return (e-1)/(e+1)}throw T},FLOOR:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n){var o=Math.abs(n);return e>=0?Math.floor(e/o)*o:-1*Math.ceil(Math.abs(e)/o)*o}},GAMMA:function t(r){var e=x(r);if("number"!=typeof e)throw T;if(!(Number.isInteger(e)&&e<=0)){if(e<.5)return Math.PI/(Math.sin(Math.PI*e)*t(1-e));e-=1;for(var n=bt[0],o=1;o<9;o++)n+=bt[o]/(e+o);var i=e+7+.5;return Math.sqrt(2*Math.PI)*Math.pow(i,e+.5)*Math.exp(-i)*n}throw D},GCD:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=R(t),n=e.length;if(!n)return 1;for(var o=e[0],i=1;"number"!=typeof o;){if(o=e[i],i>e.length)throw"The arguments should contain at least one numeric value";i++;}for(var a=o<0?-o:o;i<n;i++){var u=x(e[i]);if("number"==typeof u){for(var f=u<0?-u:u;a&&f;)a>f?a%=f:f%=a;a+=f;}}return a},GEOMEAN:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=R(t);if(e.some((function(t){return !Number.isFinite(t)||t<=0})))throw D;return Math.pow(e.reduce((function(t,r){return r*t}),1),1/e.length)},GESTEP:function(t,r){void 0===r&&(r=0);var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return +(t>=r);throw T},GT:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e>n},GTE:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e>=n},HARMEAN:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=R(t);if(e.some((function(t){return !Number.isFinite(t)||t<=0})))throw D;var n=e.reduce((function(t,r){return t+1/r}),0);return 1/(1/e.length*n)},HEX2BIN:function(t,r){return ct(parseInt(t.toString(),16),r)},HEX2DEC:function(t,r){var e=parseInt(t.toString(),16);if(!Number.isFinite(e))throw T;var n=e>Mt;n&&(e=-(e-2*Mt));var o=r?x(r):null,i=e.toString();return (n?"-":"")+(o?i.padStart(o,"0"):i)},HEX2OCT:function(t,r){void 0===r&&(r=null);var e=parseInt(t.toString(),16);return e>Mt&&(e^=Mt),vt(e,r)},IMABS:function(t){var r=yt(t),e=mt(t);if(!Number.isFinite(+r)||!Number.isFinite(+e))throw T;return Math.sqrt(Math.pow(+r,2)+Math.pow(+e,2))},IMAGINARY:mt,IMCONJUGATE:function(t){return ht(+yt(t),-+mt(t))},IMCOS:_t,IMCOSH:wt,IMCOT:function(t){return Et(_t(t),It(t))},IMCSC:function(t){return Et("1",It(t))},IMCSCH:function(t){return Et("1",Ct(t))},IMDIV:Et,IMEXP:function(t){var r=+yt(t),e=+mt(t),n=Math.exp(r);return ht(n*Math.cos(e),n*Math.sin(r))},IMLN:function(t){var r=+yt(t),e=+mt(t);return ht(Math.log(Math.sqrt(r*r+e*e)),Math.atan(e/r))},IMPOWER:function(t,r){var e=x(r);if("number"!=typeof e)throw T;var n=+yt(t),o=+mt(t),i=Math.sqrt(n*n+o*o),a=Math.pow(i,e),u=Math.atan(o/n);return ht(a*Math.cos(e*u),a*Math.sin(e*u))},IMPRODUCT:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(0===t.length)throw T;for(var e=t[0],n=0,o=t.slice(1);n<o.length;n++){var i=o[n];e=V(e.toString(),i.toString());}return e.toString()},IMREAL:yt,IMSEC:function(t){return Et("1",_t(t))},IMSECH:function(t){return Et("1",wt(t))},IMSIN:It,IMSINH:Ct,IMSQRT:function(t){var r=+yt(t),e=+mt(t),n=Math.sqrt(Math.sqrt(r*r+e*e)),o=Math.atan(e/r)/2;return ht(n*Math.cos(o),n*Math.sin(o))},IMSUB:function(t,r){var e=+yt(t),n=+mt(t);return ht(e-+yt(r),n-+mt(r))},IMSUM:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(0===t.length)throw T;for(var e=t[0],n=0,o=t.slice(1);n<o.length;n++){var i=o[n];e=X(e.toString(),i.toString());}return e.toString()},IMTAN:function(t){return Et(It(t),_t(t))},INT:function(t){var r=x(t);if("number"==typeof r)return Math.floor(r)},LARGE:function(t,r){var e=x(r),n=t.sort((function(t,r){return t-r}));if("number"==typeof e&&!t.some((function(t){return "number"!=typeof x(t)})))return n[n.length-e];throw T},LN:function(t){var r=x(t);if("number"==typeof r)return Math.log(r)},LOG:function(t,r){void 0===r&&(r=10);var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return Math.log(e)/Math.log(n)},LOG10:function(t){var r=x(t);if("number"==typeof r)return Math.log(r)/Math.log(10)},LT:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e<n},LTE:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e<=n},MAX:$,MEDIAN:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=R(t);e.sort((function(t,r){return t-r}));var n=Math.floor(e.length/2);return e.length%2?e[n]:(e[n-1]+e[n])/2},MIN:W,MINUS:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e-n},MOD:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n&&0!==n){var o=Math.abs(e%n);return r>0?o:-o}},MROUND:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n&&e*n>-1)return Math.round(e/n)*n},MULTINOMIAL:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=R(t),n=0,o=1,i=0;i<e.length;i++){var a=x(e[i]);"number"==typeof a&&(n+=a,o*=ut(e[i]));}return ut(n)/o},MULTIPLY:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e*n},NE:function(t,r){return typeof t!=typeof r||t!=r},OCT2BIN:function(t,r){void 0===r&&(r=null);var e=parseInt(t.toString(),8);return e&Tt&&(e=-(2*Tt-e)),ct(e,r)},OCT2DEC:function(t,r){void 0===r&&(r=null);var e=r?x(r):null,n=parseInt(t.toString(),8);if(n&Tt&&(n=-(2*Tt-n)),!Number.isFinite(n)||"boolean"==typeof e)throw T;return n.toString().padStart(e||0,"0")},OCT2HEX:function(t,r){void 0===r&&(r=null);var e=parseInt(t.toString(),8);return e&Tt&&(e=-(2*Tt-e)),pt(e,r)},ODD:function(t){var r=x(t);if("number"==typeof r){var e=Y(r);return e%2?e:e+Math.sign(r)}},PERCENTILE:Dt,"PERCENTILE.INC":Dt,"PERCENTILE.EXC":function(t,r){return Dt(t,r,!0)},PERMUT:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return ut(e)/ut(e-n);throw T},PI:function(){return Math.PI},POW:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return ot(t,r)},POWER:ot,PRODUCT:K,QUARTILE:Nt,"QUARTILE.INC":Nt,"QUARTILE.EXC":function(t,r){return Nt(t,r,!0)},QUOTIENT:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return H(e/n)},RADIANS:function(t){var r=x(t);if("number"==typeof r)return r*Math.PI/180},RAND:function(){return Math.random()},RANDBETWEEN:function(t,r){var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n)return e+Math.ceil((n-e+1)*Math.random())-1},ROMAN:function(t){var r=x(t);if("number"==typeof r){for(var e=String(r).split(""),n="",o=3;o--;)n=(st[+e.pop()+10*o]||"")+n;return new Array(+e.join("")+1).join("M")+n}},ROUND:function(t,r){var e=x(t),n=x(r)||0;if("number"==typeof e&&"number"==typeof n)return parseFloat(e.toFixed(n))},ROUNDDOWN:function(t,r){var e=x(t),n=x(r)||0;if("number"==typeof e&&"number"==typeof n)return Math.floor(e*Math.pow(10,n))/Math.pow(10,n)},ROUNDUP:function(t,r){var e=x(t),n=x(r)||0;if("number"==typeof e&&"number"==typeof n)return Math.ceil(e*Math.pow(10,n))/Math.pow(10,n)},SEC:function(t){var r=x(t);if("number"==typeof r)return 1/Math.cos(r)},SECH:function(t){var r=x(t);if("number"==typeof r)return 2/(Math.exp(r)+Math.exp(-r))},SIGN:function(t){var r=x(t);if("number"==typeof r)return 0===r?0:r/Math.abs(r);throw T},SIN:function(t){var r=x(t);if("number"==typeof r)return Math.sin(r)},SINH:function(t){var r=x(t);if("number"==typeof r)return Math.sinh(r)},SMALL:function(t,r){var e=x(r),n=t.sort((function(t,r){return t-r}));if("number"==typeof e&&!t.some((function(t){return "number"!=typeof x(t)})))return n[e-1];throw T},SQRT:function(t){var r=x(t);if("number"==typeof r&&r>=0)return Math.sqrt(r)},SQRTPI:function(t){var r=x(t);if("number"==typeof r&&r>-1)return Math.sqrt(r*Math.PI)},STDEV:et,"STDEV.S":et,"STDEV.P":nt,STDEVA:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Math.sqrt(Z.apply(void 0,t))},STDEVP:nt,STDEVPA:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Math.sqrt(rt.apply(void 0,t))},STEYX:function(t,r){if(t.length!==r.length)throw N;var e=t.filter((function(t){return "number"==typeof t})),n=r.filter((function(t){return "number"==typeof t})),o=e.length;if(2===o)throw C;for(var i=e.reduce((function(t,r){return t+r}),0)/o,a=n.reduce((function(t,r){return t+r}),0)/o,u=0,f=0,s=0,h=0;h<o;h++)u+=(e[h]-i)*(n[h]-a),f+=Math.pow(e[h]-i,2),s+=Math.pow(n[h]-a,2);if(2===s)throw C;return Math.sqrt((f-Math.pow(u,2)/s)/(o-2))},SUBTOTAL:function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];var n=x(t),o=R(r);if("number"==typeof n)switch(n){case 1:case 101:return j.apply(void 0,o);case 102:case 2:return G.apply(void 0,o);case 103:case 3:return q.apply(void 0,o);case 104:case 4:return $.apply(void 0,o);case 105:case 5:return W.apply(void 0,o);case 106:case 6:return K.apply(void 0,o);case 107:case 7:case 110:case 10:return;case 108:case 8:return nt.apply(void 0,o);case 109:case 9:return B.apply(void 0,o);case 111:case 11:return tt.apply(void 0,o)}},SUM:B,SUMPRODUCT:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=t[0].length;for(var n in t)if(t[n].length!==e)return;var o=0;for(n=0;n<t[0].length;n++){var i=!1,a=1;for(var u in t){var f=x(t[u][n]);"number"==typeof f&&(a*=f,i=!0);}i&&(o+=a);}return o},SUMSQ:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0,n=R(t),o=0;o<n.length;o++){var i=x(n[o]);"number"==typeof i&&(e+=Math.pow(i,2));}return e},SUMX2MY2:function(t,r){if(!t.find((function(t){return "number"!=typeof x(t)}))&&!r.find((function(t){return "number"!=typeof x(t)}))){for(var e=0,n=0;n<t.length;n++)e+=t[n]*t[n]-r[n]*r[n];return e}},SUMX2PY2:function(t,r){if(!t.find((function(t){return "number"!=typeof x(t)}))&&!r.find((function(t){return "number"!=typeof x(t)}))){for(var e=0,n=0;n<t.length;n++)e+=t[n]*t[n]+r[n]*r[n];return e}},SUMXMY2:function(t,r){if(!t.find((function(t){return "number"!=typeof x(t)}))&&!r.find((function(t){return "number"!=typeof x(t)}))){for(var e=0,n=0;n<t.length;n++)e+=Math.pow(t[n]-r[n],2);return e}},TAN:function(t){var r=x(t);if("number"==typeof r)return Math.tan(r)},TANH:function(t){var r=x(t);if("number"==typeof r)return Math.tanh(r)},TRUNC:function(t){var r=x(t);if("number"==typeof r)return H(r)},VAR:J,"VAR.S":J,"VAR.P":tt,VARA:Z,VARP:tt,VARPA:rt,WEIBULL:At,"WEIBULL.DIST":At};var Lt=/[\0-\x1F]/g;var Pt=Object.freeze({__proto__:null,CONCATENATE:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return R(t).join("")},LEFT:function(t,r){return L(t)?"":t.toString().substring(0,r)},MID:function(t,r,e){return L(t)?"":t.toString().substring(r,r+e)},RIGHT:function(t,r){return L(t)?"":t.toString().substring(t.length-r)},LOWER:function(t){return L(t)?"":t.toString().toLowerCase()},UPPER:function(t){return L(t)?"":t.toString().toUpperCase()},PROPER:function(t){if(L(t))return "";var r=t.toString().toLowerCase().split(" ");for(var e in t="",r)t+=(t?" ":"")+r[e].substring(0,1).toUpperCase()+r[e].substring(1);return t},TRIM:function(t){return L(t)?"":t.toString().trim()},LEN:function(t){return L(t)?0:t.toString().length},CHAR:function(t){var r=x(t);if("number"==typeof r)return String.fromCharCode(r)},CLEAN:function(t){return void 0===t&&(t=""),(""+t).replace(Lt,"")},CODE:function(t){return void 0===t&&(t=""),(""+t).charCodeAt(0)},EXACT:function(t,r){return t===r},FIND:function(t,r,e){void 0===e&&(e=0);var n=x(e);if("number"==typeof n&&r)return (""+r).indexOf(""+t,n-1)+1;throw"index cannot be string"},FIXED:function(t,r,e){void 0===r&&(r=2),void 0===e&&(e=!1);var n=x(t),o=x(r);if("number"==typeof n&&"number"==typeof o){var i=n.toFixed(o);if(P(e))return ""+i;var a=(""+i).split("."),u=a[0],f=a[1];return u.replace(/\B(?=(\d{3})+(?!\d))/g,",")+"."+f}},NUMBERVALUE:function(t,r,e){if(void 0===r&&(r="."),void 0===e&&(e=","),"string"==typeof t&&"string"==typeof r&&"string"==typeof e)return Number(t.replace(r,".").replace(e,""))},REGEXEXTRACT:function(t,r){if("string"==typeof t&&"string"==typeof r){var e=t.match(new RegExp(r));return e?e[e.length>1?e.length-1:0]:null}},REGEXMATCH:function(t,r){if("string"==typeof t&&"string"==typeof r)return !!t.match(new RegExp(r))},REGEXREPLACE:function(t,r,e){if("string"==typeof t&&"string"==typeof r)return t.replace(new RegExp(r),""+e)},REPT:function(t,r){var e=x(r);if("number"==typeof e)return new Array(e+1).join(""+t)},SEARCH:function(t,r,e){void 0===e&&(e=0);var n=x(e);if("number"==typeof n){var o=(""+r).toLowerCase().indexOf((""+t).toLowerCase(),n-1)+1;if(0!==o)return o;throw"not found"}},SUBSTITUTE:function(t,r,e,n){if(!t||!r||!e&&""!==e)return ""+t;if(void 0===n)return (""+t).replace(new RegExp(""+r,"g"),""+e);for(var o=0,i=0;(""+t).indexOf(""+r,o)>0;)if(o=(""+t).indexOf(""+r,o+1),++i===n)return (""+t).substring(0,o)+e+(""+t).substring(o+(""+r).length)},T:function(t){return "string"==typeof t&&"TRUE"!==t&&"FALSE"!==t?""+t:""},JOIN:function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];var n=[];return r.forEach((function(r){"object"==typeof r?n.push(r.join(""+t)):n.push(r);})),n.join(""+t)},REPLACE:function(t,r,e,n){var o=x(r),i=x(e);if("number"==typeof o&&"number"==typeof i){var a=t.toString(),u=n.toString();return a.replace(a.substr(o-1,i),u)}},ARRAYTOTEXT:function(t,r){return r?"{"+t.map((function(t){return "string"==typeof t?'"'+t+'"':t})).join("; ")+"}":t.join("; ")}});function Ft(t){return void 0===t?null:t}function Ut(t,r,e,n){void 0===e&&(e=0);var o=-1;if(0===e)o=r.indexOf(t);else{var i="string"==typeof t?"":-1/0*e;1===e?r.forEach((function(r,e){r<=t&&r>i&&(i=r,o=e);})):-1===e&&r.forEach((function(r,e){r>=t&&r<i&&(i=r,o=e);}));}return o+1}var kt={LOOKUP:function(t,r,e){var n=Ut(t,r,1);if(0===n)throw"#N/A";return (e||r)[n-1]},HLOOKUP:function(t,r,e,n){var o=!0;void 0!==n&&(o=P(n));var i=r.$width?r.$width:r.length,a=Ut(t,r.slice(0,i),o?1:0);if(0===a)throw"#N/A";return Ft(r[i*((e||1)-1)+a-1])},VLOOKUP:function(t,r,e,n){var o=!0;void 0!==n&&(o=P(n));var i,a=r.$width?r.$width:1,u=r.length/a;if(1===u)i=r;else{i=[];for(var f=0;f<u;f++)i.push(r[a*f]);}var s=e,h=Ut(t,i,o?1:0);if(0===h)throw"#N/A";return Ft(r[a*(h-1)+(s||1)-1])},XLOOKUP:function(t,r,e,n,o,i){var a=Ut(t,r,o);if(0===a){if(void 0!==n)return n;throw"#N/A"}return (e||r)[a-1]},INDEX:function(t,r,e){var n=r,o=e;return Ft(t[(t.$width?t.$width:1)*(n-1)+(o||1)-1])},MATCH:function(t,r,e){var n=e;void 0===e&&(n=1);var o=Ut(t,r,n);if(0===o)throw"#N/A";return o},XMATCH:function(t,r,e,n){var o=Ut(t,r,e);if(0===o)throw"#N/A";return o}},Vt=[[],[1,2,3,4,5,6,7],[7,1,2,3,4,5,6],[6,0,1,2,3,4,5],[],[],[],[],[],[],[],[7,1,2,3,4,5,6],[6,7,1,2,3,4,5],[5,6,7,1,2,3,4],[4,5,6,7,1,2,3],[3,4,5,6,7,1,2],[2,3,4,5,6,7,1],[1,2,3,4,5,6,7]],Xt=[void 0,0,1,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,1,2,3,4,5,6,0],Ht=[[],[6,0],[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],void 0,void 0,void 0,[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]];function Yt(t,r){var e=F(t),n=F(r);if(e&&n)return Math.round((e.getTime()-n.getTime())/864e5)}function Bt(t){var r=F(t);if(r){r.setHours(0,0,0),r.setDate(r.getDate()+4-(r.getDay()||7));var e=new Date(r.getFullYear(),0,1);return Math.ceil(((r.getTime()-e.getTime())/864e5+1)/7)}}function jt(t,r,e,n){var o=F(t),i=F(r);if(o&&i){for(var a=void 0===e?Ht[1]:Ht[e],u=n||[],f=0;f<u.length;f++){if((l=S(u[f]))instanceof Error)throw"The "+u[f]+" is not a  number";u[f]=l;}var s=(i.getTime()-o.getTime())/864e5+1,h=Math.round(s),c=o;for(f=0;f<s;f++){var p=(new Date).getTimezoneOffset()>0?c.getUTCDay():c.getDay(),v=!1;p!==a[0]&&p!==a[1]||(v=!0);for(var g=0;g<u.length;g++){var l;if((l=u[g]).getDate()===c.getDate()&&l.getMonth()===c.getMonth()&&l.getFullYear()===c.getFullYear()){v=!0;break}}v&&h--,c.setDate(c.getDate()+1);}return h}}function zt(t,r,e,n){var o=F(t),i=x(r);if(o&&"number"==typeof i){for(var a=void 0===e?Ht[1]:Ht[e],u=n||[],f=0;f<u.length;f++){if((p=S(u[f]))instanceof Error)throw"The "+u[f]+" is not a  number";u[f]=p;}for(var s=0;s<i;){o.setDate(o.getDate()+1);var h=o.getDay();if(h!==a[0]&&h!==a[1]){for(var c=0;c<u.length;c++){var p;if((p=u[c]).getDate()===o.getDate()&&p.getMonth()===o.getMonth()&&p.getFullYear()===o.getFullYear()){s--;break}}s++;}}return O(o)}}function Gt(t){return 1===new Date(t,1,29).getMonth()}function qt(t,r,e){void 0===e&&(e=0);var n=F(t),o=F(r);if(n&&o){var i=n.getDate(),a=n.getMonth()+1,u=n.getFullYear(),f=o.getDate(),s=o.getMonth()+1,h=o.getFullYear(),c=365,p=h-u+1,v=(new Date(h+1,0,1).getTime()-new Date(u,0,1).getTime())/1e3/60/60/24/p;switch(e){case 0:return 31===i&&31===f?(i=30,f=30):31===i?i=30:30===i&&31===f&&(f=30),(f+30*s+360*h-(i+30*a+360*u))/360;case 1:return u===h||u+1===h&&(a>s||a===s&&i>=f)?((u===h&&Gt(u)||function(t,r){var e=t.getFullYear(),n=new Date(e,2,1);if(Gt(e)&&t<n&&r>=n)return !0;var o=r.getFullYear(),i=new Date(o,2,1);return Gt(o)&&r>=i&&t<i}(n,o)||1===s&&29===f)&&(c=366),Yt(o.toDateString(),n.toDateString())/c):Yt(o.toDateString(),n.toDateString())/v;case 2:return Yt(o.toDateString(),n.toDateString())/360;case 3:return Yt(o.toDateString(),n.toDateString())/365;case 4:return (f+30*s+360*h-(i+30*a+360*u))/360}}}var $t={DATE:function(t,r,e){return O(new Date(t,r-1,e))},TIME:function(t,r,e){var n=O(new Date(1900,0,1,t,r,e,0));return n-Math.trunc(n)},DAY:function(t){return S(t).getDate()},MONTH:function(t){return S(t).getMonth()+1},YEAR:function(t){return S(t).getFullYear()},HOUR:function(t){return S(t).getHours()},MINUTE:function(t){return S(t).getMinutes()},SECOND:function(t){return S(t).getSeconds()},NOW:function(){return O(new Date)},DATEDIF:function(t,r,e){var n=e.toLowerCase();if("d"===n)return r-t;var o=S(t),i=S(r);switch(n){case"y":return i.getFullYear()-o.getFullYear();case"m":return (u=12*(i.getFullYear()-o.getFullYear()))+i.getMonth()-o.getMonth();case"d":return Math.floor(r-t);case"md":if((f=i.getDate()-o.getDate())<0){var a=new Date(o.getFullYear(),o.getMonth()+1,0).getDate();return i.getDate()+a-o.getDate()}return f;case"ym":var u;return (u=i.getMonth()-o.getMonth())<0?12+u:u;case"yd":var f;return (f=A(i)-A(o))<0?365+f:f}},DATEVALUE:function(t){if("string"==typeof t)return O(new Date(new Date(t).toDateString()))},DAYS:Yt,DAYS360:function(t,r,e){void 0===e&&(e=0);var n=F(t),o=F(r);if(n&&o){var i=n.getMonth(),a=o.getMonth(),u=void 0,f=void 0;if(P(e))u=31===n.getDate()?30:n.getDate(),f=31===o.getDate()?30:o.getDate();else{var s=new Date(n.getFullYear(),i+1,0).getDate(),h=new Date(o.getFullYear(),a+1,0).getDate();u=n.getDate()===s?30:n.getDate(),o.getDate()===h?u<30?(a++,f=1):f=30:f=o.getDate();}return 360*(o.getFullYear()-n.getFullYear())+30*(a-i)+(f-u)}},EDATE:function(t,r){var e=F(t),n=x(r);if(e&&"number"==typeof n)return e.setMonth(e.getMonth()+n),O(e)},EOMONTH:function(t,r){var e=F(t),n=x(r);if(e&&"number"==typeof n)return O(new Date(e.getFullYear(),e.getMonth()+n+1,0))},ISOWEEKNUM:Bt,NETWORKDAYS:function(t,r,e){return jt(t,r,1,e)},"NETWORKDAYS.INTL":jt,TIMEVALUE:function(t){if("string"==typeof t){var r=t.split(" "),e=r[1],n=r[0].split(":"),o=new Date;return o.setHours(+n[0]),e&&"PM"===e.toUpperCase()&&o.setHours(o.getHours()+12),o.setMinutes(+n[1]),n[2]&&o.setSeconds(+n[2]),(3600*o.getHours()+60*o.getMinutes()+o.getSeconds())/86400}},WEEKNUM:function(t,r){void 0===r&&(r=1);var e=F(t);if(21===r)return Bt(r);var n=Xt[r],o=new Date(e.getFullYear(),0,1),i=o.getDay()<n?1:0,a=o.getTime()-24*Math.abs(o.getDay()-n)*60*60*1e3;return Math.floor((e.getTime()-a)/864e5/7+1)+i},WEEKDAY:function(t,r){void 0===r&&(r=1);var e=F(t).getDay();return Vt[r][e]},WORKDAY:function(t,r,e){return zt(t,r,1,e)},"WORKDAY.INTL":zt,YEARFRAC:qt};var Wt=Object.freeze({__proto__:null,IF:function(t,r,e){return t?r:e},AND:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0;e<t.length;e++)if(!P(t[e]))return !1;return !0},NOT:function(t){return !P(t)},OR:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0;e<t.length;e++)if(t[e])return !0;return !1},CHOOSE:function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];var n=x(t);if(r.length>1&&"number"==typeof n){if(r.length<n)throw"the index number is greater than the length of the array of values";if(n<=0)throw"index cannot be less than or equal to 0";return r[--n]}},FALSE:function(){return !1},TRUE:function(){return !0}});var Kt=Object.freeze({__proto__:null,ISBLANK:function(t){return L(t)},ISBINARY:function(t){return /^[01]{1,10}$/.test(""+t)},ISEVEN:function(t){var r=x(t);return "number"==typeof r&&r%2==0},ISODD:function(t){var r=x(t);return "number"==typeof r&&r%2!=0},ISNONTEXT:function(t){return "string"!=typeof t},ISNUMBER:function(t){return "number"==typeof x(t)},ISTEXT:function(t){return "string"==typeof t},N:function(t){var r=x(t);if("number"==typeof r)return r;var e=new Date(t);return e.getTime()?O(e):"TRUE"===t||!0===t?1:0}});function Qt(t,r,e,n,o){void 0===n&&(n=0),void 0===o&&(o=0);var i,a=U(t),u=U(r),f=U(e),s=U(n);if(0===a)i=(f+s)/u;else{var h=Math.pow(1+a,u);i=a*(f*h+s)/(h-1),1===o&&(i/=1+a);}return -i}function Jt(t,r,e,n,o){void 0===n&&(n=0),void 0===o&&(o=0);var i,a=U(t),u=U(r),f=U(e),s=U(n);if(0!==a){var h=Math.pow(1+a,u);return i=s*h+f*(h-1)/a,1===o&&(i=s*h+f*(1+a)*(h-1)/a),-i}i=s+f*u;}function Zt(t,r,e,n,o,i){void 0===o&&(o=0),void 0===i&&(i=0);var a=U(t),u=U(e),f=U(r),s=U(n),h=Qt(a,u,s,U(o),i);return (1===f?1===i?0:-s:1===i?Jt(a,f-2,h,s,1)-h:Jt(a,f-1,h,s,0))*a}var tr=Object.freeze({__proto__:null,ACCRINT:function(t,r,e,n,o,i,a){void 0===o&&(o=0),void 0===a&&(a=0);var u=F(t),f=F(e),s=U(n),h=U(o),c=U(i),p=U(a);if(1!==c)throw"This function is only supported with frequency 1";if(-1===[0,1,2,3,4].indexOf(p))throw"Basis is "+a+". It's should be 0, 1, 2, 3 or 4";if(f<=u)throw"Settlement canot be before or equal to issue";return h*s*qt(t,e,p)},PMT:Qt,FV:Jt,DB:function(t,r,e,n,o){void 0===o&&(o=12);var i=U(t),a=U(r),u=U(e),f=U(n),s=U(o);if(i<0||a<0||u<0||f<0)throw"Parameters cannot be negative";if(-1===[1,2,3,4,5,6,7,8,9,10,11,12].indexOf(s))throw"Month is "+o+". It's should be beetwen 1 and 12";if(f>u)throw"Period cannot be greater than life";if(a>=i)return 0;for(var h=+(1-Math.pow(a/i,1/u)).toFixed(3),c=i*h*s/12,p=c,v=0,g=n===u?u-1:n,l=2;l<=g;l++)p+=v=(i-p)*h;return 1===n?c:n===u?(i-p)*h:v},DDB:function(t,r,e,n,o){void 0===o&&(o=2);var i=U(t),a=U(r),u=U(e),f=U(n),s=U(o);if(i<0||a<0||u<0||f<0||s<0)throw"Parameters cannot be negative";if(f>u)throw"Period cannot be greater than life";if(a>=i)return 0;for(var h=0,c=0,p=1;p<=n;p++)h+=c=Math.min(s/u*(i-h),i-a-h);return c},DOLLAR:function(t,r){void 0===r&&(r=2);var e=x(t),n=x(r);if("number"==typeof e&&"number"==typeof n){if(n>=0)return "$"+e.toFixed(n);var o=Math.pow(10,-n);return "$"+Math.trunc(e/o)*o}},DOLLARDE:function(t,r){var e=U(t),n=U(r);if(n<0)throw"Fraction cannot be negative";if(n>=0&&n<1)throw"Fraction cannot be zero";n=parseInt(""+n,10);var o=parseInt(""+t,10);o+=e%1*Math.pow(10,Math.ceil(Math.log(n)/Math.LN10))/n;var i=Math.pow(10,Math.ceil(Math.log(n)/Math.LN2)+1);return o=Math.round(o*i)/i},DOLLARFR:function(t,r){var e=U(t),n=U(r);if(n<0)throw"Fraction cannot be negative";if(n>=0&&n<1)throw"Fraction cannot be zero";n=parseInt(""+n,10);var o=parseInt(""+t,10);return o+=e%1*Math.pow(10,-Math.ceil(Math.log(n)/Math.LN10))*n},EFFECT:function(t,r){var e=U(t),n=U(r);if(e<=0)throw"Rate cannot be less than or equal to zero";if(n<1)throw"Periods cannot be less than 1";return n=parseInt(""+n,10),Math.pow(1+e/n,n)-1},FVSCHEDULE:function(t,r){for(var e=U(t),n=r.map((function(t){return U(t)})),o=n.length,i=e,a=0;a<o;a++)i*=1+n[a];return i},IRR:function(t,r){void 0===r&&(r=0);for(var e=R(t).map((function(t){return U(t)})),n=U(r),o=function(t,r,e){for(var n=e+1,o=t[0],i=1;i<t.length;i++)o+=t[i]/Math.pow(n,(r[i]-r[0])/365);return o},i=function(t,r,e){for(var n=e+1,o=0,i=1;i<t.length;i++){var a=(r[i]-r[0])/365;o-=a*t[i]/Math.pow(n,a+1);}return o},a=[],u=!1,f=!1,s=0;s<e.length;s++)a[s]=0===s?0:a[s-1]+365,e[s]>0&&(u=!0),e[s]<0&&(f=!0);if(!u||!f)throw"Values should contain at least one positive value and one negative value";var h,c,p,v=n=void 0===r?.1:n,g=!0;do{h=v-(p=o(e,a,v))/i(e,a,v),c=Math.abs(h-v),v=h,g=c>1e-10&&Math.abs(p)>1e-10;}while(g);return v},IPMT:Zt,ISPMT:function(t,r,e,n){var o=U(t),i=U(r),a=U(e);return U(n)*o*(i/a-1)},NPV:function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=R(t).map((function(t){return U(t)})),n=U(e[0]),o=0,i=1;i<e.length;i++)o+=e[i]/Math.pow(1+n,i);return o},NOMINAL:function(t,r){var e=U(t),n=U(r);if(e<=0)throw"Rate cannot be less then or equal to zero";if(n<1)throw"Periods cannot be less then 1";return n=parseInt(""+n,10),(Math.pow(e+1,1/n)-1)*n},NPER:function(t,r,e,n,o){void 0===n&&(n=0),void 0===o&&(o=0);var i=U(t),a=U(r),u=U(e),f=U(n),s=U(o),h=a*(1+i*s)-f*i,c=u*i+a*(1+i*s);return Math.log(h/c)/Math.log(1+i)},PDURATION:function(t,r,e){var n=U(t),o=U(r),i=U(e);if(n<=0)throw"Rate cannot be less then or equal to zero";return (Math.log(i)-Math.log(o))/Math.log(1+n)},PPMT:function(t,r,e,n,o,i){void 0===o&&(o=0),void 0===i&&(i=0);var a=U(t),u=U(r),f=U(e),s=U(n),h=U(o),c=U(i);return Qt(a,f,s,h,c)-Zt(a,u,f,s,h,c)},PV:function(t,r,e,n,o){void 0===n&&(n=0),void 0===o&&(o=0);var i=U(t),a=U(r),u=U(e),f=U(n),s=U(o);return 0===i?-u*a-f:((1-Math.pow(1+i,a))/i*u*(1+i*s)-f)/Math.pow(1+i,a)},SYD:function(t,r,e,n){var o=U(t),i=U(r),a=U(e);return (o-i)*(a-U(n)+1)*2/(a*(a+1))},TBILLPRICE:function(t,r,e){var n=F(t),o=F(r),i=U(e);if("number"==typeof i&&o>n)return 100*(1-i*Math.round((o.getTime()-n.getTime())/864e5)/360)},TBILLYIELD:function(t,r,e){var n=F(t),o=F(r),i=U(e);if("number"==typeof i&&o>n)return (100-i)/i*360/Math.round((o.getTime()-n.getTime())/864e5)}}),rr={number:Rt,string:Pt,date:$t,other:Wt,information:Kt,financial:tr,lookup:kt},er=e(e(e(e(e(e(e({},Rt),Pt),$t),Wt),Kt),tr),kt);var nr=Math.pow(10,8);function or(t,r,e){e.add?t.has(r)||e.add(r):t.add(r);}function ir(t){if(t.keys)return Array.from(t.keys());var r=[];return t.forEach((function(t,e){return r.push(e)})),r}function ar(t){if(t.values)return t.values();var r=[];t.forEach((function(t,e){return r.push(e)}));var e=0;return {add:function(t){r.push(t);},next:function(){var t=r[e];return {done:++e>r.length,value:t}}}}var ur=function(){function t(t){var r=this;(t=t||{get:null,set:null,strict:!1})&&(this._getter=t.get,this._setter=t.set,this._strict=t.strict),this._parser=_,this._printer=I,this._parseContext={name:function(){},pageName:function(){return ""},pageObj:function(){return null},page:function(){return 0},z:0},this.$count=0,this._data=new Map,this._triggers=new Map,this._holders={},this._context={v:function(t){if(-1===t)throw new Error;var e=r._getter(t);return void 0===e?null:e},r:function(t,e){var n=o(t),i=n[0],a=n[1],u=o(e),f=u[0]-i,s=u[1]-a+1,h=[];h.$width=s;for(var c=0;c<=f;c++)for(var p=0;p<s;p++)h[c*s+p]=r._getter(t+64*p+4096*c*64);return h},m:er,e:function(t){throw t},p:function(t){return r.getPlaceholder(t)}};}return t.prototype.setValue=function(t,r,e,n){""===r&&(r=null),this._removeTriggers(t,null),this._setter(t,r,e)&&(n||this.trigger(t));},t.prototype.clean=function(t){this._removeTriggers(t,null);},t.prototype.getValue=function(t){return this._getter(t)},t.prototype.setPlaceholder=function(t,r){var e=this;"*"===t?Object.entries(r).forEach((function(t){return e.setPlaceholder(t[0],t[1])})):(null===r?delete this._holders[t]:this._holders[t]=r,this.each((function(r,n){(function(t,r,e){for(var n=0;n<t.length;n+=3)if(2===t[n]&&r.substr(t[n+1],t[n+2])==e)return !0;return !1})(n.code,n.source,t)&&e.setMath(r,n.source,e._parseContext);})));},t.prototype.getPlaceholder=function(t){if("*"===t)return this._holders;var r=this._holders[t];return void 0===r?null:r},t.prototype.setMath=function(t,r,e,n){var o=this._generate(r,e),i=this._setMathAt(t,o);n||this._execAndTrigger(i);},t.prototype.refresh=function(t){this._execAndTrigger(t);},t.prototype.getMath=function(t){return this._data.get(t)},t.prototype.trigger=function(t,r){var e=this._triggers.get(t);if(e){var n=!r;r||(r=new Set);for(var o=0;o<e.length;o++)r.add(e[o]);n&&this.triggerSet(r);}return null},t.prototype.triggerSet=function(t){for(var r=this,e=new Map;t.size;){var n=ar(t),o=!1;t:for(var i=n.next();!i.done;i=n.next()){var a=this._data.get(i.value),u=e.get(i.value);if(!u||(1==u&&(u=this._check_for_loops(i.value,a.triggers,e)),2!=u)){var f=a.triggers;if(f)for(var s=0;s<f.length;s++)if(t.has(f[s]))continue t;this._execAndTrigger(i.value,t),u||e.set(i.value,1),t.delete(i.value),o=!0;}}if(!o)return void t.forEach((function(e){return r._errorAndTrigger(e,t)}))}},t.prototype.getStats=function(){return {math:this._data.size,trigger:this._triggers.size}},t.prototype._check_for_loops=function(t,r,e){var n=new Set;r.forEach((function(t){return n.add(t)}));for(var o=ar(n),i=o.next();!i.done;i=o.next()){if(i.value==t)return e.set(t,2),2;var a=e.get(i.value);if(a&&a>1)return e.set(t,a),a;var u=this._data.get(i.value);u&&u.triggers&&u.triggers.forEach((function(t){return or(n,t,o)}));}return e.set(t,3),3},t.prototype._setMathAt=function(t,r){if(this._removeTriggers(t,r)){if(r.triggers)if(-1===r.triggers.indexOf(t)&&3!==r.broken)for(var n=0;n<r.triggers.length;n++){var o=r.triggers[n],i=this._triggers.get(o);void 0===i&&(i=[],this._triggers.set(o,i)),i.push(t);}else r=e(e({},r),{broken:3});return this._data.set(t,r),t}},t.prototype._removeTriggers=function(t,r){var e=this._data.get(t);if(!e)return !0;if(e===r)return !1;var n=e.triggers;if(n&&3!==e.broken)for(var o=0;o<n.length;o++){var i=n[o],a=this._triggers.get(i);if(a){var u=a.filter((function(r){return r!==t}));u.length?this._triggers.set(i,u):this._triggers.delete(i);}}return this._data.delete(t),!0},t.prototype.parse=function(t,r){return this._parser(t,r||this._parseContext)},t.prototype.exec=function(t,r){var e=this._generate(t,r);return this._exec(e)},t.prototype.each=function(t){var r=this;ir(this._data).forEach((function(e){return t(e,r._data.get(e))}));},t.prototype.setLogger=function(t){this._err_handler=t;},t.prototype._setErr=function(t,e){return t.broken=2,e&&this._err_handler&&this._err_handler(e),r[t.broken]},t.prototype._exec=function(t){if(t.broken>0&&2!==t.broken)return r[t.broken];try{var e=t.exec(this._context);return t.broken=0,"number"==typeof e?isFinite(e)?Math.round(e*nr)/nr:this._setErr(t):e}catch(r){return this._setErr(t,r)}},t.prototype.toString=function(t,r){return s(t,r||this._parseContext)},t.prototype.regenerate=function(t,r,n){var o=this;n=e({},n||this._parseContext),ir(this._data).forEach((function(e){var i=!1,a=o._data.get(e),f=u(e);if(r&&f===t)o._removeTriggers(e,null);else{for(var h=0;h<a.code.length;h+=3)if(9===a.code[h]&&u(a.code[h+1])===t){i=!0;break}i&&(n.z=f,r?o.setMath(e,a.source,n):(a.source=s(a,n),a.code=o._parser(a.source,n).code));}}));},t.prototype.recalculate=function(t,r){var n=this;r=e({},r||this._parseContext);var o=new Set;this.each((function(e){if(t){var i=n._data.get(e);if(i.broken&&2!==i.broken)return r.z=u(e),void n.setMath(e,i.source,r)}o.add(e);})),this.triggerSet(o);},t.prototype._generate=function(t,r,e){var n=e||this._parser(t,r||this._parseContext);return this._printer(n,this._strict),n.triggers=function(t){for(var r=[],e=t.code,n=e.length,o=0;o<n;o+=3){switch(e[o]){case 7:case 6:var i=e[o+4];r.push(i);break;case 8:f(e[o+4],e[o+7],(function(t){return r.push(t)}));}}if(r.length>10){var a=new Set;r=r.filter((function(t){return !a.has(t)&&(a.add(t),!0)}));}return r.length?r:null}(n),n},t.prototype._execAndTrigger=function(t,r){this.$count+=1;var e=this._data.get(t);if(e){var n=this._exec(e);this._setter(t,n,2)&&this.trigger(t,r);}},t.prototype._errorAndTrigger=function(t,r){var e=this._data.get(t),n=this._setErr(e);this._setter(t,n,2)&&this.trigger(t,r);},t.prototype.debug=function(t){console.log(function(t){for(var r=t.code,e=t.source,n="",o=r.length,i=0;i<o;i+=3){var a=r[i],u=void 0;switch(a){case 4:u="method";break;case 1:u="text";break;case 5:u="page";break;case 2:u="holder";break;case 6:u="name";break;case 7:u="arg";break;case 8:u="range";break;case 9:u="data";break;case 10:u="op";break;case 11:u="number";break;case 3:u="error";break;case 12:u="extra";}n+=9===a?"              "+r[i+1]+" x "+r[i+2]+")\n":"["+u+"]"+w(u)+e.substr(r[i+1],r[i+2])+"\n";}return n}(this.parse(t)));},t.prototype.transpose=function(t,r,i,a){var u=this;a=a||this._parseContext;var f=o(t),s=f[0],h=f[1],c=f[2],p=new Map,v=new Map,g=new Set;ir(this._data).forEach((function(t){var f=o(t),l=f[0],d=f[1],b=f[2],M=u._data.get(t),y=b===a.z?a:e(e({},a),{z:b}),m=u._transpose(M,s,h,r,i,a,y),_=t;if(b===c&&(d>=h||l>=s)&&(_=n(l>=s?l+r:l,d>=h?d+i:d,b)),M!==m||t!==_){if(v.set(t,m),b===c&&(i<0&&d>=h&&d<h-i||r<0&&l>=s&&l<s-r))return;p.set(_,m),M.broken!==m.broken&&g.add(_);}})),ir(p).forEach((function(t){return u._setMathAt(t,p.get(t))})),Array.from(v.keys()).forEach((function(t){p.has(t)||u._removeTriggers(t,null);})),r>0&&this._triggerRow(s,r,g),i>0&&this._triggerColumn(h,i,g),r<0&&this._triggerColumn(s-1,2,g),i<0&&this._triggerColumn(h-1,2,g),this.triggerSet(g);},t.prototype._triggerColumn=function(t,r,e){var n=this,o=r?t+r:t;ir(this._triggers).forEach((function(r){var i=a(r);i>=t&&i<o&&n.trigger(r,e);}));},t.prototype._triggerRow=function(t,r,e){var n=this,o=r?t+r:t;ir(this._triggers).forEach((function(r){var a=i(r);a>=t&&a<o&&n.trigger(r,e);}));},t.prototype.transposeMath=function(t,r,e,n){return "string"==typeof t&&(t=this.parse(t,n)),n=n||this._parseContext,this._transpose(t,-1,-1,r,e,n,n).source},t.prototype._transpose=function(t,r,e,i,a,u,f){for(var h=!0,c=t.code,p=!(r<0||e<0),v=0;v<c.length;v+=3)if(7===c[v]){var g=o(c[v+4]),l=g[0],d=g[1],b=g[2];if(u.z!==b)continue;var M=c[v+5];if(!p&&3==M)continue;(p||0==(1&M))&&0!==i&&l>=r&&(h&&(c=[].concat(c),h=!1),((l+=i)<r||l<0)&&(c[v]=3)),(p||0==(2&M))&&0!==a&&d>=e&&(h&&(c=[].concat(c),h=!1),((d+=a)<e||d<0)&&(c[v]=3)),h||(c[v+4]=n(l,d,b)),v+=3;}else if(8===c[v]){var y=c[v+5],m=c[v+8];if(!p&&3===y&&3===m)continue;var _=o(c[v+4]),w=_[0],E=_[1],I=(b=_[2],o(c[v+7])),C=I[0],T=I[1];if(u.z!==b)continue;0!==i&&((p||0==(1&y))&&(i>0?w>=r:w>r)&&(h&&(c=[].concat(c),h=!1),(w+=i)<0&&(c[v]=3)),(p||0==(1&m))&&C>=r&&(h&&(c=[].concat(c),h=!1),(C+=i)<w&&(c[v]=3))),0!==a&&((p||0==(2&y))&&(a>0?E>=e:E>e)&&(h&&(c=[].concat(c),h=!1),(E+=a)<0&&(c[v]=3)),(p||0==(2&m))&&T>=e&&(h&&(c=[].concat(c),h=!1),(T+=a)<E&&(c[v]=3))),h||(c[v+4]=n(w,E,b),c[v+7]=n(C,T,b)),v+=6;}if(h)return t;var D={code:c,broken:t.broken,source:t.source,triggers:null,exec:null};return D=this._parser(s(D,f),f),this._generate(D.source,f,D)},t}();var fr=function(){function t(t,r,n){this._data=[],this._id=t,this._store=r,this._meta={},this._parseContext=e(e({},n),{z:t});}return t.prototype.getMeta=function(){return this._meta},t.prototype.setMeta=function(t){this._meta=e(e({},this._meta),t);},t.prototype.getID=function(){return this._id},t.prototype.cellID=function(t,r){return n(t,r,this._id)},t.prototype.getSize=function(){var t=this._data.length,r=0;return this._data.forEach((function(t){t&&t.length>r&&(r=t.length);})),[t,r]},t.prototype.getContext=function(){return this._parseContext},t.prototype.addRow=function(t,r){this._data.splice.apply(this._data,sr(t,r)),this._store.transpose(n(t,0,this._id),r,0,this._parseContext);},t.prototype.removeRow=function(t,r){this._data.splice(t,r),this._store.transpose(n(t,0,this._id),-r,0,this._parseContext);},t.prototype.addColumn=function(t,r){var e=sr(t,r);this._data.forEach((function(t){t&&t.splice.apply(t,e);})),this._store.transpose(n(0,t,this._id),0,r,this._parseContext);},t.prototype.removeColumn=function(t,r){this._data.forEach((function(e){e&&e.splice(t,r);})),this._store.transpose(n(0,t,this._id),0,-r,this._parseContext);},t.prototype.setCell=function(t,r,n){var o=this._data[t];o||(o=this._data[t]=[]);var i=o[r];o[r]=i?e(e(e({},i),n),{value:i.value}):n,void 0!==n.value&&this.setValue(t,r,n.value);},t.prototype.setValue=function(t,r,e,o){"string"==typeof e&&e.length>1&&"="===e[0]?this._store.setMath(n(t,r,this._id),e.substr(1),this._parseContext):this._store.setValue(n(t,r,this._id),e,o);},t.prototype.getCell=function(t,r,e){var n=this._data[t],o=n?n[r]:null;return o||!e||(n||(n=this._data[t]=[]),(o=n[r])||(o=n[r]={value:""})),o},t.prototype.getValue=function(t,r,e){if(e){var o=this._store.getMath(n(t,r,this._id));if(o)return "="+o.source}var i=this.getCell(t,r,!1);return i?i.value:null},t.prototype.getRange=function(t,r,e,n){for(var o=[],i=t;i<=e;i++)for(var a=r;a<=n;a++)o.push(this.getValue(i,a,!1));return o},t.prototype.getCellRange=function(t,r,e,n){for(var o=[],i=t;i<=e;i++)for(var a=r;a<=n;a++)o.push(this.getCell(i,a));return o},t.prototype.eachCell=function(t){this._data.forEach((function(r,e){r&&r.forEach((function(r,n){r&&t(e,n,r);}));}));},t.prototype.serialize=function(t){var r=this,o=[];return this.eachCell((function(i,a,u){if(u=e({},u),t){var f=r._store.getMath(n(i,a,r.getID()));f&&(u.value="="+f.source);}o.push([i,a,u]);})),o},t.prototype.parse=function(t,r){var o=this;this._store.each((function(t){u(t)===o._id&&o._store.clean(t);})),this._data=[];var i=new Set;t.forEach((function(t){var a=t[0],u=t[1],f=t[2],s=o._data[a];s||(s=o._data[a]=[]);var h=(f=s[u]=e({},f)).value;if(h)if("string"==typeof h&&h.length>1&&"="===h[0]){var c=n(a,u,o._id),p=h.substr(1);o._store.setMath(c,p,o.getContext(),!0),i.add(c);}else if(r){f.value=null;c=n(a,u,o._id);o._store.setValue(c,h,null,!0),o._store.trigger(c,i);}})),this._store.triggerSet(i);},t}();function sr(t,r){for(var e=[t,0],n=0;n<r;n++)e.push(null);return e}var hr=function(){function t(t,r,e){this._ranges=new Map,this._counter=1,this._rangeOrder=[],this._store=t,this._page=r,this._pageGetter=e;}return t.prototype.get=function(t){return this._store.getMath(this._ranges.get(t))},t.prototype.toId=function(t){return this._ranges.get(t)},t.prototype.add=function(t,r){var e=this._ranges.get(t)||this._next_id();this._store.setMath(e,r,this._page.getContext()),this._ranges.set(t,e),this._refresh(t);},t.prototype.remove=function(t){this._ranges.delete(t),this._counter=1,this._refresh(t);},t.prototype.serialize=function(){var t=this;return Array.from(this._ranges.keys()).map((function(r){return [r,t.get(r).source]}))},t.prototype.parse=function(t){var r=this;t.forEach((function(t){return r.add(t[0],t[1])}));},t.prototype._refresh=function(t){var r=this,e=t.indexOf("!"),n="";-1!==e&&(n=t.substr(0,e),t=t.substr(e+1)),this._store.each((function(e,o){if(function(t,r,e,n){for(var o=0;o<t.length;o+=3)if(6===t[o]){if(""!==e){if(5===t[o-3]&&r.substr(t[o-2],t[o-1])!==e)continue;return !0}if(r.substr(t[o+1],t[o+2])===n)return !0}return !1}(o.code,o.source,n,t)){var i=u(e);r._store.setMath(e,o.source,r._pageGetter(i).getContext());}}));},t.prototype._next_id=function(){for(;this._rangeOrder[this._counter];)this._counter++;return this._rangeOrder[this._counter]=!0,n(this._counter,0,this._page.getID())},t.prototype.renamePage=function(t,r){var e=this;t+="!",r&&(r+="!"),this._ranges.forEach((function(n,o,i){0===o.indexOf(t)&&(r?i.set(o.replace(t,r),n):e._store.clean(n),i.delete(o));}));},t}();var cr=function(){function t(t){var r=this;this._cfg=t||{strict:!1},this._pages=[],this._pageNames=[],this._pageName2ID=new Map,this._pCounter=0,this._parseContext={page:function(t){return r._pageName2ID.get(t)},pageName:function(t){return r._pageNames[t]},pageObj:function(t){return r._pages[t]},name:function(t,e,n){var o,i=t.length,a=e.substr(t[i-2],t[i-1]);if(5===t[i-6]){var u=e.substr(t[i-5],t[i-4]);o=r._ranges.toId(u+"!"+a)||r._ranges.toId(a);}else o=r._ranges.toId(n.pageName(n.z)+"!"+a)||r._ranges.toId(a);t.push(9,o||-1,0);},z:0},this._store=new ur(e(e({},this._cfg),{get:function(t){var e=o(t),n=e[0],i=e[1],a=e[2];return r._pages[a].getValue(n,i)},set:function(t,e,n){var i=o(t),a=i[0],u=i[1],f=i[2],s=r._pages[f].getCell(a,u,!0),h=2===n;if(null!=n&&2!=n||(n=s.$format||0),s.$format=n,"string"==typeof e&&1!=n&&e){var c=parseFloat(e);h&&(c=c.toString()),c==e&&(e=parseFloat(e));}return s.value!==e&&(s.value=e,!0)}}));var n=this._pages[63]=new fr(63,this._store,this._parseContext);this._ranges=new hr(this._store,n,this.getPage.bind(this));}return t.prototype.addPage=function(t){for(;this._pages[this._pCounter];)this._pCounter++;var r=this._pCounter,e=new fr(r,this._store,this._parseContext);return this._pageName2ID.set(t,r),this._pages[r]=e,this._pageNames[r]=t,e},t.prototype.renamePage=function(t,r){if(t!==r){var e=this._pageName2ID.get(t);this._pageName2ID.delete(t),this._pageName2ID.set(r,e),this._pageNames[e]=r,this._ranges.renamePage(t,r);var n=this._pages[e].getContext();this._store.regenerate(e,!1,n);}},t.prototype.removePage=function(t){var r=this._pageName2ID.get(t),e=this._pages[r].getContext();this._pageName2ID.delete(t),this._pages[r]=this._pageNames[r]=null,this._pCounter=0,this._ranges.renamePage(t,null),this._store.regenerate(r,!0,e);},t.prototype.getPage=function(t){return "string"==typeof t&&(t=this._pageName2ID.get(t)),this._pages[t]},t.prototype.getRanges=function(){return this._ranges},t.prototype.getStore=function(){return this._store},t}();exports.D_COMMON=0,exports.D_STRING=1,exports.DataPage=fr,exports.DataStore=cr,exports.Store=ur,exports.T_ARG=7,exports.T_DATA=9,exports.T_ERROR=3,exports.T_METHOD=4,exports.T_NAME=6,exports.T_NUMBER=11,exports.T_OPERATOR=10,exports.T_PAGE=5,exports.T_PLACEHOLDER=2,exports.T_RANGE=8,exports.T_SPACE=12,exports.T_TEXT=1,exports.addMethod=function(t,r){er[t]=r;},exports.column=a,exports.fromId=o,exports.methodGroups=rr,exports.methods=er,exports.page=u,exports.row=i,exports.str2id=function(t){var r=[];return m(r,t,0),r[1]},exports.str2pos=function(t){var r=[];return m(r,t,0),o(r[1]).slice(0,2)},exports.str2range=function(t){var r=[];t.split(":").map((function(t){return m(r,t,0)}));var e=o(r[1]),n=e[0],i=e[1],a=o(r[4]);return [n,i,a[0],a[1]]},exports.toId=n;

	});

	unwrapExports(muon);
	var muon_1 = muon.D_COMMON;
	var muon_2 = muon.D_STRING;
	var muon_3 = muon.DataPage;
	var muon_4 = muon.DataStore;
	var muon_5 = muon.Store;
	var muon_6 = muon.T_ARG;
	var muon_7 = muon.T_DATA;
	var muon_8 = muon.T_ERROR;
	var muon_9 = muon.T_METHOD;
	var muon_10 = muon.T_NAME;
	var muon_11 = muon.T_NUMBER;
	var muon_12 = muon.T_OPERATOR;
	var muon_13 = muon.T_PAGE;
	var muon_14 = muon.T_PLACEHOLDER;
	var muon_15 = muon.T_RANGE;
	var muon_16 = muon.T_SPACE;
	var muon_17 = muon.T_TEXT;
	var muon_18 = muon.addMethod;
	var muon_19 = muon.column;
	var muon_20 = muon.fromId;
	var muon_21 = muon.methodGroups;
	var muon_22 = muon.methods;
	var muon_23 = muon.page;
	var muon_24 = muon.row;
	var muon_25 = muon.str2id;
	var muon_26 = muon.str2pos;
	var muon_27 = muon.str2range;
	var muon_28 = muon.toId;

	function init(view) {
	  var math = {
	    IMAGE: function (url) {
	      return "<img class=\"webix_ssheet_cimage\" src=\"".concat(webix.template.escape(url), "\">");
	    },
	    HYPERLINK: function (url, text) {
	      var escape = webix.template.escape;
	      var attrs;
	      if (url[0] == "#") attrs = "href=\"javascript:void(0);\" class=\"webix_ssheet_ref\" data-ref=\"".concat(escape(url.substr(1)), "\"");else attrs = "target=\"blank\" href=\"".concat(escape(url), "\"");
	      return "<a ".concat(attrs, ">").concat(escape(text || url), "</a>");
	    },
	    SPARKLINE: function (arr, type, color1, color2) {
	      var config = {
	        type: type,
	        color: color1,
	        negativeColor: color2,
	        paddingX: 2,
	        paddingY: 2
	      };
	      if (type == "donut") webix.extend(config, {
	        type: "pie",
	        donut: 1
	      }, true);else if (type == "barH") webix.extend(config, {
	        type: "bar",
	        horizontal: 1
	      }, true);

	      for (var i = 0; i < arr.length; i++) {
	        arr[i] = arr[i] || 0;
	      }

	      var tableConfig = view.$$("cells").config; //[FIXME] we do not know from which cell the method was called, so this is not the real width and height

	      var isCircle = config.type == "pie" || type == "radar";
	      var width = isCircle ? 100 : tableConfig.columnWidth;
	      var height = isCircle ? 100 : tableConfig.rowHeight;
	      return webix.Sparklines.getTemplate(config)(arr, {
	        width: width,
	        height: height
	      });
	    }
	  };
	  var keys = Object.keys(math);
	  keys.forEach(function (key, i) {
	    return addMath(view, key, math[key], i == keys.length - 1);
	  });
	}
	function addMath(view, name, handler, sort) {
	  name = name.toUpperCase();
	  muon_18(name, handler);

	  if (view.$$("liveEditor")) {
	    var sid = view.$$("liveEditor").config.suggest;
	    var list = webix.$$(sid).getList();

	    if (!list.exists(name)) {
	      list.add({
	        id: name,
	        value: name
	      });
	      if (sort) list.sort("value", "asc", "string");
	    }
	  }
	}
	function getJsDateFromExcel(excelDate) {
	  var date = new Date(Math.round((excelDate - 25569) * 86400 * 1000));
	  return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
	}
	function getExcelDateFromJs(jsDate) {
	  var returnDateTime = 25569 + (jsDate.getTime() - jsDate.getTimezoneOffset() * 60000) / (86400 * 1000);
	  return returnDateTime.toString();
	}

	var m16a = /*#__PURE__*/Object.freeze({
		init: init,
		addMath: addMath,
		getJsDateFromExcel: getJsDateFromExcel,
		getExcelDateFromJs: getExcelDateFromJs
	});

	function getJsDate(value) {
	  if ((value || value === 0) && !(value instanceof Date) && !isNaN(value)) {
	    value = getJsDateFromExcel(value);
	  }

	  return value;
	}

	function getExcelDate(value) {
	  if (value && value instanceof Date) {
	    value = getExcelDateFromJs(value);
	  }

	  return value;
	}

	webix.protoUI({
	  $cssName: "datepicker",
	  name: "ssheet-datepicker",
	  getValue: function () {
	    var value = webix.ui.datepicker.prototype.getValue.apply(this);
	    return getExcelDate(value) || "";
	  },
	  $prepareValue: function (value) {
	    value = getJsDate(value);
	    return webix.ui.datepicker.prototype.$prepareValue.apply(this, [value]);
	  }
	}, webix.ui.datepicker);
	webix.protoUI({
	  $cssName: "daterangepicker",
	  name: "ssheet-daterangepicker",
	  getValue: function () {
	    var value = webix.ui.datepicker.prototype.getValue.apply(this);

	    if (value) {
	      value = webix.copy(value);
	      value.start = getExcelDate(value.start);
	      value.end = getExcelDate(value.end);
	    }

	    return value || "";
	  },
	  $prepareValue: function (value) {
	    if (!value) {
	      value = {
	        start: null,
	        end: null
	      };
	    } else if (!value.start && !value.end) value = {
	      start: value
	    };

	    value.start = getJsDate(value.start);
	    value.end = getJsDate(value.end);
	    return webix.ui.daterangepicker.prototype.$prepareValue.apply(this, [value]);
	  }
	}, webix.ui.daterangepicker);

	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  }
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	function _iterableToArrayLimit(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	webix.protoUI({
	  $cssName: "window",
	  name: "ssheet-dialog",
	  $init: function (config) {
	    this.$view.className += " webix_ssheet_dialog";
	    this.config.buttons = config.buttons;
	    this.config.close = true;
	  },
	  getBodyConfig: function (content) {
	    content.borderless = true;
	    var elements = this.getFormElements(content);
	    var config = {
	      view: "form",
	      css: "webix_ssheet_form",
	      padding: webix.skin.$active.layoutPadding.form,
	      elements: elements
	    };
	    return config;
	  },
	  getFormElements: function (content) {
	    var elements;
	    if (webix.isArray(content)) elements = content;else {
	      elements = [];
	      elements.push(content);
	    }

	    if (this.config.buttons) {
	      elements.push({
	        height: 1
	      });
	      elements.push({
	        margin: 10,
	        cols: [{}, {
	          view: "button",
	          css: "ssheet_cancel_button",
	          label: webix.i18n.spreadsheet.labels.cancel,
	          autowidth: true,
	          click: function () {
	            var parentView = this.getTopParentView();
	            parentView.callEvent("onCancelClick", []);
	          }
	        }, {
	          view: "button",
	          label: webix.i18n.spreadsheet.labels.save,
	          hotkey: "enter",
	          autowidth: true,
	          click: function () {
	            var parentView = this.getTopParentView();
	            parentView.callEvent("onSaveClick", []);
	          }
	        }]
	      });
	    }

	    return elements;
	  },
	  body_setter: function (value) {
	    if (_typeof(value) == "object") {
	      if (webix.isUndefined(value.padding)) value.padding = webix.skin.$active.layoutPadding.form;

	      if (value.view == "form" && value.elements) {
	        value.elements = this.getFormElements(value.elements);
	        if (!value.css) value.css = "webix_ssheet_form";
	      } else value = this.getBodyConfig(value);
	    }

	    return webix.ui.window.prototype.body_setter.call(this, value);
	  },
	  defaults: {
	    move: true,
	    head: "Dialog",
	    buttons: true,
	    close: true,
	    //we need to retain focus in table area, so disabling the autofocusing feature
	    autofocus: false,
	    width: 350
	  }
	}, webix.ui.window, webix.IdSpace);
	webix.protoUI({
	  $cssName: "datatable",
	  name: "ssheet-dialog-table",
	  $init: function (config) {
	    if (!config.headerRowHeight) config.headerRowHeight = 34;
	    this.$view.className += " webix_ssheet_dialog_table";
	  }
	}, webix.ui.datatable);

	webix.protoUI({
	  name: "ssheet-suggest-labels",
	  defaults: {
	    fitMaster: false,
	    padding: 0,
	    borderless: true
	  },
	  $init: function () {
	    this.$view.className += " webix_ssheet_suggest";
	  },
	  getItemText: function (id) {
	    return this.getList().getItem(id).value;
	  }
	}, webix.ui.suggest);
	webix.protoUI({
	  name: "ssheet-form-suggest",
	  defaults: {
	    padding: 0,
	    borderless: true
	  },
	  $init: function () {
	    this.$view.className += " webix_ssheet_suggest";
	  }
	}, webix.ui.suggest);
	webix.protoUI({
	  $cssName: "colorpicker",
	  name: "ssheet-colorpicker",
	  $init: function () {
	    this.$view.className += " webix_ssheet_colorpicker";
	  },
	  defaults: {
	    suggest: {
	      borderless: true,
	      body: {
	        view: "ssheet-colorboard"
	      }
	    }
	  }
	}, webix.ui.colorpicker);

	webix.protoUI({
	  name: "formlate",
	  setValue: function (a) {
	    return this.setHTML(a);
	  },
	  getValue: function () {
	    return "";
	  }
	}, webix.ui.template);

	webix.protoUI({
	  name: "ssheet-icons",
	  $cssName: "dataview",
	  $init: function () {
	    this.$view.className += " webix_ssheet_dataview";
	  },
	  defaults: {
	    borderless: true,
	    template: "<span class='webix_ssheet_button_icon #css#' ></span>",
	    type: {
	      width: 36,
	      height: 36
	    }
	  }
	}, webix.ui.dataview);

	webix.protoUI({
	  name: "ssheet-suggest",
	  defaults: {
	    padding: 0,
	    css: "webix_ssheet_suggest"
	  }
	}, webix.ui.contextmenu);

	var group = {
	  value: null,
	  set: function (method, master) {
	    if (!this.value) {
	      this.start();
	      method.call(master);
	      this.end();
	    } else method.call(master);
	  },
	  start: function () {
	    this.value = webix.uid();
	  },
	  end: function () {
	    this.value = null;
	  }
	};

	function init$1(view) {
	  var events = [{
	    name: "onSheetAdd",
	    type: "insert"
	  }, {
	    name: "onSheetRemove",
	    type: "remove"
	  }, {
	    name: "onSheetRename",
	    type: "rename"
	  }, {
	    name: "onSheetStateChange",
	    type: "state"
	  }, {
	    name: "onCellChange"
	  }, {
	    name: "onStyleChange"
	  }, {
	    name: "onAction"
	  }, {
	    name: "onRowOperation"
	  }, {
	    name: "onColumnOperation"
	  }, {
	    name: "onAfterConditionSet"
	  }, {
	    name: "onAfterRangeSet"
	  }, {
	    name: "onAfterSpan"
	  }, {
	    name: "onAfterSplit"
	  }, {
	    name: "onAfterFilter",
	    view: "cells"
	  }, {
	    name: "onRowResize",
	    view: "cells"
	  }, {
	    name: "onColumnResize",
	    view: "cells"
	  }];
	  var thread;

	  var _loop = function (i) {
	    var handler = events[i];
	    (handler.view ? view.$$(handler.view) : view).attachEvent(handler.name, function (name, newName, _, page) {
	      if (view._loading_data) return;
	      var params;
	      if (handler.type) params = handler.type == "rename" ? [handler.type, newName, name] : [handler.type, name];else {
	        var activeSheet = view.getActiveSheet();
	        if (handler.name == "onCellChange" && page != activeSheet) activeSheet = page;
	        params = ["update", activeSheet];
	      }
	      clearTimeout(thread);
	      thread = webix.delay(function () {
	        return view.callEvent("onChange", params);
	      });
	    });
	  };

	  for (var i = 0; i < events.length; i++) {
	    _loop(i);
	  }

	  view.attachEvent("onChange", function () {
	    save(view, "all");
	  });
	}
	function save(view, name, data) {
	  var save = view.config.save;
	  var url;
	  if (!save) return;

	  if (name == "all") {
	    if (!save.all) return;
	    data = {
	      data: view.serialize({
	        sheets: true
	      })
	    };
	    url = save.all;
	  } else {
	    url = typeof save === "string" ? save + "/" + name : save[name];
	  }

	  url = webix.proxy.$parse(url);

	  if (url) {
	    if (typeof url === "function") return url(name, data);
	    if (url.$proxy && url.save) return url.save(view, data, null, null);
	    var ajax = webix.ajax();
	    if (name === "all") ajax.headers({
	      "Content-type": "application/json"
	    });
	    ajax.post(url, data);
	  }
	}

	var m27 = /*#__PURE__*/Object.freeze({
		init: init$1,
		save: save
	});

	var decode = {};
	var encode = {};
	var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	function indexToHeader(index) {
	  var chars = alpha.length;
	  var quotient = Math.floor(--index / chars);
	  if (quotient > 0) return indexToHeader(quotient) + alpha[index % chars];
	  return alpha[index % chars];
	}

	function updateMaxColumn(maxColumn) {
	  var lastColumn = Object.keys(encode).length;

	  for (var i = lastColumn + 1; i <= maxColumn; i++) {
	    var str = indexToHeader(i);
	    decode[str] = i;
	    encode[i] = str;
	  }
	}
	function adress(text) {
	  var size;

	  for (var i = 0; i < text.length; i++) {
	    if (text.charCodeAt(i) < 59) {
	      size = i;
	      break;
	    }
	  }

	  var col = text.substr(0, size);
	  var row = text.substr(size);
	  return [row * 1, decode[col]];
	}
	function range(text, view, page) {
	  var nind = text.indexOf("!");
	  var sheet = page || ""; //parse sheet names

	  if (nind !== -1) {
	    sheet = text.substr(0, nind);
	    if (sheet[0] === "'") sheet = sheet.substr(1, sheet.length - 2);
	    text = text.substr(nind + 1);
	  }

	  var parts = text.split(":");

	  if (parts.length != 2) {
	    if (view) {
	      var code = view.ranges.getCode(text, sheet);

	      if (!code) {
	        // global named range
	        code = view.ranges.getCode(text, true);
	        if (!code) return null;
	      }

	      var rangeParts = code.split("!");
	      if (rangeParts[0] != page || view.getActiveSheet()) sheet = rangeParts[0].replace(/'/g, "");
	      code = rangeParts[1];
	      parts = code.split(":");
	    } else return null;
	  }

	  var d1 = adress(parts[0]);
	  var d2 = adress(parts[1]);
	  if (d1[0] && d1[1] && d2[0] && d2[1]) return [d1[0], d1[1], d2[0], d2[1], sheet];
	}
	function escapeSheet(sheet) {
	  return sheet.indexOf(" ") == -1 ? sheet : "'".concat(sheet, "'");
	}
	function toRange(x, y, x2, y2, sheet) {
	  return (sheet ? escapeSheet(sheet) + "!" : "") + encode[y] + x + ":" + encode[y2] + x2;
	}
	function toSheetRange(x, y, sheet) {
	  return (sheet ? escapeSheet(sheet) + "!" : "") + x + ":" + y;
	}
	function rangeObj(text, view) {
	  if (_typeof(text) === "object") return text;
	  var a = range(text, view);
	  return {
	    start: {
	      row: a[0],
	      column: a[1]
	    },
	    end: {
	      row: a[2],
	      column: a[3]
	    },
	    sheet: a[4]
	  };
	}
	function eachRange(text, view, callback, data) {
	  var range = rangeObj(text);

	  for (var row = range.start.row; row <= range.end.row; row++) {
	    for (var column = range.start.column; column <= range.end.column; column++) {
	      callback(view, {
	        row: row,
	        column: column
	      }, data);
	    }
	  }
	}
	function isRange(text) {
	  if (typeof text == "string") {
	    var cells = text.split(":");

	    if (cells.length == 2) {
	      for (var i = 0; i < cells.length; i++) {
	        var parts = cells[i].split("!");
	        if (!isCell(parts.pop())) return;
	      }

	      return true;
	    }
	  }
	}
	var cellTest = /^[A-Z]+[0-9]+$/;
	function isCell(text) {
	  return cellTest.test(text);
	}
	function changeRange(text, name, inc, start) {
	  var updated = false;

	  if (isRange(text)) {
	    var _range = range(text),
	        _range2 = _slicedToArray(_range, 5),
	        r1 = _range2[0],
	        c1 = _range2[1],
	        r2 = _range2[2],
	        c2 = _range2[3],
	        sheet = _range2[4]; //ranges like B2:A1


	    if (r1 > r2) {
	      var _ref = [r2, r1];
	      r1 = _ref[0];
	      r2 = _ref[1];
	    }

	    if (c1 > c2) {
	      var _ref2 = [c2, c1];
	      c1 = _ref2[0];
	      c2 = _ref2[1];
	    }

	    if (name === "row" && start.row <= r2) {
	      if (inc < 0 && start.row < r1 || inc > 0 && start.row <= r1) r1 += inc;
	      r2 += inc;
	      if (r2 < r1) return "";
	      updated = true;
	    } else if (name === "column" && start.column <= c2) {
	      if (inc < 0 && start.column < c1 || inc > 0 && start.column <= c1) c1 += inc;
	      c2 += inc;
	      if (c2 < c1) return "";
	      updated = true;
	    }

	    if (updated) text = toRange(r1, c1, r2, c2, sheet);
	  }

	  return text;
	}

	var toolbarSizes = {
	  width: 38,
	  margin: 7,
	  paddingY: 1,
	  sectorPadding: 5,
	  sectorMargin: 0
	}; // default styles for toolbar elements

	var defaultStyles = {
	  "color": "#666666",
	  "background": "#ffffff",
	  "font-family": "'PT Sans', Tahoma",
	  "font-size": "15",
	  "text-align": "left",
	  "vertical-align": "middle",
	  "white-space": "nowrap"
	};
	var fonts = {
	  material: "'Roboto', sans-serif",
	  mini: "'Roboto', sans-serif",
	  flat: "'PT Sans', Tahoma",
	  compact: "'PT Sans', Tahoma",
	  contrast: "'PT Sans', Tahoma",
	  willow: "'Open Sans', sans-serif",
	  dark: "'Open Sans', sans-serif"
	};
	function setSkinDefaults() {
	  var skin = webix.skin.$name;
	  toolbarSizes.width = webix.skin.$active.inputHeight + 2;
	  toolbarSizes.titleHeight = skin == "mini" || skin == "compact" ? 18 : 20;
	  defaultStyles["font-family"] = fonts[skin];

	  if (skin == "contrast") {
	    defaultStyles.background = "#393939";
	    defaultStyles.color = "#ffffff";
	  } else if (skin == "material" || skin == "mini") {
	    defaultStyles.color = "#475466";
	  } else if (skin == "willow") {
	    defaultStyles.color = "#2C2F3C";
	  } else if (skin == "dark") {
	    defaultStyles.background = "#2A2B2D";
	    defaultStyles.color = "#ffffff";
	  }
	}

	//add new options to the end of this list

	var style_names = ["color", "background", "text-align", "font-family", "font-size", "font-style", "underline", "font-weight", "vertical-align", "wrap", "borders", "format", "border-right", "border-bottom", "border-left", "border-top", "strike", "indent"];
	var _style_map = {
	  format: function () {
	    return "";
	  },
	  "text-align": {
	    left: function () {
	      return "justify-content:flex-start;";
	    },
	    center: function () {
	      return "justify-content:center;text-align:center;";
	    },
	    right: function () {
	      return "justify-content:flex-end;text-align:right;";
	    }
	  },
	  "vertical-align": {
	    top: function () {
	      return "align-items:flex-start;";
	    },
	    middle: function () {
	      return "align-items:center;";
	    },
	    bottom: function () {
	      return "align-items:flex-end;";
	    }
	  },
	  wrap: {
	    wrap: function () {
	      return "white-space: normal !important;";
	    }
	  },
	  "border-left": function (obj, zoom) {
	    return getBorderCss("border-left", obj, zoom);
	  },
	  "border-top": function (obj, zoom) {
	    return getBorderCss("border-top", obj, zoom);
	  },
	  "border-right": function (obj, zoom) {
	    return getBorderCss("border-right", obj, zoom);
	  },
	  "border-bottom": function (obj, zoom) {
	    return getBorderCss("border-bottom", obj, zoom);
	  },
	  "font-weight": function (obj) {
	    //Roboto bold - font-weight:500 (looks better, than 700). Roboto is default font for material skins.
	    if (obj["font-weight"] == "bold") {
	      var family = obj["font-family"] || defaultStyles["font-family"];
	      return "font-weight:" + (family == "'Roboto', sans-serif" ? 500 : 700) + ";";
	    }

	    return "";
	  },
	  underline: function (obj) {
	    var underline = obj.underline == "underline" ? "underline" : "";

	    if (underline) {
	      var strike = obj.strike == "strike" ? "line-through" : "";
	      return "text-decoration: ".concat(underline, " ").concat(strike, ";");
	    }

	    return "";
	  },
	  strike: function (obj) {
	    if (obj.underline != "underline" && obj.strike == "strike") return "text-decoration: line-through;";
	    return "";
	  },
	  indent: function (obj, zoom) {
	    var count = obj.indent * 1;

	    if (count > 0) {
	      var pos = obj["text-align"] == "right" ? "right" : "left";
	      return {
	        innerCss: "margin-".concat(pos, ":").concat((count * 8 + 12) * zoom, "px;")
	      }; // 12 - default cell margin
	    }
	  },
	  "font-size": function (obj, zoom) {
	    var fontSize = obj["font-size"];
	    if (zoom != 1) fontSize = obj["font-size"].replace("px", "") * zoom + "px";
	    return "font-size:" + fontSize + ";";
	  }
	};

	function getBorderCss(pos, obj, zoom) {
	  var border = obj[pos];

	  if (border) {
	    var _border$split = border.split(","),
	        _border$split2 = _slicedToArray(_border$split, 2),
	        color = _border$split2[0],
	        type = _border$split2[1];

	    type = type || "thin";
	    var size = 1;
	    if (type == "medium") size = 2;else if (type == "thick" || type == "double") size = 3;
	    size = size * zoom + "px";
	    if (["thin", "medium", "thick"].indexOf(type) != -1) type = "solid";
	    return "".concat(pos, ": ").concat(size, " ").concat(type, " ").concat(color, " !important;");
	  }

	  return "";
	}

	var border_checks = {
	  "border-left": function (cell, area, mode) {
	    return cell.column == area.start.column || mode == "no";
	  },
	  "border-right": function (cell, area, mode) {
	    return cell.column == area.end.column || mode == "all" || mode == "no";
	  },
	  "border-top": function (cell, area, mode) {
	    return cell.row == area.start.row || mode == "no";
	  },
	  "border-bottom": function (cell, area, mode) {
	    return cell.row == area.end.row || mode == "all" || mode == "no";
	  }
	};
	var _style_handlers = {
	  "borders": function (view, style, value, cell) {
	    var area = view.$$("cells").getSelectArea();
	    value = value.split(",");
	    var type = value[0];
	    var color = value[1];
	    var lineStyle = value[2];
	    var modes = ["border-left", "border-right", "border-bottom", "border-top"];

	    if (type == "top-bottom") {
	      modes = ["border-top", "border-bottom"];
	    } else if (type != "no" && type != "all" && type != "outer") modes = ["border-" + type];

	    for (var i = 0; i < modes.length; i++) {
	      var mode = modes[i];
	      var result = view.callEvent("onAction", ["check-borders", {
	        row: cell.row,
	        column: cell.column,
	        area: area,
	        type: type,
	        mode: mode
	      }]);

	      if (result === true || border_checks[mode](cell, area, type)) {
	        var border = type == "no" ? "" : "".concat(color, ",").concat(lineStyle);
	        style = _updateStyle(view, style, mode, border, cell);
	      }
	    }

	    return style;
	  }
	};
	var sizeEl;
	function init$2(view) {
	  view.attachEvent("onStyleSet", function (name, value) {
	    return _applyStyles(view, name, value);
	  });
	  view.attachEvent("onDataParse", function (data) {
	    return _parse(view, data);
	  });
	  view.attachEvent("onDataSerialize", function (data) {
	    return _serialize(view, data);
	  });
	  view.attachEvent("onReset", function () {
	    return reset(view);
	  });
	  view.attachEvent("onUndo", function (type, row, column, style) {
	    if (type == "style") _undoStyle(view, row, column, style);
	  });
	  reset(view);
	  if (!sizeEl) sizeEl = webix.html.create("DIV", {
	    style: "visibility:hidden; position:absolute; top:0px; left:0px; height:auto;"
	  }, "");
	}

	function reset(view) {
	  view._styles = {};
	  view._styles_cache = {};
	  view._styles_max = 1;
	  var prefix = ".wss_" + view.$index;
	  webix.html.removeStyle(prefix);
	}

	function zoomStyles(view) {
	  var data = {};

	  _serialize(view, data);

	  reset(view);

	  _parse(view, data, true);
	}
	function getStyle(view, cell) {
	  var obj = view._mPage.getCell(cell.row - 1, cell.column - 1);

	  var span = view.$$("cells").getSpan(cell.row, cell.column);

	  if (span && span[0] == cell.row && span[1] == cell.column) {
	    var spanStyles = span[5].split(" ");

	    for (var i = 0; i < spanStyles.length; i++) {
	      var spanStyle = view._styles[spanStyles[i]];
	      if (spanStyle) return spanStyle;
	    }
	  }

	  if (obj && obj.style) return view._styles[obj.style];
	  return null;
	}
	function getFormat(view, row, column) {
	  var obj = view._mPage.getCell(row - 1, column - 1);

	  return obj && obj.format || "";
	} // undo

	function _undoStyle(view, row, column, style) {
	  var cell = {
	    row: row,
	    column: column
	  };
	  setStyle(view, cell, style);
	}

	function _serialize(view, obj) {
	  var styles = [];

	  for (var key in view._styles_cache) {
	    styles.push([view._styles_cache[key].id, key]);
	  }

	  obj.styles = styles;
	}

	function addStyle(view, props, origin) {
	  var style = {
	    props: styleFromText(style_names.map(function () {
	      return "";
	    }).join(";"))
	  };
	  if (origin) for (var key in origin.props) {
	    style.props[key] = origin.props[key];
	  }

	  for (var _key in props) {
	    style.props[_key] = props[_key];
	  }

	  style.text = styleToText(style);
	  var cache = view._styles_cache[style.text];
	  if (cache) return cache;

	  _addStyle(view, style);

	  return style;
	}

	function _parse(view, obj, zoom) {
	  if (obj.styles) for (var i = 0; i < obj.styles.length; i++) {
	    var styleObj = obj.styles[i];
	    var style = {
	      id: styleObj[0],
	      text: styleObj[1],
	      props: styleFromText(styleObj[1])
	    };

	    _addStyle(view, style, true);
	  }
	  if (!zoom) for (var _i = 0; _i < obj.data.length; _i++) {
	    var _obj$data$_i = _slicedToArray(obj.data[_i], 4),
	        row = _obj$data$_i[0],
	        column = _obj$data$_i[1],
	        css = _obj$data$_i[3];

	    if (css) update_style_data(view, row, column, view._styles[css]);
	  }
	}

	function _applyStyles(view, name, value) {
	  group.set(function () {
	    view.eachSelectedCell(function (cell) {
	      var span = view.$$("cells").getSpan(cell.row, cell.column);
	      if (!span || span && span[0] == cell.row && span[1] == cell.column) _applyCellStyles(view, cell, name, value);
	    });
	  });
	  view.refresh();
	}

	function _applyCellStyles(view, cell, name, value) {
	  var ostyle = getStyle(view, cell);

	  if (name == "indent") {
	    var oldVal = (ostyle && ostyle.props[name] || 0) * 1;
	    if (!oldVal && value == -1) return;
	    value += oldVal;
	  }

	  var nstyle = _updateStyle(view, ostyle, name, value, cell);

	  if (nstyle && nstyle != ostyle) _setStyle(view, cell, nstyle, ostyle, true);
	}

	function _updateStyle(view, style, name, value, cell) {
	  if (_style_handlers[name]) {
	    return _style_handlers[name](view, style, value, cell);
	  }

	  if (style && style.props[name] == value) return style;
	  var nstyle = {
	    text: "",
	    id: 0,
	    props: style ? webix.copy(style.props) : {}
	  };
	  nstyle.props[name] = value;
	  nstyle.text = styleToText(nstyle);
	  var cache = view._styles_cache[nstyle.text];
	  if (cache) return cache;

	  _addStyle(view, nstyle);

	  return nstyle;
	}

	function update_style_data(view, row, column, style) {
	  var obj = view._mPage.getCell(row - 1, column - 1, true);

	  obj.style = style && style.id;
	  obj.format = style && style.props.format;
	}

	function setStyle(view, cell, style) {
	  var old = getStyle(view, cell);
	  return _setStyle(view, cell, style, old);
	}
	function setRangeStyle(view, range$$1, style) {
	  eachRange(range$$1, view, _setStyle, style);
	}
	function getTextSize(view, text, css, baseWidth) {
	  sizeEl.innerHTML = text;
	  sizeEl.style.width = baseWidth ? baseWidth + "px" : "auto";
	  sizeEl.className = "webix_table_cell webix_cell " + css;

	  view._table.$view.appendChild(sizeEl);

	  var width = Math.max(0, sizeEl.offsetWidth + 1);
	  var height = Math.max(0, sizeEl.offsetHeight + 1);

	  view._table.$view.removeChild(sizeEl);

	  sizeEl.innerHTML = "";
	  return {
	    width: width,
	    height: height
	  };
	}

	function _setStyle(view, cell, style, old, toolbar) {
	  if (view.callEvent("onBeforeStyleChange", [cell.row, cell.column, style, old])) {
	    group.set(function () {
	      var format = style && style.props.format || null;
	      var oldFormat = old && old.props.format || null;
	      var formatChanged = format != oldFormat;

	      if (!formatChanged || formatChanged && view.callEvent("onBeforeFormatChange", [cell.row, cell.column, format, oldFormat])) {
	        update_style_data(view, cell.row, cell.column, style);
	        view.callEvent("onStyleChange", [cell.row, cell.column, style, old]);
	        if (formatChanged) view.callEvent("onFormatChange", [cell.row, cell.column, format, oldFormat]);
	        view.saveCell(cell.row, cell.column);
	        var sel = view.getSelectedId();
	        if (!toolbar && sel && sel.row == cell.row && sel.column == cell.column) view.callEvent("onCommand", [{
	          id: "toolbar-update"
	        }]);
	      }
	    });
	  }
	}

	function _buildCssString(view, style) {
	  var css = "";
	  var innerCss = "";

	  for (var key in style) {
	    if (style[key]) {
	      if (_style_map[key]) {
	        if (_style_map[key][style[key]]) css += _style_map[key][style[key]](style);else if (typeof _style_map[key] == "function") {
	          var outCss = _style_map[key](style, view._zoom);

	          if (_typeof(outCss) == "object") {
	            css += outCss.css || "";
	            innerCss += outCss.innerCss || "";
	          } else css += outCss;
	        }
	      } else css += key + ":" + style[key] + ";";
	    }
	  }

	  return {
	    css: css,
	    innerCss: innerCss
	  };
	}

	function _addStyle(view, style, silent) {
	  view._styles_cache[style.text] = style;

	  while (!style.id || view._styles[style.id]) {
	    style.id = "wss" + view._styles_max++;
	  }

	  view._styles[style.id] = style;

	  var _buildCssString2 = _buildCssString(view, style.props),
	      css = _buildCssString2.css,
	      innerCss = _buildCssString2.innerCss;

	  var prefix = ".wss_" + view.$index;
	  webix.html.addStyle(prefix + " ." + style.id + "{" + css + "}", prefix);
	  webix.html.addStyle(prefix + " ." + style.id + " div:first-child{" + innerCss + "}", prefix);
	  if (!silent) save(view, "styles", {
	    name: style.id,
	    text: style.text
	  });
	}

	function styleToText(style) {
	  var id = [];

	  for (var i = 0; i < style_names.length; i++) {
	    id.push(style.props[style_names[i]]);
	  }

	  return id.join(";");
	}
	function styleFromText(text) {
	  var parts = text.split(";");
	  var props = {};

	  for (var i = 0; i < style_names.length; i++) {
	    props[style_names[i]] = parts[i];
	  }

	  return props;
	}
	function clearRangeStyle(view, range$$1) {
	  group.set(function () {
	    eachRange(range$$1, view, function (view, cell) {
	      var style = getStyle(view, cell);
	      if (style) setStyle(view, cell, null);
	    });
	  });
	}
	function compactStyles(view) {
	  var serialized = view.serialize();
	  serialized.styles = removeUnusedStyles(serialized);
	  reset(view);

	  _parse(view, serialized);
	}
	function removeUnusedStyles(serialized) {
	  var data = serialized.data;
	  var styles = serialized.styles;
	  var used = {};

	  for (var i = 0; i < data.length; i++) {
	    var name = data[i][3];
	    if (name) used[name] = 1;
	  }

	  var newStyles = [];

	  for (var _i2 = 0; _i2 < styles.length; _i2++) {
	    var _name = styles[_i2][0];
	    if (used[_name]) newStyles.push(styles[_i2]);
	  }

	  return newStyles;
	}

	var m5 = /*#__PURE__*/Object.freeze({
		style_names: style_names,
		init: init$2,
		zoomStyles: zoomStyles,
		getStyle: getStyle,
		getFormat: getFormat,
		addStyle: addStyle,
		setStyle: setStyle,
		setRangeStyle: setRangeStyle,
		getTextSize: getTextSize,
		styleToText: styleToText,
		styleFromText: styleFromText,
		clearRangeStyle: clearRangeStyle,
		compactStyles: compactStyles,
		removeUnusedStyles: removeUnusedStyles
	});

	function find(arr, func) {
	  var result = findIndex(arr, func);
	  return arr[result];
	}
	function findIndex(arr, func) {
	  var result = -1;

	  for (var i = 0; result < 0 && i < arr.length; i++) {
	    if (func(arr[i])) result = i;
	  }

	  return result;
	}
	function getDimension(data, spans, rows, cols) {
	  for (var i = 0; i < data.length; i++) {
	    // data[i] - [ row, column, value, style]
	    var line = data[i];
	    if (line[0] > rows) rows = line[0];
	    if (line[1] > cols) cols = line[1];
	  }

	  if (spans) for (var _i = 0; _i < spans.length; _i++) {
	    // spans[i] - [ row, column, colCount, rowCount ]
	    var spanEndRow = spans[_i][0] + spans[_i][3] - 1;
	    var spanEndCol = spans[_i][1] + spans[_i][2] - 1;
	    if (spanEndRow > rows) rows = spanEndRow;
	    if (spanEndCol > cols) cols = spanEndCol;
	  }
	  return [rows * 1, cols * 1];
	}

	function init$3(view) {
	  view.attachEvent("onDataParse", function (data) {
	    return load(view, data);
	  });
	  view.attachEvent("onDataSerialize", function (data, config) {
	    return serialize(view, data, config);
	  });
	}
	var formatHelpers = {};
	var currencies = [];
	var defaultFormats = {
	  common: 1
	};
	var formatsCount;
	var formatCache;
	var formats;
	var formatSources;

	function getCurrencySymbol(format) {
	  return webix.template(format)("");
	}

	function setDefaultFormats() {
	  var formatsLocale = webix.i18n.spreadsheet.formats;
	  currencies = [webix.i18n.price];
	  currencies = currencies.concat(webix.copy(formatsLocale.currencies));
	  currencies = currencies.map(function (format) {
	    var id = getCurrencySymbol(format);
	    return {
	      format: format,
	      id: id,
	      value: id.trim()
	    };
	  });
	  formats = {};
	  formatsCount = 0;
	  formatSources = {};
	  formatCache = {};
	  formatHelpers = {
	    price: {
	      getFormat: function (value, extra) {
	        extra.css = "webix_ssheet_format_price";
	        var minusSign = value < 0 ? "-" : "";
	        if (minusSign) value = Math.abs(value);
	        return minusSign + webix.i18n.priceFormat(value);
	      },
	      values: webix.extend({
	        zeros: webix.i18n.priceSettings.decimalSize,
	        symbol: webix.i18n.priceFormat(""),
	        separator: 1,
	        negative: 1,
	        type: "price"
	      }, getDelimiters("price"))
	    },
	    "int": {
	      getFormat: function (value, extra) {
	        extra.css = "webix_ssheet_format_int";
	        return webix.i18n.numberFormat(value);
	      },
	      values: webix.extend({
	        zeros: webix.i18n.decimalSize,
	        separator: 1,
	        negative: 1,
	        type: "int"
	      }, getDelimiters("int"))
	    },
	    percent: {
	      getFormat: function (value, extra) {
	        extra.css = "webix_ssheet_format_percent";
	        return Math.round(value * 100) + "%";
	      },
	      values: webix.extend({
	        zeros: 0,
	        separator: 0,
	        negative: 1,
	        type: "percent"
	      }, getDelimiters("percent"))
	    },
	    date: {
	      getFormat: function (value, extra) {
	        extra.css = "webix_ssheet_format_date";
	        return format2code(formatsLocale.dateFormat, getDelimiters("date"))(value);
	      },
	      values: {
	        type: "date",
	        date: formatsLocale.dateFormat
	      }
	    },
	    string: {
	      getFormat: function (value, extra) {
	        extra.css = "webix_ssheet_format_text";
	        return value;
	      },
	      values: {
	        type: "string"
	      }
	    }
	  };

	  for (var i in formatHelpers) {
	    defaultFormats[i] = 1;
	    formatSources[i] = serializeFormat(formToValues(i, formatHelpers[i].values));
	    formatCache[formatSources[i]] = i;
	  }
	}
	function getDelimiters(type) {
	  if (type == "price") return {
	    groupSign: webix.i18n.priceSettings.groupDelimiter,
	    decimalSign: webix.i18n.priceSettings.decimalDelimiter
	  };else return {
	    groupSign: webix.i18n.groupDelimiter,
	    decimalSign: webix.i18n.decimalDelimiter
	  };
	}

	function serialize(view, data) {
	  var formats = [];

	  for (var i in formatSources) {
	    if (!defaultFormats[i]) //exclude default formats
	      formats.push([i, formatSources[i]]);
	  }

	  data.formats = formats;
	}

	function load(view, data) {
	  var i,
	      formats = data.formats;
	  if (formats) for (i = 0; i < formats.length; i++) {
	    createFormatName(formats[i][1], formats[i][0]);
	  }
	}

	function getFormat$1(name) {
	  return formatHelpers[name] ? formatHelpers[name].getFormat : formatHelpers[name];
	}
	function getFormatSource(name, toexcel) {
	  if (toexcel) {
	    var parsed = parseFormat({
	      values: formatHelpers[name].values,
	      format: formatSources[name]
	    });
	    return serializeFormat(parsed, true);
	  } else return formatSources[name];
	}

	function createFormatName(str, values) {
	  if (formatCache[str]) return formatCache[str];
	  var name = _typeof(values) == "object" ? "fmt" + formatsCount : values;
	  formatsCount++;
	  formats[name] = str;
	  if (typeof values == "string") values = formatToForm(str);
	  webix.extend(values, getDelimiters("custom"));
	  formatHelpers[name] = {
	    getFormat: format2code(str, {
	      decimalSign: values.decimalSign,
	      groupSign: values.groupSign
	    }),
	    values: values
	  };
	  formatSources[name] = str;
	  formatCache[str] = name;
	  return name;
	}

	function addFormat(view, row, column, format, type) {
	  if (!type) type = {
	    format: format,
	    type: "custom"
	  };
	  var old = view.getStyle(row, column);
	  var nev = addStyle(view, {
	    format: createFormatName(format, type)
	  }, old);
	  view.setStyle(row, column, nev);
	}
	function removeFormat(view, row, column) {
	  var old = view.getStyle(row, column);
	  var nev = addStyle(view, {
	    format: ""
	  }, old);
	  view.setStyle(row, column, nev);
	}

	function splitFormat(str) {
	  var conditional = str.match(/.*\[[><=].*/g);
	  var parts = str.split(";");

	  if (!conditional) {
	    if (parts.length > 1) {
	      parts[0] = (parts.length > 2 ? "[>0]" : "[>=0]") + parts[0];
	      parts[1] = "[<0]" + parts[1];
	      if (parts[2]) parts[2] = "[=0]" + parts[2];
	    }
	  }

	  return parts;
	}

	function format2code(str, delimiters) {
	  var errorMessage = webix.i18n.spreadsheet.table["format-error"];
	  var parts = splitFormat(str);
	  var code = ["var spaces = \"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\";"];

	  for (var i = 0; i < parts.length; i++) {
	    var separated = separateFmt(parts[i]);
	    code.push(genCode(separated.condition, separated.color.toLowerCase(), separated.symbol, separated.fmt, i, parts.length > 0, delimiters));
	  }

	  var method;

	  try {
	    method = new Function("val", "extra", "try{ ".concat(code.join("\n"), " return val; } catch(err) { return \"").concat(errorMessage, "\"; }"));
	  } catch (err) {
	    method = function () {
	      return errorMessage;
	    };
	  }

	  return method;
	}

	function genCode(check, color, symbol, line, ind, isAbs, delimiters) {
	  var str = "";

	  if (check) {
	    if (!ind) str += "if";else str += "else if";
	    if (check[0] === "=") check = "=" + check;
	    str += "(val" + check + "){";
	    if (isAbs) str += "val = Math.abs(val);";
	  }

	  if (color) str += "extra.css = \"webix_ssheet_format_" + color + "\";";
	  str += genFormatCode(line, delimiters, symbol);
	  return str + (check ? "}" : "");
	}

	var dateTypes = {
	  "yy": "%y",
	  "yyyy": "%Y",
	  "m": "%n",
	  "mm": "%m",
	  "mmm": "%M",
	  "mmmm": "%F",
	  "mmmmm": "%F",
	  //not supported by webix
	  "d": "%j",
	  "dd": "%d",
	  "ddd": "%D",
	  "dddd": "%l"
	};
	var timeTypes = {
	  "h": "%G",
	  "hh": "%H",
	  "m": "%i",
	  //not supported by webix
	  "mm": "%i",
	  "s": "%s",
	  //not supported by webix
	  "ss": "%s",
	  "AM/PM": "%A"
	};
	var dateOrder = Object.keys(dateTypes).sort(function (a, b) {
	  return b.length - a.length;
	});
	var timeOrder = Object.keys(timeTypes).sort(function (a, b) {
	  return b.length - a.length;
	});

	function excelDateToWebix(text, lastDateType) {
	  var typesOrder = [{
	    name: "date",
	    order: dateOrder,
	    types: dateTypes
	  }, {
	    name: "time",
	    order: timeOrder,
	    types: timeTypes
	  }]; // "m"/"mm" format can be either date (%n/%m) or time (%i), so check last date type

	  var basedOnLast = /^m{1,2}(?!m)/.test(text);
	  if (basedOnLast && lastDateType != "date") typesOrder.reverse();

	  for (var i = 0; i < typesOrder.length; i++) {
	    var type = typesOrder[i];

	    for (var j = 0; j < type.order.length; j++) {
	      if (text.indexOf(type.order[j]) == 0) return {
	        format: type.types[type.order[j]],
	        length: type.order[j].length,
	        type: type.name
	      };
	    }
	  }
	}

	function genFormatCode(line, delimiters, symbol) {
	  if (!line) return "return val;";
	  var str = "return \"\"";
	  var isQuote;
	  var fmt = "";
	  var multiply = 1;
	  var comma, numberPlaceholder, textPlaceholder;
	  var date = [];
	  var lastDateType = "date";
	  var symbolPos;

	  if (symbol) {
	    var currency = find(currencies, function (val) {
	      return val.id == symbol;
	    });
	    symbolPos = "left";
	    if (currency) symbolPos = findIndex(currency.format.split("{obj}"), function (val) {
	      return val;
	    }) ? "right" : "left";
	  }

	  for (var i = 0; i < line.length; i++) {
	    var betweenPlaceholders = placeholder(line[i - 1]) && placeholder(line[i + 1]);

	    if (line[i] == "\"") {
	      if (webix.isUndefined(isQuote)) isQuote = i;else {
	        str += "+\"".concat(line.substr(isQuote + 1, i - isQuote - 1), "\"");
	        isQuote = undefined;
	      }
	      continue;
	    }

	    if (!webix.isUndefined(isQuote)) continue;
	    if (line[i] == "%") multiply = multiply * 100;

	    if (/[a-zA-Z]/.test(line[i])) {
	      var datePart = excelDateToWebix(line.substr(i), lastDateType);

	      if (datePart) {
	        if (numberPlaceholder || textPlaceholder) return "throw \"unexpected number placeholder\";";
	        date.push(datePart.format);
	        str += "/*date*/"; //update this value after date format is ready

	        lastDateType = datePart.type;
	        i += datePart.length - 1;
	        continue;
	      } else str += "+\"".concat(line[i], "\"");
	    } else if (line[i] === delimiters.decimalSign && betweenPlaceholders) {
	      fmt += delimiters.decimalSign;
	    } else if (line[i] == "@") {
	      if (numberPlaceholder || date.length) return "throw \"unexpected number placeholder\";";

	      if (!textPlaceholder) {
	        str += "+fmt";
	        textPlaceholder = true;
	      }

	      fmt += line[i];
	    } else if (placeholder(line[i])) {
	      if (textPlaceholder || date.length) return "throw \"unexpected text placeholder\";";

	      if (!numberPlaceholder) {
	        if (symbolPos == "left") str += "+\"".concat(symbol, "\"");
	        str += "+fmt";
	        if (symbolPos == "right") str += "+\"".concat(symbol, "\"");
	        numberPlaceholder = true;
	      }

	      fmt += line[i];
	    } else if (line[i] === delimiters.groupSign && betweenPlaceholders) comma = true;else str += "+\"".concat(line[i], "\"");
	  }

	  if (date.length) {
	    // 12-hour or 24-hour clock depends on AM/PM in format
	    if (date.indexOf("%A") != -1) date = date.map(function (datePart) {
	      switch (datePart) {
	        case "%G":
	          return "%g";

	        case "%H":
	          return "%h";

	        default:
	          return datePart;
	      }
	    });

	    for (var _i = 0; _i < date.length; _i++) {
	      str = str.replace("/*date*/", "+dateParts[".concat(_i, "]"));
	    }
	  }

	  return "\n\t\t".concat(date.length ? "val = (".concat(getJsDateFromExcel, ")(val); var dateParts = webix.Date.dateToStr(\"").concat(date.join(";"), "\")(val).split(\";\");") : "", "\n\t\t").concat(fmt ? "".concat(numberFormat(fmt, comma, delimiters, multiply), ";") : "", "\n\t\t").concat(str, ";");
	}

	function numberFormat(fmt, comma, delimiters, multiply) {
	  var str = "if(/^@+$/.test(\"".concat(fmt, "\") || isNaN(val)){ var fmt = val; }else {");
	  var decimal = delimiters.decimalSign;

	  var _getParts = getParts(fmt, decimal),
	      _getParts2 = _slicedToArray(_getParts, 2),
	      left = _getParts2[0],
	      right = _getParts2[1];

	  right = (right || "").split("").reverse().join(""); //calculate indexes in mask

	  var lzeros = left.indexOf("0");
	  if (lzeros >= 0) lzeros = left.length - lzeros;
	  var lfills = left.indexOf("?");
	  if (lfills >= 0) lfills = left.length - lfills;
	  var rzeros = right.indexOf("0");
	  if (rzeros >= 0) rzeros = right.length - rzeros;
	  var rfills = right.indexOf("?");
	  if (rfills >= 0) rfills = right.length - rfills;
	  var rmax = right.length;
	  str += "\n\tval = val*".concat(multiply, ";\n\tvar parts = val.toFixed(").concat(rmax, ").split(\".\");\n\tvar left = parts[0];\n\tvar lsize = left.length; \n\tvar right = parts[1] || \"\";\n\tif (left.length < ").concat(lzeros, ") left = \"0000000000\".substr(0, ").concat(lzeros, " - left.length)+left;\n\tif (left.length < ").concat(lfills, ") left = spaces.substr(0, 6*(").concat(lfills, " - left.length))+left;\n\tif (").concat(comma, ") {\n\t\tvar buf = [];\n\t\tvar start = 3;\n\t\twhile (lsize > start) { buf.push(left.substr(left.length-start,3)); start+=3; }\n\t\tvar last = left.substr(0,left.length-start+3);\n\t\tif (last !== \"-\")\n\t\t\tbuf.push(last);\n\t\telse\n\t\t\tbuf.push(\"-\"+buf.pop());\n\n\t\tleft = buf.reverse().join(\"").concat(delimiters.groupSign, "\");\n\t}\n\tif (right){\n\t\tvar zpoint = right.length-1;\n\t\twhile (zpoint >= ").concat(rzeros, "){\n\t\t\tif (right[zpoint] !== \"0\"){\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tzpoint--;\n\t\t}\n\n\t\tif (zpoint <= right.length)\n\t\t\tright = right.substr(0, zpoint+1);\n\n\t\tif (right.length < ").concat(rfills, "){\n\t\t\tright += spaces.substr(0, 6*(").concat(rfills, " - right.length));\n\t\t}\n\t}\n\tvar fmt = left+(right?\"").concat(decimal, "\":\"\")+right;\n\t");
	  return str + "}\n";
	}

	function updateDecimals(fmt, inc, val) {
	  var parsed = parseFormat(fmt);

	  for (var i = 0; i < parsed.length; i++) {
	    if (parsed[i].decimals) {
	      if (inc > 0) parsed[i].right.placeholders += Array(inc + 1).join("0");else parsed[i].right.placeholders = parsed[i].right.placeholders.slice(0, inc);
	    } else {
	      var withoutText = !parsed[i].left.text && !parsed[i].right.text;
	      var withoutPlaceholders = !parsed[i].left.placeholders && !parsed[i].right.placeholders; //check if cell value have decimals (not cell format)

	      if (inc < 0 && withoutText && withoutPlaceholders && webix.rules.isNumber(val) && val.indexOf(".") > -1) {
	        parsed[i].left.placeholders = "0";
	        parsed[i].right.placeholders = Array(val.split(".")[1].length).join(Array(inc + 1).join("0"));
	      } //ignore text
	      else if (inc > 0 && (parsed[i].left.placeholders || withoutText)) {
	          parsed[i].left.placeholders = parsed[i].left.placeholders || "0";
	          parsed[i].right.placeholders = Array(inc + 1).join("0");
	          parsed[i].decimals = true;
	        }
	    }

	    parsed[i].decimals = parsed[i].right.placeholders.length > 0;
	  }

	  return serializeFormat(parsed);
	}

	function changeAreaDecimals(view, inc, row, column) {
	  var cells = getCells(view, row, column);
	  if (cells.length == 0) return;

	  var obj = view._mPage.getCell(cells[0].row - 1, cells[0].column - 1);

	  var oldFormat = obj && obj.format;
	  var value = obj && obj.value ? obj.value.toString() : "";

	  if (webix.rules.isNumber(value) || oldFormat) {
	    group.set(function () {
	      for (var i = 0; i < cells.length; i++) {
	        changeCellDecimals(view, inc, cells[i]);
	      }
	    });
	    view.refresh();
	    var format = getFormatName(view, cells[0].row, cells[0].column) || "common";
	    format = isCustom(format) ? "custom" : format;
	    view.callEvent("onCommand", [{
	      id: "toolbar-update",
	      name: "format",
	      value: format
	    }]);
	  }
	}
	function changeCellDecimals(view, inc, cell) {
	  var format;

	  var obj = view._mPage.getCell(cell.row - 1, cell.column - 1);

	  var oldFormat = obj && obj.format;
	  var value = obj && obj.value ? obj.value.toString() : "";

	  if (oldFormat) {
	    format = webix.copy({
	      values: formatHelpers[oldFormat].values,
	      format: getFormatSource(oldFormat)
	    });
	    format.format = updateDecimals(format, inc, value);
	    if (format.values && format.values.hasOwnProperty("zeros")) format.values.zeros = Math.max(format.values.zeros + inc, 0);
	  } //add format for cell without format
	  else {
	      var zeros = webix.rules.isNumber(value) && value.split(".")[1] ? Math.max(value.split(".")[1].length + inc, 0) : Math.max(inc, 0);
	      format = {
	        values: {
	          negative: 1,
	          zeros: zeros,
	          separator: 0,
	          type: "int"
	        }
	      };
	      format.format = serializeFormat(formToValues(format.values.type, format.values));
	    }

	  addFormat(view, cell.row, cell.column, format.format, format.values);
	}
	function isCustom(name) {
	  return !defaultFormats[name];
	}
	function formToValues(type, formValues) {
	  if (type == "string") return [{
	    left: {
	      text: "@"
	    }
	  }];
	  if (formValues.date) return [{
	    left: {
	      text: formValues.date
	    }
	  }];
	  var values = [{
	    condition: ">=0",
	    left: {
	      text: ""
	    },
	    right: {
	      text: ""
	    }
	  }, {
	    condition: "<0",
	    left: {
	      text: ""
	    },
	    right: {
	      text: ""
	    }
	  }];
	  webix.extend(values, getDelimiters(type));
	  values[0].right.placeholders = values[1].right.placeholders = formValues.zeros ? Array(formValues.zeros + 1).join("0") : "";
	  values[0].separator = values[1].separator = formValues.separator && type != "percent";
	  values[0].left.placeholders = values[1].left.placeholders = values[0].separator ? "#" + values.groupSign + "0" : "0";
	  values[0].decimals = values[1].decimals = formValues.zeros ? true : false;
	  values[1].color = formValues.negative != 1 ? "red" : "";
	  values[1].left.text += formValues.negative < 3 ? "-" : "";
	  if (formValues.negative == 4) values[1].left.text += "(";
	  if (type === "percent") values[0].right.text = values[1].right.text += "%";else if (type === "price") {
	    var symbolId = formValues.symbol;
	    var currency = find(currencies, function (val) {
	      return val.id == symbolId;
	    });
	    var pos = findIndex(currency.format.split("{obj}"), function (val) {
	      return val;
	    }) ? "right" : "left";
	    values[0][pos].symbol = values[1][pos].symbol = symbolId;
	  }
	  if (formValues.negative == 4) values[1].right.text += ")";
	  return values;
	}

	function formatToForm(format) {
	  var formatsLocale = webix.i18n.spreadsheet.formats;
	  var dates = [formatsLocale.dateFormat, formatsLocale.timeFormat, formatsLocale.fullDateFormat, formatsLocale.longDateFormat];
	  var form = {
	    format: format,
	    type: "custom"
	  };

	  if (find(dates, function (date) {
	    return date == format;
	  })) {
	    webix.extend(form, {
	      type: "date",
	      date: format
	    }, true);
	  } else {
	    var _format$split = format.split(";"),
	        _format$split2 = _slicedToArray(_format$split, 2),
	        first = _format$split2[0],
	        second = _format$split2[1];

	    if (first && second) {
	      if (first.indexOf("[>=0]") == 0 && second.indexOf("[<0]") == 0) {
	        first = first.replace("[>=0]", "");
	        second = second.replace("[<0]", "");
	        var red;

	        if (second.indexOf("[red]") == 0) {
	          second = second.replace("[red]", "");
	          red = true;
	        }

	        if (second[0] == "-") {
	          second = second.substring(1);
	          form.negative = red ? 2 : 1;
	        } else if (red) {
	          if (second[0] == "(" && second[second.length - 1] == ")") {
	            form.negative = 4;
	            second = second.substring(1, second.length - 1);
	          } else form.negative = 3;
	        }

	        if (form.negative && first == second) {
	          var type = "int";
	          var priceBrackets = first.indexOf("[$") != -1;

	          if (first[first.length - 1] == "%") {
	            first = first.substring(0, first.length - 1);
	            type = "percent";
	          } else {
	            for (var i = 0; i < currencies.length; i++) {
	              var currency = currencies[i].id;
	              var isPrice = void 0;

	              if (priceBrackets) {
	                if (first.indexOf("[$".concat(currency, "]")) != -1) {
	                  first = first.replace("[$".concat(currency, "]"), "");
	                  isPrice = true;
	                }
	              } else if (first.indexOf(currency) != -1) {
	                first = first.replace(currency, "");
	                isPrice = true;
	              }

	              if (isPrice) {
	                type = "price";
	                form.symbol = currency;
	                break;
	              }
	            }
	          }

	          var delimiters = getDelimiters(type);

	          if (first.indexOf("#" + delimiters.groupSign) == 0) {
	            first = first.replace("#" + delimiters.groupSign, "");
	            form.separator = 1;
	          }

	          var _first$split = first.split(delimiters.decimalSign),
	              _first$split2 = _slicedToArray(_first$split, 2),
	              integer = _first$split2[0],
	              decimal = _first$split2[1];

	          if ((!integer || integer == "0") && (!decimal || /^[0]+$/.test(decimal))) {
	            form.type = type;
	            form.delimiters = delimiters;
	            form.zeros = decimal ? decimal.length : 0;
	          }
	        }
	      }
	    }
	  }

	  return form;
	}

	function serializeFormat(values, toExcel) {
	  var fmt = "";

	  for (var i = 0; i < values.length; i++) {
	    if (values[i].condition) fmt += "[" + values[i].condition + "]";
	    if (values[i].color) fmt += "[" + values[i].color + "]";

	    if (values[i].left) {
	      if (values[i].left.text) {
	        var leftText = values[i].left.text;
	        fmt += leftText;
	      }

	      if (values[i].left.symbol) fmt += "[$" + values[i].left.symbol + "]";

	      if (values[i].left.placeholders) {
	        var leftPlaceholders = values[i].left.placeholders;
	        fmt += toExcel ? leftPlaceholders.replace(values.groupSign, ",") : leftPlaceholders;
	      }
	    }

	    if (values[i].decimals) fmt += toExcel ? "." : values.decimalSign;

	    if (values[i].right) {
	      if (values[i].right.placeholders) fmt += values[i].right.placeholders;
	      if (values[i].right.symbol) fmt += "[$" + values[i].right.symbol + "]";

	      if (values[i].right.text) {
	        var rightText = values[i].right.text;
	        fmt += rightText;
	      }
	    }

	    if (i != values.length - 1) fmt += ";";
	  }

	  return fmt;
	}

	function parseFormat(fmt) {
	  var fmtParts = fmt.format.split(";");
	  var values = [];

	  var _loop = function (i) {
	    var separated = separateFmt(fmtParts[i]);
	    values[i] = {
	      color: separated.color,
	      condition: separated.condition,
	      left: {},
	      right: {}
	    };
	    var format = separated.fmt;
	    values.groupSign = fmt.values.groupSign;
	    values.decimalSign = fmt.values.decimalSign;
	    if (format.indexOf(values.groupSign) > -1) values[i].separator = true;
	    var sepFmtParts = getParts(format, values.decimalSign);
	    var left = sepFmtParts[0];
	    var right = sepFmtParts[1] || "";
	    if (sepFmtParts[1]) values[i].decimals = true;
	    left = getFmtPartValues(left, "left", values.groupSign);
	    right = getFmtPartValues(right, "right", values.groupSign);
	    values[i].left = {
	      text: left.leftText,
	      placeholders: left.placeholders
	    };
	    values[i].right = {
	      text: left.rightText + right.rightText,
	      placeholders: right.placeholders
	    };
	    var symbol = separated.symbol;

	    if (symbol) {
	      var currency = find(currencies, function (val) {
	        return val.id == symbol;
	      });
	      var pos = "left";
	      if (currency) pos = findIndex(currency.format.split("{obj}"), function (val) {
	        return val;
	      }) ? "right" : "left";
	      values[i][pos].symbol = symbol;
	    }
	  };

	  for (var i = 0; i < fmtParts.length; i++) {
	    _loop(i);
	  }

	  return values;
	}

	function getFmtPartValues(fmtPart, type, groupSign) {
	  var firstPlaceholder;

	  if (type == "left") {
	    firstPlaceholder = fmtPart.match(/[#?0]/);
	    firstPlaceholder = firstPlaceholder ? firstPlaceholder.index : Infinity;
	  }

	  var leftText = "";
	  var rightText = "";
	  var placeholders = "";

	  for (var k = 0; k < fmtPart.length; k++) {
	    if (!placeholder(fmtPart[k])) {
	      if (fmtPart[k] == groupSign && placeholder(fmtPart[k + 1]) && placeholder(fmtPart[k - 1])) {
	        placeholders += fmtPart[k];
	        continue;
	      }

	      if (type == "left") if (k < firstPlaceholder) {
	        leftText += fmtPart[k];
	        continue;
	      }
	      rightText += fmtPart[k];
	    } else placeholders += fmtPart[k];
	  }

	  return {
	    leftText: leftText,
	    rightText: rightText,
	    placeholders: placeholders
	  };
	}

	function separateFmt(line) {
	  var color = "";
	  var check = "";
	  var symbol = "";
	  var start = line.indexOf("[");

	  if (start != -1) {
	    if (line[1].match(/[><=]/)) {
	      var end = line.indexOf("]");
	      check = line.substr(start + 1, end - start - 1);
	      line = line.substr(end + 1);
	    }
	  }

	  start = line.indexOf("[$");

	  if (start != -1) {
	    var _end = start + line.substr(start).indexOf("]");

	    symbol = line.substr(start + 2, _end - start - 2);
	    line = line.substr(0, start) + line.substr(_end + 1);
	  }

	  start = line.indexOf("[");

	  if (start != -1) {
	    var _end2 = line.indexOf("]");

	    color = line.substr(start + 1, _end2 - start - 1);
	    line = line.substr(_end2 + 1);
	  }

	  return {
	    condition: check,
	    color: color,
	    symbol: symbol,
	    fmt: line
	  };
	}

	function getCells(view, row, column) {
	  if (row && column) {
	    if (_typeof(row) === "object" && _typeof(column) === "object") {
	      var cells = [];

	      for (var r = row.row; r <= column.row; r++) {
	        for (var c = row.column; c <= column.column; c++) {
	          cells.push({
	            row: r,
	            column: c
	          });
	        }
	      }

	      return cells;
	    } else return [{
	      row: row,
	      column: column
	    }];
	  } else return view.getSelectedId(true);
	}

	function placeholder(val) {
	  return val === "0" || val === "#" || val === "?";
	}

	function getParts(str, decimal) {
	  // it is nessesary to use "/" before decimal to escape regex special characters
	  var match = str.match("[#?0][/" + decimal + "][#?0]");
	  if (match) return [str.substring(0, match.index + 1), str.substring(match.index + 2)];else return [str];
	} //simple check: take into account only first condition


	function checkFormat(format, type, checkTime) {
	  format = format && format.fmt ? format.fmt : getFormatSource(format);
	  if (!format) return;
	  var parts = splitFormat(format);
	  var separated = separateFmt(parts[0]).fmt;
	  var quot;
	  if (separated) for (var i = 0; i < separated.length; i++) {
	    if (separated[i] == "\"") quot = !quot;
	    if (quot) continue;

	    if (type == "date" && /[a-zA-Z]/.test(separated)) {
	      var datePart = excelDateToWebix(separated.substr(i), "date");

	      if (datePart) {
	        if (checkTime) {
	          if (datePart.type == "time") return true;
	        } else return true;
	      }
	    }

	    if (type == "string" && separated[i] == "@") return true;
	  }
	}
	function getFormatName(view, row, col) {
	  var item = view._mPage.getCell(row - 1, col - 1);

	  return item && item.format || null;
	}
	function isDateInvalid(value) {
	  return value < -99974430.925 || value > 100025569.125;
	}
	function getDateEditFormat(view, row, col) {
	  var formatName = getFormatName(view, row, col);
	  var locale = webix.i18n.spreadsheet.formats;
	  var isTime = checkFormat(formatName, "date", true);
	  return webix.Date.dateToStr(locale[isTime ? "parseDateTime" : "parseDate"]);
	}
	function getFormatFromData(data, array) {
	  var styleName = array[3];
	  var fmt;

	  if (styleName) {
	    var style = find(data.styles, function (arr) {
	      return arr[0] == styleName;
	    });

	    if (style) {
	      style = style[1];
	      var fmtName = styleFromText(style).format;

	      if (fmtName) {
	        if (data.formats) fmt = find(data.formats, function (arr) {
	          return arr[0] == fmtName;
	        });
	        if (fmt) fmt = fmt[1];else fmt = getFormatSource(fmtName); //default formats (int, percent, etc.)
	      }
	    }
	  }

	  return fmt;
	}

	var m8 = /*#__PURE__*/Object.freeze({
		init: init$3,
		get formatHelpers () { return formatHelpers; },
		get currencies () { return currencies; },
		get formatsCount () { return formatsCount; },
		get formatCache () { return formatCache; },
		setDefaultFormats: setDefaultFormats,
		getDelimiters: getDelimiters,
		getFormat: getFormat$1,
		getFormatSource: getFormatSource,
		addFormat: addFormat,
		removeFormat: removeFormat,
		format2code: format2code,
		changeAreaDecimals: changeAreaDecimals,
		changeCellDecimals: changeCellDecimals,
		isCustom: isCustom,
		formToValues: formToValues,
		serializeFormat: serializeFormat,
		checkFormat: checkFormat,
		getFormatName: getFormatName,
		isDateInvalid: isDateInvalid,
		getDateEditFormat: getDateEditFormat,
		getFormatFromData: getFormatFromData
	});

	function isChar(char) {
	  var code = char.charCodeAt(0);
	  return code <= 122 ? code >= 65 || code === 35 || code === 36 : code > 191;
	}
	function getLastCharIndex(str, includeNumbers) {
	  var lastChar = str.length;

	  for (var i = lastChar - 1; i >= 0; i--) {
	    if (!isChar(str[i])) {
	      if (includeNumbers && isNumber(str[i])) continue;
	      return lastChar;
	    } else lastChar = i;
	  }
	}

	function isNumber(char) {
	  var code = char.charCodeAt(0);
	  return code >= 48 && code <= 57;
	}

	function getWord(formula, i) {
	  var sheet = "";
	  var quotes = false;
	  var j;

	  for (j = i; j < formula.length; j++) {
	    var key = formula[j];

	    if (key === "'") {
	      quotes = !quotes;
	      continue;
	    }

	    if (!quotes) {
	      if (key == "!") {
	        if (formula[i] == "#") //error
	          continue;else {
	          //multi-sheet math
	          sheet = formula.substr(i, j - i);
	          if (sheet[0] === "'") sheet = sheet.substr(1, sheet.length - 2);
	          i = j + 1;
	        }
	      } else if (!isChar(key) && !isNumber(key)) {
	        return [formula.substr(i, j - i), j, i, sheet];
	      }
	    }
	  }

	  return [formula.substr(i), j, i, sheet];
	}

	var operand = /^[A-Z$]+[0-9]+$/;

	function isPosition(text) {
	  return operand.test(text);
	}

	function position(word) {
	  var row = 0,
	      sum = 0,
	      x = 1,
	      mode = 1,
	      flags = 0;
	  var chars = false;

	  for (var j = word.length - 1; j >= 0; j--) {
	    var key = word[j].charCodeAt(0);

	    if (key === 36) {
	      flags = flags + mode;
	      continue;
	    }

	    if (key < 58) {
	      //numeric
	      sum += (key - 48) * x;
	      x *= 10;
	    } else {
	      if (!chars) {
	        x = 1;
	        row = sum;
	        sum = 0;
	        chars = true;
	        mode += 1;
	      } //alpha


	      sum += (key - 64) * x;
	      x *= 26;
	    }
	  }
	  /*
	  	$X$Y => flags = 3
	  	$XY  => flags = 2
	  	X$Y  => flags = 1
	  	XY   => flags = 0
	  */


	  return [row, sum, flags];
	}
	function split(formula, view, crosssheet, fromSheet) {
	  var activeSheet = view.getActiveSheet();
	  var lines = [];
	  var index = 0;
	  var quotes = false,
	      ph = false;

	  for (var i = formula[i] === "=" ? 1 : 0; i < formula.length; i++) {
	    var key = formula[i];

	    if (key == "\"") {
	      quotes = !quotes;
	    } else if (!quotes) {
	      if (key == "{" && formula[i + 1] == "{") {
	        ph = true;
	      } else if (key == "}" && formula[i + 1] == "}") {
	        ph = false;
	      } else if (!ph) {
	        var escaped = key === "'";

	        if (escaped || isChar(key)) {
	          var _getWord = getWord(formula, i),
	              _getWord2 = _slicedToArray(_getWord, 4),
	              word = _getWord2[0],
	              end = _getWord2[1],
	              sheet = _getWord2[3];

	          var next = end - 1;
	          var value = void 0;

	          if (formula[next + 1] !== "(") {
	            if (isPosition(word)) {
	              if (!sheet || sheet == activeSheet || crosssheet) {
	                value = sheet ? [sheet, word, escaped] : word;
	                pushLine(lines, formula, i, index, value);
	                index = next + 1;
	              }
	            } else {
	              if (crosssheet) {
	                value = sheet ? [sheet, word, escaped] : word;
	                pushLine(lines, formula, i, index, value);
	                index = next + 1;
	              } else {
	                //specified sheet or active sheet (if not specified) range
	                var range = view.ranges.getCode(word, sheet || fromSheet); //global range

	                if (!range) range = view.ranges.getCode(word, true);

	                if (range) {
	                  var parts = range.split("!");

	                  if (parts[0] == activeSheet) {
	                    value = [sheet, word, escaped, parts[1]];
	                    pushLine(lines, formula, i, index, value);
	                    index = next + 1;
	                  }
	                }
	              }
	            }
	          }

	          i = next;
	        }
	      }
	    }
	  }

	  if (index != formula.length) lines.push(formula.substr(index));
	  return lines;
	}

	function pushLine(lines, formula, i, index, value) {
	  if (i !== 0) lines.push(formula.substr(index, i - index));
	  lines.push(value);
	}

	function getMathFormat(view, value) {
	  var level = 0;
	  var blockLevel;
	  var parts = split(value, view);

	  for (var i = 0; i < parts.length; i++) {
	    // parts[i] can contain numbers, math operators, formulas, etc.
	    if (i % 2 === 0) {
	      // check formulas and round brackets which are not in quotes
	      var methods = parts[i].match(/(([a-zA-Z]*\()|\))(?=(?:[^"]|"[^"]*")*$)/g);
	      if (methods) methods.forEach(function (part) {
	        if (part.indexOf("(") > -1) {
	          level++; // some methods block format addition (like count,odd,etc.)

	          var safeMethods = /^(SUM|AVERAGE|MAX|MIN|INT|ROUND|ROUNDDOWN|ROUNDUP|TRUNC)?\($/gi;
	          if (!blockLevel && !safeMethods.test(part)) blockLevel = level;
	        } else if (--level < blockLevel) blockLevel = null;
	      });
	    } // parts[i] can be named range, cell from the active / non-active sheet
	    else if (!blockLevel) {
	        if (webix.isArray(parts[i])) {
	          if (/^[A-Za-z]+$/.test(parts[i][1])) parts[i] = parts[i][3].split(":")[0];else if (parts[i][0] == view.getActiveSheet()) parts[i] = parts[i][1];else continue; // ignore non-active sheets
	        } // if range - check first cell position


	        var cell = position(parts[i]);
	        var name = getFormatName(view, cell[0], cell[1]); // first cell with number format

	        if (name) return {
	          fmt: getFormatSource(name)
	        };
	      }
	  }
	}

	webix.protoUI({
	  name: "suggest-formula",
	  defaults: {
	    fitMaster: false,
	    width: 200,
	    filter: function (item, value) {
	      var editor = webix.$$(this.config.master);
	      var cursor = editor.getInputNode().selectionStart;
	      var val = editor.getValue();
	      if (val.charAt(0) !== "=") return;
	      var str = val.substring(0, cursor);
	      var search = str.substring(getLastCharIndex(str, true));
	      var nextSymbol = val.charAt(cursor);
	      if (search && (cursor === val.length || !(isChar(nextSymbol) || /^[0-9]/.test(nextSymbol)))) value = search;
	      return item.value.toString().toLowerCase().indexOf(value.toLowerCase()) === 0;
	    }
	  },
	  $init: function () {
	    var _this = this;

	    this.attachEvent("onBeforeShow", function (node) {
	      if (node.tagName) {
	        var editor = webix.$$(_this.config.master);
	        var text = editor.getValue(); //only for formulas

	        if (!text || text.charAt(0) !== "=") return false;
	        var sizes = webix.html.offset(node);
	        var selectionStart = editor.getInputNode().selectionStart;
	        var textWidth = webix.html.getTextSize(text.substring(0, selectionStart), "webix_ssheet_formula").width;
	        var y = sizes.y + sizes.height;
	        var x = sizes.x + textWidth;
	        webix.ui.popup.prototype.show.apply(_this, [{
	          x: x,
	          y: y
	        }]);
	        return false;
	      }
	    });
	  },
	  setMasterValue: function (data, refresh) {
	    var text = data.id ? this.getItemText(data.id) : data.text || data.value;
	    webix.$$(this.config.master).setValueHere(text);
	    if (!refresh) this.hide(true);
	    this.callEvent("onValueSuggest", [data, text]);
	  },
	  $enterKey: function () {
	    if (this.isVisible()) return webix.ui.suggest.prototype.$enterKey.apply(this, arguments);
	  }
	}, webix.ui.suggest);

	function init$4(view) {
	  view.attachEvent("onCellChange", function (row, col, value, page) {
	    if (page == this.getActiveSheet() && !this._setType) {
	      var formatName = getFormatName(this, row, col);
	      var cell = {
	        row: row,
	        col: col,
	        value: value,
	        fmt: formatName ? {
	          fmt: getFormatSource(formatName)
	        } : null
	      };
	      setType(this, cell);
	    }
	  });
	  view.attachEvent("onBeforeFormatChange", function (row, col, formatName) {
	    if (!this._setType) {
	      var cell = {
	        row: row,
	        col: col,
	        value: view.getCellValue(row, col),
	        fmt: {
	          fmt: getFormatSource(formatName)
	        }
	      };
	      setType(this, cell, true);
	    }
	  });
	  view.attachEvent("onAction", function (action, values) {
	    if (action == "dropdown" && values.newValue && values.newValue.editor == "excel_date") {
	      var format = getFormatName(this, values.row, values.column);
	      if (getFormatType(format) != "date") this.setFormat(values.row, values.column, webix.i18n.spreadsheet.formats.dateFormat);
	    }
	  });
	}
	function loadCell(view, data, item) {
	  var fmt = getFormatFromData(data, item);
	  var cell = {
	    value: item[2],
	    fmt: fmt ? {
	      fmt: fmt
	    } : null,
	    type: item[4]
	  };
	  setType(view, cell);
	  return cell;
	}

	function getExpectType(view, cell, parseDate, isFormula, formatType, style) {
	  //date based math
	  var type = "string";

	  if (!webix.isUndefined(cell.value)) {
	    if (isFormula) {
	      type = "number";
	      if (/^=(now|date|time)\(/i.test(cell.value)) type = "date";else if (/^=(sparkline|image)\(/i.test(cell.value)) type = "string";
	    } else if (!isNaN(cell.value)) type = "number";else if (formatType != "string" && parseDate) {
	      //if user types a date string, or it comes from Excel import
	      //set date type and convert string to Excel date
	      var parser = webix.Date.strToDate(webix.i18n.spreadsheet.formats.parseDateTime);
	      var value = parser(cell.value);

	      if (value != "" && !isNaN(value)) {
	        //change cell style - value changes once (some value -> 35767.5)
	        //change cell value - value changes twice (some value -> "12/03/97" -> 35767.5)
	        //so ignore undo for cell value change
	        if (style) dateToExcel(view, cell, value);else view.ignoreUndo(function () {
	          return dateToExcel(view, cell, value);
	        });
	        type = "date";
	      }
	    }
	  }

	  return type;
	}

	function dateToExcel(view, cell, date) {
	  date = getExcelDateFromJs(date);
	  cell.value = date;
	  if (!(view._loading_data || view._page_value_set)) view.setCellValue(cell.row, cell.col, date);
	}

	function checkType(type, expectType, formatType, isFormula, value) {
	  type = type || expectType; //strings will always have string type regardless of format

	  if (expectType == "string") type = "string";else if (formatType) type = formatType;
	  if (type == "date" && !isFormula && isDateInvalid(value)) type = "number";
	  return type;
	}

	function getFormatType(format) {
	  var formatType = format ? "number" : null;
	  if (checkFormat(format, "string")) formatType = "string";else if (checkFormat(format, "date")) formatType = "date";
	  return formatType;
	}

	function getType(view, row, column, page) {
	  page = page ? view._mData.getPage(page) : view._mPage;
	  var item = page.getCell(row - 1, column - 1);
	  return item && item.type || null;
	}

	function setType(view, cell, style) {
	  var parseToStore = !(cell.row && cell.col); //prevent type change during value or format change

	  view._setType = true;
	  var isFormula = typeof cell.value == "string" && cell.value[0] == "=";
	  var parseDate = (!style || cell.fmt == getFormatSource("date")) && (!view._loading_data || view._page_value_set || cell.type == "date");
	  var mathFormat;
	  if (!parseToStore) mathFormat = isFormula && !cell.fmt ? getMathFormat(view, cell.value) : null;
	  var formatType = getFormatType(cell.fmt || mathFormat);
	  var expectType = getExpectType(view, cell, parseDate, isFormula, formatType, style);
	  cell.type = checkType(cell.type, expectType, formatType, isFormula, cell.value);

	  if (!parseToStore) {
	    var item = view._mPage.getCell(cell.row - 1, cell.col - 1, true);

	    item.$format = formatType == "string" ? 1 : 0;
	    updateCell(view, cell, expectType, formatType, mathFormat);
	    item.type = cell.type;
	  }

	  delete view._setType;
	}

	function updateCell(view, cell, expectType, formatType, mathFormat) {
	  var row = cell.row;
	  var col = cell.col;
	  var isString = typeof cell.value == "string";
	  var isFormula = isString && cell.value[0] == "=";
	  var cellEditor = view.getCellEditor(row, col); //update cell value if set number format (5e5 -> 500000, 005 -> 5)

	  if (!(view._loading_data || view._page_value_set) && cell.type === "number" && isString && !isFormula && cell.value !== "") view.setCellValue(row, col, cell.value * 1);
	  if (mathFormat) view.setFormat(row, col, mathFormat.fmt);else if (cell.type == "date") {
	    // add default date format
	    if (formatType != "date") {
	      var isTime = isFormula && cell.value.toUpperCase().indexOf("=TIME(") == 0;
	      var locale = webix.i18n.spreadsheet.formats;
	      var format = isTime ? locale.timeFormat : locale.dateFormat;
	      view.setFormat(row, col, format);
	    } //set date editor for cells with date type


	    if (!isFormula && !cellEditor) view.setCellEditor(row, col, {
	      editor: "excel_date"
	    });
	  } else if (formatType != "string" && cell.type == "string" && expectType != "string") {
	    //force text format for numbers typed as strings
	    view.setFormat(row, col, "@");
	  } //remove date editor

	  if ((cell.type != "date" || isFormula) && cellEditor && cellEditor.editor == "excel_date") view.setCellEditor(row, col, null);
	}

	var m4 = /*#__PURE__*/Object.freeze({
		init: init$4,
		loadCell: loadCell,
		getType: getType
	});

	webix.protoUI({
	  name: "live-editor",
	  $cssName: "texthighlight",
	  $init: function (config) {
	    var _this = this;

	    config.suggest = {
	      view: "suggest-formula",
	      data: config.suggestData
	    };
	    config.highlight = this.highlight;
	    this._highlightedCells = {};
	    this.$view.className += " webix_ssheet_formula";
	    this.attachEvent("onKeyPress", function (code, e) {
	      delete _this._update_range;

	      if (code == 13) {
	        //ignore Enter key if it was pressed to select some value from suggest
	        if (new Date() - (_this._last_value_set || 0) > 300) {
	          var cell = _this.config.activeCell;

	          _this.showActiveSheet(true);

	          _this.updateCellValue(cell); //blur to avoid calling highlight function after selection move


	          _this.getInputNode().blur(); //we have 'enter' hot key to activate editor

	        }

	        webix.html.preventEvent(e);
	      } //esc - cancel editing
	      else if (code == 27) {
	          _this.showActiveSheet();

	          webix.delay(function () {
	            var master = _this.getTopParentView();

	            var cell = master.getSelectedId();

	            var oldVal = _this.getCellValue(cell.row, cell.column);

	            if (_this.getValue() == oldVal) master.$$("cells").refresh(cell.row);else _this.setValue(oldVal);
	            delete master.$handleSelection;
	            webix.UIManager.setFocus(master.$$("cells"));
	          });
	        }
	    });
	    this.attachEvent("onAfterRender", function () {
	      var _this2 = this;

	      webix.eventRemove(this.keydownEv);
	      this.keydownEv = webix.event(this.getInputNode(), "keydown", function (e) {
	        _this2.endEdit(e);
	      });
	    });
	  },
	  highlight: function (value) {
	    var html = "";
	    var master = this.getTopParentView();
	    var escapeText = webix.template.escape;

	    for (var area in this._highlightedCells) {
	      var cells = this._highlightedCells[area];
	      this.changeCellCss(cells[0], cells[1], cells[2], true);
	    }

	    this._highlightedCells = {}; //value can be null

	    if (value && value[0] == "=") {
	      var parts = split(value, master, null, this._activeMath);
	      var sheet = master.getActiveSheet();
	      var colorIndex = 1;

	      for (var i = 0; i < parts.length; i++) {
	        if (i % 2 === 0) html += escapeText(parts[i]);else {
	          var crossheet = webix.isArray(parts[i]);
	          var cellSheet = crossheet ? this.prepareSheet(parts[i][0], parts[i][2]) : "";
	          var activeMath = this._activeMath;
	          var activeSheet = !crossheet && (!activeMath || activeMath == sheet);
	          var cell = position(crossheet ? parts[i][1] : parts[i]);
	          var cellText = crossheet ? cellSheet + parts[i][1] : parts[i];
	          var rangeName = crossheet && !getLastCharIndex(parts[i][1]);

	          if (rangeName || activeSheet || crossheet && parts[i][0] == sheet) {
	            var repeatedColor = void 0; //range

	            if (parts[i + 1] == ":" && parts[i + 2] || rangeName) {
	              var nextCell = void 0,
	                  nextCellText = void 0;

	              if (rangeName) {
	                var _cells = parts[i][3].split(":");

	                cell = position(_cells[0]);
	                nextCell = position(_cells[1]);
	              } else {
	                nextCell = position(webix.isArray(parts[i + 2]) ? parts[i + 2][1] : parts[i + 2]);
	                nextCellText = webix.isArray(parts[i + 2]) ? cellSheet + parts[i + 2][1] : parts[i + 2];
	                i += 2;
	              }

	              repeatedColor = this.setColor(cell[0], cell[1], nextCell[0], nextCell[1], colorIndex);
	              html += "<span class=\"webix_ssheet_highlight_color_".concat(repeatedColor || colorIndex, "\">").concat(rangeName ? cellText : cellText + ":" + nextCellText, "</span>");
	            } //OtherSheet!A1:A3 - do not highlight A3
	            else if (parts[i - 1] && parts[i - 1][parts[i - 1].length - 1] == ":") {
	                html += cellText;
	                continue;
	              } //cell
	              else {
	                  repeatedColor = this.setColor(cell[0], cell[1], cell[0], cell[1], colorIndex);
	                  html += "<span class=\"webix_ssheet_highlight_color_".concat(repeatedColor || colorIndex, "\">").concat(cellText, "</span>");
	                }

	            var colors = 7;
	            if (!repeatedColor) colorIndex += colorIndex == colors ? -1 * (colors - 1) : 1;
	          } else html += cellText;
	        }
	      }
	    } else html = escapeText(value);

	    master.$$("cells").refresh();
	    if (document.activeElement == this.getInputNode()) this.paintValue();
	    return html;
	  },
	  showActiveSheet: function (enter) {
	    var master = this.getTopParentView();
	    var grid = master._table;

	    if (this._activeMath) {
	      if (this._activeMath != master.getActiveSheet()) {
	        var cell = this.config.activeCell;
	        this.define({
	          activeCell: null
	        });
	        master.showSheet(this._activeMath);
	        webix.delay(function () {
	          grid.select(cell.row + (enter ? 1 : 0), cell.column);
	        });
	      }

	      delete this._activeMath;
	    } else if (enter) {
	      webix.delay(function () {
	        grid.moveSelection("down");
	      });
	    }
	  },
	  changeCellCss: function (row, col, index, remove) {
	    var css = "webix_ssheet_highlight_background_".concat(index);

	    for (var r = row.start; r <= row.end; r++) {
	      for (var c = col.start; c <= col.end; c++) {
	        this.getTopParentView().$$("cells")[remove ? "removeCellCss" : "addCellCss"](r, c, css, true);
	      }
	    }
	  },
	  endEdit: function (e) {
	    var code = e.which || e.keyCode; //if it is a formula - force user to finish it by click outside or 'enter'

	    if (code == 9) {
	      webix.html.preventEvent(e);
	      this.getInputNode().blur();
	      this.updateCellValue();

	      this.getTopParentView()._table.moveSelection(e.shiftKey ? "left" : "right");
	    }
	  },
	  paintValue: function () {
	    var master = this.getTopParentView();

	    if (!this._activeMath || this._activeMath == master.getActiveSheet()) {
	      var cell = this.config.activeCell;

	      var node = master._table.getItemNode(cell);

	      if (cell && node) node.innerHTML = "<div>".concat(webix.template.escape(this.getValue()), "</div>");
	    }
	  },
	  updateCellValue: function (cell) {
	    var newv = this.getValue();
	    var master = this.getTopParentView();
	    cell = cell || this.config.activeCell;
	    if (!cell) this.setValue("");else {
	      var val = master.getCellValue(cell.row, cell.column);

	      if (newv !== val) {
	        this.config.value = newv;
	        master.setCellValue(cell.row, cell.column, newv);
	        master.refresh();
	      }
	    }
	    delete master.$handleSelection;
	  },
	  $setValueHere: function (value) {
	    this.setValueHere(value);
	  },
	  setValueHere: function (value) {
	    this._last_value_set = new Date();
	    var formula = this.getValue();

	    if (formula && formula.charAt(0) === "=") {
	      var cursor = this.getInputNode().selectionStart;
	      var str1 = formula.substring(0, cursor);
	      var str2 = formula.substring(cursor);
	      if (str1[str1.length - 1] == "(") str1 = str1.substring(0, str1.length - 1);
	      str1 = str1.substring(0, getLastCharIndex(str1, true)); //suggest called via up/down key

	      str1 += value + (str2[0] == "(" ? "" : "(");
	      this.setValue(str1 + str2);
	      this.getInputNode().setSelectionRange(str1.length, str1.length);
	    }
	  },
	  expectOperator: function () {
	    var text = this.getValue();

	    if (text[0] == "=") {
	      var cursor = this.getInputNode().selectionStart;

	      while (text[cursor - 1] == " ") {
	        cursor--;
	      }

	      return text[cursor - 1] && text[cursor - 1].match(/[+&\-/*=(:,]/);
	    }
	  },
	  setRange: function (range, replace) {
	    var cursor = this.getInputNode().selectionStart;
	    var formula = this.getValue();
	    var str1, str2; //check if range was added by click

	    if (replace) replace = this._update_range && cursor == this._update_range.pos + this._update_range.len;
	    var lastPos = replace ? this._update_range.pos : cursor;
	    str1 = formula.substring(0, lastPos) + range;
	    str2 = formula.substring(cursor);
	    this._update_range = {
	      pos: lastPos,
	      len: range.length
	    };
	    this.setValue(str1 + str2);
	  },
	  prepareSheet: function (sheet, escaped) {
	    if (!sheet) return "";
	    var condition = webix.isUndefined(escaped) ? sheet.indexOf(" ") != -1 : escaped;
	    return (condition ? "'".concat(sheet, "'") : sheet) + "!";
	  },
	  prepareArea: function (first, second) {
	    return {
	      start: Math.min(first, second),
	      end: Math.max(first, second)
	    };
	  },
	  setColor: function (row1, col1, row2, col2, color) {
	    var row = this.prepareArea(row1, row2);
	    var col = this.prepareArea(col1, col2);
	    var index = [row.start, row.end, col.start, col.end].join(",");
	    var coloredArea = this._highlightedCells[index];

	    if (!coloredArea) {
	      this._highlightedCells[index] = [row, col, color];
	      this.changeCellCss(row, col, color);
	    } else return coloredArea[2];
	  },
	  getCellValue: function (row, column) {
	    var master = this.getTopParentView();
	    var value = master.getCellValue(row, column);

	    if (getType(master, row, column) == "date" && value[0] != "=") {
	      var format = getDateEditFormat(master, row, column);
	      value = format(getJsDateFromExcel(value));
	    }

	    return value;
	  }
	}, webix.ui.texthighlight);

	webix.protoUI({
	  name: "ssheet-separator",
	  defaults: {
	    css: "webix_ssheet_toolbar_spacer",
	    template: " ",
	    width: 1,
	    borderless: true
	  }
	}, webix.ui.view);

	webix.protoUI({
	  name: "sheets",
	  defaults: {
	    layout: "x",
	    borderless: true,
	    css: "ssheet_list_sheets",
	    select: true,
	    drag: "order",
	    dragscroll: "x",
	    scroll: false
	  }
	}, webix.EditAbility, webix.ui.list);

	// toolbar: toogle button
	webix.protoUI({
	  $cssName: "toggle",
	  name: "ssheet-toggle",
	  toggle: function () {
	    var old = this.getValue();
	    if (!old || old == this.config.offValue) this.config.value = this.config.onValue || true;else this.config.value = this.config.offValue || false;
	    var val = this.getValue();
	    this.$setValue(val);
	    this.callEvent("onChange", [val, old, "user"]);
	  },
	  $setValue: function (value) {
	    if (value == this.config.offValue) value = false;else if (value == this.config.onValue) value = true;
	    webix.ui.toggle.prototype.$setValue.call(this, value);
	  },
	  getValue: function () {
	    var config = this.config;
	    var value = config.value;
	    return !value || value == config.offValue ? config.offValue || false : config.onValue || true;
	  },
	  defaults: {
	    template: function (obj, common) {
	      var css = obj.value === true || obj.value == obj.onValue ? " webix_pressed" : "";
	      var inp = common.$renderInput(obj, common);
	      return "<div class='webix_el_box" + css + "' style='width:" + obj.awidth + "px; height:" + obj.aheight + "px'>" + inp + "</div>";
	    }
	  }
	}, webix.ui.toggle); // toolbar: silent toggle button

	webix.protoUI({
	  name: "ssheet-toggle-silent",
	  $cssName: "toggle",
	  $allowsClear: false,
	  setValue: function () {
	    this.blockEvent();
	    webix.ui.toggle.prototype.setValue.apply(this, arguments);
	    this.unblockEvent();
	  }
	}, webix.ui.toggle);

	webix.protoUI({
	  name: "ssheet-bar-title",
	  defaults: {
	    borderless: true
	  },
	  $init: function () {
	    this.$view.className += " webix_ssheet_subbar_title";
	  }
	}, webix.ui.template);

	webix.protoUI({
	  name: "ssheet-button",
	  $cssName: "button",
	  defaults: {
	    type: "htmlbutton",
	    width: 40
	  },
	  $init: function (config) {
	    var arrowCss = config.arrow ? " webix_ssheet_button_menu" : "";
	    var iconCss = config.label ? "" : " webix_ssheet_icon_only";
	    this.$view.className += " webix_ssheet_button" + arrowCss + iconCss;

	    if (config.label || config.icon) {
	      var icon = config.icon || config.name,
	          text = config.label || "";

	      if (config.arrow) {
	        var right = webix.skin.$active.inputSpacing / 2;
	        text += "<span class='webix_ssheet_button_icon webix_ssheet_icon_arrow webix_icon wxi-menu-down' style='right:" + right + "px;'></span>";
	      }

	      config.label = "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + icon + "'></span> " + text;
	      config.tooltip = webix.i18n.spreadsheet.tooltips[config.name] || "";
	    }

	    if (config.options && !config.popup) config.popup = getPopupConfig(config.options);
	  }
	}, webix.ui.button);
	webix.protoUI({
	  name: "ssheet-button-icon-top",
	  $cssName: "button",
	  defaults: {
	    type: "htmlbutton",
	    width: 70,
	    height: 70
	  },
	  $init: function (config) {
	    this.$view.className += " ssheet_button_icon_top";

	    if (config.label) {
	      var icon = config.icon || config.name || "",
	          text = config.label;
	      config.label = "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + icon + "'></span><br/>";
	      config.label += "<span class='ssheet_button_icon_top_text'>" + text + "</span>";
	      if (config.arrow) config.label += "<br/><span class='ssheet_button_icon_top_arrow webix_icon wxi-menu-down'></span>";
	      config.tooltip = webix.i18n.spreadsheet.tooltips[config.name] || "";
	    }

	    if (config.options && !config.popup) config.popup = getPopupConfig(config.options);
	  }
	}, webix.ui.button);

	function getPopupConfig(options) {
	  return {
	    view: "ssheet-suggest",
	    css: "webix_ssheet_suggest",
	    autowidth: true,
	    template: function (obj) {
	      var text = "";
	      if (obj.icon) text += "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + obj.icon + "'></span> ";
	      text += obj.value || webix.i18n.spreadsheet.menus[obj.id] || obj.id;
	      return text;
	    },
	    data: options,
	    on: {
	      onItemClick: function (id) {
	        var button = this.config.master;

	        if (button) {
	          var view = webix.$$(button).getTopParentView();
	          var params = [this.getItem(id)];

	          if (webix.$$(button).config.area) {
	            var area = view.$$("cells").getSelectArea();
	            if (area) params = params.concat([area.start, area.end]);
	          }

	          view.callEvent("onCommand", params);
	        }
	      }
	    }
	  };
	}

	webix.protoUI({
	  name: "multicheckbox",
	  defaults: {
	    padding: 0,
	    type: "clean",
	    borderless: true,
	    elementsConfig: {
	      labelWidth: 0
	    }
	  },
	  $init: function (config) {
	    config.rows = [{
	      height: 0.000001
	    }];
	    this.$ready.push(function () {
	      this._initOnChange();
	    });
	  },
	  _initOnChange: function () {
	    this.attachEvent("onChange", function (newv) {
	      var name = this.$eventSource.config.name;
	      this.blockEvent();

	      if (name == "$all") {
	        for (var i in this.elements) {
	          this.elements[i].setValue(newv);
	        }

	        if (!newv) this._getCheckboxes()[0].setValue(1);
	      } else {
	        var value = this.getValue(true);

	        if (webix.isArray(value) && (!value.length || !find(value, function (config) {
	          return !config.$hiddenSheet;
	        }))) {
	          var checkboxes = this._getCheckboxes();

	          find(checkboxes, function (c) {
	            return !c.config.$hiddenSheet;
	          }).setValue(1);
	        }

	        this.elements.$all.setValue(this.getValue(true) === true ? 1 : 0);
	      }

	      this.unblockEvent();
	    });
	  },
	  setValue: function (value) {
	    this.elements = {};
	    this._count = value.length;

	    if (value.length > 1) {
	      var elements = [];
	      var base = [];
	      var maxHeight = 400;
	      value.forEach(function (sheet) {
	        var icon = "<span class=\"webix_icon wxi-eye".concat(sheet.hidden ? "-slash" : "", "\"></span>");
	        base.push({
	          view: "checkbox",
	          labelRight: icon + sheet.name,
	          name: sheet.name,
	          value: sheet.active,
	          $hiddenSheet: sheet.hidden
	        });
	      });
	      var baseHeight = base.length * webix.skin.$active.inputHeight;
	      var scroll = baseHeight > maxHeight;
	      elements.push({
	        view: "scrollview",
	        body: {
	          rows: base
	        },
	        scroll: scroll,
	        height: scroll ? maxHeight : baseHeight
	      });
	      elements.push({
	        template: "<div class='ss_sep_line'></div>",
	        height: 10
	      });
	      elements.push({
	        view: "checkbox",
	        labelRight: webix.i18n.spreadsheet.labels["export-all-sheets"],
	        name: "$all",
	        value: 0
	      });
	      webix.ui(elements, this);
	    } else if (this.getChildViews().length > 1) {
	      webix.ui([{
	        height: 0.000001
	      }], this);
	    }
	  },
	  getValue: function (config) {
	    var checkboxes = this._getCheckboxes();

	    var output = []; //save order

	    for (var i = 0; i < checkboxes.length; i++) {
	      if (checkboxes[i].getValue()) {
	        var cfg = checkboxes[i].config;
	        output.push(config ? cfg : cfg.name);
	      }
	    }

	    if (output.length == this._count) return true;
	    return output;
	  },
	  _getCheckboxes: function () {
	    var scrollview = this.queryView("scrollview");
	    return scrollview ? scrollview.getBody().getChildViews() : [];
	  }
	}, webix.ui.form);

	webix.protoUI({
	  name: "formlist",
	  defaults: {
	    paddingY: 5,
	    height: 120
	  },
	  $init: function (config) {
	    var _this = this;

	    config.cols = [{
	      css: "webix_inp_label",
	      template: config.label,
	      width: config.labelWidth,
	      borderless: true
	    }, {
	      view: "list",
	      data: config.data,
	      css: config.css,
	      template: config.template,
	      select: true,
	      scroll: false,
	      borderless: true,
	      on: {
	        onSelectChange: function () {
	          _this.getParentView().callEvent("onChange", []);
	        }
	      }
	    }];
	  },
	  setValue: function (value) {
	    this.getChildViews()[1].select(value);
	  },
	  getValue: function () {
	    return this.getChildViews()[1].getSelectedId();
	  },
	  refresh: function () {
	    this.getChildViews()[1].refresh();
	  },
	  focus: function () {}
	}, webix.ui.layout);

	webix.protoUI({
	  name: "ssheet-ui",
	  defaults: {
	    move: true,
	    css: "webix_shadow_none webix_ssheet_ui",
	    head: false,
	    resize: true,
	    toFront: true,
	    minWidth: 50,
	    minHeight: 200,
	    escHide: false,
	    autofit: false
	  },
	  $init: function () {
	    // prevent block selection
	    this.$view.setAttribute("webixignore", "1");
	    this.$ready.push(function () {
	      webix.UIManager.addHotKey("delete", webix.bind(this._removeView, this));
	      webix.UIManager.addHotKey("backspace", webix.bind(this._removeView, this));
	      this.getMenu();
	    });
	    this.attachEvent("onDestruct", function () {
	      webix.eventRemove(this._clickEv);

	      this._menu.destructor();
	    });
	  },
	  move_setter: function (value) {
	    if (value) {
	      webix.DragControl.addDrag(this.$view, this);
	    }

	    return value;
	  },
	  $dragPos: function (pos, e) {
	    this.callEvent("onViewMove", [pos, e]);
	    return pos;
	  },
	  $dragCreate: function (object, e) {
	    var trg = e.target;
	    if (!trg.getAttribute || trg.getAttribute("webix_disable_drag") || trg.getAttribute("webixignore")) return;
	    this.getMenu().hide();
	    var elOffset = webix.html.offset(object);
	    var elPos = webix.html.pos(e);
	    var pOffset = webix.html.offset(object.parentNode);
	    var state = webix.$$(this.config.master).getScrollState();
	    webix.DragControl.top = elOffset.y - elPos.y - pOffset.y;
	    webix.DragControl.left = elOffset.x - elPos.x - pOffset.x + state.x;
	    return webix.toNode(this.$view);
	  },
	  $dragDestroy: function (node, drag) {
	    var x = this.config.left = parseInt(drag.style.left, 10);
	    var y = this.config.top = parseInt(drag.style.top, 10);
	    webix.DragControl.top = webix.DragControl.left = 0;
	    this.callEvent("onViewMoveEnd", [x, y]);
	    return;
	  },
	  getMenu: function () {
	    var _this = this;

	    var labels = webix.i18n.spreadsheet.labels;

	    if (!this._menu) {
	      var data = [{
	        value: labels["export-view"],
	        submenu: [{
	          id: "pdf",
	          value: labels["export-view-pdf"]
	        }, {
	          id: "png",
	          value: labels["export-view-png"]
	        }, {
	          id: "excel",
	          value: labels["export-view-excel"]
	        }]
	      }];
	      if (!webix.$$(this.config.master).getTopParentView().config.readonly) data = [{
	        id: "edit",
	        value: labels["edit-view"]
	      }].concat(_toConsumableArray(data), [{
	        id: "del",
	        value: labels["remove-view"]
	      }]);
	      this._menu = webix.ui({
	        view: "contextmenu",
	        submenuConfig: {
	          externalUI: this.config.id
	        },
	        data: data,
	        on: {
	          onMenuItemClick: function (id) {
	            return _this._menuActions(id);
	          },
	          onBeforeShow: function () {
	            return _this._toggleExcel();
	          }
	        }
	      });
	      var dots = webix.html.create("span", {
	        "class": "webix_ssheet_view_menu webix_icon wxi-dots"
	      });
	      this._clickEv = webix.event(dots, "click", function () {
	        if (_this._menu.isVisible()) _this._menu.hide();else _this._menu.show(dots);
	      });
	      this.$view.firstChild.appendChild(dots);
	    }

	    return this._menu;
	  },
	  _menuActions: function (id) {
	    switch (id) {
	      case "del":
	        this.callEvent("onViewRemove", []);
	        break;

	      case "edit":
	        this.callEvent("onViewEdit", []);
	        break;

	      case "pdf":
	        webix.toPDF(this.getBody(), {
	          display: "image"
	        });
	        break;

	      case "png":
	        webix.toPNG(this.getBody());
	        break;

	      case "excel":
	        webix.toExcel(this.getBody(), {
	          header: false
	        });
	        break;
	    }
	  },
	  _toggleExcel: function () {
	    var view = this.getBody();
	    if (view.data && view.data.pull) this._menu.showMenuItem("excel");else this._menu.hideMenuItem("excel");
	  },
	  _removeView: function (view) {
	    if (view && view.getTopParentView() == this) this.callEvent("onViewRemove", []);
	  }
	}, webix.ui.window);

	webix.protoUI({
	  name: "ssheet-series",
	  $init: function (config) {
	    var _this = this;

	    this.hidden = {};
	    config.rows = [{
	      view: "scrollview",
	      borderless: true,
	      body: {
	        view: "accordion",
	        css: "webix_ssheet_accordion",
	        margin: webix.skin.$active.layoutMargin.form,
	        multi: true,
	        type: "clean",
	        rows: [this.getSectionConfig()]
	      },
	      on: {
	        onAfterScroll: function () {
	          //close possibly open selector popups
	          webix.callEvent("onClick", []);
	        }
	      }
	    }, {
	      view: "button",
	      label: webix.i18n.spreadsheet.labels["add-line"],
	      click: function () {
	        _this.addSection();
	      }
	    }];
	  },
	  getSectionConfig: function (i) {
	    var _this2 = this;

	    var view = this;
	    var labels = webix.i18n.spreadsheet.labels;
	    var trashIcon = "<span class='webix_icon webix_ssheet_series_icon wxi-trash'></span>";
	    var padding = webix.skin.$active.dataPadding - 2;
	    return {
	      view: "accordionitem",
	      header: "".concat(labels["chart-item"], " ").concat(i ? i + 1 : 1, " ").concat(trashIcon),
	      body: {
	        view: "form",
	        padding: padding,
	        elementsConfig: {
	          labelWidth: 180
	        },
	        on: {
	          onChange: function () {
	            _this2.callEvent("onChange", []);
	          }
	        },
	        elements: [{
	          view: "text",
	          label: labels["chart-range"],
	          name: "range",
	          range: true,
	          on: {
	            onChange: function (val, oldVal) {
	              var upper = val.toUpperCase();

	              if (val != upper) {
	                this.blockEvent();
	                this.setValue(upper);
	                this.unblockEvent();
	              }

	              view.callEvent("onRangeChange", [upper, oldVal]);
	            }
	          }
	        }, {
	          view: "ssheet-colorpicker",
	          label: labels["chart-series-color"],
	          name: "color",
	          hidden: this.hidden.color
	        }, {
	          view: "checkbox",
	          label: labels["chart-tooltip"],
	          name: "tooltip"
	        }, {
	          view: "checkbox",
	          label: labels["chart-label"],
	          name: "label",
	          hidden: this.hidden.label
	        }, {
	          view: "richselect",
	          label: labels["chart-markers"],
	          value: "square",
	          name: "marker",
	          hidden: this.hidden.marker,
	          suggest: {
	            view: "ssheet-form-suggest",
	            data: [{
	              id: "square",
	              value: labels["chart-markers-square"]
	            }, {
	              id: "triangle",
	              value: labels["chart-markers-triangle"]
	            }, {
	              id: "diamond",
	              value: labels["chart-markers-diamond"]
	            }, {
	              id: "round",
	              value: labels["chart-markers-round"]
	            }]
	          }
	        }]
	      },
	      onClick: {
	        "wxi-trash": function () {
	          var layout = this.getParentView();
	          layout.removeView(this);
	          var childs = layout.getChildViews();

	          for (var _i = 0; _i < childs.length; _i++) {
	            childs[_i].define({
	              header: "".concat(labels["chart-item"], " ").concat(_i + 1, " ").concat(trashIcon)
	            });

	            childs[_i].refresh();
	          }

	          view.callEvent("onChange", []);
	          return false;
	        }
	      }
	    };
	  },
	  addSection: function () {
	    var layout = this.getLayout();
	    var lastIndex = layout.getChildViews().length;
	    var layoutId = layout.addView(this.getSectionConfig(lastIndex));
	    webix.$$(layoutId).queryView({
	      name: "range"
	    }).focus();
	  },
	  setValue: function (value) {
	    value = value || [];
	    var layout = this.getLayout();
	    var childs = layout.getChildViews();
	    var count = childs.length;
	    if (count > value.length) for (var i = count; i > value.length; i--) {
	      this.getLayout().removeView(childs[i - 1]);
	    } else if (value.length > count) for (var _i2 = value.length; _i2 > count; _i2--) {
	      this.addSection();
	    }

	    for (var _i3 = 0; _i3 < childs.length; _i3++) {
	      var form = childs[_i3].getChildViews()[0];

	      var range = form.queryView({
	        name: "range"
	      }); //block range events to ignore onRangeChange

	      range.blockEvent();
	      form.setValues(value[_i3]);
	      range.unblockEvent();
	    }
	  },
	  setSubValue: function (sub, value) {
	    sub.blockEvent();
	    sub.setValue(value);
	    sub.unblockEvent();
	  },
	  getLayout: function () {
	    return this.queryView("scrollview").getBody();
	  },
	  hideSubviews: function (name, show) {
	    this.hidden[name] = !show;
	    this.queryView({
	      name: name
	    }, "all").forEach(function (view) {
	      if (show) view.show();else view.hide();
	    });
	  },
	  getValue: function () {
	    var value = [];
	    var layout = this.getLayout();
	    layout.getChildViews().forEach(function (child) {
	      value.push(child.getChildViews()[0].getValues());
	    });
	    return value;
	  }
	}, webix.ui.layout);

	webix.protoUI({
	  name: "ssheet-toolbar-scrollview",
	  $getSize: function () {
	    var size = webix.ui.scrollview.prototype.$getSize.apply(this, arguments);
	    var bodySize = this.getBody().$getSize(0, 0);
	    var scroll = 0;
	    if (this.config.scroll) scroll = webix.env.scrollSize;else this.$view.style["overflow-x"] = "hidden";
	    size[2] = size[3] = bodySize[2] + scroll;
	    return size;
	  },
	  $setSize: function (x, y) {
	    var _this = this;

	    var bodySize = this.getBody().$getSize(0, 0);
	    var oldScroll = this.config.scroll;
	    var scroll = x < bodySize[0] ? "x" : false;

	    if (scroll != oldScroll) {
	      this.define({
	        scroll: scroll
	      });
	      return webix.delay(function () {
	        _this.resize();
	      });
	    }

	    webix.ui.scrollview.prototype.$setSize.apply(this, [x, y]);
	  }
	}, webix.ui.scrollview);

	webix.protoUI({
	  name: "ssheet-zoom",
	  $cssName: "counter webix_ssheet_zoom",
	  $init: function () {
	    var _this = this;

	    this.attachEvent("onAfterRender", function () {
	      _this.$setValue(_this.config.value);

	      _this.getInputNode().readOnly = true;
	      webix.event(_this.$view.firstChild, "keydown", function (e) {
	        return webix.html.preventEvent(e);
	      });
	    });
	  },
	  $setValue: function (value) {
	    this.getInputNode().value = parseInt(value * 100, 10) + "%";
	  },
	  getNext: function (value, step, numbers) {
	    var index = numbers.indexOf(value);
	    if (index != -1) return numbers[index + step] || value;
	    var nextValue;

	    for (var i = 0; i < numbers.length; i++) {
	      if (numbers[i] > value) {
	        if (step < 0) {
	          if (--i == -1) return value;
	        }

	        nextValue = numbers[i];
	        break;
	      }
	    }

	    if (step < 0 && !nextValue) nextValue = numbers[numbers.length - 1];
	    return nextValue || value;
	  },
	  shift: function (step, config) {
	    var v = this.config.value;
	    var arr = this.config.numbers;
	    var value = this.getNext(v, step, arr);
	    this.setValue(value, config);
	  }
	}, webix.ui.counter);

	webix.editors.excel_date = webix.extend({
	  createPopup: function () {
	    var editor = webix.editors.excel_date;

	    if (!editor.popup) {
	      var popup = webix.ui({
	        view: "popup",
	        body: {
	          view: "calendar",
	          icons: true,
	          timepicker: true,
	          on: {
	            onChange: function (val) {
	              val = val[0];
	              this.getParentView()._last_input_target.value = val ? getExcelDateFromJs(val) : "";
	              webix.callEvent("onEditEnd", []);
	            }
	          }
	        },
	        on: {
	          onEnter: function () {
	            webix.callEvent("onEditEnd", []);
	          }
	        }
	      });
	      editor.popup = popup.config.id;
	    }

	    return editor.popup;
	  },
	  render: function () {
	    var _this = this;

	    var node = webix.html.create("div", {
	      "class": "webix_dt_editor"
	    }, "<input type='text'>");
	    this.popup = this.createPopup();
	    webix.event(node.firstChild, "click", function () {
	      return _this.getPopup().show(node);
	    });
	    return node;
	  },
	  getPopup: function () {
	    return webix.$$(this.popup);
	  },
	  showPopup: function () {
	    var input = this.getInputNode();
	    var popup = this.getPopup();
	    popup._last_input_target = input;
	    popup.show(input);
	    input.setAttribute("aria-expanded", "true");
	  },
	  updateCalendar: function (value) {
	    var calendar = this.getPopup().getBody();
	    calendar.blockEvent();
	    calendar.setValue(value);
	    calendar.unblockEvent();
	  },
	  afterRender: function () {
	    this.showPopup();
	  },
	  setValue: function (value) {
	    var noDate = value === "" || isNaN(value * 1);
	    value = noDate ? new Date() : getJsDateFromExcel(value);
	    this.updateCalendar(value);
	    var view = webix.$$(this.config.node).queryView(function (a) {
	      return a.name === "spreadsheet";
	    }, "parent");
	    var format = getDateEditFormat(view, this.config.row.id, this.config.id);
	    this.getInputNode().value = format(value);
	  },
	  getValue: function () {
	    var value = this.getInputNode().value;
	    this.getPopup().hide();
	    return value;
	  }
	}, webix.editors.text);

	webix.editors.ss_richselect = webix.extend({
	  getFormat: function (value) {
	    var list = this.getInputNode();
	    var item;
	    if (value && list.exists(value)) item = list.getItem(value);
	    return item && item.format;
	  },
	  popupInit: function (popup) {
	    webix.editors.richselect.popupInit.apply(this, arguments);
	    popup.getList().define("template", function (obj) {
	      return obj.$value || obj.value;
	    });
	  }
	}, webix.editors.richselect);

	var actions = {
	  span: function (view) {
	    var range = view.$$("cells").getSelectArea();

	    if (range) {
	      if (isMerged(view, range)) view.splitCell();else {
	        var values = [];

	        for (var r = range.start.row; r <= range.end.row; r++) {
	          for (var c = range.start.column; c <= range.end.column; c++) {
	            var value = view.getCellValue(r, c);
	            if (value) values.push(value);
	            if (values.length > 1) break;
	          }

	          if (values.length > 1) break;
	        }

	        if (values.length > 1) {
	          view.confirm({
	            text: webix.i18n.spreadsheet.labels["merge-cell-confirm"]
	          }).then(function () {
	            return view.combineCells();
	          });
	        } else view.combineCells();
	      }
	    }
	  },
	  undo: function (view) {
	    return view.undo();
	  },
	  redo: function (view) {
	    return view.redo();
	  },
	  "hide-gridlines": function (view) {
	    return view.hideGridlines("toggle");
	  },
	  "hide-headers": function (view) {
	    return view.hideHeaders("toggle");
	  },
	  "freeze-columns": function (view) {
	    return view.freezeColumns();
	  },
	  "freeze-rows": function (view) {
	    return view.freezeRows();
	  },
	  "increase-decimals": function (view) {
	    return changeAreaDecimals(view, 1);
	  },
	  "decrease-decimals": function (view) {
	    return changeAreaDecimals(view, -1);
	  },
	  "increase-indent": function (view) {
	    return view.callEvent("onStyleSet", ["indent", 1]);
	  },
	  "decrease-indent": function (view) {
	    return view.callEvent("onStyleSet", ["indent", -1]);
	  },
	  "show-formulas": function (view) {
	    return view.showFormulas("toggle");
	  },
	  "print-borders": function (view) {
	    return view.showPrintBorders("toggle");
	  }
	};

	function isMerged(view, range) {
	  var i,
	      j,
	      c0 = range.start,
	      c1 = range.end;

	  for (i = c0.row * 1; i <= c1.row * 1; i++) {
	    for (j = c0.column * 1; j <= c1.column * 1; j++) {
	      if (view.$$("cells").getSpan(i, j)) return true;
	    }
	  }

	  return false;
	}

	var fontFamily = [{
	  id: "Arial",
	  value: "Arial"
	}, {
	  id: "'Roboto', sans-serif",
	  value: "Roboto"
	}, {
	  id: "'PT Sans', Tahoma",
	  value: "PT Sans"
	}, {
	  id: "'Open Sans', sans-serif",
	  value: "Open Sans"
	}, {
	  id: "Tahoma",
	  value: "Tahoma"
	}, {
	  id: "Verdana",
	  value: "Verdana"
	}, {
	  id: "Calibri, Tahoma",
	  value: "Calibri"
	}]; // options for 'format' select

	function getCellFormats() {
	  var locale = webix.i18n.spreadsheet.labels;
	  return [{
	    id: "common",
	    value: locale.common
	  }, {
	    id: "price",
	    value: locale.currency,
	    example: "98.20"
	  }, {
	    id: "int",
	    value: locale.number,
	    example: "2120.02"
	  }, {
	    id: "percent",
	    value: locale.percent,
	    example: "0.5"
	  }, {
	    id: "date",
	    value: locale.date,
	    example: "45000"
	  }, {
	    id: "string",
	    value: locale.string,
	    example: "012345"
	  }, {
	    id: "custom",
	    value: locale["custom-format"]
	  }];
	}

	function getColumnOperation(view) {
	  var locale = webix.i18n.spreadsheet.menus;
	  var colOperations = [{
	    id: "add",
	    group: "column",
	    value: locale["insert-column"]
	  }, {
	    id: "del",
	    group: "column",
	    value: locale["delete-column"]
	  }, {
	    id: "show",
	    group: "column",
	    value: locale["show-column"],
	    neighbors: true
	  }, {
	    id: "hide",
	    group: "column",
	    value: locale["hide-column"]
	  }];
	  if (view.config.resizeCell != false) colOperations.push({
	    id: "resize",
	    group: "column",
	    value: locale["resize-column"]
	  });
	  return colOperations;
	}
	function getRowOperation(view) {
	  var locale = webix.i18n.spreadsheet.menus;
	  var rowOperations = [{
	    id: "add",
	    group: "row",
	    value: locale["insert-row"]
	  }, {
	    id: "del",
	    group: "row",
	    value: locale["delete-row"]
	  }, {
	    id: "show",
	    group: "row",
	    value: locale["show-row"],
	    neighbors: true
	  }, {
	    id: "hide",
	    group: "row",
	    value: locale["hide-row"]
	  }];
	  if (view.config.resizeCell != false) rowOperations.push({
	    id: "resize",
	    group: "row",
	    value: locale["resize-row"]
	  });
	  return rowOperations;
	} // options for 'clear' select

	function getClearOperation() {
	  return [{
	    id: "clear-value",
	    value: getLocaleClear("value")
	  }, {
	    id: "clear-style",
	    value: getLocaleClear("style")
	  }, {
	    id: "clear-conditional-formats",
	    value: getLocaleClear("conditional-formats")
	  }, {
	    id: "clear-dropdown-editors",
	    value: getLocaleClear("dropdown-editors")
	  }, {
	    id: "clear-comments",
	    value: getLocaleClear("comments")
	  }, {
	    $template: "Separator"
	  }, {
	    id: "clear-all",
	    value: getLocaleClear("all")
	  }];
	} // options for 'borders' select

	var borders = [{
	  id: "no",
	  value: "no"
	}, {
	  id: "left",
	  value: "left"
	}, {
	  id: "top",
	  value: "top"
	}, {
	  id: "right",
	  value: "right"
	}, {
	  id: "bottom",
	  value: "bottom"
	}, {
	  id: "all",
	  value: "all"
	}, {
	  id: "outer",
	  value: "outer"
	}, {
	  id: "top-bottom",
	  value: "top-bottom"
	}];

	function getLocaleClear(value) {
	  var locale = webix.i18n.spreadsheet.menus;
	  return locale["clear"] + " " + locale["clear-" + value].toLowerCase();
	} // options for 'font-size' select


	function getFontSize() {
	  return ["8", "9", "10", "11", "12", "14", "15", "16", "18", "20", "22", "24", "28", "36"];
	}

	var styleFormats = {
	  "font-weight": "bold",
	  "font-style": "italic",
	  "underline": "underline",
	  "strike": "strike"
	};
	var ui = {
	  button: function (config) {
	    return {
	      view: "ssheet-toggle",
	      width: config.width || toolbarSizes.width,
	      id: config.name,
	      name: config.name,
	      label: config.label,
	      css: config.css || "",
	      onValue: styleFormats[config.name],
	      offValue: "normal",
	      tooltip: webix.i18n.spreadsheet.tooltips[config.name] || ""
	    };
	  },
	  colorButton: function (config) {
	    return {
	      view: "ssheet-color",
	      css: config.css,
	      name: config.name,
	      width: config.width || toolbarSizes.width + 24,
	      title: "<span class='webix_ssheet_button_icon webix_ssheet_color_button_icon webix_ssheet_icon ssi-" + config.name + "' ></span>",
	      tooltip: webix.i18n.spreadsheet.tooltips[config.name] || ""
	    };
	  },
	  toggleButton: function (config) {
	    return {
	      view: "ssheet-toggle-silent",
	      width: toolbarSizes.width,
	      id: config.name,
	      name: config.name,
	      label: "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + (config.icon || config.name) + "'></span>",
	      tooltip: webix.i18n.spreadsheet.tooltips[config.name] || ""
	    };
	  },
	  iconButton: function (config) {
	    var btn = webix.copy(config);
	    webix.extend(btn, {
	      view: "button",
	      width: toolbarSizes.width,
	      id: config.name,
	      label: "<span class='webix_ssheet_button_icon webix_ssheet_icon ssi-" + config.name + "'></span>",
	      css: "",
	      tooltip: webix.i18n.spreadsheet.tooltips[config.name] || webix.i18n.spreadsheet.menus[config.name] || ""
	    });

	    if (config.onValue) {
	      webix.extend(btn, {
	        view: "ssheet-toggle",
	        onValue: config.onValue,
	        offValue: config.offValue
	      }, true);
	    }

	    return btn;
	  },
	  segmented: function (config) {
	    return {
	      view: "segmented",
	      name: config.name,
	      css: config.css || "",
	      width: config.width || toolbarSizes.width + 76,
	      options: config.options
	    };
	  },
	  select: function (config) {
	    webix.extend(config, {
	      view: "richselect",
	      id: config.name,
	      value: defaultStyles[config.name],
	      suggest: {
	        css: "webix_ssheet_suggest",
	        padding: 0,
	        data: config.options
	      }
	    });
	    config.tooltip = webix.i18n.spreadsheet.tooltips[config.name] || "";

	    if (config.popupWidth) {
	      config.suggest.fitMaster = false;
	      config.suggest.width = config.popupWidth;
	    }

	    if (config.popupTemplate) config.suggest.body = {
	      template: config.popupTemplate
	    };

	    if (config.popupEvents) {
	      config.suggest.body = config.suggest.body || {};
	      config.suggest.body.on = config.popupEvents;
	    }

	    return config;
	  },
	  separator: function () {
	    return {
	      view: "ssheet-separator"
	    };
	  },
	  title: function (config) {
	    var title = config.title;
	    if (title.indexOf("$") === 0) title = "";
	    title = webix.i18n.spreadsheet.labels[config.title] || title;
	    return {
	      template: title,
	      view: "ssheet-bar-title",
	      height: toolbarSizes.titleHeight
	    };
	  },
	  borders: function (config) {
	    return {
	      view: "ssheet-borders",
	      width: config.width || toolbarSizes.width + 24,
	      data: borders,
	      id: config.name,
	      name: config.name,
	      tooltip: webix.i18n.spreadsheet.tooltips[config.name]
	    };
	  },
	  align: function (config) {
	    return {
	      view: "ssheet-align",
	      value: defaultStyles[config.name],
	      width: config.width || toolbarSizes.width + 24,
	      data: config.options,
	      name: config.name,
	      tooltip: webix.i18n.spreadsheet.tooltips[config.name]
	    };
	  },
	  condFormat: function (config) {
	    return {
	      view: "ssheet-cond-format",
	      width: 40,
	      id: config.name,
	      name: config.name
	    };
	  }
	};
	var buttonsMap = {
	  "font-family": function () {
	    return ui.select({
	      name: "font-family",
	      options: fontFamily,
	      width: 100,
	      view: "combo"
	    });
	  },
	  "font-size": function () {
	    return ui.select({
	      name: "font-size",
	      options: getFontSize(),
	      width: 70,
	      view: "text",
	      icon: "wxi-menu-down",
	      css: "webix_ssheet_text",
	      on: {
	        onItemClick: function () {
	          var suggest = webix.$$(this.config.suggest);
	          if (!suggest.isVisible()) suggest.show(this.getInputNode());
	        }
	      }
	    });
	  },
	  "font-weight": function () {
	    return ui.button({
	      name: "font-weight",
	      label: "B",
	      css: "webix_ssheet_bold"
	    });
	  },
	  "font-style": function () {
	    return ui.button({
	      name: "font-style",
	      label: "I",
	      css: "webix_ssheet_italic"
	    });
	  },
	  "underline": function () {
	    return ui.button({
	      name: "underline",
	      label: "U",
	      css: "webix_ssheet_underline"
	    });
	  },
	  "strike": function () {
	    return ui.button({
	      name: "strike",
	      label: "S",
	      css: "webix_ssheet_strike"
	    });
	  },
	  "color": function () {
	    return ui.colorButton({
	      name: "color",
	      icon: "font",
	      css: "webix_ssheet_color"
	    });
	  },
	  "background": function () {
	    return ui.colorButton({
	      name: "background",
	      icon: "paint-brush",
	      css: "webix_ssheet_background",
	      width: 70
	    });
	  },
	  "borders": function () {
	    return ui.borders({
	      name: "borders"
	    });
	  },
	  "text-align": function () {
	    var locale = webix.i18n.spreadsheet.tooltips;
	    return ui.align({
	      name: "text-align",
	      css: "webix_ssheet_align",
	      options: [{
	        id: "left",
	        css: "webix_ssheet_icon ssi-left",
	        tooltip: locale["align-left"]
	      }, {
	        id: "center",
	        css: "webix_ssheet_icon ssi-center",
	        tooltip: locale["align-center"]
	      }, {
	        id: "right",
	        css: "webix_ssheet_icon ssi-right",
	        tooltip: locale["align-right"]
	      }]
	    });
	  },
	  "vertical-align": function () {
	    var locale = webix.i18n.spreadsheet.tooltips;
	    return ui.align({
	      name: "vertical-align",
	      css: "webix_ssheet_align",
	      options: [{
	        id: "top",
	        css: "webix_ssheet_icon ssi-top",
	        tooltip: locale["align-top"]
	      }, {
	        id: "middle",
	        css: "webix_ssheet_icon ssi-middle",
	        tooltip: locale["align-middle"]
	      }, {
	        id: "bottom",
	        css: "webix_ssheet_icon ssi-bottom",
	        tooltip: locale["align-bottom"]
	      }]
	    });
	  },
	  "wrap": function () {
	    return ui.iconButton({
	      name: "wrap",
	      onValue: "wrap",
	      offValue: "nowrap"
	    });
	  },
	  "format": function () {
	    return ui.select({
	      name: "format",
	      width: 106,
	      options: getCellFormats(),
	      popupWidth: 180,
	      popupTemplate: function (obj) {
	        //make it look like an actual cell
	        var format = formatHelpers[obj.id] ? formatHelpers[obj.id].getFormat : "";
	        var cell = {
	          css: ""
	        };
	        var example = format && obj.example ? format(obj.example, cell) : "";
	        return obj.value + (format ? "<span class='webix_ssheet_right" + (cell.css ? " " + cell.css : "") + "'>" + example + "</span>" : "");
	      },
	      popupEvents: {
	        onItemClick: function (id) {
	          if (id == "custom") this.getTopParentView().callEvent("onCommand", [{
	            id: id
	          }]);
	        }
	      }
	    });
	  },
	  "column": function (view) {
	    return {
	      name: "column",
	      view: "ssheet-button",
	      icon: "column",
	      arrow: true,
	      area: true,
	      width: 58,
	      options: getColumnOperation(view)
	    };
	  },
	  "row": function (view) {
	    return {
	      name: "row",
	      view: "ssheet-button",
	      icon: "row",
	      arrow: true,
	      area: true,
	      width: 58,
	      options: getRowOperation(view)
	    };
	  },
	  "clear": function () {
	    return {
	      name: "clear",
	      view: "ssheet-button",
	      icon: "clear-styles",
	      arrow: true,
	      area: true,
	      width: 58,
	      options: getClearOperation()
	    };
	  },
	  "image": function () {
	    return {
	      name: "image",
	      view: "ssheet-button",
	      icon: "add-image",
	      arrow: true,
	      options: [{
	        id: "add-image-cell",
	        value: webix.i18n.spreadsheet.labels["add-image-cell"]
	      }, {
	        id: "add-image-top",
	        value: webix.i18n.spreadsheet.labels["add-image-top"]
	      }]
	    };
	  },
	  "graph": function () {
	    return {
	      name: "graph",
	      view: "ssheet-button",
	      icon: "add-sparkline",
	      arrow: true,
	      options: [{
	        id: "add-sparkline",
	        value: webix.i18n.spreadsheet.labels["add-sparkline"]
	      }, {
	        id: "add-chart",
	        value: webix.i18n.spreadsheet.labels["add-chart"]
	      }]
	    };
	  },
	  "comment": function () {
	    return {
	      name: "comment",
	      view: "ssheet-button",
	      icon: "comments",
	      arrow: true,
	      area: true,
	      width: 55
	    };
	  },
	  "create-filter": function () {
	    return ui.toggleButton({
	      name: "create-filter"
	    });
	  },
	  "hide-gridlines": function () {
	    return ui.toggleButton({
	      name: "hide-gridlines"
	    });
	  },
	  "hide-headers": function () {
	    return ui.toggleButton({
	      name: "hide-headers"
	    });
	  },
	  "show-formulas": function () {
	    return ui.toggleButton({
	      name: "show-formulas"
	    });
	  },
	  "print-borders": function () {
	    return ui.toggleButton({
	      name: "print-borders",
	      icon: "borders-no"
	    });
	  }
	};

	function toolbarButtons(view, structure) {
	  var checkButtons = function (cells) {
	    for (var i = 0; i < cells.length; i++) {
	      var name = cells[i].$button;

	      if (name) {
	        var base = buttonsMap[name] ? buttonsMap[name](view) : ui.iconButton({
	          name: name
	        });
	        webix.extend(cells[i], base);
	      }

	      if (cells[i].rows) checkButtons(cells[i].rows);
	      if (cells[i].cols) checkButtons(cells[i].cols);
	    }
	  };

	  checkButtons(structure);
	  return structure;
	}
	function getButtons(view, structure) {
	  var config = [];

	  for (var block in structure) {
	    config.push(elementsBlock(view, block, structure[block]));
	    config.push(ui.separator());
	  }

	  return config;
	}

	function blockColumns(view, buttons) {
	  var cols = [];

	  for (var i = 0; i < buttons.length; i++) {
	    var name = buttons[i];

	    if (_typeof(name) == "object") {
	      cols.push(name);
	    } else {
	      var base = buttonsMap[name] ? buttonsMap[name](view) : ui.iconButton({
	        name: name
	      });
	      cols.push(base);
	    }
	  }

	  return cols;
	}

	function elementsBlock(view, name, columns) {
	  var block = {
	    rows: [{
	      padding: 2,
	      cols: [{
	        margin: 2,
	        cols: blockColumns(view, columns)
	      }]
	    }, ui.title({
	      title: name
	    })]
	  };
	  return block;
	}

	function getText(text) {
	  var locale = webix.i18n.spreadsheet;
	  return locale.menus[text] || locale.labels[text] || locale.tooltips[text] || text;
	}

	function calcButtons() {
	  var i,
	      name,
	      width,
	      groups = {
	    "undo": ["undo", "redo"],
	    "insert": ["add-sparkline", "add-image", "add-comment"]
	  },
	      result = {};

	  for (name in groups) {
	    result[name] = 0;

	    for (i = 0; i < groups[name].length; i++) {
	      width = webix.html.getTextSize(getText(groups[name][i]), "webix_ssheet_button_measure").width + 7;
	      result[name] = Math.max(width, result[name]);
	    }
	  }

	  return result;
	}

	function getAllElements(readonly) {
	  var sizes = calcButtons();
	  var titleHeight = toolbarSizes.titleHeight;
	  if (readonly) return [{
	    padding: 3,
	    margin: 0,
	    rows: [{
	      margin: 2,
	      cols: [{
	        $button: "excel-export"
	      }, {
	        $button: "print"
	      }, {
	        $button: "print-borders"
	      }]
	    }, {
	      template: getText("file"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {}];
	  return [{
	    padding: 3,
	    margin: 0,
	    rows: [{
	      margin: 2,
	      cols: [{
	        name: "sheet",
	        view: "ssheet-button-icon-top",
	        label: getText("sheet"),
	        arrow: true,
	        options: [{
	          id: "new-sheet"
	        }, {
	          id: "copy-sheet"
	        }, {
	          id: "remove-sheet"
	        }, {
	          id: "hide-sheet"
	        }]
	      }, {
	        rows: [{
	          $button: "excel-import"
	        }, {
	          $button: "excel-export"
	        }]
	      }, {
	        rows: [{
	          $button: "print"
	        }, {
	          $button: "print-borders"
	        }]
	      }]
	    }, {
	      template: getText("file"),
	      view: "ssheet-bar-title",
	      height: titleHeight,
	      width: 85
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {
	    padding: 3,
	    rows: [{
	      $button: "undo",
	      view: "ssheet-button",
	      label: getText("undo"),
	      width: sizes.undo
	    }, {
	      $button: "redo",
	      view: "ssheet-button",
	      label: getText("redo"),
	      width: sizes.undo
	    }, {
	      template: getText("undo-redo"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {
	    padding: 3,
	    rows: [{
	      margin: 2,
	      cols: [{
	        margin: 2,
	        cols: [{
	          $button: "font-family",
	          width: (webix.skin.$active.inputHeight + 2) * 4 + 6
	        }, {
	          $button: "font-size"
	        }]
	      }, {
	        $button: "borders"
	      }]
	    }, {
	      margin: 2,
	      cols: [{
	        margin: 2,
	        cols: [{
	          $button: "font-weight"
	        }, {
	          $button: "font-style"
	        }, {
	          $button: "underline"
	        }, {
	          $button: "strike"
	        }]
	      }, {
	        $button: "background"
	      }, {
	        $button: "color"
	      }]
	    }, {
	      template: getText("font"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {
	    padding: 3,
	    rows: [{
	      margin: 2,
	      cols: [{
	        $button: "text-align"
	      }, {
	        $button: "span"
	      }, {
	        $button: "increase-indent"
	      }]
	    }, {
	      margin: 2,
	      cols: [{
	        $button: "vertical-align"
	      }, {
	        $button: "wrap"
	      }, {
	        $button: "decrease-indent"
	      }]
	    }, {
	      template: getText("align"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {
	    padding: 3,
	    rows: [{
	      $button: "format"
	    }, {
	      margin: 2,
	      cols: [{
	        $button: "increase-decimals"
	      }, {
	        $button: "decrease-decimals"
	      }]
	    }, {
	      template: getText("number"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {
	    padding: 3,
	    rows: [{
	      cols: [{
	        $button: "sort-asc"
	      }, {
	        $button: "create-filter"
	      }, {
	        $button: "conditional-format"
	      }, {
	        $button: "add-link"
	      }, {
	        $button: "clear"
	      }]
	    }, {
	      cols: [{
	        $button: "sort-desc"
	      }, {
	        $button: "add-range"
	      }, {
	        $button: "lock-cell"
	      }, {
	        $button: "add-dropdown"
	      }]
	    }, {
	      template: getText("edit"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {
	    padding: 3,
	    rows: [{
	      cols: [{
	        $button: "image",
	        view: "ssheet-button",
	        label: getText("image"),
	        width: sizes.insert
	      }, {
	        $button: "add-comment",
	        view: "ssheet-button",
	        label: getText("comment"),
	        width: sizes.insert
	      }]
	    }, {
	      $button: "graph",
	      view: "ssheet-button",
	      label: getText("graph"),
	      width: sizes.insert
	    }, {
	      template: getText("insert"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {
	    padding: 3,
	    rows: [{
	      cols: [{
	        rows: [{
	          $button: "row"
	        }, {
	          $button: "column"
	        }]
	      }, {
	        rows: [{
	          $button: "hide-gridlines"
	        }, {
	          $button: "hide-headers"
	        }]
	      }, {
	        rows: [{
	          $button: "freeze-rows"
	        }, {
	          $button: "freeze-columns"
	        }]
	      }, {
	        rows: [{
	          $button: "show-formulas"
	        }, {}]
	      }]
	    }, {
	      template: getText("view"),
	      view: "ssheet-bar-title",
	      height: titleHeight
	    }]
	  }, {
	    view: "ssheet-separator"
	  }, {}];
	}

	var buttons = {
	  "undo-redo": ["undo", "redo"],
	  "font": ["font-family", "font-size", "font-weight", "font-style", "underline", "strike", "color", "background", "borders"],
	  "align": ["text-align", "vertical-align", "wrap", "span", "increase-indent", "decrease-indent"],
	  "format": ["format"]
	};
	function init$5(view) {
	  view.attachEvent("onComponentInit", function () {
	    return ready(view);
	  });
	  view.attachEvent("onCommand", function (action) {
	    if (action.id == "toolbar-update") {
	      if (action.name) updateValue(view, action.name, action.value);else setValues(view, view.getSelectedId(true));
	    }
	  });
	  var elements = [];

	  if (view.config.toolbar) {
	    var allElements = view.config.toolbar;

	    if (allElements == "full") {
	      allElements = getAllElements(view.config.readonly);
	      if (webix.isUndefined(view.config.bottombar)) view.config.bottombar = true;
	    }

	    elements = toolbarButtons(view, allElements);
	  } else elements = getButtons(view, view.config.buttons || buttons);

	  var bar = {
	    view: webix.env.$customScroll ? "scrollview" : "ssheet-toolbar-scrollview",
	    scroll: "x",
	    body: {
	      view: "toolbar",
	      css: "webix_ssheet_toolbar webix_layout_toolbar",
	      id: "bar",
	      padding: 0,
	      elements: elements,
	      on: {
	        onChange: function (value, old, config) {
	          if (config == "user") {
	            var source = this.$eventSource;
	            var name = source.config.name;
	            if (name == "format" && value == "common") value = "";
	            var size = name == "font-size";
	            if ((size || name == "font-family") && (!value || size && isNaN(value))) return source.setValue(old);else if (size) {
	              var maxSize = Math.floor(400 / 0.75); // 400 pt - max excel font size; divide 0.75 - pt to px conversion

	              var limited = Math.max(1, Math.min(maxSize, value));

	              if (limited != value) {
	                value = limited;
	                source.setValue(value);
	              }

	              value += "px";
	            }
	            if (!(name == "format" && value == "custom")) view.callEvent("onStyleSet", [name, value]);
	          }
	        },
	        onItemClick: function (id) {
	          var viewId = view.innerId(id);
	          if (actions[viewId]) actions[viewId].call(this, view);else view.callEvent("onCommand", [{
	            id: viewId
	          }]);
	        }
	      }
	    }
	  };
	  view.callEvent("onViewInit", ["toolbar", bar]);
	  return bar;
	}

	function ready(view) {
	  view.attachEvent("onAfterSelect", function (selected) {
	    return setValues(view, selected);
	  });
	}

	function setValues(view, selected) {
	  var barStyles = getBarStyles(view, selected);
	  view.$$("bar").setValues(barStyles);
	}

	function updateValue(view, name, value) {
	  var element = view.$$("bar").elements[name];
	  if (element) element.setValue(value);
	}

	function getBarStyles(view, selected) {
	  var dropdowns = ["font-family", "font-size", "text-align", "vertical-align", "format", "background", "color"];
	  var cell = selected[0];
	  var barStyles = getCellStyles(view, cell);

	  for (var i = 1; i < selected.length; i++) {
	    var cellStyle = getCellStyles(view, selected[i]);

	    for (var k = dropdowns.length - 1; k >= 0; k--) {
	      var property = dropdowns[k];

	      if (barStyles[property] != cellStyle[property]) {
	        delete barStyles[property];
	        dropdowns.splice(k, 1);
	      }
	    }

	    if (!dropdowns.length) break;
	  }

	  return barStyles;
	}

	function getCellStyles(view, cell) {
	  var span = view.$$("cells").getSpan(cell.row, cell.column);

	  if (span) {
	    var _span = _slicedToArray(span, 2);

	    cell.row = _span[0];
	    cell.column = _span[1];
	  }

	  var obj = getStyle(view, cell);
	  var styles = obj ? webix.copy(obj.props) : {};

	  for (var i in defaultStyles) {
	    if (!styles[i]) styles[i] = defaultStyles[i];
	  }

	  styles["font-size"] = styles["font-size"].replace("px", "");
	  var format = getFormat(view, cell.row, cell.column) || "common";
	  styles.format = isCustom(format) ? "custom" : format;
	  return styles;
	}

	function selectRow(row, view, endRow) {
	  var columns = view.$$("cells").config.columns;
	  var firstColumn = columns[0].id == "rowId" ? 1 : 0;
	  var start = {
	    row: row,
	    column: columns[firstColumn].id
	  };
	  var last = {
	    row: endRow || row,
	    column: columns[columns.length - 1].id
	  };
	  if (start.column && last.column) _selectRange(start, last, view);
	}
	function selectAll(view) {
	  var order = view.$$("cells").data.order;
	  var columns = view.$$("cells").config.columns;
	  var firstColumn = columns[0].id == "rowId" ? 1 : 0;
	  var start = {
	    row: order[0],
	    column: columns[firstColumn].id
	  };
	  var last = {
	    row: order[order.length - 1],
	    column: columns[columns.length - 1].id
	  };
	  if (start.column && last.column) _selectRange(start, last, view);
	}
	function selectColumn(column, view, endColumn) {
	  var order = view.$$("cells").data.order;
	  var startRow = order[0];
	  var lastRow = order[order.length - 1];
	  var start = {
	    row: startRow,
	    column: column
	  };
	  var last = {
	    row: lastRow,
	    column: endColumn || column
	  };

	  _selectRange(start, last, view);
	}
	function isColSelected(column, view) {
	  var selectedArea = view.$$("cells").getSelectArea();

	  if (selectedArea) {
	    if (column >= selectedArea.start.column && column <= selectedArea.end.column) return true;
	  }

	  return false;
	}
	function isCellSelected(row, column, view) {
	  return isRowSelected(row, view) && isColSelected(column, view);
	}
	function isRowSelected(row, view) {
	  var selectedArea = view.$$("cells").getSelectArea();

	  if (selectedArea) {
	    if (row >= selectedArea.start.row && row <= selectedArea.end.row) return true;
	  }

	  return false;
	}
	function selectColumns(column, view) {
	  var selectedArea = view.$$("cells").getSelectArea();
	  if (!selectedArea) selectColumn(column, view);else {
	    var col1 = Math.min(selectedArea.start.column, selectedArea.end.column, column);
	    var col2 = Math.max(selectedArea.start.column, selectedArea.end.column, column);
	    selectColumn(col1, view, col2);
	  }
	}

	function _selectRange(a, b, view) {
	  view.$$("cells").addSelectArea(a, b);
	}

	function adjustColumn(column, view) {
	  var grid = view.$$("cells");
	  var width = 25;
	  var columnWidth = grid.getColumnConfig(column).width;
	  grid.eachRow(function (row) {
	    var span = grid.getSpan(row, column);
	    if (span && span[2] > 1) return;
	    var text = this.getText(row, column);
	    var style = view.getStyle(row, column);
	    var css = style ? style.id : "";

	    if (text.replace(/<\/?[^>]+(>|$)/g, "")) {
	      var size = getTextSize(view, text, css);
	      var zoom = view._zoom;
	      if (view.getCellEditor(row, column)) size.width += 18 * zoom;
	      if (view.getCellFilter(row, column)) size.width += 18 * zoom;
	      if (style && style.props.wrap == "wrap" && size.width > columnWidth) size.width = columnWidth;
	      if (size.width > width) width = size.width;
	    }
	  });
	  grid.setColumnWidth(column, width);
	}
	function adjustRow(row, view) {
	  var height = 25;

	  view._table.eachColumn(function (column) {
	    if (column != "rowId") {
	      var text = this.getText(row, column); // if there is text wrap in cell we need to know width to get correct height

	      var width = this.getColumnConfig(column).width;

	      var span = view._table.getSpan(row, column);

	      if (span) width = view._table.getSpanNode({
	        row: span[0],
	        column: span[1]
	      }).offsetWidth;
	      var style = view.getStyle(row, column);
	      var css = style ? style.id : "";

	      if (text.replace(/<\/?[^>]+(>|$)/g, "")) {
	        var size = getTextSize(view, text, css, width);
	        if (size.height > height) height = size.height;
	      }
	    }
	  });

	  view._table.setRowHeight(row, height);
	}
	function highlightColRow(start, end, view) {
	  if (!view._table.config.header) return;
	  var grid = view._table;
	  var css = "webix_highlight";
	  var sr = start.row,
	      er = end.row,
	      sc = start.column,
	      ec = end.column;
	  var columns = grid.config.columns;
	  var firstColumn = columns[1].id;

	  if (sc == "rowId") {
	    if (sc == ec) {
	      start.column = sc = firstColumn;
	      end.column = ec = columns[columns.length - 1].id;
	    } else start.column = sc = firstColumn;
	  } else if (ec == "rowId") end.column = ec = firstColumn;

	  if (er < sr) {
	    var _ref = [er, sr];
	    sr = _ref[0];
	    er = _ref[1];
	  }

	  if (ec < sc) {
	    var _ref2 = [ec, sc];
	    sc = _ref2[0];
	    ec = _ref2[1];
	  }

	  grid.eachRow(function (row) {
	    if (row < sr || row > er) grid.removeCellCss(row, "rowId", css, true);else grid.addCellCss(row, "rowId", css, true);
	  });
	  webix.delay(function () {
	    return grid.refresh();
	  });
	  grid.eachColumn(function (col) {
	    var node = grid.getHeaderNode(col);
	    if (col == "rowId" || !node) return;
	    if (col < sc || col > ec) webix.html.removeCss(node, css);else webix.html.addCss(node, css, true);
	  });

	  if (view.$$("navigation")) {
	    var range$$1 = "";

	    if (sc && ec) {
	      if (!sr) {
	        var order = grid.data.order;
	        sr = order[0];
	        er = order[order.length - 1];
	      }

	      range$$1 = toRange(sr, sc, er, ec);
	      var cells = range$$1.split(":");
	      if (cells[0] == cells[1]) range$$1 = cells[0];
	    }

	    view.$$("navigation").setValue(range$$1);
	  }
	}

	var m12 = /*#__PURE__*/Object.freeze({
		selectRow: selectRow,
		selectAll: selectAll,
		selectColumn: selectColumn,
		isColSelected: isColSelected,
		isCellSelected: isCellSelected,
		isRowSelected: isRowSelected,
		selectColumns: selectColumns,
		adjustColumn: adjustColumn,
		adjustRow: adjustRow,
		highlightColRow: highlightColRow
	});

	var lockCss = "webix_lock";
	function init$6(view) {
	  view._locks = {};
	  view.attachEvent("onReset", function () {
	    return reset$1(view);
	  });
	  view.attachEvent("onUndo", function (type, row, column, mode) {
	    if (type === "lock") lockCell(view, row, column, !!mode, true);
	  });
	  view.attachEvent("onCommand", function (cm) {
	    if (cm.id === "lock-cell") lock(view);
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "before-grid-change") updatePosition(view, p.name, p.inc, p.data, p.start);
	  });
	}

	function reset$1(view) {
	  view._locks = {};
	}

	function lockCell(view, row, column, mode, silent) {
	  var table = view.$$("cells");

	  if (_typeof(row) === "object" && _typeof(column) === "object") {
	    group.set(function () {
	      _mapCellsCalls(row, column, function (row, column) {
	        lockCell(view, row, column, mode, true);
	      });
	    });
	  } else {
	    mode = mode === false ? false : true;
	    var objrow = view._locks[row] = view._locks[row] || {};
	    objrow[column] = mode;
	    if (mode) table.addCellCss(row, column, lockCss, true);else table.removeCellCss(row, column, lockCss, true);
	    view.callEvent("onAction", ["lock", {
	      row: row,
	      column: column,
	      value: !mode,
	      newValue: mode
	    }]);
	  }

	  if (!silent) table.refresh();
	}

	function _mapCellsCalls(start, end, handler, master) {
	  for (var x = start.row; x <= end.row; x++) {
	    for (var y = start.column; y <= end.column; y++) {
	      handler.call(master || this, x, y);
	    }
	  }
	}

	function isCellLocked(view, row, column) {
	  return view._locks[row] ? view._locks[row][column] : false;
	}
	function serialize$1(view, data) {
	  var row,
	      column,
	      locked = [];

	  for (row in view._locks) {
	    for (column in view._locks[row]) {
	      if (view._locks[row][column]) locked.push([row, column]);
	    }
	  }

	  data.locked = locked;
	}
	function load$1(view, data) {
	  var i,
	      locked = data.locked;
	  if (locked) for (i = 0; i < locked.length; i++) {
	    lockCell(view, locked[i][0], locked[i][1], true, true);
	  }
	}

	function lock(view) {
	  var block = view.$$("cells").getSelectArea();

	  if (block) {
	    var mode = view.isCellLocked(block.start.row, block.start.column);
	    view.lockCell(block.start, block.end, !mode);
	  }
	}

	function updatePosition(view, name, inc, data, start) {
	  var locked = data.locked,
	      i = locked.length;

	  if (inc) {
	    while (i--) {
	      var _locked$i = _slicedToArray(locked[i], 2),
	          row = _locked$i[0],
	          column = _locked$i[1];

	      if (row && name == "row" && row >= start.row || column && name == "column" && column >= start.column) {
	        if (name == "row") {
	          if (row < start.row - inc) //delete lock mark if row was deleted
	            locked.splice(i, 1);else //update mark position if upper row was deleted
	            locked[i][0] = row * 1 + inc;
	        } else if (name == "column") {
	          if (column < start.column - inc) {
	            locked.splice(i, 1);
	          } else locked[i][1] = column * 1 + inc;
	        }
	      }
	    }
	  }
	}

	var m3 = /*#__PURE__*/Object.freeze({
		lockCss: lockCss,
		init: init$6,
		lockCell: lockCell,
		isCellLocked: isCellLocked,
		serialize: serialize$1,
		load: load$1
	});

	function init$7(view) {
	  view.attachEvent("onStyleChange", function (row, column, style) {
	    var span = getSpan(view, row, column);

	    if (span) {
	      var extraCss = getExtraCss(view, row, column);
	      span[3] = (style ? style.id : "") + (extraCss ? " " + extraCss : "");
	    }
	  });
	  view.attachEvent("onDataParse", function (data) {
	    parse(view, data);
	  });
	  view.attachEvent("onDataSerialize", function (data) {
	    serialize$2(view, data);
	  });
	  view.attachEvent("onUndo", function (type, row, column, value, isUndo) {
	    if (type == "span" || type == "split") {
	      if (type == "span") isUndo = !isUndo;
	      undoSpan(view, row, column, value, isUndo);
	    }
	  });
	  view.attachEvent("onAction", function (name, options) {
	    if (name == "lock") setSpanCss(view, options.row, options.column, lockCss, options.newValue);else if (name == "before-grid-change") updatePosition$1(view, options.name, options.inc, options.data, options.start);else if (name == "check-borders") return checkSpanBorders(view, options.row, options.column, options.area, options.mode);
	  });
	}

	function getSpan(view, row, column) {
	  var item = view.$$("cells").getSpan()[row];
	  if (item) return item[column];
	}

	function parse(view, data) {
	  if (data.spans) for (var i = 0; i < data.spans.length; i++) {
	    var span = data.spans[i];
	    addSpan(view, {
	      row: span[0],
	      column: span[1]
	    }, span[2] * 1, span[3] * 1, true);
	  }
	}

	function serialize$2(view, data) {
	  var spans = [];
	  var pull = view.$$("cells").getSpan();

	  if (pull) {
	    for (var rid in pull) {
	      var row = pull[rid];

	      for (var cid in row) {
	        var span = row[cid];
	        spans.push([rid * 1, cid * 1, span[0], span[1]]);
	      }
	    }

	    data.spans = spans;
	  }

	  return data;
	}
	function addSpan(view, cell, x, y, silent) {
	  if (x < 2 && y < 2) return;

	  if (silent || view.callEvent("onBeforeSpan", [cell.row, cell.column, [x, y]])) {
	    var obj = view._mPage.getCell(cell.row - 1, cell.column - 1);

	    var css = obj && obj.style || "";
	    var extraCss = getExtraCss(view, cell.row, cell.column);
	    if (extraCss) css += " " + extraCss;
	    setSpanValue(view, cell, x, y);
	    view.$$("cells").addSpan(cell.row, cell.column, x, y, null, css);

	    if (!silent) {
	      view.callEvent("onAfterSpan", [cell.row, cell.column, [x, y]]);
	      save(view, "spans", {
	        row: cell.row,
	        column: cell.column,
	        x: x,
	        y: y
	      });
	    }
	  }
	}
	function removeSpan(view, cell) {
	  var span = view.$$("cells").getSpan(cell.row, cell.column);

	  if (span && view.callEvent("onBeforeSplit", [cell.row, cell.column, [span[2], span[3]]])) {
	    view.$$("cells").removeSpan(cell.row, cell.column);
	    view.callEvent("onAfterSplit", [cell.row, cell.column, [span[2], span[3]]]);
	    save(view, "spans", {
	      row: cell.row,
	      column: cell.column,
	      x: 0,
	      y: 0
	    });
	  }
	}
	function getRange(sel) {
	  var lx, ly, rx, ry;
	  rx = ry = 0;
	  lx = ly = Infinity;

	  for (var i = 0; i < sel.length; i++) {
	    var cx = sel[i].column * 1;
	    var cy = sel[i].row * 1;
	    lx = Math.min(cx, lx);
	    rx = Math.max(cx, rx);
	    ly = Math.min(cy, ly);
	    ry = Math.max(cy, ry);
	  }

	  return {
	    cell: {
	      row: ly,
	      column: lx
	    },
	    x: rx - lx + 1,
	    y: ry - ly + 1
	  };
	}
	function setSpanCss(view, row, column, css, add) {
	  var span = getSpan(view, row, column);

	  if (span) {
	    if (add) {
	      if (span[3].indexOf(css) == -1) span[3] += " " + css;
	    } else {
	      span[3] = span[3].replace(" " + css, "");
	    }
	  }
	}

	function getExtraCss(view, row, column) {
	  var extraCss = [];
	  if (view.getCellEditor(row, column)) extraCss.push("ss_editor");
	  if (view.getCellFilter(row, column)) extraCss.push("ss_filter");
	  return extraCss.join(" ");
	}

	function undoSpan(view, row, column, value, isUndo) {
	  if (isUndo) {
	    removeSpan(view, {
	      row: row,
	      column: column
	    });
	  } else {
	    addSpan(view, {
	      row: row,
	      column: column
	    }, value[0], value[1]);
	  }
	}

	function updatePosition$1(view, name, inc, data, start) {
	  var spans = data.spans;

	  if (inc) {
	    for (var i = spans.length - 1; i >= 0; i--) {
	      var _spans$i = _slicedToArray(spans[i], 2),
	          row = _spans$i[0],
	          column = _spans$i[1];

	      if (inc < 0) {
	        //deleting
	        if (name == "row" && row <= start.row - inc - 1) inc = start.row - spans[i][0];else if (name == "column" && column <= start.column - inc - 1) inc = start.column - spans[i][1];
	      }

	      if (name == "row" && row >= start.row || name == "column" && column >= start.column) {
	        spans[i][0] = name == "row" ? row * 1 + inc : row;
	        spans[i][1] = name == "column" ? column * 1 + inc : column;
	      }
	    }
	  }
	}

	var borderChecks = {
	  "border-right": function (row, column, span, area) {
	    return area.end.column == column + span[0] - 1;
	  },
	  "border-bottom": function (row, column, span, area) {
	    return area.end.row == row + span[1] - 1;
	  }
	};

	function checkSpanBorders(view, row, column, area, mode) {
	  var span = getSpan(view, row, column);
	  return span && borderChecks[mode] ? borderChecks[mode](row, column, span, area) : false;
	} // clear merged cells except the first one


	function setSpanValue(view, cell, x, y) {
	  var i,
	      j,
	      value,
	      row = cell.row * 1,
	      column = cell.column * 1,
	      isEmpty = !view.getCellValue(row, column);

	  for (i = row; i < row + y; i++) {
	    for (j = column; j < column + x; j++) {
	      value = view.getCellValue(i, j);

	      if (value !== "" && (j != column || i != row)) {
	        if (isEmpty) {
	          isEmpty = false;
	          view.setCellValue(row, column, value);
	        }

	        view.setCellValue(i, j, "");
	      }
	    }
	  }
	}

	function adjustSpan(span, action, start, end, view, data, spanData) {
	  var length = action.group == "row" ? span[3] : span[2];
	  var checkSpan = action.group == "row" ? [span[0] * 1, span[0] * 1 + span[3] - 1] : [span[1] * 1, span[1] * 1 + span[2] - 1];
	  var selection = action.group == "row" ? [start.row, end.row] : [start.column, end.column]; //if we add, the number of selected rows/cols is added to span, so we need original selection length

	  var inc = selection[1] - selection[0] + 1;
	  selection[0] = Math.max(selection[0], checkSpan[0]);
	  selection[1] = Math.min(selection[1], checkSpan[1]);
	  var isFirstCell = selection[0] == checkSpan[0];

	  if (selection[0] <= selection[1]) {
	    //selection is in span
	    if (action.id == "del") //if we delete, only rows/cols included into span
	      inc = (selection[1] - selection[0] + 1) * -1; //delete smth which starts as span and less than it's length

	    if (action.id == "del" && isFirstCell && length > -1 * inc) {
	      var item = find(data, function (arr) {
	        return arr[0] == span[0] && arr[1] == span[1];
	      });
	      if (item) spanData.push(item);
	    }

	    if (!(isFirstCell && action.id == "add")) {
	      span[2] = action.group == "column" ? span[2] + inc : span[2];
	      span[3] = action.group == "row" ? span[3] + inc : span[3];
	    }
	  }

	  return span;
	}
	function pasteSpan(view, extra, row, col, cutted, translate) {
	  //existing span
	  var s = view._table.getSpan(row, col);

	  if (extra && extra.span) {
	    var span = extra.span; //if we are on start position for the future span

	    if (row == span[0] * 1 + translate.row && col == span[1] * 1 + translate.column) {
	      //delete spans in future paste zone 
	      view._table.mapCells(row, col, span[3], span[2], function (value, rid, cid) {
	        s = view._table.getSpan(rid, cid);
	        if (s) removeSpan(view, {
	          row: s[0],
	          column: s[1]
	        });
	      }, true);

	      addSpan(view, {
	        row: row,
	        column: col
	      }, span[2], span[3]);
	      if (cutted === 1) removeSpan(view, {
	        row: extra.row,
	        column: extra.col
	      });
	    }
	  } else if (s) removeSpan(view, {
	    row: s[0],
	    column: s[1]
	  });
	}

	var m16 = /*#__PURE__*/Object.freeze({
		init: init$7,
		serialize: serialize$2,
		addSpan: addSpan,
		removeSpan: removeSpan,
		getRange: getRange,
		setSpanCss: setSpanCss,
		adjustSpan: adjustSpan,
		pasteSpan: pasteSpan
	});

	function getText$1(text) {
	  var locale = webix.i18n.spreadsheet.labels;
	  return locale[text] || text;
	}

	function getDefaultStyles() {
	  return [{
	    name: getText$1("normal"),
	    css: "webix_ssheet_condition_regular"
	  }, {
	    name: getText$1("neutral"),
	    css: "webix_ssheet_condition_neutral"
	  }, {
	    name: getText$1("bad"),
	    css: "webix_ssheet_condition_bad"
	  }, {
	    name: getText$1("good"),
	    css: "webix_ssheet_condition_good"
	  }];
	}

	function isDate(value) {
	  return value && !isNaN(value) && !isDateInvalid(value);
	}

	var conditions = {
	  number: [{
	    id: "greater",
	    batch: "text",
	    handler: function (a, b) {
	      return a !== "" && a * 1 > b * 1;
	    }
	  }, {
	    id: "less",
	    batch: "text",
	    handler: function (a, b) {
	      return a !== "" && a * 1 < b * 1;
	    }
	  }, {
	    id: "greaterOrEqual",
	    batch: "text",
	    handler: function (a, b) {
	      return a !== "" && a * 1 >= b * 1;
	    }
	  }, {
	    id: "lessOrEqual",
	    batch: "text",
	    handler: function (a, b) {
	      return a !== "" && a * 1 <= b * 1;
	    }
	  }, {
	    id: "equal",
	    batch: "text",
	    handler: function (a, b) {
	      return a == b;
	    }
	  }, {
	    id: "notEqual",
	    batch: "text",
	    handler: function (a, b) {
	      return a != b;
	    }
	  }, {
	    id: "contains",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) !== -1;
	    }
	  }, {
	    id: "notContains",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) === -1;
	    }
	  }],
	  text: [{
	    id: "contains",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) !== -1;
	    }
	  }, {
	    id: "notContains",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase().indexOf(b.toString().toLowerCase()) === -1;
	    }
	  }, {
	    id: "equal",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase() === b.toString().toLowerCase();
	    }
	  }, {
	    id: "notEqual",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase() !== b.toString().toLowerCase();
	    }
	  }, {
	    id: "beginsWith",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase().lastIndexOf(b.toString().toLowerCase(), 0) === 0;
	    }
	  }, {
	    id: "notBeginsWith",
	    batch: "text",
	    handler: function (a, b) {
	      return a.toString().toLowerCase().lastIndexOf(b.toString().toLowerCase(), 0) !== 0;
	    }
	  }, {
	    id: "endsWith",
	    batch: "text",
	    handler: function (a, b) {
	      a = a.toString();
	      b = b.toString();
	      return a.toLowerCase().indexOf(b.toLowerCase(), a.length - b.length) !== -1;
	    }
	  }, {
	    id: "notEndsWith",
	    batch: "text",
	    handler: function (a, b) {
	      a = a.toString();
	      b = b.toString();
	      return a.toLowerCase().indexOf(b.toLowerCase(), a.length - b.length) === -1;
	    }
	  }],
	  date: [{
	    id: "greater",
	    batch: "datepicker",
	    handler: function (a, b) {
	      return isDate(a) && a > b;
	    }
	  }, {
	    id: "less",
	    batch: "datepicker",
	    handler: function (a, b) {
	      return isDate(a) && a < b;
	    }
	  }, {
	    id: "greaterOrEqual",
	    batch: "datepicker",
	    handler: function (a, b) {
	      return isDate(a) && a >= b;
	    }
	  }, {
	    id: "lessOrEqual",
	    batch: "datepicker",
	    handler: function (a, b) {
	      return isDate(a) && a <= b;
	    }
	  }, {
	    id: "equal",
	    batch: "datepicker",
	    handler: function (a, b) {
	      return isDate(a) && a == b;
	    }
	  }, {
	    id: "notEqual",
	    batch: "datepicker",
	    handler: function (a, b) {
	      return !isDate(a) || a != b;
	    }
	  }, {
	    id: "between",
	    batch: "daterangepicker",
	    handler: function (a, b) {
	      if (!isDate(a)) return false;
	      return (!b.start || a > b.start) && (!b.end || a < b.end);
	    }
	  }, {
	    id: "notBetween",
	    batch: "daterangepicker",
	    handler: function (a, b) {
	      if (!isDate(a)) return false;
	      return !b.start || a <= b.start || !b.end || a >= b.end;
	    }
	  }]
	};

	function init$8(view) {
	  view.conditions = {
	    _empty: true,
	    _pull: {},
	    handlers: createRules(),
	    add: function (rId, cId, cond, val, style) {
	      add.apply(this, [view, rId, cId, cond, val, style]);
	    },
	    update: function (r, c, data) {
	      update.apply(this, [view, r, c, data]);
	    },
	    remove: remove,
	    get: get,
	    parse: parse$1,
	    serialize: serialize$3,
	    clear: clear
	  };
	  view.attachEvent("onConditionSet", function (data) {
	    return _setCondition(view, data);
	  });
	  view.attachEvent("onUndo", function (type_action, row, column, value) {
	    if (type_action == "condition") _undoCondition(view, row, column, value);
	  });
	  view.attachEvent("onDataSerialize", function (data) {
	    return _serialize$1(view, data);
	  });
	  view.attachEvent("onDataParse", function (data) {
	    return _parse$1(view, data);
	  });
	  view.attachEvent("onReset", function () {
	    return view.conditions.clear();
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "before-grid-change") updatePosition$2(view, p.name, p.inc, p.data, p.start);
	  });
	  reset$2(view);
	}

	function createRules() {
	  var rules = webix.copy(conditions);
	  rules.number = rules.number.concat([{
	    id: "between",
	    handler: function (a, b) {
	      return (!b.start || a > b.start) && (!b.end || a < b.end);
	    }
	  }, {
	    id: "notBetween",
	    handler: function (a, b) {
	      return !b.start || a <= b.start || !b.end || a >= b.end;
	    }
	  }]);
	  return rules;
	}

	function getCellValue(view, value) {
	  if (isNaN(value * 1)) {
	    if (value.charAt(0) == "=" && value.length > 1) {
	      value = view._mData.getStore().exec(value.substring(1), view._mPage.getContext());
	      if (value === null) value = "";
	    }
	  } else {
	    value = value * 1;
	  }

	  return value;
	}

	function reset$2(view) {
	  view.conditions.clear();
	}

	function _setCondition(view, data) {
	  group.set(function () {
	    view.eachSelectedCell(function (cell) {
	      var collection = view.conditions.get(cell.row, cell.column);
	      if (collection) for (var i = 0; i < collection.length; i++) {
	        setSpanCss(view, cell.row, cell.column, collection[i][2], false);
	      }

	      _changeCondition("update", cell.row, cell.column, collection || null, data, view);
	    });
	  });
	  view.refresh();
	}

	function _undoCondition(view, row, column, value) {
	  if (view.conditions.get(row, column)) view.conditions.remove(row, column);
	  if (value) view.conditions.update(row, column, value);
	}

	function _serialize$1(view, obj) {
	  obj.conditions = view.conditions.serialize();
	}

	function _parse$1(view, obj) {
	  view.conditions.parse(obj.conditions);
	}

	function getConditionCss(view, row, column, rendered) {
	  var css = "";

	  if (!view.conditions._empty) {
	    var collection = view.conditions.get(row, column);

	    if (collection) {
	      var span = view.$$("cells").getSpan(row, column);
	      var value = view.getCellValue(row, column, false);
	      if (!value && value !== 0) value = "";
	      var type = getType(view, row, column);
	      if (!type || type == "string") type = "text";

	      var _loop = function (i) {
	        var currentValue = value;
	        var rule = collection[i][0];
	        var handlers = view.conditions.handlers;
	        var handler = void 0;
	        var checkOrder = ["text", type, "number", "date"];
	        checkOrder = checkOrder.filter(function (v, i) {
	          return checkOrder.indexOf(v) == i;
	        });

	        for (var k = 0; k < checkOrder.length; k++) {
	          var checkType = checkOrder[k];
	          handler = find(handlers[checkType], function (obj) {
	            return obj.id == rule;
	          });

	          if (handler) {
	            handler = handler.handler;
	            if (checkType == "text" && rule != "equal" && rule != "notEqual") currentValue = rendered;
	            break;
	          }
	        }

	        var compare = collection[i][1];
	        if (webix.isArray(compare)) compare = {
	          start: getCellValue(view, compare[0]),
	          end: getCellValue(view, compare[1])
	        };else compare = getCellValue(view, compare);

	        if (!css && handler && handler(currentValue, compare)) {
	          css = collection[i][2];
	          if (!span) return "break";
	          setSpanCss(view, row, column, collection[i][2], true);
	        } else setSpanCss(view, row, column, collection[i][2], false);
	      };

	      for (var i = collection.length - 1; i >= 0; i--) {
	        var _ret = _loop(i);

	        if (_ret === "break") break;
	      }
	    }
	  }

	  return css;
	}

	function addEmptyCollection(pull, row, column, state) {
	  state._empty = false;
	  if (!pull[row]) pull[row] = {};
	  if (!pull[row][column]) pull[row][column] = [];
	  return pull[row][column];
	}

	function parse$1(data) {
	  //backward compatibility
	  var oldConditions = {
	    ">": "greater",
	    "<": "less",
	    "=": "equal",
	    "!=": "notEqual",
	    "<>": "between"
	  };
	  this._empty = true;
	  if (!data) return;
	  var i = data.length;

	  while (i--) {
	    var c = data[i];
	    var collection = addEmptyCollection(this._pull, c[0], c[1], this);
	    c[2] = oldConditions[c[2]] || c[2];
	    collection.push([c[2], c[3], c[4]]);
	  }
	}

	function clear() {
	  this._pull = {};
	}

	function update(view, row, column, newData) {
	  var collection = this.get(row, column);
	  if (!collection) addEmptyCollection(this._pull, row, column, this);
	  newData.map(function (item) {
	    return _normalizeValue(view, item);
	  });
	  this._pull[row][column] = newData;
	}

	function get(rowId, columnId) {
	  if (!rowId) return this._pull;
	  if (!columnId) return this._pull[rowId];
	  return this._pull[rowId] ? this._pull[rowId][columnId] : null;
	}

	function add(view, rowId, columnId, condition, value, style) {
	  var collection = addEmptyCollection(this._pull, rowId, columnId, this);
	  collection.push(_normalizeValue(view, [condition, value, style]));
	}

	function remove(rowId, columnId) {
	  var collection = this.get(rowId, columnId);
	  if (collection) delete this._pull[rowId][columnId];
	}

	function serialize$3() {
	  var column,
	      condition,
	      i,
	      row,
	      data = [];

	  for (row in this._pull) {
	    for (column in this._pull[row]) {
	      for (i = 0; i < this._pull[row][column].length; i++) {
	        condition = this._pull[row][column][i];
	        data.push([row, column, condition[0], condition[1], condition[2]]);
	      }
	    }
	  }

	  return data;
	}

	function updatePosition$2(view, name, inc, data, start) {
	  var conditions$$1 = data.conditions,
	      i = conditions$$1.length;

	  if (inc) {
	    while (i--) {
	      var _conditions$i = _slicedToArray(conditions$$1[i], 2),
	          row = _conditions$i[0],
	          column = _conditions$i[1];

	      if (name == "row" && row >= start.row || name == "column" && column >= start.column) {
	        if (name == "row") {
	          if (row < start.row - inc) //delete lock mark if row was deleted
	            conditions$$1.splice(i, 1);else //update mark position if upper row was deleted
	            conditions$$1[i][0] = row * 1 + inc;
	        } else if (name == "column") {
	          if (column < start.column - inc) {
	            conditions$$1.splice(i, 1);
	          } else conditions$$1[i][1] = column * 1 + inc;
	        }
	      }
	    }
	  }
	}

	function clearConditionalFormats(view, range$$1) {
	  group.set(function () {
	    eachRange(range$$1, view, function (view, cell) {
	      var condition = view.conditions.get(cell.row, cell.column);
	      if (condition) _changeCondition("remove", cell.row, cell.column, condition, null, view);
	    });
	    view.refresh();
	  });
	}
	function pasteCondition(view, extra, row, col, cutted) {
	  var condition = extra.condition;
	  var collection = view.conditions.get(row, col);

	  _changeCondition("update", row, col, collection || null, condition, view);

	  if (cutted === 1) _changeCondition("remove", extra.row, extra.col, condition, null, view);
	}
	function _changeCondition(name, row, column, oldCondition, newCondition, view) {
	  if (view.callEvent("onBeforeConditionSet", [row, column, oldCondition, newCondition])) {
	    view.conditions[name].apply(view.conditions, [row, column, newCondition]);
	    view.callEvent("onAfterConditionSet", [row, column, oldCondition, newCondition]);
	  }
	}

	function _normalizeValue(view, condition) {
	  var val = condition[1];
	  if (val[0] == "=") condition[1] = view._mData.getStore().parse(val).source; //fixes formula

	  return condition;
	}

	var m2 = /*#__PURE__*/Object.freeze({
		init: init$8,
		getConditionCss: getConditionCss,
		clearConditionalFormats: clearConditionalFormats,
		pasteCondition: pasteCondition,
		_changeCondition: _changeCondition
	});

	function init$9(view) {
	  //parsing initial data
	  view.attachEvent("onDataParse", function (data) {
	    return _parse$2(view, data);
	  });
	  view.attachEvent("onDataSerialize", function (data, config) {
	    return _serialize$2(view, data, config);
	  }); // undo

	  view.attachEvent("onUndo", function (type, row, column, value) {
	    if (type == "value") _undoValue(view, row, column, value);
	  });
	}

	function _serialize$2(view, obj, config) {
	  var math = !config || config.math !== false;
	  var grid = view.$$("cells");
	  var state = grid.getState();
	  var columns = state.ids.concat(state.hidden); // remove "rowId" column

	  columns.splice(columns.indexOf("rowId"), 1);
	  obj.data = getSheetData(view, math);
	  webix.extend(obj.table, {
	    frozenColumns: view._frozenColumns || 0,
	    frozenRows: view._frozenRows || 0
	  });
	}

	function _parse$2(view, obj) {
	  var tconfig = obj.table || {
	    frozenColumns: 0,
	    frozenRows: 0
	  };
	  view._frozenColumns = view._frozenRows = 0;

	  if (tconfig) {
	    if (!webix.isUndefined(tconfig.frozenColumns)) view.freezeColumns(tconfig.frozenColumns);
	    if (!webix.isUndefined(tconfig.frozenRows)) view.freezeRows(tconfig.frozenRows);
	  }

	  if (obj.sizes) view.$$("cells").define("fixedRowHeight", false);
	}

	function _undoValue(view, row, column, value) {
	  view.setCellValue(row, column, value);
	}

	function getSheetData(view, math, page) {
	  page = page ? view._mData.getPage(page) : view._mPage;
	  return page.serialize(math).map(function (arr) {
	    var value = arr[2].value;
	    if (value === null) value = "";
	    return [++arr[0], ++arr[1], value, arr[2].style || "", arr[2].type];
	  }).filter(function (arr) {
	    return arr[2] || arr[2] === 0 || arr[3];
	  });
	}

	var m17 = /*#__PURE__*/Object.freeze({
		init: init$9,
		getSheetData: getSheetData
	});

	var options = ["rename-sheet", "remove-sheet", "copy-sheet", "hide-sheet"];
	var actionMap = {
	  "remove-sheet": function (view) {
	    return _remove(view);
	  },
	  "rename-sheet": function (view) {
	    return edit(view);
	  },
	  "new-sheet": function (view) {
	    return add$1(view);
	  },
	  "copy-sheet": function (view) {
	    return copy(view);
	  },
	  "hide-sheet": function (view) {
	    return setState(view, view._activeSheet, "hidden");
	  }
	};
	function init$a(view) {
	  view.attachEvent("onComponentInit", function () {
	    return ready$1(view);
	  });
	}
	var numbers = [0.5, 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 3, 4];
	function defaultBottom(view) {
	  var locale = webix.i18n.spreadsheet.tooltips;
	  var readonly = view.config.readonly;
	  var tabWidth = view.config.sheetTabWidth;
	  var minTabWidth = tabWidth == "auto" ? view.defaults.sheetTabWidth : tabWidth;
	  var toolbar = {
	    view: "toolbar",
	    id: "bottom-toolbar",
	    css: "webix_ssheet_bottom_toolbar webix_layout_toolbar",
	    paddingY: 0,
	    height: 34,
	    elements: [{
	      hidden: readonly,
	      padding: {
	        top: 2,
	        bottom: 2,
	        left: 4
	      },
	      cols: [{
	        view: "icon",
	        icon: "wxi-plus",
	        width: 30,
	        id: "add-sheet",
	        click: function () {
	          return add$1(view);
	        },
	        tooltip: webix.i18n.spreadsheet.tooltips["add-sheet"]
	      }, {
	        view: "icon",
	        icon: "wxi-dots",
	        width: 30,
	        id: "show-sheet",
	        popup: getSheetsPopup(view),
	        tooltip: webix.i18n.spreadsheet.tooltips["show-sheet"]
	      }]
	    }, {
	      id: "sheets",
	      view: "sheets",
	      maxWidth: 5 * minTabWidth,
	      minWidth: minTabWidth,
	      editable: !readonly,
	      editaction: "dblclick",
	      editor: "text",
	      editValue: "value",
	      type: {
	        width: tabWidth,
	        height: 32,
	        template: function (obj) {
	          return "<div>" + obj.value + "</div>" + (!readonly ? "<div class='webix_input_icon wxi-menu-down webix_ssheet_sheet_arrow'></div>" : "");
	        },
	        //remove skin selection css on dnd
	        css: "ssheet_order_sheets"
	      },
	      onClick: {
	        webix_ssheet_sheet_arrow: function (e, id) {
	          initSheetMenu(view, e, id);
	        }
	      },
	      on: {
	        onItemClick: function (id) {
	          if (id != view._activeSheet) view.showSheet(id);
	        }
	      }
	    }, {
	      view: "button",
	      type: "htmlbutton",
	      width: 34,
	      id: "prev-sheet",
	      disabled: true,
	      hidden: true,
	      label: "<span class='webix_icon wxi-menu-left'></span>",
	      batch: "pager",
	      click: function () {
	        scrollSheets(view, -1);
	      }
	    }, {
	      view: "button",
	      type: "htmlbutton",
	      width: 34,
	      id: "next-sheet",
	      hidden: true,
	      label: "<span class='webix_icon wxi-menu-right'></span>",
	      batch: "pager",
	      click: function () {
	        scrollSheets(view, 1);
	      }
	    }, {
	      gravity: 0.000001
	    }, {
	      view: "ssheet-zoom",
	      numbers: numbers,
	      value: 1,
	      width: 108,
	      tooltip: locale["scale"],
	      id: "zoom",
	      on: {
	        onChange: function (v, oldV, config) {
	          if (config == "user") view.zoom(v);
	        }
	      }
	    }]
	  };
	  view.callEvent("onViewInit", ["bottom-toolbar", toolbar]);
	  return toolbar;
	}

	function scrollSheets(view, direction) {
	  var sheets = view.$$("sheets");
	  var step = view.config.sheetTabWidth;
	  if (step == "auto") step = view.defaults.sheetTabWidth;
	  sheets.scrollTo(sheets.getScrollState().x + direction * step, 0);
	}

	function menuInit(view) {
	  var data = [];

	  for (var i = 0; i < options.length; i++) {
	    data.push({
	      id: options[i],
	      value: webix.i18n.spreadsheet.menus[options[i]] || options[i]
	    });
	  }

	  var menu = {
	    view: "ssheet-suggest",
	    data: data
	  };
	  view.callEvent("onViewInit", ["sheet-menu", menu]);
	  return menu;
	}

	function reset$3(view, obj) {
	  var tabs = view.$$("sheets");

	  if (tabs) {
	    tabs.clearAll();
	    var set = [];
	    obj.sheets.forEach(function (sheet) {
	      set.push({
	        id: sheet.name,
	        value: sheet.name
	      });
	    });
	    tabs.parse(set);

	    _filterTabs(view);
	  }
	}

	function ready$1(view) {
	  prepare(view);
	  view.attachEvent("onAfterSheetShow", function (name) {
	    return selectSheet(view, name);
	  });
	  view.attachEvent("onCommand", function (command) {
	    if (actionMap[command.id]) actionMap[command.id](this);
	  });

	  if (view.$$("sheets")) {
	    view.$$("sheets").data.attachEvent("onStoreUpdated", function () {
	      changePagerVisability(view);
	      changePagerStatus(view);
	    });
	    view.$$("sheets").attachEvent("onAfterRender", webix.once(function () {
	      webix.delay(function () {
	        return changePagerVisability(view);
	      });
	    }));
	    view.$$("sheets").attachEvent("onAfterScroll", function () {
	      return changePagerStatus(view);
	    });
	    view.$$("sheets").attachEvent("onAfterDrop", function (context) {
	      return dataOrder(view, context.start, context.index);
	    });
	    view.$$("sheets").attachEvent("onAfterEditStop", function (state) {
	      return rename(view, state.old, state.value);
	    });
	  }
	}

	function getSheetsPopup(view) {
	  return {
	    view: "popup",
	    css: "webix_ssheet_suggest",
	    width: 125,
	    body: {
	      view: "list",
	      select: true,
	      css: "webix_ssheet_show_list",
	      template: "<span class='webix_icon wxi-#icon#'></span>#id#",
	      on: {
	        onAfterSelect: function (id) {
	          setState(view, id, "visible");
	          view.showSheet(id);
	          this.getParentView().hide();
	        }
	      },
	      maxHeight: 200,
	      autoheight: true
	    },
	    on: {
	      onShow: function () {
	        this.getBody().showItem(view.getActiveSheet());
	      },
	      onBeforeShow: function () {
	        var data = view._sheets.filter(function (sheet) {
	          return sheet.state != "veryHidden";
	        }).map(function (sheet) {
	          return {
	            id: sheet.name,
	            icon: sheet.state == "hidden" ? "eye-slash" : "eye"
	          };
	        });

	        var list = this.getBody();
	        list.clearAll();
	        list.parse(data);
	        list.select(view.getActiveSheet());
	      }
	    }
	  };
	}

	function initSheetMenu(view, e, id) {
	  if (!view.$sheetMenu) {
	    view.$sheetMenu = webix.ui(menuInit(view));

	    view._destroy_with_me.push(view.$sheetMenu);

	    view.$sheetMenu.attachEvent("onItemClick", function (id) {
	      return callAction(view, id);
	    });
	  }

	  var oneSheet = view.$$("sheets").count() == 1;
	  if (view.$sheetMenu.getItem("remove-sheet")) view.$sheetMenu[oneSheet ? "disableItem" : "enableItem"]("remove-sheet");
	  if (view.$sheetMenu.getItem("hide-sheet")) view.$sheetMenu[oneSheet ? "disableItem" : "enableItem"]("hide-sheet");
	  if (view.callEvent("onBeforeSheetMenu", [id])) view.$sheetMenu.show(e);
	}

	function changePagerStatus(view) {
	  var sheets = view.$$("sheets");
	  var scrollPos = sheets.getScrollState().x;
	  if (scrollPos == 0) view.$$("prev-sheet").disable();else {
	    view.$$("prev-sheet").enable();
	    if (sheets.$view.scrollWidth - scrollPos == sheets.$width) return view.$$("next-sheet").disable();
	  }
	  view.$$("next-sheet").enable();
	}

	function changePagerVisability(view) {
	  var sheets = view.$$("sheets");
	  view.$$("bottom-toolbar").showBatch("pager", sheets.$width != sheets.$view.scrollWidth);
	}

	function dataOrder(view, name, num) {
	  for (var id in view._sheets) {
	    if (view._sheets[id].name == name) {
	      var item = view._sheets.splice(id, 1);

	      view._sheets.splice(num, 0, item[0]);

	      break;
	    }
	  }
	}

	function setState(view, sheet, state) {
	  var tab = getSheet(view, sheet);
	  if (state == tab.state || state == "visible" && !tab.state) return;

	  if (state != "visible") {
	    var visibleSheets = getVisible(view); //don't hide last visible tab

	    if (visibleSheets.length == 1 && visibleSheets[0] === tab) return; //select the previous sheet in case we hide the selected sheet

	    if (sheet == view._activeSheet) showPrevious(view, sheet);
	  }

	  tab.state = state;

	  _filterTabs(view);

	  view.callEvent("onSheetStateChange", [sheet, state]);
	}

	function _filterTabs(view) {
	  var tabs = view.$$("sheets");
	  if (tabs) tabs.filter(function (obj) {
	    var state = getSheet(view, obj.id).state;
	    return state != "hidden" && state != "veryHidden";
	  });
	}

	function add$1(view, content, name, show) {
	  var index, newIndex;
	  index = findIndex(view._sheets, function (x) {
	    return x.name == view._activeSheet;
	  });
	  newIndex = index > -1 ? index + 1 : view._sheets.length;
	  if (!name || find(view._sheets, function (sheet) {
	    return sheet.name == name;
	  })) name = getNewTitle(view);
	  content = content || {
	    data: []
	  };

	  view._sheets.splice(newIndex, 0, {
	    name: name,
	    content: content
	  });

	  if (view.$$("sheets")) view.$$("sheets").add({
	    id: name,
	    value: name
	  }, newIndex);

	  view._mData.addPage(name);

	  parseToStore(view, name, content, view.config.prepareData);
	  if (show !== false) view.showSheet(name);
	  view.callEvent("onSheetAdd", [name]);
	  return name;
	}

	function getNewTitle(view) {
	  var index = view._sheets.length + 1;

	  while (getSheet(view, webix.i18n.spreadsheet.labels.sheet + index)) {
	    index++;
	  }

	  var name = webix.i18n.spreadsheet.labels.sheet + index;
	  return name;
	}

	function selectSheet(view, name) {
	  if (view.$$("sheets")) {
	    view.$$("sheets").select(name);
	    view.$$("sheets").showItem(name);
	  }
	}

	function edit(view, name) {
	  if (!name) name = view._activeSheet;
	  view.$$("sheets").edit(name);
	}

	function _remove(view) {
	  view.confirm({
	    text: webix.i18n.spreadsheet.labels["sheet-remove-confirm"]
	  }).then(function () {
	    remove$1(view, view._activeSheet);
	  });
	}

	function getVisible(view) {
	  return view._sheets.filter(function (s) {
	    return s.state != "hidden" && s.state != "veryHidden";
	  });
	}

	function showPrevious(view, name) {
	  var visibleSheets = getVisible(view);
	  var index = findIndex(visibleSheets, function (x) {
	    return x.name == name;
	  });
	  var prevIndex = index - 1;
	  if (!visibleSheets[prevIndex]) prevIndex = 0;
	  visibleSheets.splice(index, 1);
	  view.showSheet(visibleSheets[prevIndex].name);
	}

	function remove$1(view, name) {
	  if (view._sheets.length > 1) {
	    var visibleSheets = getVisible(view); //don't remove last visible tab

	    if (visibleSheets.length == 1 && visibleSheets[0] === getSheet(view, name)) return; //select the previous sheet in case we remove the selected sheet

	    if (view._activeSheet == name) showPrevious(view, name);
	    var index = findIndex(view._sheets, function (x) {
	      return x.name == name;
	    });

	    view._sheets.splice(index, 1);

	    view._mData.removePage(name);

	    if (view.$$("sheets")) {
	      view.$$("sheets").remove(name);
	      view.$$("sheets").refresh();
	    }

	    view.callEvent("onSheetRemove", [name]);
	  }
	}
	function rename(view, name, newName) {
	  if (name == newName) return; //correct sheet name

	  var i = 1;

	  while (!newName || getSheet(view, newName)) {
	    newName = webix.i18n.spreadsheet.labels.sheet + i;
	    i++;
	  }

	  newName = newName.replace(/[*?:[\]\\/]/g, "").substring(0, 31);
	  var sheet = getSheet(view, name);
	  var sheets = view.$$("sheets");
	  sheet.name = newName;
	  if (view._activeSheet == name) view._activeSheet = newName;

	  if (sheets) {
	    var item = sheets.getItem(name);
	    item.value = newName;
	    sheets.data.changeId(name, newName);
	    sheets.refresh(newName);
	  }

	  view._mData.renamePage(name, newName);

	  view.callEvent("onSheetRename", [name, newName]);
	}
	function serialize$4(view, obj, config) {
	  var active = getSheet(view, view._activeSheet);
	  active.content = obj;
	  active.state = active.state || "visible";
	  var sheets = webix.copy(view._sheets);
	  var math = !config || config.math !== false;
	  var compactStyles$$1 = config && config.compactStyles;
	  sheets.forEach(function (sheet) {
	    if (sheet.name != view._activeSheet) {
	      sheet.content.data = getSheetData(view, math, sheet.name);
	      sheet.state = sheet.state || "visible";
	      if (compactStyles$$1) sheet.content.styles = removeUnusedStyles(sheet.content);
	      sheet.content.ranges = view.ranges.serialize(sheet.name);
	    }
	  });
	  return sheets;
	}

	function parseToStore(view, name, obj, prepareData) {
	  view.ranges.parse(obj.ranges, name);
	  webix.extend(obj, {
	    styles: [],
	    formats: [],
	    editors: []
	  });

	  var page = view._mData.getPage(name);

	  var data = obj.data.map(function (arr) {
	    var invalidValue = webix.isUndefined(arr[2]) || arr[2] === null;

	    if (prepareData) {
	      if (invalidValue) arr[2] = "";else {
	        var linkRegex = /^=link\(/i;

	        if (typeof arr[2] == "string" && linkRegex.test(arr[2])) {
	          // LINK is deprecated
	          arr[2] = arr[2].replace(linkRegex, "=HYPERLINK(");
	        }
	      }
	      var cell = loadCell(view, obj, arr); //cell value and type can be changed via types module

	      arr[2] = cell.value;
	      arr[3] = arr[3] || "";
	      arr[4] = cell.type;
	      prepareCell(arr, obj);
	    } else if (invalidValue) throw "unsupported value in ".concat(escapeSheet(name), "!").concat(encode[arr[0]]).concat(arr[1]);

	    return [arr[0] - 1, arr[1] - 1, {
	      value: arr[2],
	      type: arr[4],
	      style: arr[3],
	      $format: checkFormat({
	        fmt: getFormatFromData(obj, arr)
	      }, "string") ? 1 : 0
	    }];
	  });
	  page.parse(data, true);
	}

	function prepareCell(cell, data, update) {
	  var isDate = cell[4] == "date";

	  if (isDate || update) {
	    var isString = typeof cell[2] == "string";
	    var link = update && isString && /^=hyperlink\(/i.test(cell[2]);
	    var styleProperties = cell[3] ? find(data.styles, function (style) {
	      return style[0] == cell[3];
	    }) : null;
	    var styleObj = styleProperties ? styleFromText(styleProperties[1]) : {};

	    if (isDate && !styleProperties || !styleObj.format || link) {
	      var props = {};

	      if (link) {
	        cell[3] = "wss_link" + (styleProperties ? "_" + cell[3] : "");
	        props = {
	          color: "#0000ff",
	          underline: "underline"
	        };
	      } else if (isString && /^=time\(/i.test(cell[2])) {
	        cell[3] = "wss_load_time" + (styleProperties ? "_" + cell[3] : "");
	        props.format = cell[3] + "_fmt";
	        data.formats.push([props.format, webix.i18n.spreadsheet.formats.timeFormat]);
	      } else {
	        cell[3] = "wss_load_date" + (styleProperties ? "_" + cell[3] : "");
	        props.format = "date";
	      }

	      if (!find(data.styles, function (style) {
	        return style[0] == cell[3];
	      })) data.styles.push([cell[3], styleToText({
	        props: webix.extend(styleObj, props, true)
	      })]);
	    }
	  }
	}
	function load$2(view, obj, excel) {
	  view._loading_data = true;
	  obj = webix.isArray(obj) ? {
	    sheets: obj
	  } : obj;
	  var prepareData = view.config.prepareData || excel;

	  if (!obj.sheets && view._activeSheet) {
	    //loading into active sheet
	    var name = view._activeSheet;
	    getSheet(view, name).content = obj;
	    parseToStore(view, name, obj, prepareData);
	    refresh(view, obj);
	  } else {
	    //creating new set of sheets
	    prepare(view, obj, prepareData);
	  }

	  view._loading_data = false;
	}
	function prepare(view, obj, prepareData) {
	  if (!obj) obj = {
	    data: []
	  };

	  if (!obj.sheets) {
	    obj = newSheet(obj);
	  }

	  view._activeSheet = "";
	  view._sheets = obj.sheets;
	  view._mData = new muon_4({
	    strict: view.config.strict
	  }); // first add all pages then parse data in them

	  obj.sheets.forEach(function (sheet) {
	    view._mData.addPage(sheet.name);
	  });
	  obj.sheets.forEach(function (sheet) {
	    var content = sheet.content;
	    var sheetName = sheet.name;
	    parseToStore(view, sheetName, content, prepareData);
	  });
	  reset$3(view, obj);
	  show(view, getVisible(view)[0].name);
	}
	function newSheet(obj) {
	  return {
	    sheets: [{
	      name: webix.i18n.spreadsheet.labels.sheet + 1,
	      content: obj
	    }]
	  };
	}
	function show(view, name) {
	  if (name == view._activeSheet) return;

	  if (view.callEvent("onBeforeSheetShow", [name])) {
	    if (view._activeSheet) getSheet(view, view._activeSheet).content = view.serialize();
	    view._activeSheet = name;
	    var obj = getSheet(view, name).content;
	    view._mPage = view._mData.getPage(name);
	    refresh(view, obj);
	    view.callEvent("onAfterSheetShow", [name]);
	  }
	}
	function getSheet(view, name) {
	  return find(view._sheets, function (x) {
	    return x.name == name;
	  });
	}
	function isVisible(view, sheet) {
	  sheet = getSheet(view, sheet);
	  return sheet.state != "hidden" && sheet.state != "veryHidden";
	}

	function refresh(view, obj) {
	  var data = getSheetData(view);

	  var _arr$getDimension = getDimension(data, obj.spans, view.config.rowCount, view.config.columnCount),
	      _arr$getDimension2 = _slicedToArray(_arr$getDimension, 2),
	      rows = _arr$getDimension2[0],
	      cols = _arr$getDimension2[1];

	  if (rows != view.config.rowCount || cols != view.config.columnCount) {
	    view.config.rowCount = rows;
	    view.config.columnCount = cols;

	    view._resetTable();
	  }

	  updateMaxColumn(cols);
	  view.callEvent("onReset", []);
	  view._loading_data = true;
	  view.callEvent("onDataParse", [obj]);
	  view._loading_data = false;

	  view._table.refresh();

	  if (view.config.bottombar) view.$$("sheets").refresh();
	}

	function copy(view) {
	  add$1(view, view.serialize());
	}

	function callAction(view, id) {
	  if (!view.$sheetMenu.data.getMark(id, "webix_disabled")) {
	    if (actionMap[id]) actionMap[id](view);else view.callEvent("onCommand", [{
	      id: id
	    }]);
	  }
	}

	function error(view, silent) {
	  if (!silent) view.alert({
	    type: "alert-error",
	    text: webix.i18n.spreadsheet.labels["error-link"]
	  });
	  return false;
	}

	function showCells(view, ref, silent) {
	  try {
	    var r1, r2, c1, c2, sheet;
	    var cellRef = ref.split("!");

	    switch (cellRef.length) {
	      case 1:
	        var _cellRef = cellRef;

	        var _cellRef2 = _slicedToArray(_cellRef, 1);

	        cellRef = _cellRef2[0];
	        break;

	      case 2:
	        var _cellRef3 = cellRef;

	        var _cellRef4 = _slicedToArray(_cellRef3, 2);

	        sheet = _cellRef4[0];
	        cellRef = _cellRef4[1];
	        if (sheet.indexOf(" ") != -1 && (sheet[0] != "'" || sheet[sheet.length - 1] != "'")) return error(view, silent);
	        break;

	      default:
	        return error(view, silent);
	    }

	    if (isCell(cellRef)) {
	      var _adress = adress(cellRef);

	      var _adress2 = _slicedToArray(_adress, 2);

	      r1 = _adress2[0];
	      c1 = _adress2[1];
	    } else {
	      var rangePos = range(ref, view);

	      if (rangePos) {
	        var _rangePos = _slicedToArray(rangePos, 5);

	        r1 = _rangePos[0];
	        c1 = _rangePos[1];
	        r2 = _rangePos[2];
	        c2 = _rangePos[3];
	        sheet = _rangePos[4];
	      } else return error(view, silent);
	    }

	    if (sheet) {
	      sheet = sheet.replaceAll("'", "");
	      if (!getSheet(view, sheet)) return error(view, silent);
	      if (sheet != view.getActiveSheet()) view.showSheet(sheet);
	    }

	    var grid = view.$$("cells");
	    grid.showCell(r1, c1);
	    grid.addSelectArea({
	      row: r1,
	      column: c1
	    }, {
	      row: r2 || r1,
	      column: c2 || c1
	    });
	    return true;
	  } catch (err) {
	    return error(view, silent);
	  }
	}

	function init$b(view, extra) {
	  view.attachEvent("onComponentInit", function () {
	    return ready$2(view);
	  });
	  var datatable = {
	    view: "datatable",
	    id: "cells",
	    css: "webix_ssheet_table webix_data_border wss_" + view.$index,
	    headerRowHeight: webix.skin.$name == "contrast" || webix.skin.$name == "flat" ? 24 : 20,
	    spans: true,
	    leftSplit: 1,
	    areaselect: true,
	    minColumnWidth: 40,
	    editable: true,
	    editaction: extra.liveEditor ? "custom" : "dblclick",
	    minRowHeight: 1,
	    navigation: true,
	    onClick: {
	      "webix_ssheet_ref": function (event) {
	        var ref = event.target.getAttribute("data-ref").replaceAll("&#x27;", "'");
	        if (showCells(view, ref)) return false;
	      }
	    }
	  };
	  if (extra) datatable = webix.extend(datatable, extra, true);
	  return datatable;
	}

	function ready$2(view) {
	  var grid = view._table;
	  var showCommentHandler = webix.event(document.body, "pointermove", function () {
	    var thread;
	    return function (e) {
	      if (e.pointerType !== "mouse") return;
	      clearTimeout(thread);
	      thread = webix.delay(function (e) {
	        if (view.comments._activeComment.editStatus) return;
	        var cell = grid.locate(e);
	        var visible = view.comments.commentsView && view.comments.commentsView.isVisible();

	        if (cell && view.comments.get(cell.row, cell.column)) {
	          var activeCell = view.comments._activeComment.cell;
	          if (activeCell && (activeCell.row != cell.row || activeCell.column != cell.column) || !visible) view.callEvent("onCommand", [{
	            id: "add-comment",
	            cell: cell,
	            viewonly: true
	          }]);
	        } else if (visible && !view.comments.commentsView.$view.contains(e.target)) view.callEvent("onCommentHide", []);
	      }, true, [e], 250);
	    };
	  }()); //in grid math

	  if (view.config.math) {
	    grid.config.editMath = true;
	  } //saving value after edit


	  grid.attachEvent("onBeforeEditStop", function (st, ed) {
	    grid.$anyKey = false;
	    var old = view.getCellValue(ed.row, ed.column); //ignore empty cells

	    if (old === "" && st.value === "") return;

	    if (st.value != old) {
	      view.setCellValue(ed.row, ed.column, st.value);
	      grid.refresh();
	    }

	    st.value = st.old;
	  });
	  grid.attachEvent("onEnter", function (ev) {
	    if (grid.getEditor()) {
	      webix.delay(function () {
	        grid.moveSelection("down");
	      });
	    }

	    webix.html.preventEvent(ev);
	  }); //prevent editing of locked cells

	  view.attachEvent("onBeforeEditStart", function (row, column) {
	    return !view.isCellLocked(row, column);
	  });
	  grid.attachEvent("onAfterEditStart", function (_ref) {
	    var row = _ref.row,
	        column = _ref.column;
	    var v = view.getCellValue(row, column);

	    if (grid.$anyKey) {
	      grid.$anyKey = false;
	      v = "";
	    }

	    grid.getEditor().setValue(v);
	  });
	  grid.attachEvent("onBeforeEditStart", function (editor) {
	    return view.callEvent("onBeforeEditStart", [editor.row, editor.column]);
	  }); //column drag event checking

	  var dragStartColumn;
	  var dragEndColumn; //column and row selection

	  grid.attachEvent("onBeforeSelect", function (id) {
	    return id.column != "rowId";
	  });
	  grid.attachEvent("onBeforeBlockSelect", function (start, end, finalStep) {
	    highlightColRow(finalStep ? start : webix.copy(start), finalStep ? end : webix.copy(end), view);
	  });

	  function highlightHeaders() {
	    var ids = grid.getSelectedId(true);

	    if (ids.length) {
	      var start = ids[0];
	      var end = ids[ids.length - 1] ? ids[ids.length - 1] : ids[0];
	      highlightColRow(start, end, view);
	    } else {
	      var data = {
	        row: 0,
	        column: 0
	      };
	      highlightColRow(data, data, view);
	    }
	  }

	  grid.attachEvent("onSelectChange", function () {
	    return highlightHeaders();
	  });
	  grid.attachEvent("onAfterColumnShow", function () {
	    webix.delay(function () {
	      return highlightHeaders();
	    });
	  });
	  grid.attachEvent("onColumnResize", function () {
	    webix.delay(function () {
	      return highlightHeaders();
	    });
	  });
	  webix.event(grid.$view.firstChild, "mousedown", function (e) {
	    var resizeColumn = grid.config.resizeColumn;
	    var col = grid.locate(e);

	    if (col && col.cind) {
	      if (resizeColumn) {
	        var dx = grid.getColumnConfig(col.column).width;
	        var pos = webix.html.posRelative(e);
	        if (pos.x < resizeColumn.size || dx - pos.x < resizeColumn.size + 1) return;
	      }

	      dragStartColumn = col.cind;
	    }
	  });
	  webix.event(grid.$view.firstChild, "mousemove", function (e) {
	    if (dragStartColumn) {
	      var col = grid.locate(e);

	      if (col) {
	        dragEndColumn = col.cind;
	        highlightColRow({
	          column: grid.columnId(dragStartColumn)
	        }, {
	          column: grid.columnId(dragEndColumn || 1)
	        }, view);
	      }
	    }
	  });
	  var selectColumnHandler = webix.event(document.body, "mouseup", function () {
	    if (dragStartColumn) {
	      if (dragEndColumn != null) {
	        selectColumn(grid.columnId(dragStartColumn), view, grid.columnId(dragEndColumn || 1));
	        dragEndColumn = null;
	      }

	      dragStartColumn = null;
	    }
	  });
	  grid.attachEvent("onItemDblClick", function (id) {
	    if (id.column === "rowId") adjustRow(id.row, view);
	  });
	  var lastHeaderClick = 0;
	  grid.attachEvent("onHeaderClick", function (id, e) {
	    if (id.column == "rowId") {
	      selectAll(view);
	      return;
	    }

	    var headerClick = new Date();
	    var dblClick = headerClick - lastHeaderClick <= 300;

	    if (dblClick) {
	      adjustColumn(id.column, view);
	    } else {
	      lastHeaderClick = headerClick;

	      if (e.shiftKey) {
	        selectColumns(id.column, view);
	      } else {
	        selectColumn(id.column, view);
	      }
	    }
	  }); //select rows by shift click

	  var lastClickedRow = null;
	  grid.attachEvent("onItemClick", function (cell, e) {
	    if (cell.column === "rowId") {
	      if (!e.shiftKey) selectRow(cell.row, view);else {
	        if (!lastClickedRow) selectRow(cell.row, view);else selectRow(lastClickedRow, view, cell.row);
	      }
	      lastClickedRow = cell.row;
	    }
	  }); //reset API

	  view.attachEvent("onReset", function () {
	    return reset$4(view);
	  });
	  view.attachEvent("onBeforeSheetShow", function () {
	    return grid.editStop();
	  });
	  grid.attachEvent("onBlur", function () {
	    //after focus moved out, check and if it is somewhere
	    //on the spreadsheet controls them move focus back to datatable
	    webix.delay(function () {
	      var target = document.activeElement;
	      if (target && target.tagName == "INPUT") return;
	      var focus = webix.UIManager.getFocus();
	      var need_focus = focus && focus != grid && focus.getTopParentView && focus.getTopParentView() === view;
	      if (need_focus) webix.UIManager.setFocus(grid);
	    }, this, [], 100);
	  });
	  grid.attachEvent("onMoveSelection", function (cell, mode, details) {
	    if (cell.column == "rowId" && mode == "left" && details.ctrl) cell.column = 1;
	  });
	  setDefaultCss(view);
	  view.attachEvent("onDestruct", function () {
	    webix.eventRemove(showCommentHandler);
	    webix.eventRemove(selectColumnHandler);
	  });
	}

	function cell_template(view, obj, common, _v, column, valueOnly) {
	  var formulasMode = view.$$("cells").config.showFormulas && !valueOnly;
	  var col = column.id;
	  var row = obj.id;
	  if (!view._mPage) return "";

	  var cell = view._mPage.getCell(row - 1, col - 1);

	  var value = cell ? cell.value : "";
	  var format = cell ? cell.format : "";
	  var math = view.getCellValue(row, col);
	  if (formulasMode) value = math;

	  if (math != value) {
	    var locale = webix.i18n.spreadsheet.table;
	    if (value == "#REF!") value = locale["math-ref-error"];else if (value == "#ERROR") value = locale["math-error"];
	  }

	  var css = "";
	  var text = typeof value == "string" && value.trim()[0] == "+" || !value && value !== 0 || isNaN(value);
	  var invalidDate = !formulasMode && checkFormat(format, "date") && isDateInvalid(value);
	  var extra = "";

	  if (!valueOnly) {
	    extra += view.comments.get(row, col) ? "<div class='ssheet_commented_sign'></div>" : "";
	    extra += view.getCellFilter(row, col) ? "<div class='ssheet_filter_sign'></div>" : "";
	  } //text can be formatted only in case of string number format


	  if (!invalidDate && (typeof value == "boolean" || !text || checkFormat(format, "string"))) {
	    if (format) {
	      var _cell = {
	        css: ""
	      };
	      var helper = getFormat$1(format);

	      if (helper) {
	        var newValue = helper(value, _cell);

	        if (newValue != webix.i18n.spreadsheet.table["format-error"]) {
	          if (_cell.css) css = "class=\"".concat(_cell.css, "\"");
	          value = newValue;
	        } else if (!text) value *= 1;
	      }
	    } else value *= 1;
	  } //print only cell values (td with position:relative ignores borders while printing)


	  if (view._print && !(value || value === 0)) return "";
	  if (webix.isUndefined(value) || value === null) value = "";
	  return "<div ".concat(css, ">").concat(value, "</div>").concat(view._print ? "" : extra);
	}
	function reset$4(view) {
	  var grid = view.$$("cells");
	  grid.clearAll();
	  var columns = view.config.columnCount;
	  var rows = view.config.rowCount;
	  var cols = [{
	    id: "rowId",
	    header: "",
	    width: 40,
	    css: "sheet_column_0",
	    template: function (el) {
	      return el.id;
	    }
	  }];

	  for (var i = 1; i <= columns; i++) {
	    cols.push({
	      id: i,
	      editor: "text",
	      header: {
	        text: encode[i]
	      },
	      template: function (obj, common, value, column) {
	        return cell_template(view, obj, common, value, column);
	      },
	      cssFormat: function (value, obj, row, column) {
	        var rendered = getRenderedValue(view, row, column);

	        var cell = view._mPage.getCell(row - 1, column - 1);

	        var css = cell ? cell.style || "" : "";
	        var conditional = getConditionCss(view, row, column, rendered);
	        if (conditional) css += (css ? " " : "") + conditional;
	        var borders = view._printBorders.$render;

	        if (borders) {
	          if (borders.cols[column]) css += (css ? " " : "") + "webix_ss_print_border_right";
	          if (borders.rows[row]) css += (css ? " " : "") + "webix_ss_print_border_bottom";
	        }

	        return css;
	      }
	    });
	    view.callEvent("onColumnInit", [cols[i]]);
	  }

	  grid.refreshColumns(cols);
	  var data = [];

	  for (var _i = 1; _i <= rows; _i++) {
	    data.push({
	      id: _i
	    });
	  }

	  grid.parse(data);
	}
	function getRenderedValue(view, row, col) {
	  var htmlFilter = /<[^>]*>/gi;
	  return cell_template(view, {
	    id: row
	  }, null, null, {
	    id: col
	  }, true).replace(htmlFilter, "");
	} // nowrap by default

	function setDefaultCss(view) {
	  webix.html.addStyle("#" + view._table.$view.id + ".webix_dtable .webix_cell { white-space:nowrap;}");
	}

	function init$c(view) {
	  var grid = view.$$("cells");
	  var key = webix.env.isMac ? "command" : "ctrl";
	  webix.UIManager.addHotKey(key + "-a", function () {
	    if (!grid.getEditor()) selectAll(view);
	  }, grid);
	  webix.UIManager.addHotKey(key + "-p", function (v, e) {
	    return dialog("print", view, e);
	  }, grid);

	  if (!view.config.readonly) {
	    webix.UIManager.addHotKey("any", function (view, ev) {
	      var code = ev.which || ev.keyCode;
	      var f2 = code == 113; //ignore shift key, f1, f3 - f12 (f2 - edit)

	      if (code == 16 || code >= 112 && code <= 123 && !f2) return;
	      var sel = view.getSelectedId(true);

	      if (sel.length) {
	        if (!(view.config.liveEditor && f2)) grid.$anyKey = true;
	        grid.edit(sel[0]);
	      }
	    }, grid);
	    webix.UIManager.addHotKey("enter", function (view) {
	      var sel = view.getSelectedId(true);

	      if (sel.length) {
	        if (!(view.config.liveEditor && !grid.callEvent("onBeforeLiveEditor", [sel[0]]))) grid.edit(sel[0]);
	      }
	    }, grid);
	    webix.UIManager.addHotKey("backspace", function () {
	      return del(view);
	    }, grid);
	    webix.UIManager.addHotKey("delete", function () {
	      return del(view);
	    }, grid);
	    var redo = webix.env.isMac ? "command-shift-z" : "ctrl-y";
	    webix.UIManager.addHotKey(redo, function () {
	      return view.redo();
	    }, grid);
	    webix.UIManager.addHotKey(key + "-z", function () {
	      return view.undo();
	    }, grid);
	    webix.UIManager.addHotKey(key + "-b", function () {
	      return styleHotKey(view, "font-weight");
	    }, grid);
	    webix.UIManager.addHotKey(key + "-i", function () {
	      return styleHotKey(view, "font-style");
	    }, grid);
	    webix.UIManager.addHotKey(key + "-u", function (v, e) {
	      return ctrlU(view, e);
	    }, grid);
	    var strike = webix.env.isMac ? "command-shift-x" : "ctrl-alt-s";
	    webix.UIManager.addHotKey(strike, function () {
	      return styleHotKey(view, "strike");
	    }, grid);
	    webix.UIManager.addHotKey(key + "-add", function (v, e) {
	      return zoom(view, "in", e);
	    }, grid);
	    webix.UIManager.addHotKey(key + "-subtract", function (v, e) {
	      return zoom(view, "out", e);
	    }, grid);
	    webix.UIManager.addHotKey(key + "-0", function (v, e) {
	      return zoom(view, 1, e);
	    }, grid);
	    webix.UIManager.addHotKey(key + "-`", function () {
	      return view.showFormulas("toggle");
	    }, grid);
	  }
	}

	function del(view) {
	  if (!view.$$("cells").getEditor()) group.set(function () {
	    view.eachSelectedCell(function (cell) {
	      return view.setCellValue(cell.row, cell.column, "");
	    });
	    view.refresh();
	  });
	}

	function zoom(view, value, e) {
	  view.zoom(value);
	  return webix.html.preventEvent(e);
	}

	function ctrlU(view, e) {
	  styleHotKey(view, "underline");
	  return webix.html.preventEvent(e);
	}

	function dialog(id, view, e) {
	  view.callEvent("onCommand", [{
	    id: id
	  }]);
	  return webix.html.preventEvent(e);
	}

	function styleHotKey(view, attr) {
	  var cell = view.getSelectedId();

	  if (cell) {
	    var style = view.getStyle(cell.row, cell.column);
	    var elementOn = styleFormats[attr] || attr;
	    var elementOff = "normal";
	    var state = style && style.props[attr] === elementOn ? elementOff : elementOn;
	    view.callEvent("onStyleSet", [attr, state]);
	  }
	}

	var methodsName = [];

	for (var name in muon_22) {
	  methodsName.push(name);
	}

	function init$d(view) {
	  view.attachEvent("onComponentInit", function () {
	    return ready$3(view);
	  });
	  return {
	    view: "toolbar",
	    css: "webix_ssheet_toolbar",
	    elements: [{
	      view: "text",
	      icon: "wxi-menu-down",
	      on: {
	        onItemClick: function () {
	          var suggest = webix.$$(this.config.suggest);
	          if (!suggest.isVisible()) suggest.show(this.getInputNode());
	        },
	        onChange: function (val, oldVal, config) {
	          if (config == "user" && val !== "") view.showCell(val);
	        }
	      },
	      suggest: {
	        view: "ssheet-suggest-labels",
	        css: "webix_ssheet_nav_suggest",
	        body: {
	          template: "<span class='webix_ssheet_left'>#name#</span><span class='webix_ssheet_right'>#value#</span>",
	          width: 250
	        },
	        on: {
	          onBeforeShow: function () {
	            var data = view.ranges.serialize(view.getActiveSheet()).map(function (r) {
	              return {
	                name: r[0],
	                value: r[1]
	              };
	            });
	            if (!data.length) return false;
	            var list = this.getList();
	            list.clearAll();
	            list.parse(data);
	          }
	        },
	        data: []
	      },
	      width: 150,
	      id: "navigation"
	    }, {
	      view: "ssheet-separator"
	    }, {
	      view: "label",
	      label: webix.i18n.spreadsheet.liveEditor["edit"],
	      width: 65
	    }, {
	      view: "live-editor",
	      disabled: true,
	      id: "liveEditor",
	      suggestData: methodsName
	    }]
	  };
	}

	function ready$3(view) {
	  var editor = view.$$("liveEditor");
	  var nav = view.$$("navigation");
	  var grid = view._table; //block native editor, and move focus to the custom input
	  //edit by key press

	  grid.attachEvent("onBeforeEditStart", function (cell) {
	    var mode = grid.$anyKey;
	    grid.$anyKey = false;
	    return startEdit(this, cell, mode);
	  }); //edit by enter key

	  grid.attachEvent("onBeforeLiveEditor", function (cell) {
	    return startEdit(this, cell, false);
	  }); //edit by dbl-click

	  grid.attachEvent("onItemDblClick", function (cell) {
	    if (view.getCellEditor(cell.row, cell.column)) this.edit(cell);else startEdit(this, cell, false);
	  });
	  grid.attachEvent("onAfterScroll", function () {
	    if (editor.$view.contains(document.activeElement)) editor.paintValue();
	  });
	  view.attachEvent("onCellChange", function (r, c, v, p) {
	    if (p == view.getActiveSheet()) {
	      var cell = editor.config.activeCell;
	      if (cell && cell.row == r && cell.column == c) editor.setValue(v);
	    }
	  });
	  view.attachEvent("onAfterSelect", function (data) {
	    if (!view.$handleSelection) fillEditor(data[0]);
	  });
	  view.attachEvent("onChange", function (mode) {
	    if (mode == "update" && editor.isEnabled()) {
	      var cell = editor.config.activeCell;

	      if (cell && editor.getValue() != view.getCellValue(cell.row, cell.column)) {
	        delete editor._update_range;
	        editor.showActiveSheet();
	        editor.updateCellValue();
	      }
	    }
	  });
	  view.attachEvent("onBeforeSheetShow", function (name) {
	    if (view._rangeDialog) return;
	    var cell = editor.config.activeCell;

	    if (cell) {
	      var cursor = editor.getInputNode().selectionStart;
	      var val = editor.getValue();

	      if (view.getCellValue(cell.row, cell.column) != val) {
	        if (!editor._activeMath) editor._activeMath = view.getActiveSheet();
	        webix.delay(function () {
	          if (name == editor._activeMath) {
	            view.$handleSelection = null;
	            var _cell = editor.config.activeCell;
	            grid.select(_cell.row, _cell.column);
	          }

	          editor.setValue(val); //update highlight

	          editor.refresh();
	          editor.getInputNode().setSelectionRange(cursor, cursor);
	          editor.paintValue();

	          view.$handleSelection = function (a, b, st, en) {
	            return pasteRange(st, en, a);
	          };
	        });
	      } else {
	        nav.setValue("");
	        clearEditor();
	      }
	    }
	  });
	  view.attachEvent("onReset", function () {
	    if (!view._rangeDialog) view.$handleSelection = null;
	  });
	  view.$$("cells").attachEvent("onFocus", function () {
	    //ignore table clipboard logic
	    if (editor._activeMath) {
	      webix.delay(function () {
	        return editor.focus();
	      });
	    }
	  });
	  view.attachEvent("onAfterLoad", function () {
	    return clearEditor();
	  });
	  view.attachEvent("onAction", function (name, options) {
	    var cell = editor.config.activeCell;
	    var isActiveCell = cell && cell.row == options.row && cell.column == options.column;
	    if (isActiveCell && (name == "lock" || name == "dropdown")) disableEditor(options.row, options.column);
	  });
	  view.attachEvent("onFormatChange", function (r, c) {
	    return updateEditor(r, c);
	  });
	  view.attachEvent("onCellChange", function (r, c, v, p) {
	    if (p == view.getActiveSheet()) updateEditor(r, c);
	  });

	  function updateEditor(row, column) {
	    var activeCell = editor.config.activeCell;
	    if (activeCell && activeCell.row == row && activeCell.column == column) fillEditor({
	      row: row,
	      column: column
	    });
	  }

	  function startEdit(table, cell, clear) {
	    //do not interfere with custom editors
	    if (!view.getCellEditor(cell.row, cell.column) && fillEditor(cell, clear)) {
	      editor.focus();

	      if (!clear) {
	        editor.paintValue();
	        var input = editor.getInputNode();
	        var symbols = input.value.length;
	        input.setSelectionRange(symbols, symbols);
	      }

	      return false;
	    }

	    return true;
	  }

	  function disableEditor(row, column) {
	    var disabled = view.getCellEditor(row, column) || view.isCellLocked(row, column);
	    if (disabled) editor.disable();else editor.enable();
	    return disabled;
	  }

	  function fillEditor(cell, clear) {
	    var disabled = disableEditor(cell.row, cell.column);
	    editor.config.activeCell = cell;
	    editor.setValue(clear ? "" : editor.getCellValue(cell.row, cell.column));
	    if (!view._rangeDialog) view.$handleSelection = disabled ? null : function (a, b, st, en) {
	      return pasteRange(st, en, a);
	    };
	    return !disabled;
	  }

	  function pasteRange(st, en, cell) {
	    var updateRange = editor._update_range;
	    var cursor = editor.getInputNode().selectionStart;
	    var sheet = "";

	    if (editor._activeMath) {
	      var activeSheet = view.getActiveSheet();
	      if (editor._activeMath != activeSheet) sheet = editor.prepareSheet(activeSheet);
	    }

	    var range;

	    if (st == en) {
	      var colon = editor.getValue()[(updateRange ? updateRange.pos : cursor) - 1] == ":";
	      range = colon ? st : sheet + st;
	    } else range = "".concat(sheet + st, ":").concat(en);

	    if (updateRange && updateRange.pos == cursor - updateRange.len) {
	      editor.setRange(range, true);
	      cursor = editor._update_range.pos + range.length;
	    } else if (editor.expectOperator()) {
	      editor.setRange(range);
	      cursor += range.length;
	    } else return endEdit(cell);

	    editor.focus();
	    editor.getInputNode().setSelectionRange(cursor, cursor);
	    editor.paintValue();
	    return false;
	  }

	  function endEdit(st) {
	    if (editor.isEnabled()) {
	      var cell = editor.config.activeCell;
	      editor.showActiveSheet();
	      editor.updateCellValue(cell);
	      editor.setValue(st ? view.getCellValue(st.row, st.column) : "");
	    }

	    return true;
	  }

	  function clearEditor() {
	    editor.define({
	      activeCell: null
	    });
	    editor.setValue("");
	    editor.disable();
	  }
	}

	var Dialog =
	/*#__PURE__*/
	function () {
	  function Dialog(view) {
	    _classCallCheck(this, Dialog);

	    this.view = view;
	  }

	  _createClass(Dialog, [{
	    key: "$init",
	    value: function $init() {}
	  }, {
	    key: "$show",
	    value: function $show() {}
	  }, {
	    key: "$hide",
	    value: function $hide() {}
	  }, {
	    key: "open",
	    value: function open() {
	      var _this = this;

	      if (!this.$dialog) {
	        this.$dialog = webix.ui(this.$init());

	        this.view._destroy_with_me.push(this.$dialog);

	        this.$dialog.attachEvent("onHide", function () {
	          _this.$hide();

	          webix.UIManager.setFocus(_this.view);
	        });
	        this.$dialog.attachEvent("onShow", function () {
	          webix.UIManager.setFocus(_this.$dialog);
	        });
	      } else if (this.$dialog.isVisible()) return;

	      var form = this.$dialog.getBody();
	      this.$dialog.show();
	      if (this.$show(this.$dialog, form) === false) this.close();
	    }
	  }, {
	    key: "close",
	    value: function close() {
	      this.$dialog.hide();
	    }
	  }]);

	  return Dialog;
	}();

	function image(url) {
	  return "=IMAGE(\"".concat(url, "\")");
	}
	function chart(config) {
	  config = webix.copy(config);
	  var bar = config.type == "bar";
	  if (bar && config.horizontal) config.type = "barH";
	  var result = "=SPARKLINE(".concat(config.range, ",\"").concat(config.type, "\"");
	  if (bar) result += ",\"".concat(config.color, "\",\"").concat(config.negativeColor, "\"");else if (config.color) result += ",\"".concat(config.color, "\"");
	  return result + ")";
	}
	function parseImage(value) {
	  if (value && typeof value == "string" && value.indexOf("=IMAGE(") === 0) return {
	    url: unescape(value.substr(7, value.length - 8))
	  };
	}
	function parseChart(value) {
	  if (value && typeof value == "string" && value.indexOf("=SPARKLINE(") === 0) {
	    var text = value.substr(11, value.length - 12).split(",");
	    var result = {
	      range: text[0],
	      type: unescape(text[1]),
	      color: unescape(text[2]),
	      negativeColor: unescape(text[3])
	    };

	    if (result.type == "barH") {
	      result.type = "bar";
	      result.horizontal = 1;
	    }

	    return result;
	  }
	}

	function unescape(text) {
	  if (!text) return "";
	  text = text.trim();
	  if (text[0] === "\"") text = text.substr(1);
	  if (text[text.length - 1] === "\"") text = text.substr(0, text.length - 1);
	  return text;
	}

	var action = "add-image-cell";
	var DialogBox =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show(box, form) {
	      this.cell = this.view.getSelectedId();
	      if (!this.cell) return false;
	      form.elements.preview.setHTML("");
	      form.elements.url.setValue(""); //sync state of dialog to data with  the selected cell

	      var value = this.view.getCellValue(this.cell.row, this.cell.column);
	      var data = parseImage(value);
	      if (data && data.url) form.elements.url.setValue(data.url);
	      form.elements.url.focus();
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      var save = this.view.config.save;
	      var server = save && save.images || null;
	      return {
	        view: "ssheet-dialog",
	        head: webix.i18n.spreadsheet.labels["image-title"],
	        move: true,
	        position: "center",
	        body: {
	          view: "form",
	          elements: [{
	            view: "text",
	            name: "url",
	            placeholder: webix.i18n.spreadsheet.labels["image-url"],
	            on: {
	              "onChange": function (image$$1) {
	                return _this.showPreview(image$$1);
	              }
	            }
	          }, {
	            view: "label",
	            label: webix.i18n.spreadsheet.labels["image-or"],
	            align: "center"
	          }, {
	            view: "uploader",
	            label: webix.i18n.spreadsheet.labels["image-upload"],
	            upload: server,
	            on: {
	              onBeforeFileAdd: function (file) {
	                var _this2 = this;

	                if (!this.config.upload) {
	                  var reader = new FileReader();

	                  reader.onload = function (e) {
	                    return _this2.getFormView().elements.url.setValue(e.target.result);
	                  };

	                  reader.readAsDataURL(file.file);
	                  return false;
	                } else this.getFormView().elements.preview.setHTML("");
	              },
	              onFileUpload: function (item, response) {
	                this.getFormView().elements.url.setValue(response.imageURL);
	              }
	            }
	          }, {
	            view: "formlate",
	            name: "preview",
	            borderless: true,
	            css: "webix_ssheet_preview",
	            template: "",
	            height: 50
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this.okClick();
	          },
	          onCancelClick: function () {
	            return _this.close();
	          }
	        }
	      };
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var cell = this.cell;
	      var image$$1 = this.fillUrl(this.$dialog.getBody().elements.url.getValue());
	      this.view.addImage(cell.row, cell.column, image$$1);
	      this.close();
	    }
	  }, {
	    key: "fillUrl",
	    value: function fillUrl(url) {
	      if (!/^[/]|((https?:\/|data:image)\/)/i.test(url)) url = "http://" + url;
	      return url;
	    }
	  }, {
	    key: "showPreview",
	    value: function showPreview(image$$1) {
	      if (image$$1) {
	        image$$1 = webix.template.escape(this.fillUrl(image$$1));
	        this.$dialog.queryView("form").elements.preview.setHTML("<img class='webix_ssheet_cimage' src='" + image$$1 + "'></img>");
	      }
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var imc = /*#__PURE__*/Object.freeze({
		action: action,
		DialogBox: DialogBox
	});

	var action$1 = "add-image-top";
	var DialogBox$1 =
	/*#__PURE__*/
	function (_box$DialogBox) {
	  _inherits(DialogBox$$1, _box$DialogBox);

	  function DialogBox$$1() {
	    _classCallCheck(this, DialogBox$$1);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox$$1).apply(this, arguments));
	  }

	  _createClass(DialogBox$$1, [{
	    key: "open",
	    value: function open(action$$1) {
	      this.config = action$$1.config;
	      this.viewid = action$$1.viewid;
	      this.view.callEvent("onUIEditStart", [this.viewid, "image"]);
	      DialogBox.prototype.open.apply(this, arguments);
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.callEvent("onUIEditStop", [this.viewid, "image"]);
	      this.config = this.viewid = null;
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      this.view.attachEvent("onUIEditStart", function (id, type) {
	        if (_this.$dialog && _this.$dialog.isVisible() && type != "image") _this.close();
	      });
	      this.view.attachEvent("onCommand", function (obj) {
	        if (obj.id == "close-ui-editor" && _this.$dialog && _this.$dialog.isVisible()) _this.close();
	      });
	      return DialogBox.prototype.$init.apply(this, arguments);
	    }
	  }, {
	    key: "$show",
	    value: function $show(box, form) {
	      form.elements.preview.setHTML("");
	      form.elements.url.setValue("");
	      if (this.config && this.config.data) form.elements.url.setValue(this.config.data);
	      form.elements.url.focus();
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var image = this.fillUrl(this.$dialog.getBody().elements.url.getValue());
	      if (this.viewid) this.view.views.update(this.viewid, image);else {
	        var id = this.view.views.add(null, null, "image", image);
	        this.view.views.highlight(id);
	      }
	      this.close();
	    }
	  }]);

	  return DialogBox$$1;
	}(DialogBox);

	var imt = /*#__PURE__*/Object.freeze({
		action: action$1,
		DialogBox: DialogBox$1
	});

	var ignoreUndoReset = false;
	function init$e(view) {
	  reset$5(view);
	  undoHandlers(view);
	  view.attachEvent("onHardReset", function () {
	    return reset$5(view);
	  });
	  view.attachEvent("onAfterSheetShow", function () {
	    return reset$5(view);
	  }); // styles

	  view.attachEvent("onBeforeStyleChange", function (row, column, nstyle, ostyle) {
	    if (isCellLocked(view, row, column)) return false;
	    addToHistory(view, {
	      action: "style",
	      row: row,
	      column: column,
	      value: ostyle,
	      newValue: nstyle,
	      group: group.value
	    });
	  }); // editing

	  view.attachEvent("onBeforeValueChange", function (row, column, nvalue, ovalue) {
	    if (isCellLocked(view, row, column)) return false;
	    addToHistory(view, {
	      action: "value",
	      row: row,
	      column: column,
	      value: ovalue,
	      newValue: nvalue,
	      group: group.value
	    });
	  }); // merge cells

	  view.attachEvent("onBeforeSpan", function (row, column, value) {
	    if (isCellLocked(view, row, column)) return false;
	    addToHistory(view, {
	      action: "span",
	      row: row,
	      column: column,
	      value: value,
	      newValue: value,
	      group: group.value
	    });
	  }); // split cells

	  view.attachEvent("onBeforeSplit", function (row, column, value) {
	    if (isCellLocked(view, row, column)) return false;
	    addToHistory(view, {
	      action: "split",
	      row: row,
	      column: column,
	      value: value,
	      newValue: value,
	      group: group.value
	    });
	  }); // Any abstract undo actions

	  view.attachEvent("onAction", function (action, obj) {
	    return addToHistory(view, {
	      action: action,
	      row: obj.row || null,
	      column: obj.column || null,
	      value: webix.isUndefined(obj.value) ? null : obj.value,
	      newValue: webix.isUndefined(obj.newValue) ? null : obj.newValue,
	      extra: obj.extra || null,
	      group: group.value
	    });
	  }); // column resize

	  view.$$("cells").attachEvent("onColumnResize", function (column, nvalue, ovalue) {
	    return addToHistory(view, {
	      action: "c-resize",
	      row: 0,
	      column: column,
	      value: ovalue,
	      newValue: nvalue,
	      group: group.value
	    });
	  }); // column hide

	  view.attachEvent("onColumnOperation", function (action, start, end) {
	    if (action !== "add" && action !== "del") addToHistory(view, {
	      action: {
	        id: action,
	        group: "column"
	      },
	      group: group.value,
	      column: {
	        start: {
	          column: start
	        },
	        end: {
	          column: end
	        }
	      }
	    });
	  }); // row hide

	  view.attachEvent("onRowOperation", function (action, start, end) {
	    if (action !== "add" && action !== "del") addToHistory(view, {
	      action: {
	        id: action,
	        group: "row"
	      },
	      group: group.value,
	      row: {
	        start: {
	          row: start
	        },
	        end: {
	          row: end
	        }
	      }
	    });
	  }); // row resize

	  view.$$("cells").attachEvent("onRowResize", function (row, nvalue, ovalue) {
	    return addToHistory(view, {
	      action: "r-resize",
	      row: row,
	      column: 0,
	      value: ovalue,
	      newValue: nvalue,
	      group: group.value
	    });
	  }); // condition formats

	  view.attachEvent("onBeforeConditionSet", function (row, column, value, nvalue) {
	    if (isCellLocked(view, row, column)) return false;
	    value = value ? webix.copy(value) : null;
	    addToHistory(view, {
	      action: "condition",
	      row: row,
	      column: column,
	      value: value,
	      newValue: nvalue,
	      group: group.value
	    });
	  }); // zoom

	  view.attachEvent("onZoom", function (value, oldVal) {
	    return addToHistory(view, {
	      action: "zoom",
	      value: oldVal,
	      newValue: value,
	      group: group.value
	    });
	  });
	  view.$skipHistory = 0;
	}
	function undo(view) {
	  restoreHistory(view, -1);
	}
	function redo(view) {
	  restoreHistory(view, 1);
	}
	function reset$5(view) {
	  if (!ignoreUndoReset) {
	    view._ssUndoHistory = [];
	    view._ssUndoCursor = -1;
	  }
	}

	function addToHistory(view, data) {
	  if (!view.$skipHistory && !view._loading_data) {
	    // remove futher history
	    view._ssUndoHistory.splice(view._ssUndoCursor + 1); // add to an array and increase cursor


	    view._ssUndoHistory.push(data);

	    view._ssUndoCursor++;
	  }
	}

	function ignoreUndo(func, view) {
	  view.$skipHistory++;

	  try {
	    func.call(view);
	  } finally {
	    view.$skipHistory--;
	  }
	}
	function ignoreReset(func) {
	  ignoreUndoReset = true;
	  func();
	  ignoreUndoReset = false;
	}

	function restoreHistory(view, step) {
	  var data = view._ssUndoHistory[step > 0 ? view._ssUndoCursor + step : view._ssUndoCursor];

	  if (data) {
	    var value = step > 0 ? data.newValue : data.value;
	    var direction = step > 0;
	    var params = [data.action, data.row, data.column, value, direction, data.extra];
	    view._ssUndoCursor += step; // group support

	    var group$$1 = data.group;
	    var prevData = view._ssUndoHistory[step > 0 ? view._ssUndoCursor + step : view._ssUndoCursor];
	    ignoreUndo(function () {
	      view.callEvent("onUndo", params);

	      if (!group$$1 || !(prevData && group$$1 == prevData.group)) {
	        view.refresh();
	        view.callEvent("onAfterUndo", []);
	      }
	    }, view);

	    if (prevData && group$$1 && group$$1 == prevData.group) {
	      restoreHistory(view, step);
	    }
	  }
	}

	function undoHandlers(view) {
	  view.attachEvent("onUndo", function (type, row, column, value) {
	    switch (type) {
	      case "freeze-row":
	        view.freezeRows(value);
	        break;

	      case "freeze-column":
	        view.freezeColumns(value);
	        break;
	    }
	  });
	}

	var m11 = /*#__PURE__*/Object.freeze({
		init: init$e,
		undo: undo,
		redo: redo,
		reset: reset$5,
		ignoreUndo: ignoreUndo,
		ignoreReset: ignoreReset
	});

	function init$f(view) {
	  var grid = view._table.$view.querySelector(".webix_ss_center");

	  view.views = {
	    register: function (type, render, track) {
	      if (!this._types[type]) this._types[type] = {
	        render: render,
	        track: track
	      };
	    },
	    move: function (id, x, y) {
	      var win = webix.$$(id);
	      var old = webix.copy(this._pull[id]);
	      this._pull[id].x = _correctPos(view, old.config.width, x / view._zoom, "x");
	      this._pull[id].y = _correctPos(view, old.config.height, y / view._zoom, "y");
	      view.callEvent("onAction", ["move-view", {
	        row: id,
	        newValue: webix.copy(this._pull[id]),
	        value: old
	      }]);

	      _showOne(view, win, this._pull[id]);
	    },
	    add: function (x, y, type, data, config, id) {
	      var _this = this;

	      config = config || {};

	      if (type == "chart") {
	        config = webix.extend(config, {
	          type: "line",
	          dataSeries: "columns"
	        });
	      }

	      var height = config.height = config.height || 300;
	      var width = config.width = config.width || 500;
	      var win = webix.ui({
	        id: id || "$ssheet-ui" + webix.uid(),
	        // fixed id is for undo only
	        view: "ssheet-ui",
	        container: grid,
	        master: view._table.config.id,
	        width: width,
	        height: height
	      });
	      win.attachEvent("onViewMoveEnd", function (x, y) {
	        var state = view._table.getScrollState();

	        _this.move(id, x, y + state.y);
	      });
	      win.attachEvent("onViewResize", function () {
	        var conf = _this._pull[id];
	        var old = webix.copy(conf);
	        conf.config.height = win.$height;
	        conf.config.width = win.$width;
	        view.callEvent("onAction", ["resize-view", {
	          row: id,
	          newValue: webix.copy(conf),
	          value: old
	        }]);
	      });
	      win.attachEvent("onViewEdit", function () {
	        var config = _this._pull[id];
	        var command = _this._commands[config.type] || config.type;
	        view.callEvent("onCommand", [{
	          id: command,
	          viewid: id,
	          config: config
	        }]);
	      });
	      win.attachEvent("onViewRemove", function () {
	        return _this.remove(id);
	      });
	      id = win.config.id;
	      x = _correctPos(view, height, x, "x");
	      y = _correctPos(view, width, y, "y");
	      this._pull[id] = {
	        x: x,
	        y: y,
	        type: type,
	        data: data,
	        config: config
	      };
	      this.update(id, data, config, true);

	      _showOne(view, win, this._pull[id]);

	      return id;
	    },
	    remove: function (id) {
	      var old = this._pull[id];
	      webix.$$(id).close();
	      delete this._pull[id];
	      view.callEvent("onAction", ["add-view", {
	        row: id,
	        newValue: null,
	        value: old
	      }]);
	    },
	    get: function (id) {
	      return webix.$$(id).getBody();
	    },
	    getConfig: function (id) {
	      return this._pull[id];
	    },
	    update: function (id, data, config, inner) {
	      var old = inner ? null : webix.copy(this._pull[id]);
	      var conf = this._pull[id];
	      var actions = this._types[conf.type];
	      data = data || config.data || "";
	      config = config || {};
	      delete config.data;

	      if (conf.type == "chart") {
	        var type = config.type;

	        if (type && !config.series) {
	          var xAxis = config.xAxis && config.xAxis.range;
	          var legend = config.legend && config.legend.range;
	          var oldLeftColumn;

	          if (old && old.config) {
	            if (_isPie(type)) {
	              if (old.config.legend && old.config.legend.fromData) oldLeftColumn = 1;
	            } else if (old.config.xAxis && old.config.xAxis.fromData) oldLeftColumn = 1;
	          }

	          config.series = _getSeries(view, data, config.dataSeries, {
	            xAxis: xAxis,
	            legend: legend
	          }, oldLeftColumn);
	        }
	      }

	      var win = webix.$$(id);
	      var height = config.height || 300;
	      var width = config.width || 500;

	      if (win.$width != width && win.$height != height) {
	        win.define({
	          width: width,
	          height: height
	        });
	        win.resize();
	      }

	      conf.data = data;
	      conf.config = config;
	      var node = this.get(id);
	      data = _fromRange(view, conf);

	      if (actions.render) {
	        var renderConfig = webix.copy(conf); //clear width and height for inner view resizing

	        renderConfig.config.width = renderConfig.config.height = 0;
	        node = actions.render(node, renderConfig, data);

	        _processTables(node);
	      }

	      if (actions.track) _trackOne(view, node, actions.track, conf);
	      view.callEvent("onAction", ["add-view", {
	        row: id,
	        newValue: webix.copy(this._pull[id]),
	        value: old
	      }]);
	    },
	    highlight: function (id) {
	      var win = webix.$$(id);
	      var css = "webix_ssheet_ui_focused";
	      var oldWin = webix.$$(this._activeWin);
	      if (oldWin && !oldWin.$destructed) webix.html.removeCss(oldWin.$view, css);

	      if (win) {
	        this._activeWin = id;
	        webix.html.addCss(win.$view, css);
	      } else delete this._activeWin;
	    },
	    _commands: {
	      "image": "add-image-top",
	      "chart": "add-chart"
	    },
	    _types: {},
	    _pull: {}
	  }; // handle events

	  view._table.attachEvent("onResize", function () {
	    return _showAll(view);
	  });

	  view._table.attachEvent("onScrollY", function () {
	    return _showAll(view);
	  });

	  view._table.attachEvent("onScrollX", function () {
	    return _showAll(view);
	  });

	  view.attachEvent("onReset", function () {
	    return _reset(view);
	  });
	  view.attachEvent("onUndo", function (type, row, column, value) {
	    var move = type === "move-view";
	    if (move || type == "resize-view" || type === "add-view") _undoUI(view, move, row, value);
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "header-hide") _showAll(view);else if (action == "before-grid-change") _updateData(view, p.name, p.inc, p.data, p.start);
	  });
	  view.attachEvent("onZoom", function () {
	    return _showAll(view, true);
	  });
	  view.attachEvent("onColumnOperation", function () {
	    return _showAll(view, true);
	  });
	  view.attachEvent("onRowOperation", function () {
	    return _showAll(view, true);
	  });
	  view.attachEvent("onDataParse", function (data) {
	    return _parse$3(view, data);
	  });
	  view.attachEvent("onDataSerialize", function (data, config) {
	    return _serialize$3(view, data, config);
	  });
	  view.attachEvent("onCellChange", function (r, c, v, p) {
	    if (p == view.getActiveSheet()) _trackAll(view);
	  });
	  view.attachEvent("onMathRefresh", function () {
	    return _trackAll(view);
	  });
	  view.attachEvent("onDestruct", function () {
	    for (var i in view.views._pull) {
	      webix.$$(i).destructor();
	    }
	  });
	  var editUIType;
	  webix.attachEvent("onClick", function (ev) {
	    var focus = webix.$$(ev);
	    if (focus && focus.config.externalUI) focus = webix.$$(focus.config.externalUI);
	    var ui = focus && (focus.queryView("ssheet-ui", "self") || focus.queryView("ssheet-ui", "parent"));

	    if (ui) {
	      view.views.highlight(ui);
	      var id = ui.config.id;

	      if (editUIType) {
	        if (view.views.getConfig(id).type == editUIType) ui.callEvent("onViewEdit", []); //start editing if any editor is open
	        else view.callEvent("onCommand", [{
	            id: "close-ui-editor"
	          }]);
	      }
	    } else if (!editUIType) view.views.highlight();
	  });
	  view.attachEvent("onUIEditStart", function (id, type) {
	    view.views.highlight(id);
	    editUIType = type;
	  });
	  view.attachEvent("onUIEditStop", function (id, type) {
	    if (editUIType == type) webix.delay(function () {
	      // after onClick handler (to save focus)
	      editUIType = null;
	    });
	  }); // set default views

	  view.views.register("chart", function (node, conf, data) {
	    var dataRange = _getNames(view, conf);

	    var config = _genChartConfig(conf, data, dataRange);

	    return webix.ui(config, node);
	  }, function (view, data) {
	    view.clearAll();
	    view.parse(data);
	  });
	  view.views.register("image", function (node, conf, data) {
	    var config = webix.extend({
	      css: "webix_ssheet_bgimage",
	      template: "<img src=\"".concat(data, "\"/>")
	    }, conf.config || {}, true);
	    return webix.ui(config, node);
	  });
	}

	function _parse$3(view, data) {
	  var views = data.views;

	  if (views) {
	    ignoreUndo(function () {
	      views.forEach(function (obj) {
	        return view.views.add.apply(view.views, obj);
	      });
	    }, view);
	  }
	}

	function _serialize$3(view, data, config) {
	  data.views = [];

	  for (var i in view.views._pull) {
	    var conf = view.views._pull[i];
	    var one = [conf.x, conf.y, conf.type, conf.data, conf.config];
	    if (config && config.viewIds) one.push(i);
	    data.views.push(one);
	  }
	}

	var thread;

	function _trackAll(view) {
	  clearTimeout(thread);
	  thread = webix.delay(function () {
	    var ui = view.views;

	    for (var id in ui._pull) {
	      var conf = ui._pull[id];
	      var viewMethods = ui._types[conf.type];
	      var render = viewMethods.render;
	      var track = viewMethods.track;
	      if (track) _trackOne(view, ui.get(id), track, conf, render);
	    }
	  });
	}

	function _trackOne(view, node, track, conf, render) {
	  var data = _fromRange(view, conf);

	  if (conf.type == "chart") {
	    if (render) node = render(node, conf, data, true);
	    var config = conf.config;
	    if (config && !_isPie(config.type)) _removeLegend(data, conf, view);
	  }

	  track(node, data);
	}

	function _updateData(view, name, inc, data, start) {
	  var views = data.views;

	  for (var i = 0; i < views.length; i++) {
	    if (_isRange(views[i][3])) {
	      var series = views[i][4].series;

	      if (series) {
	        series.forEach(function (obj) {
	          obj.range = changeRange(obj.range, name, inc, start);
	          obj.active = changeRange(obj.active, name, inc, start);
	        });
	      }

	      var legend = views[i][4].legend && views[i][4].legend.range;
	      if (legend) views[i][4].legend.range = _getDataParts(legend).map(function (range$$1) {
	        return changeRange(range$$1, name, inc, start);
	      }).join(",");
	      var xAxis = views[i][4].xAxis && views[i][4].xAxis.range;
	      if (xAxis) views[i][4].xAxis.range = changeRange(xAxis, name, inc, start);
	      views[i][3] = _getDataParts(views[i][3]).map(function (range$$1) {
	        return changeRange(range$$1, name, inc, start);
	      }).join(",");
	    }
	  }
	}

	function _showAll(view, pos) {
	  //close possibly open menus of embedded ui
	  webix.callEvent("onClick", []);

	  for (var id in view.views._pull) {
	    var win = webix.$$(id);
	    var conf = view.views._pull[id];

	    if (pos) {
	      conf.x = _correctPos(view, conf.config.width, conf.x, "x");
	      conf.y = _correctPos(view, conf.config.height, conf.y, "y");
	    }

	    _showOne(view, win, conf);
	  }
	}

	function _showOne(view, win, conf) {
	  var state = view._table.getScrollState();

	  win.define({
	    width: conf.config.width * view._zoom,
	    height: conf.config.height * view._zoom
	  });
	  win.resize();
	  win.show({
	    x: conf.x * view._zoom,
	    y: conf.y * view._zoom - state.y
	  });
	}

	function _correctPos(view, winSize, v, type) {
	  if (!v && v !== 0) v = view._table.getScrollState()[type] + 50;else {
	    var size = (type == "x" ? _getWidth(view) : _getHeight(view)) - winSize;
	    v = Math.min(Math.max(v, 0), size);
	  }
	  return v;
	}

	function _reset(view) {
	  ignoreUndo(function () {
	    for (var id in view.views._pull) {
	      view.views.remove(id);
	    }
	  }, view);
	}

	function _undoUI(view, move, id, value) {
	  if (value) {
	    var x = value.x,
	        y = value.y,
	        type = value.type,
	        data = value.data,
	        config = value.config;

	    if (view.views._pull[id]) {
	      if (move) view.views.move(id, x, y);else view.views.update(id, data, config);
	    } else view.views.add(x, y, type, data, config, id);

	    var editor = view.$$("chartEditor");
	    if (editor && editor.viewId == id) editor.queryView("form").setValues(config);
	  } else view.views.remove(id);
	}

	function _getWidth(view) {
	  var width = 0;

	  view._table.eachColumn(function (id) {
	    if (id !== "rowId") width += this.getColumnConfig(id).width;
	  });

	  return width / view._zoom;
	}

	function _getHeight(view) {
	  var height = 0;

	  view._table.data.each(function (obj) {
	    height += obj.$height || webix.skin.$active.rowHeight;
	  });

	  return height / view._zoom;
	} //disable datatables not to interfere with ss table events


	function _processTables(node) {
	  var query = function (view) {
	    return view.name == "datatable" || view.name == "treetable";
	  };

	  var tables = node.queryView(query, "self");
	  if (tables) tables = [tables];else tables = node.queryView(query, "all");
	  tables.forEach(function (dt) {
	    return dt.disable();
	  });
	}
	/* chart-specific helpers */


	function _prepareType(config) {
	  var type = config.type;
	  if (config.stacked && type.indexOf("stacked") == -1) config.type = "stacked" + config.type.charAt(0).toUpperCase() + config.type.substr(1);
	  if (config["3D"] && type.indexOf("3D") == -1) config.type += "3D";
	  if (config.horizontal && type.indexOf("H") == -1) config.type += "H";
	  return config.type;
	}

	function _genChartConfig(conf, data, dataRange) {
	  var htmlFilter = /<[^>]*>/gi;
	  var config = webix.copy(conf.config);
	  config = _normalizeConfig(config);
	  var scale = config.scale.lines;
	  var scaleColor = config.scale.color || undefined;

	  var type = config.type = _prepareType(config);

	  var pie = _isPie(type);

	  var lines = config.series;
	  config.series = [];
	  var xAxis = config.xAxis;
	  var legendConfig = config.legend;
	  var pieLegend;
	  var legendRange;
	  var legend = {
	    height: 24,
	    align: legendConfig.align || "center",
	    valign: legendConfig.valign || "bottom"
	  };
	  legend.layout = legend.valign == "middle" ? "y" : "x";

	  if (pie) {
	    if (legendConfig.fromData) pieLegend = "data0";else if (legendConfig.range) pieLegend = dataRange[legendConfig.range];
	    legend.template = "#".concat(pieLegend, "#");
	  } else {
	    legend.values = [];
	    legendRange = !legendConfig.fromData && legendConfig.range;

	    if (legendRange) {
	      var switchDirection = config.dataSeries == "rows";
	      legendRange = _getParts(legendConfig.range, switchDirection, dataRange);
	    }

	    config.yAxis = config.yAxis || {};

	    for (var property in config.yAxis) {
	      if (config.yAxis[property] === "") delete config.yAxis[property];
	    }

	    config.yAxis = webix.extend(config.yAxis, {
	      lineColor: scaleColor,
	      color: scaleColor,
	      lines: scale,
	      lineShape: config.scale.circle ? "arc" : "default"
	    });
	    if (xAxis.fromData) xAxis.range = legendRange ? Object.keys(data[0]).filter(function (line) {
	      return legendRange.indexOf(line) == -1;
	    })[0] : "data0";else if (xAxis.range) xAxis.range = dataRange[xAxis.range];
	  }

	  for (var i = 0; i < lines.length; i++) {
	    var color = lines[i].color;
	    var item = dataRange[lines[i].range];

	    if (item != xAxis.range && !(pie && item == pieLegend
	    /*(item == pieLegend || legendConfig.range == lines[i].active)*/
	    )) {
	      var s = {
	        value: "#".concat(item, "#"),
	        tooltip: {
	          template: lines[i].tooltip ? "#".concat(item, "#") : ""
	        }
	      };
	      s[pie ? "pieInnerText" : "label"] = lines[i].label ? "#".concat(item, "#") : "";

	      if (type == "radar" || type == "line" || type == "spline" || type == "scatter") {
	        s.line = {
	          color: color
	        };
	        s.item = {
	          borderColor: color,
	          type: lines[i].marker
	        };
	      } else if (!pie) s.color = color;

	      if (type == "area" || type == "splineArea") s.alpha = 0.7;

	      if (data[0] && !pie && (legendRange || legendConfig.fromData)) {
	        var val = legendRange ? data[0][legendRange[i]] : data[0][item];
	        var text = val || val === 0 ? (val + "").replace(htmlFilter, "") : "";
	        legend.values.push({
	          text: text,
	          color: color
	        });
	      }

	      config.series.push(s);
	    }
	  }

	  if (!pie) {
	    config.xAxis = {
	      title: config.xAxis.title,
	      lineColor: scaleColor,
	      color: scaleColor,
	      lines: scale
	    };

	    config[type == "barH" || type == "stackedBarH" ? "yAxis" : "xAxis"].template = function (obj) {
	      var val = obj[xAxis.range];
	      return val || val === 0 ? (val + "").replace(htmlFilter, "") : "";
	    };
	  }

	  if (pieLegend || legend.values && legend.values.length) config.legend = legend;else delete config.legend;

	  if (type == "scatter") {
	    config.xValue = config.xAxis.template;
	    config.origin = "auto";
	    delete config.xAxis.template;
	  }

	  return webix.extend({
	    view: "chart",
	    padding: {
	      left: 80
	    }
	  }, config, true);
	}

	function _isRange(data) {
	  return typeof data == "string" && data.indexOf("data:image") === -1;
	}

	function _fromRange(view, conf) {
	  var data = conf.data;
	  if (/^(http|data:image|\/)/i.test(data)) return data;
	  var arr = [];

	  if (data) {
	    var config = conf.config;
	    var switchDirection = config.dataSeries == "rows";
	    var lastIndex = 0;
	    data = _getDataParts(data);

	    for (var i = 0; i < data.length; i++) {
	      var cells = _isRange(data[i]) ? range(data[i], view) : null;

	      if (cells) {
	        var page = cells[4] ? view._mData.getPage(cells[4]) : view._mPage;
	        cells[5] = lastIndex;

	        if (page) {
	          var subdata = switchDirection ? getRangeRows.apply(page, cells) : getRangeCols.apply(page, cells);
	          lastIndex += subdata[2];

	          for (var _i = 0; _i < subdata[0].length; _i++) {
	            if (!arr[_i]) arr[_i] = {};
	            webix.extend(arr[_i], subdata[0][_i]);
	          }
	        }
	      }
	    }
	  }

	  return arr;
	}

	function _removeLegend(arr, conf, view) {
	  var config = conf.config;
	  if (_typeof(config.legend) != "object") config.legend = {
	    fromData: !!config.legend
	  };
	  var legend = config.legend;
	  if (legend.fromData) arr.shift();else if (legend.range) {
	    var names = _getNames(view, conf);

	    var switchDirection = config.dataSeries == "rows";

	    var legendRange = _getParts(legend.range, switchDirection, names);

	    for (var i = 0; i < legendRange.length; i++) {
	      var item = legendRange[i];
	      delete arr[0][item];
	    }
	  }
	}

	function _getNames(view, conf) {
	  var data = conf.data;
	  if (/^(http|data:image|\/)/i.test(data)) return;
	  var names = {};

	  if (data) {
	    var config = conf.config;
	    var switchDirection = config.dataSeries == "rows";
	    var lastIndex = 0;
	    data = _getDataParts(data);

	    for (var i = 0; i < data.length; i++) {
	      var cells = _isRange(data[i]) ? range(data[i], view) : null;

	      if (cells) {
	        var page = cells[4] ? view._mData.getPage(cells[4]) : view._mPage;
	        cells[5] = lastIndex;

	        if (page) {
	          var subdata = switchDirection ? getRangeRows.apply(page, cells) : getRangeCols.apply(page, cells);
	          lastIndex += subdata[2];
	          webix.extend(names, subdata[1]);
	        }
	      }
	    }
	  }

	  return names;
	}

	function _getDataParts(data) {
	  return data.replace(/\s/g, "").split(",");
	}
	function _isPie(type) {
	  return /pie|donut/.test(type);
	}
	function _getSeries(view, data, dataSeries, active, oldLeftColumn) {
	  var dir = dataSeries == "rows";
	  var vals = [];

	  if (data) {
	    var xAxis = [];
	    var legend = [];
	    var activeVals = [];

	    if (active) {
	      if (active.legend) legend = _getParts(active.legend, dir);
	      if (active.xAxis) xAxis = _getParts(active.xAxis, dir);
	      if (active.series) activeVals = active.series.filter(function (val) {
	        return legend.indexOf(val.range) == -1 && xAxis.indexOf(val.range) == -1;
	      });
	    }

	    data = _getDataParts(data);
	    var colorIndex = 0;
	    var firstRange = 1;
	    data.forEach(function (subdata) {
	      var series = isRange(subdata) ? range(subdata, view) : null;

	      if (series) {
	        var start = dir ? series[0] : series[1];
	        var end = dir ? series[2] : series[3];
	        var inActiveSeries;

	        var _loop = function (i) {
	          var range$$1 = dir ? toRange(i, series[1], i, series[3], series[4]) : toRange(series[0], i, series[2], i, series[4]);
	          var seria = find(activeVals, function (val) {
	            return val.range == range$$1 && (!val.active || val.active == subdata);
	          });

	          if (seria) {
	            if (!seria.active) seria.active = subdata;
	            inActiveSeries = 1;
	          }
	        };

	        for (var i = start; i <= end; i++) {
	          _loop(i);
	        }

	        var _loop2 = function (i) {
	          var range$$1 = dir ? toRange(i, series[1], i, series[3], series[4]) : toRange(series[0], i, series[2], i, series[4]);
	          if (legend.indexOf(range$$1) != -1 || xAxis.indexOf(range$$1) != -1) return "continue";
	          var activeVal = activeVals.filter(function (val) {
	            return val.range == range$$1 && val.active == subdata;
	          })[0];
	          if (inActiveSeries && !activeVal && !(oldLeftColumn && firstRange && i == start)) return "continue";
	          vals.push(activeVal || {
	            active: subdata,
	            range: range$$1,
	            marker: "square",
	            tooltip: 1,
	            color: _getColor(colorIndex)
	          });
	          colorIndex++;
	        };

	        for (var i = start; i <= end; i++) {
	          var _ret = _loop2(i);

	          if (_ret === "continue") continue;
	        }

	        firstRange = 0;
	      }
	    });
	  }

	  return vals;
	}
	function _getParts(ranges, dir, dataRange) {
	  var parts = [];
	  ranges = _getDataParts(ranges);
	  ranges.forEach(function (subRange) {
	    subRange = isRange(subRange) ? range(subRange) : null;

	    if (subRange) {
	      var start = dir ? subRange[0] : subRange[1];
	      var end = dir ? subRange[2] : subRange[3];

	      for (var i = start; i <= end; i++) {
	        var _range = dir ? toRange(i, subRange[1], i, subRange[3], subRange[4]) : toRange(subRange[0], i, subRange[2], i, subRange[4]);

	        parts.push(dataRange ? dataRange[_range] : _range);
	      }
	    }
	  });
	  return parts;
	}
	function _normalizeConfig(config) {
	  if (_typeof(config.xAxis) != "object") config.xAxis = {
	    fromData: !!config.xAxis
	  };
	  if (_typeof(config.legend) != "object") config.legend = {
	    fromData: !!config.legend
	  };
	  config.legend = webix.extend(config.legend, {
	    layout: "x",
	    align: "center",
	    valign: "bottom"
	  });
	  if (!config.scale) config.scale = {
	    lines: 1
	  };
	  return config;
	}

	function _getColor(index) {
	  var colors = ["#e06666", "#6aa84f", "#3c78d8", "#e69138", "#783f04", "#134f5c", "#674ea7", "#c27ba0"];
	  return colors[index % colors.length];
	}

	function getRangeCols(r1, c1, r2, c2, sheetName, lastIndex) {
	  var data = [];
	  var rangeToData = {};

	  for (var i = r1, rind = 0; i <= r2; i++, rind++) {
	    data[rind] = {};

	    for (var j = c1, cind = lastIndex; j <= c2; j++, cind++) {
	      if (i == r2) {
	        rangeToData["".concat(sheetName ? sheetName + "!" : "").concat(encode[j]).concat(r1, ":").concat(encode[j]).concat(r2)] = "data".concat(cind);
	        lastIndex++;
	      }

	      data[rind]["data".concat(cind)] = this.getValue(i - 1, j - 1);
	    }
	  }

	  return [data, rangeToData, lastIndex];
	}

	function getRangeRows(r1, c1, r2, c2, sheetName, lastIndex) {
	  var data = [];
	  var rangeToData = {};

	  for (var i = c1, cind = 0; i <= c2; i++, cind++) {
	    data[cind] = {};

	    for (var j = r1, rind = lastIndex; j <= r2; j++, rind++) {
	      if (i == c2) {
	        rangeToData["".concat(sheetName ? sheetName + "!" : "").concat(encode[c1]).concat(j, ":").concat(encode[c2]).concat(j)] = "data".concat(rind);
	        lastIndex++;
	      }

	      data[cind]["data".concat(rind)] = this.getValue(j - 1, i - 1);
	    }
	  }

	  return [data, rangeToData, lastIndex];
	}

	var m30 = /*#__PURE__*/Object.freeze({
		init: init$f,
		_getDataParts: _getDataParts,
		_isPie: _isPie,
		_getSeries: _getSeries,
		_getParts: _getParts,
		_normalizeConfig: _normalizeConfig
	});

	var labels = webix.i18n.spreadsheet.labels;
	function init$g(view) {
	  view.attachEvent("onComponentInit", function () {
	    return ready$4(view);
	  });
	  var activeSkin = webix.skin.$active;
	  var padding = activeSkin.dataPadding - 2;
	  var margin = activeSkin.layoutMargin.form;
	  return {
	    width: 440,
	    hidden: true,
	    id: "chartEditor",
	    css: "ssheet_chart",
	    rows: [{
	      height: activeSkin.barHeight,
	      css: "ssheet_chart_wizard_head",
	      padding: {
	        left: 4
	      },
	      cols: [{
	        view: "icon",
	        inputHeight: activeSkin.inputHeight,
	        hotkey: "esc",
	        icon: "webix_ssheet_icon ssi-arrow-left",
	        click: function () {
	          return closeEditor(view);
	        }
	      }, {
	        type: "header",
	        borderless: true,
	        template: labels["chart-edit"]
	      }]
	    }, {
	      view: "form",
	      complexData: true,
	      borderless: true,
	      padding: {
	        top: 0
	      },
	      elementsConfig: {
	        labelWidth: 184
	      },
	      elements: [{
	        view: "tabview",
	        id: "chartTabs",
	        cells: [{
	          id: "common",
	          borderless: true,
	          type: "form",
	          paddingX: 0,
	          header: labels["chart-common"],
	          rows: [{
	            view: "scrollview",
	            body: {
	              margin: margin,
	              rows: [addRichselect("type", "chart-type", getTypes()), {
	                view: "checkbox",
	                label: labels["stacked-chart"],
	                name: "stacked",
	                hidden: true
	              }, {
	                view: "checkbox",
	                label: labels["horizontal-chart"],
	                name: "horizontal",
	                hidden: true
	              }, {
	                view: "checkbox",
	                label: labels["chart-pie-3d"],
	                name: "3D",
	                batch: "pie"
	              }, {
	                view: "text",
	                label: labels["chart-range"],
	                name: "range"
	              }, {
	                view: "checkbox",
	                label: labels["chart-col-xAxis"],
	                name: "xAxis.fromData",
	                batch: "axis"
	              }, {
	                view: "checkbox",
	                label: labels["chart-row-legend"],
	                name: "legend.fromData"
	              }, {
	                view: "radio",
	                label: labels["chart-data-from"],
	                name: "dataSeries",
	                vertical: true,
	                options: [{
	                  id: "columns",
	                  value: labels["chart-columns"]
	                }, {
	                  id: "rows",
	                  value: labels["chart-rows"]
	                }]
	              }, {}]
	            }
	          }]
	        }, {
	          id: "advanced",
	          borderless: true,
	          type: "form",
	          paddingX: 0,
	          padding: {
	            bottom: 0
	          },
	          header: labels["chart-series"],
	          rows: [{
	            view: "ssheet-series",
	            name: "series"
	          }]
	        }, {
	          id: "extras",
	          borderless: true,
	          type: "form",
	          paddingX: 0,
	          header: labels["chart-extras"],
	          rows: [{
	            view: "scrollview",
	            body: {
	              view: "accordion",
	              margin: webix.skin.$active.layoutMargin.form,
	              css: "webix_ssheet_accordion",
	              multi: true,
	              type: "clean",
	              rows: [{
	                header: labels["chart-legend"],
	                body: {
	                  margin: margin,
	                  padding: padding,
	                  rows: [{
	                    view: "text",
	                    label: labels["chart-legend-range"],
	                    name: "legend.range"
	                  }, addRichselect("legend.align", "chart-legend-align", getLegendAlign()), addRichselect("legend.valign", "chart-legend-valign", getLegendValign())]
	                }
	              }, {
	                header: labels["chart-scale"],
	                batch: "axis",
	                id: "scale",
	                body: {
	                  margin: margin,
	                  padding: padding,
	                  rows: [{
	                    view: "checkbox",
	                    label: labels["chart-lines"],
	                    name: "scale.lines",
	                    batch: "axis"
	                  }, {
	                    view: "checkbox",
	                    label: labels["chart-radar-circle"],
	                    name: "scale.circle",
	                    hidden: true
	                  }, {
	                    view: "ssheet-colorpicker",
	                    label: labels["chart-scale-color"],
	                    name: "scale.color",
	                    batch: "axis"
	                  }]
	                }
	              }, {
	                header: labels["chart-x-axis"],
	                batch: "axis",
	                body: {
	                  margin: margin,
	                  padding: padding,
	                  rows: [{
	                    view: "text",
	                    label: labels["chart-xAxis-range"],
	                    name: "xAxis.range",
	                    range: true,
	                    batch: "axis"
	                  }, {
	                    view: "text",
	                    label: labels["chart-xAxis-title"],
	                    name: "xAxis.title",
	                    batch: "axisTitle"
	                  }]
	                }
	              }, {
	                header: labels["chart-y-axis"],
	                batch: "axis",
	                body: {
	                  margin: margin,
	                  padding: padding,
	                  rows: [{
	                    view: "text",
	                    label: labels["chart-yAxis-title"],
	                    name: "yAxis.title",
	                    batch: "axisTitle"
	                  }, {
	                    view: "text",
	                    label: labels["chart-yAxis-origin"],
	                    name: "origin",
	                    batch: "axis",
	                    attributes: {
	                      type: "number"
	                    }
	                  }, {
	                    view: "label",
	                    label: labels["chart-yAxis-note"],
	                    css: "ssheet_note",
	                    height: 20
	                  }, {
	                    view: "text",
	                    label: labels["chart-yAxis-start"],
	                    name: "yAxis.start",
	                    batch: "axis",
	                    attributes: {
	                      type: "number"
	                    }
	                  }, {
	                    view: "text",
	                    label: labels["chart-yAxis-end"],
	                    name: "yAxis.end",
	                    batch: "axis",
	                    attributes: {
	                      type: "number"
	                    }
	                  }, {
	                    view: "text",
	                    label: labels["chart-yAxis-step"],
	                    name: "yAxis.step",
	                    batch: "axis",
	                    attributes: {
	                      type: "number"
	                    }
	                  }]
	                }
	              }, {}]
	            }
	          }]
	        }]
	      }]
	    }]
	  };
	}

	function ready$4(view) {
	  var chartEditor = view.$$("chartEditor");
	  var form = chartEditor.queryView("form");
	  var elements = form.elements;
	  view.attachEvent("onCommand", function (action) {
	    if (action.id == "add-chart") {
	      var config = action.config;
	      var values = config && config.config || {};
	      chartEditor.show();

	      view.$handleSelection = function (st, end, a, b) {
	        var focus = webix.UIManager.getFocus();

	        if (chartEditor.queryView(function (view) {
	          return view == focus;
	        })) {
	          if (focus == elements.range || focus == elements["legend.range"]) {
	            var val = focus.getValue();
	            var last = val.lastIndexOf(",");
	            val = last == -1 ? "" : val.substring(0, last + 1);
	            focus.setValue(val + a + ":" + b);
	          } else if (focus.config.range) focus.setValue(a + ":" + b);
	        }

	        return false;
	      };

	      form.clear();
	      view.$$("chartTabs").setValue("common");
	      values = _normalizeConfig(values);
	      values.range = config ? config.data : view.getSelectedRange();
	      chartEditor.viewId = action.viewid ? action.viewid : view.views.add(null, null, "chart", values.range, values);
	      view.callEvent("onUIEditStart", [chartEditor.viewId, "chart"]);
	      updateValign(values.legend.align);
	      updateAlign(values.legend.valign);
	      var formValues = inValues(values);
	      form.setValues(formValues);
	      updateType(formValues.type);
	      if (!_isPie(formValues.type) && values.legend.fromData) updateLegendRange(values.legend.fromData);
	      if (values.xAxis.fromData) updateXaxisRange(values.xAxis.fromData);
	      updateSeries();
	      form.queryView("accordionitem", "all").forEach(function (view) {
	        return view.expand();
	      });
	      elements.range.focus();
	    }
	  });
	  view.attachEvent("onUIEditStart", function (id, type) {
	    if (chartEditor.isVisible() && type != "chart") closeEditor(view);
	  });
	  view.attachEvent("onCommand", function (obj) {
	    if (obj.id == "close-ui-editor" && chartEditor.isVisible()) closeEditor(view);
	  });
	  view.attachEvent("onAction", function (id, values) {
	    if (id == "add-view" && !values.newValue) {
	      if (chartEditor.isVisible() && chartEditor.viewId == values.row) closeEditor(view);
	    }
	  });
	  form.attachEvent("onChange", function (val, oldVal) {
	    var source = this.$eventSource; //upper case ranges

	    if (source === elements.range || source === elements["xAxis.range"] || source === elements["legend.range"]) {
	      var parts = val.split("!");
	      var upper = parts.length == 2 ? parts[0] + "!" + parts[1].toUpperCase() : val.toUpperCase();

	      if (val != upper) {
	        val = upper;
	        setSilentValue(source, upper);
	      }
	    }

	    switch (source) {
	      case elements.type:
	        updateType(val);
	        break;

	      case elements.horizontal:
	        switchRowsCols();
	        break;

	      case elements.range:
	      case elements.dataSeries:
	        if (this.$eventSource == elements.dataSeries) switchRowsCols();
	        if (elements["legend.fromData"].getValue()) handlePieLegend();
	        if (elements["xAxis.fromData"].getValue()) setSilentValue(elements["xAxis.range"], getLeftColumn());
	        updateSeries();
	        break;

	      case elements["xAxis.fromData"]:
	        updateXaxisRange(val);
	        updateSeries(oldVal);
	        break;

	      case elements["legend.fromData"]:
	        updateLegendRange(val);
	        updateSeries(_isPie(elements.type.getValue()) ? oldVal : 0);
	        break;

	      case elements["legend.align"]:
	        updateValign(val);
	        break;

	      case elements["legend.valign"]:
	        updateAlign(val);
	        break;

	      case elements["xAxis.range"]:
	        if (elements["xAxis.fromData"].getValue()) setSilentValue(elements["xAxis.fromData"]);
	        updateRange(val, oldVal);
	        break;

	      case elements["legend.range"]:
	        if (elements["legend.fromData"].getValue()) setSilentValue(elements["legend.fromData"]);
	        updateRange(val, oldVal);
	        break;
	    }

	    var config = form.getValues();
	    view.views.update(chartEditor.viewId, config.range, config);
	  });
	  elements.series.attachEvent("onRangeChange", updateRange);

	  function handlePieLegend() {
	    if (elements["legend.fromData"].getValue()) {
	      var handler = _isPie(elements.type.getValue()) ? getLeftColumn : getTopRow;
	      setSilentValue(elements["legend.range"], handler());
	    }
	  }

	  function updateLegendRange(val) {
	    if (val) {
	      var legendRange = elements["legend.range"].getValue();
	      updateRange("", legendRange);
	    }

	    var handler = _isPie(elements.type.getValue()) ? getLeftColumn : getTopRow;
	    val = val ? handler() : "";
	    setSilentValue(elements["legend.range"], val);
	  }

	  function updateXaxisRange(val) {
	    if (val) {
	      var xAxisRange = elements["xAxis.range"].getValue();
	      updateRange("", xAxisRange);
	    }

	    val = val ? getLeftColumn() : "";
	    setSilentValue(elements["xAxis.range"], val);
	  }

	  function setSilentValue(element, val) {
	    element.blockEvent();
	    element.setValue(val);
	    element.unblockEvent();
	  }

	  function getLeftColumn() {
	    var data = elements.range.getValue();
	    var dataSeries = elements.dataSeries.getValue();
	    var legendRange = elements["legend.range"].getValue();
	    var leftColumn = "";

	    var series = _getSeries(view, data, dataSeries, {
	      legend: legendRange || ""
	    });

	    if (series.length) leftColumn = series[0].range;
	    return leftColumn;
	  }

	  function getTopRow() {
	    var data = _getDataParts(elements.range.getValue());

	    var dir = elements.dataSeries.getValue() == "rows";

	    var xAxisRange = _getDataParts(elements["xAxis.range"].getValue());

	    var topRow = [];
	    data.forEach(function (subdata) {
	      if (xAxisRange.indexOf(subdata) == -1) {
	        var part = range(subdata, view);

	        if (part) {
	          var _range = dir ? toRange(part[0], part[1], part[2], part[1], part[4]) : toRange(part[0], part[1], part[0], part[3], part[4]);

	          if (data.indexOf(_range) == -1) topRow.push(_range);
	        }
	      }
	    });
	    return topRow.join(",");
	  }

	  function updateRange(val, oldVal) {
	    var data = elements.range.getValue();
	    var legend = elements["legend.range"].getValue();
	    var xAxis = elements["xAxis.range"].getValue();
	    var dataSeries = elements.dataSeries.getValue();

	    var series = _getSeries(view, data, dataSeries, {
	      legend: legend,
	      xAxis: xAxis
	    });

	    oldVal = _getDataParts(oldVal);
	    data = _getDataParts(data).filter(function (val) {
	      return oldVal.indexOf(val) == -1;
	    });

	    if (val) {
	      val = _getDataParts(val);
	      val.forEach(function (range$$1) {
	        var exist = series.filter(function (obj) {
	          return obj.range == range$$1;
	        });
	        if (!exist.length) data.push(range$$1);
	      });
	    }

	    setSilentValue(elements.range, data.join(","));
	  }

	  function updateAlign(val) {
	    var align = elements["legend.align"];
	    var list = align.getList();

	    if (val == "middle") {
	      if (list.exists("center")) list.remove("center");
	    } else if (!list.exists("center")) list.add({
	      id: "center",
	      value: labels["chart-legend-center"]
	    }, 1);
	  }

	  function updateValign(val) {
	    var align = elements["legend.valign"];
	    var list = align.getList();

	    if (val == "center") {
	      if (list.exists("middle")) list.remove("middle");
	    } else if (!list.exists("middle")) list.add({
	      id: "middle",
	      value: labels["chart-legend-middle"]
	    }, 1);
	  }

	  function updateType(val) {
	    handlePieLegend();

	    var isPie = _isPie(val);

	    var isBar = val == "bar";
	    var series = elements.series;
	    var markersVisible = val == "radar" || val == "line" || val == "spline" || val == "scatter";
	    series.hideSubviews("marker", markersVisible);
	    series.hideSubviews("label", markersVisible || isBar || isPie);
	    series.hideSubviews("color", !isPie);
	    if (val == "area" || isBar) elements.stacked.show();else hideField(elements.stacked);
	    if (isBar) elements.horizontal.show();else hideField(elements.horizontal);
	    if (val == "radar") elements["scale.circle"].show();else hideField(elements["scale.circle"]);

	    if (isPie) {
	      hideBatch("axis");
	      hideBatch("pie", true);
	    } else {
	      hideBatch("axis", true);
	      hideBatch("pie");
	    }

	    if (isPie || val == "radar") hideBatch("axisTitle");else hideBatch("axisTitle", true);
	    switchRowsCols();
	  }

	  function updateSeries(oldXaxis) {
	    var data = elements.range.getValue();
	    var series = elements.series.getValue();
	    var legend = elements["legend.range"].getValue();
	    var xAxis = elements["xAxis.range"].getValue();
	    var dataSeries = elements.dataSeries.getValue();
	    series = _getSeries(view, data, dataSeries, {
	      series: series,
	      legend: legend,
	      xAxis: xAxis
	    }, oldXaxis);
	    elements.series.setValue(series);
	  }

	  function switchRowsCols() {
	    var dir = elements.dataSeries.getValue() == "rows";
	    var horizontal = elements.horizontal.getValue();

	    var pie = _isPie(elements.type.getValue());

	    if (!pie && dir || !dir && pie) {
	      elements["legend.fromData"].define("label", labels["chart-col-legend"]);
	      elements["xAxis.fromData"].define("label", labels["chart-row-" + (horizontal ? "yAxis" : "xAxis")]);
	    } else {
	      elements["legend.fromData"].define("label", labels["chart-row-legend"]);
	      elements["xAxis.fromData"].define("label", labels["chart-col-" + (horizontal ? "yAxis" : "xAxis")]);
	    }

	    elements["legend.fromData"].refresh();
	    elements["xAxis.fromData"].refresh();
	  }

	  function hideField(field) {
	    if (field.setValue) setSilentValue(field);
	    field.hide();
	  }

	  function hideBatch(batch, visible) {
	    form.queryView({
	      batch: batch
	    }, "all").forEach(function (field) {
	      if (visible) field.show();else hideField(field);
	    });
	  }

	  function inValues(values) {
	    [{
	      value: "H",
	      name: "horizontal"
	    }, {
	      value: "stacked"
	    }, {
	      value: "3D"
	    }].forEach(function (property) {
	      if (values.type.indexOf(property.value) != -1) {
	        values[property.name || property.value] = 1;
	        values.type = values.type.replace(property.value, "").toLowerCase();
	      }
	    });
	    return values;
	  }
	}

	function closeEditor(view) {
	  var chartEditor = view.$$("chartEditor");
	  view.callEvent("onUIEditStop", [chartEditor.viewId, "chart"]);
	  chartEditor.viewId = null;
	  view.$handleSelection = null;
	  chartEditor.hide();
	}

	function addRichselect(name, label, data) {
	  return {
	    view: "richselect",
	    name: name,
	    label: labels[label],
	    suggest: {
	      view: "ssheet-form-suggest",
	      data: data
	    }
	  };
	}

	function getTypes() {
	  return [{
	    id: "line",
	    value: labels["line-chart"]
	  }, {
	    id: "spline",
	    value: labels["spline-chart"]
	  }, {
	    id: "splineArea",
	    value: labels["splinearea-chart"]
	  }, {
	    id: "area",
	    value: labels["area-chart"]
	  }, {
	    id: "bar",
	    value: labels["bar-chart"]
	  }, {
	    id: "radar",
	    value: labels["radar-chart"]
	  }, {
	    id: "pie",
	    value: labels["pie-chart"]
	  }, {
	    id: "donut",
	    value: labels["donut-chart"]
	  }, {
	    id: "scatter",
	    value: labels["scatter-chart"]
	  }];
	}

	function getLegendAlign() {
	  return [{
	    id: "left",
	    value: labels["chart-legend-left"]
	  }, {
	    id: "center",
	    value: labels["chart-legend-center"]
	  }, {
	    id: "right",
	    value: labels["chart-legend-right"]
	  }];
	}

	function getLegendValign() {
	  return [{
	    id: "top",
	    value: labels["chart-legend-top"]
	  }, {
	    id: "middle",
	    value: labels["chart-legend-middle"]
	  }, {
	    id: "bottom",
	    value: labels["chart-legend-bottom"]
	  }];
	}

	var action$2 = "add-sparkline";
	var labels$1 = webix.i18n.spreadsheet.labels;
	var DialogBox$2 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show(box, form) {
	      this.cell = this.view.getSelectedId();
	      if (!this.cell) return false;
	      var els = form.elements;

	      this.view.$handleSelection = function (st, end, a, b) {
	        els.range.setValue(a + ":" + b);
	        return false;
	      };

	      els.range.setValue(""); //sync state of dialog to data with  the selected cell

	      var value = this.view.getCellValue(this.cell.row, this.cell.column);
	      var data = parseChart(value);

	      if (data) {
	        form.blockEvent();
	        els.type.setValue(data.type);
	        els.range.setValue(data.range);

	        if (data.color) {
	          els.color_def.setValue(data.color);
	          els.color_pos.setValue(data.color);
	        }

	        if (data.negativeColor) els.color_neg.setValue(data.negativeColor);
	        if (data.horizontal) els.horizontal.setValue(1);
	        form.unblockEvent();
	        this.renderPreview();
	      }

	      els.range.focus();
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      return {
	        view: "ssheet-dialog",
	        head: labels$1["sparkline-title"],
	        move: true,
	        position: "center",
	        body: {
	          view: "form",
	          visibleBatch: 1,
	          on: {
	            onChange: function () {
	              return _this.renderPreview();
	            }
	          },
	          elements: [{
	            view: "richselect",
	            name: "type",
	            label: labels$1["sparkline-type"],
	            value: "line",
	            labelPosition: "left",
	            suggest: {
	              view: "ssheet-form-suggest",
	              data: getTypes()
	            },
	            on: {
	              onChange: function (type) {
	                var form = this.getFormView();

	                switch (type) {
	                  case "pie":
	                  case "donut":
	                    form.showBatch(3);
	                    break;

	                  case "bar":
	                    form.showBatch(2);
	                    break;

	                  default:
	                    form.showBatch(1);
	                }
	              }
	            }
	          }, {
	            view: "text",
	            label: labels$1["sparkline-range"],
	            name: "range"
	          }, {
	            view: "ssheet-colorpicker",
	            label: labels$1["sparkline-color"],
	            name: "color_def",
	            id: "add_sparkline_color",
	            value: "#6666FF",
	            batch: "1"
	          }, {
	            view: "ssheet-colorpicker",
	            label: labels$1["sparkline-positive"],
	            name: "color_pos",
	            value: "#6666FF",
	            batch: "2"
	          }, {
	            view: "ssheet-colorpicker",
	            label: labels$1["sparkline-negative"],
	            name: "color_neg",
	            value: "#FF6666",
	            batch: "2"
	          }, {
	            view: "checkbox",
	            label: labels$1["horizontal-chart"],
	            name: "horizontal",
	            batch: "2"
	          }, {
	            view: "formlate",
	            name: "preview",
	            borderless: true,
	            css: "webix_ssheet_preview",
	            height: 50
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this.okClick();
	          },
	          onCancelClick: function () {
	            return _this.close();
	          }
	        }
	      };
	    }
	  }, {
	    key: "checkRange",
	    value: function checkRange(text) {
	      if (text && range(text, this.view)) return true;
	      this.view.alert({
	        text: labels$1["error-range"]
	      });
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var form = this.$dialog.getBody();
	      var data = form.getValues();
	      data.range = data.range.toUpperCase();

	      if (data.range && this.checkRange(data.range)) {
	        var config = this.sparkConfig(data);
	        this.view.addSparkline(this.cell.row, this.cell.column, config);
	        this.close();
	      }
	    }
	  }, {
	    key: "renderPreview",
	    value: function renderPreview() {
	      var form = this.$dialog.getBody();
	      var data = form.getValues();
	      data.range = data.range.toUpperCase();

	      if (data.range && this.checkRange(data.range)) {
	        var pos = range(data.range, this.view);

	        var values = this.view._mPage.getRange(pos[0] - 1, pos[1] - 1, pos[2] - 1, pos[3] - 1);

	        var config = this.sparkConfig(data, true);

	        for (var i = 0; i < values.length; i++) {
	          values[i] = values[i] || 0;
	        }

	        form.elements.preview.setValue(webix.Sparklines.getTemplate(config)(values, {
	          width: 200,
	          height: 40
	        }));
	      } else form.elements.preview.setValue("");
	    }
	  }, {
	    key: "sparkConfig",
	    value: function sparkConfig(config, preview) {
	      config = webix.copy(config);
	      var form = this.$dialog.getBody();

	      if (config.type === "bar") {
	        config.color = config.color_pos;
	        config.negativeColor = config.color_neg;
	      } else if (form.elements.color_def.isVisible()) config.color = config.color_def;else if (config.type == "donut" && preview) webix.extend(config, {
	        type: "pie",
	        donut: 1
	      }, true);

	      return config;
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var asw = /*#__PURE__*/Object.freeze({
		action: action$2,
		DialogBox: DialogBox$2
	});

	var action$3 = "add-range";
	var DialogBox$3 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show(box) {
	      var _this = this;

	      var form = box.$$("form");
	      form.clear();
	      form.clearValidation();
	      var elements = form.elements;
	      elements.name.focus();
	      var selectedCell = this.view.getSelectedRange();
	      if (selectedCell) selectedCell = escapeSheet(this.view.getActiveSheet()) + "!" + selectedCell;
	      form.setValues({
	        range: selectedCell,
	        scope: "$global"
	      });

	      this._updateData();

	      this.view._rangeDialog = true;

	      this.view.$handleSelection = function (st, end, a, b) {
	        form.elements.range.setValue(toSheetRange(a, b, _this.view.getActiveSheet()));
	        return false;
	      };
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	      this.view._rangeDialog = null;
	    }
	  }, {
	    key: "saveClick",
	    value: function saveClick() {
	      var view = this.view;
	      var form = this.$dialog.$$("form");
	      var data = form.getValues();

	      if (data.range) {
	        var rangeParts = data.range.split("!");
	        if (rangeParts.length == 1) rangeParts.unshift(escapeSheet(view.getActiveSheet()));
	        data.range = rangeParts[0] + "!" + rangeParts[1].toUpperCase();
	      }

	      data.name = data.name.toUpperCase();
	      form.setValues(data);

	      if (form.validate()) {
	        var table = this.$dialog.$$("table");

	        if (data.id) {
	          var oldData = table.getItem(data.id);
	          view.ranges.remove(oldData.name, this._getScope(oldData));
	          table.updateItem(data.id, data);
	        } else table.add(data);

	        view.ranges.add(data.name, data.range, this._getScope(data));
	        view.refresh();
	        table.unselect();
	        form.setValues({
	          scope: "$global"
	        });
	      }
	    }
	  }, {
	    key: "_getScope",
	    value: function _getScope(data) {
	      return data.scope == "$global" ? true : data.scope;
	    }
	  }, {
	    key: "removeRange",
	    value: function removeRange(id) {
	      var _this2 = this;

	      var view = this.view;
	      view.confirm({
	        text: webix.i18n.spreadsheet.labels["range-remove-confirm"]
	      }).then(function () {
	        var table = _this2.$dialog.$$("table");

	        var item = table.getItem(id);
	        view.ranges.remove(item.name, _this2._getScope(item));
	        view.refresh();
	        table.remove(id);
	      });
	    }
	  }, {
	    key: "editRange",
	    value: function editRange(id) {
	      var form = this.$dialog.$$("form");
	      var table = this.$dialog.$$("table");
	      form.clearValidation();
	      var item = webix.copy(table.getItem(id));
	      form.setValues(item);
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this3 = this;

	      this.view.attachEvent("onSheetRename", function (name, newName) {
	        return _this3._updateData(name, newName);
	      });
	      this.view.attachEvent("onSheetRemove", function (name) {
	        return _this3._updateData(name);
	      });
	      this.view.attachEvent("onSheetAdd", function () {
	        return _this3._updateData();
	      });
	      var locale = webix.i18n.spreadsheet.labels;
	      var theform = {
	        padding: 0,
	        type: "clean",
	        cols: [{
	          view: "ssheet-dialog-table",
	          id: "table",
	          borderless: true,
	          columns: [{
	            id: "name",
	            header: locale["range-name"],
	            width: 120
	          }, {
	            id: "range",
	            header: locale["range-cells"],
	            width: 150
	          }, {
	            id: "scope",
	            header: locale["range-scope"],
	            width: 95,
	            template: function (obj) {
	              return obj.scope == "$global" ? locale["range-global"] : obj.scope;
	            }
	          }, {
	            template: "<span class='webix_icon ssheet_ranges_edit wxi-pencil'></span>",
	            width: 44
	          }, {
	            template: "<span class='webix_icon ssheet_ranges_edit wxi-trash'></span>",
	            width: 44
	          }],
	          autowidth: true,
	          height: 200,
	          select: "row",
	          on: {
	            onBeforeSelect: function (id) {
	              return id == _this3.$dialog.$$("form").getValues().id;
	            }
	          },
	          onClick: {
	            "wxi-trash": function (ev, id) {
	              return _this3.removeRange(id);
	            },
	            "wxi-pencil": function (ev, id) {
	              return _this3.editRange(id);
	            }
	          }
	        }, {
	          width: 270,
	          view: "form",
	          id: "form",
	          rules: {
	            name: function (_, obj) {
	              var notUnique = _this3.$dialog.$$("table").find(function (item) {
	                return item.name == obj.name && item.scope == obj.scope && item.id != obj.id;
	              }, true);

	              return !notUnique && !getLastCharIndex(obj.name);
	            },
	            range: isRange,
	            scope: webix.rules.isNotEmpty
	          },
	          elementsConfig: {
	            labelWidth: 95
	          },
	          elements: [{
	            view: "text",
	            name: "name",
	            label: locale["range-name"]
	          }, {
	            view: "text",
	            name: "range",
	            id: "range",
	            label: locale["range-cells"],
	            on: {
	              onFocus: function () {
	                return _this3.view.showCell(_this3.$dialog.$$("range").getValue(), true);
	              }
	            }
	          }, {
	            view: "richselect",
	            name: "scope",
	            id: "sheets",
	            label: locale["range-scope"],
	            suggest: {
	              view: "ssheet-form-suggest",
	              body: {
	                data: []
	              }
	            }
	          }]
	        }]
	      };
	      return {
	        view: "ssheet-dialog",
	        move: true,
	        head: webix.i18n.spreadsheet.labels["range-title"],
	        autoheight: true,
	        width: 800,
	        position: "center",
	        body: theform,
	        on: {
	          onSaveClick: function () {
	            return _this3.saveClick();
	          },
	          onCancelClick: function () {
	            return _this3.close();
	          }
	        }
	      };
	    }
	  }, {
	    key: "_updateData",
	    value: function _updateData(name, newName) {
	      if (!this.$dialog.isVisible()) return;

	      var ranges = this.view._mData.getRanges();

	      var locale = webix.i18n.spreadsheet.labels;
	      var table = this.$dialog.$$("table");
	      var form = this.$dialog.$$("form");
	      var editRange = table.getItem(form.getValues().id);

	      if (editRange) {
	        var rangeName = editRange.name;
	        if (name == editRange.scope) rangeName = newName ? newName + "!" + rangeName : null;else rangeName = editRange.scope + "!" + rangeName;
	        editRange = rangeName ? ranges.get(rangeName) : null;
	      }

	      table.clearAll();
	      var allRanges = ranges.serialize();
	      var data = [];
	      var selectedId;

	      for (var i = 0; i < allRanges.length; i++) {
	        var id = i + 1;

	        var _allRanges$i = _slicedToArray(allRanges[i], 2),
	            _name = _allRanges$i[0],
	            range$$1 = _allRanges$i[1];

	        if (editRange && ranges.get(_name) == editRange) selectedId = id;

	        var nameParts = _name.split("!");

	        data.push({
	          scope: nameParts.length == 1 ? "$global" : nameParts[0],
	          name: nameParts[1] || nameParts[0],
	          range: range$$1,
	          id: id
	        });
	      }

	      table.parse(data);
	      form.setValues({
	        id: selectedId
	      }, true);
	      if (selectedId) table.select(selectedId);
	      var select = this.$dialog.$$("sheets");
	      var selectList = select.getList();
	      selectList.clearAll();
	      var sheets = [{
	        id: "$global",
	        value: locale["range-global"]
	      }];

	      this.view._sheets.forEach(function (sheet) {
	        sheets.push({
	          id: sheet.name,
	          value: sheet.name
	        });
	      });

	      selectList.parse(sheets);

	      if (name) {
	        var range$$1 = this.$dialog.$$("range");
	        var rangeVal = range$$1.getValue(); //remove sheet

	        newName = newName || this.view.getActiveSheet();
	        if (rangeVal.indexOf(escapeSheet(name) + "!") == 0) range$$1.setValue(escapeSheet(newName) + "!" + rangeVal.split("!")[1]);
	        if (select.getValue() == name) select.setValue(newName);
	      }
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var rgs = /*#__PURE__*/Object.freeze({
		action: action$3,
		DialogBox: DialogBox$3
	});

	var action$4 = "add-dropdown";
	var DialogBox$4 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show() {
	      var form = this.$dialog.$$("form");
	      this.cell = this.view.getSelectedId(true);
	      if (!this.cell.length) return false;
	      form.clear(); //restore previosly selected range

	      var value = this.view.getCellEditor(this.cell[0].row, this.cell[0].column);
	      if (value) form.setValues({
	        range: value.options,
	        empty: value.empty
	      });

	      this.view.$handleSelection = function (st, end, a, b) {
	        form.elements.range.setValue(a + ":" + b);
	        return false;
	      };

	      form.elements.range.focus();
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      return {
	        view: "ssheet-dialog",
	        position: "center",
	        head: webix.i18n.spreadsheet.labels["dropdown-title"],
	        move: true,
	        body: {
	          padding: 0,
	          view: "form",
	          id: "form",
	          elementsConfig: {
	            labelWidth: 130
	          },
	          rows: [{
	            view: "text",
	            label: webix.i18n.spreadsheet.labels["dropdown-range"],
	            name: "range"
	          }, {
	            view: "checkbox",
	            label: webix.i18n.spreadsheet.labels["dropdown-empty-option"],
	            name: "empty"
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this.okClick();
	          },
	          onCancelClick: function () {
	            return _this.close();
	          }
	        }
	      };
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var values = this.$dialog.$$("form").getValues();
	      if (!range(values.range, this.view)) this.view.alert({
	        text: webix.i18n.spreadsheet.labels["error-range"],
	        type: "alert-error"
	      });else {
	        group.set(function () {
	          for (var i = 0; i < this.cell.length; i++) {
	            this.view.setCellEditor(this.cell[i].row, this.cell[i].column, {
	              editor: "ss_richselect",
	              options: values.range,
	              empty: values.empty
	            });
	          }
	        }, this);
	        this.close();
	      }
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var dpd = /*#__PURE__*/Object.freeze({
		action: action$4,
		DialogBox: DialogBox$4
	});

	var Ranges =
	/*#__PURE__*/
	function () {
	  function Ranges(view) {
	    _classCallCheck(this, Ranges);

	    this._master = view;
	  }

	  _createClass(Ranges, [{
	    key: "clear",
	    value: function clear(scope) {
	      var _this = this;

	      var sheet = typeof scope == "string" ? scope : this._master.getActiveSheet();
	      var ranges = this.serialize(sheet);
	      ranges.forEach(function (range$$1) {
	        if (scope === true) {
	          if (range$$1[2]) _this.remove(range$$1[0], scope);
	          return;
	        } else _this.remove(range$$1[0], scope);
	      });
	    }
	  }, {
	    key: "_normalizeName",
	    value: function _normalizeName(name, scope) {
	      if (scope !== true) name = (scope || this._master.getActiveSheet()) + "!" + name;
	      return name;
	    }
	  }, {
	    key: "_normalizeRange",
	    value: function _normalizeRange(range$$1, scope) {
	      var rangeParts = range$$1.split("!");
	      if (rangeParts.length == 1) range$$1 = (typeof scope == "string" ? scope : this._master.getActiveSheet()) + "!" + range$$1;
	      return range$$1;
	    }
	  }, {
	    key: "add",
	    value: function add(name, range$$1, scope) {
	      var view = this._master;
	      view.callEvent("onAfterRangeSet", [name, range$$1, scope]);
	      name = this._normalizeName(name, scope);

	      view._mData.getRanges().add(name, this._normalizeRange(range$$1, scope));

	      view.callEvent("onMathRefresh", []);
	    }
	  }, {
	    key: "getCode",
	    value: function getCode(name, scope) {
	      name = this._normalizeName(name, scope);

	      var range$$1 = this._master._mData.getRanges().get(name);

	      if (range$$1) return range$$1.source;
	    }
	  }, {
	    key: "remove",
	    value: function remove(name, scope) {
	      name = this._normalizeName(name, scope);

	      this._master._mData.getRanges().remove(name);

	      this._master.callEvent("onMathRefresh", []);
	    }
	  }, {
	    key: "parse",
	    value: function parse(data, sheet) {
	      if (!data) return;

	      for (var i = 0; i < data.length; i++) {
	        var ranges = this._master._mData.getRanges();

	        var _data$i = _slicedToArray(data[i], 3),
	            name = _data$i[0],
	            range$$1 = _data$i[1],
	            globalRange = _data$i[2];

	        name = this._normalizeName(name, globalRange || sheet);
	        if (!ranges.get(name)) ranges.add(name, this._normalizeRange(range$$1, sheet));
	      }
	    }
	  }, {
	    key: "serialize",
	    value: function serialize$$1(sheet) {
	      sheet = sheet || this._master.getActiveSheet();

	      var allRanges = this._master._mData.getRanges().serialize();

	      var out = [];

	      for (var i = 0; i < allRanges.length; i++) {
	        var _arr = allRanges[i];

	        var nameParts = _arr[0].split("!");

	        var globalRange = nameParts.length == 1;
	        if (globalRange || nameParts[0] == sheet) out.push([nameParts[globalRange ? 0 : 1], _arr[1], globalRange]);
	      }

	      return out;
	    }
	  }, {
	    key: "getRanges",
	    value: function getRanges(sheet) {
	      var data = this.serialize(sheet);
	      return data.map(function (arr) {
	        return {
	          name: arr[0],
	          range: arr[1],
	          global: arr[2]
	        };
	      });
	    }
	  }]);

	  return Ranges;
	}();

	function init$h(view) {
	  view.ranges = new Ranges(view);
	  view.attachEvent("onDataSerialize", function (data) {
	    data.ranges = view.ranges.serialize();
	  });
	}

	function nullFilter() {
	  var locale = webix.i18n.spreadsheet.labels;
	  return {
	    id: "$empty",
	    value: "",
	    $value: "<span class='webix_ssheet_empty'>" + locale["dropdown-empty"] + "</span>"
	  };
	}

	function getRange$1(view, r1, c1, r2, c2, spans) {
	  var out = [];
	  var activeSheet = view._mPage === this;

	  for (var i = r1 - 1; i <= r2 - 1; i++) {
	    for (var j = c1 - 1; j <= c2 - 1; j++) {
	      var inSpan = void 0;

	      for (var s = 0; s < spans.length; s++) {
	        var span = spans[s];
	        var row = i + 1;
	        var col = j + 1;

	        if (!(row == span[0] && col == span[1]) && row >= span[0] && row < span[0] + span[3] && col >= span[1] && col < span[1] + span[2]) {
	          inSpan = true;
	          break;
	        }
	      }

	      if (inSpan) continue;
	      var obj = this.getCell(i, j);
	      var cell = void 0;
	      if (!obj) cell = {
	        value: ""
	      };else cell = webix.copy(obj);
	      if (activeSheet) cell.$value = cell_template(view, {
	        id: i + 1
	      }, null, null, {
	        id: j + 1
	      }, true);else delete cell.format;
	      cell.id = cell.value;
	      out.push(cell);
	    }
	  }

	  return out;
	}

	function rangeOptions(view, text, extra) {
	  var values = [];

	  if (typeof text == "string") {
	    var pos = range(text, view);

	    if (pos) {
	      var page = view._mPage;
	      if (pos[4]) page = view._mData.getPage(pos[4]);

	      if (page) {
	        var spans = (page == view._mPage ? serialize$2(view, {}) : find(view._sheets, function (sheet) {
	          return sheet.name == pos[4];
	        }).content).spans;
	        values = getRange$1.apply(page, [view, pos[0], pos[1], pos[2], pos[3], spans]);
	      }
	    }
	  } else if (webix.isArray(text)) for (var i = 0; i < text.length; i++) {
	    var v = text[i] || text[i] === 0 ? text[i] : "";
	    v = _typeof(v) === "object" ? webix.copy(v) : {
	      id: v,
	      value: v
	    };
	    values.push(v);
	  }

	  var test = {};

	  for (var _i = values.length - 1; _i >= 0; _i--) {
	    var boolean = typeof values[_i].value === "boolean";
	    if (boolean) values[_i].value *= 1;
	    if (boolean || values[_i].id === 0) values[_i].id = String(values[_i].value);

	    if (extra && extra.unique) {
	      if (test[values[_i].id]) values.splice(_i, 1);else test[values[_i].id] = true;
	    }
	  }

	  if (extra) {
	    var empty = false;

	    for (var _i2 = values.length - 1; _i2 >= 0; _i2--) {
	      var value = values[_i2].value;

	      if (!value && value !== 0) {
	        values.splice(_i2, 1);
	        empty = true;
	        continue;
	      }

	      values[_i2].value = String(value);
	    }

	    if (extra.order) values.sort(function (objA, objB) {
	      var sorters = view.$$("cells").data.sorting.as;
	      var a = objA.value;
	      var b = objB.value;
	      return webix.rules.isNumber(a) && webix.rules.isNumber(b) ? sorters.int(a, b) : sorters.string(a, b);
	    });
	    if (empty && extra.filter) values.unshift(nullFilter());
	    if (extra.empty) values.unshift({
	      id: "$empty",
	      $empty: true,
	      value: ""
	    });
	  }

	  return values;
	}

	var m16b = /*#__PURE__*/Object.freeze({
		init: init$h,
		rangeOptions: rangeOptions
	});

	function init$i(view) {
	  var table = view._table;
	  view.attachEvent("onReset", function () {
	    return reset$6(view);
	  });
	  reset$6(view);

	  table.on_click.ssheet_filter_sign = function (e, id) {
	    var filter = table._ssFilters[id.row][id.column];
	    var mode = filter.mode || getFilterMode(view, id.row, id.column);
	    var options = [];

	    if (filter.options) {
	      if (typeof filter.options == "string") options = rangeOptions(view, filter.options, {
	        unique: true,
	        order: true,
	        filter: true
	      });else if (webix.isArray(filter.options)) options = rangeOptions(view, filter.options, {
	        filter: true
	      });
	    }

	    view.callEvent("onCommand", [{
	      id: "start-filter",
	      cell: id,
	      mode: mode,
	      options: options,
	      filter: filter
	    }]);
	  };

	  table.on_dblclick.ssheet_filter_sign = function () {
	    return false;
	  };

	  view.attachEvent("onCommand", function (cm) {
	    if (cm.id === "create-filter") toggleFilters(view);
	  });
	  var refilter = false;
	  view.attachEvent("onUndo", function (type, row, column, value) {
	    if (type == "filter") {
	      value = _typeof(value) == "object" ? value : null;
	      view.setCellFilter(row, column, value);
	      refilter = true;
	    } else if (type == "apply-filter") {
	      var filter = view.getCellFilter(row, column);
	      filter.value = value;
	      delete filter.handler;

	      if (value && value.condition) {
	        var mode = filter.mode || getFilterMode(view, row, column);
	        filter.handler = getFilterFunction(mode, filter.value);
	      }

	      refilter = true; // update css

	      var add = value && isValueActive(value);
	      table[add ? "addCellCss" : "removeCellCss"](row, column, "ss_filter_active");
	      setSpanCss(view, row, column, "ss_filter_active", add);
	    }
	  });
	  view.attachEvent("onAfterUndo", function () {
	    if (refilter) {
	      view.filterSpreadSheet();
	      refilter = false;
	    }
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "filter") {
	      setSpanCss(view, p.row, p.column, "ss_filter", p.newValue);
	      setSpanCss(view, p.row, p.column, "ss_filter_active", p.newValue && p.newValue.value && isValueActive(p.newValue.value));
	      markBarFilter(view);
	    } else if (action == "before-grid-change") updatePosition$3(view, p.name, p.inc, p.data, p.start);
	  });
	}

	function reset$6(view) {
	  view._table._ssFilters = {};
	  markBarFilter(view);
	}

	function getFilters(table) {
	  var filters = table._ssFilters;
	  var all = [];

	  for (var row in filters) {
	    for (var column in filters[row]) {
	      all.push(filters[row][column]);
	    }
	  }

	  return all;
	}
	function serialize$5(view, data) {
	  var filters = getFilters(view._table);
	  var result = data.filters = [];

	  for (var i = 0; i < filters.length; i++) {
	    var _filters$i = filters[i],
	        row = _filters$i.row,
	        column = _filters$i.column,
	        options = _filters$i.options,
	        mode = _filters$i.mode,
	        value = _filters$i.value,
	        lastRow = _filters$i.lastRow;
	    value = value && webix.copy(value);
	    result.push([row, column, {
	      value: value,
	      options: options,
	      mode: mode,
	      lastRow: lastRow
	    }]);
	  }
	}
	function load$3(view, data) {
	  var filters = data.filters;

	  if (filters) {
	    for (var i = 0; i < filters.length; i++) {
	      view.setCellFilter(filters[i][0], filters[i][1], filters[i][2] || {
	        options: ""
	      });
	    }

	    view.filterSpreadSheet();
	  }
	}
	function clearFilters(view, range$$1) {
	  var refilter = false;
	  eachRange(range$$1, view, function (view, cell) {
	    var filter = view._table._ssFilters[cell.row];

	    if (filter) {
	      if (filter[cell.column]) {
	        refilter = true;
	        delete filter[cell.column];

	        view._table.removeCellCss(cell.row, cell.column, "ss_filter");

	        view._table.removeCellCss(cell.row, cell.column, "ss_filter_active");

	        setSpanCss(view, cell.row, cell.column, "ss_filter", false);
	        setSpanCss(view, cell.row, cell.column, "ss_filter_active", false);
	      }
	    }
	  });
	  if (refilter) view.filterSpreadSheet();
	}
	function isFilter(view, row, column) {
	  var filters = view._table._ssFilters;
	  return filters[row] && !!filters[row][column];
	}
	function calibrateRange(view, row, column, range$$1, lastRow) {
	  if (!range$$1) range$$1 = {
	    end: {
	      row: row
	    }
	  };

	  if (range$$1.end) {
	    var endRow = range$$1.end.row;
	    range$$1 = getFilterRange(view, row, column, endRow, lastRow);
	  }

	  return range$$1;
	}
	function isValueActive(value) {
	  return !!(value.includes || value.condition && value.condition.filter);
	}

	function isFilterExists(view) {
	  var filters = view._table._ssFilters;

	  for (var row in filters) {
	    for (var column in filters[row]) {
	      if (filters[row][column]) return true;
	    }
	  }

	  return false;
	}

	function markBarFilter(view) {
	  var value = isFilterExists(view);
	  view.callEvent("onCommand", [{
	    id: "toolbar-update",
	    name: "create-filter",
	    value: value
	  }]);
	}

	function getFilterRange(view, row, column, endRow, lastRow) {
	  var span = view._table.getSpan(row, column);

	  if (row === endRow || span && row == endRow - span[3] + 1) {
	    for (endRow = row; endRow < view.config.rowCount; endRow++) {
	      var r = endRow + 1;

	      var _span = view._table.getSpan(r, column);

	      if (_span && _span[0] != r) continue;
	      var value = view.getCellValue(r, column);
	      if (!value && value !== 0) break;
	    }
	  }

	  if (lastRow) return endRow;
	  return toRange(row + 1, column, endRow, column);
	}

	function getFilterMode(view, row, column) {
	  for (var i = row + 1; i < view.config.rowCount; i++) {
	    var value = view.getCellValue(i, column);

	    if (value || value === 0) {
	      var type = getType(view, i, column);
	      return type == "number" || type == "date" ? type : "text";
	    } else if (value !== "") break;
	  }

	  return "text";
	}

	function toggleFilters(view) {
	  var range$$1 = view._table.getSelectArea();

	  if (isFilterExists(view)) {
	    group.set(function () {
	      return view.removeFilters();
	    });
	    if (range$$1) view._table.addSelectArea(range$$1.start, range$$1.end);
	  } else if (range$$1) group.set(function () {
	    var row = range$$1.start.row;

	    for (var i = range$$1.start.column; i <= range$$1.end.column; i++) {
	      view.setCellFilter(row, i, {
	        options: range$$1,
	        lastRow: calibrateRange(view, row, i, range$$1, true)
	      });
	    }
	  });

	  markBarFilter(view);
	}

	function updatePosition$3(view, name, inc, data, start) {
	  var filters = data.filters;

	  if (inc) {
	    for (var i = filters.length - 1; i >= 0; i--) {
	      var _filters$i2 = _slicedToArray(filters[i], 3),
	          row = _filters$i2[0],
	          column = _filters$i2[1],
	          filter = _filters$i2[2];

	      if (name == "row" && row >= start.row || name == "column" && column >= start.column) {
	        if (name == "row") {
	          if (row < start.row - inc) {
	            //delete filter mark if row was deleted
	            filters.splice(i, 1);
	            continue;
	          } else //update mark position if upper row was deleted
	            filters[i][0] = row * 1 + inc;

	          if (filter.lastRow) filter.lastRow += inc;
	        } else if (name == "column") {
	          if (column < start.column - inc) {
	            filters.splice(i, 1);
	            continue;
	          } else filters[i][1] = column * 1 + inc;
	        }

	        filter.options = changeRange(filter.options, name, inc, start);
	      }
	    }
	  }
	}

	function pasteFilter(view, extra, row, col, cutted, translate) {
	  var filter = extra.filter;
	  filter.options = changeRange(filter.options, "row", translate.row, {
	    column: extra.col,
	    row: extra.row
	  });
	  filter.options = changeRange(filter.options, "column", translate.column, {
	    column: extra.col,
	    row: extra.row
	  });
	  delete filter.value;
	  delete filter.handler;
	  view.setCellFilter(row, col, filter);
	}
	function getSingleOption(mode, type) {
	  var c = conditions[mode];

	  for (var i = 0; i < c.length; i++) {
	    if (c[i].id == type) return c[i];
	  }
	}
	function getConditions(name) {
	  return webix.copy(conditions[name]);
	}
	function getFilterFunction(mode, value) {
	  var includes = value.includes,
	      condition = value.condition;
	  var opt = getSingleOption(mode, condition.type);
	  var handler = opt ? opt.handler : function () {
	    return true;
	  };

	  if (includes) {
	    for (var i = 0; i < includes.length; i++) {
	      includes[i] = String(includes[i]);
	    }
	  }

	  return function (value) {
	    if (includes) {
	      return includes.indexOf(value) !== -1;
	    } else {
	      return condition.filter === "" || handler(value, condition.filter);
	    }
	  };
	}

	var m5$1 = /*#__PURE__*/Object.freeze({
		init: init$i,
		getFilters: getFilters,
		serialize: serialize$5,
		load: load$3,
		clearFilters: clearFilters,
		isFilter: isFilter,
		calibrateRange: calibrateRange,
		isValueActive: isValueActive,
		getFilterMode: getFilterMode,
		pasteFilter: pasteFilter,
		getSingleOption: getSingleOption,
		getConditions: getConditions,
		getFilterFunction: getFilterFunction
	});

	var action$5 = "start-filter";
	var DialogBox$5 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "open",
	    value: function open(action) {
	      var _this = this;

	      this.cell = action.cell;
	      this.$mode = action.mode;
	      this.$filter = action.filter; // cell not provided

	      if (!this.cell || // cell is locked
	      this.view.isCellLocked(this.cell.row, this.cell.column)) {
	        return false;
	      }

	      if (!this.$dialog) {
	        this.$dialog = webix.ui(this.$init());

	        this.view._destroy_with_me.push(this.$dialog);

	        this.$dialog.attachEvent("onHide", function () {
	          return _this.$hide();
	        });
	        var table = this.view.$$("cells");
	        table.attachEvent("onScrollY", function () {
	          return _this.syncScroll();
	        });
	        table.attachEvent("onScrollX", function () {
	          return _this.syncScroll();
	        });
	      }

	      if (this.$show(this.$filter.value, action.options) === false) return this.close();
	      this.$dialog.show(this._getTargetNode());
	    }
	  }, {
	    key: "_getTargetNode",
	    value: function _getTargetNode() {
	      var table = this.view.$$("cells");
	      var span = table.getSpan(this.cell.row, this.cell.column);
	      return span ? table.getSpanNode(this.cell) : table.getItemNode(this.cell);
	    }
	  }, {
	    key: "$show",
	    value: function $show(value, options) {
	      var list = this.getList();
	      var filter = this.getFilter();

	      if (filter.config.mode !== this.$mode) {
	        filter.define("conditions", this.getConditions(this.$mode));
	        filter.define("mode", this.$mode);
	      } // if the filter mode for the current column has been changed - reset the value


	      var type = value && value.conditions && value.conditions.type;
	      if (type && !getSingleOption(this.$mode, type)) value = "";
	      list.clearAll();
	      list.data.importData(options); // filter data has been changed - reset value

	      filter.config.value = "";
	      filter.setValue(webix.copy(value || {}));
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this2 = this;

	      var locale = webix.i18n.spreadsheet.labels;
	      return {
	        view: "popup",
	        css: "ssheet_filter",
	        padding: 7,
	        relative: "right",
	        body: {
	          margin: 4,
	          rows: [{
	            view: "filter",
	            field: "value",
	            mode: "text",
	            conditions: this.getConditions("text"),
	            inputs: ["text", {
	              view: "ssheet-datepicker",
	              timepicker: true,
	              batch: "datepicker",
	              on: {
	                onChange: function () {
	                  return _this2.getFilter().applyFilter();
	                }
	              }
	            }, {
	              view: "ssheet-daterangepicker",
	              timepicker: true,
	              batch: "daterangepicker",
	              on: {
	                onChange: function () {
	                  return _this2.getFilter().applyFilter();
	                }
	              }
	            }],
	            template: function (obj) {
	              return obj.$value || obj.value;
	            }
	          }, {
	            cols: [{}, {
	              view: "button",
	              label: locale["cancel"],
	              autowidth: true,
	              css: "webix_transparent",
	              on: {
	                "onItemClick": function () {
	                  return _this2.close();
	                }
	              }
	            }, {
	              view: "button",
	              label: locale["apply"],
	              autowidth: true,
	              css: "webix_secondary",
	              on: {
	                "onItemClick": function () {
	                  return _this2.applyFilter();
	                }
	              }
	            }]
	          }]
	        }
	      };
	    }
	  }, {
	    key: "applyFilter",
	    value: function applyFilter() {
	      var filter = this.getFilter();
	      var oldValue = this.$filter.value;
	      var value = this.$filter.value = filter.getValue();
	      this.$filter.handler = getFilterFunction(this.$mode, value);
	      this.view.filterSpreadSheet();
	      this.view.callEvent("onAction", ["apply-filter", {
	        row: this.cell.row,
	        column: this.cell.column,
	        value: oldValue,
	        newValue: value
	      }]);
	      this.setCellStyle(this.cell.row, this.cell.column, "ss_filter_active", isValueActive(value));
	      this.close();
	    }
	  }, {
	    key: "setCellStyle",
	    value: function setCellStyle(row, column, css, add) {
	      var table = this.view.$$("cells");
	      var span = this.getSpan(table, row, column);

	      if (span) {
	        if (add) {
	          if (span[3].indexOf(css) == -1) span[3] += " " + css;
	        } else {
	          span[3] = span[3].replace(" " + css, "");
	        }
	      }

	      table[add ? "addCellCss" : "removeCellCss"](row, column, css);
	    }
	  }, {
	    key: "getSpan",
	    value: function getSpan(table, row, column) {
	      var item = table.getSpan()[row];
	      if (item) return item[column];
	    }
	  }, {
	    key: "getList",
	    value: function getList() {
	      return this.getFilter().getChildViews()[2];
	    }
	  }, {
	    key: "getFilter",
	    value: function getFilter() {
	      return this.$dialog.getBody().getChildViews()[0];
	    }
	  }, {
	    key: "syncScroll",
	    value: function syncScroll() {
	      if (this.$dialog.isVisible()) {
	        var node = this._getTargetNode();

	        var table = this.view.$$("cells");
	        var isHidden = false;

	        if (node) {
	          var nodeOffset = webix.html.offset(node);
	          var tableOffset = webix.html.offset(table.$view.getElementsByClassName("webix_ss_body")[0]);
	          var ydiff = nodeOffset.y - tableOffset.y;
	          var xdiff = nodeOffset.x - tableOffset.x + nodeOffset.width;
	          isHidden = ydiff < 0 || ydiff + nodeOffset.height > tableOffset.height || xdiff < 0 || xdiff - nodeOffset.width > tableOffset.width - webix.env.scrollSize;
	        }

	        if (!node || isHidden) this.$dialog.show({
	          x: -9999,
	          y: -9999
	        });else this.$dialog.show(node);
	      }
	    }
	  }, {
	    key: "getConditions",
	    value: function getConditions$$1(name) {
	      var locale = webix.i18n.filter;
	      var conditions = getConditions(name);

	      for (var i = 0; i < conditions.length; i++) {
	        if (conditions[i].id) conditions[i].value = locale[conditions[i].id];
	      }

	      return conditions;
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var flt = /*#__PURE__*/Object.freeze({
		action: action$5,
		DialogBox: DialogBox$5
	});

	var action$6 = "custom";
	var DialogBox$6 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show() {
	      this.form = this.$dialog.$$("form");
	      this.list = this.$dialog.$$("list");
	      this.preview = this.$dialog.$$("preview");
	      this.cell = this.view.getSelectedId(true);
	      if (!this.cell.length) return false;
	      this.fillForm(this.view);

	      this.view.$handleSelection = function () {
	        return false;
	      };
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      var i18n = webix.i18n.spreadsheet;
	      var labelsLocale = i18n.labels;
	      var formatsLocale = i18n.formats;
	      var docsLink = "https://webix-guides.gitbook.io/spreadsheet-user-guide/formatting_numbers#custom-number-format";
	      var delimiters = getDelimiters("int");
	      var commonConfig = [{
	        name: "zeros",
	        view: "counter",
	        css: "webix_ssheet_counter",
	        label: labelsLocale["decimal-places"],
	        value: 0,
	        batch: "common"
	      }, {
	        name: "separator",
	        view: "checkbox",
	        label: labelsLocale["separator"],
	        batch: "common"
	      }, {
	        view: "richselect",
	        name: "symbol",
	        label: labelsLocale["currency-symbol"],
	        options: currencies,
	        batch: "common"
	      }, {
	        view: "formlist",
	        label: labelsLocale["negative"],
	        height: 160,
	        name: "negative",
	        batch: "common",
	        css: "webix_ssheet_format_negative",
	        template: function (obj) {
	          if (_this.list) {
	            var format = _this.getFormat(obj.id);

	            format = format2code(format.fmt, format.delimiters);
	            var style = {
	              css: ""
	            };
	            var value = format(-1234.56789, style);
	            return "<span class='" + style.css + "'>" + value + "</span>";
	          }
	        },
	        data: [{
	          id: 1
	        }, {
	          id: 2
	        }, {
	          id: 3
	        }, {
	          id: 4
	        }]
	      }];
	      var customConfig = [{
	        view: "text",
	        label: labelsLocale["format-pattern"],
	        name: "format",
	        labelPosition: "top",
	        batch: "custom",
	        placeholder: "[>100]0" + delimiters.groupSign + "000" + delimiters.decimalSign + "00;[>0]None"
	      }, {
	        id: "docs",
	        template: "<a href='" + docsLink + "' target='_blank' class = 'docs'>" + labelsLocale["format-docs"] + "</a>",
	        borderless: true,
	        batch: "custom"
	      }];
	      var dateConfig = [{
	        name: "date",
	        batch: "date",
	        view: "formlist",
	        labelWidth: 90,
	        height: 160,
	        label: labelsLocale["date-format"],
	        css: "webix_ssheet_format_date",
	        template: function (obj) {
	          return format2code(obj.value, delimiters)(45000);
	        },
	        data: [formatsLocale.dateFormat, formatsLocale.timeFormat, formatsLocale.fullDateFormat, formatsLocale.longDateFormat]
	      }];
	      return {
	        view: "ssheet-dialog",
	        position: "center",
	        width: 460,
	        head: labelsLocale["format-title"],
	        move: true,
	        body: {
	          padding: 0,
	          cols: [{
	            view: "list",
	            id: "list",
	            css: "webix_ssheet_format_type",
	            width: 120,
	            scroll: false,
	            data: this.getFormats(),
	            select: true,
	            on: {
	              onSelectChange: function (id) {
	                _this.updateForm();

	                switch (id[0]) {
	                  case "custom":
	                  case "date":
	                    _this.form.showBatch(id[0]);

	                    break;

	                  default:
	                    {
	                      var elements = _this.form.elements;

	                      _this.form.showBatch("common");

	                      elements.separator[id[0] == "percent" ? "hide" : "show"]();
	                      elements.symbol[id[0] == "price" ? "show" : "hide"]();
	                    }
	                }
	              }
	            }
	          }, {
	            view: "form",
	            id: "form",
	            height: 340,
	            paddingY: 0,
	            paddingX: 20,
	            elements: [{
	              id: "preview",
	              template: function (obj) {
	                if (obj.value == i18n.table["format-error"]) return obj.value;
	                return "<span class ='" + obj.css + "'>" + obj.value + "</span>";
	              },
	              css: "webix_ssheet_format_preview",
	              autoheight: true,
	              borderless: true
	            }].concat(commonConfig, customConfig, dateConfig),
	            elementsConfig: {
	              labelWidth: 140
	            },
	            on: {
	              onChange: function () {
	                return _this.updateForm();
	              }
	            }
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this.okClick();
	          },
	          onCancelClick: function () {
	            return _this.closeWin();
	          }
	        }
	      };
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var _this2 = this;

	      var type = this.list.getSelectedId();
	      var values = type == "custom" ? {
	        format: this.form.getValues().format
	      } : this.form.getValues();
	      values.type = type;
	      group.set(function () {
	        for (var i = 0; i < _this2.cell.length; i++) {
	          addFormat(_this2.view, _this2.cell[i].row, _this2.cell[i].column, values.format, values);
	        }
	      });
	      this.view.$$("cells").refresh();
	      this.closeWin();
	    }
	  }, {
	    key: "closeWin",
	    value: function closeWin() {
	      var format = getFormat(this.view, this.cell[0].row, this.cell[0].column);
	      var name = format || "common"; //default format

	      if (!isCustom(name)) this.view.callEvent("onCommand", [{
	        id: "toolbar-update",
	        name: "format",
	        value: name
	      }]);
	      this.close();
	    }
	  }, {
	    key: "getFormat",
	    value: function getFormat$$1(negative) {
	      var type = this.list.getSelectedId();
	      var values = this.form.getValues();
	      values.negative = negative || values.negative;

	      if (type != "custom") {
	        if (type != "date") values.date = "";
	        values = formToValues(type, values);
	        return {
	          fmt: serializeFormat(values),
	          delimiters: getDelimiters(type)
	        };
	      } else return {
	        fmt: values.format,
	        delimiters: getDelimiters(type)
	      };
	    }
	  }, {
	    key: "fillForm",
	    value: function fillForm(view) {
	      var locale = webix.i18n.spreadsheet;
	      var format = getFormat(view, this.cell[0].row, this.cell[0].column);
	      var values = {
	        zeros: 0,
	        separator: 0,
	        negative: 1,
	        date: locale.formats.dateFormat,
	        symbol: currencies[0].value,
	        format: ""
	      };
	      var type;
	      var name = format || "";
	      values.format = getFormatSource(name || "price");
	      if (!name) type = name = "price";else if (name == "string") type = name = "custom";else type = formatHelpers[name].values.type;
	      if (type != "custom") webix.extend(values, formatHelpers[name].values, true);
	      var item = this.view.$$("cells").getItem(this.cell[0].row);
	      var col = this.cell[0].column;
	      this.value = webix.isUndefined(item[col]) ? "" : item[col];
	      this.form.setValues(values);
	      this.list.select(type);
	      this.updateForm();
	    }
	  }, {
	    key: "updateForm",
	    value: function updateForm() {
	      var form = this.form.elements;
	      var format = this.getFormat();
	      var value = this.value;
	      var isText = value === "" || isNaN(value);
	      if (checkFormat(format, "date") && (isText || isDateInvalid(value))) value = 45000;else if (isText && !checkFormat(format, "string")) value = 1234.56789;
	      var style = {
	        css: ""
	      };
	      value = format2code(format.fmt, format.delimiters)(value, style); //preview values

	      this.preview.parse({
	        value: value,
	        css: style.css
	      });
	      form.negative.refresh();
	      form.date.refresh(); //set new format string

	      form.format.setValue(format.fmt);
	    }
	  }, {
	    key: "getFormats",
	    value: function getFormats() {
	      var locale = webix.i18n.spreadsheet.labels;
	      return [{
	        id: "price",
	        value: locale.currency
	      }, {
	        id: "int",
	        value: locale.number
	      }, {
	        id: "percent",
	        value: locale.percent
	      }, {
	        id: "date",
	        value: locale.date
	      }, {
	        id: "custom",
	        value: locale["custom-format"]
	      }];
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var fmt = /*#__PURE__*/Object.freeze({
		action: action$6,
		DialogBox: DialogBox$6
	});

	var action$7 = "conditional-format";

	function getConditionStyle(data) {
	  return data.map(function (item) {
	    item.id = item.css;
	    return item;
	  });
	}

	var DialogBox$7 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "_rulesToArr",
	    value: function _rulesToArr() {
	      var conditions = this.view.conditions.handlers;
	      return [{
	        value: webix.i18n.spreadsheet.labels["conditional-common"],
	        disabled: true,
	        $css: "webix_ssheet_cformats_type"
	      }].concat(_toConsumableArray(conditions.date), [//number rules equal to date
	      {
	        value: webix.i18n.spreadsheet.labels["conditional-text"],
	        disabled: true,
	        $css: "webix_ssheet_cformats_type"
	      }], _toConsumableArray(conditions.text)).map(function (rule) {
	        if (!rule.value) rule.value = webix.i18n.filter[rule.id];
	        return rule;
	      });
	    }
	  }, {
	    key: "_getCondition",
	    value: function _getCondition() {
	      var _this = this;

	      var view = this.view;

	      var values = this._getDatalayout().getValue();

	      var data = [];
	      values.forEach(function (v) {
	        var item = [v.condition];
	        if (v.condition != "between" && v.condition != "notBetween") item.push(_this._normalizeValue(v.value, v.condition));else item.push([_this._normalizeValue(v.value, v.condition), _this._normalizeValue(v.value2, v.condition)]);
	        item.push(v.style);

	        for (var i = 0; i < item.length; i++) {
	          if (item[i] === "" || webix.isArray(item[i]) && item[i].indexOf("") != -1) return false;
	        }

	        data.push(item);
	      });
	      view.callEvent("onConditionSet", [data]);
	    }
	  }, {
	    key: "_safeInt",
	    value: function _safeInt(a) {
	      var num = parseFloat(a);
	      if (num == a) return num;
	      return a;
	    }
	  }, {
	    key: "_setCondition",
	    value: function _setCondition() {
	      var _this2 = this;

	      var view = this.view;
	      var collection = view.conditions.get(this.cell.row, this.cell.column);
	      var data = [];

	      if (collection) {
	        collection.forEach(function (item) {
	          var values = {};
	          values.condition = item[0];

	          if (webix.isArray(item[1])) {
	            values.value = _this2._formatValue(item[1][0], values.condition);
	            values.value2 = _this2._formatValue(item[1][1], values.condition);
	          } else values.value = _this2._formatValue(item[1], values.condition);

	          values.style = item[2];
	          data.push(values);
	        });
	      }

	      while (data.length < 3) {
	        data.push({});
	      }

	      this._getDatalayout().setValue(data);
	    }
	  }, {
	    key: "_getDatalayout",
	    value: function _getDatalayout() {
	      return this.$dialog.getBody().getChildViews()[0].getChildViews()[1].getBody();
	    }
	  }, {
	    key: "_formatValue",
	    value: function _formatValue(value, condition) {
	      if (!(condition && this._isNotDateRule(condition))) {
	        if (this.editFormat && value !== "" && value[0] != "=") {
	          value = getJsDateFromExcel(value);
	          return this.editFormat(value);
	        }
	      }

	      return value.toString();
	    }
	  }, {
	    key: "_normalizeValue",
	    value: function _normalizeValue(value, condition) {
	      if (!this._isNotDateRule(condition)) {
	        if (this.editFormat) {
	          if (isNaN(value)) {
	            if (value[0] != "=") {
	              var parser = webix.Date.strToDate(webix.i18n.spreadsheet.formats.parseDateTime);
	              value = parser(value);
	              value = isNaN(value) ? "" : getExcelDateFromJs(value);
	            }
	          } else value = isDateInvalid(value) ? "" : value;
	        } else value = this._safeInt(value, 10);
	      }

	      return value;
	    }
	  }, {
	    key: "_isNotDateRule",
	    value: function _isNotDateRule(condition) {
	      if (condition == "equal" || condition == "notEqual") return false;
	      return find(this.view.conditions.handlers.text, function (obj) {
	        return obj.id == condition;
	      });
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      this._getCondition();

	      this.close();
	    }
	  }, {
	    key: "$show",
	    value: function $show() {
	      var _this3 = this;

	      this.cell = this.view.getSelectedId();
	      if (!this.cell) return false;
	      var type = getType(this.view, this.cell.row, this.cell.column);
	      if (type == "date") this.editFormat = getDateEditFormat(this.view, this.cell.row, this.cell.column);
	      this.$dialog.queryView("text", "all").forEach(function (view) {
	        view.define({
	          placeholder: type == "date" ? _this3._formatValue(45000) : ""
	        });
	        view.refresh();
	      });

	      this.view.$handleSelection = function (st, end, a, b) {
	        if (_this3.activeValue && a == b) {
	          _this3.activeValue.setValue("=" + a);
	        }

	        return false;
	      };

	      this._setCondition();
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	      delete this.editFormat;

	      this._getDatalayout().clearAll();
	    }
	  }, {
	    key: "getRows",
	    value: function getRows(data) {
	      var _this4 = this;

	      var dialog = this;
	      return {
	        view: "form",
	        padding: 0,
	        borderless: true,
	        css: "webix_ssheet_cformats",
	        elements: [{
	          margin: 10,
	          padding: {
	            right: 4
	          },
	          cols: [{
	            view: "richselect",
	            name: "style",
	            width: 120,
	            placeholder: webix.i18n.spreadsheet.labels["conditional-style"],
	            css: "webix_ssheet_cformat_select",
	            suggest: {
	              padding: 0,
	              borderless: true,
	              css: "webix_ssheet_cformat_list",
	              body: {
	                template: function (obj) {
	                  var css = "webix_ssheet_cformat " + obj.css;
	                  return "<div class=\"".concat(css, "\">").concat(obj.name, "</div>");
	                },
	                data: data
	              }
	            }
	          }, {
	            view: "richselect",
	            width: 150,
	            name: "condition",
	            placeholder: webix.i18n.spreadsheet.labels["conditional-operator"],
	            on: {
	              onChange: function (newv) {
	                var elements = this.getFormView().elements;

	                if (dialog.editFormat) {
	                  if (dialog._isNotDateRule(newv)) elements.value.define({
	                    placeholder: ""
	                  });else {
	                    var value = dialog._normalizeValue(elements.value.getValue(), newv);

	                    elements.value.setValue(dialog._formatValue(value, newv));
	                    elements.value.define({
	                      placeholder: dialog._formatValue(45000)
	                    });
	                  }
	                  elements.value.refresh();
	                }

	                if (newv == "between" || newv == "notBetween") elements.value2.show();else elements.value2.hide();
	              }
	            },
	            suggest: {
	              view: "ssheet-form-suggest",
	              body: {
	                data: this._rulesToArr()
	              }
	            }
	          }, {
	            cols: [{
	              view: "text",
	              on: {
	                onFocus: function (current_view) {
	                  _this4.activeValue = current_view;
	                },
	                onBlur: function (current_view) {
	                  var value = current_view.getValue();

	                  if (value !== "") {
	                    var elements = current_view.getFormView().elements;
	                    var condition = elements.condition.getValue();
	                    value = _this4._normalizeValue(value, condition);
	                    current_view.setValue(_this4._formatValue(value, condition));
	                  }
	                }
	              },
	              name: "value"
	            }, {
	              view: "text",
	              name: "value2",
	              on: {
	                onFocus: function (current_view) {
	                  _this4.activeValue = current_view;
	                },
	                onBlur: function (current_view) {
	                  var value = current_view.getValue();

	                  if (value !== "") {
	                    var elements = current_view.getFormView().elements;
	                    var condition = elements.condition.getValue();
	                    value = _this4._normalizeValue(value, condition);
	                    current_view.setValue(_this4._formatValue(value, condition));
	                  }
	                }
	              },
	              hidden: true
	            }]
	          }, {
	            view: "icon",
	            css: "webix_ssheet_cformat_icon",
	            icon: "wxi-trash",
	            click: function (vid) {
	              var form = webix.$$(vid).getFormView();

	              var dlayout = _this4._getDatalayout();

	              dlayout.getValue(); // save local changes before rendering

	              var index = dlayout.getChildViews().indexOf(form);
	              dlayout.remove(dlayout.getIdByIndex(index));
	              if (dlayout.count() < 3) dlayout.add({});
	            }
	          }]
	        }]
	      };
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this5 = this;

	      var margin = webix.skin.$active.layoutMargin.form;
	      return {
	        view: "ssheet-dialog",
	        head: webix.i18n.spreadsheet.labels["conditional-format"],
	        position: "center",
	        width: 770,
	        move: true,
	        margin: margin,
	        body: {
	          margin: 0,
	          rows: [{
	            height: 36,
	            padding: {
	              left: 12
	            },
	            cols: [{
	              view: "label",
	              width: 131,
	              label: webix.i18n.spreadsheet.labels.display
	            }, {
	              view: "label",
	              width: 161,
	              label: webix.i18n.spreadsheet.labels.condition
	            }, {
	              view: "label",
	              label: webix.i18n.spreadsheet.labels.value
	            }, {
	              view: "icon",
	              css: "webix_ssheet_cformat_icon",
	              icon: "wxi-plus-circle",
	              click: function () {
	                var dlayout = _this5._getDatalayout();

	                dlayout.getValue(); // save local changes before rendering

	                dlayout.add({});
	              }
	            }, {
	              width: 4 + webix.env.scrollSize
	            }]
	          }, {
	            view: "scrollview",
	            maxHeight: webix.skin.$active.inputHeight * 3 + 4,
	            borderless: true,
	            scroll: "y",
	            body: {
	              view: "datalayout",
	              padding: 0,
	              borderless: true,
	              rows: [this.getRows(getConditionStyle(this.view.config.conditionStyle))]
	            }
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this5.okClick();
	          },
	          onCancelClick: function () {
	            return _this5.close();
	          }
	        }
	      };
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var cnd = /*#__PURE__*/Object.freeze({
		action: action$7,
		DialogBox: DialogBox$7
	});

	var action$8 = "excel-export";
	var DialogBox$8 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show(box, form) {
	      this.view.$handleSelection = function () {
	        return false;
	      };

	      form.elements.sheets.setValue(this.getSheets());
	      form.elements.filename.setValue("Data");
	      form.elements.filename.getInputNode().select();
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      return {
	        view: "ssheet-dialog",
	        head: webix.i18n.spreadsheet.labels["export-title"],
	        move: true,
	        position: "center",
	        body: {
	          view: "form",
	          elements: [{
	            view: "text",
	            name: "filename",
	            placeholder: webix.i18n.spreadsheet.labels["export-name"]
	          }, {
	            view: "multicheckbox",
	            name: "sheets",
	            css: "webix_ssheet_multicheckbox"
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this.okClick();
	          },
	          onCancelClick: function () {
	            return _this.close();
	          }
	        }
	      };
	    }
	  }, {
	    key: "getSheets",
	    value: function getSheets() {
	      var view = this.view;
	      var sheets = view._sheets;
	      var value = [];

	      for (var i = 0; i < sheets.length; i++) {
	        var state = sheets[i].state;
	        if (state == "veryHidden") continue;
	        value.push({
	          name: sheets[i].name,
	          hidden: state == "hidden",
	          active: view._activeSheet === sheets[i].name ? 1 : 0
	        });
	      }

	      return value;
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var values = this.$dialog.getBody().getValues();
	      webix.toExcel(this.view, values);
	      this.close();
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var exp = /*#__PURE__*/Object.freeze({
		action: action$8,
		DialogBox: DialogBox$8
	});

	var action$9 = "add-link";
	var DialogBox$9 =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show(box, form) {
	      var cell = this.view.getSelectedId();
	      if (!cell) return false;
	      if (!this.restoreValue(form)) form.clear();
	      form.elements.name.focus();

	      this.view.$handleSelection = function (st, end, a) {
	        form.elements.url.setValue("#" + a);
	        return false;
	      };
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	    }
	  }, {
	    key: "restoreValue",
	    value: function restoreValue(form) {
	      var cell = this.view.getSelectedId();

	      if (cell) {
	        var value = this.view.getCellValue(cell.row, cell.column);

	        if (value && typeof value == "string" && value.indexOf("=HYPERLINK") === 0) {
	          var parts = value.split("\"");
	          form.setValues({
	            name: parts[3] || "",
	            url: parts[1] || ""
	          });
	          return true;
	        }
	      }

	      return false;
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      return {
	        view: "ssheet-dialog",
	        head: webix.i18n.spreadsheet.labels["link-title"],
	        move: true,
	        position: "center",
	        body: {
	          view: "form",
	          elements: [{
	            view: "text",
	            name: "name",
	            placeholder: webix.i18n.spreadsheet.labels["link-name"]
	          }, {
	            view: "text",
	            name: "url",
	            placeholder: webix.i18n.spreadsheet.labels["link-url"]
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this.okClick();
	          },
	          onCancelClick: function () {
	            return _this.close();
	          }
	        }
	      };
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var cell = this.view.getSelectedId();
	      var data = this.$dialog.getBody().getValues();
	      var text = "";

	      if (data.url) {
	        data.name = data.name || data.url;
	        if (!/^(#|(https?:\/\/))/i.test(data.url)) data.url = "http://" + data.url;
	        text = "=HYPERLINK(\"".concat(data.url, "\",\"").concat(data.name, "\")");
	      }

	      this.view.setCellValue(cell.row, cell.column, text);
	      this.view.refresh();
	      this.close();
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var lnk = /*#__PURE__*/Object.freeze({
		action: action$9,
		DialogBox: DialogBox$9
	});

	function print(view, options, htmlOnly) {
	  var views = [];
	  var order = {};
	  var active = view._activeSheet;

	  var html = _buildHtml(view, options, active, views, order);

	  view.showSheet(active);
	  var promise = webix.promise.defer();
	  webix.promise.all(views).then(function (res) {
	    var keys = Object.keys(order).sort(view.$$("cells").data.sorting.as.int);

	    for (var i = keys.length - 1; i >= 0; i--) {
	      var index = keys[i];
	      html.insertBefore(res[index], html.childNodes[order[index]]);
	    }

	    if (htmlOnly) return promise.resolve(html);
	    webix.html.insertBefore(html, options.docFooter, document.body);
	    window.print();

	    _cleanHtml(view, html);

	    promise.resolve();
	  });
	  return promise;
	}
	function init$j(view) {
	  view.$customPrint = function (options, htmlOnly) {
	    return print(view, options, htmlOnly);
	  };

	  view._printBorders = {
	    paper: webix.env.printSizes.find(function (s) {
	      return s.id == "a4";
	    }) ? "a4" : webix.env.printSizes[0].id,
	    fit: "page",
	    mode: "landscape",
	    margin: 1,
	    sheetnames: 1
	  };
	  view.attachEvent("onUndo", function (action, row, column, value) {
	    if (action == "print-borders") view.showPrintBorders(value);
	  });
	  view.attachEvent("onAfterSheetShow", function () {
	    return showBorders(view, true);
	  });
	  view.attachEvent("onChange", function () {
	    return showBorders(view, true);
	  });
	}

	function _cleanHtml(view, html) {
	  webix.html.remove(html);

	  view._sheets.forEach(function (sheet, i) {
	    webix.html.removeStyle(".wss_" + view.$index + "_" + i);
	  });
	}

	function _buildHtml(view, options, active, views, order) {
	  var doc = webix.html.create("div", {
	    "class": "webix_ssheet_print"
	  });
	  options.xCorrection = 1;
	  options.header = options.header || false;
	  options.trim = webix.isUndefined(options.trim) ? true : options.trim;
	  options.sheetnames = webix.isUndefined(options.sheetnames) ? true : options.sheetnames;
	  var baseIndex = view.$index;
	  var pageSize = getPageSize(options);
	  var sheets = options.sheets; // backward compatibility, options.data can be only "selection"
	  // "current" and "all" are deprecated

	  var data = options.data;
	  if (!sheets || data == "current" || data == "selection") sheets = [active];else if (typeof sheets == "string") sheets = [sheets];else if (sheets === true || data == "all") sheets = view._sheets.map(function (sheet) {
	    return sheet.name;
	  });
	  sheets = sheets.filter(function (sheet) {
	    return isVisible(view, sheet);
	  });
	  sheets.forEach(function (name, i) {
	    view.$index = baseIndex + "_" + i;
	    var grid = view.$$("cells");
	    view.showSheet(name);
	    var oldZoom = view._zoom;
	    view.ignoreUndo(function () {
	      return view.zoom(1);
	    });
	    var prefix = "wss_" + view.$index;
	    view._print = true;
	    var table = grid.$customPrint(options, true);
	    delete view._print;
	    var tbl = table.firstChild;

	    if (tbl) {
	      var _tbl$children = _slicedToArray(tbl.children, 2),
	          header = _tbl$children[0],
	          body = _tbl$children[1];

	      var topSplit = header.childElementCount;
	      var sheetName = options.sheetnames ? 20 : 0;
	      var splitHeight = sheetName;

	      for (var s = 1; s <= topSplit; s++) {
	        splitHeight += grid.getItem(s).$height || grid.config.rowHeight;
	      }

	      if (splitHeight > pageSize.height / 4) for (var _i = topSplit - 1; _i >= 0; _i--) {
	        if (body.firstChild) webix.html.insertBefore(header.children[_i], body.firstChild);else body.appendChild(header.children[_i]);
	      }

	      if (sheetName) {
	        var sheetNode = webix.html.create("tr", {
	          class: "webix_ssheet_sheetname"
	        }, "<td>".concat(name, ":</td>"));
	        if (header.firstChild) webix.html.insertBefore(sheetNode, header.firstChild);else header.appendChild(sheetNode);
	      }

	      var node = table.firstChild;

	      if (node) {
	        if (name != active) webix.html.removeCss(node, "wss_" + baseIndex);
	        webix.html.addCss(node, prefix);
	      }

	      doc.appendChild(table);
	    }

	    if (options.external) for (var id in view.views._pull) {
	      var innerView = view.views._pull[id];

	      if (innerView.type == "image") {
	        (function () {
	          var img = webix.html.create("IMG", {
	            src: innerView.data,
	            width: (innerView.config.width || 500) + "px",
	            height: (innerView.config.height || 300) + "px"
	          });
	          var promise = webix.promise.defer();
	          views.push(promise);

	          img.onload = function () {
	            return promise.resolve();
	          };

	          doc.appendChild(img);
	        })();
	      } else {
	        var externalUI = webix.$$(id).getBody();

	        if (externalUI.$customPrint) {
	          var customPrint = externalUI.$customPrint({
	            size: options.size
	          }, true);

	          if (customPrint.then) {
	            order[views.length] = doc.childElementCount;
	            views.push(customPrint);
	          } else doc.appendChild(customPrint);
	        } else doc.appendChild(printInnerView(webix.$$(id).getBody()));
	      }
	    }

	    if (i + 1 < view._sheets.length && (tbl || options.external && Object.keys(view.views._pull).length)) {
	      var br = webix.html.create("DIV", {
	        "class": "webix_print_pagebreak"
	      });
	      doc.appendChild(br);
	    }

	    view.$index = baseIndex;
	    view.ignoreUndo(function () {
	      return view.zoom(oldZoom);
	    });
	  });
	  return doc;
	}

	function printInnerView(view) {
	  var body = view.$view.cloneNode(true); //copy data from all canvases

	  var canvases = view.$view.getElementsByTagName("canvas");
	  if (canvases.length) for (var i = canvases.length - 1; i >= 0; i--) {
	    var destCtx = body.getElementsByTagName("canvas")[i].getContext("2d");
	    destCtx.drawImage(canvases[i], 0, 0);
	  }
	  var container = webix.html.create("div", {
	    class: "webix_ssheet_ui"
	  });
	  container.appendChild(body);
	  return container;
	}

	function getPageSize(options) {
	  var size = webix.env.printSizes.find(function (size) {
	    return size.id == options.paper;
	  });
	  var landscape = options.mode == "landscape";
	  var margin = options.margin ? 2 * webix.env.printMargin : 0;
	  return {
	    width: size[landscape ? "height" : "width"] * webix.env.printPPI - margin,
	    height: size[landscape ? "width" : "height"] * webix.env.printPPI - margin
	  };
	}

	function showBorders(view, redraw) {
	  if (redraw && !view._printBorders.$render) return;
	  var borders = {
	    rows: {},
	    cols: {}
	  };
	  var grid = view.$$("cells");
	  var options = view._printBorders;
	  var pageSize = getPageSize(options);
	  var sheetName = options.sheetnames ? 20 : 0;
	  var topSplit = grid.config.topSplit;
	  var splitHeight = sheetName;

	  for (var s = 1; s <= topSplit; s++) {
	    splitHeight += (grid.getItem(s).$height || grid.config.rowHeight) / view._zoom;
	  }

	  if (splitHeight > pageSize.height / 4) {
	    topSplit = 0;
	    splitHeight = sheetName;
	  }

	  var rowsHeight = splitHeight;

	  for (var r = topSplit + 1; r <= view.config.rowCount; r++) {
	    var height = (grid.getItem(r).$height || grid.config.rowHeight) / view._zoom;

	    if (rowsHeight + height > pageSize.height) {
	      rowsHeight = splitHeight;
	      borders.rows[r == 1 ? r : r - 1] = 1;
	    }

	    rowsHeight += height;
	  }

	  if (options.fit != "page") {
	    var colsWidth = 0;

	    for (var c = 1; c <= view.config.columnCount; c++) {
	      var width = (grid.getColumnConfig(c).width || grid.config.columnWidth) / view._zoom;

	      if (colsWidth + width > pageSize.width) {
	        colsWidth = 0;
	        borders.cols[c == 1 ? c : c - 1] = 1;
	      }

	      colsWidth += width;
	    }
	  }

	  view._printBorders.$render = borders;
	  view.refresh();
	}

	var m22 = /*#__PURE__*/Object.freeze({
		print: print,
		init: init$j,
		showBorders: showBorders
	});

	var action$a = "print";
	var DialogBox$a =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "$show",
	    value: function $show(box, form) {
	      var list = form.elements.sheets.getList();
	      list.clearAll();
	      list.parse(this.getSheets(this.view));
	      form.setValues({
	        data: "full",
	        sheets: this.view.getActiveSheet()
	      }, true);
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      var labels = webix.i18n.spreadsheet.labels;
	      var paperSize;
	      var printSizes = webix.env.printSizes.map(function (size) {
	        if (size.id == "a4") paperSize = "a4";
	        size.value = labels["page-" + size.id] || size.id;
	        return size;
	      });
	      if (!paperSize) paperSize = printSizes[0].id;
	      return {
	        view: "ssheet-dialog",
	        head: labels["print-title"],
	        move: true,
	        modal: true,
	        width: 580,
	        position: "center",
	        buttons: false,
	        on: {
	          onHide: function () {
	            webix.extend(_this.view._printBorders, _this.getValues(), true);
	            showBorders(_this.view, true);
	          }
	        },
	        body: {
	          view: "form",
	          elementsConfig: {
	            labelWidth: 0
	          },
	          elements: [{
	            type: "section",
	            template: labels["print-settings"]
	          }, {
	            cols: [{
	              view: "radio",
	              name: "data",
	              vertical: true,
	              options: [{
	                id: "full",
	                value: labels["sheets"]
	              }, {
	                id: "selection",
	                value: labels["selection"]
	              }],
	              on: {
	                onChange: function (newv) {
	                  var elements = this.getFormView().elements;
	                  var sheets = elements.sheets;

	                  if (newv == "full") {
	                    elements.sheetnames.setValue(1);
	                    sheets.enable();
	                  } else sheets.disable();
	                }
	              }
	            }, {
	              padding: {
	                right: 30
	              },
	              rows: [{
	                name: "sheets",
	                view: "multiselect",
	                width: 160,
	                stringResult: false,
	                suggest: {
	                  selectAll: true,
	                  body: {
	                    data: []
	                  }
	                }
	              }, {}]
	            }, {
	              rows: [{
	                view: "checkbox",
	                name: "sheetnames",
	                value: 1,
	                labelRight: labels["sheet-names"]
	              }, {
	                view: "checkbox",
	                name: "borderless",
	                labelRight: labels["borderless"]
	              }, {
	                view: "checkbox",
	                name: "skiprows",
	                labelRight: labels["skip-rows"]
	              }, {
	                view: "checkbox",
	                name: "margin",
	                labelRight: labels["margin"]
	              }, {
	                view: "checkbox",
	                name: "external",
	                labelRight: labels["external-ui"]
	              }]
	            }]
	          }, {
	            type: "section",
	            template: labels["print-paper"]
	          }, {
	            view: "radio",
	            name: "paper",
	            value: paperSize,
	            options: printSizes
	          }, {
	            type: "section",
	            template: labels["print-layout"]
	          }, {
	            rows: [{
	              view: "radio",
	              name: "fit",
	              value: "page",
	              options: [{
	                id: "page",
	                value: labels["page-width"]
	              }, {
	                id: "data",
	                value: labels["page-actual"]
	              }]
	            }, {
	              view: "radio",
	              name: "mode",
	              value: "landscape",
	              options: [{
	                id: "portrait",
	                value: labels["page-portrait"]
	              }, {
	                id: "landscape",
	                value: labels["page-landscape"]
	              }]
	            }]
	          }, {
	            cols: [{}, {
	              view: "button",
	              css: "ssheet_cancel_button",
	              hotkey: "esc",
	              value: labels.cancel,
	              autowidth: true,
	              click: function () {
	                return _this.close();
	              }
	            }, {
	              view: "button",
	              value: labels["print-borders"],
	              autowidth: true,
	              click: function () {
	                return _this.printPreview();
	              }
	            }, {
	              view: "button",
	              value: labels.print,
	              hotkey: "enter",
	              autowidth: true,
	              click: function () {
	                return _this.okClick();
	              }
	            }]
	          }]
	        }
	      };
	    }
	  }, {
	    key: "getValues",
	    value: function getValues() {
	      var data = this.$dialog.getBody().getValues({
	        disabled: false
	      });
	      data.margin = data.margin ? 0 : {};
	      return data;
	    }
	  }, {
	    key: "printPreview",
	    value: function printPreview() {
	      this.close();
	      this.view.showPrintBorders(true);
	    }
	  }, {
	    key: "getSheets",
	    value: function getSheets(view) {
	      return view._sheets.map(function (sheet) {
	        return {
	          value: sheet.name,
	          id: sheet.name
	        };
	      }).filter(function (sheet) {
	        return isVisible(view, sheet.id);
	      });
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var data = this.$dialog.getBody().getValues({
	        disabled: false
	      });
	      data.margin = data.margin ? 0 : {};
	      this.close();
	      webix.print(this.view, data);
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var pnt = /*#__PURE__*/Object.freeze({
		action: action$a,
		DialogBox: DialogBox$a
	});

	var action$b = "add-comment";
	var DialogBox$b =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "open",
	    value: function open(action) {
	      var _this = this;

	      //we get cell only on hover commented cell
	      this.cell = action.cell ? action.cell : this.view.getSelectedId(); // cell not provided

	      if (!this.cell || // cell is locked and in the edit mode
	      this.view.isCellLocked(this.cell.row, this.cell.column) && !action.viewonly || // action blocked by user's code
	      !this.view.callEvent("onBeforeCommentShow", [this.cell.row, this.cell.column, !action.viewonly])) {
	        return false;
	      }

	      this.view.comments._activeComment = {
	        editStatus: !action.viewonly,
	        cell: this.cell
	      };

	      if (!this.$dialog) {
	        this.$dialog = webix.ui(this.$init());

	        this.view._destroy_with_me.push(this.$dialog);

	        this.view.comments.commentsView = this.$dialog;
	        this.$dialog.attachEvent("onHide", function () {
	          return _this.$hide();
	        });
	        this.view.attachEvent("onCommentHide", function () {
	          return _this.$dialog.hide();
	        });
	      }

	      var form = this.$dialog.getBody();
	      var span = this.view.$$("cells").getSpan(this.cell.row, this.cell.column);
	      var item = span ? {
	        row: this.cell.row,
	        column: span[1] * 1 + span[2] - 1
	      } : this.cell;
	      webix.delay(function () {
	        _this.$dialog.show(_this.view.$$("cells").getItemNode(item));

	        _this._setComment();
	      });
	      if (this.$show(this.$dialog, form) === false) this.close();
	    }
	  }, {
	    key: "$show",
	    value: function $show() {
	      this.textarea = this.$dialog.queryView({
	        view: "textarea"
	      });
	      this.template = this.$dialog.queryView({
	        view: "template"
	      });
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this2 = this;

	      return {
	        view: "popup",
	        css: "ssheet_comments",
	        minWidth: 250,
	        minHeight: 150,
	        relative: "right",
	        resize: true,
	        on: {
	          onViewResize: function () {
	            _this2.$dialog.hide();

	            _this2.$dialog.show();

	            if (_this2.textarea.isVisible()) _this2.textarea.focus();
	          }
	        },
	        body: {
	          animate: false,
	          cells: [{
	            view: "template",
	            css: "ssheet_comment_view",
	            borderless: true,
	            scroll: "auto",
	            onClick: {
	              "ssheet_comment_view": function () {
	                if (!(_this2.view.config.readonly || _this2.view.isCellLocked(_this2.cell.row, _this2.cell.column))) _this2.showInput(_this2.view.comments.get(_this2.cell.row, _this2.cell.column));
	              }
	            }
	          }, {
	            view: "textarea",
	            on: {
	              onChange: function () {
	                _this2.addComment();
	              },
	              onFocus: function () {
	                _this2.view.comments._activeComment = {
	                  editStatus: true,
	                  cell: _this2.cell
	                };
	              },
	              onBlur: function () {
	                _this2.view.comments._activeComment = {};

	                _this2.$dialog.hide();
	              }
	            }
	          }]
	        }
	      };
	    }
	  }, {
	    key: "_setComment",
	    value: function _setComment() {
	      var comment = this.view.comments.get(this.cell.row, this.cell.column);
	      if (this.view.comments._activeComment.editStatus) this.showInput(comment);else this.showTemplate(comment);
	    }
	  }, {
	    key: "showTemplate",
	    value: function showTemplate(text) {
	      this.template.show();
	      this.template.setHTML(text);
	    }
	  }, {
	    key: "showInput",
	    value: function showInput(text) {
	      var _this3 = this;

	      this.view.$$("cells").select(this.cell.row, this.cell.column);
	      webix.delay(function () {
	        _this3.changeTextarea(text);

	        _this3.textarea.show();

	        _this3.textarea.focus();
	      });
	    }
	  }, {
	    key: "addComment",
	    value: function addComment() {
	      this.view.comments.add(this.cell.row, this.cell.column, this.textarea.getValue());
	    }
	  }, {
	    key: "changeTextarea",
	    value: function changeTextarea(text) {
	      this.textarea.blockEvent();
	      this.textarea.setValue(text || "");
	      this.textarea.unblockEvent();
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var cmt = /*#__PURE__*/Object.freeze({
		action: action$b,
		DialogBox: DialogBox$b
	});

	var action$c = "resize";
	var DialogBox$c =
	/*#__PURE__*/
	function (_Dialog) {
	  _inherits(DialogBox, _Dialog);

	  function DialogBox() {
	    _classCallCheck(this, DialogBox);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DialogBox).apply(this, arguments));
	  }

	  _createClass(DialogBox, [{
	    key: "open",
	    value: function open(action) {
	      this.group = action.group;
	      this.header = action.value;
	      Dialog.prototype.open.apply(this, arguments);
	    }
	  }, {
	    key: "$show",
	    value: function $show() {
	      var sel = this.view.getSelectedId();
	      if (!sel) return false;

	      this.view.$handleSelection = function () {
	        return false;
	      };

	      var elements = this.$dialog.getBody().elements;
	      this.type = elements["type"];
	      this.size = elements["size"];
	      this.$dialog.getHead().getChildViews()[0].setHTML(this.header);
	      var grid = this.view.$$("cells");
	      var value;
	      if (this.group == "row") value = grid.getItem(sel.row).$height || grid.config.rowHeight;else value = grid.getColumnConfig(sel.column).width || grid.config.columnWidth;
	      value = value / this.view._zoom;
	      this.type.getOption(1).value = webix.i18n.spreadsheet.labels[this.group == "row" ? "height" : "width"];
	      this.type.setValue(1);
	      this.type.refresh();
	      this.size.setValue(Math.ceil(value));
	      this.size.focus();
	    }
	  }, {
	    key: "$hide",
	    value: function $hide() {
	      this.view.$handleSelection = null;
	    }
	  }, {
	    key: "okClick",
	    value: function okClick() {
	      var type = this.type.getValue();
	      var size = "auto";
	      if (type == 1) size = this.size.getValue() * 1;else if (type == 3) size = this.view.$$("cells").config[this.group == "row" ? "rowHeight" : "columnWidth"];
	      if (this.group == "row") this.view.setRowHeight(null, size);else this.view.setColumnWidth(null, size);
	      this.close();
	    }
	  }, {
	    key: "$init",
	    value: function $init() {
	      var _this = this;

	      var locale = webix.i18n.spreadsheet.labels;
	      return {
	        view: "ssheet-dialog",
	        position: "center",
	        width: 300,
	        move: true,
	        body: {
	          padding: 0,
	          cols: [{
	            view: "radio",
	            name: "type",
	            vertical: true,
	            optionHeight: 40,
	            on: {
	              onChange: function (id) {
	                if (id == 1) _this.size.enable();else _this.size.disable();
	              }
	            },
	            options: [{
	              id: 1,
	              value: ""
	            }, {
	              id: 2,
	              value: locale["fit-content"]
	            }, {
	              id: 3,
	              value: locale["default-size"]
	            }]
	          }, {
	            rows: [{
	              view: "text",
	              name: "size",
	              width: 120
	            }]
	          }]
	        },
	        on: {
	          onSaveClick: function () {
	            return _this.okClick();
	          },
	          onCancelClick: function () {
	            return _this.close();
	          }
	        }
	      };
	    }
	  }]);

	  return DialogBox;
	}(Dialog);

	var siz = /*#__PURE__*/Object.freeze({
		action: action$c,
		DialogBox: DialogBox$c
	});

	var bases = [imt, imc, asw, rgs, dpd, flt, fmt, cnd, exp, lnk, pnt, cmt, siz];
	function init$k(view) {
	  var dialogs = {};
	  var viewBases = view.config.readonly ? [cmt, exp, pnt] : bases;

	  for (var i = 0; i < viewBases.length; i++) {
	    dialogs[viewBases[i].action] = new viewBases[i].DialogBox(view);
	  }

	  view.attachEvent("onCommand", function (action$$1) {
	    var box = dialogs[action$$1.id];
	    if (box) box.open(action$$1);
	  });
	  view.attachEvent("onAction", function (id, values) {
	    //hide win when the external ui is removed
	    if (id == "add-view" && !values.newValue) {
	      var box = dialogs["add-image-top"];

	      if (box && box.viewid == values.row) {
	        box.close();
	      }
	    }
	  });
	}

	function init$l(view) {
	  view.attachEvent("onComponentInit", function () {
	    return view.$$("context").attachTo(view._table.$view);
	  });
	  var locale = webix.i18n.spreadsheet.menus;
	  var clipboard = [];
	  if (view.config.clipboard !== false) clipboard = [{
	    id: "cut",
	    value: locale.cut
	  }, {
	    id: "copy",
	    value: locale.copy
	  }, {
	    id: "paste",
	    value: locale.paste
	  }, {
	    id: "special-paste",
	    value: locale["special-paste"],
	    submenu: [{
	      id: "paste-values",
	      value: locale["paste-values"]
	    }, {
	      id: "paste-formulas",
	      value: locale["paste-formulas"]
	    }, {
	      id: "paste-styles",
	      value: locale["paste-styles"]
	    }, {
	      id: "paste-conditions",
	      value: locale["paste-conditions"]
	    }]
	  }];
	  var lists = {
	    data: clipboard.concat([{
	      id: "clear",
	      value: locale["clear"],
	      submenu: getClearOperation()
	    }, {
	      id: "lock-cell",
	      value: locale["lock-cell"]
	    }, {
	      $template: "Separator"
	    }, {
	      id: "sort",
	      value: locale.sort,
	      submenu: [{
	        id: "sort-asc",
	        value: locale["sort-asc"]
	      }, {
	        id: "sort-desc",
	        value: locale["sort-desc"]
	      }]
	    }, {
	      id: "create-filter",
	      value: locale["create-filter"]
	    }, {
	      $template: "Separator"
	    }, {
	      id: "add-range",
	      value: locale["add-range"]
	    }, {
	      id: "add-link",
	      value: locale["add-link"]
	    }, {
	      id: "add-comment",
	      value: locale["add-comment"]
	    }]),
	    column: getColumnOperation(view),
	    row: getRowOperation(view)
	  };
	  var context = {
	    view: "contextmenu",
	    id: "context",
	    padding: 0,
	    submenuConfig: {
	      padding: 0,
	      on: {
	        onBeforeShow: function () {
	          this.sizeToContent();
	        }
	      }
	    },
	    data: [],
	    on: {
	      onMenuItemClick: function (id) {
	        view.callEvent("onCommand", [this.getMenuItem(id)]);
	      },
	      onBeforeShow: function (pos) {
	        webix.callEvent("onClick", []);
	        var mode, trg;
	        trg = view._table.locate(pos);
	        if (!trg) return false;
	        mode = "";

	        if (trg.header && trg.column !== "rowId") {
	          if (!isColSelected(trg.column, view)) selectColumn(trg.column, view);
	          mode = "column";
	        } else if (trg.row) {
	          if (trg.column === "rowId") {
	            if (!isRowSelected(trg.row, view)) selectRow(trg.row, view);
	            mode = "row";
	          } else {
	            if (!isCellSelected(trg.row, trg.column, view)) view._table.addSelectArea(trg, trg);
	            mode = "data";
	          }
	        }

	        if (mode) {
	          var data = getMenuData(view, mode, lists[mode]);

	          if (data) {
	            this.clearAll();
	            this.parse(data);
	            this.sizeToContent();
	            webix.html.preventEvent(pos);
	            return true;
	          }
	        }

	        return false;
	      }
	    }
	  };
	  view.callEvent("onViewInit", ["context", context]);
	  var contextMenu = view.ui(context);

	  view._destroy_with_me.push(contextMenu);
	}
	function getMenuData(view, name, data) {
	  var ev = {
	    area: name,
	    data: data
	  };
	  if (view.callEvent("onContextMenuConfig", [ev])) return ev && ev.data;
	  return null;
	}

	function init$m(view) {
	  view.attachEvent("onCommand", function (action, start, end) {
	    if (action.id == "add" || action.id == "del") {
	      var area = view._table.getSelectArea();

	      if (area && !(start && end)) {
	        start = area.start;
	        end = area.end;
	      }

	      if (start && end) {
	        if (action.group == "column" && action.id == "add") updateMaxColumn(view.config.columnCount + (end.column - start.column) + 1);
	        group.set(function () {
	          process(action, start, end, view);
	        });
	      }
	    }
	  });
	  view.attachEvent("onUndo", function (action, row, column, value, dir, extra) {
	    if (action == "grid-change") {
	      var state = view._table.getScrollState(); //if we added rows/cols - regine can update cell references on other pages on undo


	      if (extra) {
	        if (!dir) view._mPage[row ? "removeRow" : "removeColumn"]((row || column) - 1, extra.count);else view._mPage[row ? "addRow" : "addColumn"]((row || column) - 1, extra.count);
	      } //if removed - can't, so parse full data and show sheet
	      else state.sheet = view.getActiveSheet();

	      loadChangedData(view, value, state);
	    }
	  });
	}

	function process(action, start, end, view) {
	  var _webix$extend;

	  var select = view._table.getSelectArea();

	  var state = view._table.getScrollState();

	  var del = action.id == "del";
	  var oldData = view.serialize({
	    sheets: del,
	    viewIds: true
	  });
	  var newData = webix.copy(oldData);
	  var data = {
	    value: oldData,
	    newValue: newData
	  };
	  if (!del) webix.extend(data, (_webix$extend = {}, _defineProperty(_webix$extend, action.group, start[action.group]), _defineProperty(_webix$extend, "extra", {
	    count: end.row - start.row + 1
	  }), _webix$extend));
	  var obj = del ? find(newData, function (sheet) {
	    return sheet.name == view.getActiveSheet();
	  }).content : newData;
	  var spanData = [];
	  var spans = obj.spans;

	  for (var i in spans) {
	    var span = adjustSpan(spans[i], action, start, end, view, obj.data, spanData);
	    if (span[2] <= 0 || span[3] <= 0) spans.splice(i, 1);
	  }

	  var values = getUpdateValues(action, start, end);
	  ignoreUndo(function () {
	    view.callEvent("onAction", ["before-grid-change", {
	      name: values.name,
	      inc: values.inc,
	      data: obj,
	      start: start
	    }]);
	  }, view);

	  if (action.group == "column") {
	    if (del) _delColumn(action, start, end, view);else _addColumn(action, start, end, view);
	  } else if (action.group == "row") {
	    if (del) _delRow(action, start, end, view);else _addRow(action, start, end, view);
	  } // muon updates data and ranges


	  var updatedData = view.serialize();
	  obj.data = updatedData.data;
	  obj.ranges = updatedData.ranges;
	  spanData.forEach(function (item) {
	    obj.data.push(item);
	  });
	  view.callEvent("onAction", ["grid-change", data]);
	  ignoreUndo(function () {
	    loadChangedData(view, obj, state);
	  }, view);

	  if (select) {
	    select = fixSelectArea(select, view);
	    if (select) view.$$("cells").addSelectArea(select.start, select.end);
	  }
	}

	function fixSelectArea(select, view) {
	  var config = view.config;
	  var rows = config.rowCount;
	  var cols = config.columnCount;
	  if (select.start.row * 1 > rows) select.start.row = rows;
	  if (select.end.row * 1 > rows) select.end.row = rows;
	  if (select.start.column * 1 > cols) select.start.column = cols;
	  if (select.end.column * 1 > cols) select.end.column = cols;
	  if (view.isRowVisible(select.start.row) && view.isRowVisible(select.end.row) && view.isColumnVisible(select.start.column) && view.isColumnVisible(select.end.column)) return select;
	}

	function loadChangedData(view, data, state) {
	  // data loading resets undo history, and
	  // we need to preserve it
	  ignoreReset(function () {
	    view.$handleSelection = null;
	    view.parse(data);

	    if (state) {
	      if (state.sheet) view.showSheet(state.sheet);

	      view._table.scrollTo(state.x, state.y);
	    }
	  });
	}

	function getUpdateValues(action, start, end) {
	  var name = action.group,
	      inc = action.id == "add" ? 1 : action.id == "del" ? -1 : 0;

	  if (inc) {
	    // span support
	    if (name == "row") inc += inc * (end.row - start.row);
	    if (name == "column") inc += inc * (end.column - start.column);
	  }

	  return {
	    name: name,
	    inc: inc
	  };
	}

	function _addColumn(action, start, end, view) {
	  var count = end.column - start.column + 1;

	  view._mPage.addColumn(start.column - 1, count);

	  view.config.columnCount += count;
	  view.callEvent("onColumnOperation", [action.id, start.column, end.column]);
	}

	function _delColumn(action, start, end, view) {
	  var count = end.column - start.column + 1;

	  if (view.config.columnCount === count) {
	    if (start.column == end.column) return; //deleting last column, ignoring
	    //prevent deleting all columns

	    end.column--;
	    count--;
	  }

	  view._mPage.removeColumn(start.column - 1, count);

	  view.config.columnCount -= count;
	  view.callEvent("onColumnOperation", [action.id, start.column, end.column]);
	}

	function _addRow(action, start, end, view) {
	  var count = end.row - start.row + 1;

	  view._mPage.addRow(start.row - 1, count);

	  view.config.rowCount += count;
	  view.callEvent("onRowOperation", [action.id, start.row, end.row]);
	}

	function _delRow(action, start, end, view) {
	  var count = end.row - start.row + 1;

	  if (view.config.rowCount === count) {
	    if (start.row == end.row) return; //deleting last column, ignoring
	    //prevent deleting all columns

	    end.row--;
	    count--;
	  }

	  view._mPage.removeRow(start.row - 1, count);

	  view.config.rowCount -= count;
	  view.callEvent("onRowOperation", [action.id, start.row, end.row]);
	}

	var m1 = /*#__PURE__*/Object.freeze({
		init: init$m
	});

	function init$n(view) {
	  var table = view._table;
	  view.attachEvent("onReset", function () {
	    return reset$7(view);
	  });
	  reset$7(view);
	  table.attachEvent("onBeforeEditStart", function (id) {
	    var col = this.getColumnConfig(id.column);

	    if (this._ssEditors[id.row]) {
	      var ed = this._ssEditors[id.row][id.column];

	      if (ed) {
	        webix.extend(col, ed, true);
	        webix.extend(col, {
	          row: view.getRow(id.row)
	        }, true);

	        if (ed.options) {
	          if (typeof ed.options == "string") col.options = rangeOptions(view, ed.options, {
	            unique: true,
	            order: true,
	            empty: ed.empty
	          });else if (webix.isArray(ed.options)) col.options = rangeOptions(view, ed.options, {
	            empty: ed.empty
	          });

	          if (col.collection) {
	            col.collection.clearAll();
	            col.collection.parse(col.options);
	          }
	        }
	      }
	    }
	  }); // update format if editor supports this feature

	  table.attachEvent("onBeforeEditStop", function (state, editor, ignore) {
	    if (!ignore && editor.getFormat) {
	      var value = editor.getValue();
	      var format = editor.getFormat(value);
	      group.set(function () {
	        view.setCellValue(editor.row, editor.column, value);

	        if (format) {
	          addFormat(view, editor.row, editor.column, getFormatSource(format));
	        } else removeFormat(view, editor.row, editor.column);
	      });
	      var cell = view.getSelectedId();

	      if (cell && cell.row == editor.row && cell.column == editor.column) {
	        format = format || "common";
	        format = isCustom(format) ? "custom" : format;
	        view.callEvent("onCommand", [{
	          id: "toolbar-update",
	          name: "format",
	          value: format
	        }]);
	      }
	    }
	  });
	  table.attachEvent("onAfterEditStop", function (state, editor) {
	    var col = this.getColumnConfig(editor.column);
	    col.editor = "text";
	    delete col.popup;
	    delete col.$popup;
	    delete col.row;
	  });
	  view.attachEvent("onUndo", function (type, row, column, value) {
	    if (type == "dropdown") view.setCellEditor(row, column, value);
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "dropdown") {
	      setSpanCss(view, p.row, p.column, "ss_editor", p.newValue);
	    } else if (action == "before-grid-change") updatePosition$4(view, p.name, p.inc, p.data, p.start);
	  });
	}

	function reset$7(view) {
	  view._table._ssEditors = {};
	}

	function serialize$6(view, data) {
	  var row,
	      column,
	      tblEditors = view._table._ssEditors,
	      editors = [];

	  for (row in tblEditors) {
	    for (column in tblEditors[row]) {
	      editors.push([row, column, tblEditors[row][column]]);
	    }
	  }

	  data.editors = editors;
	}
	function load$4(view, data) {
	  var editors = data.editors;
	  if (editors) for (var i = 0; i < editors.length; i++) {
	    view.setCellEditor.apply(view, editors[i]);
	  }
	}
	function clearEditors(view, range$$1) {
	  view._table.editStop();

	  eachRange(range$$1, view, function (view, cell) {
	    var editor = view._table._ssEditors[cell.row];

	    if (editor) {
	      if (editor[cell.column]) {
	        delete editor[cell.column];

	        view._table.removeCellCss(cell.row, cell.column, "ss_editor");

	        setSpanCss(view, cell.row, cell.column, "ss_editor", false);
	      }
	    }
	  });
	}
	function isEditor(view, row, column) {
	  var editor = view._table._ssEditors;
	  return editor[row] && !!editor[row][column];
	} // called on column/row add, delete, hide,show

	function updatePosition$4(view, name, inc, data, start) {
	  var editors = data.editors;

	  if (inc) {
	    // create new editors
	    for (var i = editors.length - 1; i >= 0; i--) {
	      var _editors$i = _slicedToArray(editors[i], 3),
	          row = _editors$i[0],
	          column = _editors$i[1],
	          editor = _editors$i[2];

	      if (name == "row" && row >= start.row || name == "column" && column >= start.column) {
	        if (name == "row") {
	          if (row < start.row - inc) {
	            //delete editor mark if row was deleted
	            editors.splice(i, 1);
	            continue;
	          } else //update mark position if upper row was deleted
	            editors[i][0] = row * 1 + inc;
	        } else if (name == "column") {
	          if (column < start.column - inc) {
	            editors.splice(i, 1);
	            continue;
	          } else editors[i][1] = column * 1 + inc;
	        }

	        editor.options = changeRange(editor.options, name, inc, start);
	      }
	    }
	  }
	}

	function pasteDropdown(view, extra, row, col, cutted) {
	  var editor = extra.dropdown;
	  view.setCellEditor(row, col, editor);
	  if (cutted === 1) view.setCellEditor(extra.row, extra.col, {});
	}

	var m4$1 = /*#__PURE__*/Object.freeze({
		init: init$n,
		serialize: serialize$6,
		load: load$4,
		clearEditors: clearEditors,
		isEditor: isEditor,
		pasteDropdown: pasteDropdown
	});

	var styledata, clipdata, origin, cutted, updateFilters, specialPaste;
	function init$o(view) {
	  var clipboard = view.config.clipboard;
	  var browserClipboard = navigator.clipboard;
	  if (clipboard === false) return;
	  webix.clipbuffer.init();
	  var buffer = document.querySelector(".webix_clipbuffer");
	  var keyC = 67; //keyboard 'c' code

	  var keyX = 88; //keyboard 'x' code

	  var grid = view.$$("cells");
	  grid.attachEvent("onAfterAreaAdd", function () {
	    return _sel_to_clip(view, buffer);
	  });
	  grid.attachEvent("onKeyPress", function (code, e) {
	    if ((code === keyC || code === keyX) && (e.ctrlKey || e.metaKey) && grid.getSelectedId()) {
	      cutted = (code === keyX) * 1;
	      setClipboard(view, buffer);
	    }
	  });
	  view.attachEvent("onCommand", function (action) {
	    if (action.id.indexOf("paste") != -1) {
	      specialPaste = action.id.split("-")[1];

	      if (browserClipboard && browserClipboard.readText) {
	        browserClipboard.readText().then(function (text) {
	          webix.clipbuffer.set(text);

	          _clip_to_sel(view, grid, buffer.value);
	        }).catch(function () {
	          _clip_to_sel(view, grid, clipdata);
	        }).finally(function () {
	          specialPaste = null;
	        });
	      } else {
	        _clip_to_sel(view, grid, clipdata);

	        specialPaste = null;
	      }
	    } else if (action.id == "copy" || action.id == "cut") {
	      cutted = (action.id == "cut") * 1;
	      setClipboard(view, buffer, browserClipboard, true);
	    }
	  });

	  if (!view.config.readonly) {
	    grid.attachEvent("onPaste", function (text) {
	      _clip_to_sel(view, grid, text);
	    });
	  }
	}

	function setClipboard(view, buffer, browserClipboard, menu) {
	  var grid = view.$$("cells");
	  styledata = _get_sel_style(view, grid);
	  if (menu && browserClipboard && browserClipboard.writeText) browserClipboard.writeText(buffer.value);
	  clipdata = buffer.value;
	  origin = grid.getSelectArea();
	  if (cutted && Object.keys(grid._ssFilters).length !== 0) updateFilters = allFiltersInZone(grid._ssFilters, origin, view.config.columnCount);
	}

	function _sel_to_clip(view, buffer) {
	  var grid = view.$$("cells");
	  if (grid.getSelectedId()) webix.delay(function () {
	    var data = [];
	    grid.mapSelection(function (value, row, col, row_ind) {
	      value = _updateDelimiter(view._mPage.getValue(row - 1, col - 1), view.config);
	      if (!data[row_ind]) data[row_ind] = [];
	      data[row_ind].push(value);
	    });
	    var clipdata = webix.csv.stringify(data, grid.config.delimiter);

	    if (grid.getEditor()) {
	      buffer.value = clipdata;
	    } else {
	      buffer.focus();
	      webix.clipbuffer.set(clipdata);
	    }

	    webix.UIManager.setFocus(grid);
	  });
	}

	function _updateDelimiter(value, config) {
	  var format = getClipboardNumberFormat(config);
	  if (webix.rules.isNumber(value) && format) value = webix.Number.numToStr(format)(value);
	  return value;
	}

	function _clip_to_sel(view, grid, text) {
	  if (!text) text = "";
	  var leftTop = grid.getSelectArea();
	  if (!leftTop) return;
	  var start = leftTop.start;
	  var fromSheet = text === clipdata;
	  var data = fromSheet ? styledata : webix.csv.parse(text, grid.config.delimiter);
	  if (!fromSheet) data = _changeDelimiter(data, view.config);
	  var translate = {
	    id: "move",
	    column: 0,
	    row: 0,
	    cut: cutted
	  };

	  if (fromSheet) {
	    translate.column = start.column - origin.start.column;
	    translate.row = start.row - origin.start.row;
	  }

	  if (specialPaste || !fromSheet) {
	    cutted = 0;
	    updateFilters = 0;
	  }

	  group.set(function () {
	    if (updateFilters) view.removeFilters();

	    _add_row_col(view, start, data);

	    if (cutted === 1) {
	      for (var row = origin.start.row; row <= origin.end.row; row++) {
	        for (var column = origin.start.column; column <= origin.end.column; column++) {
	          view.setCellValue(row, column, null);
	          view.setStyle(row, column, null);
	        }
	      }
	    }

	    var colCount = leftTop.end.column - start.column + 1;
	    var rowCount = leftTop.end.row - start.row + 1;
	    var dataRowCount = data.length;
	    var dataColCount = data[0].length;

	    if (!updateFilters && (rowCount > dataRowCount || colCount > dataColCount)) {
	      for (var r = 0, ri = 0; r < Math.max(rowCount, dataRowCount); r++, ri++) {
	        if (ri == data.length) ri = 0;

	        for (var c = 0, ci = 0; c < Math.max(colCount, dataColCount); c++, ci++) {
	          if (ci == data[0].length) ci = 0;
	          var subtrans = {
	            id: "move",
	            column: translate.column + Math.floor(c / dataColCount) * dataColCount,
	            row: translate.row + Math.floor(r / dataRowCount) * dataRowCount,
	            cut: cutted
	          };

	          _clipboardToTable(view, start.row + r, start.column + c, data[ri][ci], fromSheet, subtrans);
	        }
	      }
	    } else {
	      grid.mapCells(start.row, start.column, dataRowCount, null, function (value, row, col, row_ind, col_ind) {
	        if (data[row_ind] && data[row_ind].length > col_ind) {
	          var cdata = data[row_ind][col_ind];

	          _clipboardToTable(view, row, col, cdata, fromSheet, translate);
	        }
	      }, true);
	    }

	    if (cutted === 1) {
	      //cut and cleared
	      cutted = 2;
	      updateFilters = false;
	    }
	  });
	  view.refresh();
	}

	function _clipboardToTable(view, row, col, cdata, fromSheet, translate) {
	  var newValue = cdata;
	  var setValue = !specialPaste || specialPaste == "values" || specialPaste == "formulas";

	  if (_typeof(cdata) === "object") {
	    if (setValue) {
	      if (cdata.math && specialPaste != "values") {
	        if (translate.cut) newValue = cdata.math;else newValue = view._mData.getStore().transposeMath(cdata.math, translate.row, translate.column);
	      } else newValue = cdata.text;
	    }

	    if (cdata.style && cdata.style.props && (!specialPaste || specialPaste == "styles")) {
	      var style = view.addStyle(cdata.style.props);
	      view.setStyle(row, col, style);
	    }

	    var extra = cdata.extra;

	    if (extra) {
	      if (extra.condition && (!specialPaste || specialPaste == "conditions")) pasteCondition(view, extra, row, col, cutted);
	      if (extra.dropdown && !specialPaste) pasteDropdown(view, extra, row, col, cutted, translate);
	      if (extra.filter && updateFilters) pasteFilter(view, extra, row, col, cutted, translate);
	    }

	    if (!specialPaste) pasteSpan(view, extra, row, col, cutted, translate);
	  }

	  if (setValue) view.setCellValue(row, col, newValue);
	}

	function _get_sel_style(view, grid) {
	  var data = [];
	  var row, last;
	  grid.mapSelection(function (value, id, col) {
	    if (id != last) {
	      row = [];
	      data.push(row);
	      last = id;
	    }

	    var math = view._mPage.getValue(id - 1, col - 1, true);

	    math = math && math[0] == "=" ? math : null;
	    value = view._mPage.getValue(id - 1, col - 1);
	    var obj = {
	      text: value,
	      math: math,
	      style: view.getStyle(id, col)
	    };
	    var condition = view.conditions.get(id, col);
	    var editor = view.getCellEditor(id, col);
	    var filter = view.getCellFilter(id, col);

	    var span = view._table.getSpan(id, col);

	    if (editor || filter || condition || span) {
	      var extra = {
	        row: id,
	        col: col
	      };
	      if (condition) extra.condition = condition;
	      if (editor) extra.dropdown = editor;
	      if (filter) extra.filter = filter;
	      if (span) extra.span = span;
	      obj.extra = extra;
	    }

	    row.push(obj);
	    return value;
	  });
	  return data;
	}

	function allFiltersInZone(extra, origin, columnCount) {
	  var filters = Object.keys(extra);
	  var startRow = Math.min.apply(null, filters);
	  var endRow = Math.max.apply(null, filters);
	  var startCol = columnCount;
	  var endCol = 1;

	  for (var i = startRow; i <= endRow; i++) {
	    if (extra[i]) {
	      var columns = Object.keys(extra[i]);
	      startCol = Math.min(startCol, Math.min.apply(null, columns));
	      endCol = Math.max(endCol, Math.max.apply(null, columns));
	    }
	  }

	  if (origin.start.row <= startRow && origin.end.row >= endRow && origin.start.column <= startCol && origin.end.column >= endCol) return true;else return false;
	} //dynamically increase rows and columns according to pasted data size


	function _add_row_col(view, start, data) {
	  var maxRow = start.row + data.length - 1;
	  var maxCol = start.column + data[0].length - 1;

	  if (maxRow > view.config.rowCount || maxCol > view.config.columnCount) {
	    var action = {
	      id: "add"
	    };

	    if (maxRow > view.config.rowCount) {
	      action.group = "row";
	      view.callEvent("onCommand", [action, {
	        row: view.config.rowCount + 1
	      }, {
	        row: maxRow
	      }]);
	    }

	    if (maxCol > view.config.columnCount) {
	      action.group = "column";
	      view.callEvent("onCommand", [action, {
	        column: view.config.columnCount + 1
	      }, {
	        column: maxCol
	      }]);
	    }
	  }
	}

	function _changeDelimiter(data, config) {
	  var format = getClipboardNumberFormat(config);
	  if (format) for (var i = 0; i < data.length; i++) {
	    for (var k = 0; k < data[i].length; k++) {
	      var record = webix.Number.parse(data[i][k], format);
	      if (webix.rules.isNumber(record)) data[i][k] = record;
	    }
	  }
	  return data;
	}

	function getClipboardNumberFormat(config) {
	  var format = config.clipboardNumberFormat;
	  if (!format && config.clipboardDecimalDelimiter) // backward compatibility
	    format = {
	      decimalDelimiter: config.clipboardDecimalDelimiter,
	      decimalOptional: true
	    };
	  if (format) webix.extend(format, {
	    minusSign: webix.i18n.minusSign,
	    minusPosition: webix.i18n.minusPosition
	  });
	  return format;
	}

	var m6 = /*#__PURE__*/Object.freeze({
		init: init$o
	});

	function init$p(view) {
	  view.attachEvent("onCommand", function (action) {
	    if (action.id == "show" || action.id == "hide") {
	      var sel = view._table.getSelectArea();

	      if (sel) process$1(action, webix.copy(sel.start), webix.copy(sel.end), view);
	    }
	  });
	  reset$8(view);
	  view.attachEvent("onUndo", function (action, row, column, value, direction) {
	    if ((action.id == "hide" || action.id == "show") && (action.group == "column" || action.group == "row")) {
	      var type = action.id;
	      if (!direction) type = type == "hide" ? "show" : "hide";
	      var obj = row || column;
	      process$1({
	        id: type,
	        group: action.group,
	        neighbors: action.neighbors
	      }, obj.start, obj.end, view, true);
	    }
	  });
	  view.attachEvent("onHardReset", function () {
	    return reset$8(view);
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "before-grid-change") _updatePosition(view, p.name, p.inc, p.data, p.start);
	  });
	}
	function reset$8(view, mode) {
	  if (mode) view["_hidden_" + mode + "_hash"] = {};else {
	    view._hidden_cols_hash = {};
	    view._hidden_rows_hash = {};
	    view.filterSpreadSheet();
	  }
	}

	function getIds(id) {
	  return webix.isArray(id) ? id : [id, id];
	}

	function isColumnVisible(view, column) {
	  return !view._hidden_cols_hash[column];
	}
	function setState$1(view, indexes, state, type) {
	  // hide
	  if (!indexes) {
	    var sel = view.getSelectedId(true);
	    var action = {
	      id: state === false ? "show" : "hide",
	      group: type
	    };
	    if (sel.length) view.callEvent("onCommand", [action, sel[0], sel[sel.length - 1]]);
	  } else {
	    var ids = getIds(indexes);
	    var hidden = type == "row" ? view._hidden_rows_hash : view._hidden_cols_hash;

	    if (!hidden[ids[0]] && (webix.isUndefined(state) || state)) {
	      (type == "row" ? _hideRow : _hideColumn)({
	        id: "hide",
	        group: type
	      }, _defineProperty({}, type, ids[0]), _defineProperty({}, type, ids[1]), view);
	    } // show
	    else if (hidden[ids[0]] && (webix.isUndefined(state) || !state)) {
	        (type == "row" ? _showRow : _showColumn)({
	          id: "hide",
	          group: type
	        }, _defineProperty({}, type, ids[0]), _defineProperty({}, type, ids[1]), view);
	      }
	  }
	}
	function isRowVisible(view, row) {
	  return !view._hidden_rows_hash[row];
	}
	function serialize$7(view, data) {
	  var hrows = [];
	  var hcols = [];

	  for (var r in view._hidden_rows_hash) {
	    hrows.push(r);
	  }

	  for (var c in view._hidden_cols_hash) {
	    hcols.push(c);
	  }

	  if (hrows.length || hcols.length) data.table.hidden = {};
	  if (hrows.length) data.table.hidden.row = hrows;
	  if (hcols.length) data.table.hidden.column = hcols;
	}
	function load$5(view, data) {
	  reset$8(view);

	  if (!webix.isUndefined(data.table) && !webix.isUndefined(data.table.hidden)) {
	    var hidden = data.table.hidden;

	    if (hidden.row && hidden.row.length) {
	      for (var r = 0; r < hidden.row.length; r++) {
	        _hideRow({
	          id: "hide",
	          group: "row"
	        }, {
	          row: hidden.row[r]
	        }, {
	          row: hidden.row[r]
	        }, view, true);
	      }
	    }

	    if (hidden.column && hidden.column.length) {
	      for (var c = 0; c < hidden.column.length; c++) {
	        _hideColumn({
	          id: "hide",
	          group: "column"
	        }, {
	          column: hidden.column[c]
	        }, {
	          column: hidden.column[c]
	        }, view, true);
	      }
	    }
	  }
	}

	function process$1(action) {
	  if (action.group == "column") {
	    if (action.id == "show") _showColumn.apply(this, arguments);else if (action.id == "hide") _hideColumn.apply(this, arguments);
	  } else if (action.group == "row") {
	    if (action.id == "show") _showRow.apply(this, arguments);else if (action.id == "hide") _hideRow.apply(this, arguments);
	  }
	}

	function _showColumn(action, start, end, view, silent) {
	  var grid = view.$$("cells");
	  var sel = grid.getSelectArea();
	  var hash = view._hidden_cols_hash;

	  if (action.neighbors) {
	    if (hash[start.column - 1]) while (hash[start.column - 1]) {
	      start.column--;
	    } else while (hash[end.column + 1]) {
	      end.column++;
	    }
	  }

	  group.set(function () {
	    for (var i = start.column; i <= end.column; i++) {
	      if (hash[i]) {
	        delete hash[i];
	        var cell = grid.getColumnConfig(i - 1 || "rowId").header[0];
	        cell.css = cell.css.replace("webix_ssheet_hide_column", "");
	        grid.showColumn(i);
	        if (!silent) view.callEvent("onColumnOperation", [action.id, i, i]);
	      }
	    }

	    var split = view._frozenColumns;

	    if (split && split >= start.column) {
	      view.freezeColumns(0); // remove freeze (split is equal with current frozen col)

	      view.freezeColumns(split); // if col was freezed on hidden column - move it
	    }

	    if (sel) grid.addSelectArea(sel.start, sel.end);
	  }, view);
	}

	function _showRow(action, start, end, view, silent) {
	  var grid = view.$$("cells");
	  var sel = grid.getSelectArea();
	  var hash = view._hidden_rows_hash;

	  if (action.neighbors) {
	    if (hash[start.row - 1]) while (hash[start.row - 1]) {
	      start.row--;
	    } else while (hash[end.row + 1]) {
	      end.row++;
	    }
	  }

	  group.set(function () {
	    var split = view._frozenRows;

	    if (split) {
	      //Frozen rows ignore filtering applied to the datatable
	      view.freezeRows(0);
	    }

	    for (var i = start.row; i <= end.row; i++) {
	      if (hash[i]) {
	        delete hash[i];

	        if (i - 1 === 0) {
	          var cell = grid.getColumnConfig("rowId").header[0];
	          cell.css = cell.css.replace("webix_ssheet_hide_row", "");
	          grid.refreshColumns();
	        } else grid.removeCellCss(i - 1, "rowId", "webix_ssheet_hide_row");

	        if (!silent) view.callEvent("onRowOperation", [action.id, i, i]);
	      }
	    }

	    view.filterSpreadSheet();
	    if (split) view.freezeRows(split);
	    if (sel) grid.addSelectArea(sel.start, sel.end);
	  }, view);
	}

	function _hideColumn(action, start, end, view, silent) {
	  var grid = view.$$("cells");
	  var i = end.column;
	  view.$handleSelection = null;
	  grid.unselect();

	  if (end.column < 1 || start.column < 1) {
	    delete view._hidden_cols_hash[start.column];
	    return;
	  }

	  while (i >= start.column) {
	    if (grid.getColumnIndex(i) != -1) {
	      view._hidden_cols_hash[i] = i;
	      var cell = grid.getColumnConfig(i - 1 || "rowId").header[0];
	      cell.css = (cell.css || "") + " webix_ssheet_hide_column";
	      grid.hideColumn(i);
	    }

	    i--;
	  }

	  if (!silent) view.callEvent("onColumnOperation", [action.id, start.column, end.column]);
	}

	function _hideRow(action, start, end, view, silent) {
	  if (end.row < 1 || start.row < 1) {
	    delete view._hidden_rows_hash[start.row];
	    return;
	  }

	  var split = view._frozenRows;

	  if (split) {
	    //Frozen rows ignore filtering applied to the datatable
	    view.freezeRows(0);
	  }

	  var grid = view.$$("cells");
	  var i = end.row;

	  while (i >= start.row) {
	    view._hidden_rows_hash[i] = i;

	    if (i - 1 === 0) {
	      var cell = grid.getColumnConfig("rowId").header[0];
	      cell.css = (cell.css || "") + " webix_ssheet_hide_row";
	      grid.refreshColumns();
	    } else grid.addCellCss(i - 1, "rowId", "webix_ssheet_hide_row");

	    i--;
	  }

	  view.filterSpreadSheet();
	  if (split) view.freezeRows(split);
	  if (!silent) view.callEvent("onRowOperation", [action.id, start.row, end.row]);
	}

	function _updatePosition(view, name, inc, data, start) {
	  if (data.table && data.table.hidden && data.table.hidden[name] && data.table.hidden[name].length) {
	    reset$8(view, name == "column" ? "cols" : "rows");
	    var s = start[name];
	    var hidden = data.table.hidden[name];

	    for (var i = hidden.length - 1; i >= 0; i--) {
	      var hiddenIndex = hidden[i] * 1;
	      if (inc > 0 && hiddenIndex >= s) hidden[i] = inc + hiddenIndex;else if (inc < 0 && hiddenIndex >= s) {
	        if (hiddenIndex < s - inc) hidden.splice(i, 1);else hidden[i] = inc + hiddenIndex;
	      }
	    }
	  }
	}

	var m6$1 = /*#__PURE__*/Object.freeze({
		init: init$p,
		reset: reset$8,
		isColumnVisible: isColumnVisible,
		setState: setState$1,
		isRowVisible: isRowVisible,
		serialize: serialize$7,
		load: load$5
	});

	function init$q(view) {
	  if (view.config.resizeCell) {
	    var grid = view.$$("cells");
	    grid.define("resizeRow", {
	      headerOnly: true,
	      size: 10
	    });
	    grid.define("resizeColumn", {
	      headerOnly: true,
	      size: 10
	    });
	    grid.define("fixedRowHeight", false);
	    grid.attachEvent("onRowResize", function (id) {
	      view.$$("cells").refreshSelectArea();
	      save(view, "sizes", {
	        row: id,
	        column: 0,
	        size: view.$$("cells").getItem(id).$height
	      });
	    });
	    grid.attachEvent("onColumnResize", function (id) {
	      view.$$("cells").refreshSelectArea();
	      save(view, "sizes", {
	        row: 0,
	        column: id,
	        size: view.getColumn(id).width
	      });
	    }); // undo

	    view.attachEvent("onUndo", function (type, row, column, value) {
	      if (type == "c-resize" || type == "r-resize") _undoResize(view, row, column, value);
	    });
	  }

	  view.attachEvent("onDataParse", function (data) {
	    load$6(view, data);
	  });
	  view.attachEvent("onDataSerialize", function (data) {
	    serialize$8(view, data);
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "before-grid-change") updatePosition$5(view, p.name, p.inc, p.data, p.start);
	  });
	  view.attachEvent("onBeforeStyleChange", function (row, column, n, o) {
	    if (o && o.props.wrap === "wrap" && (!n || n.props.wrap != o.props.wrap)) {
	      delete view._table.getItem(row).$height;
	    }
	  });
	  view.attachEvent("onStyleChange", function (r, c) {
	    return _adjustRowHeight(view, r, c);
	  });
	  view.attachEvent("onCellChange", function (r, c, v, p) {
	    if (p == view.getActiveSheet()) _adjustRowHeight(view, r, c);
	  });
	}

	function serialize$8(view, data, oldZoom) {
	  var sizes = [];
	  var grid = view.$$("cells");
	  var columns = grid.getState().order;
	  var order = grid.data.order;
	  var zoom = oldZoom || view._zoom;
	  var defWidth = grid.config.columnWidth;
	  var defHeight = grid.config.rowHeight;

	  for (var i = 1; i < columns.length; i++) {
	    var width = Math.ceil(grid.getColumnConfig(columns[i]).width / zoom);
	    if (width && width != defWidth) sizes.push([0, i, width]);
	  }

	  for (var _i = 0; _i < order.length; _i++) {
	    var height = Math.ceil(grid.getItem(order[_i]).$height / zoom);
	    if (height && height != defHeight) sizes.push([order[_i] * 1, 0, height]);
	  }

	  data.sizes = sizes;
	}

	function load$6(view, data) {
	  var zoom = 1;
	  if (data.table && data.table.zoom) zoom = data.table.zoom;
	  var grid = view.$$("cells");
	  var defWidth = grid.config.columnWidth;
	  var defHeight = grid.config.rowHeight;

	  for (var i = 1; i <= view.config.rowCount; i++) {
	    var row = view.$$("cells").getItem(i);
	    row.$height = defHeight * zoom;
	  }

	  var rowHeight = (webix.skin.$name == "contrast" || webix.skin.$name == "flat" ? 24 : 20) * zoom;
	  var rowId = view.getColumn("rowId");
	  rowId.width = 40 * zoom;
	  rowId.header[0].height = rowHeight;

	  for (var _i2 = 1; _i2 <= view.config.columnCount; _i2++) {
	    var col = view.getColumn(_i2);
	    col.header[0].height = rowHeight;
	    col.width = defWidth * zoom;
	  }

	  if (data.sizes) {
	    for (var _i3 = 0; _i3 < data.sizes.length; _i3++) {
	      var size = data.sizes[_i3];

	      if (size[0] * 1 !== 0) {
	        var _row = view.$$("cells").getItem(size[0]);

	        if (_row) _row.$height = size[2] * zoom;
	      } else {
	        var _col = view.getColumn(size[1]);

	        if (_col) _col.width = size[2] * zoom;
	      }
	    }
	  }

	  view.refresh(true);
	}
	function zoomSizes(view, oldZoom) {
	  var data = {
	    table: {
	      zoom: view._zoom
	    }
	  };
	  serialize$8(view, data, oldZoom);
	  load$6(view, data);
	}

	function _undoResize(view, row, column, value) {
	  if (row) {
	    view.$$("cells").getItem(row).$height = value;
	    save(view, "sizes", {
	      row: row,
	      column: 0,
	      size: value
	    });
	  } else {
	    view._table.setColumnWidth(column, value);
	  } // update area selection


	  view._table.refreshSelectArea();
	}

	function updatePosition$5(view, name, inc, data, start) {
	  var i,
	      sizes = data.sizes,
	      nsizes = [];

	  if (inc) {
	    for (i = sizes.length - 1; i >= 0; i--) {
	      var _sizes$i = _slicedToArray(sizes[i], 3),
	          row = _sizes$i[0],
	          column = _sizes$i[1],
	          size = _sizes$i[2];

	      if (row && name == "row" && row >= start.row) {
	        if (inc < 0 && row < start.row - inc) continue;
	        nsizes.push([row * 1 + inc, column, size]);
	      } else if (column && name == "column" && column >= start.column) {
	        if (inc < 0 && column < start.column - inc) continue;
	        nsizes.push([row, column * 1 + inc, size]);
	      } else nsizes.push(sizes[i]);
	    }

	    if (inc > 0) {
	      //col/row add: set sizes according to the selected area
	      if (name == "column") {
	        var _loop = function (_i4) {
	          var size = find(sizes, function (arr) {
	            return arr[1] == start.column + _i4;
	          });
	          if (size) nsizes.push([0, start.column + _i4, size[2]]);
	        };

	        for (var _i4 = 0; _i4 < inc; _i4++) {
	          _loop(_i4);
	        }
	      } else {
	        var _loop2 = function (_i5) {
	          var size = find(sizes, function (arr) {
	            return arr[0] == start.row + _i5;
	          });
	          if (size) nsizes.push([start.row + _i5, 0, size[2]]);
	        };

	        for (var _i5 = 0; _i5 < inc; _i5++) {
	          _loop2(_i5);
	        }
	      }
	    }

	    data.sizes = nsizes;
	  }
	}

	function _adjustRowHeight(view, row, column) {
	  if (view._loading_data) return;
	  var style = getStyle(view, {
	    row: row,
	    column: column
	  }); //changing styles or content of wrapped cell -> resize the related row

	  if (style && style.props.wrap) {
	    var grid = view._table;
	    var item = grid.getItem(row);
	    var height = item.$height || grid.config.rowHeight;
	    grid.eachColumn(function (col, config) {
	      var style = getStyle(view, {
	        row: row,
	        column: col
	      }); //include only cells with active wrap into calculation 

	      if (style && style.props && style.props.wrap === "wrap") {
	        var text = this.getText(row, col);
	        var baseWidth = config.width;
	        var span = grid.getSpan(row, col);
	        var spanHeight;

	        if (span) {
	          var node = grid.getSpanNode({
	            row: span[0],
	            column: span[1]
	          });
	          baseWidth = node.offsetWidth;
	          spanHeight = node.offsetHeight;
	        }

	        if (view.getCellEditor(row, col) || view.getCellFilter(row, col)) baseWidth += 20;
	        var textHeight = getTextSize(view, text, style.id, baseWidth).height;
	        if (spanHeight) textHeight = spanHeight >= textHeight ? 0 : textHeight - spanHeight + height;
	        height = Math.max(height, textHeight);
	      }
	    });
	    item.$height = height;
	  }
	}

	var m3$1 = /*#__PURE__*/Object.freeze({
		init: init$q,
		load: load$6,
		zoomSizes: zoomSizes
	});

	function init$r(view) {
	  var table = view._table;
	  var bs = 0;
	  table.attachEvent("onAreaDrag", function () {
	    return bs = new Date();
	  });
	  table.attachEvent("onBeforeAreaRemove", function () {
	    //[FIXME] currently we don't have enough info to know
	    //is user selects new area, and removing need to be blocked
	    //or is it some API which attempts to remove the area
	    if (view.$handleSelection && new Date() - bs < 500) return false;
	  });
	  table.attachEvent("onBeforeAreaAdd", function (area) {
	    //[FIXME] 
	    //block selection of row-id column
	    //temporary fix, we need to fire onBeforeBlockSelect when selection moves
	    //so the common onBeforeBlockSelect handler will block rowId selection
	    if (area.start.column == "rowId") return false; //if we have an active editor, we need to close it on block selection
	    //ignore, when selecting the editor's cell

	    var editor = table.getEditor();
	    if (editor && (editor.row != area.start.row || editor.column != area.start.column || editor.row != area.start.row || editor.column != area.start.column)) table.editStop();
	    if (!view.$handleSelection) return true;
	    var blockStart = encode[area.start.column] + area.start.row;
	    var blockEnd = encode[area.end.column] + area.end.row;
	    var res = view.$handleSelection(area.start, area.end, blockStart, blockEnd);

	    if (res !== false) {
	      view.$handleSelection = null;
	      table.removeSelectArea();
	    }

	    return res;
	  });
	  table.attachEvent("onBeforeBlockSelect", function (start, end, finalStep) {
	    if (finalStep && table.$handleStart) {
	      var oldSel = table.getSelectArea();
	      var oldStart = oldSel.start;
	      var oldEnd = oldSel.end;
	      var sr = start.row;
	      var er = end.row;
	      var sc = start.column;
	      var ec = end.column;
	      if (oldStart.row == sr && oldEnd.row > er) view.clearRange({
	        start: {
	          row: er + 1,
	          column: sc
	        },
	        end: {
	          row: oldEnd.row,
	          column: ec
	        }
	      }, {
	        values: true
	      });else if (oldStart.column == sc && oldEnd.column > ec) {
	        view.clearRange({
	          start: {
	            row: sr,
	            column: ec + 1
	          },
	          end: {
	            row: er,
	            column: oldEnd.column
	          }
	        }, {
	          values: true
	        });
	      } else {
	        var type;
	        if (sr != oldStart.row || er != oldEnd.row) type = "row";else if (sc != oldStart.column || ec != oldEnd.column) type = "column";

	        if (type) {
	          group.start();
	          var isRow = type == "row";

	          for (var i = isRow ? sc : sr; i <= (isRow ? ec : er); i++) {
	            var nums = [];
	            var border = [];

	            for (var j = oldStart[type]; j <= oldEnd[type]; j++) {
	              var _ref = type == "row" ? [j, i] : [i, j],
	                  _ref2 = _slicedToArray(_ref, 2),
	                  row = _ref2[0],
	                  col = _ref2[1];

	              var value = view.getCellValue(row, col);

	              if (webix.rules.isNumber(value)) {
	                if (!border[0]) {
	                  border.firstValue = value;
	                  border[0] = border[1] = j;
	                } else {
	                  border[1] = j;
	                  if (webix.isUndefined(border.inc)) border.inc = value - border.firstValue;
	                }

	                nums[j] = border;
	              } else border = [];
	            }

	            var afterSel = oldStart[type] == (isRow ? sr : sc);

	            var _start = afterSel ? oldStart[type] : oldEnd[type];

	            var dir = afterSel ? 1 : -1;

	            for (var _j = afterSel ? oldEnd[type] + 1 : oldStart[type] - 1, index = 0, iteration = 1; afterSel ? _j <= (isRow ? er : ec) : _j >= (isRow ? sr : sc); afterSel ? _j++ : _j--, index++) {
	              if (index == oldEnd[type] - oldStart[type] + 1) {
	                iteration++;
	                index = 0;
	              }

	              var linkPos = _start + index * dir;

	              var _ref3 = isRow ? [linkPos, i] : [i, linkPos],
	                  _ref4 = _slicedToArray(_ref3, 2),
	                  linkRow = _ref4[0],
	                  linkCol = _ref4[1];

	              var _value = view.getCellValue(linkRow, linkCol);

	              var num = nums[linkPos];
	              if (num) _value += (num.inc || 1) * (num[1] - num[0] + 1) * iteration * dir;else if (typeof _value == "string" && _value[0] == "=" && _value.length > 0) {
	                if (isRow) _value = view._mData.getStore().transposeMath(_value, _j - _start - index * dir, 0);else _value = view._mData.getStore().transposeMath(_value, 0, _j - _start - index * dir);
	              }

	              var _ref5 = isRow ? [_j, i] : [i, _j],
	                  _ref6 = _slicedToArray(_ref5, 2),
	                  row = _ref6[0],
	                  col = _ref6[1];

	              view.setCellValue(row, col, _value);
	              view.setStyle(row, col, view.getStyle(linkRow, linkCol));
	              var condition = view.conditions.get(linkRow, linkCol);
	              if (condition) pasteCondition(view, {
	                condition: condition
	              }, row, col);else view.conditions.clear(row, col);
	            }
	          }

	          group.end();
	        }
	      }
	    }
	  });
	  webix.event(table.$view, "mousedown", function (e) {
	    if (view.$handleSelection) return webix.html.preventEvent(e);
	  });
	}

	var m9 = /*#__PURE__*/Object.freeze({
		init: init$r
	});

	function expandSelection(r, view) {
	  var maxY = view.config.rowCount;
	  var maxX = view.config.columnCount;
	  var table = view._table;
	  var nr1 = r.start.row,
	      nr2 = r.end.row,
	      nc1 = r.start.column,
	      nc2 = r.end.column;

	  for (var i = nr1 - 1; i > 0; i--) {
	    if (getValue(i, r.start.column, table)) nr1 = i;else break;
	  }

	  for (var _i = nr2 + 1; _i < maxY; _i++) {
	    if (getValue(_i, r.end.column, table)) nr2 = _i;else break;
	  }

	  for (var _i2 = nc1 - 1; _i2 > 0; _i2--) {
	    if (getValue(r.start.row, _i2, table)) nc1 = _i2;else break;
	  }

	  for (var _i3 = nc2 + 1; _i3 < maxX; _i3++) {
	    if (getValue(r.end.row, _i3, table)) nc2 = _i3;else break;
	  }

	  var newrange = {
	    start: {
	      row: nr1,
	      column: nc1
	    },
	    end: {
	      row: nr2,
	      column: nc2
	    }
	  };

	  if (nr1 != r.start.row || nr2 != r.end.row || nc1 != r.start.column || nc2 != r.end.column) {
	    view._table.addSelectArea(newrange.start, newrange.end);
	  }

	  return newrange;
	}

	function getValue(r, c, table) {
	  var value = table.getItem(r)[c];

	  if (value === undefined || value === "") {
	    return false;
	  } else {
	    return true;
	  }
	}

	function init$s(view) {
	  view.attachEvent("onCommand", function (cm) {
	    if (cm.id === "sort-asc" || cm.id === "sort-desc") sortRange(view, null, cm.id.replace("sort-", ""));
	  });
	}
	var sorters = {
	  "int": function (dir, key) {
	    return function (a, b) {
	      if (!b[key]) return -1;
	      if (!a[key]) return 1;
	      var c = parseFloat(a[key]) || dir * Infinity;
	      var d = parseFloat(b[key]) || dir * Infinity;
	      return (c > d ? 1 : c == d ? 0 : -1) * dir;
	    };
	  },
	  "str": function (dir, key) {
	    return function (a, b) {
	      if (!b[key]) return -1;
	      if (!a[key]) return 1;
	      var c = a[key].toString().toLowerCase();
	      var d = b[key].toString().toLowerCase();
	      return (c > d ? 1 : c == d ? 0 : -1) * dir;
	    };
	  }
	};
	function sortRange(view, range$$1, dir) {
	  range$$1 = range$$1 || view._table.getSelectArea();

	  if (range$$1) {
	    range$$1 = rangeObj(range$$1, view);
	    var fullrange = range$$1;
	    if (range$$1.start.row === range$$1.end.row) fullrange = expandSelection(range$$1, view);
	    var key = view.getCellValue(range$$1.start.row, range$$1.start.column, false);
	    var type = isNaN(parseFloat(key)) ? "str" : "int";
	    dir = !dir || dir === "asc" ? 1 : -1;
	    group.set(function () {
	      return sort(fullrange, range$$1.start.column, type, dir, view);
	    });
	  }
	}

	function sort(range$$1, by, type, dir, view) {
	  for (var column = range$$1.start.column; column <= range$$1.end.column; column++) {
	    //get all selected column values
	    var values = [];

	    for (var row = range$$1.start.row; row <= range$$1.end.row; row++) {
	      if (view.isRowVisible(row)) {
	        var value = view.getCellValue(row, column, false);
	        var style = view.getStyle(row, column);
	        var math = view.getCellValue(row, column);
	        math = math && math[0] == "=" ? math : null;
	        var conditions = view.conditions.get(row, column);
	        if (conditions) _changeCondition("remove", row, column, conditions, null, view);
	        values.push({
	          value: value,
	          style: style,
	          math: math,
	          row: row,
	          conditions: conditions
	        });
	      }
	    } //sort them


	    values.sort(sorters[type](dir, "value")); //set new values to original column

	    for (var _row = range$$1.start.row; _row <= range$$1.end.row; _row++) {
	      if (view.isRowVisible(_row)) {
	        var element = values.shift();
	        view.setStyle(_row, column, element.style || null);
	        if (element.conditions) _changeCondition("update", _row, column, null, element.conditions, view);
	        if (!element.math) view.setCellValue(_row, column, element.value);else {
	          var newMath = view._mData.getStore().transposeMath(element.math, _row - element.row, 0);

	          view.setCellValue(_row, column, newMath);
	        }
	      }
	    }
	  }

	  view.refresh();
	}

	var m10 = /*#__PURE__*/Object.freeze({
		init: init$s,
		sortRange: sortRange
	});

	function updateSheetNames(view, formula, oldName, newName) {
	  if (formula.indexOf("!") == -1) return formula;
	  var stack = split(formula, view, true);

	  for (var i = 0; i < stack.length; i++) {
	    if (webix.isArray(stack[i])) {
	      var thisSheet = stack[i][0] === oldName;
	      var sheet = thisSheet ? newName : stack[i][0];
	      if (sheet.indexOf(" ") != -1) sheet = "'".concat(sheet, "'");
	      stack[i] = "".concat(sheet, "!").concat(stack[i][1]);
	    }
	  }

	  return stack.join("");
	}

	function isFormula(val) {
	  return typeof val == "string" && val[0] == "=";
	}

	function init$t(view) {
	  view.attachEvent("onSheetRename", function (name, newName) {
	    view._sheets.forEach(function (sheet) {
	      var activeSheet = sheet.name == view.getActiveSheet();
	      if (activeSheet) sheet.content = view.serialize(); //actual data

	      if (sheet.content.editors) {
	        sheet.content.editors.forEach(function (value) {
	          var options = value[2].options;

	          if (options) {
	            if (typeof options == "string") value[2].options = updateSheetNames(view, options, name, newName);else for (var i = 0; i < options.length; i++) {
	              var option = options[i];

	              if (typeof option == "string") {
	                if (isFormula(option)) options[i] = updateSheetNames(view, option, name, newName);
	              } else if (isFormula(option.id)) option.id = updateSheetNames(view, option.id, name, newName);
	            }
	          }
	        });
	      }

	      if (sheet.content.conditions) {
	        sheet.content.conditions.forEach(function (value) {
	          if (isFormula(value[3])) value[3] = updateSheetNames(view, value[3], name, newName);
	        });

	        if (activeSheet) {
	          view.conditions.clear();
	          view.conditions.parse(sheet.content.conditions);
	        }
	      }
	    });
	  });
	}

	var m16c = /*#__PURE__*/Object.freeze({
		init: init$t
	});

	function init$u(view) {
	  view.attachEvent("onUndo", function (action, row, column, value) {
	    if (action == "gridlines-hide") {
	      hideGridlines(view, value);
	    }
	  });
	}
	function hideGridlines(view) {
	  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	  var grid = view.$$("cells");
	  var borderless = grid.$view.className.indexOf("webix_borderless") != -1;
	  if (state === "toggle") state = !borderless;

	  if (!borderless && state) {
	    webix.html.addCss(grid.$view, "webix_borderless", true);
	    view.callEvent("onCommand", [{
	      id: "toolbar-update",
	      name: "hide-gridlines",
	      value: true
	    }]);
	    view.callEvent("onAction", ["gridlines-hide", {
	      newValue: true,
	      value: false
	    }]);
	  } else if (borderless && !state) {
	    webix.html.removeCss(grid.$view, "webix_borderless");
	    view.callEvent("onCommand", [{
	      id: "toolbar-update",
	      name: "hide-gridlines",
	      value: false
	    }]);
	    view.callEvent("onAction", ["gridlines-hide", {
	      newValue: false,
	      value: true
	    }]);
	  }
	}
	function serialize$9(view, data) {
	  data.table.gridlines = view.$$("cells").$view.className.indexOf("webix_borderless") != -1 ? 0 : 1;
	}
	function load$7(view, data) {
	  var mode = false;
	  if (!webix.isUndefined(data.table) && !webix.isUndefined(data.table.gridlines)) mode = !data.table.gridlines;
	  hideGridlines(view, mode);
	}

	var m1$1 = /*#__PURE__*/Object.freeze({
		init: init$u,
		hideGridlines: hideGridlines,
		serialize: serialize$9,
		load: load$7
	});

	function init$v(view) {
	  view.attachEvent("onUndo", function (action, row, column, value) {
	    if (action == "header-hide") {
	      hideHeaders(view, value);
	    }
	  });
	}
	function hideHeaders(view, state) {
	  var grid = view.$$("cells");
	  var old = !grid.config.header;
	  if (state == "toggle") state = grid.config.header;

	  if (state != old) {
	    grid.config.header = !state;
	    view.callEvent("onCommand", [{
	      id: "toolbar-update",
	      name: "hide-headers",
	      value: state
	    }]);
	    view.callEvent("onAction", ["header-hide", {
	      newValue: state,
	      value: old
	    }]);
	  }

	  var firstVisible = grid.isColumnVisible("rowId");
	  if (firstVisible && state || !firstVisible && !state) grid.hideColumn("rowId", {}, true, state);
	  grid.refreshColumns();
	}
	function serialize$a(view, data) {
	  data.table.headers = view.$$("cells").config.header ? 1 : 0;
	}
	function load$8(view, data) {
	  var mode;
	  if (data.table && !webix.isUndefined(data.table.headers)) mode = !data.table.headers;
	  hideHeaders(view, mode);
	}

	var m2$1 = /*#__PURE__*/Object.freeze({
		init: init$v,
		hideHeaders: hideHeaders,
		serialize: serialize$a,
		load: load$8
	});

	function init$w(view) {
	  view.comments = {
	    get: function (row, column) {
	      return getComment(view, row, column);
	    },
	    add: function (row, column, comment) {
	      commentCell(view, row, column, comment);
	    },
	    remove: function (row, column) {
	      removeComment(view, row, column);
	    },
	    _activeComment: {},
	    _pull: {}
	  };
	  view.attachEvent("onReset", function () {
	    return reset$9(view);
	  });
	  view.attachEvent("onUndo", function (type, row, column, value) {
	    if (type === "comment") _undoComment(view, row, column, value);
	  });
	  view.attachEvent("onAction", function (action, p) {
	    if (action == "before-grid-change") updatePosition$6(view, p.name, p.inc, p.data, p.start);
	  });
	}

	function _undoComment(view, row, column, value) {
	  if (getComment(view, row, column)) removeComment(view, row, column, true);
	  if (value) commentCell(view, row, column, value, true);
	}

	function reset$9(view) {
	  view.comments._pull = {};
	}

	function removeComment(view, row, column, silent) {
	  if (getComment(view, row, column)) {
	    if (!silent) view.callEvent("onAction", ["comment", {
	      row: row,
	      column: column,
	      newValue: null,
	      value: view.comments._pull[row][column]
	    }]);
	    delete view.comments._pull[row][column];
	  }

	  view.$$("cells").updateItem(row, column);
	}

	function removeCommentsRange(view, range$$1) {
	  group.set(function () {
	    eachRange(range$$1, view, function (view, cell) {
	      if (getComment(view, cell.row, cell.column)) removeComment(view, cell.row, cell.column);
	    });
	    view.$$("cells").refresh();
	  });
	}

	function commentCell(view, row, column, comment, silent) {
	  var oldValue = getComment(view, row, column) ? view.comments._pull[row][column] : null;
	  var table = view.$$("cells");
	  if (typeof comment == "string") comment = comment.trim() ? comment : "";
	  view.comments._pull[row] = view.comments._pull[row] ? view.comments._pull[row] : {};
	  view.comments._pull[row][column] = comment;
	  table.addCellCss(row, column, "ssheet_commented_cell");
	  if (!silent) view.callEvent("onAction", ["comment", {
	    row: row,
	    column: column,
	    newValue: comment,
	    value: oldValue
	  }]);
	}

	function serialize$b(view, data) {
	  var row,
	      column,
	      comments = [];

	  for (row in view.comments._pull) {
	    for (column in view.comments._pull[row]) {
	      if (view.comments._pull[row][column]) comments.push([row, column, view.comments._pull[row][column]]);
	    }
	  }

	  data.comments = comments;
	}
	function load$9(view, data) {
	  var i,
	      comments = data.comments;
	  if (comments) for (i = 0; i < comments.length; i++) {
	    commentCell(view, comments[i][0], comments[i][1], comments[i][2], true);
	  }
	}

	function updatePosition$6(view, name, inc, data, start) {
	  var comments = data.comments,
	      i = comments.length;

	  if (inc) {
	    while (i--) {
	      var _comments$i = _slicedToArray(comments[i], 2),
	          row = _comments$i[0],
	          column = _comments$i[1];

	      if (row && name == "row" && row >= start.row || column && name == "column" && column >= start.column) {
	        if (name == "row") {
	          if (row < start.row - inc) //delete comment if row was deleted
	            comments.splice(i, 1);else //update mark position if upper row was deleted
	            comments[i][0] = row * 1 + inc;
	        } else if (name == "column") {
	          if (column < start.column - inc) {
	            comments.splice(i, 1);
	          } else comments[i][1] = column * 1 + inc;
	        }
	      }
	    }
	  }
	}

	function getComment(view, row, column) {
	  return view.comments._pull[row] && view.comments._pull[row][column] ? view.comments._pull[row][column] : "";
	}

	var m7 = /*#__PURE__*/Object.freeze({
		init: init$w,
		removeCommentsRange: removeCommentsRange,
		serialize: serialize$b,
		load: load$9
	});

	function init$x(view) {
	  view.attachEvent("onUndo", function (action, row, column, value) {
	    if (action == "show-formulas") {
	      showFormulas(view, value);
	    }
	  });
	}
	function showFormulas(view, value) {
	  var grid = view.$$("cells");
	  var old = grid.config.showFormulas;
	  if (value == "toggle") value = !old;

	  if (value != old) {
	    grid.config.showFormulas = value;
	    view.callEvent("onCommand", [{
	      id: "toolbar-update",
	      name: "show-formulas",
	      value: value
	    }]);
	    view.callEvent("onAction", ["show-formulas", {
	      newValue: value,
	      value: old
	    }]);
	    grid.refresh();
	  }
	}
	function serialize$c(view, data) {
	  data.table.showFormulas = view.$$("cells").config.showFormulas ? 1 : 0;
	}
	function load$a(view, data) {
	  var mode = false;
	  if (data.table && data.table.showFormulas) mode = data.table.showFormulas;
	  showFormulas(view, mode);
	}

	var m8$1 = /*#__PURE__*/Object.freeze({
		init: init$x,
		showFormulas: showFormulas,
		serialize: serialize$c,
		load: load$a
	});

	function init$y(view) {
	  var modules = [m1$1, m2$1, m3, m4$1, m5$1, m6$1, m7, m8$1];
	  view.attachEvent("onDataSerialize", function (data) {
	    for (var i = 0; i < modules.length; i++) {
	      if (modules[i].serialize) modules[i].serialize(view, data);
	    }
	  });
	  view.attachEvent("onDataParse", function (data) {
	    for (var i = 0; i < modules.length; i++) {
	      if (modules[i].load) modules[i].load(view, data);
	    }
	  });
	}

	var m19 = /*#__PURE__*/Object.freeze({
		init: init$y
	});

	var types = [".xls", ".xlt", ".xla", ".xlsx", ".xlsm", ".xltx", ".xltm", ".xlam", ".xlsb"];
	function init$z(view) {
	  var uploader;

	  if (window.XMLHttpRequest && new XMLHttpRequest().upload) {
	    uploader = webix.ui({
	      view: "uploader",
	      apiOnly: true,
	      accept: types.join()
	    });
	    uploader.attachEvent("onBeforeFileAdd", webix.bind(function (upload) {
	      if (types.indexOf("." + upload.type.toLowerCase()) > -1) {
	        view.reset();
	        if (!upload.file.options) upload.file.options = {};
	        webix.extend(upload.file.options, {
	          cellDates: false,
	          sheetStubs: view.config.sheetStubs
	        });
	        view.parse(upload.file, "excel");
	      }

	      return false;
	    }, this));

	    view._destroy_with_me.push(uploader);
	  }

	  view.attachEvent("onCommand", function (obj) {
	    if (obj.id === "excel-import") startImport(view, uploader);
	  });
	}

	function startImport(view, uploader) {
	  if (!uploader) view.alert(webix.i18n.spreadsheet.labels["import-not-support"]);else webix.delay(function () {
	    return uploader.fileDialog();
	  });
	}

	var m20 = /*#__PURE__*/Object.freeze({
		init: init$z
	});

	function init$A(view) {
	  var table = view._table;

	  view.$exportView = function (options) {
	    var pdf = options.export_mode == "pdf";
	    var excel = options.export_mode == "excel";
	    var defaultOptions = {
	      stubCells: true,
	      header: false,
	      footer: false,
	      heights: true,
	      rawValues: !pdf,
	      filterHTML: true,
	      spans: true,
	      styles: true,
	      math: !pdf,
	      hidden: excel,
	      xCorrection: table.config.header || options.hidden ? 1 : 0,
	      ignore: {
	        rowId: true
	      },
	      conditions: true
	    };
	    webix.extend(options, defaultOptions);
	    if (excel || pdf) return _exportView(view, options);else return table;
	  };

	  table.$getExportValue = function (row, column, options) {
	    var value = view.getCellValue(row, column, options.math);
	    var mode = options.export_mode;
	    var math = options.math && value[0] == "=" && value.length > 1;
	    if ((mode == "pdf" || mode == "csv") && !math && !options.rawValues) value = getRenderedValue(view, row, column);else if (mode == "excel" && math) {
	      if (/^=(image|sparkline)\(/i.test(value)) value = "";else value = {
	        value: /^=hyperlink\(/i.test(value) ? value.split("\"")[3] : view.getCellValue(row, column, false),
	        formula: value
	      };
	    }
	    return value;
	  };
	}

	function _exportView(view, options) {
	  var _this = this,
	      _arguments = arguments;

	  var excel = options.export_mode == "excel";
	  if (options.sheets === true) options.sheets = view._sheets.map(function (s) {
	    return s.name;
	  });else if (!options.sheets || !options.sheets.length) options.sheets = [view._activeSheet];else if (typeof options.sheets == "string") options.sheets = [options.sheets];
	  if (!excel) options.sheets = options.sheets.filter(function (sheet) {
	    return isVisible(view, sheet);
	  });else if (view._sheets.length != options.sheets.length) {
	    for (var i = 0; i < view._sheets.length; i++) {
	      //add veryHidden sheets in any case
	      var sheet = view._sheets[i];
	      if (sheet.state == "veryHidden" && options.sheets.indexOf(sheet.name) == -1) options.sheets.push(sheet.name);
	    }
	  }
	  options.dataOnly = true;
	  var data = [];
	  var active = view._activeSheet;

	  var _loop = function (_i) {
	    var sheet = options.sheets[_i];
	    var id = sheet.id || sheet;
	    view.showSheet(id);
	    var oldZoom = view._zoom;
	    view.ignoreUndo(function () {
	      return view.zoom(1);
	    });
	    if (options.hidden) options.xCorrection = 1;
	    var sheetOptions = sheet.options ? webix.extend(sheet.options, options) : webix.copy(options);
	    if (id != active) sheetOptions._hidden = true;
	    if (!sheetOptions.name) sheetOptions.name = id;
	    var pdfTable = !excel && sheetOptions.display != "image";
	    var serialized = view.serialize();

	    var _getDimension = getDimension(serialized.data, serialized.spans, 0, 0),
	        _getDimension2 = _slicedToArray(_getDimension, 2),
	        rows = _getDimension2[0],
	        cols = _getDimension2[1];

	    if (!excel) {
	      if (webix.isUndefined(sheetOptions.textBefore)) sheetOptions.textBefore = sheetOptions.name;

	      if (pdfTable) {
	        sheetOptions.ignore = sheetOptions.ignore || {};

	        for (var _i2 = cols + 1; _i2 <= view.config.columnCount; _i2++) {
	          sheetOptions.ignore[_i2] = true;
	        }

	        var filter = sheetOptions.filter || function () {
	          return true;
	        };

	        sheetOptions.filter = function (obj) {
	          return obj.id <= rows && filter.apply(_this, _arguments);
	        };
	      }
	    }

	    var sheetData = webix[excel ? "toExcel" : "toPDF"](view._table, sheetOptions);
	    if (excel) sheetData[0].state = getSheet(view, id).state || "visible";
	    if (pdfTable && sheetData[0].scheme.length == 0) return "continue";

	    if ((excel || pdfTable) && sheetOptions.styles) {
	      var styles = sheetData[0].styles = _getStyles(view, sheetOptions, excel, rows, cols);

	      if (pdfTable) _updatePdfData(styles, sheetData, sheetOptions, view, serialized);
	    }

	    data = data.concat(sheetData);

	    if (excel) {
	      data[_i].ranges = [];
	      view.ranges.serialize(id).forEach(function (range) {
	        var ref = range[1].split("!");

	        data[_i].ranges.push({
	          Sheet: range[2] ? null : _i,
	          Name: range[0],
	          Ref: ref[0] + "!" + ref[1].replace(/[0-9]+|[A-Z]+/gi, function (match) {
	            return "$".concat(match);
	          })
	        });
	      });
	    } else {
	      if (options.autowidth) getAutowidth(sheetOptions, options);
	    }

	    view.ignoreUndo(function () {
	      return view.zoom(oldZoom);
	    });
	  };

	  for (var _i = 0; _i < options.sheets.length; _i++) {
	    var _ret = _loop(_i);

	    if (_ret === "continue") continue;
	  }

	  view.showSheet(active);
	  delete options.dataOnly;
	  return data;
	}

	function _updatePdfData(styles, sheetData, sheetOptions, view, serialized) {
	  var header = sheetOptions.header ? 1 : 0;

	  if (sheetOptions.spans) {
	    var spans = serialized.spans.sort(function (a, b) {
	      return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0;
	    });

	    for (var i = 0; i < spans.length; i++) {
	      if (spans[i][2] > 1) {
	        var row = spans[i][0] - 1 + header,
	            // zero-based row position
	        col = spans[i][1] - 1,
	            // zero-based col position
	        cols = spans[i][2];

	        if (styles[row] && styles[row][col]) {
	          styles[row][col].colspan = cols; // if colspan, then remove merged cells (else PDFJS will shift columns)

	          var rowData = sheetData[0].exportData[row - header];

	          if (rowData) {
	            // remove merged cell values
	            rowData.splice(col + 1, cols - 1);
	          }

	          var style = Object.values(styles[row]);
	          style.splice(col + 1, cols - 1); // remove merged cell styles

	          styles[row] = style;
	        }
	      }
	    }
	  }

	  var data = sheetData[0].exportData;

	  for (var r = 0; r < data.length; r++) {
	    for (var c = 0; c < data[r].length; c++) {
	      var height = view.$$("cells").config.rowHeight;

	      if (sheetOptions.heights && serialized.sizes.length) {
	        for (var s = 0; s < serialized.sizes.length; s++) {
	          var rowSize = serialized.sizes[s][0];

	          if (rowSize && rowSize == r + 1) {
	            height = serialized.sizes[s][2];
	            break;
	          }
	        }
	      }

	      var cellStyle = styles[r + header][c];
	      var align = cellStyle.vertAlign;
	      var pad = height * 0.75 - cellStyle.fontSize; // available px for padding in top & bottom

	      cellStyle.paddingTop = align == "top" ? 0 : align == "bottom" ? pad : pad / 2;
	      cellStyle.paddingBottom = align == "bottom" ? 0 : align == "top" ? pad : pad / 2;
	    }
	  }
	}

	function getAutowidth(view, options) {
	  var prop = options.orientation && options.orientation == "landscape" ? "height" : "width";
	  var width;
	  if (view.$width) width = view.$width;else //'view' can be local settings and we need to compare them with common ones
	    width = view[prop];
	  options[prop] = Math.max(options[prop] || 0, width || 0);
	}

	function _safeColor(str) {
	  str = str.substring(1);
	  if (str.length === 3) str = str + str;
	  return str;
	}

	function _getDefaults(options) {
	  var d = defaultStyles;
	  if (options.export_mode == "excel") return {
	    font: {
	      sz: d["font-size"] * 0.75,
	      name: d["font-family"].replace(/'|,.*$/g, "") //we do not export default color, but it is the right place to do it

	    },
	    alignment: {
	      horizontal: d["text-align"],
	      vertical: "center",
	      wrapText: d["white-space"] != "nowrap"
	    }
	  };else return {
	    fontSize: d["font-size"] * 0.75,
	    //we do not export default color, but it is the right place to do it
	    textAlign: d["text-align"],
	    whiteSpace: d["white-space"] != "nowrap"
	  };
	}

	function _getStyles(view, options, excel, rows, cols) {
	  view.compactStyles();
	  var result = [];
	  var cached = {};
	  var cachedConditions = {};

	  var defaults = _getDefaults(options);

	  if (excel && options.docHeader) result = result.concat([{
	    0: _getDocStyle(options.docHeader.css, defaults)
	  }, {}]);
	  if (options.header) result.push({});
	  var delta = result.length;
	  var grid = view.$$("cells");
	  var rIndex = delta;
	  grid.eachRow(function (row) {
	    if (row > rows) return;
	    var cIndex = 0;
	    grid.eachColumn(function (col) {
	      if (cIndex > cols) return;

	      if (cIndex >= options.xCorrection) {
	        var css = view.getStyle(row, col);
	        var index = cIndex - options.xCorrection;
	        result[rIndex] = result[rIndex] || {};
	        var styles;

	        if (css) {
	          if (cached[css.id]) styles = webix.copy(cached[css.id]);else {
	            styles = _getCellStyle(css.text, excel, options);

	            for (var name in defaults) {
	              if (excel) webix.extend(styles[name], defaults[name]);else if (!styles[name]) styles[name] = defaults[name];
	            }

	            cached[css.id] = webix.copy(styles);
	          }
	        } else styles = webix.copy(defaults);

	        if (options.conditions) {
	          //not real excel condition, save only bg and color (sheetJS doesn't support)
	          var condition = _getCellConditions(view, row, col, cachedConditions);

	          if (condition) _updateStyleCondition(styles, condition, excel);
	        }

	        result[rIndex][index] = styles;
	        var type;

	        if (options.math) {
	          var math = view.getCellValue(row, col);

	          if (typeof math == "string" && math[0] == "=" && math.length > 1) {
	            var value = view.getCellValue(row, col, false);
	            if (isNaN(value)) type = "string";
	          }
	        }

	        result[rIndex][index].type = type || getType(view, row, col);
	      }

	      cIndex++;
	    }, options.hidden);
	    rIndex++;
	  }, options.hidden);
	  if (excel && options.docFooter) result = result.concat([{}, {
	    0: _getDocStyle(options.docFooter.css, defaults)
	  }]);
	  return result;
	}

	function _getCellStyle(styles, excel, options) {
	  var str = styles.split(";");
	  var stl = {};
	  if (excel) stl = {
	    font: {},
	    alignment: {},
	    border: {}
	  };

	  for (var s = 0; s < str.length; s++) {
	    if (str[s]) {
	      if (excel) _getExcelCellStyle(stl, str, s);else _getPdfCellStyle(stl, str, s, options.table);
	    }
	  }

	  return stl;
	}

	function _getCellConditions(view, r, c, cached) {
	  var rendered = getRenderedValue(view, r, c);
	  var css = getConditionCss(view, r, c, rendered);

	  if (css) {
	    if (cached[css]) return cached[css];
	    var el = webix.html.create("div", {
	      "class": css
	    });
	    document.body.appendChild(el);
	    var computed = window.getComputedStyle(el);
	    var bg = computed.backgroundColor;
	    var color = computed.color;
	    document.body.removeChild(el);
	    cached[css] = [bg, color];
	    return cached[css];
	  }
	}

	function _updateStyleCondition(stl, condition, excel) {
	  var _condition$map = condition.map(function (val) {
	    return webix.color.rgbToHex(val);
	  }),
	      _condition$map2 = _slicedToArray(_condition$map, 2),
	      bg = _condition$map2[0],
	      color = _condition$map2[1];

	  if (excel) {
	    stl.fill = {
	      fgColor: {
	        rgb: bg
	      }
	    };
	    stl.font.color = {
	      rgb: color
	    };
	  } else {
	    stl.backgroundColor = bg;
	    stl.color = color;
	  }
	}

	function _getExcelCellStyle(stl, str, s) {
	  switch (style_names[s]) {
	    case "color":
	      stl.font.color = {
	        rgb: _safeColor(str[s])
	      };
	      break;

	    case "background":
	      {
	        var fill = _safeColor(str[s]);

	        if (fill && fill.toLowerCase() !== "ffffff") stl.fill = {
	          fgColor: {
	            rgb: fill
	          }
	        };
	        break;
	      }

	    case "text-align":
	      stl.alignment.horizontal = str[s];
	      break;

	    case "font-family":
	      stl.font.name = str[s].replace(/'|,.*$/g, ""); // cut off fallback font

	      break;

	    case "font-size":
	      stl.font.sz = str[s].replace("px", "") * 0.75; //px to pt conversion

	      break;

	    case "font-style":
	      stl.font.italic = str[s] == "italic";
	      break;

	    case "underline":
	      stl.font.underline = str[s] == "underline";
	      break;

	    case "strike":
	      stl.font.strike = str[s] == "strike";
	      break;

	    case "font-weight":
	      stl.font.bold = str[s] == "bold";
	      break;

	    case "vertical-align":
	      stl.alignment.vertical = str[s] == "middle" ? "center" : str[s];
	      break;

	    case "wrap":
	      stl.alignment.wrapText = str[s] == "wrap";
	      break;

	    case "borders":
	      break;

	    case "format":
	      stl.format = getFormatSource(str[s], true) || "";
	      break;

	    case "border-right":
	    case "border-bottom":
	    case "border-left":
	    case "border-top":
	      stl.border[style_names[s].split("-")[1]] = getBorderStyles(str[s], true);
	      break;

	    case "indent":
	      stl.alignment.indent = str[s];
	      break;
	  }
	}

	function _getPdfCellStyle(stl, str, s, table) {
	  switch (style_names[s]) {
	    case "color":
	      stl.color = _safeColor(str[s]);
	      break;

	    case "background":
	      stl.backgroundColor = _safeColor(str[s]);
	      break;

	    case "text-align":
	      stl.textAlign = str[s];
	      break;

	    case "font-family":
	      break;

	    case "font-size":
	      stl.fontSize = str[s].replace("px", "") * 0.75;
	      break;

	    case "font-style":
	      stl.italic = str[s] == "italic";
	      break;

	    case "underline":
	      stl.underline = str[s] == "underline";
	      break;

	    case "strike":
	      stl.strikethrough = str[s] == "strike";
	      break;

	    case "font-weight":
	      stl.bold = str[s] == "bold";
	      break;

	    case "vertical-align":
	      stl.vertAlign = str[s]; // not supported in PDFJS, so simulate with lineHeight and paddingTop

	      break;

	    case "wrap":
	      stl.whiteSpace = str[s] != "nowrap";
	      break;

	    case "borders":
	      break;

	    case "format":
	      break;

	    case "border-right":
	    case "border-bottom":
	    case "border-left":
	    case "border-top":
	      {
	        var pos = style_names[s].split("-")[1];
	        stl["border".concat(pos[0].toUpperCase() + pos.substring(1), "Color")] = getBorderStyles(str[s]);
	        break;
	      }

	    case "indent":
	      if (str[s]) {
	        var name = "padding".concat(str[2] == "right" ? "Right" : "Left");
	        var padding = table && table[name] ? table[name] : 10; // 10 - default padding value

	        stl[name] = padding + str[s] * 6;
	      }

	      break;
	  }
	}

	function getBorderStyles(val, excel) {
	  var _val$split = val.split(","),
	      _val$split2 = _slicedToArray(_val$split, 2),
	      color = _val$split2[0],
	      type = _val$split2[1];

	  if (excel) return {
	    color: {
	      rgb: _safeColor(color)
	    },
	    style: type
	  };else return _safeColor(color);
	}

	function _getDocStyle(css) {
	  if (!css) return {};
	  var str = [];

	  for (var i = 0; i < style_names.length; i++) {
	    str.push(css[style_names[i]] || "");
	  }

	  return _getCellStyle(str.join(";"), true);
	}

	var m23 = /*#__PURE__*/Object.freeze({
		init: init$A
	});

	function init$B(view) {
	  view._parseExcel = function (obj, driver) {
	    var options = obj.options || {};
	    options.math = view.config.math;
	    var full = {
	      sheets: []
	    };
	    var fmt = {
	      count: formatsCount,
	      cache: {}
	    };

	    for (var i = 0; i < obj.names.length; i++) {
	      options.name = obj.names[i];
	      full.sheets.push({
	        name: options.name,
	        state: obj.states[i],
	        content: _excel_to_data(driver.getSheet(obj, options), obj.ranges, i, fmt)
	      });
	    }

	    return full;
	  };

	  view._parseCsv = function (obj, driver) {
	    obj = driver.getRecords(obj);
	    var dataObj = webix.copy(obj);
	    var data = [];

	    for (var i = 0; i < dataObj.length; i++) {
	      var item = dataObj[i].split(driver.cell);

	      for (var c = 0; c < item.length; c++) {
	        var row = i + 1,
	            column = c + 1;
	        data.push([row, column, item[c]]);
	      }
	    }

	    return {
	      data: data
	    };
	  };
	}

	function _excel_to_data(obj, ranges, index, fmt) {
	  var dataObj = webix.copy(obj.data);
	  var data = [];

	  for (var i = 0; i < dataObj.length; i++) {
	    for (var c = 0; c < dataObj[0].length; c++) {
	      var row = i + 1,
	          column = c + 1;
	      data.push([row, column, dataObj[i][c]]);
	    }
	  }

	  obj.data = data; //merged cells

	  if (obj.spans) {
	    for (var _i = 0; _i < obj.spans.length; _i++) {
	      obj.spans[_i][0]++;
	      obj.spans[_i][1]++;
	    }
	  } //named ranges


	  if (ranges) {
	    for (var r = 0; r < ranges.length; r++) {
	      var sheetIndex = ranges[r].Sheet;
	      var book = webix.isUndefined(sheetIndex);

	      if (book || sheetIndex === index) {
	        obj.ranges = obj.ranges || [];
	        obj.ranges.push([ranges[r].Name.toUpperCase(), ranges[r].Ref.substring(ranges[r].Ref.indexOf("!") + 1).replace(/\$/g, ""), book]);
	      }
	    }
	  } //cell styles


	  if (obj.styles) _getStyles$1(obj, fmt);
	  if (obj.types) _getTypes(obj);

	  if (obj.hidden) {
	    _getHidden(obj);
	  } //column width and row height


	  if (obj.sizes) {
	    for (var _i2 = 0; _i2 < obj.sizes.length; _i2++) {
	      if (obj.sizes[_i2][0] == "column") obj.sizes[_i2] = [0, obj.sizes[_i2][1] + 1, obj.sizes[_i2][2]];else obj.sizes[_i2] = [obj.sizes[_i2][1] + 1, 0, obj.sizes[_i2][2]];
	    }
	  }

	  return obj;
	} //ARGB conversion


	function _safeColor$1(str) {
	  str = str || "000000";
	  if (str.length === 8) str = str.substring(2);
	  return "#" + str;
	} //only fonts that we support can be imported


	function _safeFont(str) {
	  var safe = defaultStyles["font-family"];

	  for (var i = 0; i < fontFamily.length; i++) {
	    if (fontFamily[i].value == str) {
	      safe = fontFamily[i].id;
	      break;
	    }
	  }

	  return safe;
	}

	function _getTypes(obj) {
	  obj.types.forEach(function (type) {
	    for (var i = 0; i < obj.data.length; i++) {
	      if (obj.data[i][0] === type[0] + 1 && obj.data[i][1] === type[1] + 1) {
	        obj.data[i][4] = type[2];
	        break;
	      }
	    }
	  });
	}

	function _getHidden(obj) {
	  var hidden = {
	    row: [],
	    column: []
	  };

	  for (var i = 0; i < obj.hidden.length; i++) {
	    var item = obj.hidden[i];
	    if (item[0] == "column") hidden.column.push(item[1] + 1);else hidden.row.push(item[1] + 1);
	  }

	  obj.table = {
	    hidden: hidden
	  };
	}

	function _getBorderStyles(pos, stl) {
	  pos = pos.replace("border-", "");

	  if (stl.border && stl.border[pos]) {
	    var border = stl.border[pos];

	    if (border.color) {
	      var color = _safeColor$1(border.color.rgb) || "";
	      var type = border.style || "";
	      return "".concat(color, ",").concat(type);
	    }
	  }

	  return "";
	}

	function _getStyles$1(obj, fmt) {
	  var stylescount = 1;
	  var styleshash = {},
	      styles = [],
	      formats = [];

	  for (var i = 0; i < obj.styles.length; i++) {
	    var str = [],
	        stl = obj.styles[i][2],
	        css = void 0;

	    for (var s = 0; s < style_names.length; s++) {
	      switch (style_names[s]) {
	        case "color":
	          str[s] = stl.font && stl.font.color ? _safeColor$1(stl.font.color.rgb) || "" : "";
	          break;

	        case "background":
	          str[s] = stl.fill && stl.fill.fgColor ? _safeColor$1(stl.fill.fgColor.rgb) || "" : "";
	          break;

	        case "text-align":
	          str[s] = (stl.alignment ? stl.alignment.horizontal : "") || defaultStyles["text-align"];
	          break;

	        case "font-family":
	          str[s] = stl.font && stl.font.name ? _safeFont(stl.font.name) : "";
	          break;

	        case "font-size":
	          str[s] = stl.font && stl.font.sz ? stl.font.sz / 0.75 + "px" || "" : ""; //pt to px conversion

	          break;

	        case "font-style":
	          str[s] = stl.font && stl.font.italic ? "italic" : "";
	          break;

	        case "underline":
	          str[s] = stl.font && stl.font.underline ? "underline" : "";
	          break;

	        case "strike":
	          str[s] = stl.font && stl.font.strike ? "strike" : "";
	          break;

	        case "font-weight":
	          str[s] = stl.font && stl.font.bold ? "bold" : "";
	          break;

	        case "vertical-align":
	          {
	            var va = stl.alignment ? stl.alignment.vertical || "" : "";
	            str[s] = (va == "center" ? "middle" : va) || defaultStyles["vertical-align"];
	            break;
	          }

	        case "wrap":
	          str[s] = stl.alignment && stl.alignment.wrapText ? "wrap" : "nowrap";
	          break;

	        case "borders":
	          str[s] = "";
	          break;

	        case "format":
	          {
	            var _ret = function () {
	              var format = stl.numFmt;
	              var name = "";

	              if (format && format != "General") {
	                format = format.replaceAll("\\", "");
	                if (formatCache[format]) name = formatCache[format];else if (fmt.cache[format]) name = fmt.cache[format];else name = fmt.cache[format] = "fmt" + fmt.count++;
	                if (!find(formats, function (arr) {
	                  return arr[0] == name;
	                })) formats.push([name, format]);
	              }

	              str[s] = name;
	              return "break";
	            }();

	            break;
	          }

	        case "border-right":
	        case "border-bottom":
	        case "border-left":
	        case "border-top":
	          str[s] = _getBorderStyles(style_names[s], stl);
	          break;

	        case "indent":
	          str[s] = stl.alignment && stl.alignment.indent ? stl.alignment.indent : "";
	          break;
	      }
	    }

	    str = str.join(";");
	    css = styleshash[str] || "wss" + stylescount;

	    for (var d = 0; d < obj.data.length; d++) {
	      if (obj.data[d][0] === obj.styles[i][0] + 1 && obj.data[d][1] === obj.styles[i][1] + 1) {
	        obj.data[d][3] = css;
	        break;
	      }
	    }

	    if (!styleshash[str]) {
	      styles.push([css, str]);
	      styleshash[str] = css;
	      stylescount++;
	    }
	  }

	  obj.formats = formats;
	  obj.styles = styles;
	}

	var m24 = /*#__PURE__*/Object.freeze({
		init: init$B
	});

	function init$C(view) {
	  view.attachEvent("onCommand", function (action) {
	    switch (action.id) {
	      case "clear-value":
	        view.clearRange(null, {
	          values: true
	        });
	        break;

	      case "clear-style":
	        view.clearRange(null, {
	          styles: true
	        });
	        break;

	      case "clear-conditional-formats":
	        view.clearRange(null, {
	          conditions: true
	        });
	        break;

	      case "clear-dropdown-editors":
	        view.clearRange(null, {
	          editors: true
	        });
	        break;

	      case "clear-all":
	        group.set(function () {
	          view.clearRange(null, null);
	        });
	        break;

	      case "clear-comments":
	        view.clearRange(null, {
	          comments: true
	        });
	        break;
	    }
	  });
	}

	var m25 = /*#__PURE__*/Object.freeze({
		init: init$C
	});

	var readyZoom = {};
	function init$D(view) {
	  view.attachEvent("onUndo", function (action, row, column, value) {
	    if (action == "zoom") {
	      zoom$1(view, value);
	    }
	  });
	  view.attachEvent("onDataSerialize", function (data) {
	    return serialize$d(view, data);
	  });
	  view.attachEvent("onDataParse", function (data) {
	    return load$b(view, data);
	  });
	}
	function zoom$1(view, newValue, load) {
	  var grid = view.$$("cells");
	  var value = view._zoom || 1;
	  if (newValue == "in" || newValue == "out") newValue = webix.ui["ssheet-zoom"].prototype.getNext(value, newValue == "in" ? 1 : -1, numbers);
	  view._zoom = newValue;
	  grid.define({
	    minColumnWidth: 40 * newValue
	  });
	  if (view.$$("zoom")) view.$$("zoom").setValue(newValue);

	  if (newValue != value) {
	    var fontSize = webix.skin.$active.fontSize * newValue;
	    var rowHeight = webix.skin.$name == "contrast" || webix.skin.$name == "flat" ? 24 : 20;
	    var className = "webix_ssheet_zoom_" + newValue.toString().replace(".", "_");
	    grid.$view.className = grid.$view.className.replace(/ webix_ssheet_zoom_\w+/, "");
	    grid.define({
	      css: className
	    });

	    if (!load) {
	      zoomSizes(view, value);
	      zoomStyles(view);
	      view.callEvent("onZoom", [newValue, value]);
	    }

	    if (!readyZoom[className] && newValue != 1) {
	      readyZoom[className] = 1; // cells

	      webix.html.addStyle("\n\t\t\t\t.".concat(className, " .webix_hcell, .").concat(className, " .webix_cell{\n\t\t\t\t\tfont-size: ").concat(fontSize, "px;\n\t\t\t\t}\n\n\t\t\t\t.").concat(className, " .sheet_column_0 .webix_cell{\n\t\t\t\t\tpadding: 0 ").concat(12 * newValue, "px;\n\t\t\t\t}\n\n\t\t\t\t.").concat(className, ".webix_ssheet_table .webix_hs_left .webix_hcell.webix_first:before{\n\t\t\t\t\tright: ").concat(4 * newValue, "px;\n\t\t\t\t\tbottom: ").concat(4 * newValue, "px;\n\t\t\t\t\tborder-top-width: ").concat((rowHeight - 8) * newValue, "px;\n\t\t\t\t\tborder-right-width: ").concat((rowHeight - 8) * newValue, "px;\n\t\t\t\t}\n\n\t\t\t\t.").concat(className, " .webix_cell{\n\t\t\t\t\tpadding: ").concat(2 * newValue, "px 0px;\n\t\t\t\t}\n\n\t\t\t\t.").concat(className, " .webix_cell div:first-child{\n\t\t\t\t\tmargin: 0 ").concat(12 * newValue, "px;\n\t\t\t\t}\n\t\t\t")); // icons

	      webix.html.addStyle("\n\t\t\t\t.".concat(className, " .webix_cell.ss_filter, .").concat(className, " .webix_cell.ss_editor{\n\t\t\t\t\tpadding-right: ").concat(16 * newValue, "px;\n\t\t\t\t}\n\t\t\t\t.").concat(className, " .ssheet_filter_sign, .").concat(className, " .webix_cell.ss_editor:after{\n\t\t\t\t\tfont-size: ").concat(20 * newValue, "px;\n\t\t\t\t\tright: ").concat(6 * newValue, "px;\n\t\t\t\t}\n\t\t\t\t.").concat(className, " .webix_cell.ss_filter.ss_editor:after{\n\t\t\t\t\tright: ").concat(28 * newValue, "px;\n\t\t\t\t}\n\t\t\t\t.").concat(className, " .webix_cell.ss_filter.ss_editor{\n\t\t\t\t\tpadding-right: ").concat(36 * newValue, "px;\n\t\t\t\t}\n\t\t\t\t.").concat(className, " .webix_lock:before{\n\t\t\t\t\tfont-size: ").concat(fontSize, "px;\n\t\t\t\t}\n\t\t\t\t.").concat(className, " .ssheet_commented_sign:before{\n\t\t\t\t\tborder-top-width: ").concat(8 * newValue, "px;\n\t\t\t\t\tborder-left-width: ").concat(8 * newValue, "px;\n\t\t\t\t}\n\t\t\t"));
	    }
	  }
	}
	function serialize$d(view, data) {
	  data.table = {
	    zoom: view._zoom
	  };
	}
	function load$b(view, data) {
	  var value = 1;
	  if (data.table && data.table.zoom) value = data.table.zoom;
	  zoom$1(view, value, true);
	}

	var m32 = /*#__PURE__*/Object.freeze({
		init: init$D,
		zoom: zoom$1,
		serialize: serialize$d,
		load: load$b
	});

	function operations(view) {
	  //order in some cases does matter
	  //resize must be applied after math, to size data by the result of math calculation
	  //types must be applied after state and data 
	  var all = [m32, m1, m2, m5, m6, m8, m9, m10, m11, m12, m6$1, m3, m16, m3$1, m8, m17, m16a, m16b, m16c, m4$1, m19, m4, m20, m5$1, m22, m23, m24, m25, m7, m27, m2$1, m1$1, m30, m8$1];

	  for (var i = 0; i < all.length; i++) {
	    if (all[i].init) all[i].init(view);
	  }
	}

	/* row operations */

	function insertRow(row) {
	  callCommand(this, "add", "row", row);
	}
	function deleteRow(row) {
	  callCommand(this, "del", "row", row);
	}
	function setRowHeight(row, height) {
	  setSize(this, "row", row, height);
	}
	/* col operations */

	function insertColumn(column) {
	  callCommand(this, "add", "column", column);
	}
	function deleteColumn(column) {
	  callCommand(this, "del", "column", column);
	}
	function setColumnWidth(column, width) {
	  setSize(this, "column", column, width);
	}
	/* helpers */

	function getCells$1(view, id, group$$1) {
	  if (!id) {
	    var area = view.$$("cells").getSelectArea();
	    if (area) id = [area.start[group$$1], area.end[group$$1]];
	  } else if (!webix.isArray(id)) {
	    id = [id, id];
	  }

	  return id;
	}

	function callCommand(view, name, group$$1, id) {
	  var start = {},
	      end = {};
	  id = getCells$1(view, id, group$$1);
	  if (!id) return;
	  start[group$$1] = id[0];
	  end[group$$1] = id[1];
	  view.callEvent("onCommand", [{
	    id: name,
	    group: group$$1
	  }, start, end]);
	}

	function setSize(view, type, id, size) {
	  id = getCells$1(view, id, type);
	  if (!id) return;
	  group.set(function () {
	    for (var i = id[0]; i <= id[1]; i++) {
	      if (size != "auto") {
	        size *= view._zoom;
	        view.$$("cells")[type == "row" ? "setRowHeight" : "setColumnWidth"](i, size);
	      } else (type == "row" ? adjustRow : adjustColumn)(i, view);
	    }
	  });
	}

	var rco = /*#__PURE__*/Object.freeze({
		insertRow: insertRow,
		deleteRow: deleteRow,
		setRowHeight: setRowHeight,
		insertColumn: insertColumn,
		deleteColumn: deleteColumn,
		setColumnWidth: setColumnWidth
	});

	function lockCell$1(row, column, state) {
	  lockCell(this, row, column, state);
	}
	function isCellLocked$1(row, column) {
	  return isCellLocked(this, row, column);
	}

	var lcl = /*#__PURE__*/Object.freeze({
		lockCell: lockCell$1,
		isCellLocked: isCellLocked$1
	});

	function freezeColumns(column) {
	  var grid = this.$$("cells");

	  if (webix.isUndefined(column)) {
	    var sel = grid.getSelectArea();
	    column = sel ? sel.end.column : 0;
	  }

	  var base = grid.config.columns[0].id == "rowId" ? 1 : 0;
	  var index = base;
	  var removeFreeze = false;

	  if (column && column != this._frozenColumns) {
	    for (var i = column; i > 0; i--) {
	      index = grid.getColumnIndex(i) + 1;
	      if (index) break;
	    }

	    if (!index) index = base;
	  } else removeFreeze = true;

	  group.set(function () {
	    checkSpans(this, "column", column);
	    grid.unselect();
	    grid.define("leftSplit", index);
	    grid.refreshColumns();
	    this.callEvent("onAction", ["freeze-column", {
	      value: this._frozenColumns || 0,
	      newValue: column
	    }]);
	    this._frozenColumns = removeFreeze || !column ? 0 : column;
	  }, this);
	}
	function freezeRows(row) {
	  var grid = this.$$("cells");

	  if (webix.isUndefined(row)) {
	    var sel = grid.getSelectArea();
	    row = sel ? sel.end.row : 0;
	  }

	  var index = 0;
	  var removeFreeze = false;

	  if (row && row != this._frozenRows) {
	    for (var i = row; i > 0; i--) {
	      index = grid.getIndexById(i) + 1;
	      if (index) break;
	    }
	  } else removeFreeze = true;

	  group.set(function () {
	    checkSpans(this, "row", row);
	    grid.unselect();
	    grid.define("topSplit", index);
	    grid.refreshColumns();
	    this.callEvent("onAction", ["freeze-row", {
	      value: this._frozenRows,
	      newValue: row
	    }]);
	    this._frozenRows = removeFreeze || !row ? 0 : row;
	  }, this);
	}

	function checkSpans(view, type, num) {
	  var grid = view.$$("cells");
	  var spans = grid.getSpan();
	  var changed;

	  for (var row in spans) {
	    if (type == "row" && row > num) continue;

	    for (var col in spans[row]) {
	      if (type == "column" && col > num) continue;
	      var span = spans[row][col];
	      var spanSize = type == "row" ? row * 1 + span[1] - 1 : col * 1 + span[0] - 1;

	      if (spanSize > num) {
	        changed = true;
	        changeSpan(view, [row, col], type == "row" ? span[0] : span[0] - (spanSize - num), type == "row" ? span[1] - (spanSize - num) : span[1]);
	      }
	    }
	  }

	  if (changed) view.refresh();
	}

	function changeSpan(view, span, x, y) {
	  view.splitCell(span[0], span[1], true);
	  view.combineCells({
	    cell: {
	      row: span[0],
	      column: span[1]
	    },
	    x: x,
	    y: y
	  }, true);
	}

	var fcl = /*#__PURE__*/Object.freeze({
		freezeColumns: freezeColumns,
		freezeRows: freezeRows
	});

	function hideGridlines$1(state) {
	  hideGridlines(this, state);
	}

	var hbr = /*#__PURE__*/Object.freeze({
		hideGridlines: hideGridlines$1
	});

	function hideHeaders$1(state) {
	  hideHeaders(this, state);
	}

	var hhd = /*#__PURE__*/Object.freeze({
		hideHeaders: hideHeaders$1
	});

	function hideColumn(column, state) {
	  setState$1(this, column, state, "column");
	}
	function isColumnVisible$1(column) {
	  return isColumnVisible(this, column);
	}
	function hideRow(row, state) {
	  setState$1(this, row, state, "row");
	}
	function isRowVisible$1(row) {
	  return isRowVisible(this, row);
	}

	var hrc = /*#__PURE__*/Object.freeze({
		hideColumn: hideColumn,
		isColumnVisible: isColumnVisible$1,
		hideRow: hideRow,
		isRowVisible: isRowVisible$1
	});

	function addImage(row, column, url) {
	  this.setCellValue(row, column, image(url));
	  this.refresh();
	}
	function addSparkline(row, column, config) {
	  var value = chart(config);
	  this.setCellValue(row, column, value);
	  this.refresh();
	} // getSheetData is deprecated, use ss.getCellValue(row, col, math, page), ss.getRangeValue(range, page) instead

	function getSheetData$1(name) {
	  var _this = this;

	  if (this._mData.getPage(name)) return {
	    getValue: function (r, c, math) {
	      return _this.getCellValue(r, c, math, name);
	    },
	    getRangeValue: function (range) {
	      return _this.getRangeValue(range, name);
	    }
	  };
	}
	function registerMathMethod(name, handler) {
	  addMath(this, name, handler, true);
	}
	function recalculate() {
	  this._mData.getStore().recalculate();

	  this.callEvent("onMathRefresh", []);
	  this.refresh();
	}
	function setPlaceholder(name, value) {
	  if (_typeof(name) == "object") {
	    value = name;
	    name = "*";
	  }

	  this._mData.getStore().setPlaceholder(name, value);

	  this.refresh();
	  this.callEvent("onMathRefresh", []);
	}

	var mat = /*#__PURE__*/Object.freeze({
		addImage: addImage,
		addSparkline: addSparkline,
		getSheetData: getSheetData$1,
		registerMathMethod: registerMathMethod,
		recalculate: recalculate,
		setPlaceholder: setPlaceholder
	});

	function combineCells(range, silent) {
	  var _this = this;

	  if (!range) {
	    var sel = this.getSelectedId(true);

	    if (sel.length > 1) {
	      range = getRange(sel);
	    }
	  }

	  group.set(function () {
	    if (range) addSpan(_this, range.cell, range.x, range.y);
	  });
	  if (!silent) this.refresh();
	}
	function splitCell(row, column, silent) {
	  if (row && column) {
	    removeSpan(this, {
	      row: row,
	      column: column
	    });
	  } else {
	    group.set(function () {
	      this.eachSelectedCell(function (cell) {
	        removeSpan(this, cell);
	      });
	    }, this);
	  }

	  if (!silent) this.refresh();
	} //styles

	function addStyle$1(prop, origin) {
	  return addStyle(this, prop, origin);
	}
	function getStyle$1(row, column) {
	  return getStyle(this, {
	    row: row,
	    column: column
	  });
	}
	function setStyle$1(row, column, style) {
	  return setStyle(this, {
	    row: row,
	    column: column
	  }, style);
	}
	function setRangeStyle$1(rangeStr, style) {
	  group.set(function () {
	    setRangeStyle(this, rangeStr, style);
	  }, this);
	}
	function clearRange(rangeStr, type) {
	  if (!rangeStr) {
	    rangeStr = this._table.getSelectArea();
	    if (!rangeStr) return;
	  }

	  if (!type) type = {
	    styles: true,
	    values: true,
	    editors: true,
	    conditions: true,
	    comments: true
	  };
	  if (type.styles) clearRangeStyle(this, rangeStr);
	  if (type.conditions) clearConditionalFormats(this, rangeStr);
	  if (type.values) this.setRangeValue(rangeStr, null);

	  if (type.editors) {
	    clearEditors(this, rangeStr);
	    clearFilters(this, rangeStr);
	  }

	  if (type.comments) removeCommentsRange(this, rangeStr);
	  this.refresh();
	}
	function compactStyles$1() {
	  return compactStyles(this);
	} //serialize

	function serialize$e(config) {
	  var obj = {};
	  this.callEvent("onDataSerialize", [obj, config]);

	  if (config) {
	    if (config.compactStyles) obj.styles = removeUnusedStyles(obj);
	    if (config.sheets) return serialize$4(this, obj, config);
	  }

	  return obj;
	} //sheets

	function showSheet(name) {
	  show(this, name);
	}
	function setSheetState(name, state) {
	  setState(this, name, state);
	}
	function getSheetState(name) {
	  return getSheet(this, name).state || "visible";
	}
	function getActiveSheet() {
	  return this._activeSheet;
	}
	function addSheet(content, name, show$$1) {
	  return add$1(this, content, name, show$$1);
	}
	function clearSheet() {
	  this.reset();
	}
	function renameSheet(name, newName) {
	  rename(this, name, newName);
	}
	function editSheet(name) {
	  edit(this, name);
	}
	function removeSheet(name) {
	  remove$1(this, name);
	} //undo

	function undo$1() {
	  undo(this);
	}
	function redo$1() {
	  redo(this);
	} //sort

	function sortRange$1(range, dir) {
	  sortRange(this, range, dir);
	} //cells

	function showCell(ref, silent) {
	  showCells(this, ref, silent);
	}

	var ops = /*#__PURE__*/Object.freeze({
		combineCells: combineCells,
		splitCell: splitCell,
		addStyle: addStyle$1,
		getStyle: getStyle$1,
		setStyle: setStyle$1,
		setRangeStyle: setRangeStyle$1,
		clearRange: clearRange,
		compactStyles: compactStyles$1,
		serialize: serialize$e,
		showSheet: showSheet,
		setSheetState: setSheetState,
		getSheetState: getSheetState,
		getActiveSheet: getActiveSheet,
		addSheet: addSheet,
		clearSheet: clearSheet,
		renameSheet: renameSheet,
		editSheet: editSheet,
		removeSheet: removeSheet,
		undo: undo$1,
		redo: redo$1,
		sortRange: sortRange$1,
		showCell: showCell
	});

	function refresh$1(all) {
	  if (all) this._table.refreshColumns();else this._table.refresh();
	}
	function eachSelectedCell(cb) {
	  var cells = this.getSelectedId(true);

	  for (var i = 0; i < cells.length; i++) {
	    cb.call(this, cells[i]);
	  }
	}
	function getSelectedRange(sheet) {
	  var area = this._table.getSelectArea();

	  if (area) {
	    if (sheet) sheet = this.getActiveSheet();
	    return toRange(area.start.row, area.start.column, area.end.row, area.end.column, sheet);
	  }

	  return "";
	}
	function getSelectedId(all) {
	  var area = this._table.getSelectArea();

	  if (!all) return area && area.start.row ? area.start : null;
	  var selection = [];

	  if (area) {
	    var c0 = area.start;
	    var c1 = area.end;

	    for (var i = c0.row; i <= c1.row; i++) {
	      for (var j = c0.column; j <= c1.column; j++) {
	        selection.push({
	          row: i,
	          column: j
	        });
	      }
	    }
	  }

	  return selection; //return this._table.getSelectedId(all)
	}
	function getCellValue$1(row, column, math, page) {
	  page = page ? this._mData.getPage(page) : this._mPage;
	  if (!page) return;
	  var value = page.getValue(row - 1, column - 1, math !== false);
	  return correctVal(value);
	}
	function setCellValue(row, column, value, page) {
	  var _this = this;

	  if (!page) page = this.getActiveSheet();

	  var muonPage = this._mData.getPage(page);

	  if (!muonPage) return;
	  value = correctVal(value);
	  var old = this.getCellValue(row, column, page);
	  var oldType = getType(this, row, column, page);
	  var sameValue;

	  if (oldType == "date") {
	    var parser = webix.Date.strToDate(webix.i18n.spreadsheet.formats.parseDateTime);
	    var dateValue = isNaN(value) ? getExcelDateFromJs(parser(value)) : value;
	    sameValue = old == dateValue;
	  } else if (oldType != "string" && value !== "" && !isNaN(value) && old == value && value !== 0) {
	    sameValue = true;
	    value = value * 1;
	  }

	  if (!sameValue && old !== value) {
	    group.set(function () {
	      if (_this.callEvent("onBeforeValueChange", [row, column, value, old, page])) {
	        if (page != _this.getActiveSheet()) {
	          var sheet = find(_this._sheets, function (sheet) {
	            return sheet.name == page;
	          }).content;
	          var cell = find(sheet.data, function (cell) {
	            return cell[0] == row && cell[1] == column;
	          });

	          if (!cell) {
	            cell = [row, column];
	            sheet.data.push(cell);
	          }

	          cell[2] = value;
	          _this._page_value_set = true;
	          var item = loadCell(_this, sheet, cell);
	          delete _this._page_value_set;
	          var muonItem = muonPage.getCell(row - 1, column - 1, true);
	          muonItem.$format = checkFormat({
	            fmt: getFormatFromData(sheet, cell)
	          }, "string") ? 1 : 0;
	          muonPage.setValue(row - 1, column - 1, item.value);
	          cell[2] = item.value;
	          cell[4] = muonItem.type = item.type; //prepareCell can change style (1/1/2001 --loadCell--> 36892 + date type --prepareCell--> date format)

	          prepareCell(cell, sheet, true);
	          muonItem.style = cell[3];

	          _this.callEvent("onCellChange", [row, column, item.value, page]);
	        } else {
	          _this._mPage.setValue(row - 1, column - 1, value); //onCellChange can change item (via types module)


	          _this.callEvent("onCellChange", [row, column, value, page]);

	          var updatedType = getType(_this, row, column); //recalculate if we refer to a cell, where type is string and value is something like 005 or 5e5

	          if (oldType != updatedType && updatedType == "string" && value[0] == "=" && value.length > 1) _this._mPage.setValue(row - 1, column - 1, value);

	          if (/^=hyperlink\(/i.test(value)) {
	            var baseStyle = _this.getStyle(row, column);

	            var urlStyle = _this.addStyle({
	              color: "#0000ff",
	              underline: "underline"
	            }, baseStyle);

	            _this.setStyle(row, column, urlStyle);
	          }
	        }

	        _this.saveCell(row, column, page);
	      }
	    });
	  }
	}

	function correctVal(val) {
	  if (typeof val === "boolean") val *= 1;
	  return val || val === 0 ? val : "";
	}

	function setRangeValue(range$$1, value, page) {
	  group.set(function () {
	    var pos = rangeObj(range$$1, this);
	    var i = 0;

	    for (var row = pos.start.row; row <= pos.end.row; row++) {
	      for (var column = pos.start.column; column <= pos.end.column; column++, i++) {
	        this.setCellValue(row, column, webix.isArray(value) ? value[i] : value, page);
	      }
	    }
	  }, this);
	}
	function getRangeValue(range$$1, page) {
	  if (!page) page = this.getActiveSheet();
	  var pos = range(range$$1, this, page);

	  var muonPage = this._mData.getPage(pos[4]);

	  if (!pos || !muonPage) return [];
	  return muonPage.getRange(pos[0] - 1, pos[1] - 1, pos[2] - 1, pos[3] - 1).map(correctVal);
	}
	function getRow(id) {
	  var _this2 = this;

	  var row = webix.copy(this._table.getItem(id));

	  var _loop = function (i) {
	    var cell = _this2._mPage.getCell(id - 1, i - 1);

	    if (cell) {
	      row[i] = cell.value;
	      [["style", "$cellCss"], ["type", "$cellType"], ["format", "$cellFormat"]].forEach(function (param) {
	        var val = cell[param[0]];

	        if (val) {
	          if (!row[param[1]]) row[param[1]] = {};
	          row[param[1]][i] = val;
	        }
	      });

	      var math = _this2.getCellValue(id, i, true);

	      if (math && math[0] == "=") row["$" + i] = math;
	    }
	  };

	  for (var i = 1; i <= this.config.columnCount; i++) {
	    _loop(i);
	  }

	  return row;
	}
	function getColumn(id) {
	  return this._table.getColumnConfig(id);
	}
	function reset$a(mode) {
	  var obj = {
	    data: []
	  };

	  if (mode && mode.sheets) {
	    obj = newSheet(obj);
	  }

	  this.parse(obj);
	}
	function _resetTable() {
	  reset$4(this);
	}

	var cor = /*#__PURE__*/Object.freeze({
		refresh: refresh$1,
		eachSelectedCell: eachSelectedCell,
		getSelectedRange: getSelectedRange,
		getSelectedId: getSelectedId,
		getCellValue: getCellValue$1,
		setCellValue: setCellValue,
		setRangeValue: setRangeValue,
		getRangeValue: getRangeValue,
		getRow: getRow,
		getColumn: getColumn,
		reset: reset$a,
		_resetTable: _resetTable
	});

	function saveCell(row, column, page) {
	  var style = this.getStyle(row, column);
	  save(this, "data", {
	    row: row,
	    column: column,
	    value: this.getCellValue(row, column, null, page),
	    page: page || this.getActiveSheet(),
	    style: style ? style.id : ""
	  });
	}

	var sav = /*#__PURE__*/Object.freeze({
		saveCell: saveCell
	});

	function setCellEditor(row, column, editor) {
	  var line = this._table._ssEditors[row] = this._table._ssEditors[row] || {};
	  var value = line[column] || null;
	  line[column] = editor;

	  if (editor && editor.editor) {
	    this._table.addCellCss(row, column, "ss_editor");
	  } else {
	    delete this._table._ssEditors[row][column];

	    this._table.removeCellCss(row, column, "ss_editor");
	  }

	  this.callEvent("onAction", ["dropdown", {
	    row: row,
	    column: column,
	    value: value,
	    newValue: editor
	  }]);
	}
	function getCellEditor(row, column) {
	  var line = this._table._ssEditors[row] || {};
	  return line[column] || null;
	}

	var dpd$1 = /*#__PURE__*/Object.freeze({
		setCellEditor: setCellEditor,
		getCellEditor: getCellEditor
	});

	function setCellFilter(row, column, filter) {
	  var line = this._table._ssFilters[row] = this._table._ssFilters[row] || {};
	  var value = line[column] || null;
	  if (filter && (webix.isArray(filter) || typeof filter == "string")) filter = {
	    options: filter
	  };
	  line[column] = filter;

	  if (filter && _typeof(filter) == "object") {
	    this._table.addCellCss(row, column, "ss_filter");

	    if (filter.value && isValueActive(filter.value)) this._table.addCellCss(row, column, "ss_filter_active");
	    webix.extend(filter, {
	      row: row,
	      column: column
	    }, true);
	    filter.options = calibrateRange(this, row, column, filter.options);

	    if (!filter.handler && filter.value && filter.value.condition) {
	      var mode = filter.mode || getFilterMode(this, row, column);
	      filter.handler = getFilterFunction(mode, filter.value);
	    }
	  } else {
	    delete this._table._ssFilters[row][column];

	    this._table.removeCellCss(row, column, "ss_filter");

	    this._table.removeCellCss(row, column, "ss_filter_active");
	  }

	  this.callEvent("onAction", ["filter", {
	    row: row,
	    column: column,
	    value: value,
	    newValue: filter
	  }]);
	}
	function getCellFilter(row, column) {
	  var line = this._table._ssFilters[row] || {};
	  return line[column] || null;
	}
	function removeFilters() {
	  var _this = this;

	  var filters = getFilters(this._table);

	  for (var i = 0; i < filters.length; i++) {
	    var _filters$i = filters[i],
	        row = _filters$i.row,
	        column = _filters$i.column;
	    this.setCellFilter(row, column, null);
	  }

	  this._table._ssFilters = {};

	  this._table.data.filter(function (obj) {
	    return _this.isRowVisible(obj.id);
	  });
	}
	function filterSpreadSheet() {
	  var _this2 = this;

	  var grid = this._table;
	  grid.data.silent(function () {
	    // hidden rows
	    grid.data.filter(function (obj) {
	      return _this2.isRowVisible(obj.id);
	    });
	    var filters = getFilters(grid);

	    var _loop = function (i) {
	      var _filters$i2 = filters[i],
	          row = _filters$i2.row,
	          column = _filters$i2.column,
	          handler = _filters$i2.handler,
	          lastRow = _filters$i2.lastRow;
	      var finished = false;
	      grid.data.filter(function (obj) {
	        var r = obj.id;
	        if (r <= row || typeof handler != "function") return true;
	        var span = grid.getSpan(r, column);

	        if (span) {
	          if (span[0] == row && span[1] == column) return true;else r = span[0];
	        }

	        var value = String(_this2.getCellValue(r, column, false));

	        if (lastRow) {
	          if (r > lastRow) return true;
	        } else if (finished || !value) return finished = true;

	        return handler(value);
	      }, 1, true);
	    };

	    for (var i = 0; i < filters.length; i++) {
	      _loop(i);
	    }
	  });
	  grid.callEvent("onAfterFilter", []);
	  grid.refresh();
	}

	var flt$1 = /*#__PURE__*/Object.freeze({
		setCellFilter: setCellFilter,
		getCellFilter: getCellFilter,
		removeFilters: removeFilters,
		filterSpreadSheet: filterSpreadSheet
	});

	function confirm(config) {
	  return webix.confirm({
	    container: this.$view,
	    css: "webix_ssheet_confirm",
	    text: config.text,
	    ok: webix.i18n.spreadsheet.labels.ok,
	    cancel: webix.i18n.spreadsheet.labels.cancel
	  });
	}
	function alert(config) {
	  return webix.alert({
	    container: this.$view,
	    css: "webix_ssheet_alert",
	    text: config.text,
	    type: config.type,
	    ok: webix.i18n.spreadsheet.labels.ok
	  });
	}

	var cfm = /*#__PURE__*/Object.freeze({
		confirm: confirm,
		alert: alert
	});

	function resetUndo() {
	  reset$5(this);
	}
	function groupUndo(func) {
	  group.set(func, this);
	}
	function ignoreUndo$1(func) {
	  ignoreUndo(func, this);
	}

	var und = /*#__PURE__*/Object.freeze({
		resetUndo: resetUndo,
		groupUndo: groupUndo,
		ignoreUndo: ignoreUndo$1
	});

	function setFormat(row, column, format) {
	  addFormat(this, row, column, format);
	}
	function changeDecimals(row, column, inc) {
	  //row and column may be obj
	  changeAreaDecimals(this, inc, row, column);
	}

	var fmt$1 = /*#__PURE__*/Object.freeze({
		setFormat: setFormat,
		changeDecimals: changeDecimals
	});

	function showFormulas$1(state) {
	  showFormulas(this, state);
	}

	var fml = /*#__PURE__*/Object.freeze({
		showFormulas: showFormulas$1
	});

	function showPrintBorders(value) {
	  var old = !!this._printBorders.$render;
	  if (value == "toggle") value = !old;

	  if (value != old) {
	    if (value) showBorders(this);else {
	      delete this._printBorders.$render;
	      this.refresh();
	    }
	    this.callEvent("onCommand", [{
	      id: "toolbar-update",
	      name: "print-borders",
	      value: value
	    }]);
	    this.callEvent("onAction", ["print-borders", {
	      newValue: value,
	      value: old
	    }]);
	  }
	}

	var prt = /*#__PURE__*/Object.freeze({
		showPrintBorders: showPrintBorders
	});

	function zoom$2(value) {
	  zoom$1(this, value);
	}

	var zoom$3 = /*#__PURE__*/Object.freeze({
		zoom: zoom$2
	});

	function api(view) {
	  var all = [rco, lcl, fcl, hbr, hhd, hrc, mat, ops, cor, sav, dpd$1, flt$1, cfm, und, fmt$1, fml, prt, zoom$3];

	  for (var i = 0; i < all.length; i++) {
	    webix.extend(view, all[i]);
	  }
	}

	var defaultMenu = [{
	  id: "file",
	  submenu: [{
	    id: "sheet",
	    submenu: [{
	      id: "new-sheet"
	    }, {
	      id: "copy-sheet"
	    }, {
	      id: "remove-sheet"
	    }, {
	      id: "hide-sheet"
	    }]
	  }, {
	    id: "excel-import"
	  }, {
	    id: "excel-export"
	  }, {
	    id: "print"
	  }, {
	    id: "print-borders"
	  }]
	}, {
	  id: "edit",
	  submenu: [{
	    id: "add-range"
	  }, {
	    id: "add-dropdown"
	  }, {
	    id: "add-link"
	  }, {
	    id: "lock-cell"
	  }, {
	    id: "conditional-format"
	  }, {
	    id: "clear",
	    submenu: [{
	      id: "clear-value"
	    }, {
	      id: "clear-style"
	    }, {
	      id: "clear-conditional-formats"
	    }, {
	      id: "clear-dropdown-editors"
	    }, {
	      id: "clear-comments"
	    }, {
	      $template: "Separator"
	    }, {
	      id: "clear-all"
	    }]
	  }]
	}, {
	  id: "insert",
	  submenu: [{
	    id: "image",
	    submenu: [{
	      id: "add-image-cell"
	    }, {
	      id: "add-image-top"
	    }]
	  }, {
	    id: "graph",
	    submenu: [{
	      id: "add-sparkline"
	    }, {
	      id: "add-chart"
	    }]
	  }, {
	    id: "add-comment"
	  }]
	}, {
	  id: "data",
	  submenu: [{
	    id: "sort",
	    submenu: [{
	      id: "sort-asc"
	    }, {
	      id: "sort-desc"
	    }]
	  }, {
	    id: "create-filter"
	  }]
	}, {
	  id: "view",
	  submenu: [{
	    id: "columns",
	    submenu: [{
	      id: "insert-column"
	    }, {
	      id: "delete-column"
	    }, {
	      id: "show-column"
	    }, {
	      id: "hide-column"
	    }, {
	      id: "resize-column"
	    }]
	  }, {
	    id: "rows",
	    submenu: [{
	      id: "insert-row"
	    }, {
	      id: "delete-row"
	    }, {
	      id: "show-row"
	    }, {
	      id: "hide-row"
	    }, {
	      id: "resize-row"
	    }]
	  }, {
	    $template: "Separator"
	  }, {
	    id: "freeze-columns"
	  }, {
	    id: "freeze-rows"
	  }, {
	    id: "hide-gridlines"
	  }, {
	    id: "hide-headers"
	  }, {
	    id: "show-formulas"
	  }]
	}];
	var readonlyMenu = [{
	  id: "file",
	  submenu: [{
	    id: "excel-export"
	  }, {
	    id: "print"
	  }, {
	    id: "print-borders"
	  }]
	}];
	var ui$1 = {
	  getMenuData: function (menu, config) {
	    var i;

	    for (i = 0; i < menu.length; i++) {
	      if (typeof menu[i] == "string") menu[i] = {
	        id: menu[i]
	      };

	      if ((menu[i].id == "resize-column" || menu[i].id == "resize-row") && !config.resizeCell) {
	        menu.splice(i, 1);
	        i--;
	        continue;
	      }

	      if (!menu[i].value) menu[i].value = webix.i18n.spreadsheet.menus[menu[i].id];
	      if (menu[i].submenu) menu[i].submenu = this.getMenuData(menu[i].submenu, config);
	    }

	    return menu;
	  }
	};
	function init$E(view) {
	  view.attachEvent("onComponentInit", function () {
	    return ready$5(view);
	  });
	  var config = view.config;
	  var menu = {
	    view: "menu",
	    borderless: true,
	    css: "webix_ssheet_menu",
	    id: "menu",
	    autowidth: true,
	    type: {
	      height: 40
	    },
	    data: ui$1.getMenuData(webix.isArray(config.menu) ? config.menu : webix.copy(config.readonly ? readonlyMenu : defaultMenu), config)
	  };
	  view.callEvent("onViewInit", ["menu", menu]);
	  return menu;
	}

	function ready$5(view) {
	  if (view.$$("menu")) view.$$("menu").attachEvent("onMenuItemClick", function (id) {
	    return callAction$1(view, id);
	  });
	}

	var actionMap$1 = {
	  "undo": function (view) {
	    return view.undo();
	  },
	  "redo": function (view) {
	    return view.redo();
	  },
	  "insert-column": function (view) {
	    return view.insertColumn();
	  },
	  "delete-column": function (view) {
	    return view.deleteColumn();
	  },
	  "show-column": function (view) {
	    return view.callEvent("onCommand", [{
	      id: "show",
	      group: "column",
	      neighbors: true
	    }]);
	  },
	  "hide-column": function (view) {
	    return view.hideColumn(null, true);
	  },
	  "resize-column": function (view) {
	    return view.callEvent("onCommand", [{
	      id: "resize",
	      group: "column",
	      value: webix.i18n.spreadsheet.menus["resize-column"]
	    }]);
	  },
	  "insert-row": function (view) {
	    return view.insertRow();
	  },
	  "delete-row": function (view) {
	    return view.deleteRow();
	  },
	  "show-row": function (view) {
	    return view.callEvent("onCommand", [{
	      id: "show",
	      group: "row",
	      neighbors: true
	    }]);
	  },
	  "hide-row": function (view) {
	    return view.hideRow(null, true);
	  },
	  "resize-row": function (view) {
	    return view.callEvent("onCommand", [{
	      id: "resize",
	      group: "row",
	      value: webix.i18n.spreadsheet.menus["resize-row"]
	    }]);
	  },
	  "freeze-columns": function (view) {
	    return view.freezeColumns();
	  },
	  "freeze-rows": function (view) {
	    return view.freezeRows();
	  },
	  "hide-gridlines": function (view) {
	    return view.hideGridlines("toggle");
	  },
	  "hide-headers": function (view) {
	    return view.hideHeaders("toggle");
	  },
	  "show-formulas": function (view) {
	    return view.showFormulas("toggle");
	  },
	  "print-borders": function (view) {
	    return view.showPrintBorders("toggle");
	  }
	};

	function callAction$1(view, id) {
	  if (view.callEvent("onMenuItemClick", [id])) {
	    if (actionMap$1[id]) actionMap$1[id](view);else view.callEvent("onCommand", [{
	      id: id
	    }]);
	  }
	}

	//global definitions
	var component = {
	  name: "spreadsheet",
	  _base_index: {
	    count: 1
	  },
	  defaults: {
	    spans: true,
	    liveEditor: true,
	    rowCount: 50,
	    math: true,
	    columnCount: 20,
	    resizeCell: true,
	    sheetTabWidth: 90,
	    conditionStyle: getDefaultStyles()
	  },
	  $init: function () {
	    var _this = this;

	    this.$index = this._base_index.count++;
	    this.$view.className += " webix_ssheet";
	    this.$ready.unshift(this._sub_init);
	    this.$ready.unshift(setDefaultFormats);
	    this.$ready.push(this._set_handlers);
	    this._destroy_with_me = [];
	    this.attachEvent("onDestruct", function () {
	      _this._destroy_with_me.forEach(function (view) {
	        return view.destructor();
	      });
	    });
	  },
	  $skin: function () {
	    setSkinDefaults();
	  },
	  _sub_init: function () {
	    var obj = this.config;
	    var readonly = obj.readonly;
	    var rows = []; //toolbars

	    if (obj.menu) rows.push(init$E(this));
	    if (readonly && (obj.toolbar || obj.buttons) || !readonly && obj.toolbar !== false) rows.push(init$5(this));
	    if (obj.subbar) rows.push(obj.subbar);
	    if (!readonly && obj.liveEditor) rows.push(init$d(this)); //data part

	    var tblObj = {
	      editable: !readonly,
	      liveEditor: obj.liveEditor
	    };
	    if (obj.rowHeight) tblObj.rowHeight = obj.rowHeight;
	    if (obj.columnWidth) tblObj.columnWidth = obj.columnWidth;
	    if (readonly) rows.push(init$b(this, tblObj));else rows.push({
	      cols: [init$b(this, tblObj), init$g(this)]
	    });
	    var bottom = obj.bottombar === true ? defaultBottom(this) : obj.bottombar;
	    if (bottom) rows.push(bottom);
	    init$a(this);
	    if (!readonly) init$l(this);
	    init$k(this);
	    this.rows_setter(rows);
	  },
	  _set_handlers: function () {
	    var _this2 = this;

	    //prevent double init
	    if (this._table) return;
	    this._table = this.$$("cells"); //init all sub modules

	    operations(this); //set sizes for the table

	    reset$4(this, this.config.columnCount, this.config.rowCount);
	    init$c(this); //keyboard shortcuts

	    this._table.attachEvent("onAfterAreaAdd", function () {
	      return _this2.callEvent("onAfterSelect", [_this2.getSelectedId(true)]);
	    });

	    this.callEvent("onComponentInit", []);
	  },
	  $onLoad: function (obj, driver) {
	    //when loading data by data:, we can get $onLoad before _set_handlers call
	    this._set_handlers();

	    var excel = obj.excel;
	    if (excel) obj = this._parseExcel(obj, driver);else if (!obj.data && typeof obj == "string" && (driver.cell || driver.row)) obj = this._parseCsv(obj, driver);
	    load$2(this, obj, excel);
	  }
	};
	api(component);
	webix.protoUI(component, webix.AtomDataLoader, webix.IdSpace, webix.ui.layout);

})));
