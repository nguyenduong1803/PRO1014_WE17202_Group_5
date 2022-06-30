import React from "react";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";
import DownloadIcon from "@mui/icons-material/Download";

const ExportReact = ({ csvHeaders, csvData, fileName }) => {
  return (
    <>
      <CSVLink headers={csvHeaders} data={csvData} filename={fileName}>
        <Button variant="success"> <DownloadIcon />Import</Button>
      </CSVLink>
    </>
  );
};

export default ExportReact;
