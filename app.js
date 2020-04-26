// Define UI variables
const submitBtn = document.getElementById('submitBtn'),
      alert = document.getElementById('alert'),
      textArea = document.getElementById('textArea'),
      totalWords = document.getElementById('totalWords');



// Event Handlers
submitBtn.addEventListener('click', function(){
  if(textArea.value === ''){
    alert.innerHTML = 'Please enter text';
    alert.className = 'alert-danger';
  } else {
    let wordPool = textArea.value;
    let splitWords = wordPool.split(' ');
    totalWords.innerHTML = `Total : ${splitWords.length}`
  }
});
