import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { getProductsAsync, productInfoAsync } from '../../Sercvices/Actions/productsActions'
import { useNavigate } from 'react-router'

function Fashion() {
  const { allproducts } = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleElcInfo = (id) => {
    dispatch(productInfoAsync(id));
    navigate('/prodetail');
  }

  useEffect(() => {
    dispatch(getProductsAsync());
}, [dispatch]);


  const fashionProducts = allproducts.filter(pro => 
    pro.category === 'mens-clothing' || 
    pro.category === 'womens-clothing' || 
    pro.category === 'kids-clothing' || 
    pro.category === 'footwear' || 
    pro.category === 'accessories'
);
  return (
    <>
      <Container>
        <h1>Electronics</h1>

        <section>
          {
            fashionProducts.map((fashionPro) => {
              return (
                <Row role='button' onClick={() => handleElcInfo(fashionPro.id)}>
                  <div className="col-12 ">
                    <div className="product-grid">
                      <div className="product-card-elc d-flex ">
                        <div className='col-3 d-flex '>
                          <img src={fashionPro.image} alt="Mobile" />
                        </div>
                        <div className="col-9 bg-light p-3">
                          <h3>{fashionPro.name}</h3>
                          <p>₹{fashionPro.price}</p>
                          <p>{fashionPro.description}</p>

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

export default Fashion
