import { Outlet } from "react-router-dom";
import Header from "../components/Header"

function DefaultLayout() {
    return <>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
    </>
}

export default DefaultLayout