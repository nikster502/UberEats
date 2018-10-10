import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";

class Submit extends Component {
    render() {
        const { children, color, ...other } = this.props;


        const classes = classNames({
            btn: true,
            "btn--color": color,

        });

        return (
            <button className={classes} type='button' {...other}>
                {children}
            </button>
        );
    }
}

export default Submit;