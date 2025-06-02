import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../../Authentication/Context/AuthContext";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                console.log("User logged out successfully");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    }

    const links = <>
        <li>
            <NavLink to='/' className={({ isActive }) => `font-bold ${isActive ? 'text-primary' : ''}`}>
                Home
            </NavLink>
        </li>

        {/* Applicant see */}
        {
            user && (
                <>
                    <li>
                        <NavLink to='/my-applications' className={({ isActive }) => `font-bold ${isActive ? 'text-primary' : ''}`}>
                            My Applications
                        </NavLink>
                    </li>
                </>
            )
        }

        {/* Recruiter seen */}
        {user && <>
            <li>
                <NavLink to='/add-job' className={({ isActive }) => `font-bold ${isActive ? 'text-primary' : ''}`}>
                    Add Job
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-posted-jobs' className={({ isActive }) => `font-bold ${isActive ? 'text-primary' : ''}`}>
                    My Posted Jobs
                </NavLink>
            </li>
        </>}
        {/* <li>
            <NavLink to='/jobs' className={({ isActive }) => `font-bold ${isActive ? 'text-primary' : ''}`}>
                Jobs
            </NavLink>
        </li> */}
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Career Code</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <button
                        className="btn btn-outline btn-accent"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <NavLink to='/register' className='btn btn-outline btn-accent'>
                            Register
                        </NavLink>
                        <NavLink to='/login' className='btn btn-outline btn-accent ms-2'>
                            Login
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
