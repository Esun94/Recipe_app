import React from 'react';
import Random from '../components/Random';
import Search from '../components/Search';
// import Vegetarian from '../components/Vegetarian';
import Popular from '../components/Search';

function Home() {
    return (
        <div>
            <Search />
            <Random />
            {/* <Vegetarian /> */}
        </div>
    )
}

export default Home