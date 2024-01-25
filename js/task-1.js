const listCategory = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listCategory.length}` );

listCategory.forEach((category) => {
    const nameCategory = category.querySelector("h2").textContent
    const categoryItemCount = category.querySelectorAll("li").length;
    
    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${categoryItemCount}`);

});



const newDiv = document.createElement("div");

const сontent = document.body.innerHTML;

newDiv.innerHTML = сontent;
newDiv.style.width = "440px";
newDiv.style.borderRadius = "8px";
newDiv.style.backgroundColor = "teal"; // color
newDiv.style.marginLeft = "auto";
newDiv.style.marginRight = "auto";

document.body.innerHTML = "";
 document.body.appendChild(newDiv);



