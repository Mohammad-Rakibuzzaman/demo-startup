import React from 'react';

// single functional component
const Layout = ({ children } : { children : React.ReactNode }) => {
    return (
        <div>
            <h1 className={"text-green-1000"}>NAVBAR</h1>
            {children}
        </div>
    );
}

export default Layout;