import React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import axios from 'axios';


const Payment = () => {

    const [products, setProducts] = useState();
    const [address, setAddress] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [paymentType, setPaymentType] = useState();
    const [cardNumber, setCardNumber] = useState();
    const [amount, setAmount] = useState();

    var product = JSON.parse(localStorage.getItem('products'));

    function makePayment(e) {
        e.preventDefault();

        var paymentId = "al;sdkj";

        const storedProductDataString = localStorage.getItem('productData');
        const storedProductData = JSON.parse(storedProductDataString);
        setProducts(storedProductData);
        console.log(products.price);

        


        // axios.get("http://localhost:8080/delivery-driver/get-min-order-driver")
        //     .then((res) => {
        //         var driverId = res.data._id;

        //         alert("driverId: " + driverId + "paymentId: " + paymentId + "address " + address + phoneNumber);
        //         axios.post("http://localhost:8080/delivery/assign-delivery", {
        //             paymentId, driverId, address, phoneNumber
        //         })
        //             .then((res) => {
        //                 console.log(res.data);
        //             })
        //             .catch((err) => {
        //                 console.error("Error : " + err.message);
        //             });

        //     })
        //     .catch((err) => {
        //         console.error("Error : " + err.message);
        //     });
    }

    function test(e) {
        alert("test");
        const productData = {
            "_id": "64f7502a4bb126cf1ca4c923",
            "categoryName": "sun glasses",
            "createdAt": "2023-09-09T05:46:40.361Z",
            "description": "Keep it HIGH KEY with our #1 bestselling aviator designed to flatter every face shape",
            "inStock": 18,
            "price": 5600,
            "productName": "HIGH KEY",
            "selectedQuantity": "3",
            "updatedAt": "2023-09-09T05:46:40.361Z",
            "__v": 0
        };

        const productDataString = JSON.stringify(productData);
        localStorage.setItem('productData', productDataString);
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#475569',
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

    return (
        <>
            <div className='w-full'>
                <div className='w-full flex justify-center mt-6'>
                    <TableContainer component={Paper} sx={{ width: 800 }}>
                        <Table aria-label="spanning table">
                            <TableHead>
                                <StyledTableRow>
                                    <StyledTableCell align="center" colSpan={2}>
                                        Details
                                    </StyledTableCell>
                                    <StyledTableCell align="right">Price</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="center">Name</StyledTableCell>
                                    <StyledTableCell align="center">Qty</StyledTableCell>
                                    <StyledTableCell align="right"></StyledTableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell align="center">aklsfjl</StyledTableCell>
                                    <StyledTableCell align="center">3</StyledTableCell>
                                    <StyledTableCell align="right">9000</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="center">aklsfjl</StyledTableCell>
                                    <StyledTableCell align="center">3</StyledTableCell>
                                    <StyledTableCell align="right">9000</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="center">aklsfjl</StyledTableCell>
                                    <StyledTableCell align="center">3</StyledTableCell>
                                    <StyledTableCell align="right">9000</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell align="center">aklsfjl</StyledTableCell>
                                    <StyledTableCell align="center">3</StyledTableCell>
                                    <StyledTableCell align="right">9000</StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <TableCell colSpan={2} align="right">Total</TableCell>
                                    <TableCell align="right">039403940</TableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div className='flex flex-col align-items w-full mt-6' >
                <div className='px-[20px] font-bold text-xl w-full flex justify-center items-center gap-[20px]'>
                    Personal Details
                </div>
                <div className='flex justify-center grid grid-cols-2'>
                    <div class="p-4 flex justify-center">
                        <TextField label="Address" name="address" onChange={(e) => setAddress(e.target.value)} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="Phone Number" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} variant="outlined" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col align-items w-full mt-6' >
                <div className='px-[20px] font-bold text-xl w-full flex justify-center items-center gap-[20px]'>
                    Payment Details
                </div>
                <div className='flex justify-center grid grid-cols-3'>
                    <div className="col-span-3 p-4 flex justify-center">
                        <label>
                            <input
                                type="radio"
                                value="credit"
                                name="card"
                                onChange={(e) => setPaymentType(e.target.value)}
                            />
                            Credit Card
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="debit"
                                name="card"
                                onChange={(e) => setPaymentType(e.target.value)}
                            />
                            Debit Card
                        </label>
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="Card Number" name="" onChange={(e) => setCardNumber(e.target.value)} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="CVV" name="cvv" variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField type="date" label=" " variant="outlined" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
            <div className='h-[64px] fixed bottom-0 w-full px-[20px] flex justify-end items-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]  z-10 bg-white'>
                <button type='submit' onClick={test}>
                    Test
                </button>
                <button type='submit' onClick={makePayment} className="bg-transparent text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Pay
                </button>
            </div>
            <h1>  d</h1>
            <h1> d </h1>
            <h1> d </h1>
        </>
    );
}

export default Payment;
