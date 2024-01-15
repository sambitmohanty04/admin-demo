import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUserAdd, AiOutlineBgColors } from 'react-icons/ai'
import { SiBrandfolder } from 'react-icons/si'
import { BiCategoryAlt } from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import { FaClipboardList, FaBloggerB, FaBlog, FaUserAlt} from 'react-icons/fa'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Main = () => {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className='sliderBg'>
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className="sm-logo">MO</span>
            <span className="lg-logo">Mo Admin</span>
          </h2>
        </div>
        <Menu
          className='menuBar'
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === 'signout') {

            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className="fs-4" />,
              label: 'Dashboard',
            },
            {
              key: 'all-products',
              
              icon: <MdOutlineProductionQuantityLimits className="fs-4" /> ,
              label: 'AllProducts',
            },
            {
              key: 'customers',
              icon: <AiOutlineUserAdd className="fs-4" />,
              label: 'Customers',
            },
            {
              key: 'Catalog',
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: 'Catalog',
              children: [
                {
                  key: 'add-product',
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: 'Product List',
                },
                {
                  key: 'add-brand',
                  icon: <SiBrandfolder className="fs-4" />,
                  label: 'Add Brand',
                },
                {
                  key: 'brand-list',
                  icon: <SiBrandfolder className="fs-4" />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: 'Add Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: 'Category List',
                },
                {
                  key: 'color-add',
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: 'Add Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: 'Color List',
                },
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className="fs-4" />,
              label: 'Orders',
            },
            {
              key: 'blogs',
              icon: <FaBloggerB className="fs-4" />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <FaBlog className="fs-4" />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBloggerB className="fs-4" />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <FaBlog className="fs-4" />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-cat-list',
                  icon: <FaBloggerB className="fs-4" />,
                  label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className="fs-4" />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className='d-flex justify-content-between ps-1 pe-5 header'
          style={{
            padding: 0,
            //background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'collapsibleMenu',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative notificationIcon'>
              <IoMdNotificationsOutline className="fs-4" />
              <span className="badge rounded-circle p-1 position-absolute text-center">15</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <div className='userImage'>
                <FaUserAlt className='userImgIcon'/>
              </div>
              <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <h5 className='mb-0'>Sambit</h5>
                <p className='mb-0'>sb.design101@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          
            <Outlet />
          
        </Content>
      </Layout>
    </Layout>
  );
};
export default Main;