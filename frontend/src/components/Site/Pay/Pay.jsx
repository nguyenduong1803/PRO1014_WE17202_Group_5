import React from 'react'
import PaySucces from './PaySuccessFull/PaySuccessFull';
import PayFail from './PayFailed/PayFailed';

function Pay() {
  return (
    <div>
        <PaySucces/>
        <PayFail/>
    </div>
  )
}

export default Pay