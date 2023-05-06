import { useContext } from "react"
import "./MailFilters.css"
import { MailContext } from "../../contexts/MailContext"
import { readUnreadFilterAction, starUnstarFilterAction, toggleViewAllAction } from "../../actions/mailActions"

export const MailFilters = () => {
  const { state,dispatch } = useContext(MailContext)

  const handleReadUnreadFilter = () => {
    dispatch(readUnreadFilterAction(state.readUnreadFilter === "read" ? "unread" : "read"))
  }

  const handleStarUnstarFilter = () => {
    dispatch(starUnstarFilterAction(state.starUnStarredFilter === "star" ? "unstar" : "star"))
  }

  return (
    <div className='filters-container'>
      <span className="filter-text" >Filters: </span>
      <span onClick={handleReadUnreadFilter} title={`${state.readUnreadFilter==="read" ? "Filter unread" : "Filter read"}`} className={`mail-filter-btn filter-btn ${state.readUnreadFilter === "read" ? "mail-read-filter-btn" : "mail-unread-filter-btn"}`}>
        <i className={`fa-solid ${state.readUnreadFilter === "read" ? "fa-envelope" : "fa-envelope-open"}`}></i>
      </span>
      <span onClick={handleStarUnstarFilter} title={`${state.starUnStarredFilter==="star" ? "Filter unstarred" : "Filter starred"}`} className={`mail-filter-btn filter-btn ${state.starUnStarredFilter === "starred" ? "mail-star-filter-btn" : "mail-unstar-filter-btn"}`}>
        <i className={`fa-solid ${state.starUnStarredFilter === "star" ? "fa-star-half-stroke" : "fa-star"}`}></i>
      </span>
      <button onClick={() => dispatch(toggleViewAllAction())} disabled={state.viewingAll} className="view-all-btn">{state.viewingAll ? "Viewing all" : "View all"}</button>
    </div>
  )
}