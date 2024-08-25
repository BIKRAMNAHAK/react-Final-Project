import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { updateDataAsync, updateImg } from '../../Services/Actions/addproductAction';

function EditProducts() {
    const { product, isEdit } = useSelector(state => state.admin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editData, setEditData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
    });

    useEffect(() => {
        if (product) {
            setEditData(product);
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault(); 
        await dispatch(updateDataAsync(editData));
        navigate('/products');
    };

    const handleUpadetimg = async(e)=>{
        const file = e.target.files[0];
        try {
            const url = await dispatch(updateImg(file));
            setEditData({ ...editData, image: url });
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }

    return (
        <>
            <main>
                <Container className='m-0'>
                    <h2 className='bg-warning py-3 ps-2'>Edit Product</h2>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group controlId="productName" className="mb-3">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                name="name"
                                value={editData.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="productDescription" className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter product description"
                                name="description"
                                value={editData.description}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="productPrice" className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter product price"
                                name="price"
                                value={editData.price}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="productCategory" className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product category"
                                name="category"
                                value={editData.category}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="productImage" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleUpadetimg} // Implement this if handling images
                            />
                        </Form.Group>

                        <Button variant="primary" className='mt-2 px-5' type="submit">
                            Update
                        </Button>
                    </Form>
                </Container>
            </main>
        </>
    );
}

export default EditProducts;
