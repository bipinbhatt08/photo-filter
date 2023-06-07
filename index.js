
  const gallery = document.querySelector('.category-list');
  const itemBoxes = document.querySelectorAll('.photo');

  gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter')) {
      gallery.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      const filterValue = e.target.getAttribute('data-filter');

      itemBoxes.forEach((item) => {
        if (item.classList.contains(filterValue) || filterValue === 'all') {
          item.classList.remove('hide');
          item.classList.add('show');
        } else {
          item.classList.remove('show');
          item.classList.add('hide');
        }
      });
    }
  });
