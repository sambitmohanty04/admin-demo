import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import BlogList from './pages/BlogList';
import AddBlog from './pages/AddBlog';
import BlogCatList from './pages/BlogCatList';
import AddBlogCat from './pages/AddBlogCat';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import ColorList from './pages/ColorList';
import AddColor from './pages/AddColor';
import CatagoryList from './pages/CatagoryList';
import AddCategory from './pages/AddCategory';
import BrandList from './pages/BrandList';
import AddBrand from './pages/AddBrand';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import allProducts from './components/products/allProducts'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/admin' element={<Main />}>
            <Route index element={<Dashboard />} />
            <Route path='enquiries' element={<Enquiries />} />
            <Route path='enquiries' element={<Enquiries />} />
            <Route path='blog-list' element={<BlogList />} />
            <Route path='blog' element={<AddBlog />} />
            <Route path='blog-cat-list' element={<BlogCatList />} />
            <Route path='blog-category' element={<AddBlogCat />} />
            <Route path='orders' element={<Orders />} />
            <Route path='customers' element={<Customers />} />
            <Route path='list-color' element={<ColorList />} />
            <Route path='color-add' element={<AddColor />} />
            <Route path='list-category' element={<CatagoryList />} />
            <Route path='category' element={<AddCategory />} />
            <Route path='brand-list' element={<BrandList />} />
            <Route path='add-brand' element={<AddBrand />} />
            <Route path='product-list' element={<ProductList />} />
            <Route path='add-product' element={<AddProduct />} />
            <Route path='allProducts' element={allProducts} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
