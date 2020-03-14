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

