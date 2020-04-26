// Define UI variables
const submitBtn = document.getElementById('submitBtn'),
      alert = document.getElementById('alert'),
      textArea = document.getElementById('textArea'),
      totalWords = document.getElementById('totalWords');



// Event Handlers
submitBtn.addEventListener('click', function(){
  let wordPool = textArea.value;
  let splitWords = wordPool.split(' ');
  totalWords.innerHTML = splitWords.length;
});
