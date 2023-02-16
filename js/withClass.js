let $ = document;

class noteApp {
    constructor() {

        //دسترسی به تمامی المت هایی که لازم داریم
        this.inputElem = $.querySelector('#input-field')
        this.colorBoxes = $.querySelectorAll('.color-box')
        this.btnSave = $.querySelector('#btn-save')
        this.btnDelete = $.querySelector('#btn-delete')
        this.container = $.querySelector('#listed')
        this.valueColorBox

        this.render()
    }

    render() {
        //set event on btn and input
        this.btnDelete.addEventListener('click', () => {
            this.reset()
        })

        this.btnSave.addEventListener('click', () => {
            this.createNote()
        })

        this.inputElem.addEventListener('keydown', (event) => {
            this.createNoteWithKeyboard(event)
        })

        this.container.addEventListener('click', (event) => {
            this.deleteNote(event)
        })

        //loop in colorsBox and get value of backgroundColor to set it about backgroundColor of input

        this.colorBoxes.forEach(item => {
            item.addEventListener('click', (event) => {
                this.valueColorBox = event.target.style.backgroundColor
                this.inputElem.style.backgroundColor = `${this.valueColorBox}`
            })
        })
    }

    //deleteing value of input and change background
    reset() {
        this.inputElem.value = ''
        this.inputElem.style.backgroundColor = '#fff'
    }
    //create a note with value of input
    createNote() {

        if (this.inputElem.value) {
            this.container.insertAdjacentHTML('beforeend', `<div class="card shadow-sm round-20">
        <p class="card-text p-3 " style='background-color:${this.inputElem.style.backgroundColor}'>${this.inputElem.value}</p>
        </div>`)
            this.reset()
        } else {
            alert('please enter correct value to create your note')
        }

    }

    //create note with keyboard
    createNoteWithKeyboard(event) {
        if (event.keyCode === 13) {
            this.createNote()
            this.reset()
        }
    }

    //deleteing note 
    deleteNote(event) {
        if (event.target.tagName == 'P') {
            event.target.parentElement.remove()
        }
    }

}




new noteApp()























