$(function () {
    "use strict";
    var mydata = [
        { id: 10, firstName: "Angela", lastName: "Merkel" },
        { id: 20, firstName: "Vladimir", lastName: "Putin" },
        { id: 30, firstName: "David", lastName: "Cameron" },
        { id: 40, firstName: "Barack", lastName: "Obama" },
        { id: 50, firstName: "François", lastName: "Hollande" }
    ];
    var $grid = $("#grid").jqGrid({
        colModel: [
            { name: "firstName" },
            { name: "lastName" }
        ],
        data: mydata
    });
    var grid = $grid[0].grid;
    var t1 = $("#grid").jqGrid("getGridParam", "data");
    var t11 = $("#grid").getGridParam("data");
    var ids = $("#grid").jqGrid("getDataIDs");
    alert("We use " + $.jgrid.productName + " " + $.jgrid.version);
    alert($.jgrid.locales[$.jgrid.defaults.locale].defaults.emptyrecords);
    alert($.jgrid.locales[$.jgrid.defaults.locale].search.odata[0].text);
    $.jgrid.clearArray(mydata);
    var gridDom = $("#grid")[0];
    var headers = gridDom.grid.headers;
    var colHeaderHeight = $(headers[1].el).height();
});
//# sourceMappingURL=test.js.map