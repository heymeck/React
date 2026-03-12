import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return ( 
    <div>
        <h1>Custom App</h1>
    </div>
    )
}

const anotherElement = (
    <a href='https://www.google.com' target='_blank'>visit google</a>
)

// creating a react element function
const ReactElement={
    "type":"a",
    "props":{
        href:"https://google.com",
        target:"blank"
    },
    children:"google.com"
}

//  creating react element according to the react using React.createElement() method


const SecondReactElement=React.createElement('a',{href:"https://google.com",target:"blank"},"Click me to visit google",{username},
    {/*here the username is getting imported with the App.jsx file */})

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App/>
    SecondReactElement
    // anotherElement
    // <MyApp/>
    // MyApp()  // can also me called like this
)
