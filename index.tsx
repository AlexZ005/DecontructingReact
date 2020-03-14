let React = {
    createElement: (tag, props, ...children) => {
    var element = {tag, props: {...props, children}};
    console.log( element );
    return element;
    },
};

const a = (<div className="react-2020">
<h1>Hello, person!</h1>
<p>Yes</p></div>
);

