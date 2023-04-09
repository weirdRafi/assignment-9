import React from 'react';

const Blog = () => {
    
    return (
        <div >
            <h1 className='text-center font-bold text-3xl mb-5'>Q and A</h1>
            <div className='border m-5 p-5 bg-gray-400 rounded'>
            <h1 className='text-3xl'>Question:  When Should use context api?</h1>
            Ans: when some data needs to be accessible by many components at different nesting levels.
            </div>
            <div className='border m-5 p-5 bg-gray-400 rounded'>
            <h1 className='text-3xl'>Question: What is Custom hook?</h1>
            Ans: Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. 
            </div>
            <div className='border m-5 p-5 bg-gray-400 rounded'>
            <h1 className='text-3xl'>Question: what is UseRef?</h1>
            Ans: useRef is a built-in React hook that accepts one argument as the initial value and returns a reference 
            </div>
            <div className='border m-5 p-5 bg-gray-400 rounded' >
            <h1 className='text-3xl'>Question: what is useMemo?</h1>
            Ans: useMemo() is a function that returns a memoized value of a passed in resource-intensive function
            </div>
        </div>
    );
};

export default Blog;