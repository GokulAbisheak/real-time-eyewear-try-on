import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";

const AddDeliveryDriver = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [NIC, setNIC] = useState();
  const [licenseNo, setLicenseNumber] = useState();
  const [address, setAddress] = useState();
  const [vehicleNo, setVehicleNumber] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  function registerDeliveryDriver(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/delivery-driver/register-delivery-driver", {
        firstName,
        lastName,
        email,
        address,
        NIC,
        licenseNo,
        vehicleNo,
        password,
      })
      .then((res) => {
        if (res.data != null)
          window.location.replace("/delivery-driver/view-delivery-driver");
      })
      .catch((err) => {
        console.error("Error : " + err.message);
      });
  }

  return (
    <>
      <div className="flex flex-col align-items w-full min-h-[85vh]">
        <div className="px-[20px] h-[64px] font-bold text-xl w-full flex justify-center items-center gap-[20px]">
          Add Delivery Driver
        </div>
        <div className="flex justify-center grid grid-cols-2 gap-4 p-10">
          <div class="p-4 flex justify-center">
            <TextField
              label="First Name"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Last Name"
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="col-span-2 p-4">
            <TextField
              label="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="NIC Number"
              type="number"
              name="nic"
              onChange={(e) => setNIC(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="License Number"
              type="number"
              name="licenseNo"
              onChange={(e) => setLicenseNumber(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Address"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Vehicle Number"
              name="vehicleNumber"
              onChange={(e) => setVehicleNumber(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Re-Type-Password"
              name="rePassword"
              onChange={(e) => setRePassword(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="col-span-2 flex justify-center pt-5">
            <button
              type="submit"
              onClick={registerDeliveryDriver}
              className="bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Add Delivery Driver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDeliveryDriver;
