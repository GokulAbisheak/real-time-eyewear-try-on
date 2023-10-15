import { Router } from "express";
import {
  registerDeliveryDriver,
  getDeliveryDriverByEmail,
  getAllDeliveryDrivers,
  getDeliveryDriverByID,
  updateDeliveryDriver,
  deleteDeliveryDriver,
  getMinNumberOfOrder,
  getAllDeliveryDriverFirstName,
  DeliveryDriverDelivered,
} from "../controllers/DeliveryDriverController.mjs";

const route = Router();

route.post("/register-delivery-driver", registerDeliveryDriver);
route.get("/get-delivery-driver-by-email/:email", getDeliveryDriverByEmail);
route.get("/get-all-delivery-drivers", getAllDeliveryDrivers);
route.get("/get-delivery-driver-by-id/:id", getDeliveryDriverByID);
route.put("/update-delivery-driver", updateDeliveryDriver);
route.delete("/delete-delivery-driver/:id", deleteDeliveryDriver);
route.get("/get-min-order-driver", getMinNumberOfOrder);
route.get("/get-all-delivery-drivers-name", getAllDeliveryDriverFirstName);
route.get("/driver-deliver/:id", DeliveryDriverDelivered);

export default route;
