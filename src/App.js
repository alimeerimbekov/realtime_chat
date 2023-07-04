import {useContext} from "react";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import './styles/style.scss'
import {CustomContext} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader/Loader";

function App() {


    const {auth} = useContext(CustomContext)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
