import React from 'react'
import memesData from "../memesData"


function Meme() {
  function getMemeImage() {
  const memesArray = memesData.data.memes
  const randomNumber = Math.floor(Math.random() * memesArray.length)
  console.log(randomNumber)
  const url = memesArray[randomNumber].url
  console.log(url)
  }
  return (
    <main className='form-conatiner'>
        <div className='form-input'>
            <input  placeholder='top text'/>
            <input  placeholder='bottom text'/>
            <button onClick={getMemeImage}>get a new meme image</button>
        </div>
    </main>
  )
}

export default Meme