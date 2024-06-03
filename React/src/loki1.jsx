import React from 'react'
import ReactDOM from 'react-dom/client'
import {add,sub} from  "./calculator"

export default function Heading() {

    const date = new Date();
    const time = date.getHours();
    let greeting ;
    let customcolor = {
        color : " "
    }
    if(time<12){
        greeting = 'Itz Dawn now';
        customcolor.color = " orange";
    }
    else if(time>=12 && time <=18){
        greeting = 'Itz Dusk now';
        customcolor.color = " yellow";
    }
    else {
        greeting = 'Twilight';
        customcolor.color = " dark green";
    }
    return(
    <div>    
        <h1 style={customcolor}>Tony Ferguson</h1>
        <p>One of the most prime fighters in UFC. </p>
        <p>{greeting}</p>
        <h3>weight 155 lbs</h3> 
        <console className="log">Time right now is {time}</console>

        <li>His birthday is {add(1,11)}</li>
        <li>Born on {sub(1985,1)}</li>
   </div>  
    )
}


