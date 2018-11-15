import React, { Component } from "react";
import classNames from "classnames";
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./style.css";
import Dish from '../Dish';
import products from './products.json';

//http://localhost:3000/products.json


class DishGrid extends Component {
    render() {
        const {  } = this.props;

        const parsedJSON = JSON.parse(products);
        console.log(parsedJSON)
        // for (let i =0;i<parsedJSON.length;i++){
        //     console.log(parsedJSON[i])
        //
        //
        // }
        const classes = classNames({
        });

        return (
                <section className="content">

                    <h1 className="content-city">Moscow Restaurants</h1>
                    <Grid fluid>
                        <Row>
                                {
                                    parsedJSON.map(product =>{
                                   return(<Dish
                                        srcImg= {product.urlImg}
                                        dishName ={product.productName}
                                        dishPrice ={product.price+" ₽ • Бургеры"}
                                        dishTime = "25 - 35 Min"
                                    />);
                                   })
                                }

                        </Row>
                    </Grid>
                </section>
        );
    }
}

export default DishGrid;