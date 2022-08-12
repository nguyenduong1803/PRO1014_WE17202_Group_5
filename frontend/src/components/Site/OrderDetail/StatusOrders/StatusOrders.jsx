import React from 'react'
import StepperMui from './StepperMui/StepperMui';
import styles from './StatusOrders.module.css';
function StatusOrders({myOder}) {
  return (
    <div className={styles.stepper}><StepperMui status={myOder?.status_envoice}/></div>
  )
}

export default StatusOrders