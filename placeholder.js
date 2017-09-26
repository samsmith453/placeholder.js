

var placeholderAdjustments = {};
function placeholder(obj){
	var container = $(obj.container);

	for(input of obj.inputs){
		placeholderAdjustments[input.inputName] = input.placeholderStyle;
		createInput(input, container);
	}
	createSubmitButton(obj);
}

function createInput(input, container){
	var inputHTML = "<input\
					name='" + input.inputName + "'\
					type='" + input.inputType + "' \
					class='placeholderInput " + input.inputClass + "'\
					onfocus='focusOnInput(event)' \
					onfocusout='focusOutOfInput(event)'\
					id='" + input.inputId + "'>\
					<br>\
					<p id='" + input.inputName + "' \
					class='placeholder'>" + input.placeholder + "</p>";

	container.append(inputHTML);
	$("input[name='" + input.inputName + "']").css(input.inputStyle);

	stylePlaceholder(input);
}

function stylePlaceholder(input){

	var positionFromTop = $("input[name='"+input.inputName+"']").position().top - parseInt($("input[name='"+input.inputName+"']").css("height")) + parseInt($("input[name='"+input.inputName+"']").css("margin-top"));
	if(placeholderAdjustments[input.inputName].unfocusedTop) positionFromTop += placeholderAdjustments[input.inputName].unfocusedTop;

	var positionFromLeft = $("input[name='"+input.inputName+"']").position().left;
	if(placeholderAdjustments[input.inputName].unfocusedLeft) positionFromLeft += placeholderAdjustments[input.inputName].unfocusedLeft;

	$("p.placeholder#" + input.inputName).css({
		"position": "absolute",
		"top": positionFromTop + "px",
		"left": positionFromLeft + "px",
		"font-size": parseInt($("input[name='"+input.inputName+"']").css("height")) + "px",
		"pointer-events": "none",
		"transition": "0.2s ease all",
		"color": placeholderAdjustments[input.inputName].unfocusedColor || "black",
		"font-family": placeholderAdjustments[input.inputName]["font-family"]
	});
}

function focusOnInput(event){
	var name = event.target.name;
	var inputHeight = event.target.clientHeight;

	var placeholderPositionFromTop = $("p#" + name).position().top - inputHeight*1/3 - 5;
	if(placeholderAdjustments[name].focusedTop) placeholderPositionFromTop += placeholderAdjustments[name].focusedTop

	var placeholderPositionFromLeft = $("p#" + name).position().left;
	if(placeholderAdjustments[name].focusedLeft) placeholderPositionFromLeft += placeholderAdjustments[name].focusedLeft

	$("p#" + name).css({
		"color": placeholderAdjustments[name].focusedColor || "red"
	});

	if(event.target.value.length == 0){
		$("p#" + name).css({
			"top": placeholderPositionFromTop + "px",
			"font-size": inputHeight*2/3,
			"left": placeholderPositionFromLeft
		});
	}

}

function focusOutOfInput(event){
	var name = event.target.name;
	var inputHeight = event.target.clientHeight;
	var inputPositionFromTop = $(event.target).position().top;
	var inputMarginTop = parseInt($(event.target).css("margin-top"));
	var inputPositionFromLeft = $(event.target).position().left;

	var positionFromTop = inputPositionFromTop - inputHeight + inputMarginTop;
	if(placeholderAdjustments[name].unfocusedTop) positionFromTop += placeholderAdjustments[name].unfocusedTop;

	var positionFromLeft = inputPositionFromLeft;
	if(placeholderAdjustments[name].unfocusedLeft) positionFromLeft += placeholderAdjustments[name].unfocusedLeft;

	$("p#" + name).css({
		"color": "black"
	});

	if(event.target.value.length == 0){
		$("p#" + name).css({
			"top": positionFromTop + "px",
			"left": positionFromLeft,
			"font-size": inputHeight,
			"color": placeholderAdjustments[name].unfocusedColor || "black"
		});
	}
}

function createSubmitButton(obj){
	if(obj.submitButton){
		$(obj.container).append("\
			<input\
				id='submitButton'\
				type='submit'\
				value='Submit'\
			>\
		")
	}
	$("input#submitButton").click(obj.submitButton.onclick)
	$("input#submitButton").css(obj.submitButton.submitButtonStyle);
}
