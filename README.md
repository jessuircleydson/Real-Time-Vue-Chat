# Realtime Vue Chat
![Badge](https://img.shields.io/static/v1?label=SERVER&message=NODE.JS&color=339933&style=flat-square&logo=nodejs)
![Badge](https://img.shields.io/static/v1?label=REALTIME&message=SOCKET.IO&color=010101&style=flat-square&logo=socket)
![Badge](https://img.shields.io/static/v1?label=CLIENT&message=VUE.JS&color=4FC08D&style=flat-square&logo=vuejs)
![Badge](https://img.shields.io/static/v1?label=DEPLOY&message=HEROKU&color=430098&style=flat-square&logo=heroku)


### 🚧 CODING... 🚧

This is a Realtime Vue Chat build with NodeJs, Socket.io and VueJs.

### Run the project

Clone the repository
> git clone https://github.com/jessuircleydson/Real-Time-Vue-Chat.git

Install the Node server dependences
> cd projectpath/ && npm install

Install the VueJs client dependences
> cd client && npm install

Inside the client path run `server` to start the Vue development mode or `build` to generate the production path
The Node serve always point to the production path, so if you want to see in production mode you need to run the `build` command instead of `server`
> npm run server or npm run build

The server always point to the VueJs production path, so you need to generate
> cd server && node index.js

### Features

- [x] Send global message
- [x] Visually separate my own messages from the others
- [ ] Notify when an user logout
- [ ] Notify when an user login
- [x] Set nickname
- [ ] Send private messaging
- [ ] Show who's online
- [ ] Add who's typing

## Heroku APP
https://real-time-vue-chat.herokuapp.com/
