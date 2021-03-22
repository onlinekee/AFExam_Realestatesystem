import React,{Component} from "react";
import "./ImageSlide.css";

import Img1 from "../../Shared/assets/Images/Img1.jfif";
import Img2 from "../../Shared/assets/Images/Img2.jpg";
import Img3 from "../../Shared/assets/Images/Img3.jfif";
import Img4 from "../../Shared/assets/Images/Img4.jfif";
import Img5 from "../../Shared/assets/Images/Img5.jfif";


class ImageSlider extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        return (
            <div>
                <div
                    id="carousel-example-1z"
                    className="carousel slide carousel-fade cus-slider"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carousel-example-1z"
                            data-slide-to="0"
                            className="active"
                        ></li>
                        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="view h-100">
                                <img
                                    className="d-block h-100 w-lg-100"
                                    src={Img1}
                                    alt="First slide"
                                />
                            </div>
                        </div>

                        <div className="carousel-item h-100">
                            <div className="view h-100">
                                <img
                                    className="d-block h-100 w-lg-100"
                                    src={Img2}
                                    alt="Second slide"
                                />

                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="view h-100">
                                <img
                                    className="d-block h-100 w-lg-100"
                                    src={Img3}
                                    alt="Third slide"
                                />

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view h-100">
                                <img
                                    className="d-block h-100 w-lg-100"
                                    src={Img4}
                                    alt="fourth slide"
                                />

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="view h-100">
                                <img
                                    className="d-block h-100 w-lg-100"
                                    src={Img5}
                                    alt="fifth slide"
                                />

                            </div>
                        </div>
                    </div>

                    <a
                        className="carousel-control-prev"
                        href="#carousel-example-1z"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carousel-example-1z"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }

}

export default ImageSlider;
