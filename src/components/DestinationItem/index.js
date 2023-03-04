// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails

  return (
    <li className="list-container">
      <img className="image" src={imgUrl} alt="img" />
      <h1 className="heading">{name}</h1>
    </li>
  )
}

export default DestinationItem
