/// <reference types="jquery" />
/// <reference types="jqueryui" />

declare namespace FreeJqGrid {
	interface GridInfo {
		bDiv: HTMLDivElement;
		cDiv: HTMLDivElement;
		cols: HTMLCollection | HTMLTableDataCellElement[];     // td[]
		eDiv: HTMLDivElement;
		fbDiv?: JQuery;
		fbRows?: HTMLCollection | HTMLTableRowElement[];       // tr[]
		fhDiv?: JQuery;
		footers?: HTMLCollection | HTMLTableDataCellElement[]; // td[]
		fsDiv?: JQuery;
		hDiv: HTMLDivElement;
		//headers: JqGridColumnHeaderInfo[];
		headers: { el: HTMLTableHeaderCellElement; width: number; }[];
		newWidth?: number;
		sDiv?: HTMLDivElement;
		topDiv?: HTMLDivElement;
		ubDiv?: HTMLDivElement;
		uDiv?: HTMLDivElement;
		width: number;
	}
	interface BodyTable extends HTMLTableElement {
		p: any;
		grid: GridInfo;
		ftoolbar?: boolean;
		nav?: boolean;
		addJSONData: (this: BodyTable, data: any[], rcnt?: number, more?: boolean, adjust?: number) => void;
		addXmlData: (this: BodyTable, data: any[], rcnt?: number, more?: boolean, adjust?: number) => void;
		clearToolbar?: (trigger: boolean) => void;
		constructTr: (id: string, hide: boolean, spaceSeparatedCssClasses: string, rd: any, cur: any, selected: boolean) => string;
		fixScrollOffsetAndhBoxPadding: (this: BodyTable) => void;
		formatCol: (pos: number, rowInd: number, tv: string, rawObject: any, rowId: string, rdata?: any) => string;
		formatter: (rowId: string, cellval: any, colpos: number, rwdat: any, act?: "add" | "edit", rdata?: any) => string;
		modalAlert?: () => void;
		rebuildRowIndexes?: (this: BodyTable) => void;
		refreshIndex?: () => void;
		setHeadCheckBox?: (this: BodyTable, checked: boolean) => void;
		sortData: (this: BodyTable, index: string, idxcol: number, reload: boolean, sor: string, obj: HTMLTableHeaderCellElement) => void;
		toogleToolbar?: () => void;
		triggerToolbar?: () => void;
		updatepager?: (this: BodyTable, rn: boolean, dnd: boolean) => void;
	}
	interface JQueryJqGrid extends JQuery {
		[index: number]: BodyTable;
	}
	interface QueryObject {
		ignoreCase(): QueryObject;
		useCase(): QueryObject;
		trim(): QueryObject;
		noTrim(): QueryObject;
		execute(): QueryObject;
		data(): QueryObject;
		select(f?: (v: any) => any): QueryObject;
		hasMatch(): QueryObject;
		andNot(f: string, v: any, x: any): QueryObject;
		orNot(f: string, v: any, x: any): QueryObject;
		not(f: string, v: any, x: any): QueryObject;
		and(f: string, v: any, x: any): QueryObject;
		or(f: string, v: any, x: any): QueryObject;
		orBegin(): QueryObject;
		orEnd(): QueryObject;
		isNot(f: string): QueryObject;
		is(f: string): QueryObject;
		equals(f: string, v: any, t: any): QueryObject;
		notEquals(f: string, v: any, t: any): QueryObject;
		isNull(f: string, v: any, t: any): QueryObject;
		greater(f: string, v: any, t: any): QueryObject;
		less(f: string, v: any, t: any): QueryObject;
		greaterOrEquals(f: string, v: any, t: any): QueryObject;
		lessOrEquals(f: string, v: any, t: any): QueryObject;
		startsWith(f: string, v: any): QueryObject;
		endsWith(f: string, v: any): QueryObject;
		contains(f: string, v: any): QueryObject;
		groupBy(by: string, dir: "a" | "asc" | "ascending" | "d" | "desc" | "descending", type: "text" | "int" | "integer" | "float" | "number" | "currency" | "numeric" | "date" | "datetime" | ((value: string) => string), datefmt: string): any[];
		orderBy(by: string, dir: "a" | "asc" | "ascending" | "d" | "desc" | "descending", type: "text" | "int" | "integer" | "float" | "number" | "currency" | "numeric" | "date" | "datetime" | ((value: string) => string), datefmt: string, sfunc?: (a: any, b: any, direction: 1 | -1, aItem: any, bItem: any) => any): any[];
		inSet(f: string, v: any, t: any): QueryObject;
		custom(ruleOp: string, field: string, data: any): QueryObject;
	}
	enum ComponentName {
		GridBoxDiv = 0,                   // tagName: "div". class: "ui-jqgrid". Id: "gbox_" + gridId
		GridOverlayDiv = 1,               // tagName: "div". class: "jqgrid-overlay". Id: "lui_" + gridId
		LoadingDiv = 2,                   // tagName: "div". class: "loading". Id: "load_" + gridId
		DialogAlertDiv = 3,               // tagName: "div". class: "ui-jqdialog". Id: "alertmod_" + gridId
		DialogSearchDiv = 4,              // tagName: "div". class: "ui-jqdialog". Id: "searchmodfbox_" + gridId
		DialogViewDiv = 5,                // tagName: "div". class: "ui-jqdialog". Id: "viewmod" + gridId
		DialogEditDiv = 6,                // tagName: "div". class: "ui-jqdialog". Id: "editmod" + gridId
		DialogDeleteDiv = 7,              // tagName: "div". class: "ui-jqdialog". Id: "delmod" + gridId
		GridViewDiv = 8,                  // tagName: "div". class: "ui-jqgrid-view". Id: "gview_" + gridId
		TitleBarDiv = 9,                  // tagName: "div". class: "ui-jqgrid-titlebar" and either "ui-jqgrid-caption" or "ui-jqgrid-caption-rtl"
		UpperToolbarDiv = 10,             // tagName: "div". class: "ui-userdata". Id: "tb_" + gridId
		TopPagerDiv = 11,                 // tagName: "div". class: "ui-jqgrid-toppager". Id: gridId + "_toppager"
		HeaderDiv = 12,                   // tagName: "div". class: "ui-jqgrid-hdiv"
		HeaderBoxDiv = 13,                // tagName: "div". class: either "ui-jqgrid-hdiv" or "ui-jqgrid-hbox-rtl"
		HeaderTable = 14,                 // tagName: "table". class: "ui-jqgrid-htable"
		HeaderColsRow = 15,               // tagName: "tr". class: "jqgfirstrow" or the row with column headers
		HeaderCols = 16,                  // tagName: "th". class: either "ui-first-th-rtl" or "ui-first-th-rtl"
		HeaderRows = 47,                  // tagName: "tr". class: "ui-jqgrid-labels"
		HeaderTh = 48,                    // tagName: "th". class: "ui-th-column" and either "ui-th-ltr" or "ui-th-rtl"
		HeaderSortableDiv = 49,           // tagName: "div". class: "ui-jqgrid-labels"
		HeaderResizableSpan = 50,         // tagName: "span". class: "ui-jqgrid-resize" and either "ui-jqgrid-resize-ltr" or "ui-jqgrid-resize-rtl"
		HeaderSelectAllRowsCheckbox = 45, // tagName: "input" (can be changed to "button" in the future). class: "cbox". Id: "cb_" + gridId
		SearchToolbar = 17,               // tagName: "tr". class: "ui-search-toolbar". Its direct children are th having class "ui-th-column" and optionally "ui-th-rtl"
		BodyDiv = 18,                     // tagName: "div". class: "ui-jqgrid-bdiv"
		BodyScrollFullDiv = 19,           // tagName: "div" - It can have height CSS property which simulate the total size of virtual data.
		BodyScrollTopDiv = 20,            // tagName: "div" - It can have height CSS property which simulate virtual data before the current displayed in btable.
		BodyTable = 21,                   // tagName: "table". class: "ui-jqgrid-btable". Id: gridId
		Grid = 21,                        // tagName: "table". class: "ui-jqgrid-btable". Id: gridId
		BodyColsRow = 22,                 // tagName: "tr". class: "jqgfirstrow"
		BodyCols = 23,                    // tagName: "td"
		BodyDataRows = 24,                // tagName: "tr". class: "jqgrow" and optionally "ui-row-rtl"
		FooterDiv = 25,                   // tagName: "div". class: "ui-jqgrid-sdiv"
		FooterBoxDiv = 26,                // tagName: "div". class: either "ui-jqgrid-hdiv" or "ui-jqgrid-hbox-rtl". ??? is it really needed ???
		FooterTable = 27,                 // tagName: "table". class: "ui-jqgrid-ftable"
		FooterRows = 28,                  // tagName: "tr". class: "footrow", optionally additionally "footrow-rtl"
		BottomToolbarDiv = 29,            // tagName: "div". class: "ui-userdata". Id: "tb_" + gridId
		FrozenHeaderDiv = 30,             // tagName: "div". class: "frozen-div" and "ui-jqgrid-hdiv"
		FrozenHeaderTable = 31,           // tagName: "table". class: "ui-jqgrid-htable"
		FrozenHeaderColsRow = 32,         // tagName: "tr". class: "jqgfirstrow"
		FrozenHeaderCols = 33,            // tagName: "th". class: either "ui-first-th-rtl" or "ui-first-th-rtl"
		FrozenSearchToolbar = 34,         // tagName: "tr". class: "ui-search-toolbar". Its direct children are th having class "ui-th-column" and optionally "ui-th-rtl"
		FrozenFooterDiv = 35,             // tagName: "div". class: "frozen-div" and "ui-jqgrid-sdiv"
		FrozenFooterTable = 36,           // tagName: "table". class: "ui-jqgrid-ftable"
		FrozenFooterDataRows = 37,        // tagName: "tr". class: "footrow", optionally additionally "footrow-rtl"
		FrozenBobyDiv = 38,               // tagName: "div". class: "frozen-div" and "ui-jqgrid-bdiv"
		FrozenBobyTable = 39,             // tagName: "table". class: "ui-jqgrid-btable". Id: gridId + "_frozen"
		FrozenBobyColsRow = 40,           // tagName: "tr". class: "jqgfirstrow"
		FrozenBobyCols = 41,              // tagName: "td"
		FrozenBobyDataRows = 42,          // tagName: "tr". class: "jqgrow" and optionally "ui-row-rtl"
		ColumnResizerDiv = 43,            // tagName: "div". class: "ui-jqgrid-resize-mark". Id: "rs_m" + gridId
		BottomPagerDiv = 44,              // tagName: "div". class: "ui-jqgrid-pager"
		SearchOperationMenuUl = 46
	}
	// The ModalHash represent internal structure used by jqModal - Minimalist Modaling with jQuery (see jqmodal.js)
	interface ModalHash {
		w: JQuery;  // The modal element, represent the outer div of the modal dialog
		o: JQuery;  // The overlay element. It will be assigned on the first opening of the modal
		c: Object;  // The modal's options object. The options used durin creating the modal. One can use global $.jgrid.jqModal or gris specifif p.jqModal to specify defaults of the options.
		t: Element; // The triggering element
		s: number;  // numeric part of "id" used for modal dialog. The modal dialog have class "jqmID" + s.
		a: boolean; // It's false initially. It will be set to true during opening and will set to false on closing.
	}
	interface DeleteFormLocaleOptions {
		bCancel?: string;
		bSubmit?: string;
		caption?: string;
		msg?: string;
		[propName: string]: any;
	}
	interface EditFormLocaleOptions {
		addCaption?: string;
		bCancel?: string;
		bClose?: string;
		bExit?: string;
		bNo?: string;
		bSubmit?: string;
		bYes?: string;
		editCaption?: string;
		msg: { customarray?: string, customfcheck?: string, date?: string, email?: string, integer?: string, maxValue?: string, minValue?: string, novalue?: string, number?: string, required?: string, url?: string, [propName: string]: any };
		saveData?: string;
		[propName: string]: any;
	}
	interface NavLocaleOptions {
		addtext?: string;
		addtitle?: string;
		alertcap?: string;
		alerttext?: string;
		canceltext?: string;
		canceltitle?: string;
		deltext?: string;
		deltitle?: string;
		edittext?: string;
		edittitle?: string;
		refreshtext?: string;
		refreshtitle?: string;
		savetext?: string;
		savetitle?: string;
		searchtext?: string;
		searchtitle?: string;
		viewtext?: string;
		viewtitle?: string;
		[propName: string]: any;
	}
	interface SearchLocaleOptions {
		addGroupTitle?: string;
		addRuleTitle?: string;
		caption?: string;
		deleteGroupTitle?: string;
		deleteRuleTitle?: string;
		Find?: string;
		groupOps?: { op: string, text: string }[];
		odata?: { oper: string, text: string }[];
		operandTitle?: string;
		Reset?: string;
		resetTitle?: string;
		[propName: string]: any;
	}
	interface ViewLocaleOptions {
		bClose?: string;
		caption?: string;
		[propName: string]: any;
	}
	interface JqGridLocaleOptions {
		emptyrecords?: string;
		loadtext?: string;
		pgfirst?: string;
		pglast?: string;
		pgnext?: string;
		pgprev?: string;
		pgrecs?: string;
		pgtext?: string;
		recordtext?: string;
		savetext?: string;
		showhide?: string;
		[propName: string]: any;
	}
	interface FormatterIntegerLocaleOptions {
		thousandsSeparator?: string;
		defaultValue?: string;
	}
	interface FormatterNumberLocaleOptions extends FormatterIntegerLocaleOptions {
		decimalSeparator?: string;
		decimalPlaces?: number;
	}
	interface FormatterCurrencyLocaleOptions extends FormatterNumberLocaleOptions {
		prefix?: string;
		suffix?: string;
	}
	interface FormatterDateLocaleOptions {
		dayNames?: string[];
		monthNames?: string[];
		AmPm?: string[];
		S?: (j: number) => string;
		srcformat?: string;
		newformat?: string;
		masks?: {
			ShortDate?: string;
			LongDate?: string;
			FullDateTime?: string;
			MonthDay?: string;
			ShortTime?: string;
			LongTime?: string;
			YearMonth?: string;
		};
	}
	interface FormattersLocaleOptions {
		integer?: FormatterIntegerLocaleOptions;
		number?: FormatterNumberLocaleOptions;
		currency?: FormatterCurrencyLocaleOptions;
		date?: FormatterDateLocaleOptions;
		[propName: string]: any;
	}
	interface JqGridStaticLocaleOptions {
		col?: {
			bCancel?: string;
			bSubmit?: string;
			caption?: string;
			[propName: string]: any;
		};
		defaults?: JqGridLocaleOptions;
		del?: DeleteFormLocaleOptions;
		edit?: EditFormLocaleOptions;
		errors?: {
			errcap?: string;
			model?: string;
			norecords?: string;
			nourl?: string;
			[propName: string]: any;
		};
		formatter?: FormattersLocaleOptions;
		isRTL?: boolean;
		nav?: NavLocaleOptions;
		search?: SearchLocaleOptions;
		view?: ViewLocaleOptions;
		[propName: string]: any;
	}
	interface EditableCellInfo {
		rowid: string;
		iCol: number;
		iRow: number;
		cmName: string;
		cm: any;
		mode: "add" | "edit";
		td: HTMLTableDataCellElement;
		tr: HTMLTableRowElement;
		trFrozen: HTMLTableRowElement;
		dataElement: Element;
		dataWidth: number;
	}
	interface IconsInfo {
		baseIconSet?: string;
		common?: string; // "ui-icon",
		pager?: {
			common?: string;
			first?: string; // "ui-icon-seek-first",
			prev?: string; // "ui-icon-seek-prev",
			next?: string; // "ui-icon-seek-next",
			last?: string; // "ui-icon-seek-end"
		};
		sort?: {
			common?: string;
			asc?: string; // "ui-icon-triangle-1-n",
			desc?: string; // "ui-icon-triangle-1-s"
		};
		gridMinimize?: {
			common?: string;
			visible?: string; // "ui-icon-circle-triangle-n",
			hidden?: string; // "ui-icon-circle-triangle-s"
		};
		nav?: {
			common?: string;
			edit?: string; // "ui-icon-pencil",
			add?: string; // "ui-icon-plus",
			del?: string; // "ui-icon-trash",
			search?: string; // "ui-icon-search",
			refresh?: string; // "ui-icon-refresh",
			view?: string; // "ui-icon-document",
			save?: string; // "ui-icon-disk",
			cancel?: string; // "ui-icon-cancel",
			newbutton?: string; // "ui-icon-newwin"
		};
		actions?: {
			common?: string; // string;
			edit?: string; // "ui-icon-pencil",
			del?: string; // "ui-icon-trash",
			save?: string; // "ui-icon-disk",
			cancel?: string; // "ui-icon-cancel"
		};
		form?: {
			common?: string;
			close?: string; // "ui-icon-closethick",
			prev?: string; // "ui-icon-triangle-1-w",
			next?: string; // "ui-icon-triangle-1-e",
			save?: string; // "ui-icon-disk",
			undo?: string; // "ui-icon-close",
			del?: string; // "ui-icon-scissors",
			cancel?: string; // "ui-icon-cancel",
			resizableLtr?: string; // "ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"
		};
		search?: {
			common?: string;
			search?: string; // "ui-icon-search",
			reset?: string; // "ui-icon-arrowreturnthick-1-w",
			query?: string; // "ui-icon-comment"
		};
		subgrid?: {
			common?: string;
			plus?: string; // "ui-icon-plus",
			minus?: string; // "ui-icon-minus",
			openLtr?: string; // "ui-icon-carat-1-sw",
			openRtl?: string; // "ui-icon-carat-1-se"
		};
		grouping?: {
			common?: string; // string;
			plus?: string; // "ui-icon-circlesmall-plus",
			minus?: string; // "ui-icon-circlesmall-minus"
		};
		treeGrid?: {
			common?: string;
			minus?: string; // "ui-icon-triangle-1-s",
			leaf?: string; // "ui-icon-radio-off",
			plusLtr?: string; // "ui-icon-triangle-1-e",
			plusRtl?: string; // "ui-icon-triangle-1-w"
		};
	}
	interface GuiStyleInfo {
		baseGuiStyle?: string;
		gBox?: string; // "ui-jqgrid-jquery-ui ui-widget ui-widget-content ui-corner-all",  // ui-widget-content??? for the children of gbox
		gView?: string; // "",
		overlay?: string; // "ui-widget-overlay",
		loading?: string; // "ui-state-default ui-state-active",
		hDiv?: string; // "ui-state-default ui-corner-top",
		hTable?: string; // "",
		colHeaders?: string; // "ui-state-default",
		states?: {
			select?: string; // "ui-state-highlight",
			disabled?: string; // "ui-state-disabled ui-jqgrid-disablePointerEvents",
			hover?: string; // "ui-state-hover",    // can be table-hover on <table> only and style like .table-hover tbody tr:hover td
			error?: string; // "ui-state-error",
			active?: string; // "ui-state-active",
			textOfClickable?: string; // "ui-state-default"
		};
		dialog?: {
			header?: string; // "ui-widget-header ui-dialog-titlebar ui-corner-all ui-helper-clearfix",
			window?: string; // "ui-jqgrid-jquery-ui ui-widget ui-widget-content ui-corner-all ui-front",
			document?: string; // "",
			subdocument?: string; // "",
			body?: string; // "",
			footer?: string; // "",
			content?: string; // "ui-widget-content",
			hr?: string; // "ui-widget-content",
			closeButton?: string; // "ui-corner-all",
			fmButton?: string; // "ui-state-default",
			dataField?: string; // "ui-widget-content ui-corner-all",
			viewCellLabel?: string; // "ui-widget-content",
			viewLabel?: string; // "",
			viewCellData?: string; // "ui-widget-content",
			viewData?: string; // "",
			leftCorner?: string; // "ui-corner-left",
			rightCorner?: string; // "ui-corner-right",
			defaultCorner?: string; // "ui-corner-all"
		};
		filterToolbar?: {
			dataField?: string; // "ui-widget-content"
		};
		subgrid?: {
			thSubgrid?: string; // "ui-state-default", // used only with subGridModel
			rowSubTable?: string; // "ui-widget-content", // used only with subGridModel additionally to ui-subtblcell
			row?: string; // "ui-widget-content", // class of the subgrid row, additional to ui-subgrid
			tdStart?: string; // "", // it can be with span over rownumber and multiselect columns
			tdWithIcon?: string; // "ui-widget-content", // class of cell with +- icon, additional to subgrid-cell
			buttonDiv?: string; // "",
			button?: string; // "",
			tdData?: string; // "ui-widget-content", // class of main td with span over the grid, additional subgrid-data
			legacyTable?: string; // ""
		};
		grid?: string; // "",
		gridRow?: string; // "ui-widget-content",
		rowNum?: string; // "ui-state-default",
		gridFooter?: string; // "",
		rowFooter?: string; // "ui-widget-content",
		gridTitle?: string; // "ui-widget-header ui-corner-top",
		gridError?: string; // "ui-state-error",
		gridErrorText?: string; // "",
		titleButton?: string; // "ui-corner-all",
		toolbarUpper?: string; // "ui-state-default",
		toolbarBottom?: string; // "ui-state-default",
		actionsDiv?: string; // "ui-widget-content",
		actionsButton?: string; // "ui-corner-all",
		pager?: {
			pager?: string; // "ui-state-default",
			pagerButton?: string; // "ui-corner-all",
			pagerInput?: string; // "ui-widget-content",
			pagerSelect?: string; // "ui-widget-content"
		};
		navButton?: string; // "ui-corner-all",
		searchDialog?: {
			operator?: string; // "ui-corner-all",
			label?: string; // "ui-corner-all",
			elem?: string; // "ui-corner-all",
			operationGroup?: string; // "",
			addRuleButton?: string; // "ui-corner-all",
			deleteRuleButton?: string; // "ui-corner-all",
			operationSelect?: string; // "ui-corner-all",
			addGroupButton?: string; // "ui-corner-all",
			deleteGroupButton?: string; // "ui-corner-all"
		};
		searchToolbar?: {
			menu?: string; // "ui-menu-jqueryui",
			operButton?: string; // "ui-corner-all",
			clearButton?: string; // "ui-corner-all"
		};
		top?: string; // "ui-corner-top",
		bottom?: string; // "ui-corner-bottom",
		resizer?: string; // "ui-widget-header"
	}
	interface JqGridStaticOptions extends JqGridOptions {
		fatalError?: (errorText: string) => void; // default is alert function
	}
	interface JqGridStatic extends JqGridStaticLocaleOptions {
		_multiselect?: boolean;
		ajaxOptions?: JQueryAjaxSettings;
		cell_width: boolean;
		cellattr?: { [key: string]: (rowId: string, cellValue: any, rowObject: any, cm: ColumnModel, rdata: any) => string; };
		cmTemplate?: { [key: string]: ColumnModel; };
		defaults: JqGridStaticOptions;
		del?: FormDeletingOptions;
		edit?: FormEditingOptions;
		guid: number;
		guiStyles: {
			jQueryUI: GuiStyleInfo;
			bootstrap: GuiStyleInfo;
			bootstrapPrimary: GuiStyleInfo;
			bootstrap4: GuiStyleInfo;
			[propName: string]: GuiStyleInfo;
		};
		icons: {
			jQueryUI: IconsInfo;
			fontAwesome: IconsInfo;
			glyph: IconsInfo;
			[propName: string]: IconsInfo;
		};
		inlineEdit?: any;
		jqModal?: any; // { toTop: true }
		locales: { [key: string]: JqGridStaticLocaleOptions; };
		msie: boolean;
		nav?: NavOptions;
		no_legacy_api?: boolean;
		productName: "free jqGrid";
		search?: SearchingOptions;
		uidPref: string;
		version: string; // like "4.13.7" for example
		view?: FormViewingOptions;
		bindEv(element: Element | JQuery, options: any): any;
		builderFmButon(this: BodyTable, id: string, text?: string, icon?: string, iconOnLeftOrRight?: "right" | "left" | undefined, conner?: "right" | "left" | undefined): any;
		builderSortIcons(this: BodyTable, iCol: number): string;
		cellWidth(): boolean;
		checkDate(format: string, date: string): boolean;
		checkTime(time: string): boolean;
		checkValues(value: any, iCol: number | string, customobject?: any, name?: string, options?: any): boolean;
		clearArray(array: any[]): void;
		closeModal(h: ModalHash): void;
		convertOnSaveLocally(this: BodyTable, nData: any, cm: any, oData: any, rowid: string, item: any, iCol: number): any;
		createEl(elementType: string, options: any, value: string, autoWidth?: boolean, ajaxso?: any): Element;
		createModal(aIDs: any, content: Element | JQuery, o: any, insertSelector: string | Element | JQuery, posSelector: string | Element | JQuery, appendsel?: boolean | string | Element | JQuery, css?: any): void;
		//detectRowEditing(rowid: string): RowEditingInfo;
		detectRowEditing(this: BodyTable, rowid: string): { mode: "inlineEditing" | "cellEditing"; savedRow: any[]; };
		enumEditableCells(this: BodyTable, tr: HTMLTableRowElement, mode: "add" | "edit", callback: (options: EditableCellInfo) => boolean): void;
		extend(this: JqGridStatic, methods: any): void;
		feedback(this: BodyTable | JQuery, p: any, eventPrefix: string, callbackSuffix: string, callbackName: string): boolean;
		fillSelectOptions(element, value: any, separator: string, delimiter: string, isMultiple: boolean, valuesToSelect?: string): boolean;
		fixMaxHeightOfDiv(height: number): number;
		fixScrollOffsetAndhBoxPadding(this: BodyTable): void;
		format(format: string, ...rest: any[]): string;
		from(source: any): QueryObject;
		fullBoolFeedback(this: BodyTable, callback: (...rest: any[]) => false | "stop" | void, eventName: string, ...rest: any[]): boolean;
		getAccessor(obj: any, dotSeparatedNamesOrFunc: string | ((obj: any) => any)): any;
		getCell(this: BodyTable, tr: HTMLTableRowElement | JQuery, iCol: number): JQuery;
		getCellIndex(cell: Element | JQuery): number;
		getDataFieldOfCell(this: BodyTable, tr: HTMLTableRowElement | JQuery, iCol: number): JQuery;
		getEditedValue(this: BodyTable, $dataFiled: JQuery, cm: any, valueText: Object, editable: boolean | "hidden" | "readonly"): string;
		getGridComponent(componentName: ComponentName, $p: HTMLElement | JQuery): JQuery;
		getGridComponentId(this: BodyTable, componentName: ComponentName): string;
		getGridComponentIdSelector(this: BodyTable, componentName: ComponentName): string;
		getMethod(this: JqGridStatic, methodName: string): Function;
		getRelativeRect(this: BodyTable, element: Element | JQuery): JQueryCoordinates;
		getRes(basePath: Object, path: string): any;
		getXmlData(obj: Node, dotSeparatedNamesOrFunc: string | ((obj: any) => any), returnObj?: boolean): string;
		hasAllClasses(element: Element | JQuery, spaceSeparatedCssClasses: string): boolean;
		hasOneFromClasses(element: Element | JQuery, spaceSeparatedCssClasses: string): boolean;
		hideModal(selector: string | Element | JQuery, options: any): void;
		htmlDecode(value: string): string;
		htmlEncode(value: string): string;
		info_dialog(this: BodyTable, caption: string, content: string, closeButtonText: string, modalOptions: any): void;
		isCellClassHidden(spaceSeparatedCssClasses: string): boolean;
		isEmpty(testString: string): boolean;
		isHTMLElement(element: Element): boolean;
		jqID(idName: string): string;
		mergeCssClasses(...spaceSeparatedCssClasses: string[]): boolean;
		msiever(): number;
		oldDecodePostedData(value: string): string;
		oldEncodePostedData(value: string): string;
		parseDataToHtml(this: BodyTable, len: number, ids: string[], items: any[], cellsToDisplay: any[], rcnt?: number, adjust?: number, readAllInputData?: boolean): string[];
		parseDate(this: BodyTable, format: string, date: string | number | Date, newformat?: string, options?: any): string | Date;
		parseDateToNumber(this: BodyTable, format: string, date: string | number | Date): number;
		randId(prefix?: string): string;
		serializeFeedback(this: BodyTable | JQuery, callback: ((this: BodyTable | JQuery, postData: any) => any), eventName: string, postData: Object | string): any;
		showModal(h: ModalHash): void;
		stripHtml(htmlString: string): string;
		stripPref(prefix: string, id: string): string;
		template(format: string): string;
		viewModal(selector: string | Element | JQuery, options?: any): void;
		[propName: string]: any;
	}
	interface JqGridFmatter {
		isEmpty: (o: any) => boolean;
		isNumber: (o: any) => boolean;
		isObject: (o: any) => boolean;
		isValue: (o: any) => boolean;
		NumberFormat: (nData: number, opts: { decimalSeparator: string, decimalPlaces: number, thousandsSeparator: string }) => string;
	}
	interface JqGridFormatters {
		[propName: string]: any;
	}
	interface EditOptions {
		buildSelect: (this: BodyTable, data: any, jqXhr: JQueryXHR, cm: ColumnModel, iCol: number) => string;
		dataEvents?: { type: string, data?: any, fn: (e) => void }[];
		dataInit?: (this: BodyTable, element: Element, options: EditOptions) => void;
		dataUrl?: string | ((this: BodyTable, rowid: string, value: string, cmName: string, ajaxContext: { elem: Element, options: any, cm: ColumnModel, mode: "cell" | "addForm" | "editForm" | "add" | "edit", rowid: string, iCol: number, ovm: string[] }) => string);
		value?: string | { [propName: string]: string };
		[propName: string]: any; // attribute for the editable element
	}
	interface SearchOptions {
		[propName: string]: any;
	}
	interface ColumnModel {
		align?: "left" | "center" | "right";
		autoResizable?: boolean; // default value false
		autoResizing?: { minColWidth: number, maxColWidth: number, compact: boolean };
		cellattr?: "string" | ((rowId: string, cellValue: any, rowObject: any, cm: ColumnModel, rdata: any) => string);
		cellBuilder?: (this: BodyTable, cellValue: any, options: { rowId: string, colModel: ColumnModel, gid: string, pos: number, rowData: any }, rowObject: any, action?: "edit" | "add") => string;
		classes?: string; // spaceSeparatedCssClasses
		convertOnSave?: (this: BodyTable, options: { newValue: any, cm: ColumnModel, oldValue: any, id: string, item: any, iCol: number }) => any;
		datefmt?: string;
		editable?: boolean | "hidden" | "disabled" | "readonly" | ((options: { rowid: string, iCol: number, iRow: number, mode: "cell" | "addForm" | "editForm" | "add" | "edit", cmName: string, cm: ColumnModel, td?: HTMLTableDataCellElement, tr?: HTMLTableRowElement, trFrozen?: HTMLTableRowElement, dataElement?: Element, dataWidth?: number }) => boolean | "hidden" | "disabled" | "readonly"); // default value false
		editoptions?: EditOptions;
		editrules?: {
			edithidden?: boolean;
			required?: boolean;
			number?: boolean;
			integer?: boolean;
			minValue?: number;
			maxValue?: number;
			email?: boolean;
			url?: boolean;
			date?: boolean;
			time?: boolean;
			custom?: boolean | ((this: BodyTable, options: { oldValue: string, newValue: string, oldRowData?: any, rowid: string, iCol: number, iRow: number, mode: "cell" | "addForm" | "editForm" | "add" | "edit", cmName: string, cm: ColumnModel, td?: HTMLTableDataCellElement, tr?: HTMLTableRowElement }) => any[]);
			custom_func?: (this: BodyTable, value: string, name: string, iCol: number) => any[];
		};
		edittype?: "text" | "textarea" | "checkbox" | "select" | "password" | "button" | "image" | "file" | "custom";
		firstsortorder?: "asc" | "desc"; // default value "asc"
		fixed?: boolean; // default value false
		formatoptions?: any; // TODO: define formatoptions for different standard formatters
		formatter?: "integer" | "number" | "currency" | "date" | "select" | "actions" | "checkbox" | "checkboxFontAwesome4" | "showlink" | "email" | "link" | string | ((this: BodyTable, cellValue: any, options: { rowId: string, colModel: ColumnModel, gid: string, pos: number, rowData: any }, rowObject: any, action?: "edit" | "add") => string);
		formoptions?: {
			elmprefix?: string;
			elmsuffix?: string;
			label?: string;
			rowpos?: number;
			colpos?: number;
		};
		frozen?: boolean; // default value false
		jsonmap?: (item: any) => any;
		headerTitle?: string;
		hidden?: boolean; // default value false
		hidedlg?: boolean;
		index?: string;
		key?: boolean;
		label?: string;
		labelAlign?: "left" | "center" | "right" | "likeData";
		labelClasses?: string;
		lso?: "asc" | "desc" | "asc-desc" | "desc-asc" | "" | string;
		name: string;
		resizable?: boolean;
		saveLocally?: (this: BodyTable, options: { newValue: any, newItem: Object, oldItem: Object, id: string, cm: ColumnModel, cmName: string, iCol: number }) => void;
		search?: boolean;
		searchoptions?: SearchOptions;
		sortable?: boolean;
		sortfunc?: (a: any, b: any, direction: 1 | -1, aItem: any, bItem: any) => any;
		sortIconName?: string | ((this: BodyTable, order: "asc" | "desc", iCol: number, cm: ColumnModel) => string); //
		stype?: "select" | "checkbox" | "custom" | "text"; // default value "text"
		template?: "actions" | "integer" | "integerStr" | "number" | "numberStr" | "booleanCheckbox" | "booleanCheckboxFa" | string | ColumnModel;
		title?: boolean;
		unformat?: (this: BodyTable, cellValue: string, options: { rowId: string, colModel: ColumnModel }, dataElement: Element) => string;
		viewable?: boolean; // default value true
		width?: number; // default value 150
		widthOrg?: number; // used internally by jqGrid
		xmlmap?: (item: any) => any;
		[propName: string]: any; // allow to have any number of other properties
	}
	interface ReloadGridOptions {
		current?: boolean;
		fromServer?: boolean;
		page?: number;
	}
	interface FormEditingOptions extends EditFormLocaleOptions {
		_savedData?: { [propName: string]: any };
		addedrow?: "first" | "last" | "before" | "after" | "afterSelected" | "beforeSelected";
		afterclickPgButtons?: (this: BodyTable, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void;
		afterComplete?: (this: BodyTable, jqXhr: JQueryXHR, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => void;
		afterShowForm?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => void;
		afterSubmit?: (this: BodyTable, jqXhr: JQueryXHR, postdata: Object | string, editOrAdd: "edit" | "add") => void;
		ajaxEditOptions?: JQueryAjaxSettings;
		beforeCheckValues?: (this: BodyTable, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => Object | void;
		beforeInitData?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => boolean | "stop" | void;
		beforeShowForm?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => void;
		beforeSubmit?: (this: BodyTable, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => [true] | [true, any] | true | null | undefined | [false, string];
		bottominfo?: string;
		checkOnSubmit?: boolean;
		checkOnUpdate?: boolean;
		clearAfterAdd?: boolean;
		closeAfterEdit?: boolean;
		closeicon?: any[]; // [true,"left","fa fa-undo"]
		closeOnEscape?: boolean;
		commonIconClass?: string; // "fa"
		dataheight?: number | "auto" | "100%" | string; // "auto"
		datawidth?: number | "auto" | "100%" | string; // "auto"
		drag?: boolean;
		editData?: any;
		errorTextFormat?: (this: BodyTable, jqXhr: JQueryXHR, editOrAdd: "edit" | "add") => void;
		jqModal?: boolean;
		height?: number | "auto" | "100%" | string; // "auto"
		left?: number;
		modal?: boolean;
		mtype?: string | ((this: BodyTable, rowid: string, editOrAdd: "edit" | "add", options: FormEditingOptions, postdata: Object | string) => string);
		navkeys?: any[]; // [false,38,40]
		nextIcon?: string; // "fa fa-caret-right"
		onclickPgButtons?: (this: BodyTable, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void;
		onclickSubmit?: (this: BodyTable, options: FormEditingOptions, postdata: Object | string, editOrAdd: "edit" | "add") => Object | string;
		onClose?: (this: BodyTable, selector: string | Element | JQuery) => boolean;
		onInitializeForm?: (this: BodyTable, $form: JQuery, editOrAdd: "edit" | "add") => void;
		overlayClass?: string; // "ui-widget-overlay"
		prevIcon?: string; // "fa fa-caret-left"
		processing?: boolean;
		reloadAfterSubmit?: boolean;
		reloadGridOptions?: ReloadGridOptions;
		removemodal?: boolean;
		resize?: boolean;
		saveicon?: [boolean, string, string]; // [true,"left","fa fa-floppy-o"]
		savekey?: [boolean, number]; // [false,13]
		savetext?: string;
		saveui?: string; //"enable"
		serializeEditData?: (this: BodyTable, postdata: Object) => Object | string;
		skipPostTypes?: string[]; // ["image","file"]
		top?: number;
		topinfo?: string;
		useDataProxy?: boolean;
		url: string | ((this: BodyTable, rowid: string, editOrAdd: "edit" | "add", postdata: Object | string, options: FormEditingOptions) => string);
		viewPagerButtons?: boolean;
		width?: number | "auto" | "100%" | string; // "auto"
		[propName: string]: any; // allow to have any number of other properties
	}
	interface FormDeletingOptions extends DeleteFormLocaleOptions {
		afterComplete?: (this: BodyTable, jqXhr: JQueryXHR, postdata: Object | string, $form: JQuery) => void;
		afterShowForm?: (this: BodyTable, $form: JQuery) => void;
		afterSubmit?: (this: BodyTable, $form: JQuery) => void;
		ajaxDelOptions?: JQueryAjaxSettings;
		beforeInitData?: (this: BodyTable, $form: JQuery) => boolean | "stop" | void;
		beforeShowForm?: (this: BodyTable, $form: JQuery) => void;
		beforeSubmit?: (this: BodyTable, postdata: Object | string, $form: JQuery) => [true] | [true, any] | undefined | [false, string];
		cancelicon?: any[]; // [true,"left","fa fa-ban"]
		closeOnEscape?: boolean;
		commonIconClass?: string; // "fa"
		dataheight: number | "auto" | "100%" | string; // "auto"
		datawidth: number | "auto" | "100%" | string; // "auto"
		delData?: any;
		delicon?: any[]; // [true,"left","fa fa-trash-o"]
		drag?: boolean;
		height: number | "auto" | "100%" | string; // "auto"
		left?: number;
		mtype?: string; // "POST"
		onclickSubmit?: (this: BodyTable, options: FormDeletingOptions, postdata: Object | string) => Object | string;
		onClose?: (this: BodyTable, selector: string | Element | JQuery) => boolean;
		processing?: boolean; // internal used
		reloadAfterSubmit?: boolean;
		reloadGridOptions?: ReloadGridOptions;
		removemodal?: boolean;
		resize?: boolean;
		serializeDelData?: (this: BodyTable, postdata: Object | string) => Object | string;
		top?: number;
		url?: string | ((this: BodyTable, rowid: string, postdata: Object | string, options: FormDeletingOptions) => string);
		useDataProxy?: boolean;
		width?: number | "auto" | "100%" | string; // "auto"
	}
	interface FormViewingOptions extends ViewLocaleOptions {
	}
	interface SearchingOptions extends SearchLocaleOptions {
	}
	interface NavOptions extends NavLocaleOptions {
		add?: boolean;
		addicon?: string; // "fa fa-lg fa-fw fa-plus"
		addfunc?: (this: BodyTable, pAdd: FormEditingOptions) => void;
		afterRefresh?: (this: BodyTable) => void;
		alertheight?: number | "auto" | "100%" | string; // "auto"
		alertleft?: null | number;
		alerttop?: null | number;
		alertwidth?: number; // 200
		alertzIndex?: null | number;
		beforeRefresh?: (this: BodyTable) => void;
		buttonicon?: string; // "fa fa-lg fa-fw fa-external-link"
		cancelicon?: string; // "fa fa-lg fa-fw fa-ban"
		cloneToTop?: boolean;
		closeOnEscape?: boolean;
		commonIconClass?: string; // "fa fa-lg fa-fw"
		del?: boolean;
		delicon?: string; // "fa fa-lg fa-fw fa-trash-o"
		delfunc?: (this: BodyTable, rowid: string | string[], pDel?: FormDeletingOptions) => void;
		edit?: boolean;
		editicon?: string; // "fa fa-lg fa-fw fa-pencil"
		editfunc?: (this: BodyTable, rowid: string, pEdit: FormEditingOptions) => void;
		hideEmptyPagerParts?: boolean;
		iconsOverText?: boolean;
		jqModal?: boolean;
		position?: "left" | "center" | "right";
		refresh?: boolean;
		refreshicon?: string; // "fa fa-lg fa-fw fa-refresh"
		refreshstate?: "firstpage" | "current" | "currentfilter";
		reloadGridOptions?: ReloadGridOptions;
		removemodal?: boolean;
		saveicon?: string; // "fa fa-lg fa-fw fa-floppy-o"
		search?: boolean;
		searchicon?: string; // "fa fa-lg fa-fw fa-search"
		searchfunc?: (this: BodyTable, rowid: string, pSearch?: SearchingOptions) => void;
		view?: boolean;
		viewicon?: string; // "fa fa-lg fa-fw fa-file-o"
		viewfunc?: (this: BodyTable, rowid: string, pView?: FormViewingOptions) => void;
	}
	interface JsonOrLocalReader {
		root?: string | ((item: any) => string); // "rows"
		repeatitems?: boolean;
		cell?: string; // "cell"
		page?: string | ((item: any) => number | string); // "page",
		total?: string | ((item: any) => number | string); // "total",
		records?: string | ((item: any) => number | string); // "records",
		id?: string | ((this: BodyTable, item: any) => string); // "id",
		userdata?: string | ((this: BodyTable, item: any) => Object); //"userdata",
		subgrid?: {
			root?: string; // "rows"
			repeatitems?: boolean;
			cell?: string; // "cell"
		};
	}
	interface XmlReader extends JsonOrLocalReader {
		row?: string; // "row",
		subgrid?: {
			root?: string; // "rows"
			repeatitems?: boolean;
			row: string; // "row"
			cell?: string; // "cell"
		};
	}
	interface JqGridOptions {
		_index?: {[rowid: string]: number }; // used internally by jqGrid if local data exists
		_inlinenav?: boolean; // used internally by jqGrid if inlineNav be called
		_nvtd?: [number, number]; // used internally by jqGrid
		
		actionsNavOptions?: any;
		additionalProperties?: any[];
		afterInsertRow?: (this: BodyTable, rowid: string, item: { [cmOrPropName: string]: any }, srcItem: any) => void;
		afterResizeDblClick?: (this: BodyTable, options: { iCol: number, cm: ColumnModel, cmName: string }) => void;
		ajaxGridOptions?: JQueryAjaxSettings;
		altclass?: string;
		altRows?: boolean;
		arrayReader?: any[];
		arrayReaderInfos?: any[];
		autoencode?: boolean;
		beforeInitGrid?: (this: BodyTable) => void;
		beforeProcessing?: (this: BodyTable, data: any, textStatus: string, jqXhr: JQueryXHR) => false | void;
		beforeRequest?: (this: BodyTable) => false | "stop" | void;
		beforeSelectRow?: (this: BodyTable, rowid, eventObject: JQueryEventObject) => false | void;
		caption?: string;
		cb?: string;   // "#cb_list"
		cbId?: string; // "cb_list"
		cellEdit?: boolean;
		cellLayout?: number; // 5
		cellsubmit?: string; // "clientArray"
		cmNamesInputOrder?: string[]; // used internally by jqGrid, can be generated if remapColumns is used
		cmTemplate?: ColumnModel;
		colModel: ColumnModel[];
		colNames?: string[];
		columnsToReResizing?: number[]; // used internally by jqGrid
		data?: any[];
		datatype?: string | ((this: BodyTable, postData: Object | string, loadId: string, rcnt: number, npage: number, adjust: number) => void);
		deselectAfterSort?: boolean;
		direction?: "ltr" | "rtl";
		disableClick?: boolean;
		doubleClickSensitivity?: number; // 250
		editurl?: string; // "clientArray"
		errorDisplayTimeout?: number; // be used inside of displayErrorMessage method
		ExpandColumn?: string;
		footerrow?: boolean;
		forceClientSorting?: boolean;
		forceFit?: boolean;
		formDeleting?: FormDeletingOptions;
		formEditing?: FormEditingOptions;
		formViewing?: FormViewingOptions;
		frozenColumns?: boolean;
		gBox?: string; // "#gbox_list"
		gBoxId?: string; // gbox_list"
		gridComplete?: (this: BodyTable) => void;
		gridstate?: "visible" | "hidden";
		gridview?: boolean;
		grouping?: boolean;
		groupingView?: any;
		guiStyle?: string; // "jQueryUI"
		gView?: string; // "#gview_list"
		gViewId?: string; // "gview_list"
		headertitles?: boolean;
		height?: "auto" | "100%" | number;
		hiddengrid?: boolean;
		hidegrid?: boolean;
		hoverrows?: boolean;
		iCol?: number; // -1
		iColByName?: {[cmName: string]: number };
		iconSet?: string; // "fontAwesome"
		id?: string; // "list"
		idPrefix?: string; // ""
		idSel?: string; // "#list"
		ignoreCase?: boolean;
		iPropByName?: {[additionalPropertyName: string]: number };
		jqXhr?: JQueryXHR; // JQueryXHR of the last pending Ajax request. Be used by abortAjaxRequest method
		iRow?: number; // -1
		jsonReader?: JsonOrLocalReader;
		keyName?: boolean;
		lastpage?: number; // 2
		lastSelectedData?: any[];
		lastsort?: number; // 3
		loadBeforeSend?: (this: BodyTable, jqXhr: JQueryXHR, settings: JQueryAjaxSettings) => false | void;
		loadComplete?: (this: BodyTable, data: any) => void;
		loadonce?: boolean;
		loadui?: "enable" | "disable" | "block";
		locale?: string; // default is "en-US". It will be overwrite if by the last included i18n\grid.locale-XX.min.js
		localReader?: JsonOrLocalReader;
		maxItemsToJoin?: number; // 32768
		maxRowNum?: number; // 10000
		minResizingWidth?: number; // 10
		mtype?: string; // "GET"
		multiboxonly?: boolean;
		multikey?: boolean;
		multiPageSelection?: boolean;
		multiselect?: boolean;
		multiselectPosition?: "left" | "right" | "none";
		multiselectWidth?: number; // 16
		multiSort?: boolean;
		navOptions?: NavOptions;
		nv?: number; // 0
		ondblClickRow?: (this: BodyTable, rowid: string, iRow: number, iCol: number, eventObject: JQueryEventObject) => void;
		onHeaderClick?: (this: BodyTable, gridState: "visible" | "hidden", eventObject: JQueryEventObject) => void;
		onInitGrid?: (this: BodyTable) => void;
		onPaging?: (this: BodyTable, source: "records" | "user" | "first" | "prev" | "next" | "last", options: { newPage: number, currentPage: number, lastPage: number, currentRowNum: number, newRowNum: number }) => false | "stop" | void;
		onRightClickRow?: (this: BodyTable, rowid: string, iRow: number, iCol: number, eventObject: JQueryEventObject) => void;
		onSelectAll?: (this: BodyTable, rowids: string[], toCheck: boolean) => void;
		onSelectRow?: (this: BodyTable, rowid: string, state: boolean, eventObject: JQueryEventObject) => void;
		onSortCol?: (this: BodyTable, cmOrIndexName: string, iCol: number, sortOrder: string) => false | "stop" | void;
		page?: number;
		pager?: boolean | string; // "#jqg1"
		pagerLeftWidth?: number; // 125
		pagerpos?: "left" | "center" | "right";
		pgbuttons?: boolean;
		pginput?: boolean;
		postData?: any;
		prmNames?: {
			addoper?: string | null; // "add"
			deloper?: string | null; // "del"
			editoper?: string | null; // "edit"
			id?: string | null; // "id"
			nd?: string | null; // "nd"
			npage?: string | null; // null
			oper?: string | null; // "oper"
			order?: string | null; // "sord"
			page?: string | null; // "page"
			rows?: string | null; // "rows"
			search?: string | null; // "_search"
			sort?: string | null; // "sidx"
			subgridid?: string | null; // "id"
			totalrows?: string | null; // "totalrows"
		};
		quickEmpty?: boolean | "quickest";
		reccount?: number; // 10
		recordpos?: "left" | "center" | "right";
		records?: number; // 12
		reloadGridOptions?: ReloadGridOptions;
		remapColumns?: number[];
		resetsearch?: boolean;
		reservedColumnNames?: string[]; // ["rn","cb","subgrid"]
		resizeDblClick?: (this: BodyTable, iCol: number, cm: ColumnModel, eventObject: JQueryEventObject) => false | "stop" | void;
		resizeclass?: string; // ""
		resizeStart?: (this: BodyTable, eventObject: JQueryEventObject, iCol: number) => void;
		resizeStop?: (this: BodyTable, newWidth: number, iCol: number) => void;
		rowIndexes?: {[rowid: string]: number};
		rowList?: (number | string)[]; //[5,10,20,"10000:All"]
		rowNum?: number; // 10
		rownumbers?: boolean;
		rownumWidth?: number; // 25
		rowTotal?: null | number;
		rs?: string; // "#rs_mlist"
		rsId?: string; // "rs_mlist"
		savedRow?: any[];
		scroll?: boolean;
		scrollOffset?: number; // 0
		scrollrows?: boolean;
		scrollTimeout?: number; // 40
		search?: boolean;
		searching?: SearchingOptions;
		selarrrow?: string[];
		selrow?: null | string;
		showOneSortIcon?: boolean;
		shrinkToFit?: boolean;
		singleSelectClickMode?: "toggle" | "selectonly";
		sortname?: string; // "invdate"
		sortorder?: "asc" | "desc" | string;
		subGrid?: boolean;
		subGridModel?: any[];
		subGridOptions?: any;
		subGridWidth?: number; // 16
		tblwidth?: number; // 487
		threeStateSort?: boolean;
		toolbar?: [boolean, "top" | "bottom" | "both"];
		toppager?: string; // "#list_toppager"
		totaltime?: number; // 94
		tree_root_level?: number; // 0
		treeANode?: number; // -1
		treeGrid?: boolean;
		treeGridModel?: "adjacency" | "nested";
		treeIcons?: {
			commonIconClass?: string; // "fa fa-fw"
			leaf?: string; // "fa fa-fw fa-dot-circle-o"
			minus?: string; // "fa fa-fw fa-lg fa-sort-desc"
			plusLtr?: string; // "fa fa-fw fa-lg fa-caret-right"
			plusRtl?: string; // "fa fa-fw fa-lg fa-caret-left"
		};
		treeReader?: any;
		url?: string; // ""
		userData?: any;
		userDataOnFooter?: boolean;
		useUnformattedDataForCellAttr?: boolean;
		viewrecords?: boolean;
		viewsortcols?: [boolean, "vertical" | "horizontal", boolean];
		width?: number | "auto" | "100%" | string;
		widthOrg?: number; // used internally by jqGrid
		xmlReader?: XmlReader;
		[propName: string]: any; // allow to have any number of other properties
	}
	interface ShowHideColOptions {
		skipSetGroupHeaders?: boolean;
		notSkipFrozen?: boolean;
		skipFeedback?: boolean;
		toReport?: Object;
		skipSetGridWidth?: boolean;
		newGridWidth?: number;
	}
}

interface JQueryStatic {
	jgrid: FreeJqGrid.JqGridStatic;
	fmatter: FreeJqGrid.JqGridFmatter;
	unformat: (element: Element | JQuery, options: { rowId: string, colModel: FreeJqGrid.ColumnModel }, iCol: number, content: boolean) => string;
	[propName: string]: any; // allow to have any number of other properties
}

interface JQuery {
	jqGrid(options: FreeJqGrid.JqGridOptions): FreeJqGrid.JQueryJqGrid;

	// getGridRes
	getGridRes?(propertyPath: string): any;
	jqGrid(methodName: "getGridRes", propertyPath: string): any;

	// getGuiStyles
	getGuiStyles?(guiStylePath?: string, additionalCssClasses?: string): string;
	jqGrid(methodName: "getGuiStyles", guiStylePath?: string, additionalCssClasses?: string): string;

	// isBootstrapGuiStyle
	isBootstrapGuiStyle?(): boolean;
	jqGrid(methodName: "isBootstrapGuiStyle"): boolean;
	
	// displayErrorMessage
	displayErrorMessage?(htmlFragment: string): void;
	jqGrid(methodName: "displayErrorMessage", htmlFragment: string): void;

	// getIconRes
	getIconRes?(iconResourcePath: string): string;
	jqGrid(methodName: "getIconRes", iconResourcePath: string): string;

	// isInCommonIconClass
	isInCommonIconClass?(testClassName: string): boolean;
	jqGrid(methodName: "isInCommonIconClass", testClassName: string): boolean;

	// getGridParam
	getGridParam?(parameterName?: string): any;
	jqGrid(methodName: "getGridParam", parameterName?: string): any;

	// setGridParam
	setGridParam?(newParams: Object, overwrite?: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setGridParam", newParams: Object, overwrite?: boolean): FreeJqGrid.JQueryJqGrid;

	// abortAjaxRequest
	abortAjaxRequest?(): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "abortAjaxRequest"): FreeJqGrid.JQueryJqGrid;	

	// getGridRowById
	getGridRowById?(rowid: string): HTMLTableRowElement | null;
	jqGrid(methodName: "getGridRowById", rowid: string): HTMLTableRowElement | null;

	// getDataIDs
	getDataIDs?(): string[];
	jqGrid(methodName: "getDataIDs"): string[];

	// setSelection
	setSelection?(rowid: string, callOnSelectRow?: boolean, eventObject?: JQueryEventObject): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setSelection", rowid: string, callOnSelectRow: boolean, eventObject: JQueryEventObject): FreeJqGrid.JQueryJqGrid;

	// resetSelection
	resetSelection?(rowid?: string): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "resetSelection", rowid?: string): FreeJqGrid.JQueryJqGrid;

	// getRowData
	getRowData?(rowid?: string, options?: { includeId: boolean, skipHidden?: boolean }): Object[] | Object;
	jqGrid(methodName: "getRowData", rowid?: string, options?: { includeId: boolean, skipHidden?: boolean }): Object[] | Object;

	// delRowData
	delRowData?(rowid: string): boolean;
	jqGrid(methodName: "delRowData", rowid: string): boolean;

	// setRowData
	setRowData?(rowid: string, data: any, cssp?: string | Object): boolean;
	jqGrid(methodName: "setRowData", rowid: string, data: any, cssp?: string | Object): boolean;

	// addRowData
	addRowData?(rowid: string, rdata: Object | Object[], position?: "first" | "last" | "before" | "after" | "afterSelected" | "beforeSelected", srcRowid?: string): boolean;
	jqGrid(methodName: "addRowData", rowid: string, rdata: Object | Object[], position?: "first" | "last" | "before" | "after" | "afterSelected" | "beforeSelected", srcRowid?: string): boolean;

	// footerData
	footerData?(action?: "get" | "set", data?: Object, format?: boolean): Object | boolean;
	jqGrid(methodName: "footerData", action?: "get" | "set", data?: Object, format?: boolean): Object | boolean;

	// showHideCol, hideCol, showCol
	showHideCol?(cmName: string[] | string, show?: boolean | "none" | "", options?: FreeJqGrid.ShowHideColOptions): FreeJqGrid.JQueryJqGrid;
	hideCol?(cmName: string[] | string, options?: FreeJqGrid.ShowHideColOptions): FreeJqGrid.JQueryJqGrid;
	showCol?(cmName: string[] | string, options?: FreeJqGrid.ShowHideColOptions): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "showHideCol", cmName: string[] | string, show?: boolean | "none" | "", options?: FreeJqGrid.ShowHideColOptions): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "hideCol", cmName: string[] | string, options?: FreeJqGrid.ShowHideColOptions): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "showCol", cmName: string[] | string, options?: FreeJqGrid.ShowHideColOptions): FreeJqGrid.JQueryJqGrid;

