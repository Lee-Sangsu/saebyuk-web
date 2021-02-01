import React from 'react';
import SearchNewBook from 'components/organisms/SearchNewBook';

const ReqOrRegBook = () => {
    return (
        <div style= {{
            display:'flex',
            width:'100%',
            height:window.innerHeight
        }}>
            
            {/*vertical line*/}
            
            {/* Admin User Check */}
            <SearchNewBook />
        </div>
    )
};

export default ReqOrRegBook;