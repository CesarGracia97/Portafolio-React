import "./members.css";

const Members = () => {
  return (
  <div id="members" className="container members-container">
    <h1 className="member-txt">Referencias</h1>
    <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">ING. Jose Luna Intriago</h1>
          <h3 className="position">Frontend Developer - PPM</h3>
          <h4 className="about">
          </h4>
          <a href="https://www.linkedin.com/in/josluna98/" className="contact-member" target={"blank"}>
            <span>Contactalo</span>
          </a>
        </div>
    </div>
      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">ING. Oscar Vinueza Celi</h1>
          <h3 className="position">Fullstack Software Developer - Avalith</h3>
          <h4 className="about">
          </h4>
          <a href="https://www.linkedin.com/in/vios94/" className="contact-member" target={"blank"}>
            <span>Contactalo</span>
          </a>
        </div>
      </div>
      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">ING. Jurgen Huerlo Quintero</h1>
          <h3 className="position">Fullstack Software Developer - PPM</h3>
          <h4 className="about">
          </h4>
          <a href="https://www.linkedin.com/in/jurgenhq/" className="contact-member" target={"blank"}>
            <span>Contactalo</span>
          </a>
        </div>
      </div>
      <div className="member member-4">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">MGT. Juan Cacierra Cavada</h1>
          <h3 className="position">COORDINADOR DE INFRAESTRUCTURA T.I. - ESMETECH S.A.</h3>
          <h4 className="about">
          </h4>
          <a href="https://www.linkedin.com/in/juancasierra/" className="contact-member" target={"blank"}>
            <span>Contactalo</span>
          </a>
        </div>
      </div>
    </div>

  );
};

export default Members;