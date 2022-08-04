import * as React from 'react';
import styles from "./Loading.module.css"
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const loads = [1, 2, 3, 4, 5, 6, 7, 8]

export default function LoadingSearch() {
    return (
      <div className="container-fluid">
            <div className="row">
                {loads.map(item => (
                    <div className="col-lg-6" >
                        <div className={`${styles.wrapSkeleton} `}>
                            <Stack spacing={1}>
                                <div className="d-flex justify-content-between align-items-center" style={{ gap: "5px" }}>
                                    <Skeleton variant="rectangular" width={100} height={82} />
                                    <div>
                                        <Skeleton variant="text" width={100} />
                                        <Skeleton variant="text" width={100} />
                                        <Skeleton variant="text" width={100} />
                                    </div>
                                    <Skeleton variant="circular" width={28} height={28} />
                                </div>
                            </Stack>
                        </div>
                    </div>
                ))}
            </div>
      </div>
    );
}