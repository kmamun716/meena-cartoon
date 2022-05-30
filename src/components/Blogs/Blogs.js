import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    const tags = ["article","aside","details","figcaption","figure","header","footer","main","mark","nav","section","summery","time"];
    return (
        <div className='my-4'>
            <h2 className='text-center text-decoration-underline'>Our Blog</h2>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q: Purpost to use React “useContext” Hooks</Accordion.Header>
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
                    <Accordion.Header>Q: What is Semantic Tag?</Accordion.Header>
                    <Accordion.Body>
                        Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.
                        A semantic element clearly describes its meaning to both the browser and the developer.
                        Many web sites contain HTML code like: &lt;div id="nav"&gt; &lt;div class="header"&gt; &lt;div id="footer"&gt; to indicate navigation, header, and footer.

                        In HTML there are some semantic elements that can be used to define different parts of a web page: 
                        <ul>
                            {
                                tags.map(tag=><li key={tag}>&lt;{tag}&gt;</li>)
                            }
                        </ul>
                        The benefit of writing semantic HTML stems from what should be the driving goal of any web page: the desire to communicate. By adding semantic tags to your document, you provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;