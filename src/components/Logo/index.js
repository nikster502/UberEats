import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import logo from './img/logo.svg'

class Logo extends Component {
    render() {
        const { children, color, ...other } = this.props;


        const classes = classNames({
            btn: true,
            "btn--color": color,

        });

        return (
            <div className="form__image">
                <a href='#'><img src={logo}/></a>

            </div>
        );
    }
}

export default Logo;