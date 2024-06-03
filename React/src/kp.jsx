import React from "react";
import Card from './Card.jsx'

export default function KeeperApp (){
    
    return(
    <div>
        <header id="heading">99 BookStore</header>
        <Card  loggedIn ={true} name ="Loks" rate = {9.9}/>
        <Card  name ="Shadows and bone" rate = {8} para = "A fictional story about Alina starkov a Sun summoner from Ravka . "/>
        
        <footer id="footer">Copyrights © 1984 </footer>
    </div>

    )    
}






