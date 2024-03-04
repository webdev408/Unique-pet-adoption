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
    clone.querySelector(".pet-description").textContent = pet.description;
    clone.querySelector(".pet-age").textContent = createAgeText(pet.birthYear);
    if (!pet.photo) pet.photo = "https://picsum.photos/id/237/350";
    clone.querySelector(".pet-card-photo img").src = pet.photo;
    clone.querySelector(
      ".pet-card-photo img"
    ).alt = `A ${pet.species} named ${pet.name}`;
    wrapper.appendChild(clone);
  });
  document.querySelector(".list-of-pets").appendChild(wrapper);
}
petsArea();

function createAgeText(birthYear) {
  const age = new Date().getFullYear() - birthYear;
  return age === 1 ? `${age} year old` : `${age} years old`;
}
// pet filter button code

const allButtons = document.querySelectorAll(".pet-filter-button");

allButtons.forEach((el) => {
  el.addEventListener("click", handleButtonClick);
});
function handleButtonClick(e) {
  // remove active class from any and all buttons
  allButtons.forEach((el) => el.classList.remove("active"));
  // add active class to the button that was clicked
  e.target.classList.add("active");
  // actually filter the pets down below
}
