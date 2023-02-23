import React, { useState } from 'react'
import memesData from "../memesData"


function Meme() {

  // const [memeImage, setMemeImage] = useState("")
  const [meme , setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

function getMemeImage() {
  const memesArray = allMemeImages.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  const url = memesArray[randomNumber].url
  setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
  }))
  
}
  return (
    <main className='form-conatiner'>
        <div className='form-input'>
            <input  placeholder='top text'/>
            <input  placeholder='bottom text'/><br/>
            <button onClick={getMemeImage}>get a new meme image</button>
        </div>
        <img src={meme.randomImage} alt='Meme panel' className='meme-image'/>
    </main>
  )
}

export default Meme