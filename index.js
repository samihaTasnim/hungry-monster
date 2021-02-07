const showfoodData = () => {
  let foodName = document.getElementById("search-input").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => {
          for (const key of Object.keys(data)) {
            // console.log(key, data[key])
            let foodElement = data[key];
            if(foodElement === null) {
              document.getElementById("error-message").style.display = "block";
              return;
            }
            foodElement.forEach(food => {

              console.log(food);

              const parentContainer =  document.getElementById("card-container")
              let childDivCol = document.createElement('div')
              childDivCol.className = "col"
              parentContainer.appendChild(childDivCol)

              let childDivCard = document.createElement('div')
              childDivCard.className = "card bg-light"
              childDivCol.appendChild(childDivCard)

              let img =  document.createElement('img')
              img.className = "card-img-top"
              img.src = food.strMealThumb;
              let h4 = document.createElement('h4')
              h4.className = "text-center card-body"
              h4.innerText = food.strMeal
              childDivCard.append(img, h4)
            })
        }
    })
}

