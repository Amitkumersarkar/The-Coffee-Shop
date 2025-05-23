import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCards from "../Banner/CoffeeCards";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <CoffeeCards />,
                        loader: () => fetch('../coffees.json'),
                    },
                    {
                        path: '/category/:category',
                        element: <CoffeeCards />,
                        loader: () => fetch('../coffees.json'),
                    },
                ]

            },
            {
                path: '/coffees',
                element: <Coffees></Coffees>,
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
]);
export default router;