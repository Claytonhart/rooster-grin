import React from "react";
import Fade from "react-reveal/Fade";

const CheckerBoard = ({ side, img }) => {
  let order = 0;
  if (side === "left") {
    order = 1;
  }

  return (
    <Fade duration={1000}>
      <section className="checkerboard">
        <div className="checkerboard-info" style={{ order }}>
          <h3 className="checkerboard-info__h3">Lorem ipsum dolor sit amet</h3>
          <h4 className="checkerboard-info__h4">
            Lorem ipsum dolor sit amet lorem
          </h4>
          <p className="checkerboard-info__about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            eum veritatis tempora ab consequatur recusandae voluptatibus
            obcaecati. Obcaecati fugit magni quam pariatur, earum maxime facilis
            voluptatem tenetur ratione. Eaque, qui. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eius provident explicabo similique,
            fuga neque amet repellendus quidem aliquid numquam voluptates rerum,
            minus.
          </p>
        </div>
        <div className="checkerboard-image">
          <img
            className="checkerboard-image__img"
            src={img}
            alt="checkerboard"
            style={{ float: side }}
          />
        </div>
      </section>
    </Fade>
  );
};

export default CheckerBoard;
