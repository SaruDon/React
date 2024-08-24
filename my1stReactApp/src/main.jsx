import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import File from './fileStructure.jsx'


const anotherUser = "Sarvesh"


// this creates a element which we can cal and return as jsx
/*

It is similar to how we created a custom element in createReact file

*/
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' }, 
  'click me to access link',
  anotherUser
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <File/> */}
    {reactElement}
  </StrictMode>,
)
