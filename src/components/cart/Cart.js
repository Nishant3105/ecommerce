import React,{useContext} from 'react'
import Modal from '../../store/Modal';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import CartContext from '../../context/CartContext';

const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
];
  
    
    
const Cart = (props) => {
  const cartCtx=useContext(CartContext)
  const removeCartHandler=(id) => {
    cartCtx.removeFromCart(id)
    const parentElement=document.getElementById('cart-items')
    parentElement.removeChild(id)
  }
  const CartItems=cartElements.map((item,index)=> (
        <li id={index} key={index}>
            <span>
                Item: {item.title}
            </span>
            <span>
                Price: {item.price}
            </span>
            <span>
                Quantity: {item.quantity}
            </span>
            <span>
                Total: {Number(item.price*item.quantity)}
            </span>
            <Button>Purchase</Button>
            <Button onClick={removeCartHandler(index)}>Remove</Button>
        </li>

  ))

    return (
    <Modal onClick={props.onClick}>
        <ul id="cart-items">
         {CartItems}
        </ul>
    </Modal>
  )
}

export default Cart