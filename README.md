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



