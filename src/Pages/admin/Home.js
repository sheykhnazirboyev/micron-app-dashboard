import React from 'react'
import Dashboard from '../../Components/_Admin/Layouts';
import HomeComp from '../../Components/_Admin/Home';

function Home() {
    return (
        <div>
            <Dashboard>
                <HomeComp />
            </Dashboard>
        </div>
    )
}

export default Home;
