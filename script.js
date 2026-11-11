// Mobile menu: opens and closes the navigation on small screens.
(function () {
  var button = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');

  button.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', isOpen);
  });

  // Close the menu after a link is tapped.
  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
})();
