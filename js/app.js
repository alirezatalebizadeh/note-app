let $ = document

//دسترسی به تمامی المت هایی که لازم داریم
let inputElem = $.querySelector('#input-field')
let colorBoxes = $.querySelectorAll('.color-box')
let btnSave = $.querySelector('#btn-save')
let btnDelete = $.querySelector('#btn-delete')
let container = $.querySelector('#listed')
let valueColorBox


//loop in colorsBox and get value of backgroundColor to set it about backgroundColor of input
colorBoxes.forEach(item => {
    item.addEventListener('click', (event) => {
        valueColorBox = event.target.style.backgroundColor
        inputElem.style.backgroundColor = `${valueColorBox}`
        // console.log(valueColorBox);
    })
})

//deleteing value of input and change background
function reset() {
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
}
//create a note with value of input
function createNote() {

    if (inputElem.value) {
        container.insertAdjacentHTML('beforeend', `<div class="card shadow-sm round-20">
        <p class="card-text p-3 " style='background-color:${inputElem.style.backgroundColor}'>${inputElem.value}</p>
        </div>`)
        reset()
    } else {
        alert('please enter correct value to create your note')
    }

}

//create note with keyboard
function createNoteWithKeyboard(event) {
    if (event.keyCode === 13) {
        createNote()
        reset()
    }
}

//deleteing note 
function deleteNote(event) {
    if (event.target.tagName == 'P') {
        event.target.parentElement.remove()
    }
    console.log(event.target.tagName);
}


//set event on btn and input
btnDelete.addEventListener('click', reset)
btnSave.addEventListener('click', createNote)
inputElem.addEventListener('keydown', createNoteWithKeyboard)
container.addEventListener('click', deleteNote)