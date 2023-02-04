import React from 'react';
import Random from '../components/Random';
// import Vegetarian from '../components/Vegetarian';
import Popular from '../components/Search';

function Home() {
    return (
        <div>
            <Popular />
            <Random />
            {/* <Vegetarian /> */}
        </div>
    )
}

export default Home