const initialCards = [
  {
    name: "Yosemite Valley",
    link: "images/yosemite-valley.jpg",
  },

  {
    name: "Lake Louise",
    link: "images/lake-louise.jpg",
  },

  {
    name: "Bald Mountains",
    link: "images/bald-mountains.jpg",
  },

  {
    name: "Latemar",
    link: "images/latemar.jpg",
  },

  {
    name: "Vanoise National Park",
    link: "images/vanoise-national-park.jpg",
  },
  {
    name: "Lago di Braies",
    link: "images/lago-di-braies.jpg",
  },
];

let editButton = document.querySelector(".profile__edit-button");
let profileEdit = document.querySelector(".modal");
let closeButton = document.querySelector(".modal__close-button");

function openModal() {
  profileEdit.classList.add("modal_opened");
}

function closeModal() {
  profileEdit.classList.remove("modal_opened");
}

editButton.addEventListener("click", (evt) => {
  openModal();
});

closeButton.addEventListener("click", (evt) => {
  closeModal();
});

// Find profile elements
const profileName = document.querySelector(".profile__user");

const profileDescription = document.querySelector(".profile__description");

// Find form input elements
const formInputName = document.querySelector("#name");

const formInputDescription = document.querySelector("#description");

// Fill the "Name" and "About me" fields with the values displayed on the page
formInputName.value = profileName.textContent;

formInputDescription.value = profileDescription.textContent;

// Find the form in the DOM
const profileFormElement = document.querySelector(".modal__form");

// Form submission handler
function handleProfileFormSubmit(e) {
  // Prevent browser default behavior
  e.preventDefault();

  // Insert form values and display them on the page
  profileName.textContent = formInputName.value;

  profileDescription.textContent = formInputDescription.value;

  // Close the modal
  toggleModal();
}

// Connect the handler to the form and watch for the submit event
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// Card element retriever
function getCardElement(data) {
  // Find the card template
  let cardTemplate = document.querySelector("#card-element").content;

  // Clone the content of the template tag
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  // Find the card title and image elements
  let cardTitle = cardElement.querySelector(".card__title");
  let cardImage = cardElement.querySelector(".card__image");

  // Fill in the data's name and link to the corresponding fields
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  // Return the ready HTML element with the filled-in data
  return cardElement;
}

function createCardsList(card) {
  // Find the cards list
  const cardsList = document.querySelector(".cards__list");

  // Create the new card element
  const newCardElement = getCardElement(card);

  // Prepend the new cards
  cardsList.prepend(newCardElement);
}

// Create cards list
initialCards.forEach(createCardsList);
