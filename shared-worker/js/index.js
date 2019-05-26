const text = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const lineCount = document.getElementById("lineCount");
const mostRepeatedWord = document.getElementById("mostRepeatedWord");
const mostRepeatedWordCount = document.getElementById("mostRepeatedWordCount");

const textAnalyzer = new SharedWorker("js/textAnalyzer.js");

textAnalyzer.port.addEventListener("message", (event) => {
  const textData = event.data;
  
  wordCount.innerText = textData.wordCount;
  charCount.innerText = textData.charCount;
  lineCount.innerText = textData.lineCount;
  mostRepeatedWord.innerText = textData.mostRepeatedWord;
  mostRepeatedWordCount.innerText = textData.mostRepeatedWordCount;
});

textAnalyzer.port.start();

text.addEventListener("keyup", ()=> {
  textAnalyzer.port.postMessage(text.value);
});

textAnalyzer.port.addEventListener("error", (error) => {
  console.log(`Error "${error.message}" occurred in the file ${error.filename} at line ${error.lineno}`);
});