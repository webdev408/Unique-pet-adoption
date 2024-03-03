const currentDate = new Date().getFullYear();
const dynamicDate = currentDate;

const footerText = document.querySelector(".text-info");
footerText.textContent = `© ${dynamicDate} - TekSkillDev Pet Adoption Center`;
