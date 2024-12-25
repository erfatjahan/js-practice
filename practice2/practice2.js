const loadMeals = async (query) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    if (data.meals) {
        displayMeals(data.meals);
    } else {
        displayNotFound();
    }
};
const displayMeals = (meals) => {
    const mealContainer = document.getElementById("meal-container");
    const mealDetailsContainer = document.getElementById("meal-details-container");
    mealContainer.innerHTML = ""; 
    mealDetailsContainer.style.display = "none";
    meals.forEach((meal) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h4>${meal.strMeal}</h4>
        `;
        div.addEventListener("click", () => displayMealDetails(meal));
        mealContainer.appendChild(div);
    });
};
const displayMealDetails = (meal) => {
    const mealDetailsContainer = document.getElementById("meal-details-container");
    mealDetailsContainer.style.display = "block";
    mealDetailsContainer.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <h4>Ingredients:</h4>
        <ul>
            ${[...Array(20).keys()]
                .map(
                    (i) =>
                        meal[`strIngredient${i + 1}`]
                            ? `<li>${meal[`strIngredient${i + 1}`]} - ${meal[`strMeasure${i + 1}`]}</li>`
                            : ""
                )
                .join("")}
        </ul>
        <p>${meal.strInstructions}</p>
    `;
};

const displayNotFound = () => {
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = `<h3>No meals found</h3>`;
};

document.getElementById("search-btn").addEventListener("click", () => {
    const query = document.getElementById("search-input").value.trim();
    if (query) {
        loadMeals(query);
    }
});
