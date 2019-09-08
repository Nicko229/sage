const filterPhrase = require('./sage');

test('returns empty string when function does not meet criteria', () => {
  let stringArray = ['kiss', 'me', 'did', 'you', ',']
  let phraseArray = ['kiss me, elbow', 'why did you kiss me']
  const filter = filterPhrase(stringArray, phraseArray)
  expect(filter).toBe(' ')
});

test('returns first phrase', () => {
  let stringArray = ['elbow', 'kiss', 'me', 'did', 'you', ',']
  let phraseArray = ['kiss me, elbow', 'why did you kiss me']
  const filter = filterPhrase(stringArray, phraseArray)
  expect(filter).toBe('kiss me, elbow')
});

test('returns second phrase', () => {
  let stringArray = ['why', 'kiss', 'me', 'did', 'you', ',']
  let phraseArray = ['kiss me, elbow', 'why did you kiss me']
  const filter = filterPhrase(stringArray, phraseArray)
  expect(filter).toBe('why did you kiss me')
});

test('returns both phrases', () => {
  let stringArray = ['why', 'elbow', 'kiss', 'me', 'did', 'you', ',']
  let phraseArray = ['kiss me, elbow', 'why did you kiss me']
  const filter = filterPhrase(stringArray, phraseArray)
  expect(filter).toBe('why did you kiss me. kiss me, elbow')
});