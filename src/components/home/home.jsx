import './home.css';
import img from '../props/2_img.jpg';
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
        <span>Empresa</span> <br />
        <p>
          Ctrl + P diseño y publicidad se complace en saludarle y poner a su disposición nuestro catálogo de  promocionales 2023,😊 tenemos gran variedad de artículos como llaveros, esferos, tomatodos, cuadernos, agendas, además de una gama amplia en artículos ecológicos.  Responde SI. para recibir el catálogo en PDF.📝
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
