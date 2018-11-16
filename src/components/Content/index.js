import React, { Component } from "react";
import classNames from "classnames";
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./style.css";
import Dish from '../Dish';
import {connect} from 'react-redux';
import products from "./products";



class DishGrid extends Component {
    render() {
        const {  } = this.props;

        // const parsedJSON = JSON.parse(products);
        const classes = classNames({
        });
// console.log("products - ",JSON.parse(this.props.products))
        return (
                <section className="content">

                    <h1 className="content-city">Moscow Restaurants</h1>
                    <Grid fluid>
                        <Row>
                            {
                                this.props.products.map((product,index) =>{
                                    return(<Dish key = {index}
                                        srcImg= {product.urlImg}
                                        dishName ={product.productName}
                                        dishPrice ={product.price+" ₽ • Бургеры"}
                                        dishTime = "25 - 35 Min"
                                                 indexBucket = {index}
                                    />);
                                })
                            }

                        </Row>
                    </Grid>
                </section>
        );
    }
}

export default connect(
    state => ({
        products :state.products
    }),
    dispatch => ({


    })
)(DishGrid);