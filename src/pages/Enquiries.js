import React from 'react'
import { Table } from "antd"

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
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "Mobile",
        dataIndex: "mobile",
    },
    {
        title: "Staus",
        dataIndex: "status",
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

const Enquiries = () => {
    return (
        <>
            <div>
                <h3 className="mb-4 title">Enquiries</h3>
                <div>
                    <Table columns={columns} dataSource={data1} />
                </div>
            </div>
        </>
    )
}

export default Enquiries