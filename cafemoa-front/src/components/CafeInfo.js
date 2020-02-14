import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { MdExtension } from "react-icons/md";

function CafeInfo({ id , name,  picture}){
    return(
        <div className="Cafe">
            <div className="Cafe__Column">
                <CafePicture picture={picture}/>
            </div>
            <div className="Cafe__Column">
                <h1>{name}</h1>
            </div>
            <Link to ={{
                pathname: '/latte/cafedetail',
                state:{
                    id,
                    name,
                    picture
                }
            }}
            >
            <p>short description</p>
            <MdExtension></MdExtension>
            <Button color="success">자세히 보기</Button>{' '}
            </Link>
        </div>
    );
}
CafeInfo.prototype = {

    id: PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,

}

class CafePicture extends Component{
    render(){
        return(
            <img src={this.props.picture} alt={this.props.name} className="Cafe__Poster" />
        )
    }
}

export default CafeInfo