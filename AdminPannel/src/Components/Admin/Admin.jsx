import React from 'react'
import './admin.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/adminlogo.png'
import { FaChartSimple } from 'react-icons/fa6'
import { FaArchive, FaPlusSquare, FaShoppingBag } from 'react-icons/fa'
import { PiUsersFill } from 'react-icons/pi'
import { LuLogOut } from 'react-icons/lu'
import profile from '../../assets/images/maxresdefault.jpg'

function Admin() {

    const location = useLocation()
    const currentPath = location.pathname
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/signin')
    }

    const sidemanus = [{
        name: 'Dashboard',
        icon: <FaChartSimple />,
        path: '/'
    }, {
        name: 'Products',
        icon: <FaArchive />,
        path: '/products'
    }, {
        name: "Add Product",
        icon: <FaPlusSquare />,
        path: "/addproduct"
    }, {
        name: "Orders",
        icon: <FaShoppingBag />,
        path: "/orders"
    }, {
        name: "Users",
        icon: <PiUsersFill />,
        path: "/users"
    }]
    return (
        <>
            <header >
                <div className="logo">
                    <img src={logo} alt={logo} className='img-fluid img' />
                </div>
                <nav>
                    <ul className='gap-3 m-0'>
                        {
                            sidemanus.map((item) => (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        className={` text-decoration-none ${currentPath === item.path ? 'active' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                            {/* <button className='btn btn-primary' onClick={handleLogout}>Logout
                                <LuLogOut/>
                            </button> */}
                    </ul>


                </nav>
            </header>
            <div className="sidebar">
                <div className='d-flex profile'>
                    <div className='profile-img'>
                        <img src={profile} alt={profile} className='img-fluid' />
                    </div>
                    <span className='profile-text'>
                        <h5>Bikram nahak</h5>
                        <p>Bikramnahak@gmial.com</p>
                    </span>
                </div>
                <ul className='ps-1'>
                    {
                        sidemanus.map((item) => (
                            <li key={item.path} className={`d-flex ${currentPath === item.path ? 'active' : ''}`}>
                                <Link to={item.path} className='text-decoration-none  d-flex w-100'>
                                    <span className='col-2'>{item.icon}</span>
                                    <span className='col-10'>{item.name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}

export default Admin
