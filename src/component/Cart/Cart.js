import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {total} = props;
    let totalSalary =0;
    for(const product of total){
        totalSalary = totalSalary +product.salary;
    }
    return (
        <div>
            <h3>Total Count :{props.total.length}</h3>
             <h3>Total Salary :{totalSalary}</h3>
        </div>
    );
};

export default Cart;