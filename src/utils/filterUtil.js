export const getMailsList = (state, isSpamtoCheck=false) => {
  const toFilter = state.readUnreadFilter || state.starUnStarredFilter
  let inboxMailNoSpam = state.inboxList.filter(({isSpam}) => isSpam === isSpamtoCheck)
  switch(toFilter){
    case "read":
      return inboxMailNoSpam.filter(({read}) => read)
    case "unread":
      return inboxMailNoSpam.filter(({read}) => !read)
    case "star":
      return inboxMailNoSpam.filter(({ isStarred}) => isStarred)
    case "unstar":
      return inboxMailNoSpam.filter(({ isStarred}) => !isStarred)
    default: 
      return inboxMailNoSpam
  }
}