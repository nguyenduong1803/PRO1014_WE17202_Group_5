import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Login from "../pages/Admin/Login/Login";
import AddProducts from "../pages/Admin/ManageProduct/AddProducts/AddProducts";
import Profile from "../pages/Admin/UserManager/Profile/Profile";
import UserManager from "../pages/Admin/UserManager/UserManager";
import Register from "../pages/Admin/Register/Register";
import ManagePosts from "../pages/Admin/ManagePosts/ManagePosts";
import ManageProduct from "../pages/Admin/ManageProduct/ManageProduct";
import ManageMasterial from "../pages/Admin/ManageMasterial/ManageMasterial"
import Article from "../pages/Admin/ManagePosts/Article/Article";
import OrderManager from "../pages/Admin/OrderManager/OrderManager";
import OrderDetail from "../pages/Admin/OrderManager/OrderDetail/OrderDetail";
import EditProduct from "../pages/Admin/ManageProduct/EditProduct/EditProduct";
import AddPostDetail from "../pages/Admin/ManagePosts/AddPostDetail/AddPostDetail"
import ProductCategory from "../pages/Admin/ProductCategory/ProductCategory";
import AddCategory from "../pages/Admin/ProductCategory/AddCategory/AddCategory";
import EditCategory from "../pages/Admin/ProductCategory/EditCategory/EditCategory";
export const routerAdmin =[
    {
        component :Dashboard,
        path:"dashboard",
    },
    {
        component :Login,
        path:"dang-nhap",
    },
    {
        component :OrderManager,
        path:"quan-ly-don-hang",
    },
    {
        component :OrderDetail,
        path:"chi-tiet-don-hang",
    },
    {
        component :EditProduct,
        path:"sua-san-pham",
    },
    {
        component :AddPostDetail,
        path:"them-bai-viet",
    },
    {
        component :ProductCategory,
        path:"quan-ly-danh-muc",
    },
    {
        component :AddCategory,
        path:"them-danh-muc",
    },
    {
        component :AddProducts,
        path:"them-san-pham",
    },
    {
        component :EditCategory,
        path:"sua-danh-muc",
    },
    {
        component :Profile,
        path:"chi-tiet-nguoi-dung",
    },
    {
        component :Register,
        path:"dang-ky",
    },
    {
        component :ManagePosts,
        path:"quan-ly-bai-viet",
    },
    {
        component :ManageProduct,
        path:"quan-ly-san-pham",
    },
    {
        component :ManageMasterial,
        path:"quan-ly-vat-lieu",
    },
    {
        component :UserManager,
        path:"quan-ly-nguoi-dung",
    },
    {
        component :Article,
        path:"thong-tin-bai-viet",
    },
]