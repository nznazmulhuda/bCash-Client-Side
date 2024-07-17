import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Header from "../../Components/Shared/Header";
import { Link, Outlet } from "react-router-dom";

function Home() {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Header />

            <div className="bg-[#424242] text-white font-bold flex items-center justify-center gap-2 py-4">
                <h1 className="text-xl md:text-2xl">Total money: </h1>
                <p className="text-xl md:text-2xl">{user.totalMoney}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 container mx-auto mt-5 lg:mt-10 gap-2 lg:gap-10 mb-4 md:mb-8">
                <Link to={"/sendMoney"}>
                    <div className="bg-[#424242] text-white font-bold flex items-center justify-center flex-col gap-2 py-4 rounded-md">
                        <h1 className="text-xs md:text-sm lg:text-lg">
                            Send Money
                        </h1>
                    </div>
                </Link>

                <Link to={"/cashIn"}>
                    <div className="bg-[#424242] text-white font-bold flex items-center justify-center flex-col gap-2 py-4 rounded-md">
                        <h1 className="text-xs md:text-sm lg:text-lg">
                            Cash In
                        </h1>
                    </div>
                </Link>

                <Link to={"/cashOut"}>
                    <div className="bg-[#424242] text-white font-bold flex items-center justify-center flex-col gap-2 py-4 rounded-md">
                        <h1 className="text-xs md:text-sm lg:text-lg">
                            Cash Out
                        </h1>
                    </div>
                </Link>

                <Link to={"/history"}>
                    <div className="bg-[#424242] text-white font-bold flex items-center justify-center flex-col gap-2 py-4 rounded-md">
                        <h1 className="text-xs md:text-sm lg:text-lg">
                            History
                        </h1>
                    </div>
                </Link>
            </div>

            <div className="container mx-auto">
                <Outlet />
            </div>
        </>
    );
}

export default Home;
