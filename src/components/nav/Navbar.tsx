import { NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <ul className="flex h-20 bg-gray-900 justify-between w-full items-center fixed p-10">
            <li className="text-3xl text-white font-semibold cursor-pointer transition hover:scale-105">
                <NavLink to={""}>Home</NavLink>
            </li>
            <li className="text-3xl text-white font-semibold cursor-pointer transition hover:scale-105">
                <NavLink to={"/games"}>Games</NavLink>
            </li>
            {localStorage.getItem("gamer_token") !== null ?
                <li>
                    <button
                        className="text-3xl text-white font-semibold cursor-pointer transition hover:scale-105 "
                        onClick={() => {
                            localStorage.removeItem("gamer_token")
                            navigate("/login")
                        }}
                    >
                        Logout
                    </button>
                </li>
            :   <>
                    <li>
                        <NavLink
                            to={""}
                            className="text-2xl text-white font-semibold cursor-pointer transition hover:scale-105 "
                        >
                            Login
                        </NavLink>{" "}
                        transition hover:scale-105
                    </li>
                    <li>
                        <NavLink
                            to={""}
                            className="text-2xl text-white font-semibold cursor-pointer transition hover:scale-105 "
                        >
                            Register
                        </NavLink>
                    </li>
                </>
            }
        </ul>
    )
}
