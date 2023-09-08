import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import axios from 'axios';

const ViewDeliveryDriverDetails = () => {

    const { id } = useParams();

    const [deliveryDrivers, setDeliveryDriver] = useState([]);

    useEffect(() => {
        function getDeliveryDriver() {
            axios.get(`http://localhost:8080/delivery-driver/get-delivery-driver-by-id/${id}`)
                .then((res) => {
                    setDeliveryDriver(res.data);
                })
                .catch((err) => {
                    console.error("Error : " + err.message);
                })
        }
        getDeliveryDriver()
    }, [])

    return (
        <>
            <div className='flex flex-col align-items w-full min-h-[85vh]' >
                <div className='px-[20px] h-[64px] font-bold text-xl w-full flex justify-center items-center gap-[20px]'>
                    View Delivery Driver Details
                </div>
                <div className='flex justify-center grid grid-cols-2 gap-4 p-10'>
                    <div class="p-4 flex justify-center">
                        <TextField label="ID" name="id" defaultValue=" " value={deliveryDrivers._id} InputProps={{ readOnly: true }} style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="Number Of Order" name="nof" defaultValue=" " value={deliveryDrivers.numberOfOrder} InputProps={{ readOnly: true }} style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="First Name" name="firstName" defaultValue=" " value={deliveryDrivers.firstName} InputProps={{ readOnly: true }} style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="Last Name" name="lastName" defaultValue=" " value={deliveryDrivers.lastName} InputProps={{ readOnly: true }} style={{ width: '100%' }} />
                    </div>
                    <div class="col-span-2 p-4">
                        <TextField label="Email" name="email" defaultValue=" " value={deliveryDrivers.email} InputProps={{ readOnly: true }} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="NIC Number" name="nic" defaultValue=" " value={deliveryDrivers.NIC} InputProps={{ readOnly: true }} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="License Number" name="licenseNo" defaultValue=" " value={deliveryDrivers.licenseNo} InputProps={{ readOnly: true }} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="Address" name="address" defaultValue=" " value={deliveryDrivers.address} InputProps={{ readOnly: true }} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="p-4 flex justify-center">
                        <TextField label="Vehicle Number" name="vehicleNumber" defaultValue=" " value={deliveryDrivers.vehicleNo} InputProps={{ readOnly: true }} variant="outlined" style={{ width: '100%' }} />
                    </div>
                    <div class="col-span-2 p-4 flex justify-center">
                        <TextField label="Last Modified Date" name="lastModifiedDate" defaultValue=" " value={deliveryDrivers.lastModifiedDateTime} InputProps={{ readOnly: true }} variant="outlined" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default ViewDeliveryDriverDetails;
