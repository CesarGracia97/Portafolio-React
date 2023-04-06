import "./experiences.css";

const Experiences = () => {
  return (
  <div id="experiences" className="container experiences-container">
    <h1 className="experience-txt">Experiencias</h1>
    <div className="experience experience-1">
        <div className="experience-img"></div>
        <div className="experience-info">
          <h1 className="name">Soporte Técnico</h1>
          <h3 className="position">Terranova, Marzo 2020 - Octubre 2020 (8 meses)</h3>
          <h4 className="about">
          <b>PRACTICAS PRE-PROFESIONALES. </b>
          <br></br>• Instalación de aplicaciones software de oficina con licencia y firma verificada.
          <br></br>• Mantenimiento de equipo computacional, Impresoras o de apoyo de oficina.
          <br></br>• Diseño e Instalación de redes informáticas.
          <br></br>• Diseño de Cableado estructurado y Telecomunicaciones.
          <br></br>• Levantamiento de una Plataforma Hibridad PAAS.
          <br></br>• Aplicación de normativas ISO 27001 y 27005.
          </h4>
          <a href="#contact" className="contact-experience">
            <span>Supervisor</span>
          </a>
        </div>
    </div>
      <div className="experience experience-2">
        <div className="experience-img"></div>
        <div className="experience-info">
          <h1 className="name">Soporte Técnico</h1>
          <h3 className="position">PUCESE, Septiembre 2019 - Febrero 2020 (6 Meses)</h3>
          <h4 className="about">
          <b>PRACTICAS PRE-PROFESIONALES. </b>
          <br></br>• Diseño e implementación de un Data Center de tecnologías de la información de la Pontificia Universidad Católica del Ecuador Sede Esmeraldas, dirigido por el departamento de TICS.
          <br></br>• Mantenimiento de servidores de distintos departamentos de la PUCESE, redes informáticas tanto físicas como inalámbricas , equipos computacionales y soporte informático a personal de la universidad.
          <br></br>• Administración de Servidores Virtuales.
          <br></br>• Aplicación de normativas ISO 27001 y 27005 (Seguridad de la Información y Gestión de Riesgo de la Información).
          </h4>
          <a href="https://www.linkedin.com/in/juancasierra/" className="contact-experience"  target={"blank"}>
            <span>Supervisor</span>
          </a>
        </div>
      </div>

      <div className="experience experience-3">
        <div className="experience-img"></div>
        <div className="experience-info">
          <h1 className="name">Desarrollador Software</h1>
          <h3 className="position">Comp. Esmeraldas, Abril 2019 - Agosto 2019 (7 meses)</h3>
          <h4 className="about">
          <b>PRACTICAS PRE-PROFESIONALES. </b>
          <br></br>• Desarrollo de una aplicación web para trabajadores y clientes de la empresa utilizando C# bajo framework .net y base de datos SQL Server.
          <br></br>• Mantenimiento de la Aplicación.
          <br></br><b>|| Responsabilidades Extras ||</b>
          <br></br>• Instalación de un servidor de Red adjunto con un sistemas de Cámaras de Seguridad.
          <br></br>• Atencion al Cliente.
          </h4>
          <a href="https://api.whatsapp.com/send?phone=593962782238&text=Hi/" className="contact-experience" target={"blank"}>
            <span>Supervisor</span>
          </a>
        </div>
      </div>

      <div className="experience experience-4">
        <div className="experience-img"></div>
        <div className="experience-info">
          <h1 className="name">Desarrollador Frontend</h1>
          <h3 className="position">CodecWord, Diciembre 2017 - Agosto 2018 (9 meses)</h3>
          <h4 className="about">
          <b>PRACTICAS PRE-PROFESIONALES. </b>
          <br></br>• Desarrollo Front End de aplicaciones con C#, Javascript, Flutter y PHP.
          <br></br>• Desarrollo y Administración de paginas web bajo CMS WordPress, Ghost y Graph.
          <br></br>• Ejecución de Testing de aplicaciones. 
          <br></br>• Aplicación de Normativa ISO 25010.
          </h4>
          <a href="https://www.linkedin.com/in/vios94/" className="contact-experience" target={"blank"}>
            <span>Supervisor</span>
          </a>
        </div>
      </div>
    </div>

  );
};

export default Experiences;