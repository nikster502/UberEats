import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import Logo from "../Logo";
import Button from "../Button";
import Input from "../Input";
import DeliveryInput from "../DeliveryInput";

class Menu extends Component {
    render() {
        const { children, color, ...other } = this.props;

        const classes = classNames({
            btn: true,
            "btn--color": color,

        });
        return (
            <div className='header-menu'>
                <Logo/>

                <div className='header_deliveryContainer deliveryContainerMenu   '>
                    <div className='header_deliveryСase header_deliveryСase__when deliveryContainerMenu_deliveryСase__when'>
                        <Input className = 'header_deliveryWhen '
                               placeholder = 'ASAP'
                        />
                    </div>
                    <div className='header_deliveryСase header_deliveryСase__to deliveryContainerMenu_deliveryСase__to'>
                        <label className='header_labelDeliverMenu '>to</label>
                        <DeliveryInput
                            component={Input}
                            placeholder = 'ul. Bolshaya Dmitrovka,22 '
                        />
                    </div>


                </div>

                <div className='btn-group'>
                    <Button children = 'Sign in' white />
                    <Button children = 'Register' black/>
                </div>
            </div>
    );
    }
}

export default Menu;