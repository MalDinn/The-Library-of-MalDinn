function toMorse(input) {

	input = input.toLowerCase();
	
	let message = "";
	
	for (let i = 0; i < input.length; i++) {
	
		let char = input[i];
	
		if (char == "a") {
			message = message + ".-";
		}
	
		if (char == "b") {
			message = message + "-...";
		}
	
		if (char == "c") {
			message = message + "-.-.";
		}
	
		if (char == "d") {
			message = message + "-..";
		}
	
		if (char == "e") {
			message = message + ".";
		}
	
		if (char == "f") {
			message = message + "..-.";
		}
	
		if (char == "g") {
			message = message + "--.";
		}
	
		if (char == "h") {
			message = message + "....";
		}
	
		if (char == "i") {
			message = message + "..";
		}
	
		if (char == "j") {
			message = message + ".---";
		}
	
		if (char == "k") {
			message = message + "-.-";
		}
	
		if (char == "l") {
			message = message + ".-..";
		}
	
		if (char == "m") {
			message = message + "--";
		}
	
		if (char == "n") {
			message = message + "-.";
		}
	
		if (char == "o") {
			message = message + "---";
		}
	
		if (char == "p") {
			message = message + ".--.";
		}
	
		if (char == "q") {
			message = message + "--.-";
		}
	
		if (char == "r") {
			message = message + ".-.";
		}
	
		if (char == "s") {
			message = message + "...";
		}
	
		if (char == "t") {
			message = message + "-";
		}
	
		if (char == "u") {
			message = message + "..-";
		}
	
		if (char == "v") {
			message = message + "...-";
		}
	
		if (char == "w") {
			message = message + ".--";
		}
	
		if (char == "x") {
			message = message + "-..-";
		}
	
		if (char == "y") {
			message = message + "-.--";
		}
	
		if (char == "z") {
			message = message + "--..";
		}
	
		if (char == "1") {
			message = message + ".----";
		}
	
		if (char == "2") {
			message = message + "..---";
		}
	
		if (char == "3") {
			message = message + "...--";
		}
	
		if (char == "4") {
			message = message + "....-";
		}
	
		if (char == "5") {
			message = message + ".....";
		}
	
		if (char == "6") {
			message = message + "-....";
		}
	
		if (char == "7") {
			message = message + "--...";
		}
	
		if (char == "8") {
			message = message + "---..";
		}
	
		if (char == "9") {
			message = message + "----.";
		}
	
		if (char == "0") {
			message = message + "-----";
		}
	
		message = message + " ";
	}
	
	return message;
}

module.exports = {
	toMorse
};