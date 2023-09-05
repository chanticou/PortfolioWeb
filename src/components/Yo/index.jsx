import "./index.css";
import React from "react";
import { NavBar } from "../NavBar/index.jsx";

export const Yo = () => {
  return (
    <>
      <NavBar />
      <div className="content_perfil">
        <h1 className="perfil_yo">Perfil</h1>
        <div className="line_yo"></div>
      </div>

      <div className="content_yo">
        <div className="image_text_yo">
          <div className="content_image_yo">
            <img
              className="image_yo"
              src="https://chanticou.github.io/Portfolio/img/imagen-portfolio.jpeg"
              alt=""
            ></img>
          </div>
        </div>

        <div className="content-text_yo">
          <p>
            Hola!👋, mi nombre es Chantal, y soy oriunda de Buenos Aires,
            Argentina. Soy Fullstack Web Developer, terminé mi cursada en el
            Bootcamp de SoyHenry, en el cual emprendí el cargo de Teachig
            Assistant. Mi interes en el mundo tecnológico empezó hace dos años,
            donde emprendí la hermosa aventura de la programación. Empecé con un
            curso de introducción en la UTN y seguí estudiando la carrera de
            FullStack en CoderHouse, y luego para reafirmar mis conocimientos
            hice la carrera de FullStack en SoyHenry. En la actualidad, con mi
            Bootcamp de Soyhenry recién terminado, me encuentro buscando trabajo
            para poder seguir aprendiendo y aportar mis conocimientos al
            desarrollo.
            <ul>
              <li>💻TechSkills </li>
              <li>
                JavaScript | React | Redux | CSS | NodeJS | ExpressJS |
                PostgreSQL | Sequelize | Git | Scrum | GitHub{" "}
              </li>
            </ul>
            <span>Podes contactarme aquí mismo en LinkedIn o mediante:</span>
            <ul>
              <li>✉️ Correo: chanticou@gail.com</li>
              <li>👨‍💻 GitHub: https://github.com/chanticou</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};
