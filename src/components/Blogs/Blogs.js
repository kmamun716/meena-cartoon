import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='my-4'>
            <h2 className='text-center text-decoration-underline'>Our Blog</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Purpost to use React “useContext” Hooks</Accordion.Header>
                    <Accordion.Body>
                        React context is an essential tool for every React developer to know.
                        React context allows us to share data (state) across our components more easily.
                        React context is great when we are passing data that can be used in any component in our application.
                        React context helps us avoid the problem of props drilling.Context is an API that is built into React, starting from React version 16.This means that we can create and use context directly by importing React in any React project. <br />
                        There are four steps to using React context:
                        <ol>
                            <li>Create context using the createContext method.</li>
                            <li>Take your created context and wrap the context provider around your component tree.</li>
                            <li>Put any value you like on your context provider using the value prop.</li>
                            <li>Read that value within any component by using the context consumer.</li>
                        </ol>
                        Note:Only the components mentioned within the Provider(MarksContextProvider) and their children can modify the states using Consumer(MarksContextConsumer).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;