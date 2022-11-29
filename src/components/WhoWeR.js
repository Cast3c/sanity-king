import React from "react";
import "../estilos/WhoWeR.css";

export const WhoWeR = () => {
  return (
    <div className="contenido" id="Quienes-somos">
      <div className="cuadro-contenido">
        <h1 className="aboutUsSanity">SANITY</h1>
        <h1 className="aboutUsKing">KING</h1>
        <div className="leftAboutUs">
          <h3 className="aboutUsTitle">Lorem Ipsum...</h3>
          <p className="aboutUsParaf">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque a lacus ex. Suspendisse gravida, eros non tempus
            porttitor, metus neque rhoncus velit, sit amet accumsan enim odio in
            ex. Nullam aliquam sapien quis eleifend vestibulum. Quisque et
            ornare neque. Sed quis sapien sit amet lorem blandit accumsan. Donec
            mollis tellus ligula, sagittis tempor eros scelerisque vitae. Sed
            laoreet mauris efficitur mi finibus, a porta turpis rutrum. Fusce
            suscipit non velit eu elementum. Fusce vestibulum lorem vehicula
            nisi dignissim, et fermentum eros semper. Donec ac risus eget quam
            imperdiet semper.
          </p>
        </div>
        <div className="rightAboutUs">
          <span className="logoCarousel">
            <h1 className="sLogo">S</h1>
            <h1 className="kLogo">K</h1>
            <h3 className="logoWord">Logo</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WhoWeR;
