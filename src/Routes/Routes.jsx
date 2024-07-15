import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import IsLogin from "./IsLogin";
import {
    CashIn,
    CashOut,
    History,
    Home,
    SendMoney,
    AgentHistory,
    Management,
    Monitoring,
    UserManagement,
    Login,
    Registration,
} from "../Pages";
import IsAdmin from "./IsAdmin";
import IsAgent from "./IsAgent";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <IsLogin>
                        <Home />
                    </IsLogin>
                ),
            },
            {
                path: "/cashIn",
                element: (
                    <IsLogin>
                        <CashIn />
                    </IsLogin>
                ),
            },
            {
                path: "/cashOut",
                element: (
                    <IsLogin>
                        <CashOut />
                    </IsLogin>
                ),
            },
            {
                path: "/history",
                element: (
                    <IsLogin>
                        <History />
                    </IsLogin>
                ),
            },
            {
                path: "/sendMoney",
                element: (
                    <IsLogin>
                        <SendMoney />
                    </IsLogin>
                ),
            },
            {
                path: "/agentHistory",
                element: (
                    <IsLogin>
                        <IsAgent>
                            <AgentHistory />
                        </IsAgent>
                    </IsLogin>
                ),
            },
            {
                path: "/management",
                element: (
                    <IsLogin>
                        <IsAgent>
                            <Management />
                        </IsAgent>
                    </IsLogin>
                ),
            },
            {
                path: "/monitoring",
                element: (
                    <IsLogin>
                        <IsAdmin>
                            <Monitoring />
                        </IsAdmin>
                    </IsLogin>
                ),
            },
            {
                path: "/userManagement",
                element: (
                    <IsLogin>
                        <IsAdmin>
                            <UserManagement />
                        </IsAdmin>
                    </IsLogin>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Registration />,
            },
        ],
    },
]);

export default Routes;
