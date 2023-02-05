import React, { useEffect, useState } from 'react';

function Popular() {
    const [random, setRandom] = useState([]);

    // useEffect render api fetch results on intial load

    // useEffect(() => {
    //     getRandom();
    // }, []);

    // GET random recipes
    const searchIngredients = async () => {

      // localStorage to prevent api call on every reload
      
      // const check = localStorage.getItem('random');

      // if (check) {
      //     setRandom(JSON.parse(check))
      // } else {
      const api = await fetch(
        // `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${import.meta.env.VITE_API_KEY}&number=2`
      )
      const data = await api.json();

      // localStorage.setItem('random', JSON.stringify(data.recipes))
      setRandom(data.recipes)
      console.log(data)
      // }

    };

    return (
      <div className='border border-blue-600 m-2 p-2'>
        <div className='grid grid-cols-4 p-8'>
          {/* <div className='flex text-center justify-center text-2xl'>Surprise Me !</div> */}
          {random.map((recipe) => {
            return (
              <div className="border rounded-lg overflow-hidden shadow-lg relative h-96 min-h-full mx-5" >
                <img className=" border rounded-lg w-full h-full absolute object-cover left-0" src='' alt="prepared food"></img>
                <p className="font-bold text-xl mb-2 absolute z-10 bottom-0 w-full h-2/5 text-center flex justify-center items-center left-1/2 -translate-x-1/2 translate-y-0"></p>
              </div>

            );
          })}
        </div>
        <div className='flex justify-center'>
          <button className='border border-red-600 p-2 bg-red-400 rounded-xl'>Random Recipes!</button>
        </div>
      </div>


    )
  }

export default Popular
