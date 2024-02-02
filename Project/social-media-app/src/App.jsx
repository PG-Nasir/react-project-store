import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  let [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : selectedTab === "Features" ? (
            <Features></Features>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
