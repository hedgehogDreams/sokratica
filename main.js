window.addEventListener('DOMContentLoaded', () => {
  const open = document.querySelector('.desc__btn');
  const close = document.querySelector('.info__trans-arrow');
  const wrapper = document.querySelector('.info__wrapper');

  const addDeleteClass = () => {
    wrapper.classList.contains('active') ? wrapper.classList.remove('active') : wrapper.classList.add('active');
  };

  open.addEventListener('click', addDeleteClass);
  close.addEventListener('click', addDeleteClass);
});
