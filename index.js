
// adds an empty li element at the beginning and ending of nav-links ul element
{
  // console.log("got in")
  let linksContainer = document.querySelector(".nav-links");
  let firstLi = document.createElement("li");
  firstLi.classList.add("space");
  linksContainer.prepend(firstLi);
  
  let lastLi = document.createElement("li");
  lastLi.classList.add("space");
  linksContainer.appendChild(lastLi);
}

// nav links over effects
const navLinks = document.querySelectorAll(".link");
let handleHoverEffect = (e, action) => {
  const link = e.currentTarget;
  const previousSibling = link.previousElementSibling;
  const nextSibling = link.nextElementSibling;

  if (previousSibling) {
    previousSibling.classList[action]("bottom-right-radius");
  }
  if (nextSibling) {
    nextSibling.classList[action]("top-right-radius");
  }
};

navLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => handleHoverEffect(e, "add"));
  link.addEventListener("mouseout", (e) => handleHoverEffect(e, "remove"));
});

// date picker
const dateContainer = document.querySelector(".calender");
const dateInput = document.getElementById("dateInput");

dateContainer.addEventListener("click", function () {
  console.log("got in");
  dateInput.showPicker();
});

// select dropdowns with input
function initializeCustomSelect(container) {
  const inputField = container.querySelector(".custom-select-input");
  const optionsContainer = container.querySelector(".custom-options");
  const options = container.querySelectorAll(".custom-options .option");

  // Show options when input is focused
  inputField.addEventListener("focus", () => {
    optionsContainer.style.display = "block";
  });

  // Hide options when clicking outside the container
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select-container")) {
      optionsContainer.style.display = "none";
    }
  });

  // Select an option
  options.forEach((option) => {
    option.addEventListener("click", () => {
      inputField.value = option.textContent;
      optionsContainer.style.display = "none";
    });
  });

  // Filter options based on input
  inputField.addEventListener("input", () => {
    const filter = inputField.value.toLowerCase();
    options.forEach((option) => {
      if (option.textContent.toLowerCase().includes(filter)) {
        option.style.display = "block";
      } else {
        option.style.display = "none";
      }
    });
  });
}

// Initialize all custom select elements on the page
document.querySelectorAll(".custom-select-container").forEach((container) => {
  initializeCustomSelect(container);
});

// select dropdown without input 
function initializeCustomPicker(container) {
  const dropdownTitle = container.querySelector(".dropdown-title");
  const dropdownTitleTxt = container.querySelector(".tittle-text");
  const optionsContainer = container.querySelector(".custom-options");
  const options = container.querySelectorAll(".custom-options .option");

  // Show options when input is focused
  dropdownTitle.addEventListener("click", () => {
    optionsContainer.style.display = "block";
  });

  // Hide options when clicking outside the container
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-pick-container")) {
      optionsContainer.style.display = "none";
    }
  });

  // Select an option
  options.forEach((option) => {
    option.addEventListener("click", () => {
      dropdownTitleTxt.textContent = option.textContent;
      optionsContainer.style.display = "none";
    });
  });
}

// Initialize all custom select elements on the page
document.querySelectorAll(".custom-pick-container").forEach((container) => {
  initializeCustomPicker(container);
});

  // select number of travelers
const selectTravelers = document.querySelector(".no-of-travelers");
const container = document.querySelector(".select-traveler");
const inputField = container.querySelector(".custom-select-input");
const optionsContainer = container.querySelector(".custom-options");
const options = container.querySelectorAll(".custom-options .option");

selectTravelers.addEventListener("click", (e) => {
  optionsContainer.style.display = "block";
  inputField.focus();
  e.stopPropagation(); // Prevents the document click event from immediately hiding the options
});

// Hide options when clicking outside the container
document.addEventListener("click", (e) => {
  if (!e.target.closest(".no-of-travelers")) {
    optionsContainer.style.display = "none";
    inputField.blur();
  }
});

// Select an option
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    inputField.value = option.textContent;
    optionsContainer.style.display = "none";
    e.stopPropagation(); // Prevents the document click event from immediately hiding the options
  });
});

// Filter options based on input
inputField.addEventListener("input", () => {
  const filter = inputField.value.toLowerCase();
  options.forEach((option) => {
    if (option.textContent.toLowerCase().includes(filter)) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
});

// swap destinations
const swapDestination = document.querySelector(".swap-icon");
swapDestination.addEventListener("click", () => {
  let takeoffDestination = document.querySelector(".from input");
  let arrivalDestination = document.querySelector(".to input");

  if (takeoffDestination.value && arrivalDestination.value) {
    let tempVar = takeoffDestination.value;
    takeoffDestination.value = arrivalDestination.value;
    arrivalDestination.value = tempVar;
  }
});

// for basic select options
function basicCustomSelect(tripOption) {
  const optContainers = document.querySelectorAll(tripOption);

  optContainers.forEach(container => {
    const options = container.querySelectorAll(".custom-option");

    options.forEach(option => {
      option.addEventListener("click", (e) => {
        // console.log("got in")
        const clickedOption = e.currentTarget; 
        const parentContainer = clickedOption.closest(tripOption); 
        const previouslySelected = parentContainer.querySelector(".custom-option.selected");

        if (previouslySelected !== clickedOption) {
          previouslySelected.classList.remove("selected");
          previouslySelected.removeAttribute("data-selected");
        }
        clickedOption.classList.add("selected");
        clickedOption.setAttribute("data-selected", "true");
      });
    });
  });
}

// Initialize the custom select behavior for any container with the class '.basic-select-container'
basicCustomSelect(".picker-btn-container");