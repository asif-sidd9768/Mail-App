import { Fragment, useContext } from "react";

import "./MailDetailBtns.css";
import { MailContext } from "../../../contexts/MailContext";
import {
  deleteMailAction,
  toggleMailReadAction,
  toggleMailSpamAction,
  toggleMailStarredAction,
} from "../../../actions/mailActions";

export const MailDetailBtns = ({ email_id, read, isStarred, isSpam }) => {
  const { dispatch } = useContext(MailContext);
  
  const toggleReadMail = () => {
    dispatch(toggleMailReadAction(email_id));
  };

  const deleteMail = () => {
    dispatch(deleteMailAction(email_id));
  };

  const toggleMailStarred = () => {
    dispatch(toggleMailStarredAction(email_id))
  }

  const toggleMailSpam = () => {
    dispatch(toggleMailSpamAction(email_id))
  }

  return (
    <Fragment>
      {read ? (
        <span
          onClick={toggleReadMail}
          className="mail-detail-btn mail-unread-btn"
          title="Mark as Unread"
        >
          <i className="fa-solid fa-envelope"></i>
        </span>
      ) : (
        <span
          onClick={toggleReadMail}
          className="mail-detail-btn mail-read-btn"
          title="Mark as Read"
        >
          <i className="fa-solid fa-envelope-open"></i>
        </span>
      )}
      <span
        onClick={deleteMail}
        className="mail-detail-btn mail-delete-btn"
        title="Delete"
      >
        <i className="fa-solid fa-trash"></i>
      </span>
      {
        isSpam ? <span onClick={toggleMailSpam} className="mail-detail-btn mail-not-spam-btn" title="Mark not spam">
        <i className="fa-solid fa-check"></i>
        </span> : <span onClick={toggleMailSpam} className="mail-detail-btn mail-spam-btn" title="Report Spam">
        <i className="fa-solid fa-exclamation-triangle"></i>
      </span>
      }
      {
        isStarred ? <span onClick={toggleMailStarred} className="mail-detail-btn mail-unstar-btn" title="Mark as Unstarred">
        <i className="fa-regular fa-star-half-stroke"></i>
        </span> : <span onClick={toggleMailStarred} className="mail-detail-btn mail-star-btn" title="Mark as Starred">
        <i className="fa-solid fa-star"></i>
      </span>

      }
    </Fragment>
  );
};
