import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const loads = [1,2,3,4,5,6,7,8]
export default function LoadingProduct() {
    return (
        <div className="row" >
            {loads.map(item => (
                <div key={item} className="col-lg-3 mb-3" style={{ }}>
                      

                    <div style={{ backgroundColor:"rgba(255, 255, 255, 0.7)",borderRadius:"20px",position:"relative",height:"200px",padding: "100px 20px 12px 20px",marginTop: "88px"}}>
                        <Stack spacing={1} >
                            <div style={{ position: "absolute",left:"50%",transform:"translateX(-50%)",top: "-77px"}}> <Skeleton sx={{ bgcolor: 'grey.400' }} animation="wave" variant="circular" width={170} height={170} /></div>
                            {/* <Skeleton variant="rectangular" width={"100%"} height={68} /> */}
                            <Skeleton variant="text"animation="wave" />
                            <Skeleton variant="text"animation="wave" />
                            <Skeleton variant="text"animation="wave" width={"60%"} />
                        </Stack>
                    </div>
                </div>
            ))}
        </div>

    );
}
