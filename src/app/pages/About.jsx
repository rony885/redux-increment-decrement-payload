// import React from 'react';

import { useSelector } from "react-redux";

const About = () => {
    
    const count = useSelector((state)=>state.counter.value)

    return (
        <div>
            <h1>This is About</h1>
            <h2> Another: {count}</h2>
        </div>
    );
};

export default About;