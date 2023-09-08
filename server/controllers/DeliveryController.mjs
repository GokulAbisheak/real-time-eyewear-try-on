import Delivery from "../models/Delivery.mjs";


export const assignDelivery = async (req, res) => {
    const { paymentId, driverId, address, phoneNumber } = req.body;

    Delivery.create({ paymentId, driverId, address, phoneNumber, status:'Order Confirmed', lastModifiedDateTime: new Date() })
        .then((Delivery) => {
            console.log({ status: 'Success', Delivery });
            return res.json(Delivery);
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}

export const getAllDelivery = async (req, res) => {
    Delivery.find()
        .then((Delivery) => {
            return res.json(Delivery);
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}

export const getDeliveryByID = async (req, res) => {
    let objId = req.params.id;

    Delivery.findById(objId)
        .then((Delivery) => {
            return res.json(Delivery);
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        });
}

export const updateDeliveryDriverId = async (req, res) => {
    const { _id, driverId, address, phoneNumber  } = req.body;


    Delivery.findById(_id)
        .then((Delivery) => {
            if(!Delivery)
                res.json({ status: 'No deliveries found' });
            else {
                Delivery.driverId = driverId;
                Delivery.address = address;
                Delivery.phoneNumber = phoneNumber;
                Delivery.lastModifiedDateTime = new Date();

                Delivery.save()
                .then((Delivery) => {
                    res.json(Delivery);
                })
                .catch((err) => {
                    console.log({ status: 'Error', err });
                });
            }
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        });
}

export const updateDeliveryStatus = async (req, res) => {
    const { _id, status  } = req.body;

    Delivery.findById(_id)
        .then((Delivery) => {
            if(!Delivery)
                res.json({ status: 'No Delivery' });
            else {
                Delivery.status = status;
                Delivery.lastModifiedDateTime = new Date();

                Delivery.save()
                .then((Delivery) => {
                    return res.json(Delivery);
                })
                .catch((err) => {
                    console.log({ status: 'Error', err });
                    return res.json({ status: 'Error', err });
                });
            }
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        });
}

export const deleteDelivery = async (req, res) => {
    let objId = req.params.id;

    await Delivery.findByIdAndDelete(objId)
        .then(() => {
            return res.json({ status: 'success' });
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}



