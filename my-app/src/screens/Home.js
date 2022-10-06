import NavBar from "../components/NavBar";
import Gallery from "../components/Carousel";
import Footer from "../components/Footer";
import Featured from '../components/Featured';

const Home = () => {
    return (
        <div className="content-body">
           <NavBar/>
           <Gallery/>
           <Footer/>
           <Featured/>
        </div>
    )
}

export default Home;