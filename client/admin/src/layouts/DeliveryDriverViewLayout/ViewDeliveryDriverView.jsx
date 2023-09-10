import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import axios from "axios";

const ViewDeliveryDriverView = () => {
  const [deliveries, setAllDeliveries] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    function getAllDeliveries() {
      axios
        .get("http://localhost:8080/delivery/get-all-delivery")
        .then((res) => {
          setAllDeliveries(res.data);
        })
        .catch((err) => {
          console.error("Error : " + err.message);
        });
    }

    getAllDeliveries();
  }, []);

  const updateDelivered = (_id) => {
    axios
      .put(`http://localhost:8080/delivery/update-delivery-status`, {
        _id,
        status: "Delivered",
      })
      .then((res) => {
        if (res.data.status != null)
          window.location.replace("/delivery-driver-view/view-delivery-driver");
      })
      .catch((err) => {
        console.error("Error : " + err.message);
      });
  };

  const updateDispatched = (_id) => {
    axios
      .put(`http://localhost:8080/delivery/update-delivery-status`, {
        _id,
        status: "Dispatched",
      })
      .then((res) => {
        if (res.data.status != null)
          window.location.replace("/delivery-driver-view/view-delivery-driver");
      })
      .catch((err) => {
        console.error("Error : " + err.message);
      });
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#1d93bc",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <>
      <input
        type="search"
        id="default-search"
        onChange={(e) => setSearchKey(e.target.value)}
        className="block w-full mt-3 p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
      />
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Delivery ID</StyledTableCell>
              <StyledTableCell align="right">Payment Id</StyledTableCell>
              <StyledTableCell align="right">Driver</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveries
              .filter((key) => {
                const deliveryId = (key._id || "").toLowerCase();
                const paymentId = (key.paymentId || "").toLowerCase();
                const driverId = (key.driverId || "").toLowerCase();
                const phoneNumber = (key.phoneNumber || "").toLowerCase();
                return (
                  deliveryId.includes(searchKey.toLowerCase()) ||
                  paymentId.includes(searchKey.toLowerCase()) ||
                  driverId.includes(searchKey.toLowerCase()) ||
                  phoneNumber.includes(searchKey.toLowerCase())
                );
              })
              .map((delivery) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {" "}
                    {delivery._id}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {" "}
                    {delivery.paymentId}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {" "}
                    {delivery.driverId}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {" "}
                    {delivery.address}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {" "}
                    {delivery.phoneNumber}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {" "}
                    {delivery.status}{" "}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <button
                      onClick={() => updateDispatched(delivery._id)}
                      className="bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      <SendTimeExtensionIcon />
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <button
                      onClick={() => updateDelivered(delivery._id)}
                      className="bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      <DeliveryDiningIcon />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ViewDeliveryDriverView;
