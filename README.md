# This is the code from "Deconstructing React || Tejas Kumar" video

## Commands executed to start project:
- adding TypeScript and parcek
yarn add typescript parcel -D
- initializing project
yarn tsc -init
- Modify compilerOptions section in tsconfig.json
"jsx": "react"
"strict": false
- starting the server on port 8080
yarn parcel index.html -p 8080 #default port is 1234

4:33 - 8:00 log to console, we output args

8:00 - 9:41 log to console a tree, we output a "virtual DOM" (an object with childrens)

9:41 - 11:05 prepare App and detect it as a function

"const a" is a react element, we make from it a React component by making from it a function, we call it App
hardcoding App as function by using typeof to return function props

11:05 - 17:00  making a renderer, to show recursevly elements from "virtual DOM"

Quote: 12:05 "Any element in the DOM with an ID, the ID is also a global javascript variable", so you could call window.app instead document.querySelector('#app')

Joke: You should turn off Errors and then your app would not have bugs

17:00 - we need a state

18:42 useState at first is not defined, we write a new function which would update state
Quote: "you have initial state in your argument and then you return a tuple with the state and the setter"
Joke: "ah, you can tell I am on top of my game today"

20:40 we need to rerender, we call rerender when we call setState, but it does appendChild
we need to clear the root and re-add the route

21:35 we adding the state, but immediatelly remounting it back, that is how hooks work, to fix this we need a closure
react hooks work with closures and prototype examples

Quote: 22:05 "closure is when a function scope encloses over an inside function scope"

Quote: 22:16 every javascript module is a closure and index.tsx too

23:26 we have two 'moving parts' for state, a field and count buttons, from here we write store for states

26:35 this is where closure comes in, we wrote logic to udpate state

27:43 on renderer we reset cursor, this is where we start to see changes visually, applauses
Quote: 28:10 if you have 
28:16-29:52 the example below is completely unpredictable, this is why we have rules and hooks:
    let count = 423423;
    let setCount = () => {};
    if (Math.random () > 0.5) {
        [count, setCount] = useState(0);
    }

React would throw if we do this

30:14 - 37:05 concurrent mode
async rendering is when React stops, waits and then continues...
Quote: 30:40 The way team came on a lot of fire for the way they implementeded it, because some people say they 'abused javascript' specification by throwing not errors, but promises.

The component trees are super deep, but we need to respond with something on the top.
This is how try/catch works, you can throw an error anywhere and catch anywhere at it just knows,
this emulates functional programming paradigm called algebraic effects - a way to respond to things deep inside globally.

This code inside App is used to suspense for data fetching in concurrent mode.
React exposes a primitive called craeteResource (a function which wraps a promise):

```javascript
    const  dogPhotoUrl = createResouce(() => fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(payload => payload.message), 'dogPhoto');
```

We implement craeteResource as fetching alone would return "Cannot read property 'children' of undefined".

```javascript
const promiseCache = new Map();

const createResouce = (thingThatReturnsSomething, key) => {
    if (promiseCache.has(key)){
        return promiseCache.get(key);
    }
    throw {promise: thingThatReturnsSomething(), key};
}
```
Because this is a promise, we expect to go and fetch it first, but not now.
Since App function gets called at createElement, this is why try/catch implemented there.

```javascript
let React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag == "function"){
            try {
            return tag(props);
            } catch ({promise, key}) {
                promise.then(data => {
                    console.log(promise);
                    promiseCache.set(key,data);
                    rerender();
                })
                return {tag: 'h1', props: {children: ['I AM LOADING']}}
            }
        }
```

Tejas says we implemented three pillars of how React works.

There is a whole topic of reconciler , bread first algoright that searches and detects changes
The purpose was to learn, building is learning.
Huge shot out THANKS to Tejas for presenting!