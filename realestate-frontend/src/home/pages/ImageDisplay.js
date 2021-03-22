import React, {Component} from 'react';
import {API} from '../../config'

const ImageDisplay = ({house,id, xsize, ysize}) => {
    console.log(house)
return (
    <div className="card-img-top">

        <img src={`${API}/houseProduct/photo/${id}`} className="rounded-top" style={{width: `${xsize}`, height: `${ysize}`}}  alt="ProductPhoto"/>
        
    </div>
)


};

export default ImageDisplay;
