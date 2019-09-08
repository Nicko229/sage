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

  if (findDuplicates(wholePhrase1).length >= phraseArray1.length && findDuplicates(wholePhrase2).length >= phraseArray2.length) {
    return `${phrase[1]}. ${phrase[0]}`
  } else if (findDuplicates(wholePhrase1).length >= phraseArray1.length) {
    return phrase[0]
  } else if (findDuplicates(wholePhrase2).length >= phraseArray2.length) {
    return phrase[1]
  }
  else {
    return ' '
  }
}

let stringArray = ['why', 'elbow', 'kiss', 'me', 'did', 'you', ',']
let phraseArray = ['kiss me, elbow', 'why did you kiss me']

console.log(filterPhrase(stringArray, phraseArray))

module.exports = filterPhrase