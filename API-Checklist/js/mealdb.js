// load foods 
const loadFoods = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    if(searchText == ''){
       alert('Please Enter Food name.')
        
    }else if(searchText == 'adlglds'){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
    }else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
    }
  
}

const displayFoods = meals =>{
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = '';
    const topFood = meals.slice(0,8);
    topFood.map(meal =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
        <div onclick="foodDetails(${meal.idMeal})" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-info">${meal.strMeal}</h5>
            <p class="card-text text-success">${meal.strInstructions.slice(0,100)}.</p>
            <a href="#" class="btn btn-primary text-center">You Tube</a>
          </div>
        </div>
      </div>
        `
        mealsDiv.appendChild(div)
    })
    
}

const foodDetails = async idMeal=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    console.log(idMeal,url)
    const res = await fetch(url)
    const data = await res.json();
    displayFoodDetails(data.meals[0]);
}

const displayFoodDetails = meal =>{
    console.log(meal)
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="col">
    <div class="card w-50 mx-auto my-4">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-info">${meal.strMeal}</h5>
    <p class="card-text text-success">${meal.strInstructions.slice(0,150)}.</p>
    <a href="#" class="btn btn-primary text-center">You Tube</a>
    </div>
  </div>
  </div>
    `
    resultDiv.appendChild(div)
}