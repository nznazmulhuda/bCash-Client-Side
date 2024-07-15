import { useContext } from "react";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function Header() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <header className="bg-primary py-2">
                <div className="flex items-center justify-between container mx-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12">
                        <img src={Logo} alt="Logo" className="w-full h-full" />
                    </div>

                    <h1 className="text-gray-200 font-semibold text-sm md:text-lg">
                        Welcome, {user.name}!
                        <button
                            onClick={() => localStorage.removeItem("token")}
                            className="border px-4 py-1 text-xs rounded-lg bg-primary ml-1 md:ml-3 shadow-xl hover:scale-95 transition-all ease-in"
                        >
                            Logout
                        </button>
                    </h1>
                </div>
            </header>
        </>
    );
}

export default Header;
