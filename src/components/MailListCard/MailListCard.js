import { useContext } from "react"
import { MailContext } from "../../contexts/MailContext"

import "./MailListCard.css"
import { HighlightedString } from "../HighlightedString/HighlightedString"

export const MailListCard = ({email_id, email_subject, sender_name,sender_email, email_date, read}) => {
  const { state, dispatch } = useContext(MailContext)

  return (
    <div className={`mail-list-card-container ${email_id === state.selectedItem ? 'mail-list-card-selected' : ""} ${read ? "mail-list-card-read" : ""} `} onClick={() => dispatch({type:"SET_SELECTED_ITEM", payload: email_id})}>
      <div className="mail-list-card-avatar"><i className="fa-solid fa-user-astronaut mail-list-card-avatar-icon"></i></div>
      <div className="mail-list-card-details">
        <div><span className="mail-list-card-sendername">{sender_name}</span> <span className="mail-list-card-date">{email_date}</span></div>
        <p className="mail-list-card-senderemail">{sender_email}</p>
        <p className="mail-list-card-subject"><HighlightedString text={email_subject} substring={state.searchTerm} /></p>
        {/* <p className="mail-list-card-subject">{email_subject}</p> */}
      </div>
    </div>
  )
}