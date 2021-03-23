import React from 'react';
import {Link} from 'react-router-dom';
const TestPage=()=>{
    return(
        <div>
            <Link to='/'>
            <button>Go to main page</button>
            </Link>
        </div>
    )
}

export default TestPage;