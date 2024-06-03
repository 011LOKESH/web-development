import Parent from './Parent.jsx'


export default function Card(props){
     
    if (props.loggedIn){
        return <h2>Welcome back , {props.name}</h2>
    }
    
    return (

        <div id="container">
            <div id="division">
                <div id="movie">
                    <h3>{props.name}</h3>
                </div>
                <p>IMDB : {props.rate}</p>
                <p>{props.para}</p>
            </div>
        </div>
        
    )
}


