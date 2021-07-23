import React from "react";
import Navbar from "./Navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
    const { loginWithRedirect } = useAuth0();
    return (
        <>
            <button onClick={() => loginWithRedirect()}>Log In</button>
            <Navbar />
        </>
    );

}
