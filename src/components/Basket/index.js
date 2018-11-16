import React, { Component } from "react";
import classNames from "classnames";
import "./style.css";
import basket from './svg/basket.svg'
import {connect} from 'react-redux';

class Basket extends Component {
    showProductsOnBucket() {
        this.props.onShowProductsOnBucket(this.props.bucket);

    }
    render() {
        const {children, color, ...other} = this.props;

        const classes = classNames({
            btn: true,
            "btn--color": color,
        });

        return (
                <div className='header_menu-basket' onClick={this.showProductsOnBucket.bind(this)}>
                    <img    src={basket} alt="корзина"/>
                    <div className="basket-count">{this.props.bucket.length}</div>
                    {/*<ul>*/}
                        {/*{this.props.bucket.map((product,index)=>*/}
                            {/*<li key={index}>{product.product.productName}</li>*/}
                        {/*)}*/}
                    {/*</ul>*/}
                </div>


        );
    }
}
export default  connect(
    state => ({
        bucket :state.bucket
    }),
    dispatch => ({
        onShowProductsOnBucket: (product) => {
            console.log( "trgdkflkgkdf",product)


            const payload ={

            }
            dispatch({type : 'ADD_TRACK', payload: payload});
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
)(Basket);