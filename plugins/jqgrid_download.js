/**
* GPL licenses
* Module to Download CSV or Excel files from Jqgrid
* @module Jqgriddownload
*/


	/**
	@alias module: Jqgriddownload
	@param {string} - format: csv or xlsx
	@param {string} - separator, default ',' (optional)
	@param {string} - endline, default '\n' (optional)
	@param {object} - Grid object (optional)
	@param {array}  - Grid data object (optional)
	@param {bolan}  - Quoted Output for text (optional), default none 

	@example
	jQuery("#grid").jqGrid(
	{
	colModel: col_model,
	data: data,
	loadonce: true,
	}
	}).jqGrid("filterToolbar",
	{
	searchOnEnter: true,
	enableClear: false
	}).jqGrid("navButtonAdd", "#grid_toppager",
	{
	caption: "Download CSV",
	id: "download",
	buttonicon: "fa-file-excel-o",
	onClickButton: function(err, res)
	{
        jQuery(this).jqGrid("jqgrid_download", 'csv');
        // for quouted output 
        // jQuery(this).jqGrid("jqgrid_download", 'csv',',','\n',false,[],true); 

	}
      }).jqGrid("navButtonAdd", "#grid_toppager",
      {
      caption: "Excel",
      id: "Excel",
      buttonicon: "fa-file-excel-o",
      onClickButton: function(err, res)
      {
      jQuery(this).jqGrid("jqgrid_download", 'xlsx');
      }
      });
	*/

(function (global, factory)
{
  "use strict";
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"./jquery.contextmenu-ui",
			"free-jqgrid/grid.base"
		], function ($) {
			return factory($, global, global.document);
		});
	} else if (typeof module === "object" && module.exports) {
		// Node/CommonJS
		module.exports = function (root, $) {
			if ($ === undefined) {
				// require("jquery") returns a factory that requires window to
				// build a jQuery instance, we normalize how we use modules
				// that require this pattern but the window provided is a noop
				// if it's defined (how jquery works)
				$ = typeof window !== "undefined" ?
						require("jquery") :
						require("jquery")(root || window);
			}
			require("./jquery.contextmenu-ui");
			require("free-jqgrid/grid.base");
			factory($, root, root.document);
			return $;
		};
	} else {
		// Browser globals
		factory(jQuery, global, global.document);
	}
}(typeof window !== "undefined" ? window : this, function ($, window, document){
    "use strict";
    $.jgrid.extend({


	jqgrid_download: function (format = 'csv', separator = ',', endline = '\n', obj = false, _data=[],_quoted_output=false)
        {
          format = format.toLowerCase();
          switch(format)
	  {
	    case 'csv':
              this._csv(separator, endline, obj, _data, _quoted_output);
	      break;
	    case 'xlsx':
              this._xlsx(separator, endline, obj, _data);
	      break;
	    default:
              alert('Format ' + format + ' is not yet supported \n Please use: csv, xlsx formats');
	  } 
	}, 

        _csv: function(separator, endline, obj, data, quoted_output)
        {

          if(data.length === 0)
          {
  	    data    = jQuery(this).jqGrid("getGridParam", "lastSelectedData");
          }
          let col     = jQuery(this).jqGrid("getGridParam", "colModel");
          let caption = jQuery(this).jqGrid("getGridParam", "caption").replace(/[^a-zA-Z0-9]/g, "");
          let format = {};
          let formatoptions = {};
          let formatoptions_default = '';	    	    
          if (caption === "")
          {
            caption = 'jqgriddownload';
          }

	  let rows    = [];
	  let header  = [];

            for(let c in col)
            {
              if(col[c]['name'] != 'rn' && col[c]['name'] != 'cb' && col[c]['name'] != 'subgrid')
              {
                let name = col[c]['name'];
                name = '"' + col[c]['label'] + '"';		      		  
                if(col[c]['label'])
                {

                  if(col[c]['hidden'] != true)
	          {
                    header.push(name);
		  }      
                }
                //console.log(col[c]['download_formatter']);
                format[col[c]['name']]= {'formatter': col[c]['download_formatter']};
		  
              }

 	      if(col[c]['formatoptions'])
    	      {
                if(col[c]['formatoptions']['defaultValue'])
		{
                  formatoptions_default = col[c]['formatoptions']['defaultValue'];
		}      
                if(col[c]['formatoptions']['value'])
                { 
	         const s = col[c]['formatoptions']['value'];
    	         const a = s.split(";");
                 for(let i in a)
	         {
                   const a2 =a[i].split(":");
	           if(a2.length === 2)
	           {
	           formatoptions[a2[0]] = a2[1];
	           }
	         }

                }
	      }	
		

            }

	    //console.log(rows);	    
	    //console.log(header);
            rows.push(header);

            for(let d in data)
            {
              let row = [];
              for(let c in col)
              {
                if(col[c]['name'] != 'rn' && col[c]['name'] != 'cb' && col[c]['name'] != 'subgrid' && col[c]['hidden'] != true)
                {
                    let name = col[c]['name'];
                    let col_val = data[d][name];





		    
                  if(col[c]['formatter'])
		  {
		    if(col[c]['formatter'] == 'number')
		      {
  		         if(col[c]['formatoptions'])
			  {
  		            if(col[c]['formatoptions']['decimalPlaces'])
			    {
			      let no = col[c]['formatoptions']['decimalPlaces']
  			      if(is_int(no))
			      {
                                col_val = col_val.toFixed(no);
			      }    
		            }
      		          }			  
		      }
		  }



		    
                  if(formatoptions && col[c]['formatoptions'])
                  { 
                      formatoptions.hasOwnProperty(col_val)
		      {
			  if(formatoptions[col_val])
			  {    
		            col_val = formatoptions[col_val];
			  }    
		      }
		  }		    
                  if (typeof col_val === 'string' || col_val instanceof String) // check if a string has a comma                                                                         
                  {
                    if(col_val.indexOf(',') !== -1)
                    {
                     col_val = '"' + col_val + '"';
                    }
                  }
                  if(format[name])
                  {
                   if(format[name]['formatter'])
                   {
                     //console.log(format[name]['formatter']);

                     if (typeof format[name]['formatter'] == 'function')
                     {
                       let fn = format[name]['formatter'];
                       col_val = fn(col_val);
                     }
                     if (typeof format[name]['formatter'] == 'string')
                     {
                       let s = format[name]['formatter'];
                       //console.log(s);
                       //console.log(col_val);                         
                       //check if its a placeholder function to eval
                       if(s.indexOf('\{0\}') !== -1)
                       {
                         let fs = s.replace(/\{0\}/g, '"'+col_val+'"'); 
                         col_val = eval(fs);
                       }
                       else if(s === "date_formatter")
                       {
                         col_val = date_formatter(col_val);                                                     
                       }
                       else if(s.indexOf("date_formatter--") > -1)
                       {
                           const a = s.split('--');
                           col_val = date_formatter(col_val,a[1]);
                           //console.log(a[1]);
                           //console.log(col_val);                           
                       }                         
                       else
                         {
                             //check if its really a function to eval 
                             if(s.indexOf('(') > -1)
                             {
                               let fun = eval(s);
                                 col_val = fun(col_val);
                             }    
                       }

                     }
                   }
                  }

		    if(quoted_output)
		    {	
		      if(col_val.indexOf(' ') >= 0)
		      {
                        col_val = '"' + col_val + '"';  			
		      }
                    }				

                  row.push(col_val);
                 }
              }
              rows.push(row);
            }
            let csv  = rows.map(e => e.join(separator)).join(endline);
            //console.log(csv);

            let blob = new Blob([csv],{type: 'text/csv;charset=utf-8;'});
	    let uri  = URL.createObjectURL(blob);
            let link = document.createElement("a");
            link.download = caption + '.csv';
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        },



        _xlsx: async function(separator, endline, obj, data)
        {
          self = this;

          self.wb = new ExcelJS.Workbook();
          self.pictures = [];
          if(data.length === 0)
          {
            data    = jQuery(this).jqGrid("getGridParam", "lastSelectedData");
          }
	  let col     = jQuery(this).jqGrid("getGridParam", "colModel");
	  let rows   = [];
	  let header = {};
	  let labels = {};
	  let format = {};
          let ws_data = [];
          let caption = jQuery(this).jqGrid("getGridParam", "caption").replace(/[^a-zA-Z0-9]/g, "");
          let logger = jQuery(this).jqGrid("getGridParam", "logger");

          let log = new Log2textarea("jqgriddownload");
          if(logger != null)
          {
            log = new Log2textarea(logger);
          }

          log.info("...init log");
          log.info("...download as excel");

          if (caption === "")
          {
            caption = 'jqgriddownload';
          }


          /* Set the first header row */
          for(let i in col)
          {
            if(["rn","cb","name"].indexOf(col[i]['name']) === -1)
            {
              let label = col[i]['name']; 
              if(col[i]['label'])
              {
                label = col[i]['label']; 
              }
              header[col[i]['name']]  = label;
              labels[col[i]['label']] = col[i]['name'];
              format[col[i]['name']] = {
                  'width': col[i]['width'],
                  'formatter': col[i]['download_formatter'],
                  'styler' : col[i]['download_styler'],
                  'picture': col[i]['picture'],
                  'height': col[i]['height']
	      };
            }
          }

          let _headers = [];
          for(let i in header)
          {
            if(['rn','subgrid'].indexOf(i) < 0 )
            {
              _headers.push(i);
            }
          }          

          self.ws = self.wb.addWorksheet('Download');

          self.ws.properties.defaultRowWidth = 300;
          self.ws.addRow(_headers);

          let styler = [];
          /* Set the data to the rows */
          for(let i in data)
          {
            //ws.addRow(data[i]);
            let row = [];
            for(let ii in _headers)
            {
              let key = _headers[ii] ;
              if(data[i].hasOwnProperty(key))
              {
                let val = data[i][key];
                let row_id = self.ws.lastRow._number;
                let col_id = Number(ii);
                let col_letter = this.num_to_letter(col_id);
                let cell = col_letter + '' + row_id + ':' + col_letter + '' + row_id;

                if(typeof format[key]['formatter'] == 'function' && val )
                {
                  let fn = format[key]['formatter'];
                  val = fn(val);
                }

                if(format[key]['picture'])
                {
                  let pic_width  = format[key]['width'];
                  let pic_height = format[key]['height'];
                  self.pictures.push([cell, val, row_id, col_id, pic_width, pic_height, col_letter ]);
                  val = '';
                }
                else
                {
                  if(format[key]['styler'])
                  {
                    let row_id2 = row_id+1 ; //increate the row to 1 for the styling
                    let cell2 = col_letter + '' + row_id2 + ':' + col_letter + '' + row_id; 
                    styler.push([cell2, val, format[key]['styler']]); 
                  }
                }
               row.push(val);
              }               
            }
            //break;
            self.ws.addRow(row);

          }

          await this.set_styles(styler);
          autofitColumns(self.ws);
          await this.add_img(log);
          await log.info("...render excel and download");
          await this.download_excel(caption);
          await log.info("...completed");


        },

        add_img: async function(log)
        {
          for(let i =0;i < self.pictures.length;i++)
          {

            const cell       = self.pictures[i][0];
            const url        = self.pictures[i][1];
            const row_id     = self.pictures[i][2];
            const col_id     = self.pictures[i][3];
            const pic_width  = self.pictures[i][4];
            const pic_height = self.pictures[i][5];
            const col_name   = self.pictures[i][6];
            await log.info("...get " + url);
            const img_base = await this.get_img_base(url);
            const image_id = self.wb.addImage({ 
		base64: img_base,
		extension: 'png'
	    });

            self.ws.addImage(image_id,
	    {
              tl: { col: col_id, row: row_id },
	      ext: { width: pic_width, height: pic_height }
	      //hyperlinks: {
	      //hyperlink: url,
	      //tooltip: 'Click to get the Picture Source'
	      //}
            });
            self.ws.getRow(row_id+1).height = pic_height;
            let xcol = self.ws.getColumn(col_name);
            xcol.width = pic_width/4;		     
          }

        },
        set_styles: async function(styler)
        {
          for(let i=0;i< styler.length;i++)
          {
            const cell   = styler[i][0];
            const val    = styler[i][1];
            const f      = styler[i][2];

            if(typeof f === 'function')
            {
              self.ws.getCell(cell).fill = f(val);
            }
          }

        },
	get_img_base: async function(url)
	{
	    return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url,true);
   	        xhr.responseType = 'blob';
		xhr.onload = function() {
		var reader = new FileReader();
		reader.onloadend = function()
                {
		    return resolve(reader.result);
		}
  		  reader.readAsDataURL(xhr.response);
		};
		xhr.onerror = function() {
		    return reject(xhr.statusText);
		};

		xhr.send();
	    });
	},

        to_data_url: async function (url, callback)
        {
	    var xhr = new XMLHttpRequest();
	    xhr.onload = function() {
		var reader = new FileReader();
		reader.onloadend = function() {
		    callback(reader.result);
		}
		reader.readAsDataURL(xhr.response);
	    };
	    xhr.open('GET', url);
	    xhr.responseType = 'blob';
	    xhr.send();
	},

        download_excel: async function(caption)
        {
          let buf = await self.wb.xlsx.writeBuffer();
          let blob  =  new Blob([buf]); 

          let uri  = URL.createObjectURL(blob);
          let link = document.createElement("a");
          link.download = caption + '.xlsx';
          link.href = uri;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

        },

        today_date: function()
        {
          let today = new Date();
	  let dd = String(today.getDate()).padStart(2, '0');
	  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	  let yyyy = today.getFullYear();
          today = mm + '/' + dd + '/' + yyyy;
          return today;
        },

        num_to_letter: function(n)
        {
          let ordA = 'a'.charCodeAt(0);
          let ordZ = 'z'.charCodeAt(0);
          let len = ordZ - ordA + 1;
          let s = "";
          while(n >= 0)
          {
            s = String.fromCharCode(n % len + ordA) + s;
            n = Math.floor(n / len) - 1;
          }
          s = s.toUpperCase();
          return s;
        },

       letter_to_number: function(string)
       {
         string = string.toUpperCase();
	 let  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         let sum = 0, i;
	 for (i = 0; i < string.length; i++)
         {
           sum += Math.pow(letters.length, i) * (letters.indexOf(string.substr(((i + 1) * -1), 1)) + 1);
	 }
	 return sum;
       }

	});
}));



/**
   @param {string} -- check if integer
*/
function is_int(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

/**
   @param {string} - format: csv or xlsx
*/
function eachColumnInRange(ws, col1, col2, cb){
    for(let c = col1; c <= col2; c++){
        let col = ws.getColumn(c);
        cb(col);
    }
}

// which is the number of default font's characters which fit into a cell.
// default font is Arial 10, which is used here
// observation: (column width) ~= (column pixel width)/7
// (column width) = ((exceljs width) - 0.71) when (exceljs width) is an integer
// bolding increases width by ~5-9%

function autofitColumns(ws){ // no good way to get text widths
    eachColumnInRange(ws, 1, ws.columnCount, column => {
        
        let maxWidth=10;
        column.eachCell( cell => {
            if( !cell.isMerged && cell.value ){ // doesn't handle merged cells
                
                let text = "";
                if( typeof cell.value != "object" ){ // string, number, ...
                    text = cell.value.toString();
                } else if( cell.value.richText ){ // richText
                    text = cell.value.richText.reduce((text, obj)=>text+obj.text.toString(),"");
                }

                // handle new lines -> don't forget to set wrapText: true
                let values = text.split(/[\n\r]+/);
                
                for( let value of values ){
                    let width = value.length;
                    
                    if(cell.font && cell.font.bold){
                        width *= 1.08; // bolding increases width
                    }
                    
                    maxWidth = Math.max(maxWidth, width);
                }
            }
        });
        
        maxWidth += 0.71; // compensate for observed reduction
        maxWidth += 1; // buffer space
        
        column.width = maxWidth;
    });
}

// maps between arbitrary columns more generally represent a cyclic graph.
// To propagate each max value properly, must explore entirity of each subgraph.
// sheetMap: [[ sheetId1, sheetId2, [[columnId1, columnId2],...] ],...]
function linkColumnWidths(workbook, sheetMap){
    let graph = {};
    
    let sheetCols = sheetMap.reduce((sheetCols, colMap) => sheetCols.concat(
        colMap[2].map( edge => [colMap[0],edge[0]] ),
        colMap[2].map( edge => [colMap[1],edge[1]] )
    ), []); // [[sheetIdN, columnIdN], ...]
    
    for( let [sheetId, columnId] of sheetCols ){
        let sheet = workbook.getWorksheet(sheetId);
        let column = sheet.getColumn(columnId);
        
        graph[`${sheetId}-${columnId}`] = {
            sheetId: sheetId,
            columnId: columnId,
            width: column.width,
            edges: {}
        };
    }
    
    for( let [sheetId1, sheetId2, colMap] of sheetMap ){
        for( let [columnId1, columnId2] of colMap ){
            let key1 = `${sheetId1}-${columnId1}`;
            let key2 = `${sheetId2}-${columnId2}`;
            
            graph[key1].edges[key2] = graph[key2];
            graph[key2].edges[key1] = graph[key1];
        }
    }
    
    let dfs = function(node, unvisited, visited){
        unvisited.delete(node);
        visited.add(node);
        
        return Math.max( node.width,
            ...Object.values(node.edges)
                .filter( edge => unvisited.has(edge) )
                .map( edge => dfs(edge, unvisited, visited) )
        );
    }
    
    let unvisited = new Set( Object.values(graph) );
    while( unvisited.size > 0 ){
        let visited = new Set();
        let initialNode = unvisited.values().next().value;
        let maxWidth = dfs(initialNode, unvisited, visited);
         for( let node of visited ){
            node.width = maxWidth;
        }
    }
    
    for( let node of Object.values(graph) ){
        let sheet = workbook.getWorksheet(node.sheetId);
        let column = sheet.getColumn(node.columnId);
        column.width = node.width;
    }
    
}


/**
   @param {string} - cel_value as a string, for the moment only iso 112 20230602 is supported 
   @param {string} - format, style like 'dd/mm/yyy'
   @return {string} = string like  '02/06/2023'
   @example:
   your col_model :
   ....
   {'name': 'order_date', 'download_formatter': 'date_formatter--dd/mm/yyyy'},
   ....
*/
function date_formatter(cell_value, format = 'dd/mm/yyyy')
{
  if (cell_value)
  {
      cell_value = cell_value.toString().trim();

    if (cell_value.length == 8 )
      {

        const year  = parseInt(cell_value.substr(0, 4));
        const month = parseInt(cell_value.substr(4, 2))-1;
        const day    = parseInt(cell_value.substr(6, 2));                      
        const _date=new Date(year,month,day);
        const format_date =  date_to_string(_date, format);
        return format_date;
    }
    else
    {
      return cell_value == 0 ? '' : cell_value;
    }
  }
  else
  {
    return '';
  }
}

/**
   @param {object} - date object
   @param {string} - format, style like 'dd/mm/yyy'
   @return {string} = string like  '02/06/2023'
   @example:
   let d = new Date();
   let x = date_to_string(d,'dd/mm/yyyy');
   console.log(x);
*/
function date_to_string(date, y) {
    const z = {
        yyyy:date.getFullYear(),
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds()
    };
    y = y.replace(/(dd|hh|mm|ss|yyyy)/g, function(v) {
        let value = (z[v] < 10) ? "0" + z[v] : z[v];        
        return value;
    });
    return y;
}
