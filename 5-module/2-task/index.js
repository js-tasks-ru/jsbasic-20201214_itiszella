function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', handler);

  function handler() {
    element = document.getElementById('text');
    element.hidden = !element.hidden;
  }
}
