import React, { useState } from 'react'
import memesData from "../memesData"


function Meme() {

  const [memeImage, setMemeImage] = useState("")

function getMemeImage() {
  const memesArray = memesData.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  setMemeImage(memesArray[randomNumber].url)
  
}
  return (
    <main className='form-conatiner'>
        <div className='form-input'>
            <input  placeholder='top text'/>
            <input  placeholder='bottom text'/>
            <button onClick={getMemeImage}>get a new meme image</button>
        </div>
        <img src={memeImage} alt='Meme panel' className='meme-image'/>
    </main>
  )
}

export default Meme