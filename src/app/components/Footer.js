import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="bg-gradient-to-r from-blue-700 to-slate-900 text-white px-4 h-16 flex items-center justify-center">
           <p className="text-center">Copyright &copy;{currentYear} Fund Spark - All Rights Reserved</p>
        </footer>
    )
}

export default Footer