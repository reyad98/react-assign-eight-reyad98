import React from 'react';
import './Product.css'

const Product = (props) => {
    //console.log(props);
    const {name,img,country,city,salary,age} = props.product;
    return (
       <div className="row">
           <div className="column">
           <div className="single-product">
            <div>
                <img src={img}alt="" />
                <h4>Name:{name}</h4>
                <h5>Country:{country}</h5>
                <h5>City:{city}</h5>
                <h5>Age:{age}</h5>
                <h5>Salary:${salary}</h5>
                <div className="btn-pos">
                <button className='buttn' onClick={()=>props.handleTotal(props.product)}>Add Salary</button>
                </div>
                <br />
                <div className="icons">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-skype gap"></a>
                <a href="#" className="fa fa-youtube"></a>
                </div>
                
            </div>
        </div>

           </div>

       </div>
    );
};

export default Product;