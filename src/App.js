import './App.css';
import imageInSrc from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
     <div>
       <div>
         <h1 className='title'> Mon Nom </h1> <br />
         <img src="/imageInPublic.jpg" alt="image" /> <br />
         <img src={imageInSrc} alt="images" />
       </div>
       <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
       </video>
     </div>
    );
}

export default App;
