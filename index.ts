const array = ["split", "the text", "into words"];
// next line should error because of the recommended rule
array.map((sentence) => sentence.split(" ")).flat();
