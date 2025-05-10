import { NavLink, useNavigate, useLocation } from "react-router-dom"

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate()
    const isMenuPage = location.pathname.startsWith('/Menu');

    return(
        <header className="flex flex-col justify-between items-center xl:flex-row">
            <img src="./icons_assets/Logo.svg" className="p-4 cursor-pointer" onClick={()=>navigate('')}></img>
                <nav className="flex font-serif justify-end flex-col space-y-1 xl:flex-row xl:space-x-4 xl:pr-5 ">
                    <NavLink to='/' className={({ isActive }) =>isActive ? "font-bold text-center" : "text-center"}>Home</NavLink>
                    <NavLink to='/Menu-Food' className={({ isActive }) =>isActive || isMenuPage ? "font-bold text-center" : "text-center"}>Menu</NavLink>
                    <NavLink to='/Reservation' className={({ isActive }) =>isActive ? "font-bold text-center" : "text-center"}>Reservation</NavLink>
                    <NavLink to='/Order' className={({ isActive }) =>isActive ? "font-bold text-center" : "text-center"}>Order</NavLink>
                </nav>
        </header>
    )
}

export default Navbar