	// remapColumns
	remapColumns?(permutationByName: number[], updateCells?: boolean, keepHeader?: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "remapColumns", permutationByName: number[], updateCells?: boolean, keepHeader?: boolean): FreeJqGrid.JQueryJqGrid;

	// remapColumnsByName
	remapColumnsByName?(permutationByName: string[], updateCells?: boolean, keepHeader?: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "remapColumnsByName", permutationByName: string[], updateCells?: boolean, keepHeader?: boolean): FreeJqGrid.JQueryJqGrid;

	// setGridWidth
	setGridWidth?(newWidth: number, shrink?: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setGridWidth", newWidth: number, shrink?: boolean): FreeJqGrid.JQueryJqGrid;

	// setGridHeight
	setGridHeight?(newHeight: number | "auto" | "100%" | string): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setGridHeight", newHeight: number | "auto" | "100%" | string): FreeJqGrid.JQueryJqGrid;

	// setCaption
	setCaption?(newCaption: string): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setCaption", newCaption: string): FreeJqGrid.JQueryJqGrid;

	// setLabel
	setLabel?(cmName: string, nData: string, cssp?: string | Object, attrp?: Object): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setLabel", cmName: string, nData: string, cssp?: string | Object, attrp?: Object): FreeJqGrid.JQueryJqGrid;

	// setCell
	setCell?(rowid: string, cmName: string, nData: any, cssp?: string | Object, attrp?: Object, forceUpdate?: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setCell", rowid: string, cmName: string, nData: any, cssp?: string | Object, attrp?: Object, forceUpdate?: boolean): FreeJqGrid.JQueryJqGrid;

	// getCell
	getCell?(rowid: string, cmName: string): string | false;
	getCell?(rowid: string, iCol: number): string | false;
	jqGrid(methodName: "getCell", rowid: string, cmName: string): string | false;
	jqGrid(methodName: "getCell", rowid: string, iCol: number): string | false;

	// getCol
	getCol?(cmName: string, asObj?: boolean, mathopr?: "sum" | "avg" | "count" | "min" | "max"): string[] | { id: string, value: string }[] | number;
	jqGrid(methodName: "getCol", cmName: string, asObj?: boolean, mathopr?: "sum" | "avg" | "count" | "min" | "max"): string[] | { id: string, value: string }[] | number;

	// clearGridData
	clearGridData?(clearFooter: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "clearGridData", clearFooter: boolean): FreeJqGrid.JQueryJqGrid;

	// getInd
	getInd?(): HTMLTableRowElement | number | false;
	jqGrid(methodName: "getInd"): HTMLTableRowElement | number | false;

	// bindKeys
	bindKeys?(settings: { onEnter?: (this: FreeJqGrid.BodyTable, rowid: string) => void, onSpace?: (this: FreeJqGrid.BodyTable, rowid: string) => void, onLeftKey?: (this: FreeJqGrid.BodyTable, rowid: string) => void, onRightKey?: (this: FreeJqGrid.BodyTable, rowid: string) => void, scrollingRows: boolean }): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "bindKeys", settings: { onEnter?: (this: FreeJqGrid.BodyTable, rowid: string) => void, onSpace?: (this: FreeJqGrid.BodyTable, rowid: string) => void, onLeftKey?: (this: FreeJqGrid.BodyTable, rowid: string) => void, onRightKey?: (this: FreeJqGrid.BodyTable, rowid: string) => void, scrollingRows: boolean }): FreeJqGrid.JQueryJqGrid;

	// unbindKeys
	unbindKeys?(): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "unbindKeys"): FreeJqGrid.JQueryJqGrid;

