let words = ["purple","blue","orange","green","yellow"]

let colorStr = "Some colors I like are "

for(i = 0; i < words.length; i++){
    if(i % 2 === 0 && i != 0 && i != words.length - 1){
        colorStr += `${words[i]}, `
    } else if(i === words.length){
        colorStr += `and ${words[i]}.`
    }
}

console.log(colorStr)
