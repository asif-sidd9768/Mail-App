import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { MailContext } from '../../contexts/MailContext';

import "./MailDetail.css"
import { MailDetailBtns } from './MailDetailBtns/MailDetailBtns';
import { NoMailSelected } from '../NoMailSelected/NoMailSelected';

export const MailDetail = () => {
  const { state, dispatch } = useContext(MailContext);
  const location = useLocation()
  const selectedMail = location.pathname === "/trash" ? state.trashList.find((item) => item.email_id === state.selectedItem) : state.filteredList.find((item) => item.email_id === state.selectedItem);

  if (!selectedMail) {
    return <NoMailSelected/>;
  }

  const getIconAndText = () => {
    if(selectedMail.isSpam){
      return <span><i className="fa-solid fa-exclamation-triangle mail-detail-card-spam-status"></i></span>
    }
    if(selectedMail.isStarred){
      return <span><i className="fa-solid fa-star mail-detail-card-starred-status"></i></span>
    }
  }

  return (
    <div className='mail-detail-main-container'>
      {
        location.pathname !== "/trash" && <div className='mail-detail-buttons-container'>
        <MailDetailBtns {...selectedMail} />
      </div>
      }
      <div className='mail-detail-card-container'>
        <div className="mail-detail-card-avatar"><i className="fa-solid fa-user-astronaut mail-detail-card-avatar-icon"></i></div>
        <div className="mail-detail-card-details">
          <div>
            <span className="mail-detail-card-sendername">
              {selectedMail.sender_name}
            </span>
            <span className='mail-detail-card-status-icon'>
              {getIconAndText(selectedMail)}
            </span>
          </div>
          <p className="mail-detail-card-senderemail">{selectedMail.sender_email}</p>
          <p className="mail-detail-card-subject">Subject: {selectedMail.email_subject}</p>
          <p className='mail-detail-card-body'>{selectedMail.email_body}{selectedMail.email_body}</p>
          <p className='mail-detail-card-arrived'>Arrived at: <span className="mail-detail-card-date">{selectedMail.email_date}</span></p>
        </div>
      </div>
    </div>
  );
};
