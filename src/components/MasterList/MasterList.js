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
  
  const handleMailSearch = (event) => {
    dispatch(mailSearchAction(event.target.value))
  }

  if(mailsList.length === 0){
    return <div className='master-list-main-container'>
      <NoMailList />
     </div>
  }
  return (
    <div className='master-list-main-container'>
      <div className='mater-list-search-container'>
        <input onChange={handleMailSearch} className="master-list-search-input" placeholder='Search mail' />
      </div>
      <MailFilters />
      <div className='master-list-mails-container'>
        {mailsList.map((mail) => (
          <Fragment key={mail.email_id}>
            <MailListCard {...mail} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MasterList;
