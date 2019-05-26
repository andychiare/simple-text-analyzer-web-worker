const text = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const lineCount = document.getElementById("lineCount");
const mostRepeatedWord = document.getElementById("mostRepeatedWord");
const mostRepeatedWordCount = document.getElementById("mostRepeatedWordCount");

const textAnalyzer = new Worker("js/textAnalyzer.js");

textAnalyzer.addEventListener("message", (event) => {
  const textData = event.data;
  
  wordCount.innerText = textData.wordCount;
  charCount.innerText = textData.charCount;
  lineCount.innerText = textData.lineCount;
  mostRepeatedWord.innerText = textData.mostRepeatedWord;
  mostRepeatedWordCount.innerText = textData.mostRepeatedWordCount;
});

text.addEventListener("keyup", ()=> {
  textAnalyzer.postMessage(text.value);
});

textAnalyzer.addEventListener("error", (error) => {
  console.log(`Error "${error.message}" occurred in the file ${error.filename} at line ${error.lineno}`);
});