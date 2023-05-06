export const mailReducer = (state, action) => {
  switch (action.type) {
    case "SET_MAILS":
      const spamMails = action.payload.filter(({ isSpam }) => isSpam);
      return { ...state, inboxList: action.payload, spamList: spamMails, filteredList: action.payload };
    case "SET_SELECTED_ITEM":
      return {...state, selectedItem: action.payload}
    case "TOGGLE_MAIL_READ":
      const updatedMailsAfterToggle = state.inboxList.map((mail) => mail.email_id === action.payload ? {...mail, read: !mail.read}: mail)
      return {...state, inboxList: updatedMailsAfterToggle, selectedItem: action.payload}
    case "TOGGLE_MAIL_STARRED":
      const updatedMailsAfterStarredTg = state.inboxList.map((mail) => mail.email_id === action.payload ? {...mail, isStarred: !mail.isStarred}: mail)
      return {...state, inboxList: updatedMailsAfterStarredTg, selectedItem: action.payload}
    case "TOGGLE_MAIL_SPAM":
      const updatedInboxAfterSpamTg = state.inboxList.map((mail) => mail.email_id === action.payload ? {...mail, isSpam: !mail.isSpam}: mail)
      const updatedMailsAfterSpamTg = state.inboxList.map((mail) => mail.email_id === action.payload ? {...mail, isSpam: !mail.isSpam}: mail)
      return {...state, inboxList: updatedInboxAfterSpamTg, filteredList: updatedMailsAfterSpamTg, selectedItem: action.payload}
    case "MAIL_SEARCH":
      return {...state, searchTerm:action.payload, readUnreadFilter: null, starUnStarredFilter: null, viewingAll: true}
    case "DELETE_MAIL":
      const deletedMail = state.inboxList.find(({email_id}) =>  email_id === action.payload)
      const updatedMailsAfterDelete = state.inboxList.filter(({email_id}) => email_id !== action.payload)
      return {...state, inboxList: updatedMailsAfterDelete, filteredList: updatedMailsAfterDelete, trashList: [...state.trashList, deletedMail], selectedItem: getRandomInt(1,50,action.payload)}
    case "READ_UNREAD_FILTER": 
      return {...state, readUnreadFilter: action.payload, starUnStarredFilter: null, viewingAll: false}
    case "STAR_UNSTAR_FILTER":
      return {...state, starUnStarredFilter: action.payload, readUnreadFilter: null, viewingAll: false}
    case "TOGGLE_VIEW_ALL":
      const filteredViewAll = state.inboxList.filter(({isSpam}) => !isSpam) 
      return {...state, filteredList: filteredViewAll, viewingAll: true, readUnreadFilter: null, starUnStarredFilter: null}
    default:
      return state;
  }
};

function getRandomInt(min, max, exclude) {
  let randomInt;

  do {
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomInt === exclude);

  return randomInt;
}