import React, { useEffect } from 'react';
import './dashbord.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserorderPro, oredrShowAsync } from '../../Services/Actions/addproductAction';
import { Link, useNavigate } from 'react-router-dom';

function Dashbord() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { userOrder, userOrderDetails } = useSelector(state => state.admin);
    
    
    //count how many users order here
    const user = new Set(userOrder.map(order => `${order.email}`));


    // Calculate the total sales
    const totalSell = userOrder.reduce((acc, sell) => {
        return acc + (sell.subtotal * sell.quantity);
    }, 0);

    const handleShowOrder =(id)=>{
        dispatch(oredrShowAsync(id))
    
    }

    

    if(userOrderDetails){
        navigate('/orders')
    }

    useEffect(() => {
        dispatch(getUserorderPro());
    }, [dispatch]);

    return (
        <>
            <main className='scroll-hidden'>
                <div className='dashbord'>
                    <h1>Dashboard</h1>
                    <div className="cards">
                        <div className="card">
                            <h2>Total Sales</h2>
                            <p>₹{totalSell}</p>
                        </div>
                        <div className="card">
                            <h2>Total Orders Items</h2>
                            <p>{userOrder.length}</p>
                        </div>
                        <div className="card">
                            <h2>Total Users</h2>
                            <p>{user.size}</p>
                        </div>
                    </div>
                    <div className="table-container">
                        <h2>Recent Orders</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>order Date</th>
                                    <th>User</th>
                                    <th>Product Name</th>
                                    <th>Quintity</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='scroll-y'>
                                {
                                    userOrder.map((userdata) => {
                                        return (
                                            <tr>
                                                <td>{userdata.id}</td>
                                                <td>{userdata.orderTime}</td>
                                                <td>{userdata.fname} {userdata.lname}</td>
                                                <td>{userdata.product}</td>
                                                <td>{userdata.quantity}</td>
                                                {
                                                    userdata.status
                                                     ? 
                                                     <td className='text-success'>{userdata.status}</td>
                                                    :
                                                    <td><p className='text-warning'>Panding</p></td>
                                                }
                                               
                                                <td><div className='btn btn-primary'  onClick={()=>handleShowOrder(userdata.id)}>Views</div></td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Dashbord;
