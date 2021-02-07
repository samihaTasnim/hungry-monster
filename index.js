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

        foodElement.forEach(food => {
          console.log(food);
          
          const parentContainer = document.getElementById("card-container")
          let childDivCol = document.createElement('div')
          childDivCol.className = "col"
          parentContainer.appendChild(childDivCol)

          let childDivCard = document.createElement('div')
          childDivCard.className = "card bg-light"
          // childDivCard.addEventListener("click", showInfo());
          childDivCol.appendChild(childDivCard)

          let img = document.createElement('img')
          img.className = "card-img-top"
          img.src = food.strMealThumb;
          let h4 = document.createElement('h4')
          h4.className = "text-center card-body"
          h4.innerText = food.strMeal
          childDivCard.append(img, h4);

               let showInfo = () => {
                 let newDiv = document.createElement('div')
                 console.log("i am clicked");
                 document.getElementById("show-indivisual").appendChild(newDiv)
                 newDiv = `   
          <div class="card bg-light">
            <img src="${food.strMealThumb}" class="card-img-top">
            <h4 class="text-center card-body">${food.strMeal}</h4>
            <ul>
              <li>${food.strIngredient1}</li>
              <li>${food.strIngredient2}</li>
            </ul>
          </div>
        `
          }
        childDivCard.addEventListener("click", showInfo());
          // document.querySelectorAll('.card').forEach(item => {
          //   item.addEventListener('click', function (e) {
          //     e.target.id = "item1"
          //     let parent = document.getElementById("item1").parentElement; 
          //      console.log(parent);

            //   let infoUl = document.createElement('ul')
            //   infoUl.innerText = "Ingredients"

            //   let li = document.createElement('li')
            //   li.innerText = item.strIngredient1
            //   let li2 = document.createElement('li')
            //   li2.innerText = item.strIngredient2;
            //   let li3 = document.createElement('li')
            //   li3.innerText = item.strIngredient3;
            //   let li4 = document.createElement('li')
            //   li4.innerText = item.strIngredient4;
            //   infoUl.append(li, li2, li3, li4);
            //   item.appendChild(infoUl)
            //  })
          // })

          
        })
      }
    })
}
