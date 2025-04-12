// const card = createCardElement(title, description, category);
//   allCards.push(card);
//   cardContainer.appendChild(card);

//   inputBox.value = "";
//   descriptionBox.value = "";
//   categorySelect.value = "";
// });

// // Filter Cards
// categoryFilter.addEventListener('change', () => {
//   const selectedCategory = categoryFilter.value;

//   allCards.forEach(card => {
//     const cardCategory = card.getAttribute('data-category');
//     if (selectedCategory === "all" || cardCategory === selectedCategory) {
//       card.style.display = "block";
//     } else {
//       card.style.display = "none";
//     }





const card = createCardElement(title, description, category);
allCards.push(card);
cardContainer.appendChild(card);

inputBox.value = "";
descriptionBox.value = "";
categorySelect.value = "";

categoryFilter.addEventListener('change', () => {
  const selectedCategory = categoryFilter.value;

  allCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');

    if (selectedCategory === "all" || cardCategory === selectedCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
