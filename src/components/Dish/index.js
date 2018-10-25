import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";


class Dish extends Component {
    render() {
        const {srcImg,altImg,dishName,dishPrice,dishTime,link} = this.props;



        const classes = classNames({
        });

        return (

               <div className="content-dish dish">
                   <a className="dish-link" href="#">
                   <img className="dish-img" src={srcImg} alt={altImg}/>
                   <h3 className="dish-name">{dishName}</h3>
                   <p className="dish-price">{dishPrice}</p>
                   <p className="dish-time">{dishTime}</p>
                   </a>
               </div>

        );
    }
}

export default Dish;