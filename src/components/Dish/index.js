import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import {Col} from "react-flexbox-grid";
import {connect} from 'react-redux';

class Dish extends Component {

    addToBucket(){
        console.log('addToBucet' ,this.props);
        this.props.onAddToBucket(this.props.products[this.props.indexBucket]);
        console.log(this.props.bucket.length)

    }
    render() {
        const {srcImg,altImg,dishName,dishPrice,dishTime,link,indexBucket} = this.props;

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
                   <button key={indexBucket} className="bnt-bucket" onClick={this.addToBucket.bind(this)}>
                       добавить в корзину
                   </button>
               </div>
            </Col>
        );
    }
}

export default connect(
    state => ({
        products :state.products,
        bucket : state.bucket
    }),
    dispatch => ({
        onAddToBucket: (product) => {
            console.log("product add to bucket ",product)
            const payload ={
                product
            }
            dispatch({type : 'ADD_TO_BUCKET', payload: payload});
        },




        onFindTrack:(name) =>{
            dispatch({type : 'FIND_TRACK', payload: name});
        },
        onGetTracks: ()=> {
            const asyncGetTracks = () => {
                return dispatch=>{
                    setTimeout(() =>{
                        console.log('I log tracks');
                        dispatch({type : 'FETCH_TRACKS_SUCCESS',payload:[]})
                    },2000)
                };
            }
            dispatch(asyncGetTracks())
        }

    })
) (Dish);