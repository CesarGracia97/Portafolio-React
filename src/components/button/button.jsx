import "./button.css";

function Buttons() {
    return (
        <div className="container button-container">
            <a href="#about" className="btn pri">
                Saber mas
            </a>
            <a href="#contact" className="btn sec">
                Ponte en Contacto
            </a>
        </div>
    );
}

export default Buttons;