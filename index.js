const showfoodData = () => {

  let foodName = document.getElementById("search-input").value;
  document.getElementById("card-container").innerHTML = ""

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => {
      for (const key of Object.keys(data)) {
        let foodElement = data[key];

        if (foodElement === null) {
            document.getElementById("error-message").style.display = "block";
            return;
        }
        document.getElementById("error-message").style.display = "none"
        foodElement.forEach(food => {

          const parentContainer = document.getElementById("card-container")
          let childDivCol = document.createElement('div')
          childDivCol.className = "col"
          parentContainer.appendChild(childDivCol)

          let childDivCard = document.createElement('div')
          childDivCard.className = "card bg-light"
          childDivCol.appendChild(childDivCard)

          let mealId = food.idMeal
          let img = document.createElement('img')
          img.className = "card-img-top"
          img.src = food.strMealThumb;
          let h4 = document.createElement('h4')
          h4.className = "text-center card-body"
          h4.innerText = food.strMeal
          childDivCard.append(img, h4);

          childDivCard.addEventListener("click", function () {
            document.getElementById('show-indivisual').innerHTML = ""

            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
              .then(res => res.json())
              .then(data => {
                let newDiv = document.createElement('div')
                console.log("i am clicked");
                document.getElementById("show-indivisual").appendChild(newDiv)
                let Ingredients = [food.strIngredient1, food.strIngredient2, food.strIngredient3, food.strIngredient4, food.strIngredient5, food.strIngredient6, food.strIngredient7, food.strIngredient8, food.strIngredient9, food.strIngredient10]

                newDiv.innerHTML = `   
                  <div class="p-3">
                       <img src='${food.strMealThumb}' class="card-img-top" id="image">
                       <h4>${food.strMeal}</h4>
                       <ul id="ul">
                         <strong>Ingredients:</strong>
                       </ul>
                  </div>
                    `
                document.getElementById("image").className = "h-25 w-25"
                Ingredients.forEach(element => {
                  if (element === "") {
                    return;
                  }
                  let li = document.createElement('li')
                  li.innerText = element;
                  document.getElementById("ul").appendChild(li)
                });
              })

          }

          );

        })
      }
    })
}
