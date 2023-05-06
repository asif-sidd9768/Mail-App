import React, { Fragment, useContext, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MailContext } from '../../contexts/MailContext';
import { MailListCard } from '../MailListCard/MailListCard';

import "./MasterList.css"
import { mailSearchAction } from '../../actions/mailActions';
import { NoMailList } from '../NoMailList/NoMailList';
import { MailFilters } from '../MailFilters/MailFilters';

const MasterList = ({mailsList}) => {
  const { state, dispatch } = useContext(MailContext)
  const location = useLocation()
  
  const handleMailSearch = (event) => {
    dispatch(mailSearchAction(event.target.value))
  }

  if(mailsList.length === 0){
    return <div className='master-list-main-container'>
      <NoMailList />
     </div>
  }

  const filteredMails = state.searchTerm ? mailsList.filter(({email_subject}) => email_subject.toLowerCase().includes(state.searchTerm.toLowerCase())) : mailsList
  return (
    <div className='master-list-main-container'>
      <div className='mater-list-search-container'>
        <input onChange={handleMailSearch} className="master-list-search-input" placeholder='Search mail' />
      </div>{
        !(location.pathname === "/trash") && <MailFilters />
      }
      <div className='master-list-mails-container'>
        {
          filteredMails.length !== 0 ? filteredMails.map((mail) => (
            <Fragment key={mail.email_id}>
              <MailListCard {...mail} />
            </Fragment>
          )) : <NoMailList />
        }
      </div>
    </div>
  );
};

export default MasterList;
