const ratingForm = document.querySelector("form");
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const ratingChoices = Array.from(
  document.querySelectorAll("input[name='rating']")
);
const resultSpan = document.querySelector("[data-result]");

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!ratingChoices.some((choice) => choice.checked)) return;
  ratingChoices.forEach((choice) => {
    if (choice.checked) resultSpan.textContent = choice.dataset.rating;
  });
  ratingContainer.classList.add("inactive");
  thankYouContainer.classList.remove("inactive");
});
