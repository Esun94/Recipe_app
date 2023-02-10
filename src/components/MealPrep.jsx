import React, { useState } from 'react';

function MealPrep() {
  const [mealData, setMealData] = useState([]);
  const [mealCals, setMealCals] = useState();
  const [mealProtein, setMealProtein] = useState();
  const [mealFats, setMealFats] = useState();
  const [mealCarbs, setMealCarbs] = useState();
  const [calories, setCalories] = useState(2000);


  function handleChange(event) {
    setCalories(event.target.value);
  }

  // GET meal prep
  const getMealData = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${import.meta.env.VITE_API_KEY}&timeFrame=day&targetCalories=${calories}`
    );
    const data = await api.json();
    setMealData(data.meals, data.nutrients);
    setMealCals(data.nutrients.calories)
    setMealFats(data.nutrients.fat)
    setMealProtein(data.nutrients.protein)
    setMealCarbs(data.nutrients.carbohydrates)
    console.log(data)

  }


  return (
    <div className='border border-blue-600 m-2 p-2 grid justify-center items-center'>

      <h1 className='flex justify-center'>Input Total Calories</h1>
      <div className='flex justify-center m-3'>
        <input
          className='text-center'
          type='number'
          placeholder='Calories (e.g. 2000)'
          onChange={handleChange}
        />
      </div>

      {mealData.map((meals) => {
        return (
          <div key={meals.id} className="meals p-4">
            <h1><b>Title:</b> {meals.title}</h1>
            <ul>
              <li><b>Prep Time:</b> {meals.readyInMinutes} Minutes</li>
              <li><b>Number of Servings:</b> {meals.servings} Servings</li>
            </ul>
            <a href={meals.sourceUrl} target='_blank'><b>Link: </b>Go to Recipe</a>
          </div>
        )
      })}
      <div className='border border-blue-300 flex justify-center p-2'>Total Nutritional Value: </div>
      <ul className='border border-blue-300 text-center p-3'>
        <li>
          Calories: <b>{mealCals}</b>
        </li>
        <li>
          Protein: <b>{mealProtein}g</b>
        </li>
        <li>
          Fats: <b>{mealFats}g</b>
        </li>
        <li>
          Carbs: <b>{mealCarbs}g</b>
        </li>
      </ul>

      <button className='border border-red-600 p-2 bg-red-400 rounded-xl left-1/2 -translate-50-50 m-3' onClick={getMealData}> Get Daily Meal Plan </button>

    </div>


  )
}

export default MealPrep
