const form = document.querySelector('form')
const inputList = document.getElementById('input-list')
const ul = document.querySelector('ul')
const alertBox = document.getElementById('alert')


// Manipulando o input para receber somente letras.
inputList.addEventListener('input',(event) =>{
    const hasCharactersRegex = /[^a-zA-ZÀ-ÿ\s]/g
    inputList.value = inputList.value.replace(hasCharactersRegex,'') 
})

//recebndo o evento de submit do formulario
form.onsubmit = (event) =>{
    event.preventDefault()
    const name = inputList.value.trim()

    if (name !== '') {
        addList(name)
        inputList.value = '' // limpa o input
    }

}

// função responsavel em montar estrutura dos itens
function createListItem(name) {
  const li = document.createElement('li')
  const itemContent = document.createElement('div')
  itemContent.classList.add('item-content')

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  const checkboxImage = document.createElement('div')
  checkboxImage.classList.add('checkbox-image')

  const p = document.createElement('p')
  p.textContent = name

  const trash = document.createElement('img')
  trash.src = 'assets/trash.svg'
  trash.classList.add('delete-item')

  itemContent.append(checkbox, checkboxImage, p)
  li.append(itemContent, trash)

  return li
}
//função responsavel em adicionar estrutura dos itens
function addList(name) {
  const li = document.createElement('li')

  const itemContent = document.createElement('div')
  itemContent.classList.add('item-content')

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  const checkboxImage = document.createElement('div')
  checkboxImage.classList.add('checkbox-image')

  const p = document.createElement('p')
  p.textContent = name

  const trash = document.createElement('img')
  trash.src = 'assets/trash.svg'
  trash.classList.add('delete-item')

  itemContent.append(checkbox, checkboxImage, p)
  li.append(itemContent, trash)
  ul.appendChild(li)
}
//função responsavel em remover usuario 
ul.addEventListener('click', (event)=>{
    if (event.target.classList.contains('delete-item')) {
        const li = event.target.closest('li')
        if (li){
            li.remove()
            alertBox.classList.remove('hide')
            setTimeout(() => {
                alertBox.classList.add('hide')
            }, 3000)
        } 
    }
})

