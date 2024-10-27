import React from 'react';
import Link from "next/link";

// single functional component
const Page = () =>{
    return (
        <div>
            <h1>Dashboard Users</h1>

            <ul className={"mt-10"}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <li ><Link className={"text-blue-600 underline bg-amber-200"} href={"/app/(dashboard)/dashboard/users/1"}>User 1</Link></li>
                <li><Link className={"text-blue-600 underline bg-amber-200"} href={"/app/(dashboard)/dashboard/users/2"}>User 2</Link></li>
                <li><Link className={"text-blue-600 underline bg-amber-200"} href={"/app/(dashboard)/dashboard/users/3"}>User 3</Link></li>
                <li><Link className={"text-blue-600 underline bg-amber-200"} href={"/app/(dashboard)/dashboard/users/4"}>User 4</Link></li>

            </ul>
        </div>
    );
}

export default Page;