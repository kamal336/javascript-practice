
const loadSearch =()=>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => displaySearh(data.meals))
}

const displaySearh = meals =>{
    const cardContainer = document.getElementById('search-container');
    cardContainer.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="foodDetails(${meal.idMeal})" class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,160)}.</p>
          </div>
        </div>
        `
        cardContainer.appendChild(div)
    });
}

const foodDetails = mealId =>{
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => searchFoodsResult(data.meals[0]))
}

const searchFoodsResult = meal =>{
    const singlFoodDiv = document.getElementById('single-food');
    const div = document.createElement('div');
    singlFoodDiv.textContent = '';
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,140)}.</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go You Tube</a>
  </div>
    `
   singlFoodDiv.appendChild(div)

}
