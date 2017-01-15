/// <reference path="../free-jqgrid.d.ts" />

$(() => {
    "use strict";
    const mydata = [
        { id: 10, firstName: "Angela", lastName: "Merkel" },
        { id: 20, firstName: "Vladimir", lastName: "Putin" },
        { id: 30, firstName: "David", lastName: "Cameron" },
        { id: 40, firstName: "Barack", lastName: "Obama" },
        { id: 50, firstName: "François", lastName: "Hollande" }
    ];
    const $grid = $("#grid").jqGrid({
        colModel: [
            { name: "firstName" },
            { name: "lastName" }
        ],
        data: mydata
    });
    const grid: FreeJqGrid.GridInfo = $grid[0].grid;
    var t1 = $("#grid").jqGrid("getGridParam", "data");
    var t11 = $("#grid").getGridParam("data");
    var ids: string[] = $("#grid").jqGrid("getDataIDs");
    //var t2 = $("#grid").jqGrid("getGridParam", 1);
    //var t3 = $("#grid").jqGrid("getGridParam", "data", t1);
    //if (ids != null && ids.length > 0) {
    //	alert(ids[0].substr(0));
    //}
	
    //var d = $("#grid").jqGrid("getGridParam", "data", 2); // error: Supplied parameters do not match any signature of call target
    //var currentData = $("#grid").getGridParam(4); // error: Argument of type '4' is not assignable to parameter of type 'string'.
    //var ids1 = $("#grid").jqGrid("getDataIDs", 4); // error: Argument of type '"getDataIDs"' is not assignable to parameter of type '"getGridParam"'.
    //var ids2 = $("#grid").jqGrid("getDataIds"); // error: Argument of type '"getDataIds"' is not assignable to parameter of type 'FreeJqGridOptions'
    alert("We use " + $.jgrid.productName + " " + $.jgrid.version);
    alert($.jgrid.locales[$.jgrid.defaults.locale].defaults.emptyrecords);
    alert($.jgrid.locales[$.jgrid.defaults.locale].search.odata[0].text);
    $.jgrid.clearArray(mydata);
    const gridDom = <FreeJqGrid.BodyTable>$("#grid")[0];
    const headers = gridDom.grid.headers;
    //headers: { el: HTMLTableHeaderCellElement; width: number; }[]
    const colHeaderHeight = $(headers[1].el).height();
});
