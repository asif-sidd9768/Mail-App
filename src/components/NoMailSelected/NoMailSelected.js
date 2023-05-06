import "./NoMailSelected.css"

export const NoMailSelected = () => {
  return (
    <div className="no-mail-selected-container">
      <p className="no-mail-selected-icon"><i className="fa-solid fa-magnifying-glass"></i></p>
      <p className="no-mail-selected-text">Select an email to view its contents here.</p>
    </div>
  )
}