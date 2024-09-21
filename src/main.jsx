import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import store from "./Redux/state.js"

// addPost("samurai")

let rerenderEntireTree = (state) => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App state={state} addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)}/>
      </BrowserRouter>
    </StrictMode>,
  )
}
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)