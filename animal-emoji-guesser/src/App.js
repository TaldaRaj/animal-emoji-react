import "./index.css";
import {useState} from "react";


const animals = {
 "🦊" : "Fox",
 "🐒": "Monkey",
 "🐷": "Pig",
 "🐘": "Elephant",
 "🦏" : "Rhinoceros"
};

let animalsKeys =  Object.keys(animals)
// let animeList = ["Naruto","Bleach","Demon Slayer","Hunter X Hunter","Death Note","Your Name","5 cm per Sec"]
// var i =0;
export default function App() {
const [meaning , setMeaning] = useState("")
function inputHandler(event){
  var userInput = event.target.value;
  var meaning  = animals[userInput]
  if(meaning === undefined){
    meaning = "We Don't know this animal"
  }
  setMeaning(meaning)

}

function onClickHandler(animal){
  setMeaning(animals[animal])
}

// function bgColor(index){
//   if(index%2==0)
//     return "aqua"
//   else
//     return "white"
// }

  return (

    <div className="App">
      <h1>Animal Emoji's</h1>
      <input onChange={inputHandler}></input>
      
      <div id="output">{meaning}</div>


      <div>{animalsKeys.map( (animal,index) => {
      return  <span style = {{padding:"0.5rem",margin:"1rem"}}key={index} onClick={ () =>onClickHandler(animal)}> {animal}</span>
      } )}</div>
    {/* <div>
      <ul>
        {
          animeList.map( (anime,index) => {
           
            return <li style={{backgroundColor : bgColor(index)}}>{anime}</li>
            
            
            
          })
        }
        </ul>
    </div> */}
    </div>
  );
}
