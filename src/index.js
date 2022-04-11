const phase = document.querySelectorAll('.phase')

phase.forEach(e => {
   e.addEventListener('click', () => {
      e.classList.toggle('down')
      const drop = e.querySelector('.drop')
      drop.classList.toggle('rot')
   })
})

const navDown = document.querySelector('.navDrop')
const dropdown = document.querySelector('.dropdown')

navDown.addEventListener('click', () => {
   dropdown.classList.toggle('show')
   console.log('haheah')
})