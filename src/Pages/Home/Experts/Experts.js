import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
    { id: 2, name: 'Chris Rock', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
    { id: 3, name: 'Dwayne Rock', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
    { id: 4, name: 'Messy Vai', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
    { id: 5, name: 'Ronaldo Bro', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
    { id: 6, name: 'Stachy Jhonson', "img": "https://i.ibb.co/XSVTT9j/expert-1.jpg" },
]

const Experts = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;