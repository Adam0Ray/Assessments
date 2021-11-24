//PART 1
const addToZero = (array) => {
let answer = false
    for (let i = 0; i <array.length; i++){
        for ( let x = 0; x <array.length; x++){
            if (i !== x){
                if( array[i] + array[x] === 0){
                    answer = true
                }
            }
        }
    }
    console.log(answer);
}    
    
(addToZero([]));  //false
(addToZero([1])); //false
(addToZero([1,2,3])); //false
(addToZero([1,2,3,-2])); //true
//O(n^2), O(n^2)

//PART 2

function hasUniqueChars(par){                      
    for(let i = 0;i < par.length; i++){             
            for(let x = i+1; x <= par.length-1; x++){   
            if (par[i] === par[x]){             
                return false;
            }
        } 
    }              
    return true;
}
console.log(hasUniqueChars('Monday')) //true
console.log(hasUniqueChars('Moonday')) //false
//O(n^2), O(n^2)

//PART 3

alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabet.every(x => string.includes(x));
}
console.log(isPangram("abcdefghijklmnopqrstuvwxyz"));
console.log(isPangram("abcdefghijklmnopqrstuvwxy"));
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); //true
console.log(isPangram("I like cats, but not mice")); //false
//O(n), O(n)

//PART 4

const findLongestWord = (arr) =>{
    let word =arr.reduce((a, b) => a.length < b.length ? b : a, "")
    let wordLength = word.length
    console.log(wordLength)
}

findLongestWord(["hi", "hello"]); //5
findLongestWord(["hi", "hello","hippopatomus"]) //12
//O(n), O(n)

//EXTRA CREDIT List Space Complexity
//1 O(n^2)
//2 O(n^2)
//3 O(n)
//4 O(n)