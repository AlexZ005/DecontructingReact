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

const App = () => {
    const [name, setName] = useState("person");
    return (
        <div className="react-2020">
        <h1>Hello, {name}!</h1>
        <input value={name} onchange={e => setName(e.target.value)} type=text placeholder="name" />
        <p>Yes</p></div>
);
};

const useState = (initialState) => {
    let state = initialState;
    const setState = (newState) => (state = newState);

    return [state, setState]
}

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

const rerender = () => {
    renderer(<App />, document.querySelector('#app'));
}
//windows.app the id is also a variable
renderer(<App />, document.querySelector('#app'));