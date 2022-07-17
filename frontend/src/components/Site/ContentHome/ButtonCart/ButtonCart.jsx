import React from 'react'
import './ButtonCart.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ButtonCart() {
  return (<div>
        <div className='container'>
  <div className="interior">
    <a className="btn" href="#open-modal"><ShoppingCartIcon/></a>
  </div>
</div>
<div id="open-modal" className="modal-window">
  <div>
    <a href="#" title="Close" className="modal-close">Close</a>
    <h1>Voilà!</h1>
    <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
    <div><small>Check out 👇</small></div>
      Your new favorite eyedropper tool!
  </div>
</div>
</div>
  )
}

export default ButtonCart