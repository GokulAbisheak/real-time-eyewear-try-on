import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { deleteDelivery } from '../../../../../server/controllers/DeliveryController.mjs';

const ViewDeliveryDriver = () => {

    const [deliveryDrivers, setAllDeliveryDrivers] = useState([]);

    useEffect(() => {
        function getAllDeliveryDrivers() {
            axios.get("http://localhost:8080/delivery-driver/get-all-delivery-drivers")
                .then((res) => {
                    setAllDeliveryDrivers(res.data);
                })
                .catch((err) => {
                    console.error("Error : " + err.message);
                })
        }
        getAllDeliveryDrivers()
    }, [])

    const deleteDeliveryDriver = (objId) => {
        axios.delete(`http://localhost:8080/delivery-driver/delete-delivery-driver/${objId}`)
            .then((res) => {
                if (res.data.status == "success")
                    window.location.replace("/delivery-driver/view-delivery-driver");
            })
            .catch((err) => {
                console.error("Error : " + err.message);
            })
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#1d93bc',
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }


    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];


    return (
        <>
            <div className='flex  justify-end'>
                <Link to="/delivery-driver/add-delivery-driver">
                    <button className="bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Add Delivery Driver
                    </button>
                </Link>
            </div>

            <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Driver ID</StyledTableCell>
                            <StyledTableCell align="right">First Name</StyledTableCell>
                            <StyledTableCell align="right">Last Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">License No</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            deliveryDrivers.map((deliveryDriver) => (
                                <StyledTableRow>
                                    <StyledTableCell component="th" scope="row"> {deliveryDriver._id} </StyledTableCell>
                                    <StyledTableCell align="right">{deliveryDriver.firstName}</StyledTableCell>
                                    <StyledTableCell align="right">{deliveryDriver.lastName}</StyledTableCell>
                                    <StyledTableCell align="right">{deliveryDriver.email}</StyledTableCell>
                                    <StyledTableCell align="right">{deliveryDriver.licenseNo}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Link to={{ pathname: `/delivery-driver/view-delivery-driver-details/${deliveryDriver._id}` }} >
                                            <button className="bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                <VisibilityIcon />
                                            </button>
                                        </Link>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Link to={{pathname: `/delivery-driver/update-delivery-driver/${deliveryDriver._id}`}}>
                                            <button className="bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                <ModeEditIcon />
                                            </button>
                                        </Link>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <button onClick={() => deleteDeliveryDriver(deliveryDriver._id)} className="bg-transparent text-red-600 border-red-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            <DeleteIcon />
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ViewDeliveryDriver;
