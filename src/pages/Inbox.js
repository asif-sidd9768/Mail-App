import { useContext } from "react";
import { MailContext } from "../contexts/MailContext";

import "../styles/Inbox.css";
import MasterList from "../components/MasterList/MasterList";
import { MailDetail } from "../components/MailDetail/MailDetail";
import { getMailsList } from "../utils/filterUtil";

export const Inbox = () => {
  const { state, dispatch } = useContext(MailContext);

  const inboxMails = getMailsList(state, false)
  return (
    <div className="mails-container">
      <div className="mail-list-container">
        <MasterList mailsList={inboxMails} />
      </div>
      <div className="mail-detail-container">
        <MailDetail />
      </div>
    </div>
  );
};
