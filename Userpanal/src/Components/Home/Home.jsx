import React, { useEffect, useState } from 'react';
import './home.css';
import logo from '../../assets/images/filpkaratlogo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCartAction, getProductsAsync, productInfoAsync } from '../../Sercvices/Actions/productsActions';
import { Row } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';

function Home() {
    const navitems = [
        { name: 'Electronics', path: './electronic' },
        { name: 'Fashion', path: './fashion' },
        { name: 'Home & Furniture', path: './homefurniture' },
        { name: 'Accessories', path: './Accessories' },
        { name: 'Grocery', path: './Grocery' }
    ];

    const { allproducts } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    const handleInfo = (id) => {
        dispatch(productInfoAsync(id));
        console.log("info", id);
        navigate('/prodetail')
    };

    const handlecart = () => {
        navigate('/addtocart')
    }


    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    const filteredProducts = allproducts.filter(pro =>
        pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pro.description.toLowerCase().includes(searchTerm.toLowerCase())
    );



    // Step 1: Filter products by category
    const electronicsProducts = filteredProducts.filter(pro =>
        pro.category === 'Mobiles' ||
        pro.category === 'Laptop-Accessories' ||
        pro.category === 'LED-Tv'
    );

    const fashionProducts = filteredProducts.filter(pro =>
        pro.category === 'mens-clothing' ||
        pro.category === 'womens-clothing' ||
        pro.category === 'kids-clothing' ||
        pro.category === 'footwear' ||
        pro.category === 'accessories'
    );

    const homefurniture = filteredProducts.filter(pro =>
        pro.category === 'furniture' ||
        pro.category === 'blanket-pillows' ||
        pro.category === 'kichen' ||
        pro.category === 'accessories'
    );

    const Grocery = filteredProducts.filter(pro =>
        pro.category === 'Rice' ||
        pro.category === 'Oils' ||
        pro.category === 'Powders' ||
        pro.category === 'Others'
    );
    console.log("grocery", Grocery);


    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt={logo} />
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>Search</button>
                </div>
                <div className="user-actions">
                    <button>Login</button>
                    <button>More</button>
                    <button onClick={handlecart}>Cart</button>

                </div>
            </header>

            <nav className="navbar">
                <ul>
                    {navitems.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Render filtered products */}
            <section className="products">
                <h2 className='m-0 text-start'>Best of Electronics</h2>
                <Row className='electronics flex-nowrap mt-3'>
                    {electronicsProducts.map((pro) => {
                        const price = parseInt(pro.price) || 0;
                        const discount = parseInt(pro.discount) || 0;
                        const discountPrice = price - (price * discount) / 100;
                        return (
                            <div className="col-2" key={pro.id}>
                                <div className="product-card">
                                    <div className='img1' role='button' onClick={() => handleInfo(pro.id)}>
                                        <img src={pro.image} alt={pro.name} />
                                    </div>
                                    <h3>{pro.name}</h3>
                                    <p className='p-0'>From <FaRupeeSign />{discountPrice} <span className='text-decoration-line-through text-dark'>₹{price}</span></p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </Row>
            </section>

            <section className="products">
                <h2 className='m-0 text-start'>Best of Fashion</h2>
                <Row className='fashion flex-nowrap mt-3'>
                    {fashionProducts.map((pro) => {
                        const price = parseInt(pro.price) || 0;
                        const discount = parseInt(pro.discount) || 0;
                        const discountPrice = price - (price * discount) / 100;
                        return (
                            <div className="col-2" key={pro.id}>
                                <div className="product-card">
                                    <div className='img1' role='button' onClick={() => handleInfo(pro.id)}>
                                        <img src={pro.image} alt={pro.image} />
                                    </div>
                                    <h3>{pro.name}</h3>
                                    <p>From <FaRupeeSign />{discountPrice} <span className='text-decoration-line-through text-dark'>₹{price}</span></p>
                                    <button >Add to Cart</button>
                                </div>
                            </div>
                        );
                    })}
                </Row>
            </section>

            <section className="products">
                <h2 className='m-0 text-start'>Best of Home & Furnitures</h2>
                <Row className='fashion flex-nowrap mt-3'>
                    {homefurniture.map((pro) => {
                        const price = parseInt(pro.price) || 0;
                        const discount = parseInt(pro.discount) || 0;
                        const discountPrice = price - (price * discount) / 100;
                        return (
                            <div className="col-2" key={pro.id}>
                                <div className="product-card">
                                    <div className='img1' role='button' onClick={() => handleInfo(pro.id)}>
                                        <img src={pro.image} alt={pro.image} />
                                    </div>
                                    <h3>{pro.name}</h3>
                                    <p>From <FaRupeeSign />{discountPrice} <span className='text-decoration-line-through text-dark'>₹{price}</span></p>
                                    <button >Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </Row>
            </section>


            <section className="products">
                <h2 className='m-0 text-start '>Best of Grocery items</h2>

                <Row className='fashion flex-nowrap mt-3'>
                    {Grocery.map((pro) => {
                        const price = parseInt(pro.price) || 0;
                        const discount = parseInt(pro.discount) || 0;
                        const discountPrice = price - (price * discount) / 100;
                        return (
                            <div className="col-2" key={pro.id}>
                                <div className="product-card">
                                    <div className='img1' role='button' onClick={() => handleInfo(pro.id)}>
                                        <img src={pro.image} alt={pro.image} />
                                    </div>
                                    <h3>{pro.name}</h3>
                                    <p>From <FaRupeeSign />{discountPrice} <span className='text-decoration-line-through text-dark'>₹{price}</span></p>
                                    <button >Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                    }
                </Row>
            </section>
        </div>
    );
}

export default Home;
