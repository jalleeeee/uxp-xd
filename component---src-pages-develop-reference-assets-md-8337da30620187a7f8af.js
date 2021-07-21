(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[47927],{80807:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n=a(22122),r=a(19756),l=(a(15007),a(64983)),d=a(99536),m=["components"],s={},o={_frontmatter:s},i=d.Z;function p(e){var t=e.components,a=(0,r.Z)(e,m);return(0,l.mdx)(i,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"assets"},"assets"),(0,l.mdx)("p",null,"Represents the document styles listed in the Assets panel. Styles can be added and removed manually by the user, so\nthere's no guarantee that these styles are currently used anywhere in the document's content."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Since"),": XD 15"),(0,l.mdx)("h2",{id:"enums"},"Enums"),(0,l.mdx)("dl",null,(0,l.mdx)("dt",null,(0,l.mdx)("a",{name:"GradientType"})," GradientType : "),(0,l.mdx)("dd",null,"LINEAR, RADIAL - Type of gradient color element: linear gradient or radial gradient")),(0,l.mdx)("h2",{id:"typedefs"},"Typedefs"),(0,l.mdx)("h3",{id:"typedef-colorasset"},"Typedef ColorAsset"),(0,l.mdx)("p",null,"Assets library entry representing a solid color."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"name"),(0,l.mdx)("td",{parentName:"tr",align:null},"?string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets).")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"color"),(0,l.mdx)("td",{parentName:"tr",align:null},"Color"),(0,l.mdx)("td",{parentName:"tr",align:null},"Color of the asset")))),(0,l.mdx)("h3",{id:"typedef-gradientasset"},"Typedef GradientAsset"),(0,l.mdx)("p",null,"Assets library entry representing a linear or radial gradient."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"name"),(0,l.mdx)("td",{parentName:"tr",align:null},"?string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets).")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gradientType"),(0,l.mdx)("td",{parentName:"tr",align:null},"GradientType"),(0,l.mdx)("td",{parentName:"tr",align:null},"Either ",(0,l.mdx)("inlineCode",{parentName:"td"},"GradientType.LINEAR")," or ",(0,l.mdx)("inlineCode",{parentName:"td"},"GradientType.RADIAL"))),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"colorStops"),(0,l.mdx)("td",{parentName:"tr",align:null},"Array.< {stop: number, color: Color} >"),(0,l.mdx)("td",{parentName:"tr",align:null},"Array of color stops used in the gradient, where ",(0,l.mdx)("inlineCode",{parentName:"td"},"stop")," >= 0 and <= 1, and the values are strictly increasing. Same format as the ",(0,l.mdx)("inlineCode",{parentName:"td"},"colorStops")," property of a ",(0,l.mdx)("a",{parentName:"td",href:"/uxp-xd/develop/reference/LinearGradient/"},"LinearGradient")," object.")))),(0,l.mdx)("h3",{id:"typedef-characterstyleasset"},"Typedef CharacterStyleAsset"),(0,l.mdx)("p",null,"Assets library entry representing a set of text character styles."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"name"),(0,l.mdx)("td",{parentName:"tr",align:null},"?string"),(0,l.mdx)("td",{parentName:"tr",align:null},"Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets).")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"style"),(0,l.mdx)("td",{parentName:"tr",align:null},"CharacterStyle"),(0,l.mdx)("td",{parentName:"tr",align:null},"Object containing the style properties")))),(0,l.mdx)("h3",{id:"typedef-characterstyle"},"Typedef CharacterStyle"),(0,l.mdx)("p",null,"Character style properties. See documentation for the ",(0,l.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/Text"},"Text")," node type for more details."),(0,l.mdx)("p",null,"When creating a new character style, all properties are mandatory except those with default values specified here. When deleting\nan existing character style, always pass the exact object returned by ",(0,l.mdx)("a",{parentName:"p",href:"#characterstylesget"},"characterStyles.get()")," (with all properties fully\nspecified) to avoid any ambiguity."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Property"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"fontFamily"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"the font family")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"fontStyle"),(0,l.mdx)("td",{parentName:"tr",align:null},"string"),(0,l.mdx)("td",{parentName:"tr",align:null},"the style of the font")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"fontSize"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"the size of the font")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"fill"),(0,l.mdx)("td",{parentName:"tr",align:null},"Color"),(0,l.mdx)("td",{parentName:"tr",align:null},"the Color of the font fill")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"charSpacing"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"the character spacing")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"lineSpacing"),(0,l.mdx)("td",{parentName:"tr",align:null},"number"),(0,l.mdx)("td",{parentName:"tr",align:null},"the line spacing")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"underline"),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"whether underline is turned on")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"strikethrough"),(0,l.mdx)("td",{parentName:"tr",align:null},"?boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("strong",{parentName:"td"},"Since"),": XD 19) Default false; whether strikethrough is turned on")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"textTransform"),(0,l.mdx)("td",{parentName:"tr",align:null},"?string"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("strong",{parentName:"td"},"Since"),': XD 19) Default "none"; one of "none", "uppercase", "lowercase", or "titlecase"')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"textScript"),(0,l.mdx)("td",{parentName:"tr",align:null},"?string"),(0,l.mdx)("td",{parentName:"tr",align:null},"(",(0,l.mdx)("strong",{parentName:"td"},"Since"),': XD 20) Default "none"; one of "none", "superscript", or "subscript"')))),(0,l.mdx)("h2",{id:"colors"},"colors"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"colors")),(0,l.mdx)("p",null,"The collection of colors and gradients saved in this document's Assets library."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#module_assets-colors"},".colors"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#colorsget"},".get()"),": ",(0,l.mdx)("inlineCode",{parentName:"li"},"Array.<ColorAsset|GradientAsset>")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#colorsadd"},".add(colorAssets)"),": ",(0,l.mdx)("inlineCode",{parentName:"li"},"number")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#colorsdelete"},".delete(colorAssets)"),": ",(0,l.mdx)("inlineCode",{parentName:"li"},"number"))))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"colorsget"},"colors.get()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"colors.get"),"(): ",(0,l.mdx)("inlineCode",{parentName:"p"},"Array.<ColorAsset|GradientAsset>")),(0,l.mdx)("p",null,"Get a list of all color/gradient assets, in the order they appear in the Assets panel."),(0,l.mdx)("p",null,"The list may contain a mix of solid Color assets and/or gradient assets.\nIf there are no color/gradient assets, an empty array is returned."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'var assets = require("assets"),\n  allColors = assets.colors.get();\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_assets-colors"},"colors")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"colorsadd"},"colors.add()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"colors.add"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"colorAssets"),"): ",(0,l.mdx)("inlineCode",{parentName:"p"},"number")),(0,l.mdx)("p",null,"Add color/gradient assets to the collection.  Returns the number of assets added (may be less than requested if duplicates already exist)."),(0,l.mdx)("p",null,"The list may contain a mix of solid Color assets and/or gradient assets. Items are not added if a duplicate\ncolor/gradient already exists in the collection, ",(0,l.mdx)("em",{parentName:"p"},"regardless of its name"),"."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"colorAssets"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Color")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"ColorAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"LinearGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"RadialGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"GradientAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"Array.<Color")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"ColorAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"LinearGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"RadialGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"GradientAsset"),">")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'var assets = require("assets"),\n  redColor = new Color("red"),\n  blueColor = new Color("blue"),\n  stops = [\n    { stop: 0, color: redColor },\n    { stop: 1, color: blueColor },\n  ],\n  numAdded = assets.colors.add([\n    redColor,\n    { name: "True Blue", color: blueColor },\n    {\n      name: "Red Blue Gradient",\n      gradientType: assets.GradientType.LINEAR,\n      colorStops: stops,\n    },\n  ]);\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_assets-colors"},"colors")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"colorsdelete"},"colors.delete()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"colors.delete"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"colorAssets"),"): ",(0,l.mdx)("inlineCode",{parentName:"p"},"number")),(0,l.mdx)("p",null,"Delete color/gradient assets from the collection.  Returns the number of assets deleted (may be less than requested if some didn't exist)."),(0,l.mdx)("p",null,"The list may contain a mix of solid Color assets and/or gradient assets. Assets with the same color/gradient are\nremoved ",(0,l.mdx)("em",{parentName:"p"},"even if their names differ"),". Assets that already don't exist in the collection are silently ignored.\nTypically you will pass asset objects returned from ",(0,l.mdx)("a",{parentName:"p",href:"#colorsget"},"get()")," directly to this function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"colorAssets"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"Color")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"ColorAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"LinearGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"RadialGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"GradientAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"Array.<Color")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"ColorAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"LinearGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"RadialGradient")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"GradientAsset"),">")))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'var assets = require("assets"),\n  numDeleted = assets.colors.delete(new Color("red"));\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_assets-colors"},"colors")),(0,l.mdx)("h2",{id:"characterstyles"},"characterStyles"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"characterStyles")),(0,l.mdx)("p",null,"The collection of character styles saved in this document's Assets library."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#module_assets-characterStyles"},".characterStyles"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#characterstylesget"},".get()"),": ",(0,l.mdx)("inlineCode",{parentName:"li"},"Array.<CharacterStyleAsset>")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#characterstylesadd"},".add(charStyleAssets)"),": ",(0,l.mdx)("inlineCode",{parentName:"li"},"number")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#characterstylesdelete"},".delete(charStyleAssets)"),": ",(0,l.mdx)("inlineCode",{parentName:"li"},"number"))))),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"characterstylesget"},"characterStyles.get()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"characterStyles.get"),"(): ",(0,l.mdx)("inlineCode",{parentName:"p"},"Array.<CharacterStyleAsset>")),(0,l.mdx)("p",null,"Get a list of all character style assets, in the order they appear in the Assets panel."),(0,l.mdx)("p",null,"If there are no character style assets, an empty array is returned."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'var assets = require("assets"),\n  allCharacterStyles = assets.characterStyles.get();\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_assets-characterStyles"},"characterStyles")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"characterstylesadd"},"characterStyles.add()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"characterStyles.add"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"charStyleAssets"),"): ",(0,l.mdx)("inlineCode",{parentName:"p"},"number")),(0,l.mdx)("p",null,"Add one or more character style assets to the collection.  Returns the number of assets added (may be less than requested if duplicates already exist)."),(0,l.mdx)("p",null,"Items are not added if a duplicate character style already exists in the collection, ",(0,l.mdx)("em",{parentName:"p"},"regardless of its name"),".\nAll character style properties must be fully specified (no properties are optional)."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"charStyleAssets"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"CharacterStyleAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"Array.<CharacterStyleAsset>"))))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'var assets = require("assets"),\n  arialItalic = {\n    fontFamily: "Arial",\n    fontStyle: "Italic",\n    fontSize: 12,\n    fill: new Color("black"),\n    charSpacing: 0,\n    lineSpacing: 0,\n    underline: false,\n    strikethrough: false,\n    textTransform: "uppercase",\n  },\n  linkTextStyle = {\n    fontFamily: "Arial",\n    fontStyle: "Regular",\n    fontSize: 12,\n    fill: new Color("blue"),\n    charSpacing: 0,\n    lineSpacing: 0,\n    underline: false,\n    // (leaves optional strikethrough, textTransform, & textScript properties at default values)\n  },\n  numAdded = assets.characterStyles.add([\n    { style: arialItalic }, // No name provided: uses default name\n    { style: linkTextStyle, name: "Link Text" },\n  ]);\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_assets-characterStyles"},"characterStyles")),(0,l.mdx)("hr",null),(0,l.mdx)("h3",{id:"characterstylesdelete"},"characterStyles.delete()"),(0,l.mdx)("p",null,"▸ ",(0,l.mdx)("strong",{parentName:"p"},"characterStyles.delete"),"(",(0,l.mdx)("inlineCode",{parentName:"p"},"charStyleAssets"),"): ",(0,l.mdx)("inlineCode",{parentName:"p"},"number")),(0,l.mdx)("p",null,"Delete one or more character style assets from the collection.  Returns the number of assets deleted (may be less than requested if some didn't exist)."),(0,l.mdx)("p",null,"Assets with the same character style are removed ",(0,l.mdx)("em",{parentName:"p"},"even if their names differ"),". Assets that already don't exist in the\ncollection are silently ignored. All character style properties must be fully specified (no properties are optional)."),(0,l.mdx)("p",null,"To avoid ambiguity, pass the exact asset objects returned from ",(0,l.mdx)("a",{parentName:"p",href:"#characterstylesget"},"get()")," directly\nto this function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Param"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"charStyleAssets"),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"CharacterStyleAsset")," ","|"," ",(0,l.mdx)("inlineCode",{parentName:"td"},"Array.<CharacterStyleAsset>"))))),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Example")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'// Delete all character style assets from the assets panel\nvar assets = require("assets"),\n  allCharacterStyles = assets.characterStyles.get(),\n  numDeleted = assets.characterStyles.delete(allCharacterStyles);\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.mdx)("a",{parentName:"p",href:"#module_assets-characterStyles"},"characterStyles")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-assets-md-8337da30620187a7f8af.js.map