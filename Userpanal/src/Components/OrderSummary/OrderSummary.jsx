import React, { useEffect, useState } from 'react'
import './orderSummary.css'
import { useNavigate, useParams } from 'react-router'
import { useSelector } from 'react-redux';

function OrderSummary() {
    const { id} = useParams()
    console.log("orderProductid",id);
    const {order} = useSelector(state => state.userReducer)
    const navigate =useNavigate()

    const [ifOrder ,setIfOredr] = useState('')
        console.log("ifOrder",ifOrder);
        
       

        useEffect(()=>{
            if(order){
                setIfOredr(order)
            }else{
                navigate('/')
            }
        },[order, navigate])

  return (
    <>
      <div class="container1">
        <div class="order-success">
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been successfully placed.</p>
        </div>
        <div class="order-summary">
            <h2>Order Summary</h2>
            <div class="order-item">
                <img src={ifOrder.image} alt={ifOrder.image} class="product-image" />
                <div class="product-details">
                    <h3>{ifOrder.product}</h3>
                    <p><strong>Price:</strong> ₹{ifOrder.price}</p>
                    <p><strong>Quantity:</strong>{ ifOrder.quantity}</p>
                    <p className='ms-5 border-bottom w-25'>{ifOrder.price}x{ifOrder.quantity}</p>
                    <p><strong>Total:</strong> ₹{ifOrder.subtotal}</p>
                </div>
            </div>
        </div>
        <div class="order-info">
            <h2>Shipping Information</h2>
            <p><strong>Name:</strong>{ifOrder.fname}{ifOrder.lname}</p>
            <p><strong>Address:</strong>{ifOrder.address}</p>
            <p><strong>Phone:</strong>{ifOrder.phone}</p>
            <p><strong>Email:</strong>{ifOrder.email}</p>
        </div>
        <div class="continue-shopping">
            <a href="/" class="btn">Continue Shopping</a>
        </div>
    </div>
    </> 
  )
}

export default OrderSummary
