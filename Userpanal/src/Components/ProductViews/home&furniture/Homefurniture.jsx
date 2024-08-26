import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getProductsAsync, productInfoAsync } from '../../../Sercvices/Actions/productsActions'
import { Container } from 'react-bootstrap'
import '../css/electronics.css'

function Homefurniture() {
  const { allproducts } = useSelector(state => state.userReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleInfo = (id) => {
    dispatch(productInfoAsync(id));
    navigate('/prodetail');
  }

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);


  const homefurniture = allproducts.filter(pro =>
    pro.category === 'furniture' ||
    pro.category === 'blanket-pillows' ||
    pro.category === 'kichen' ||
    pro.category === 'accessories'
);

  return (
    <>
       <Container fluid>
        <div class="header">
          <div class="logo">
            <h1>Flipkart</h1>
          </div>
          <div class="search-bar">
            <input type="text" placeholder="Search for products, brands and more" />
            <button>Search</button>
          </div>
          <div class="user-options">
            <button>Login</button>
            <button>Become a Seller</button>
            <button>Cart</button>
          </div>
        </div>

        <div class="sorting-options">
          <span>Home and Furntures</span>
          <span>(Showing 1 – 24 products of 796 products)</span>
          <span>Sort By:</span>
          <select>
            <option value="popularity">Popularity</option>
            <option value="price-low-high">Price -- Low to High</option>
            <option value="price-high-low">Price -- High to Low</option>
            <option value="newest-first">Newest First</option>
          </select>
        </div>
        {
          homefurniture.map((pro) => {
            const price = parseInt(pro.price) || 0;
            const discount = parseInt(pro.discount) || 0;
            const discountPrice = price - (price * discount) / 100;
            return (
              <div class="product-list">
                <div class="product-card-view" role='button' onClick={() =>handleInfo(pro.id)}>
                  <img src={pro.image} alt={pro.image} />
                  <div class="product-info">
                    <h3>{pro.name}({pro.description})</h3>
                    <p class="rating">4.5 ★ 99 Ratings & 15 Reviews</p>
                  
                  </div>
                  <div class="product-price">
                    <p class="current-price">₹{discountPrice}</p>
                    <p class="original-price">₹{price} <span>{discount}% off</span></p>
                    <p class="delivery-date">Free delivery by 28th Aug</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Container>
    </>
  )
}

export default Homefurniture
