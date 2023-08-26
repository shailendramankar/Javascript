function wordCount( val ){
 var wom = val.match(/\S+/g);
 return {
 charactersNoSpaces : val.replace(/\s+/g, '').length,
 characters : val.length,
 words : wom ? wom.length : 0,
 lines : val.split(/\r*\n/).length
 };
}
// Use like:
var word = wordCount( "someMultilineText" ).words; // (Number of words)
var lines = wordCount( "someMultilineText" ).lines; // (Number of Line)
var characters = wordCount( "someMultilineText" ).characters; // (Number of characters)
var charactersNoSpaces = wordCount( "some Multiline  Text" ).charactersNoSpaces; // (Number of charactersNoSpaces)



console.log("word count", word);
console.log("lines count", lines);
console.log("characters count", characters);
console.log("charactersNoSpaces count", charactersNoSpaces);