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
  const [errors, setErrors] = useState("");

  function registerDeliveryDriver(e) {
    e.preventDefault();

    if (!firstName) {
      setErrors("Please provide a first name");
      return;
    } else if (firstName.length < 4) {
      setErrors("Minimum 4 characters");
      return;
    }

    if( !lastName) {
      setErrors("Please provide a last name");
      return;
    } else if (lastName.length < 4) {
      setErrors("Minimum 4 characters");
      return;
    }

    if( !email) {
      setErrors("Please provide a email");
      return;
    }

    if( !NIC) {
      setErrors("Please provide a NIC number");
      return;
    } else if (NIC.length != 12) {
      setErrors("Nic must 12 characters");
      return;
    }

    if( !licenseNo) {
      setErrors("Please provide a License Number");
      return;
    } else if (licenseNo.length != 8) {
      setErrors("license number must 8 characters");
      return;
    }

    if( !address) {
      setErrors("Please provide a address");
      return;
    }

    if( !vehicleNo) {
      setErrors("Please provide a Vehicle Number");
      return;
    } else if (vehicleNo.length != 8) {
      setErrors("Vehicle number must 8 characters");
      return;
    }

    if( !password) {
      setErrors("Please provide a password");
      return;
    } else if (password.length <= 7) {
      setErrors("Minimum 8 characters");
      return;
    }

    if( !rePassword) {
      setErrors("Please provide a re type password");
      return;
    } else if (rePassword.length <= 7) {
      setErrors("Minimum 8 characters");
      return;
    } else if(password != rePassword) {
      setErrors("Password and Re type password not matched");
      return;
    }

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
          {errors ? (
            <div className="w-full justify-center text-center px-[20px] py-[10px] border-2 border-red-700 bg-red-100 text-red-700 rounded text-xs">
              {errors ? errors : ""}
            </div>
          ) : (
            <></>
          )}
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
