const image = document.getElementById("image");
const meals_body = document.getElementById("meals_body");
const categories = document.getElementById("favcat_food");
const fav = document.querySelector("food_body");

var fav_mel ;

const fetch_data = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((res) => res.json())
        .then((data) => {
             
            //  fav_mel = data.meals.idMeal;
            //  console.log(fav_mel);
            meals_body.innerHTML = data.meals.map((restureant) =>

    ` <div class="meal_header">
    <div class="food_highlighter">
        <span class="food_highlighter">${restureant.strMeal}</span>
    </div>
    <img src =${restureant.strMealThumb}>
    </div>
    <div class="meal_body">
        <h4>${restureant.strMeal}</h4>
        <button class="like" onclick="">
            <i class="fa-regular fa-heart"></i>
        </button>
    </div>`
            );
        })  
};

const categories_fetch_data = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((res) => res.json())
        .then((data) => {
            //     console.log(Object.keys(data).length);
            categories.innerHTML = data.categories.map((category_data) =>
                `<ul>
            <li><img src= ${category_data.strCategoryThumb} alt=""><span>${category_data.strCategory}</span></img></li>
        </ul>`
            )
        })
}

async function getMealBySearch(term) {

    const mealName = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}

categories_fetch_data();
fetch_data();