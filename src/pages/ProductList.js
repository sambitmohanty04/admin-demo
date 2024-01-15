import React from 'react'
import { Table } from "antd"
import {FaEdit, FaRegTrashAlt} from 'react-icons/fa'

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Image",
        dataIndex: "name",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Category",
        dataIndex: "name",
    },
    {
        title: "Price",
        dataIndex: "name",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: 32,
        staus: `London, Park Lane no. ${i}`,
    });
}

const ProductList = () => {
    return (
        <>
            <div>
                <h3 className="mb-4 title">Product List</h3>
                <div>
                    <table class="table productList">
                        <thead>
                            <tr>
                            <th scope="col">Srl no</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td> 
                                <td>Otto</td>
                                <td className='productList-btn'>
                                <button type="button" class="btn btn-info">view</button>
                                <button type="button" class="btn btn-warning">Edit</button>
                                <button type="button" class="btn btn-danger">Delete</button>
                                </td>                   
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductList