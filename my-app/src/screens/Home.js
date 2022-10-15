import Gallery from "../components/Carousel";
import Featured from '../components/Featured';

function Home() {
    return (
        <div className="content-body">
           <Gallery/>
           <Featured/>
        </div>
    )
}

export default Home;