import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

function IsLogin({ children }) {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to={"/login"} />;
    }

    return children;
}

IsLogin.propTypes = {
    children: PropTypes.node.isRequired,
};

export default IsLogin;
