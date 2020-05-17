import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMAGES_API } from "../../../../tools/keys";
import moment from "moment";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const MoviePopupRelated = (props) => {
  const { similar, size, similar_loaded } = props;
  var settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: size === 4 ? 3 : 5,
    slidesToScroll: 1,
    touchMove: false,
  };
  return (
    <div className="movie__popup__related">
      <Slider {...settings}>
        {similar && similar.length > 0
          ? similar.map((m) => {
              return (
                <div className="movie__popup__related__item" key={m.id}>
                  <figure className="movie__popup__related__item__img">
                    <div
                      onClick={() => props.updateParent("selected_movie", m.id)}
                      className="flex__center"
                    >
                      <PlayCircleOutlineIcon />
                    </div>
                    <img src={`${IMAGES_API}${m.poster_path}`} alt="" />
                  </figure>
                  <span className="flex__start">
                    <h4>
                      {moment(m.release_date, "YYYY-MM-DD").format("YYYY")}
                    </h4>
                    <aside className="flex__center">{m.vote_average}</aside>
                  </span>
                  <h3>{m.title}</h3>
                </div>
              );
            })
          : "  "}
      </Slider>
    </div>
  );
};
export default MoviePopupRelated;
