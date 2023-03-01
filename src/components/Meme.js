import React, { useState } from 'react'
import memesData from "../memesData"


function Meme() {
  const [meme , setMeme] = useState({
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
  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }
  return (
    <main className='form-conatiner'>
        <div className='form-input'>
            <input  
              placeholder='top text'
              name='topText'
              value={meme.topText}
              onChange={handleChange}
            />
            <input  
              placeholder='bottom text'
              name='bottomText'
              value={meme.topBottom}
              onChange={handleChange}
            /><br/>
            <button onClick={getMemeImage}>get a new meme image</button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} alt='meme panal' className="meme-image" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>        
        </div>
    </main>
  )
}

export default Meme