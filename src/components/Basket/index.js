import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import basket from './svg/basket.svg'


class Basket extends Component {
    render() {
        const {children, color, ...other} = this.props;

        const classes = classNames({
            btn: true,
            "btn--color": color,
        });
        return (
                <div className='header_menu-basket'>
                    <img src={basket} alt="корзина"/>
                </div>


        );
    }
}
export default Basket;