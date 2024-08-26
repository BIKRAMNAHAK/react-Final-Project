import React, { useEffect, useState } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import generateUniqueId from 'generate-unique-id';
import './buyerForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUserOrderAsync, oredrShowAsync } from '../../Sercvices/Actions/productsActions';

function Purchase() {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const { product } = useSelector((state) => state.userReducer);

    const [orderSuc, setOrderSuc] = useState(false)

    const [formData, setFormData] = useState({
        id: '',
        fname: '',
        lname: '',
        email: '',
        phone: '',
        address: '',
        quantity: 1,
        subtotal: '',
        product: '',
        image: '',
        discount: '',
        shopinfee: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    useEffect(() => {
        if (!product) {
            navigate('/');
        }
    }, [product, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newId = generateUniqueId({ length: 4, useLetters: false });
        const currentTimestamp = new Date().toLocaleString();

        const updatedFormData = {
            ...formData,
            price: product.price,
            subtotal: (total * formData.quantity).toFixed(2),
            product: product.name,
            shopinfee: packing,
            description: product.description,
            discount: product.discount,
            image: product.image,
            id: newId,
            orderTime: currentTimestamp,
        };

        dispatch(addUserOrderAsync(updatedFormData));

        // Reset the form data
        setFormData({
            id: '',
            fname: '',
            lname: '',
            email: '',
            phone: '',
            address: '',
            quantity: 1,
            subtotal: '',
            product: '',
            image: '',
            discount: '',
            shoping: ''
        });
        dispatch(oredrShowAsync(updatedFormData.id))

        setTimeout(() => {
            setOrderSuc(true)
        }, 1500)

        setTimeout(() => {
            navigate('/ordersuc');
        }, 3000)
    };

    const handleClear = () => {
        setFormData({
            id: '',
            fname: '',
            lname: '',
            email: '',
            phone: '',
            address: '',
            quantity: 1,
            subtotal: '',
            product: '',
            image: ''
        });

        navigate('/');
    };

    if (!product) {
        return null;
    }

    const price = parseInt(product?.price) || 0;
    const discount = parseInt(product.discount);
    const packing = parseInt(product.shoping)
    const discountPrice = price - (price * discount) / 100;
    const total = discountPrice + packing ;
    
    return (

        <>


            <Container fluid className='px-5'>
                <div className="title">
                    <h2>Product Order Form</h2>
                </div>
                <div className="display-flex">
                    <form onSubmit={handleSubmit}>
                        <div><h2>Products Details</h2></div>
                        <div className='pro-info'>
                            <div className='order-img col-4'>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="col-8">
                                <div className='p-3 pro-title'>
                                    <p>{product.name}</p>
                                    <h3>₹{total.toFixed(2)}</h3>
                                    <h3 className='text-decoration-line-through'>₹{price.toFixed(2)}</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div><h2>User Details</h2></div>
                        <div className='d-flex'>
                            {/* Hidden fields should not be binded with inputs */}
                            <input type="hidden" name="id" value={product.id} />
                            <input type="hidden" name="name" value={product.name} />
                            <input type="hidden" name="price" value={product.price} />
                            <input type="hidden" name="description" value={product.description} />
                            <input type="hidden" name="discount" value={product.discount} />
                            <input type="hidden" name="shoping" value={product.shoping} />
                        </div>
                        <div className='d-flex'>
                            <label className='col-4'>
                                <span className="fname">First Name <span className="required">*</span></span>
                                <input type="text" name="fname" value={formData.fname} onChange={handleChange} required />
                            </label>
                            <label className='col-4'>
                                <span className="lname">Last Name <span className="required">*</span></span>
                                <input type="text" name="lname" value={formData.lname} onChange={handleChange} required />
                            </label>
                            <label className='col-4'>
                                <span>Phone <span className="required">*</span></span>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                            </label>
                        </div>
                        <div className='d-flex align-items-center'>
                            <label className='col-4'>
                                <span>Email Address <span className="required">*</span></span>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </label>
                            <label className='col-2'>
                                <span>Quantity <span className="required">*</span></span>
                                <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} min="1" required />
                            </label>
                            <label className='col-4'>
                                <span>Address <span className="required">*</span></span>
                                <textarea name="address" value={formData.address} className='rounded-2 w-100' onChange={handleChange} required></textarea>
                            </label>
                        </div>
                        <div className="Yorder">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="2">Your order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{product.name} x {formData.quantity}(Qty)</td>
                                        <td>₹{(product.price * formData.quantity).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>₹{price}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>{discount}%</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping charge</td>
                                        <td>₹{packing} <br /> <hr /></td>
                                    </tr>

                                    <tr>
                                        <td>Subtotal</td>
                                        <td>₹{total.toFixed(2) * formData.quantity}</td>
                                    </tr>


                                    {
                                        orderSuc ? <Alert className='bg-success text-dark fixed-top'>
                                            <Alert.Heading >Order Placed Successfully</Alert.Heading>
                                        </Alert>
                                            : <Alert className='bg-danger text-dark' hidden>
                                                <Alert.Heading >Order Not Placed</Alert.Heading>
                                            </Alert>
                                    }

                                </tbody>
                            </table>
                            <br />
                            <div>
                                <input type="radio" name="dbt" value="dbt" defaultChecked /> Direct Bank Transfer
                            </div>
                            <p>
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                            </p>
                            <div>
                                <input type="radio" name="dbt" value="cd" /> Cash on Delivery
                            </div>
                            <div>
                                <input type="radio" name="dbt" value="paypal" /> Paypal <span>
                                    <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50" />
                                </span>
                            </div>
                            <div className='d-flex justify-content-center column-gap-5'>
                                <button type="submit" className='w-25 button1' >Place Order</button>
                                <button type="button" onClick={handleClear} className='w-25 bg-danger button1'>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>


            </Container>
        </>
    );
}

export default Purchase;
