import React, { useEffect } from 'react';
import './prodetails.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import logo from '../../assets/images/flipkart.png'

function ProDetails() {
    const { product } = useSelector((state) => state.userReducer);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!product) {
            navigate('/');
        }
    }, [product, navigate]);

    const handleBuy = () => {
        navigate('/order');
    };

    const price = parseInt(product?.price) || 0;
    const discount = parseInt(product?.discount);
    const discountPrice = price - (price * discount) / 100;

    if (!product) {
        return null; 
    }

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <img src={logo} alt={logo} className="logo1" />
                </div>
                <div className="header-right">
                    <button className="login-btn">Login</button>
                    <button className="seller-btn">Become a Seller</button>
                    <button className="cart-btn">Cart</button>
                </div>
            </header>

            <nav className="category-nav">
                <ul>
                    <li><a href="/electronic" className='text-decoration-none text-dark'>Electronics</a></li>
                    <li><a href="/fashion" className='text-decoration-none text-dark'>Men</a></li>
                    <li><a href="/fashion" className='text-decoration-none text-dark'>Women</a></li>
                    <li><a href="/fashion" className='text-decoration-none text-dark'>Baby & Kids</a></li>
                    <li><a href="/homefurniture" className='text-decoration-none text-dark'>Home & Furniture</a></li>
                    <li><a href="/Grocery" className='text-decoration-none text-dark'>Grocery</a></li>
                </ul>
            </nav>

            <div className="product-container">
                <div className="image-gallery">
                    <div className="thumbnail-list">
                        <img src={product.image}alt={product.image} className="thumbnail" />
                        <img src={product.image} alt={product.image} className="thumbnail" />
                        <img src={product.image} alt={product.image} className="thumbnail" />
                    </div>
                    <div className="main-image">
                        <img src={product.image} alt={product.name} />
                        <div className="purchase-options mt-5">
                            <button className="add-to-cart">ADD TO CART</button>
                            <button className="buy-now" onClick={handleBuy}>Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <h1 className="product-title">{product.name} ({product.description})</h1>
                    <div className="price-section">
                        <span className="price">₹{discountPrice}</span>
                        <span className="discounted-price">{product.price}</span>
                        <span className="discount">{discount}% off</span>
                    </div>
                    <div className="offers-section">
                        <h3>Available offers</h3>
                        <ul>
                            <li>Special Price: Get extra ₹575 off</li>
                            <li>Bank Offer: Get ₹50 Instant Discount on first Flipkart UPI transaction</li>
                            <li>Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</li>
                        </ul>
                    </div>
                    <div className="delivery-section">
                        <span>Delivery by 12 Sep, Thursday</span>
                        <span className="pincode-check">Check pincode</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProDetails;
