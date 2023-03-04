// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails

  return (
    <li className="list-container">
      <img className="image" src={imgUrl} alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationItem
