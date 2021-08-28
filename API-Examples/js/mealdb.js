// document.getElementById('singleResult').style.display = 'none';
const err = document.getElementById('error-handle');
const searchFoods =()=>{
    const searhField = document.getElementById('search-field');
    const searchText = searhField.value;
    searhField.value = '';
    if(searchText == ""){
        err.innerHTML = 'Please Enter a food Name';
     }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals =>{
    const cardDiv = document.getElementById('card-container');
    cardDiv.textContent = '';
    for(const meal of meals){
        console.log(meal)
     const div = document.createElement('div')
     div.classList.add('col');
     div.innerHTML = `
     <div class="col">
     <div class="card" onclick="singleCardLoad('${meal.idMeal}')">
       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
       </div>
     </div>
   </div>
     `
     cardDiv.appendChild(div);
    }
}

const singleCardLoad = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleResult(data.meals[0]))
  
}

const displaySingleResult = meal =>{
    console.log(meal)
const singleResultDiv = document.getElementById('single-result');
const div = document.createElement('div')
singleResultDiv.innerHTML = `
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0,150)}.</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">You Tube</a>
</div>
`
singleResultDiv.appendChild(div)
}

