import { NavLink } from "react-router-dom";
import './_menu.scss';

export default function Menu() {
    return (
        <div className="navbuttons">
            <nav>
                <NavLink to="/">
                    <button className="mx-4 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                        Home</button>
                </NavLink>
                <NavLink to="cv">
                    <button className="mx-4 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                        Curriculum Vitae</button>
                </NavLink>
                <NavLink to="portafolio">
                    <button className="mx-4 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:w-full after:origin-bottom after:scale-x-0 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                        Portafolio</button>
                </NavLink>
            </nav>
        </div>
    )
}
