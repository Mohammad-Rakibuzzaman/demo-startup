import React from 'react';

// single functional component
const Layout = ({ children } : { children : React.ReactNode }) => {
    return (
        <div>
            <h1 className={"text-blue-400"}>DASHBOARD FUNCTIONALITY</h1>
            {children}
        </div>
    );
}

export default Layout;