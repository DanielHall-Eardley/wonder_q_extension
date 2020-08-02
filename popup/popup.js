const setStatus = () => {
  fetch('http://localhost:8000/api/status')
  .then(res => res.json())
  .then(response => {
    const active = document.querySelector('#active')
    const totalMessages = document.querySelector('#total-messages')
    const totalReaders = document.querySelector('#active-readers')
    const availableMessages = document.querySelector('#available-messages')

    active.innerText = response.status.active
    active.style.color = 'blue'

    totalMessages.innerText = response.status.totalMessages
    totalMessages.style.color = 'blue'

    totalReaders.innerText = response.status.totalReaders
    totalReaders.style.color = 'blue'

    availableMessages.innerText = response.status.availableMessages
  availableMessages.style.color = 'blue'
  })
}

const setStatusUpdate = () => {
  setInterval(() => {
    setStatus()
  }, 1000)
}

setStatusUpdate()