const elem_verse = document.getElementById('verse')
const elem_response = document.getElementById('response')
const elem_versedisplay = document.getElementById('versedisplay')

//code stolen from stackOverflow; if you can't beat em, steal em
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

//code stolen from: myself, from websight! haha!!!
function getResponse() {
  try {
    input = JSON.parse(httpGet('https://bible-api.com/' + elem_verse.value))["text"].replaceAll('\n', '')
    elem_versedisplay.innerHTML = input
  } catch {
    elem_response.innerHTML = 'error, check verse'
    elem_versedisplay.innerHTML = ''
  }
  hash = CryptoJS.MD5(input).toString()
  seed = new Math.seedrandom(hash)()
  length = elem_numamt.value
  response = []
  temp = hash

  for (let i = 0; i < length; i++) {
    temp = CryptoJS.MD5(temp).toString()
    let tempseed = new Math.seedrandom(temp)()
    response.push(Math.floor(tempseed * elem_hinum.value))
  }
  if (elem_extra.checked == true) {
    temp = CryptoJS.MD5(temp).toString()
    let tempseed = new Math.seedrandom(temp)()
    response.push(Math.floor(tempseed * elem_hiextra.value))
  }
  if (input !== null) {
    elem_response.innerHTML = response.toString().replaceAll(',', ' ')
  }
  input = null;
}