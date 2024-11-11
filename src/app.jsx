import Header from "./components/header/header";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Navbar from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Experiences from "./components/experiences/experiences";

function WebContent() {
    return(
        <>
            <div className="bg-circle1"></div>
            <div className="bg-circle2"></div>
            <Header />
            <Navbar />
            <Home />
            <Experiences />
            <Contact />
            <Footer />
        </>
    );
}
export default WebContent;