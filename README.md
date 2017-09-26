# PLACEHOLDER.JS

Needs JQUERY
Call inside $(document).ready
Styling attributes with hyphen - put in ""
required - placeholder, name
Font-size of placeholder is the height of the input
Pixels

Creates and styles the inputs.

Include Jquery then placeholder.js.
Inside $(document).ready(function(){...}) call placeholder()
Accepts an object with a number of options

<!-- ## Options -->

<!-- |Option|Compulsory|Details|
|------|----------|-------|
|One|Two|Three| -->

## Example

```
$(document).ready(function(){
	placeholder({
		container: "#formContainer", --> Can be a class, id or HTML tag selector
		inputs : [ --> an array of objects - each object creates its own input
			{
				placeholder: "Your Email", --> the text to use for this placeholder (leave blank for inputs which you don't want to have a placeholder)
				inputName: "email", --> Compulsory
				inputType: "email", --> type of input
				inputClass: "textInput", --> apply any classes for external styling
				inputId: "emailInput", --> as above
				inputStyle:{ --> an object containing any CSS styling for the input itself
					height: "30px" / "30" / 30, --> express pixel amounts in any format
					width: "200px",
					"margin-top": 30, --> be sure to place quotation marks around any hyphenated attributes
					outline: "none" --> nice to remove the blue outline on focus
				},
				placeholderStyle: { --> this object allows you to adjust placeholder style and positioning
					unfocusedTop: 0, --> move the placeholder down X pixels when not focused on input (use negative px for up)
					unfocusedLeft: 10, --> move the placeholder left X pixels when not focused on input (use negative px for left)
					focusedTop: 0, --> move the placeholder down X pixels when focused on input (use negative px for up)
					focusedLeft: 100, --> move the placeholder left X pixels when focused on input (use negative px for left)

					unfocusedColor: "blue", --> the color of placeholder text when not focused
					focusedColor: "green", --> the color of placeholder text when focused
					"font-family": "Arial"
				}
			},{...}
		],
		submitButton: { --> option to add a submit button
			submitButtonStyle: { --> style the button
				width: 200,
				"margin-top": 30,
				"font-size": 30
			},
			// submitButtonId: , --> add an id for external styling or event detection
			// submitButtonClass: , --> add a class for external styling
			onclick: function(event){ --> a method triggered by a click event on the button
				alert("click");
			}
		}
	})
})
```
