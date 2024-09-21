import './App.css'
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content.jsx";


function App(props) {
  return (
    <>
      <div className='wrapper'>
        <Header/>
        <Sidebar/>
        <Content
          state={props.state}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}/>
      </div>
    </>
  )
}

export default App
