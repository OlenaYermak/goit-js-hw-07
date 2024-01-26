const listCategory = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listCategory.length}` );

listCategory.forEach((category) => {
    const nameCategory = category.querySelector("h2").textContent
    const categoryItemCount = category.querySelectorAll("li").length;
    
    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${categoryItemCount}`);

});


//-------STYLE-------//

const liElements = document.querySelectorAll('ul#categories li:not(.item)');
liElements.forEach((element) => {
  element.classList.add("list-style");
});












