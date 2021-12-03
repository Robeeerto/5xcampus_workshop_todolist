document.addEventListener('DOMContentLoaded', () => {
  const storedItems = getStorage()
  const ul = document.querySelector('ul')
  const addBtn = document.getElementById('addBtn')
  const input = document.getElementById('input')

  class LiCreator {
    constructor(content, id, checked) {
      this.content = content
      this.id = id
      this.checked = checked
    }

    get create() {
      return this.combineLiSpan()
    }

    combineLiSpan() {
      const li = this.createLi()
      li.appendChild(this.createSpan())
      li.addEventListener('click', (e) => {
        e.target.classList.toggle('checked')

        if (e.target.nodeName === 'LI'){
          storedItems.forEach((li) => {
            if ( li.id === this.id ) { li.checked = !li.checked }
          })
          setStorage(storedItems)
        }

        if (e.target.nodeName === 'SPAN') {
          e.target.parentNode.remove()
          const updatedStoredItems = getStorage()
          const filterArray = updatedStoredItems.filter(li => li.id !== this.id)
          setStorage(filterArray)
        }
      })
      return li
    }

    createSpan() {
      const span = document.createElement('span')
      span.className = 'close'
      span.innerText = 'x'
      return span
    }

    createLi() {
      const li = document.createElement('li')
      li.innerText = this.content
      li.className = this.checked ? 'checked' : ''
      return li
    }
  }

  storedItems.forEach((item) => {
    const { content, id, checked } = item
    ul.prepend(new LiCreator(content, id, checked).create)
  })

  const generateCompletedLi = () => {
    const inputValue = input.value.trim()
    const newLi = new LiCreator(inputValue, Date.now(), false)
    storedItems.push({id: newLi.id, content: inputValue, checked: newLi.checked})
    setStorage(storedItems)
    ul.prepend(newLi.create)
  }

  addBtn.addEventListener('click', (e) => {
    if (input.value) {
      generateCompletedLi()
      input.value = ""
    }
  })

  input.addEventListener('keyup', (k) => {
    if (k.code === 'Enter' && input.value) {
      generateCompletedLi()
      input.value = ""
    }
  })

  function getStorage() {
    return JSON.parse(localStorage.getItem('storedItems')) || []
  }

  function setStorage(data) {
    localStorage.setItem('storedItems', JSON.stringify(data))
  }
})