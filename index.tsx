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

<App />