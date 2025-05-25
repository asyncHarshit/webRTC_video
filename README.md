# webRTC_video

A project for real-time video communication built using WebRTC technology.

## Overview

**webRTC_video** enables peer-to-peer video streaming directly between browsers using the WebRTC API. This project is designed for learning, experimentation, and as a foundation for building custom real-time communication solutions.

## Features

- Peer-to-peer video calling
- Real-time audio and video streaming
- Minimal server-side signaling (if applicable)
- Simple and clean UI (customize as needed)
- Built with modern JavaScript and WebRTC

### Directions

- Open the app in two different browser windows/tabs or devices.
- Start/join a call as instructed by the UI.
- Allow access to your camera and microphone when prompted.

## Project Structure

```
📁 root/
├── 📁 client/                
│   ├── 📁 public/             
│   ├── 📁 src/                 
│   │   ├── 📁 context/
│   │   │   └── SocketProvider.jsx    
│   │   ├── 📁 pages/
│   │   │   ├── Lobby.jsx             
│   │   │   └── Room.jsx
│   │   ├── 📁 service/
│   │   │   └── peer.js               
│   │   ├── App.jsx                    
│   │   ├── main.jsx                  
│   │   └── index.css                 
│   ├── index.html
│   └── vite.config.js
│
├── 📁 server/          
│   ├── index.js             

```

## Technologies Used

## Client (Frontend - React + Vite)

- **SocketProvider.jsx**  
  Manages WebSocket connections and provides socket context to components.

- **Lobby.jsx**  
  UI for users to enter rooms or start calls.

- **Room.jsx**  
  UI where WebRTC video calls happen.

- **peer.js**  
  Handles WebRTC peer connections (offer/answer, ICE candidates, etc.).

- **App.jsx, main.jsx**  
  App root and React entry point.

---

## Server (Backend - Node.js)

- **index.js**  
  WebSocket signaling server to mediate initial connection info between peers.

  **Handles:**
  - Room joining events
  - Relaying WebRTC offer/answer and ICE candidates

## License

This project is licensed under the [MIT License](LICENSE).
