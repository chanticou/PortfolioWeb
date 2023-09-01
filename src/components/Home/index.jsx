import { NavBar } from "../NavBar/index.jsx";
// import { SwiperComponent } from "../SwiperComponent/SwiperComponent";
import youreName from "../../assets/youreName.jpg";
// import Player from "../Player/Player";
import music from "../../assets/rain-lofi.mp3";
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
            <p className="p">¡Hola! Soy</p>
            <span className="name">Chantal</span>
            <span className="lastName">Coutenceau.</span>

            <p className="p">Desarrolladora Full-stack</p>
            {/* <Player url={music} /> */}
          </div>
          <div className="gradient_image"></div>
        </div>
        {/* <SwiperComponent /> */}
      </div>
    </>
  );
};
