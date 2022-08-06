import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AddProducts from "../pages/Admin/ManageProduct/AddProducts/AddProducts";
import Profile from "../pages/Admin/UserManager/Profile/Profile";
import UserManager from "../pages/Admin/UserManager/UserManager";
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
import PageNotFound from "../pages/Site/PageNotFound/PageNotFound";
import ManageTable from "../pages/Admin/ManageTable/ManageTable";
import ManageStaff from "../pages/Admin/ManageStaff/ManageStaff";

export const routerAdmin =[
    {
        component :Dashboard,
        path:"dashboard",
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
        path:"sua-danh-muc/:name",
    },
    {
        component :Profile,
        path:"chi-tiet-nguoi-dung/:name",
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
        component :ManageStaff,
        path:"quan-ly-nhan-vien",
    },
    {
        component :Article,
        path:"thong-tin-bai-viet",
    },
    {
        component :ManageTable,
        path:"quan-ly-ban",
    },
    {
        component :PageNotFound,
        path:"*",
    },
]
