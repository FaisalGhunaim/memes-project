import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import { useState } from 'react';
import Star from './components/Star';


function App() {

const[darkMode , setDarkMode] = useState(false)


function Toggle () {
  setDarkMode(prevColor => {
    
    return !prevColor
  })

}
console.log(darkMode)




//  const [messages , setMessages] = useState(["a" , "b" ])









//   const [contact , setContact] = useState ({
//   firstName : "john" , 
//   isFavorite: true
//  })
//   let starIcon = contact.isFavorite ? "data:image/png;base64,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":
//     "data:image/png;base64,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 " 
//   function toogleFavorite(){
//      setContact (prevContact => ({
//       ...prevContact , 
//       isFavorite : !prevContact.isFavorite
//     }))
//   }



// const [form , setForm] = useState({
//   email : " " , 
//   password : "" ,
//   confirmPassword : "" , 
//   newsLetter : true
// })

// console.log(form)

// function handleChange (event) {
// setForm(prevState => {
//   const {name  , value , type , checked } = event.target 
//   return { 
//     ...prevState , 
//     [name] :value
//   } 
// })
// }

// function handleNot () {
//   setForm(prevState => {
//     return {
//       ...prevState , 
//       newsLetter : !prevState.newsLetter
//     }
//   })
// }
// function Submiited(event){
// event.preventDefault()
// if(form.password===form.confirmPassword) {
//   console.log("Successfully signed up")
// }
// else {
//   console.log("passwords not match") 
// }
// }
  return (
    <main>
    {/* <form onSubmit={Submiited}>
<input value={form.email} name='email' type='email' placeholder='email' onChange={handleChange}/>
<input value={form.password} name='password' type='password' placeholder='password' onChange={handleChange}/>
<input value={form.confirmPassword} name='confirmPassword' type='password' placeholder='confirm Password' onChange={handleChange}/>
<br/>
<input type='checkbox' checked={form.newsLetter} onChange={handleNot} />
<label >i want to joinn the newsletter</label>
<button style={{display:"block"}}>Sing up</button>
</form> */}




{/* 
{
      messages.length ===0 ? <h1>you are all cauth up!</h1>: 
      <h1>you have un read {messages.length}  {messages.length>1 ? "messages" : "message"}</h1>
}  */}


    {/* <Star isFillled = {starIcon }
    handleClick = {toogleFavorite}/> */}
     



{/* <button onClick={Toggle}> Light-Mode</button> */}




      <Header item = {darkMode}/>
      <Meme item = {darkMode}/>
    </main>
  );
}

export default App;
 