import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { getProductsAsync, productInfoAsync } from '../../../Sercvices/Actions/productsActions'
import { useNavigate } from 'react-router'
import '../css/electronics.css'

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
          <span>Fashions</span>
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
          fashionProducts.map((fashionPro) => {
            const price = parseInt(fashionPro.price) || 0;
            const discount = parseInt(fashionPro.discount) || 0;
            const discountPrice = price - (price * discount) / 100;
            return (
              <div class="product-list">
                <div class="product-card-view" role='button' onClick={() => handleElcInfo(fashionPro.id)}>
                  <img src={fashionPro.image} alt={fashionPro.image} />
                  <div class="product-info">
                    <h3>{fashionPro.name}({fashionPro.description})</h3>
                    <p class="rating">4.5 ★ 99 Ratings & 15 Reviews</p>
                    {/* <ul>
                      <li>12 GB RAM | 512 GB ROM</li>
                      <li>17.22 cm (6.78 inch) Full HD+ Display</li>
                      <li>50MP + 50MP | 50MP Front Camera</li>
                      <li>5500 mAh Battery</li>
                      <li>Snapdragon 7 Gen 3 Processor</li>
                      <li>1 Year Warranty on Handset and 6 Months Warranty on Accessories</li>
                    </ul> */}
                  </div>
                  <div class="product-price">
                    <p class="current-price">₹{discountPrice}</p>
                    <p class="original-price">₹{price} <span>{discount}% off</span></p>
                    <p class="delivery-date">Free delivery by 28th Aug</p>
                    <p class="exchange-offer">Upto ₹34,800 Off on Exchange</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Container>
      <footer>
        <p>&copy; 2024 Flipkart. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Fashion
