import React, { useState } from 'react';

function MealPrep() {
  const [mealData, setMealData] = useState([]);
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
    setMealData(data.meals);
    console.log(data)

  }


  // const nutrients = mealData.nutrients
  // const meals = mealData.meals

  return (
    <div className='border border-blue-600 m-2 p-2 grid justify-center items-center'>

      <div className='flex justify-center m-3'>
        <input
          type='number'
          placeholder='Calories (e.g. 2000)'
          onChange={handleChange}
        />
      </div>


      <button className='border border-red-600 p-2 bg-red-400 rounded-xl max-w-lg' onClick={getMealData}> Get Daily Meal Plan </button>


      <ol className='meals'>
        {/* Meals: */}
        {mealData.map((meals) => {
          return (
            <div key={meals.id} className="p-4">
              <li><b>Title:</b> {meals.title}</li>
              <li><b>Prep Time:</b> {meals.readyInMinutes}</li>
              <li><b>Instructions:</b> <a href={meals.sourceUrl}>Link</a></li>

            </div>
          )
        })}
      </ol>



      {/* <div>
        <h1>Macros</h1>
        <ul className="nutrients">
          <li>Calories: {mealData}</li>
        </ul>
      </div> */}

    </div>


  )
}

export default MealPrep
