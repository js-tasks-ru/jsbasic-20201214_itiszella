/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  const tbody = table.getElementsByTagName("tbody")[0];
  const tr = tbody.getElementsByTagName("tr");

  [...tr].forEach((element) => {
    
    let status = element.getElementsByTagName("td")[3];

    if (!status.dataset.available) {
      element.hidden = true;
    } else if (status.dataset.available === "true") {
      element.classList.add("available");
    } else {
      element.classList.add("unavailable");
    }

    let gender = element.getElementsByTagName("td")[2];

    if (gender.textContent === "m") {
      element.classList.add("male");
    } else {
      element.classList.add("female");
    }

    let age = element.getElementsByTagName("td")[1];

    if (Number(age.textContent) < 18) {
      element.style.textDecoration = "line-through";
    }
  });
}
