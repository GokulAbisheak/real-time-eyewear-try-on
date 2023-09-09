import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import databaseConnection from "./config/database.mjs";
import logger from "./utils/logger.mjs";
import DeliveryDriverRoute from "./routes/DeliveryDriverRoute.js";
import DeliveryRoute from "./routes/DeliveryRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();
const PORT = process.env.PORT || "8080";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json());

app.use("/delivery-driver", DeliveryDriverRoute);
app.use("/delivery", DeliveryRoute);

app.use("/category", CategoryRoute);
app.use("/product", ProductRoute);

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  databaseConnection();
});
