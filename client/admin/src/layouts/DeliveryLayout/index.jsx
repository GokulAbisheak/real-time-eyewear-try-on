import React from "react";
import SideNav from "../../components/SideNav";
import Header from "../../components/Header";
import { Outlet, Route, Routes } from "react-router-dom";
import ViewDelivery from "./ViewDeivery";
import UpdateDelivery from "./UpdateDelivery";

const DeliveryLayout = () => {
  return (
    <>
      <div className="flex sticky top-0 left-0">
        <SideNav />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="p-[20px] overflow-y-scroll pt-20">
            <Outlet />
            <Routes>
              <Route>
                <Route path="view-delivery" element={<ViewDelivery />} />
                <Route
                  path="update-delivery/:id"
                  element={<UpdateDelivery />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryLayout;
