const showfoodData = () => {
  const foodName = document.getElementById("search-input").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

