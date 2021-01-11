function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', handler);

  function handler() {
    element = document.getElementById('text');

    if (element.hasAttribute('hidden')) {
      element.hidden = false;
    } else {
      element.hidden = true;
    }
  }
}
