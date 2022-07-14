import React from 'react'
import StepperMui from './StepperMui/StepperMui';
import styles from './StatusOrders.module.css';
function StatusOrders() {
  return (
    <div className={styles.stepper}><StepperMui/></div>
  )
}

export default StatusOrders