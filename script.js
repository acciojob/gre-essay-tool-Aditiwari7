// let text = document.getElementById('evaluatedText');
// let word = document.getElementById('wordCount');

// text.addEventListener('input', function(){
// 	let word = text.value;
// 	var cnt = 0;
// 	for (let i = 0; i < word.length; i++) {
// 		var curr = word[i];
// 		if(curr == " ") cnt++;
// 	}

// 	cnt++;
// 	word.innerHTML = cnt;
// })

 let area = document.getElementById('evaluatedText');
        // let char = document.getElementById('char');
        let word = document.getElementById('wordCount');
  
        area.addEventListener('input', function () {
            // count characters 
            let content = this.value;
            // char.textContent = content.length;
  
            // remove empty spaces from start and end 
            content.trim();
            console.log(content);
  
            let wordList = content.split(/\s/);
  
            // Remove spaces from between words 
            let words = wordList.filter(function (element) {
                return element != "";
            });
  
            // count words 
            word.textContent = words.length;
		});

