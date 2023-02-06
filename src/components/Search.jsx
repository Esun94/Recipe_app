import React, { useState } from 'react';

function Search() {
  const [mealData, setMealData] = useState();
  const [calories, setCalories] = useState(2000);

  function handleChange(event) {
    setCalories(event.target.value);
  }
  
  const getMealData = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${import.meta.env.VITE_API_KEY}&timeFrame=day&targetCalories=${calories}`
    );
    const data = await api.json();
    setMealData(data);
    console.log(data)

  }

  return (
    <div className='border border-blue-600 m-2 p-2'>
      <div className='flex justify-center'>
        <input
          type='number'
          placeholder='Calories (e.g. 2000)'
         onChange={handleChange}
        />
      </div>
      <button 
      className='border border-red-600 p-2 bg-red-400 rounded-xl'
      onClick={getMealData}
      >
        Search
      </button>


    </div>


  )
}

export default Search
