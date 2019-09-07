// Given two array of strings, the first with phrases, the second with words, we need to know what is the longest phrase that could be formed with a collection of words. 

// Note: If no phrase can be formed then the method should return a blank value. Watch out for special chars (only dots, comas and semicolons are permitted).

// Example 1: ['kiss me, elbow', 'why did you kiss me'] ['kiss', 'why', 'me', 'did', 'you', 'elbow', ',']
// The answer would be: why did you kiss me
// Example 2: ['kiss me, elbow', 'why did you kiss me'] ['kiss', 'me', 'did', 'you', ',']
// The answer would be: ''

// concatinate .concat both arrays and check if the same word appears twice


function filterPhrase(string, phrase) {

  let phrase1 = phrase[0].match(/\w+|\s+|[^\s\w]+/g)
  let phrase2 = phrase[1].match(/\w+|\s+|[^\s\w]+/g)

  let phraseArray1 = phrase1.filter(function (el) {
    return el !== " "
  })
  let phraseArray2 = phrase2.filter(function (el, index) {
    return el !== " "
  })

  let wholePhrase1 = phraseArray1.concat(string)
  let wholePhrase2 = phraseArray2.concat(string)

  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

  if ((wholePhrase1.length - findDuplicates(wholePhrase1).length) / 2 >= phraseArray1.length) {
    return phrase[0]
  } else if (((wholePhrase2.length - findDuplicates(wholePhrase2).length) / 2 >= phraseArray2.length)) {
    return phrase[1]
  }
  else {
    return 'blank'
  }
}

let stringArray = ['kiss', 'me', 'did', 'you', ',']
let phraseArray = ['kiss me, elbow', 'why did you kiss me']

console.log(filterPhrase(stringArray, phraseArray))