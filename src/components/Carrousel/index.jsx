import React, { useState } from "react";
import { data } from "../../assets/data";
import bento from "../../assets/BENTO-logo.jpg";
import chiao from "../../assets/chiao.jpg";
import youreOwnRhytm from "../../assets/youreOwnRhytm.jpg";
import movieNight from "../../assets/movieNight.jpg";
import propertiesAndYou from "../../assets/propertiesandyou.jpg";
import piedraPapelTijera from "../../assets/piedraPapelTijera.jpg";
import spaceX from "../../assets/space-x.jpg";
import planets from "../../assets/spacePlanets.jpg";
import todo from "../../assets/todo2.png";
import ToDo from "../../assets/todo.jpg";
import rickAndMorty from "../../assets/rickAndMorty.jpg";

import "./index.css";

export const Carrousel = () => {
  const images = [
    { image: youreOwnRhytm, link: "https://your-own-rythm.vercel.app/" },
    { image: movieNight, link: "https://api-movies-e8be.vercel.app/" },
    {
      image: propertiesAndYou,
      link: "https://proyecto-final-frontend-lyart.vercel.app/",
    },
    {
      image: chiao,
      link: "https://chanticou.github.io/Ciao-pastas-restaurant/",
    },
    {
      image: ToDo,
      link: "   https://to-do-list-react-navy.vercel.app/",
    },
    {
      image: rickAndMorty,
      link: "https://rick-morty-api-beta.vercel.app/",
    },
  ];
  const oldestImages = [
    {
      image: piedraPapelTijera,
      link: "https://chanticou.github.io/Piedra-papel-o-tijera/ ",
    },
    { image: spaceX, link: "https://chanticou.github.io/SpaceX-reply/ " },
    { image: planets, link: " https://chanticou.github.io/Planetas/" },

    {
      image: todo,
      link: "https://chanticou.github.io/Lista-pendientes/ ",
    },
    { image: bento, link: "https://api-food-five.vercel.app/" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <h1>Oldest</h1>
      <div className="conten-carrousel">
        <button
          className="prev-button"
          onClick={() => {
            const container = document.querySelector(".content-image");
            container.scrollLeft -= container.offsetWidth;
          }}
        >
          &#8592; {/* Flecha izquierda */}
        </button>
        <div className="content-image">
          {images.map((el, index) => {
            return (
              <a
                key={index}
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="image"
                  src={el.image}
                  alt={`Image ${index}`}
                  onClick={() => setCurrentIndex(index)}
                />
              </a>
            );
          })}
        </div>
        <button
          className="next-button"
          onClick={() => {
            const container = document.querySelector(".content-image");
            container.scrollLeft += container.offsetWidth;
          }}
        >
          &#8594; {/* Flecha derecha */}
        </button>
      </div>

      <h1>Newest</h1>
      <div className="conten-carrousel">
        <button
          className="prev-button"
          onClick={() => {
            const container = document.querySelector(".content-image_2");
            container.scrollLeft -= container.offsetWidth;
          }}
        >
          &#8592; {/* Flecha izquierda */}
        </button>

        {/* Second carrousel */}
        <div className="content-image_2">
          {oldestImages.map((el, index) => {
            return (
              <a key={index} href={el.link} target="_blank">
                <img
                  className="image"
                  src={el.image}
                  alt={`Image ${index}`}
                  onClick={() => setCurrentIndex(index)}
                />
              </a>
            );
          })}
        </div>
        <button
          className="next-button"
          onClick={() => {
            const container_2 = document.querySelector(".content-image_2");
            container_2.scrollLeft += container_2.offsetWidth;
          }}
        >
          &#8594; {/* Flecha derecha */}
        </button>
      </div>
    </>
  );
};
