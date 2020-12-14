import React from "react";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <div className="layout">
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
