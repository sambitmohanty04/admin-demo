import React from 'react'
import { Table } from "antd"
import {FaEdit, FaRegTrashAlt} from 'react-icons/fa'

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
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
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </>
    )
}

export default ProductList