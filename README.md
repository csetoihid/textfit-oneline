An HTML page should present a form with a text input​ and a range slider input​.
The page must also have a div (let’s call it “output div​”) with a 1px visible border and height of
50px (height of this div shouldn’t change under any circumstances).
The output div must display the text of the form’s input.
When the text is updated the output div’s text should also be updated.
The slider should change the width of the output div.
The purpose of the solution is to “fit” the input text into the
div in one line (no line breaks) within the div height and
using the maximum possible integer font-size​.
Typical use case for this solution would be when you have a button with width/height restrictions
set by designer, but the text length can be different depending on the language of the text.
Real world example is iPhone’s phone app when you try to dial a number and as you enter
more and more digits the font-size gets smaller.