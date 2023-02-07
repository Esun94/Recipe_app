import React from 'react';
import MealPrep from '../components/MealPrep';
import Random from '../components/Random';
// import Vegetarian from '../components/Vegetarian';

function Home() {
    return (
        <div>
            <MealPrep />
            <Random />
            {/* <Vegetarian /> */}
        </div>
    )
}

export default Home