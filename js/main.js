
const modalOpen = document.getElementById('recycleButton'),
      modalWindow = document.querySelector('.modal'),
      closeModalBtn = document.querySelector('.close'),
      toggleModal = () => {
        modalWindow.classList.toggle('isOpen')
      };

modalOpen.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

new WOW().init();