	// getLocalRow
	getLocalRow?(rowid: string): false | Object;
	jqGrid(methodName: "getLocalRow", rowid: string): false | Object;

	// progressBar
	progressBar?(options: { htmlContent: string, method: "hide" | "show", loadtype: "disable" | "enable" | "block" }): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "progressBar", iCol: number, newWidth: number, adjustGridWidth?: boolean, skipGridAdjustments?: boolean): FreeJqGrid.JQueryJqGrid;

	// setColWidth
	setColWidth?(iCol: number, newWidth: number, adjustGridWidth?: boolean, skipGridAdjustments?: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "setColWidth", iCol: number, newWidth: number, adjustGridWidth?: boolean, skipGridAdjustments?: boolean): FreeJqGrid.JQueryJqGrid;

	// getAutoResizableWidth
	getAutoResizableWidth?(iCol: number): number;
	jqGrid(methodName: "getAutoResizableWidth", iCol: number): number;

	// autoResizeColumn
	autoResizeColumn?(iCol: number, skipGridAdjustments?: boolean): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "autoResizeColumn", iCol: number, skipGridAdjustments?: boolean): FreeJqGrid.JQueryJqGrid;

	// autoResizeAllColumns
	autoResizeAllColumns?(): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "autoResizeAllColumns"): FreeJqGrid.JQueryJqGrid;

	// editGridRow
	editGridRow?(rowid: string, options: FreeJqGrid.FormEditingOptions): void;
	jqGrid(methodName: "editGridRow", rowid: string, options: FreeJqGrid.FormEditingOptions): any;

	// navGrid
	navGrid?(rowid: string, pagerIdSelector: string, navOptions?: FreeJqGrid.NavOptions, pEdit?: FreeJqGrid.FormEditingOptions, pAdd?: FreeJqGrid.FormEditingOptions, pDel?: FreeJqGrid.FormDeletingOptions, pSearch?: FreeJqGrid.SearchingOptions, pView?: FreeJqGrid.FormViewingOptions): FreeJqGrid.JQueryJqGrid;
	navGrid?(rowid: string, navOptions?: FreeJqGrid.NavOptions, pEdit?: FreeJqGrid.FormEditingOptions, pAdd?: FreeJqGrid.FormEditingOptions, pDel?: FreeJqGrid.FormDeletingOptions, pSearch?: FreeJqGrid.SearchingOptions, pView?: FreeJqGrid.FormViewingOptions): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "navGrid", pagerIdSelector: string, navOptions?: FreeJqGrid.NavOptions, pEdit?: FreeJqGrid.FormEditingOptions, pAdd?: FreeJqGrid.FormEditingOptions, pDel?: FreeJqGrid.FormDeletingOptions, pSearch?: FreeJqGrid.SearchingOptions, pView?: FreeJqGrid.FormViewingOptions): FreeJqGrid.JQueryJqGrid;
	jqGrid(methodName: "navGrid", navOptions?: FreeJqGrid.NavOptions, pEdit?: FreeJqGrid.FormEditingOptions, pAdd?: FreeJqGrid.FormEditingOptions, pDel?: FreeJqGrid.FormDeletingOptions, pSearch?: FreeJqGrid.SearchingOptions, pView?: FreeJqGrid.FormViewingOptions): FreeJqGrid.JQueryJqGrid;

	// jqGrid events
	on(eventName: "jqGridAfterInsertRow", handler: (eventObject: JQueryEventObject, rowid: string, item: { [cmOrPropName: string]: any }, srcItem: any) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAfterLoadComplete", handler: (eventObject: JQueryEventObject, data: any) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAfterResizeDblClick", handler: (eventObject: JQueryEventObject, options: { iCol: number, cm: FreeJqGrid.ColumnModel, cmName: string }) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridBeforeInitGrid", handler: (eventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridBeforeProcessing", handler: (eventObject: JQueryEventObject, data: any, textStatus: string, jqXhr: JQueryXHR) => false | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridBeforeRequest", handler: (eventObject: JQueryEventObject) => false | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridBeforeSelectRow", handler: (eventObject: JQueryEventObject, rowid, orgEventObject: JQueryEventObject) => false | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridGridComplete", handler: (eventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridLoadBeforeSend", handler: (eventObject: JQueryEventObject, jqXhr: JQueryXHR, settings: JQueryAjaxSettings) => false | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridLoadComplete", handler: (eventObject: JQueryEventObject, data: any) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridDblClickRow", handler: (eventObject: JQueryEventObject, rowid: string, iRow: number, iCol: number, orgEventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridHeaderClick", handler: (eventObject: JQueryEventObject, gridState: "visible" | "hidden", orgEventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridInitGrid", handler: (eventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridPaging", handler: (eventObject: JQueryEventObject, source: "records" | "user" | "first" | "prev" | "next" | "last", options: { newPage: number, currentPage: number, lastPage: number, currentRowNum: number, newRowNum: number }) => false | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridRightClickRow", handler: (eventObject: JQueryEventObject, rowid: string, iRow: number, iCol: number, orgEventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridSelectAll", handler: (eventObject: JQueryEventObject, rowids: string[], toCheck: boolean) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridSelectRow", handler: (eventObject: JQueryEventObject, rowid: string, state: boolean, orgEventObject: JQueryEventObject) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridSortCol", handler: (eventObject: JQueryEventObject, cmOrIndexName: string, iCol: number, sortOrder: string) => false | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridResizeDblClick", handler: (eventObject: JQueryEventObject, iCol: number, cm: FreeJqGrid.ColumnModel, orgEventObject: JQueryEventObject) => false | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridResizeStart", handler: (eventObject: JQueryEventObject, orgEventObject: JQueryEventObject, iCol: number) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridResizeStop", handler: (eventObject: JQueryEventObject, newWidth: number, iCol: number) => void): FreeJqGrid.JQueryJqGrid;

	// form editing events
	on(eventName: "jqGridAddEditAfterClickPgButtons", handler: (eventObject: JQueryEventObject, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditAfterComplete", handler: (eventObject: JQueryEventObject, jqXhr: JQueryXHR, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditAfterShowForm", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditAfterSubmit", handler: (eventObject: JQueryEventObject, jqXhr: JQueryXHR, postdata: Object | string, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditBeforeCheckValues", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => Object | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditBeforeInitData", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditBeforeShowForm", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditBeforeSubmit", handler: (eventObject: JQueryEventObject, postdata: Object | string, $form: JQuery, editOrAdd: "edit" | "add") =>  [true] | [true, any] | true | null | undefined | [false, string]): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditClickPgButtons", handler: (eventObject: JQueryEventObject, whichButton: "next" | "prev", $form: JQuery, rowid: string) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditClickSubmit", handler: (eventObject: JQueryEventObject, options: FreeJqGrid.FormEditingOptions, postdata: Object | string, editOrAdd: "edit" | "add") => Object | string): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditInitializeForm", handler: (eventObject: JQueryEventObject, $form: JQuery, editOrAdd: "edit" | "add") => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditSerializeEditData", handler: (eventObject: JQueryEventObject, postdata: Object) => Object | string): FreeJqGrid.JQueryJqGrid;

	// form deleting events
	on(eventName: "jqGridDeleteAfterShowForm", handler: (eventObject: JQueryEventObject, $form: JQuery) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridAddEditAfterComplete", handler: (eventObject: JQueryEventObject, jqXhr: JQueryXHR, postdata: Object | string, $form: JQuery) => void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridDeleteBeforeInitData", handler: (eventObject: JQueryEventObject, $form: JQuery) => boolean | "stop" | void): FreeJqGrid.JQueryJqGrid;
	on(eventName: "jqGridDeleteBeforeShowForm", handler: (eventObject: JQueryEventObject, $form: JQuery) => void): FreeJqGrid.JQueryJqGrid;
}
