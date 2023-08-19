import { Component } from "solid-js";
import Footer from "../components/navigation/Footer";
import Nav from "../components/navigation/Nav";
import { useLocation, useParams } from "@solidjs/router";

interface MainLayoutProps {
    children: any;
}

const MainLayout:Component<MainLayoutProps> = ({children}) => {
    const location = useLocation();

    return (
        <>
            <Nav />
            {children}
            {location.pathname === '/login' || location.pathname === '/register' ? null :<Footer />}
        </>
    )
}

export default MainLayout;