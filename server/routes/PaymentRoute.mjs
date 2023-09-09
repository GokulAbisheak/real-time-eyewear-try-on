import { Router } from 'express';

import { newPayment,
    getAllPayment } from '../controllers/PaymentController.mjs';

const route = Router();

route.post("/new-payment",newPayment);
route.get("/get-all-payment", getAllPayment);

export default route;
