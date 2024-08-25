import React, { useEffect } from 'react'
import './electronics.css'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { getProductsAsync, productInfoAsync } from '../../Sercvices/Actions/productsActions'
import { useNavigate } from 'react-router'


function Electronics() {
    const { allproducts } = useSelector(state => state.userReducer)
    const dispatch =  useDispatch()
    const navigate = useNavigate()

    const handleElcInfo = (id)=>{
        dispatch(productInfoAsync(id));
        navigate('/prodetail');
    }


    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    const electronicsProducts = allproducts.filter(pro =>
        pro.category === 'Mobiles' ||
        pro.category === 'Laptop-Accessories' ||
        pro.category === 'LED-Tv'
    );
    return (
        <>
            <Container>
                    <h1>Electronics</h1>

                    <section>
                        {
                            electronicsProducts.map((electro) => {
                                return (
                                    <Row role='button' onClick={()=>handleElcInfo(electro.id)}>
                                        <div className="col-12 ">
                                            <div className="product-grid">
                                                <div className="product-card-elc d-flex ">
                                                    <div className='col-3 d-flex '>
                                                        <img src={electro.image} alt="Mobile" />
                                                    </div>
                                                    <div className="col-9 bg-light">
                                                        <h3>{electro.name}</h3>
                                                        <p>₹{electro.price}</p>
                                                        <p>{electro.description}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>

                                )
                            })
                        }
                    </section>
            </Container>
            <footer>
                <p>&copy; 2024 Flipkart. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Electronics
