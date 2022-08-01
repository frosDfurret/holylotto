const numamt = ['',5]
const hinum = ['',69]
const extra = [false,true]
const hiextra = ['',26]
const templates = document.getElementById('templates')
const elem_numamt = document.getElementById('numamt')
const elem_hinum = document.getElementById('hinum')
const elem_extra = document.getElementById('extra')
const elem_hiextra = document.getElementById('hiextra')

templates.addEventListener("change", function() {
  elem_numamt.value = numamt[templates.selectedIndex]
  elem_hinum.value = hinum[templates.selectedIndex]
  elem_extra.checked = extra[templates.selectedIndex]
  elem_hiextra.value = hiextra[templates.selectedIndex]
});