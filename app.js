const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

const currentDate = new Date().getFullYear();
const dynamicDate = currentDate;

const footerText = document.querySelector(".text-info");
footerText.textContent = `© ${dynamicDate} - TekSkillDev Pet Adoption Center`;

async function petsArea() {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petsData = await petsPromise.json();
  petsData.forEach((pet) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector("h3").textContent = pet.name;
    wrapper.appendChild(clone);
  });
  document.querySelector(".list-of-pets").appendChild(wrapper);
}
petsArea();
