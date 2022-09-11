const buttonLike = document.querySelectorAll('.icon');

buttonLike.forEach((like) => {
  like.addEventListener('click', (e) => {
    e.preventDefault();
    like.classList.toggle('liked');
  });
});