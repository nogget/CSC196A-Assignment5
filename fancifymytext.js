// fancifymytext.js
// CSC 196A - Assignment 5: Fun with JavaScript

// STEP 1 (test that JS is running) — this was the first version:
//     alert("Hello, world!");
// STEP 2 — then it was wrapped in a function and called by the
// "Bigger!" button's onclick attribute. Now that function does the real work:

// "Bigger!" button: make the text area's font size 24pt
function makeBigger() {
	document.getElementById("userText").style.fontSize = "24pt";
}

// Radio buttons: FancyShmancy = bold + blue + underline, BoringBetty = back to normal
function changeStyle() {
	var textArea = document.getElementById("userText");

	if (document.getElementById("fancyShmancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (document.getElementById("boringBetty").checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "";            // "" removes the inline style -> default color
		textArea.style.textDecoration = "none";
	}
}

// "Moo" button: UPPERCASE the text and add "-Moo" to the last word of each sentence
// (a sentence = text that ends with a period ".")
function moo() {
	var textArea = document.getElementById("userText");
	var text = textArea.value.toUpperCase();

	// Split the text into sentences at every period.
	// "HI THERE. BYE NOW." -> ["HI THERE", " BYE NOW", ""]
	var sentences = text.split(".");

	// The last piece comes AFTER the final period, so it is not a finished sentence — skip it.
	for (var i = 0; i < sentences.length - 1; i++) {
		// Split the sentence into words and add "-Moo" to the last word
		var words = sentences[i].trimEnd().split(" ");
		var last = words.length - 1;

		if (words[last] !== "") {             // skip empty pieces like "..."
			words[last] = words[last] + "-Moo";
		}

		sentences[i] = words.join(" ");
	}

	// Glue the sentences back together with periods
	textArea.value = sentences.join(".");
}
