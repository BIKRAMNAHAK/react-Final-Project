import React, { useEffect } from 'react'
import './order.css'
import { useDispatch, useSelector } from 'react-redux'
// import { getUserorderPro } from '../../Services/Actions/addproductAction'
import { Container, Row } from 'react-bootstrap'
import { updateOrderStatusAsync } from '../../Services/Actions/addproductAction'
import { useNavigate } from 'react-router'


function Orders() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userOrderDetails,orderStatus } = useSelector(state => state.admin)
    console.log("orderList", userOrderDetails);

    const handleConfirmOrder = () => {
        dispatch(updateOrderStatusAsync(userOrderDetails.id, 'Confirmed'));
        navigate('/')
    }


    return (
        <>
            <main>
                <Container>
                    <Row className='justify-content-center'>
                        <div className="col-10">

                            <div class="invoice-box">
                                <h1 className='bg-success text-warning'>Flipkart Product Order Invoice</h1>
                                <div class="invoice-details">
                                    <div class="invoice-header">
                                        <div class="company-info">
                                            <h2>FilpKart Clone</h2>
                                            <p>amroli</p>
                                            <p>Surat, ST 394107</p>
                                            <p>Email: info@yourcompany.com</p>
                                        </div>
                                        <div class="invoice-info">
                                            <p><strong>Invoice :</strong> 1001</p>
                                            <p><strong>Order Date:</strong>{userOrderDetails.orderTime}</p>

                                        </div>
                                    </div>
                                    <div class="billing-info">
                                        <div className="col-6 ">
                                            <h3>Billing To:</h3>
                                            <p><strong>Name:</strong> {userOrderDetails.fname} {userOrderDetails.lname}</p>
                                            <p><strong>Address:</strong>{userOrderDetails.address}</p>
                                            <p><strong>Phone:</strong> {userOrderDetails.phone}</p>
                                            <p><strong>Email:</strong>{userOrderDetails.email}</p>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center">
                                            <img src={userOrderDetails.image} alt={userOrderDetails.image} className='order-img'/>
                                        </div>
                                    </div>
                                </div>
                                <table class="invoice-table">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Shoping fee</th>
                                            <th>Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{userOrderDetails.product}</td>
                                            <td>{userOrderDetails.price}</td>
                                            <td>{userOrderDetails.quantity}</td>
                                            <td>{userOrderDetails.price * userOrderDetails.quantity}</td>
                                            <td>{userOrderDetails.shopinfee}</td>
                                            <td>{userOrderDetails.discount}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="invoice-total">
                                    <p><strong>Total:</strong>{userOrderDetails.subtotal}</p>
                                </div>
                                <div class="footer d-flex justify-content-center gap-5">
                                    <p>Thank you for your business!</p>
                                    <button className="btn btn-success" onClick={handleConfirmOrder}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Orders
