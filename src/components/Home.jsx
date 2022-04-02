import RandomStock from "./RandomStock";
import Footer from "./Footer";
import img from '../images/TickersPic.jpeg'

const Home = (props) => {
  return (
    <div className="home">
      <div>
        <h1>
          Welcome to $tockH0me 
        </h1>
      </div>
      <section className="flip-card">
        <div className="inner">
          <div className="front">
            <img src= {img}
              alt="It's time to invest"
            />
          </div>
          <div className="back">
              {/* <img src={RandomStock} /> */}
              {/* <RandomStock /> */}
          </div>
        </div>
      </section>
      <div>
        
      </div>
    </div>
  );
};

export default Home;