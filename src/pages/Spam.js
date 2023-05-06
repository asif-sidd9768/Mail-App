import { Fragment, useContext, useEffect } from "react";
import { MailContext } from "../contexts/MailContext";

import "../styles/Spam.css";
import MasterList from "../components/MasterList/MasterList";
import { MailDetail } from "../components/MailDetail/MailDetail";
import { getMailsList } from "../utils/filterUtil";

export const Spam = () => {
  const { state, dispatch } = useContext(MailContext);

  const spamMails = getMailsList(state, true)
  return (
    <div className="mails-container">
      <div className="mail-list-container">
        <MasterList mailsList={spamMails} />
      </div>
      <div className="mail-detail-container">
        <MailDetail />
      </div>
    </div>
  );
};
