import { Fragment, useContext } from "react";
import { MailContext } from "../contexts/MailContext";

import "../styles/Spam.css";
import MasterList from "../components/MasterList/MasterList";
import { MailDetail } from "../components/MailDetail/MailDetail";

export const Trash = () => {
  const { state } = useContext(MailContext);

  return (
    <div className="mails-container">
      <div className="mail-list-container">
        <MasterList mailsList={state.trashList} />
      </div>
      <div className="mail-detail-container">
        <MailDetail />
      </div>
    </div>
  );
};
