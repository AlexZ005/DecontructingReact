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
17:00 - we need state
18:42 useState at first is not defined, we write a new function which would update state

