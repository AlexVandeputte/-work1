function init() {
  cacheElemenets();
  toHtml();
}

function cacheElemenets() {
  $services = document.getElementById("services");
}

function toHtml() {
  $services.innerHTML = generateOnderhoudHTML();
}

function generateOnderhoudHTML() {
  currentPage = $services.getAttribute("data-type");
  console.log(currentPage);
  return test
    .filter((el) => el.type === currentPage)
    .map((el) => {
      return `
        <li>
        <img src="../app/static/images/${el.image}" alt="${el.description}">
        <p>${el.description}</p>
        </li>`;
    })
    .join("");
}

init();
