import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import Gene from './portable-generator.jpg';
import Powerwasher from './power-washer.jpg';
import Chainsaw from './chainsaw.jpg';


function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card 
                    src={Gene}
                    title="Rent a Power Washer"
                    description="Cheaper more convenient."
                />
                <Card 
                    src={Powerwasher}
                    title="Rent a Power Washer"
                    description="Cheaper more convenient."
                />
                <Card 
                    src={Chainsaw}
                    title="Rent a Chainsaw"
                    description="Cheaper more convenient."
                />
            </div>
            <div className='home__section'>
                <Card 
                    src={Chainsaw}
                    title="Rent a Chainsaw"
                    description="Cheaper more convenient."
                    price="$35/day"
                />
                <Card 
                    src={Gene}
                    title="Rent a Power Washer"
                    description="Cheaper more convenient."
                    price="$50/day"
                />
                <Card 
                    src={Powerwasher}
                    title="Rent a Power Washer"
                    description="Cheaper more convenient."
                    price="$57/day"
                />
            </div>
        </div>
    )
}

export default Home;