import "./members.css";

const Members = () => {
  return (
  <div id="members" className="container members-container">
    <h1 className="member-txt">Referencias</h1>
    <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">ING. Jose Luna</h1>
          <h3 className="position">FrontEnd Dev - PPM</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contactalo</span>
          </a>
        </div>
    </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">ING. Jurgen Huerlo</h1>
          <h3 className="position">FrontEnd Dev - PPM</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contactalo</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">ING. Oscar Vinueza</h1>
          <h3 className="position">FullStacks Dev - Avalith</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contactalo</span>
          </a>
        </div>
      </div>

      <div className="member member-4">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">MGT. Juan Cacierra</h1>
          <h3 className="position">Coor. Infraestructura TI - ESMETECH S.A.</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contactalo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;