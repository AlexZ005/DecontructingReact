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
