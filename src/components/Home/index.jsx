import { Player } from "../Player/index.jsx";
// import { SwiperComponent } from "../SwiperComponent/SwiperComponent";

import { NavBar } from "../NavBar/index.jsx";
import { Carrousel } from "../Carrousel/index.jsx";
import youreName from "../../assets/youreName.jpg";
import music from "../../assets/rain-lofi.mp3";
import Typed from "react-typed";
import "./index.css";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="content_home">
        <div className="content_space_girl_image">
          <div className="content_image">
            <img className="space_girl_image" src={youreName} alt=""></img>
          </div>

          <div className="content_data_image">
            <Typed
              strings={[
                "<span class='greeting'>¡Hola!</span>",
                "<span class='name'>Soy Chantal Coutenceau</span>",
                "<span class='job'>Desarrolladora Full-stack</span>",
              ]}
              typeSpeed={150}
              loop
            ></Typed>

            <p className="p"></p>
          </div>
          <Player url={music} />
          <div className="gradient_image"></div>
        </div>
        <Carrousel />
      </div>
    </>
  );
};

// <p className="p"> </p>
// <span className="name"></span>
// <span className="lastName">.</span>
