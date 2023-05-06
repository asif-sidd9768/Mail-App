import "./NoMailList.css"

export const NoMailList = () => {
  return (
    <div className="no-mail-list-container">
      <p className="no-mail-list-icon"><i className="fa-solid fa-folder"></i></p>
      <p className="no-mail-list-heading">Nothing to show!</p>
      <p className="no-mail-list-description">Check another section</p>
    </div>
  )
}