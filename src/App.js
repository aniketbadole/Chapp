import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Login from "./components/Login";
import UsernameContextProvider from "./Contexts/Username";
import Chat from "./components/Chat";

function App() {
  return (
    <main className="App">
      <UsernameContextProvider>
        <Header />
        <Router>
          <Login path="/" />
          <Chat path="/chat" />
        </Router>
      </UsernameContextProvider>
    </main>
  );
}

export default App;
