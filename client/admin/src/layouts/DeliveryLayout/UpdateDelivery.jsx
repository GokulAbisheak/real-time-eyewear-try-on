import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const UpdateDelivery = () => {
  const { id } = useParams();
  const [deliveryDrivers, setAllDriverNames] = useState([]);

  const [delivery, setDelivery] = useState([]);
  const [_id, setObjId] = useState();
  const [paymentId, setPaymentId] = useState();
  const [driverId, setDriver] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    function getDeliveryDriver() {
      axios
        .get(`http://localhost:8080/delivery/get-delivery-by-id/${id}`)
        .then((res) => {
          console.log(res.data);
          setDelivery(res.data);
          setObjId(res.data._id);
          setPaymentId(res.data.paymentId);
          setDriver(res.data.driverId);
          setPhoneNumber(res.data.phoneNumber);
          setAddress(res.data.address);
          setStatus(res.data.status);
        })
        .catch((err) => {
          console.error("Error : " + err.message);
        });
    }
    function getAllDriverNames() {
      axios
        .get(
          "http://localhost:8080/delivery-driver/get-all-delivery-drivers-name"
        )
        .then((res) => {
          console.log(res.data);
          setAllDriverNames(res.data);
        })
        .catch((err) => {
          console.error("Error : " + err.message);
        });
    }
    getAllDriverNames();
    getDeliveryDriver();
  }, []);

  function updateDeliveryDriver(e) {
    e.preventDefault();

    axios
      .put("http://localhost:8080/delivery/update-delivery-driver-id", {
        _id,
        driverId,
        address,
        phoneNumber,
      })
      .then((res) => {
        if (res.data != null)
          window.location.replace("/delivery/view-delivery");
      })
      .catch((err) => {
        console.error("Error : " + err.message);
      });
  }

  return (
    <>
      <div className="flex flex-col align-items w-full min-h-[85vh]">
        <div className="px-[20px] h-[64px] font-bold text-xl w-full flex justify-center items-center gap-[20px]">
          Update Delivery Details
        </div>
        <div className="flex justify-center grid grid-cols-2 gap-4 p-10">
          <div class="p-4 flex justify-center">
            <TextField
              label="Delivery ID"
              defaultValue=" "
              value={_id}
              InputProps={{ readOnly: true }}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Payment ID"
              defaultValue=" "
              value={paymentId}
              InputProps={{ readOnly: true }}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4">
            <FormControl fullWidth>
              <InputLabel>{driverId}</InputLabel>
              <Select onChange={(e) => setDriver(e.target.value)}>
                {deliveryDrivers.map((driver) => (
                  <MenuItem value={driver._id}>{driver.firstName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Address"
              defaultValue=" "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Phone Number"
              defaultValue="  "
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="p-4 flex justify-center">
            <TextField
              label="Status"
              defaultValue="00"
              value={status}
              InputProps={{ readOnly: true }}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
          <div class="col-span-2 flex justify-center pt-5">
            <button
              type="submit"
              onClick={updateDeliveryDriver}
              className="bg-transparent text-cyan-600 border-cyan-600 hover:bg-cyan-600 hover:text-white font-semibold  py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Update Delivery
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDelivery;
