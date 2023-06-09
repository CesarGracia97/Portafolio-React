import "./qualifications.css";
const Qualifications = () => {
    return (
        <div>
            <span className="quali-text">Mis Conocimientos</span>
            <div className="qualifications-container">
                <div className="qualification">
                    <div className="content html"></div>
                    <h1>HTML</h1>
                </div>
                <div className="qualification">
                    <div className="content css"></div>
                    <h1>CSS</h1>
                </div>
                <div className="qualification">
                    <div className="content javascript"></div>
                    <h1>Javascript</h1>
                </div>
                <div className="qualification">
                <div className="content bootstrap"></div>
                    <h1>Bootstrap</h1>
                </div>
                <div className="qualification">
                    <div className="content react"></div>
                    <h1>React</h1>
                </div>
                <div className="qualification">
                    <div className="content java"></div>
                    <h1>Java</h1>
                </div>
                <div className="qualification">
                    <div className="content c-sharp"></div>
                    <h1>C#</h1>
                </div>
                <div className="qualification">
                    <div className="content flutter"></div>
                    <h1>Flutter</h1>
                </div>
            </div>
        </div>
    );
    
};

export default Qualifications;