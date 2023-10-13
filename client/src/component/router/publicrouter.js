import { Cart } from "../../pages/cart/Cart";
import { Homepage } from "../../pages/home/Homepage";

export const PublicRoutes =[
    {
        path:"/",
        component:Homepage,
        isAdmin:true,

    },
    {
        path:"/login",
        component:Homepage,
        isAdmin:true,

    },
    {
        path:"/register",
        component:Homepage,
        isAdmin:true,

    }, {
        path:"/cart",
        component:Cart,
        isAdmin:true,

    },{
        path:"/category",
        component:Cart,
        isAdmin:true,

    }
]