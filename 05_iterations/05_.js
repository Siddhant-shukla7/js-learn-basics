// for each :-
const coding = ['js','ruby','cpp','java','python']

// it is a callback function so no name of the function

coding.forEach( function (val){
    //console.log(val);
})

coding.forEach((item) => {
    //console.log(item);
});

function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)

//foreach contains the item , index and the array itself 

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})