import { Route, Routes } from "react-router-dom"
import { PublicRoutes } from "./publicrouter"

export const RouteConfig = ()=>{
    return(
        <Routes>
         {PublicRoutes.map((route)=>{
            const {path,component,isAdmin} = route;
            return <Route path={path} Component={component} ></Route>
         })}

        </Routes>
    )
}