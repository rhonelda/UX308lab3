// make function that *says* **things** in a **tone**


function sayThings(tone, ...things){
    return(`In a ${tone} tone i say, "${things.join(" ")}"`);
}

console.log(sayThings("excited" , "Happy", "Friday!"));