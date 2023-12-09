import Auth from "../pages/auth/auth";
import Home from "../pages/home/Home";

//create private router
const publicRoute = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/auth",
        element: <Auth />
    }
];

// export
export default publicRoute;