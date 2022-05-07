'use strict';

const showModal = document.querySelectorAll('.show-modal');

const closeModal = document.querySelector('.close-modal');

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hiddenModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
}
closeModal.addEventListener('click', hiddenModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hiddenModal();
  }
});
