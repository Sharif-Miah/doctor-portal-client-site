import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Review from "../pages/Review/Review";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/appointment',
                element: <Appointment />
            },
            {
                path: '/review',
                element: <Review />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    }
])

export default router;