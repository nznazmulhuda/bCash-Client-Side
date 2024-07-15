import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

function IsAgent({ children }) {
    const { user, isLoading } = useContext(AuthContext);
    const role = user.role;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (role !== "agent") {
        return <Navigate to={"/login"} />;
    }

    return children;
}

IsAgent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default IsAgent;
