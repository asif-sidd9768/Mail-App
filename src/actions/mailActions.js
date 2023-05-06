export const toggleMailReadAction = (mailId) => ({
  type:"TOGGLE_MAIL_READ",
  payload: mailId
})

export const toggleMailStarredAction = (mailId) => ({
  type:"TOGGLE_MAIL_STARRED",
  payload: mailId
})

export const toggleMailSpamAction = (mailId) => ({
  type:"TOGGLE_MAIL_SPAM",
  payload: mailId
})

export const deleteMailAction = (mailId) => ({
  type:"DELETE_MAIL",
  payload: mailId
})

export const mailSearchAction = (searchParam) => ({
  type:"MAIL_SEARCH",
  payload: searchParam
})

export const readUnreadFilterAction = (filterValue) => ({
  type:"READ_UNREAD_FILTER",
  payload:filterValue
})

export const starUnstarFilterAction = (filterValue) => ({
  type:"STAR_UNSTAR_FILTER",
  payload:filterValue
})

export const toggleViewAllAction = () => ({
  type:"TOGGLE_VIEW_ALL"
})