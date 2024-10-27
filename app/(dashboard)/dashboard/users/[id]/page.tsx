import React from 'react';

// single functional component
const Page = ({ params }: { params: { id: string }}) => {

    const { id } = params;

    return (
        <div className={"text-3xl"}>
            User profile: {id}
        </div>
    );
}

export default Page;