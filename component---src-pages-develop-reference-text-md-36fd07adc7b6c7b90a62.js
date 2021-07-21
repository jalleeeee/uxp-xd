(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[69481],{75397:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return s}});var a=n(22122),l=n(19756),r=(n(15007),n(64983)),i=n(99536),o=["components"],p={},d={_frontmatter:p},m=i.Z;function s(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.mdx)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"text"},"Text"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": class\n",(0,r.mdx)("strong",{parentName:"p"},"Extends"),": ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/GraphicNode"},"GraphicNode")),(0,r.mdx)("p",null,"Text leaf node shape. Text can have a fill and/or stroke, but only a solid-color fill is allowed (gradient or image\nfill will be rejected)."),(0,r.mdx)("p",null,"There are three types of Text nodes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Point Text"),' - Expands to fit the full width of the text content. Only uses multiple lines if the text content contains hard line\nbreaks ("\\n").'),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Area Text")," - Fixed width and height. Text is automatically wrapped (soft line wrapping) to fit the width. If it does not fit the\nheight, any remaining text is clipped."),(0,r.mdx)("li",{parentName:"ul"},"(",(0,r.mdx)("strong",{parentName:"li"},"Since"),": XD 34) ",(0,r.mdx)("strong",{parentName:"li"},"Auto-height Text")," - Fixed width. Text is automatically wrapped (soft line wrapping) to fit the width. The height is expanded to match all the text lines.")),(0,r.mdx)("p",null,"Use ",(0,r.mdx)("a",{parentName:"p",href:"#layoutbox"},"layoutBox")," to determine the type of a text node."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Deprecated"),": XD 34"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Check whether ",(0,r.mdx)("a",{parentName:"li",href:"#areabox"},"areaBox")," is null to determine if the type of a Text node.")),(0,r.mdx)("p",null,"Text bounds and layout work differently depending on the type of text:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Point Text - The baseline is at y=0 in the node's local coordinate system. Horizontally, local x=0 is the ",(0,r.mdx)("em",{parentName:"p"},"anchor point")," that the\ntext grows from / shrinks toward when edited. This anchor depends on the justification: for example, if the text is centered, x=0 is\nthe horizontal centerpoint of the text. The bounding box leaves enough space for descenders, uppercase letters, and accent marks,\neven if the current string does not contain any of those characters. This makes aligning text based on its bounds behave more\nconsistently.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Area Text / Auto-height text - The baseline is at a positive y value in local coordinates, and its local (0, 0) is the top left of ",(0,r.mdx)("em",{parentName:"p"},"anchor point")," the areaBox. Text always flows to the right and down from this local origin regardless of justification."))),(0,r.mdx)("h2",{id:"text-1"},"text"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"text"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},'" "')," (a single space character)"),(0,r.mdx)("p",null,"The plaintext content of the node, including any hard line breaks but excluding soft line wrap breaks."),(0,r.mdx)("p",null,"Setting text does not change styleRanges, so styles aligned with the old text's string indices will continue to be applied to\nthe new string's indices unless you explicitly change styleRanges as well."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"styleranges"},"styleRanges"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"styleRanges"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Array<{length:number"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"fontFamily:string"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"fontStyle:string"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"fontSize:number"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"fill:"),(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/Color"},"Color"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"charSpacing:number"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"underline:boolean"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"strikethrough:boolean"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"textTransform:string"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"textScript:string}>")),(0,r.mdx)("p",null,"Array of text ranges and their character style settings. Each range covers a set number of characters in the text content. Ranges\nare contiguous, with each one starting immediately after the previous one. Any characters past the end of the last range use the\nsame style as the last range."),(0,r.mdx)("p",null,"When ",(0,r.mdx)("em",{parentName:"p"},"setting")," styleRanges, any fields missing from a given range default to the existing values from the ",(0,r.mdx)("em",{parentName:"p"},"last")," range in the old\nvalue of styleRanges. The styleRanges ",(0,r.mdx)("em",{parentName:"p"},"getter")," always returns fully realized range objects with all fields specified."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"fontfamily"},"fontFamily"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"fontFamily"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),(0,r.mdx)("p",null,"Set the font family across all style ranges, or get the font family of the last style range (font family of all the text\nif one range covers all the text). Plugins should not assume any particular default value for fontFamily."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"fontstyle"},"fontStyle"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"fontStyle"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": non-italic normal weight style"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),(0,r.mdx)("p",null,"Set the font style across all style ranges, or get the font style of the last style range (font style of all the text\nif one range covers all the text)."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"fontsize"},"fontSize"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"fontSize"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")," > 0"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),(0,r.mdx)("p",null,"Font size in document pixels. Set the font size across all style ranges, or get the font size of the last style range\n(font size of all the text if one range covers all the text). Plugins should not assume any particular default value for\nfontSize."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"fill"},"fill"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"fill"),": ?",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/Color"},"Color")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"null")),(0,r.mdx)("p",null,"Set the text color across all style ranges, or get the color of the last style range (color of all the text if one range\ncovers all the text). Unlike most other nodes, text only allows a solid color fill - gradients and image fills are not\nsupported."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"charspacing"},"charSpacing"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"charSpacing"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"0")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),(0,r.mdx)("p",null,"Character spacing in increments of 1/1000th of the fontSize, in addition to the font's default character kerning. May be\nnegative."),(0,r.mdx)("p",null,"Set the character spacing across all style ranges, or get the character spacing of the last style range (character\nspacing of all the text if one range covers all the text)."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"underline"},"underline"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"underline"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"false")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),(0,r.mdx)("p",null,"Set underline across all style ranges, or get the underline of the last style range (underline of all the text if one\nrange covers all the text)."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"strikethrough"},"strikethrough"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"strikethrough"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"false")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 19"),(0,r.mdx)("p",null,"Set strikethrough across all style ranges, or get the strikethrough of the last style range (strikethrough of all the text if one\nrange covers all the text)."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"texttransform"},"textTransform"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"textTransform"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},'"none"')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 19"),(0,r.mdx)("p",null,'Set textTransform ("none", "uppercase", "lowercase", or "titlecase") across all style ranges, or get the textTransform of the last style range.'),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"textscript"},"textScript"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"textScript"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},'"none"')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 20"),(0,r.mdx)("p",null,'Set textScript ("',(0,r.mdx)("em",{parentName:"p"},"none"),'" or "',(0,r.mdx)("em",{parentName:"p"},"superscript"),'" or "',(0,r.mdx)("em",{parentName:"p"},"subscript"),'") across all style ranges, or get the textScript of the last style range.'),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"flipy"},"flipY"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"flipY"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,r.mdx)("p",null,"If true, the text is drawn upside down."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"textalign"},"textAlign"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"textAlign"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"string")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"ALIGN_LEFT")),(0,r.mdx)("p",null,"Horizontal alignment: Text.ALIGN_LEFT, ALIGN_CENTER, or ALIGN_RIGHT. This setting affects the layout of multiline text, and for point\ntext it also affects how the text is positioned relative to its anchor point (x=0 in local coordinates) and what direction the text\ngrows when edited by the user."),(0,r.mdx)("p",null,"Changing textAlign on existing point text will cause it to shift horizontally. To change textAlign while keeping the text in a fixed\nposition, shift the text horizontally (moving its anchor point) to compensate:"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"let originalBounds = textNode.localBounds;\ntextNode.textAlign = newAlignValue;\nlet newBounds = textNode.localBounds;\ntextNode.moveInParentCoordinates(originalBounds.x - newBounds.x, 0);\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"linespacing"},"lineSpacing"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"lineSpacing"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")," > 0, or 0 for default spacing"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"0")),(0,r.mdx)("p",null,"Distance between baselines in multiline text, in document pixels. The special value 0 causes XD to use the default line spacing\ndefined by the font given the current font size & style."),(0,r.mdx)("p",null,"This property is not automatically adjusted when fontSize changes, if line spacing is not set to 0, the line spacing will stay\nfixed while the font size changes, shifting the spacing's proportional relationship to font size. If the value is 0, then the\nrendered line spacing will change to match the new font size, since 0 means the spacing is dynamically calculated from the current\nfont settings."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"paragraphspacing"},"paragraphSpacing"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"paragraphSpacing"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"number")," >= 0"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Default"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"0")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 14"),(0,r.mdx)("p",null,"Additional distance between paragraphs, in document pixels, added to the lineSpacing amount (soft line breaks in area text are\nseparated only by lineSpacing, while hard line breaks are separated by lineSpacing + paragraphSpacing). Unlike lineSpacing, 0\nis not a special value; it just means no added spacing."),(0,r.mdx)("p",null,"Similar to lineSpacing, this property is not automatically adjusted when fontSize changes. The paragraph spacing amount will stay\nfixed while the font size changes, shifting the spacing's proportional relationship to font size."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"areabox"},"areaBox"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"areaBox"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"?{width:number, height:number}")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Deprecated"),": XD 34 - Please use ",(0,r.mdx)("a",{parentName:"p",href:"#layoutbox"},"layoutBox")," which supports all text types."),(0,r.mdx)("p",null,"Null for point text and starting with XD 34 null for auto height text.\nFor area text, specifies the size of the rectangle within which text is wrapped and clipped."),(0,r.mdx)("p",null,"Changing point text to area text or vice versa will change the origin / anchor point of the text, thus changing its localBounds,\nbut it will also automatically change the node's transform so its globalBounds and boundsInParent origins remain unchanged."),(0,r.mdx)("p",null,'Changing area text to point text will also automatically insert hard line breaks ("\\n") into the text to match the previous line\nwrapping\'s appearance exactly.'),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"layoutbox"},"layoutBox"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"layoutBox"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"{type:string, ?width:number, ?height:number}")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Since"),": XD 34"),(0,r.mdx)("p",null,"Type: Text.POINT (for point text also referred as auto width), FIXED_HEIGHT (for area text also referred as fixed size) or AUTO_HEIGHT (for the new auto height text)"),(0,r.mdx)("p",null,"Width: number between 0-999999. This is ignored and can be omitted for Text.POINT"),(0,r.mdx)("p",null,"Height: number between 0-999999. This is ignored and can be omitted for Text.POINT and Text.AUTO_HEIGHT"),(0,r.mdx)("p",null,"Changing POINT text to FIXED_HEIGHT or AUTO_HEIGHT text or vice versa will change the origin / anchor point of the text, thus changing its localBounds, but it will also automatically change the node's transform so its ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode/#globalbounds"},"globalBounds")," and ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode/#boundsinparent"},"boundsInParent")," origins remain unchanged."),(0,r.mdx)("p",null,'Changing FIXED_HEIGHT or AUTO_HEIGHT text to POINT text will automatically insert hard line break ("\\n") into the text to match the previous line wrapping\'s appearance exactly.'),(0,r.mdx)("p",null,"Changing from FIXED_HEIGHT to AUTO_HEIGHT text will automatically change the height of the bounds to match the height of the total text (can be a no-op)."),(0,r.mdx)("p",null,"Changing from AUTO_HEIGHT to FIXED_HEIGHT text will not change the bounds, transform or origin (no-op)."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text")),(0,r.mdx)("h2",{id:"clippedbyarea"},"clippedByArea"),(0,r.mdx)("p",null,"▸ ",(0,r.mdx)("strong",{parentName:"p"},"clippedByArea"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,r.mdx)("p",null,"Always false for point text and, starting with XD 34, false for auto height text.\nFor area text, true if the text does not fit in the content box and its bottom is being clipped."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,r.mdx)("a",{parentName:"p",href:"#text"},"Text"),"\n",(0,r.mdx)("strong",{parentName:"p"},"Read only"),": true"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-text-md-36fd07adc7b6c7b90a62.js.map