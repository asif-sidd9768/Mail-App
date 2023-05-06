import { Fragment, useContext, useEffect } from "react";
import { MailContext } from "../contexts/MailContext";

import "../styles/Spam.css";
import MasterList from "../components/MasterList/MasterList";
import { MailDetail } from "../components/MailDetail/MailDetail";

export const Spam = () => {
  const { state, dispatch } = useContext(MailContext);

  const spamMails = state.inboxList.filter(({isSpam}) => isSpam)
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
