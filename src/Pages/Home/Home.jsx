import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Header from "../../Components/Shared/Header";

function Home() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Header />
            
        </>
    );
}

export default Home;
