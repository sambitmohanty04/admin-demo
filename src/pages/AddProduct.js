import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const AddProduct = () => {

    const [desc, setDesc] = useState('');

    const handleDesc = (e) => {
        setDesc(e)
    }

    return (
        <>
            <div>
                <h3>Add Product</h3>
                <div>
                    <form>
                        <CustomInput type='text' label='Enter Product Title' />
                        <ReactQuill className='mt-3' theme="snow" name="description"
                            value={desc} onChange={(e) => { handleDesc(e) }} />
                        <CustomInput type='number' label='Enter Product Price'
                            className='mt-3' />
                        <select name="category" className="form-control py-3 mt-3">
                            <option>Select Product Category</option>
                        </select>
                        <select name="category" className="form-control py-3 mt-3">
                            <option>Select Product Brand</option>
                        </select>
                        <select name="category" className="form-control py-3 mt-3">
                            <option>Select Product Color</option>
                        </select>
                        <div className="mb-4">
                            <CustomInput type='number' label='Enter Product Quantity' />
                        </div>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Dragger>
                        <button className="btn btn-success border-0 rounded-3 my-5"
                            type="submit">Add Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddProduct