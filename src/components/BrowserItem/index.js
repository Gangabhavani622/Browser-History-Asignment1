import './index.css'

const BrowserItem = props => {
  const {browserItem, onDeleteItem} = this.props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserItem

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="browser-item-cont">
      <div className="browser-details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <div className="delete-btn">
        <button type="button" className="button" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserItem
