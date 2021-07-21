(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[54158],{77928:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return s}});var n=a(22122),d=a(19756),r=(a(15007),a(64983)),i=a(99536),l=["components"],p={},m={_frontmatter:p},o=i.Z;function s(e){var t=e.components,a=(0,d.Z)(e,l);return(0,r.mdx)(o,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"repeatgrid"},"RepeatGrid"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": class\n",(0,r.mdx)("strong",{parentName:"p"},"Extends"),": ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode"},"SceneNode")),(0,r.mdx)("p",null,'Repeat Grid container node containing multiple grid cells, each one a child Group. Changes within one cell are automatically synced\nto all the other cells - with certain exceptions, called "overrides." A Repeat Grid also defines a rectangular clipping mask which\ndetermines how may cells are visible (new cells are automatically generated as needed if the Repeat Grid is resized larger).'),(0,r.mdx)("p",null,"Each grid cell is a Group that is an immediate child of the RepeatGrid. These groups are automatically created and destroyed as\nneeded when the RepeatGrid is resized."),(0,r.mdx)("p",null,"It is not currently possible for plugins to ",(0,r.mdx)("em",{parentName:"p"},"create")," a new RepeatGrid node, aside from using ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/commands/#duplicate"},"commands.duplicate"),"\nto clone existing RepeatGrids."),(0,r.mdx)("h2",{id:"width"},"width"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"width"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"Defines size of the RepeatGrid. Cells are created and destroyed as necessary to fill the current size. Cells that only partially fit will be clipped."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"height"},"height"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"height"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"Defines size of the RepeatGrid. Cells are created and destroyed as necessary to fill the current size. Cells that only partially fit will be clipped."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"numcolumns"},"numColumns"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"numColumns"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"Number of grid columns"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"numrows"},"numRows"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"numRows"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"Number of grid rows"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"paddingx"},"paddingX"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"paddingX"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"Horizontal spacing between grid cells/columns"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"paddingy"},"paddingY"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"paddingY"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,"Vertical spacing between grid cells/rows"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"cellsize"},"cellSize"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"cellSize"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"{width: number, height: number}")),(0,r.mdx)("p",null,"The size of each grid cell. The size of each cell's content can vary slightly due to text overrides; the cell size is always set to the width of the widest cell content and the height of the tallest cell content."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"attachtextdataseries"},"attachTextDataSeries()"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"attachTextDataSeries"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"textNode"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"textValues"),")"),(0,r.mdx)("p",null,"Attach a sequence of text values to the instances of a given text node across all the cells of a Repeat Grid. The sequence is\nrepeated as necessary to cover all the grid cells. This is a persistent data binding, so if the Repeat Grid is resized ",(0,r.mdx)("em",{parentName:"p"},"later"),"\nto increase the number of grid cells, items from this sequence will be used to fill the text values of the new cells."),(0,r.mdx)("p",null,"You can call this API from either of ",(0,r.mdx)("em",{parentName:"p"},"two different edit contexts"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Edit context where the RepeatGrid node is in scope (where properties of the RepeatGrid node itself could be edited) - e.g.\nwhen the RepeatGrid is selected"),(0,r.mdx)("li",{parentName:"ul"},"Edit context where textNode is in scope (where properties of the textNode could be edited) - e.g. when textNode is selected\nor when the user has otherwise drilled down into the grid cell containing it.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Param"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"textNode"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/uxp-xd/develop/reference/Text"},"Text")),(0,r.mdx)("td",{parentName:"tr",align:null},"A Text node exemplar that would be in scope for editing if the current edit context was one of this RepeatGrid's cells. The data series will be bound to this text node and all corresponding copies of it in the other grid cells.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"textValues"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Array<string>")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array of one or more strings. Empty strings are ignored.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")),(0,r.mdx)("h2",{id:"attachimagedataseries"},"attachImageDataSeries()"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"attachImageDataSeries"),"(",(0,r.mdx)("inlineCode",{parentName:"p"},"shapeNode"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"images"),")"),(0,r.mdx)("p",null,"Attach a sequence of image fills to the instances of a given shape node across all the cells of a Repeat Grid. The sequence is\nrepeated as necessary to cover all the grid cells. This is a persistent data binding, so if the Repeat Grid is resized ",(0,r.mdx)("em",{parentName:"p"},"later"),"\nto increase the number of grid cells, items from this sequence will be used to set the image fill in the new cells."),(0,r.mdx)("p",null,"You can call this API from either of ",(0,r.mdx)("em",{parentName:"p"},"two different edit contexts"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Edit context where the RepeatGrid node is in scope (where properties of the RepeatGrid node itself could be edited) - e.g.\nwhen the RepeatGrid is selected"),(0,r.mdx)("li",{parentName:"ul"},"Edit context where shapeNode is in scope (where properties of the shapeNode could be edited) - e.g. when shapeNode is selected\nor when the user has otherwise drilled down into the grid cell containing it.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Param"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"shapeNode"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"/uxp-xd/develop/reference/GraphicNode"},"GraphicNode")),(0,r.mdx)("td",{parentName:"tr",align:null},"A shape node exemplar that would be in scope for editing if the current edit context was one of this RepeatGrid's cells. The image series will be bound to this node and all corresponding copies of it in the other grid cells. Must be a node type that supports image fills (e.g. Rectangle, but not Text or Line).")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"images"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Array<"),(0,r.mdx)("a",{parentName:"td",href:"/uxp-xd/develop/reference/ImageFill"},"ImageFill"),(0,r.mdx)("inlineCode",{parentName:"td"},">")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array of one or more ImageFills.")))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,r.mdx)("a",{parentName:"p",href:"#repeatgrid"},"RepeatGrid")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-repeat-grid-md-0598a3953839445408d8.js.map