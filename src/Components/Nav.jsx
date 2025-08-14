import { NavLink} from "react-router-dom";

function Nav(){

    return (
        <div className="py-4">
                <ul className="flex items-center justify-center gap-10 text-2xl font-thin">
                    <li><NavLink className={(e)=> e.isActive ? "text-red-600" : ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={(e)=> e.isActive ? "text-red-600" : ""} to='/about'>About</NavLink></li>
                   
                </ul>
        </div>
    )

}


export default Nav;