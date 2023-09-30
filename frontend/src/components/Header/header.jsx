
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi"

const navLinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/doctor',
        display: 'Find a doctor'
    },
    {
        path: '/service',
        display: 'Service'
    },
    {
        path: '/contact',
        display: 'Contact'
    }
];

const Header = () => {
    return (
        <header className="header flex items-center">
            <div className="container ">
                <div className="flex items-center justify-between">
                    {/* logo___logo */}
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="navigation">
                    <ul className="menu flex items-center gap-[2.7rem]">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.path}
                                    className={(navClass) =>
                                        navClass.isActive
                                            ? "text-primaryColor text-16px leading-7 font-600"
                                            : "text-primaryColor text-16px leading-7 font-500 hover:text-primaryColor"
                                    }
                                >
                                    {link.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        <Link to="/">
                            <figure className="w-35 h-35 rounded-full">
                                <img src={userImg} className="w-full rounded-full" alt="" />
                            </figure>
                        </Link>
                    </div>
                    <Link to="/Login">
                        <button className="bg-primaryColor hover:bg-primaryColor-dark text-white py-2 px-6 font-semibold rounded-full flex items-center justify-center h-12">
                            Login
                        </button>
                    </Link>
                    <span className="md:hidden">
                        <BiMenu className="w-6 h-6 cursor-pointer" />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;


