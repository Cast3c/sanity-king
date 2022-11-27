import React from "react";
import "../estilos/Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";

export const Landing = () => {
  return (
    <div className="cuadro-contenedor" id="Home">
      <div className="left-landing">
        <h1 className="sanityTitle">SANITY</h1>
        <h1 className="kingTitle">KING</h1>
        <span className="quoteLanding">
          <h3 className="quoteTitle"> Lorem Ipsum,</h3>
          <p className="quoteParaf"> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </span>
      </div>
      <div className="right-landing">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../media/img/Arcabuco.jpg")}
                class="d-block w-100"
                alt="..."
                className="img-slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Lorem Ipsum</h5>
                <p>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../media/img/Aseo.jpg")}
                class="d-block w-100"
                alt="..."
                className="img-slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Lorem Ipsum</h5>
                <p>
                  "There is no one who loves pain itself, who seeks after it and
                  wants to have it, simply because it is pain..."
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../media/img/Mantenimiento.jpg")}
                class="d-block w-100"
                alt="..."
                className="img-slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Lorem Ipsum</h5>
                <p>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../media/img/Plagas.jpeg")}
                class="d-block w-100"
                alt="..."
                className="img-slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Lorem Ipsum</h5>
                <p>
                  "There is no one who loves pain itself, who seeks after it and
                  wants to have it, simply because it is pain..."
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="footerR">
          <span className="surround-icon">
            <h3>
              <FontAwesomeIcon icon={faHandSparkles} />
            </h3>
          </span>
          <span className="surround-icon">
            <h3>
              <FontAwesomeIcon icon={faLeaf} />
            </h3>
          </span>
          <span className="surround-icon">
            <h3>
              <FontAwesomeIcon icon={faTrash} />
            </h3>
          </span>
          <span className="surround-icon">
            <h3>
              <FontAwesomeIcon icon={faWater} />
            </h3>
          </span>
        </div>
        <div className="footerButton">
          <span className="surround-button">
            <a href="...">Contactanos</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
