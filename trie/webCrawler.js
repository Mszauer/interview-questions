function Trie(){
    this.root = {};
}

Trie.prototype.checkPresentAndAdd = function(word){
    let crawler = this.root;
    let isNewWord = false;

    //go through trie, adding chars as needed and checking if it's new word
    for(let i = 0 ; i < word.length; i++){
        let char = word[i];

        if(!crawler.hasOwnProperty(char)){
            isNewWord = false;
            crawler[char] = {};
        }
        crawler = crawler[char];
    }
    if (!crawler.hasOwnProperty("\0")){
        isNewWord = true;
        crawler["\0"] = {};
    }

    return isNewWord;
}