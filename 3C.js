let letters = ["a","e","i","o","u"];
function vowels(word,v){
    let vows = 0;
    for (let k =0; k<=word.length; k++){
        if (v.includes(word[k]) ){
            vows+=1
        }
    }
    console.log(vows)
}
vowels("future", letters)