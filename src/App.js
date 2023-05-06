import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { MailContext } from "./contexts/MailContext";
import { Inbox } from "./pages/Inbox";
import { Spam } from "./pages/Spam";
import { Trash } from "./pages/Trash";
import "./styles.css";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { MailDetail } from "./components/MailDetail/MailDetail";

export default function App() {

  return (
    <div className="App main-container">
      <div className="side-menu-container">
        <SideMenu />
      </div>
      <div className="main-content-container">
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </div>
  );
}
