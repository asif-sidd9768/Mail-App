import { createContext, useEffect, useReducer } from "react";
import { MAIL_DATA } from "../db/db";
import { mailReducer } from "../reducers/mailReducer";

export const MailContext = createContext();
export const initialMailState = {
  inboxList: [],
  spamList: [],
  trashList: [],
  filteredList: [],
  searchTerm: "",
  readUnreadFilter: null,
  starUnStarredFilter: null,
  viewingAll: true,
  selectedItem: null
};
export const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mailReducer, initialMailState);

  useEffect(() => {
    dispatch({ type: "SET_MAILS", payload: MAIL_DATA });
  }, []);

  return (
    <MailContext.Provider value={{ state, dispatch }}>
      {children}
    </MailContext.Provider>
  );
};
