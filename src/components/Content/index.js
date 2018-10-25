import React, { Component } from "react";
import classNames from "classnames";
import { Grid, Row, Col } from 'react-flexbox-grid';
import "./style.css";
import Dish from '../Dish';

class DishGrid extends Component {
    render() {
        const {  } = this.props;


        const classes = classNames({


        });

        return (

                <section className="content">

                    <h1 className="content-city">Moscow Restaurants</h1>
                    <Grid fluid>
                        <Row>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                               <Dish
                                   srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                   dishName ="Макдоналдс — Газетный"
                                   dishPrice ="₽₽ • Бургеры"
                                   dishTime = "25 - 35 Min"
                               />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>
                            <Col className="dish-margin" xs={12} sm={6} md={6} lg={4}>
                                <Dish
                                    srcImg= "../pngDishs/66f1d3abd4940a817c788c541e9fbeb3.png"
                                    dishName ="Макдоналдс — Газетный"
                                    dishPrice ="₽₽ • Бургеры"
                                    dishTime = "25 - 35 Min"
                                />
                            </Col>

                        </Row>
                    </Grid>
                </section>
        );
    }
}

export default DishGrid;