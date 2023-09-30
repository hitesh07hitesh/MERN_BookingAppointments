import Home from "../pages/Home"
import Service from "../pages/Services"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import Doctors from "../pages/Doctors/Doctors"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import { Routes, Route } from "react-router-dom"

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor:id" element={<DoctorDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
        </Routes>
    )
}

export default Routers
