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

const editButton = document.querySelector(".profile__edit-button");
const profileEdit = document.querySelector(".modal");
const profileModalCloseButton = profileEdit.querySelector(
  ".modal__close-button"
);

function openModal() {
  profileEdit.classList.add("modal_opened");
}
// Find profile elements
const profileName = document.querySelector(".profile__user");

const profileDescription = document.querySelector(".profile__description");

// Find form input elements
const profileNameInput = document.querySelector("#name");

const profileDescriptionInput = document.querySelector("#description");

// Fill the "Name" and "About me" fields with the values displayed on the page
function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function closeModal() {
  profileEdit.classList.remove("modal_opened");
}

editButton.addEventListener("click", (evt) => {
  fillProfileForm();
  openModal();
});

profileModalCloseButton.addEventListener("click", (evt) => {
  closeModal();
});

// Find the form in the DOM
const profileFormElement = profileEdit.querySelector(".modal__form");

// Form submission handler
function handleProfileFormSubmit(e) {
  // Prevent browser default behavior
  e.preventDefault();

  // Insert form values and display them on the page
  profileName.textContent = profileNameInput.value;

  profileDescription.textContent = profileDescriptionInput.value;

  // Close the modal
  closeModal();
}

// Connect the handler to the form and watch for the submit event
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

// Card element retriever
function getCardElement(data) {
  // Find the card template
  const cardTemplate = document.querySelector("#card-element").content;

  // Clone the content of the template tag
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  // Find the card title and image elements
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  // Fill in the data's name and link to the corresponding fields
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  // Return the ready HTML element with the filled-in data
  return cardElement;
}

function renderCard(card) {
  // Find the cards list
  const cardsList = document.querySelector(".cards__list");

  // Create the new card element
  const newCardElement = getCardElement(card);

  // Prepend the new cards
  cardsList.prepend(newCardElement);
}

// Create cards list
initialCards.forEach(renderCard);
