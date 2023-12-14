export default function todoList(element) {
  // input element
  const inputEl = document.createElement('input')
  inputEl.type = 'text'
  inputEl.placeholder = 'Create your task'
  inputEl.ariaLabel = 'Add new task'

  const submitButtonEl = document.createElement('button')
  submitButtonEl.textContent = 'Create'

  // list element
  const listEl = document.createElement('ul')

  // container element
  const containerEl = document.createElement('div')
  containerEl.append(inputEl, submitButtonEl, listEl)

  function addTask(label) {
    const itemEl = document.createElement('li')

    const labelEl = document.createElement('span')
    labelEl.textContent = label

    const deleteButtonEl = document.createElement('button')
    deleteButtonEl.textContent = 'Delete'

    itemEl.append(labelEl, deleteButtonEl)

    listEl.appendChild(itemEl)
  }

  function deleteTask(itemEl) {
    itemEl.parentNode.removeChild(itemEl) 
  }

  submitButtonEl.addEventListener('click', () => {
    addTask(inputEl.value)
    inputEl.value = ''
  })

  // Add a listener to the list instead of individual tasks.
  // This is called event delegation and the benefit is that
  // the Delete button of newly-added tasks will also respond
  // to clicks without you having to manually add event listeners
  // to them. You also don't have to remove any event listeners
  // when the task is removed.
  listEl.addEventListener('click', (e) => {
    // Check that the button is being clicked and not something
    // else (e.g. the task label).
    if(e.target.tagName === 'BUTTON') {
      deleteTask(e.target.parentNode)
    }
  })

  element.appendChild(containerEl)
}