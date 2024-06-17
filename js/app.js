// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

// buttons to read the story out loud, generate and read a random story out loud, and reset the story back to blank slate respectively
const speakButton = document.querySelector('#playback');
const randomStoryButton = document.querySelector('#surprise-me');
const resetButton = document.querySelector('#reset');

// the five buttons that are used to generate random phrases which make up the story
const button1 = document.querySelector('#random-word-1');
const button2 = document.querySelector('#random-word-2');
const button3 = document.querySelector('#random-word-3');
const button4 = document.querySelector('#random-word-4');
const button5 = document.querySelector('#random-word-5');

// the text field that contains the current story
const storyTextField = document.querySelector('#story-text');

// placeholder text to eventually replace
const textToSpeakConstant = '{TEXT 1} {TEXT 2} {TEXT 3} {TEXT 4} {TEXT 5}';

// contains the individual words to make up the story before they are read out loud
const finalWords = ['', '', '', '', ''];

// word arrays
const words = [ 
				['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'], 
				['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'], 
				['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'], 
				['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'], 
				['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'] 
			];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// chooses a random element from the 'words' array at the index provided
function chooseRandomWord(index) {
	const randInt = Math.floor(Math.random() * words[index].length);
	finalWords.splice(index, 1, words[index][randInt]);
}

// constructs the textToSpeak string and passes it to the speakNow function to be read out loud
function readStory() {
	// copy over the placeholder text
	let textToSpeak = textToSpeakConstant;

	// create the string for the story
	for (i = 0; i < 5; i++) {
		textToSpeak = textToSpeak.replace(`{TEXT ${i+1}}`, finalWords[i]);
	}

	// text-to-speech read out the text and display it to the page
	speakNow(textToSpeak);
	updateText();
}

// chooses a random element from the 'words' array at the index provided, and reads it out loud
function chooseAndSpeakRandomWord(index) {
	chooseRandomWord(index);
	speakNow(finalWords[index]);
	updateText();
}

// updates the storyTextField <p> element to display the story
function updateText() {
	storyTextField.innerHTML = `${finalWords[0]} ${finalWords[1]} ${finalWords[2]} ${finalWords[3]} ${finalWords[4]}`;
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	readStory();
});

// click event listener for the button which generates and plays a random story
randomStoryButton.addEventListener('click', function () {
	for (i = 0; i < 5; i++) {
		chooseRandomWord(i);
	}
	readStory();
});

// click event listener for the reset button
resetButton.addEventListener('click', function () {
	finalWords.splice(0, 5, '', '', '', '', '');
	updateText();
});

// click event listeners to choose a random word when a given button is clicked
button1.addEventListener('click', function () { chooseAndSpeakRandomWord(0); });
button2.addEventListener('click', function () { chooseAndSpeakRandomWord(1); });
button3.addEventListener('click', function () { chooseAndSpeakRandomWord(2); });
button4.addEventListener('click', function () { chooseAndSpeakRandomWord(3); });
button5.addEventListener('click', function () { chooseAndSpeakRandomWord(4); });
