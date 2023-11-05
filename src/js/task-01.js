'use strict';

const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

const numberOfCategories = categoryItems.length;
console.log("Number of categories: " + numberOfCategories);

categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");
  const numberOfElements = categoryElements.length;

  console.log("Category: " + categoryName.textContent);
  console.log("Elements: " + numberOfElements);
});