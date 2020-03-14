let React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag == "function"){
            return tag(props);
        }
    var element = {tag, props: {...props, children}};
    console.log( element );
    return element;
    },
};

const App = () => (<div className="react-2020">
<h1>Hello, person!</h1>
<p>Yes</p></div>
);

const renderer = (reactElement, container) => {
    if(['string','number'].includes(typeof reactElement)){
        container.appendChild(document.createTextNode(String(reactElement)));
        return;
    }
    const actualDomElement = document.createElement(reactElement.tag);
    if (reactElement.props) {
        Object.keys(reactElement.props).filter(p => p != 'children').forEach(p => actualDomElement[p] = reactElement.props[p]);
    }
    if (reactElement.props.children) {
        reactElement.props.children.forEach(child => renderer(child, actualDomElement));
    }
    //append root to the container
    container.appendChild(actualDomElement);

}
//windows.app the id is also a variable
renderer(<App />, document.querySelector('#app'));