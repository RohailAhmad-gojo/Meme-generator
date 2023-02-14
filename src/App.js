import './App.css';
import Meme from './components/Meme';
import Navbar from './components/Navbar';
import memesData from './memesData';

function App() {
  return (
    <div className='conatiner'>
      <Navbar />
      <Meme />
    </div>
  );
}

export default App;
