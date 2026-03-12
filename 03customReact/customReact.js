
function render(reactElement,container){

    // const element= document.createElement(reactElement.type);
    // element.innerHTML=reactElement.children;
    // element.setAttribute("href",reactElement.props.href);
    // container.appendChild(element);

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for (const key in reactElement.props) {
        domElement.setAttribute(key, reactElement.props[key])
    }
    container.append(domElement);

}

const createReactElement={
    "type":"a",
    "props":{
        href:"https://google.com",
        target:"blank"
    },
    children:"google.com"
}

const mainContainer = document.getElementById("root");

render(createReactElement,mainContainer)
