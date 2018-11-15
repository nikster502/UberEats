import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import {Col} from "react-flexbox-grid";


class Dish extends Component {
    render() {
        const {srcImg,altImg,dishName,dishPrice,dishTime,link} = this.props;



        const classes = classNames({
        });

        return (
            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
               <div className="content-dish dish">
                   <div className="dish-link" href="">
                   <img className="dish-img" src={srcImg} alt={altImg}/>
                   <h3 className="dish-name">{dishName}</h3>
                   <p className="dish-price">{dishPrice}</p>
                   <p className="dish-time">{dishTime}</p>
                   </div>

                   <button className="bnt-bucket">
                       добавить в корзину
                   </button>
               </div>
            </Col>
        );
    }
}

export default Dish;