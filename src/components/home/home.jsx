import './home.css';
import img from '../props/SdX.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>Scroll Down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Sobre Mi</span> <br />
        <p>
        Entusiasta, organizado, motivado y perspicaz, ese
        soy yo. Soy una persona orientada hacia los
        resultados y con excelentes dotes comunicativos,
        también cuento con un vasto conocimiento en
        sistemas digitales y tecnológicos. Busco siempre
        mejorar mis habilidades, dispuesto a aprender y
        adaptarme a lo que se necesite.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
