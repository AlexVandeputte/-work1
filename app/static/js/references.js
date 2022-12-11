function init() {
  cacheElemenets();
  toHtml();
}

function cacheElemenets() {
  $ref = document.getElementById("content-javascript");
}

function toHtml() {
  $ref.innerHTML = generateHTML();
}

function generateHTML() {
  console.log($ref);
  return `
    <section id="prive">  
    <h2>Privé-omgeving</h2> 
    <div class="ref-row">
    ${generateSectionHTML("private")}
    </div>
    </section>
    <section id="zakelijk">  
    <h2>Zakelijke-omgeving</h2> 
    <div class="ref-row">
    ${generateSectionHTML("b2b")}
    </div>
    </section>
    <section id="content">  
    <h2>Openbare-omgeving</h2> 
    <div class="ref-row">
    ${generateSectionHTML("public")}
    </div>
    </section>
    `;
}
function generateSectionHTML(section) {
  return ref
    .filter((el) => el.type === section)
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
