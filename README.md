# maintained version of free-jqGrid
[![npm version](https://img.shields.io/npm/v/free-jqgrid-fork.svg?style=flat)](https://www.npmjs.com/package/free-jqgrid-fork)&nbsp;
---
jqGrid is a popular jQuery Plugin for displaying and editing data in tabular form. It has some other more sophisticated features, like subgrids, TreeGrids, grouping and so on.

jqGrid was developed originally by [Tony Tomov](https://github.com/tonytomov) and it was available under MIT/GPL-licenses till the version 4.7.0 published Dec 8, 2014 (see [here](https://github.com/tonytomov/jqGrid/tree/v4.7.0)). Short time after that the license agreement was changed (see <a href="https://github.com/tonytomov/jqGrid/commit/1b2cb55c93ee8b279f15a3faf5a2f82a98da3b4c">here</a>) and new 4.7.1 version was <a href="https://github.com/tonytomov/jqGrid/tree/v4.7.1">published</a>.

The code from the GitHib repository is the fork of jqGrid 4.7.0 - the latest version available under MIT/GPL-licenses. It will be provided under MIT/GPL-licenses.

This fork is primarily focused on accepting contributions, fixing known issues, and ensuring jqGrid continues to support the latest jQuery. There is no roadmap or direction for this project besides this, if you prefer something with a clear direction and focus on adding new features then take a look at the commercial version of jqGrid at [trirand](http://www.trirand.com/blog/).

Below you can find short description of the bug fixes implemented in free jqGrid 4.15.5 (compared with version 4.15.4). The version is developed by [Oleg Kiriljuk](https://github.com/OlegKi), alias [Oleg](https://stackoverflow.com/users/315935/oleg) on the stackoverflow and [OlegK](http://www.trirand.com/blog/?page_id=393) on trirand forum.

Read [Wiki](https://github.com/free-jqgrid/jqGrid/wiki) for more detailed information about the features of free-jqGrid. The preliminary version of the documentation can be found [here](https://free-jqgrid.github.io/).

One can install the package with respect of [npm](https://www.npmjs.com/package/free-jqgrid-fork) by using "npm install free-jqgrid-fork".

Free jqGrid is is available from [jsDelivr CDN](https://www.jsdelivr.com/projects/free-jqgrid-fork) and [unpkg](https://unpkg.com/free-jqgrid-fork). Thus one can use it directly from Internet by including for example the URLs like
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/free-jqgrid-fork@4.15.11/css/ui.jqgrid.min.css">
<script src="https://cdn.jsdelivr.net/npm/free-jqgrid-fork@4.15.11/js/jquery.jqgrid.min.js"></script>
```
or
```html
<link rel="stylesheet" href="https://unpkg.com/free-jqgrid-fork@4.15.11/css/ui.jqgrid.min.css">
<script src="https://unpkg.com/free-jqgrid-fork@4.15.11/js/jquery.jqgrid.min.js"></script>
```
**The locale file is optional**. One can, but one don't need to include `grid.locale-en.min.js`, because the same information is already included in the `jquery.jqgrid.min.js` (or `jquery.jqgrid.src.js`).

Remark: the above URLs will be available **after publishing** the release of the version of 4.15.5.

### New main features implemented in the version 4.15.5 compared with 4.15.4:

* Add support of free Font Awesome 5.x. To use the feature one need to include Font Awesome 5.x either as CSS (by including `https://use.fontawesome.com/releases/v5.2.0/css/all.css` for example) or as SVG file (by including `https://use.fontawesome.com/releases/v5.2.0/js/all.js`). More examples of the usage will be published later [here](https://free-jqgrid.github.io/getting-started/index.html). Additionally, one has to use `iconSet: "fontAwesomeSolid"` or `iconSet: "fontAwesomeSVG"` instead of `iconSet: "fontAwesome"`, which means Font Awesome 4.x.
* Add 3 new option: `sortingDuringEditing`, `pagingDuringEditing`, `reloadingDuringEditing` with values `"prevent"`, `"cancel"` or `"save"`. The default behavior in previous versions of jqGrid: preventing sorting if the grid is in inline or in cell editing. Including new option `sortingDuringEditing: "cancel"` or `sortingDuringEditing: "save"` will allows sorting. The currently editing data will be discarded or saved depend on the value of `sortingDuringEditing` option. The same problem exists in case of paging or reloading the grid. The options `pagingDuringEditing`, `reloadingDuringEditing` helps to specify the desired behavior.

### Below one can see the full list of changes in the version 4.15.5 compared with 4.15.4:

* Bug fix in initializing checkbox with `stype: "checkbox"` in searching dialog
* Add new property `states.hoverTh` in `$.jgrid.icons.bootstrap4` to have hover effect on column headers
* Fix the names of 2 subGrid callbacks in `free-jqgrid.d.ts` file
* Bug fix in form editing of `edittype: "checkbox"`, `formatter: "checkbox"`
* Bug fix in resizing of dialogs in Bootrtrap 4
* Bug fix in header grouping in Bootstrap
* Add `labelswidth` option to Add/Edit form
* Small fixes in the code of `inlineNav` to make the code more safe
* Add 3 new option: `sortingDuringEditing`, `pagingDuringEditing`, `reloadingDuringEditing` with values `"prevent"`, `"cancel"` or `"save"`. The default behavior in previous versions of jqGrid: preventing sorting if the grid is in inline or in cell editing. Including new option `sortingDuringEditing: "cancel"` or `sortingDuringEditing: "save"` will allows sorting. The currently editing data will be discarded or saved depend on the value of `sortingDuringEditing` option. The same problem exists in case of paging or reloading the grid. The options `pagingDuringEditing`, `reloadingDuringEditing` helps to specify the desired behavior.
* Add support of Font Awesome 5 as SVG with JS. See [the commit](https://github.com/free-jqgrid/jqGrid/commit/3d701bcb8ecec7002abd13a6edee558a819c4e40) and [another one](https://github.com/free-jqgrid/jqGrid/commit/0ca99884529c2c3c8602909e3c51ad48cc82d9ae) for more details.
* Bug fix in `formatter:"actions"` to support frozen columns
* Add `title: false` property of `colModel` in `template: "actions"`
* Small fixes in parsing of dates to reduce NaNs in results
* Fixes in legacy subgrid to allow to use dot-separated names and callbacks in `subGridModel`
* Add formatted value as additional parameter of `cellattr` callback to simplify using of `cellattr` together with formatters
* Bug fix of button size in case of usage Bootstrap 4.x

**Many thanks to all, who sent bug reports and suggestions to improve free jqGrid!**
