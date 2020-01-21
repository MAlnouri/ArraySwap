window.onload = () => {
    //function to add values to a ul on the page
    const addToList = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    //array stores user input values
    let userWords = [];

    const hiddenButton = document.getElementById("hiding");

    const launchButton = document.getElementById("start");

    launchButton.onclick = () => {
        for(let i = 0; i < 3; i++) {
            /*loops 3 times prompting user to enter a word
                *appends word to an array and a list on the page*/
            let word = prompt("Enter a word");
            userWords.push(word);
            const myList = document.getElementById('promptList');
            addToList.appendToList(myList, word);
            console.log(userWords);
    
            //Changes display value of the buttons after 3 words have been entered
            if(userWords.length >= 3) {
                hiddenButton.style.display = "block";
                launchButton.style.display = "none";
            }
        }
    }
        
    let swapped = [];

    //function rearranges words in the array
    wordSwap = (s) => {
        let newWord = "";
        console.log(s);
        let arr = s.split('');
        const temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;

        for(let k = 0; k < arr.length; k++) {
            newWord = newWord + arr[k];
        }
        swapped.push(newWord);
    }
    wordSwap("apple");
/*
    arraySwap = (array) => {
        for(let j = 0; j < array.length; j++)
        let newArray = array.map(wordSwap(j));

    }

    hiddenButton.onclick = () => {

    }*/
}