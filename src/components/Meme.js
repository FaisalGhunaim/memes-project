import React, { useEffect, useState } from 'react'
const Meme = (props) => {


  // const [formData , setFormData] = useState({
  //   firstName : " " , lastName:" " 
  // })


// const [counter , setCounter] = useState(0)
// const number = () => {
//   setCounter(prevCounter => {
//     return prevCounter+1
//   })
// }
// useEffect(() => {
//   console.log(`it an ${counter} of useEffect ran`)
// }, [counter])




const [size , setSize] = useState(window.innerWidth)
useEffect (() => {


  setSize(window.innerWidth)

} , [])

    const handleChange = (e) => {
      const { name, value } = e.target
      setMeme((prevMeme) => {
        return {
          ...prevMeme,
          [name]: value
      }  
    })
  
    
}


const [meme , setMeme] = useState({
    topText : "" , 
    bottomText: "" ,  
    randomImage :" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rMXx18hOd14Fb3tDVoj-PT1tQtpjh6_JrQ&usqp=CAU  "
})

const [allMemeImages , setAllMemeImages] = useState([])

useEffect(() => {
  fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(v => setAllMemeImages(v.data.memes))
    .catch(error => console.error(error));
}, []);

  
function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
   return setMeme(prevMeme => ({
     ...prevMeme , 
    randomImage : url
   }))
  }
  
// const [item , setItem] = useState (["things 1"  , "things 2"])
// function addItem () {
//     setItem (prevState => {
//         return  [...prevState , `things ${prevState.length + 1}`]
//     })
// }
// const mapping = item.map(thing => {
//     return <p key={thing}>{thing}</p>
// })

    return (
    <main className={props.item ?"dark" : " "}>
    
    {/* <button onClick={addItem}>Add item </button>
        {mapping} */}
    
        <div className='form'>
       
        <div className="row g-3" style={{marginTop:30}} >
  <div className="col" style={{marginLeft:"40px"  }}>
    <input value={meme.topText} name='topText' type="text" onChange={handleChange} className="form-control" placeholder="Shut up" aria-label="First name" style={{width:"75%" }}/>
  </div>
  <div className="col">
    <input value={meme.bottomText} name='bottomText' type="text" onChange={handleChange} className="form-control" placeholder="and take my money" aria-label="Last name" style={{ width:"75%"}}/>
  </div>
  
</div>
<div className="d-grid gap-2 col-6 mx-auto" style={{marginRight:"40px"  }}>
  <button className="btn btn-primary" type="button" style={{background:"#A626D3"}} onClick={getMemeImage}>Get a new meme image</button>

</div>

        </div>
    
       <div className='head-text'>
       <img src={meme.randomImage} className="rounded mx-auto d-block" style={{ height:"400px"}} alt='' />
        <div className='text-on-image'>
        <h2 >{meme.topText}</h2>
        <h2>{meme.bottomText}</h2>
        </div>
   
       </div>



       
        {/* <p>{size}</p> */}






  {/* <h2>the count is {counter}</h2>
  <button onClick={number}>Add</button> */}



    </main>
  )
}

export default Meme