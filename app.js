// Define UI variables
const submitBtn = document.getElementById('submitBtn'),
      alert = document.getElementById('alert'),
      textArea = document.getElementById('textArea'),
      totalWords = document.getElementById('totalWords');




// Event Handler
submitBtn.addEventListener('click', function(){
  if(textArea.value === ''){
    alert.innerHTML = 'Please enter text';
    alert.className = 'alert-danger';
    setTimeout(function(){
      alert.innerHTML = '';
      alert.className = '';
    }, 3000)
 } else {
    let symbols = [' ', '!', '@', '$','%', '&', '*', '?', ',', "\"", ':', ',', '>', '<', '\'','\"\"','\'\''];
    let wordPool = textArea.value;
    debugger;
    let splitWords = wordPool.split(' ');
    for (let i = 0; i < splitWords.length; i++){
      for (let j = 0; j < symbols.length; j++){
        if (splitWords[i] === symbols[j]){
          splitWords.slice(splitWords[i], 1);

        }
      }
    }
    totalWords.innerHTML = `Total : ${splitWords.length - 1}`
  }
});
