import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const steps = [
  'Đặt món',
  'Đang ăn',
  'Đã thanh toán',
];

export default function StepperMui({ status }) {
  const [statusStep, setStatusSetep] = React.useState(0)
  React.useEffect(() => {
    console.log(status)
    if (status === 2) {
      setStatusSetep(2)
    }
  })
  return (
    <Box sx={{ width: '100%', height: 30 }}>
      <Stepper activeStep={statusStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
