import React, { useEffect, useState } from 'react'

function Random() {
    // useState to display results
    const [random, setRandom] = useState([]);

    // useEffect render api fetch results on intial load

    // useEffect(() => {
    //     getRandom();
    // }, []);

    // GET random recipes
    const getRandom = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=4`
        )
        const data = await api.json();
        setRandom(data.recipes)
        console.log(data)

    };

    // const renderInstruction = (instructions) => {
    //     return (
    //         instructions
    //     )
    // } 

    return (
        <div className='border border-blue-600 m-2 p-2'>
            <div className='grid grid-cols-4 p-8'>
                {random.map((recipe) => {
                    return (
                        <section key={recipe.id}>
                            <div className="border rounded-lg overflow-hidden shadow-lg relative h-96 min-h-full mx-5 " key={recipe.id}>
                                <div className='border rounded-lg bg-gradient-to-t from-gray-900 to-transparent absolute w-full h-full'>
                                    <img className=" border rounded-lg w-full h-full absolute object-cover left-0 -z-10" src={recipe.image} alt="prepared food"></img>
                                </div>
                                <p className="font-bold text-xl mb-2 absolute z-10 bottom-0 w-full h-2/5 text-center flex justify-center items-center left-1/2 -translate-x-1/2 translate-y-0 text-white">{recipe.title}</p>
                                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}>
                                    {/* {renderInstruction(recipe.instructions)} */}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
            <div className='flex justify-center'>
                <button className='border border-red-600 p-2 bg-red-400 rounded-xl' onClick={getRandom}>Random Recipes!</button>
            </div>
        </div>


    )
}

export default Random
