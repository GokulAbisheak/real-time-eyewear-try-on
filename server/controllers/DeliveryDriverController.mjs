import DeliveryDriver from "../models/DeliveryDriver.mjs";

export const registerDeliveryDriver = async (req, res) => {
    const { firstName, lastName, email, address, NIC, licenseNo, vehicleNo, password } = req.body;

    DeliveryDriver.create({ firstName, lastName, email, address, NIC, licenseNo, vehicleNo, password, numberOfOrder: 0, lastModifiedDateTime: new Date() })
        .then((DeliveryDriver) => {
            console.log({ status: 'Success', DeliveryDriver });
            return res.json(DeliveryDriver);
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}

export const getDeliveryDriverByEmail = async (req, res) => {
    const { email } = req.body;

    DeliveryDriver.findOne({ email: email })
        .then((DeliveryDriver) => {
            if (!DeliveryDriver) {
                return res.json({ status: 'No drivers found' });
            }
            else {
                return res.json(DeliveryDriver);
            }
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}


export const getAllDeliveryDrivers = async (req, res) => {
    DeliveryDriver.find()
        .then((DeliveryDriver) => {
            return res.json(DeliveryDriver);
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}

export const getDeliveryDriverByID = async (req, res) => {
    let objId = req.params.id;

    DeliveryDriver.findById(objId)
        .then((DeliveryDriver) => {
            return res.json(DeliveryDriver);
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        });
}

export const updateDeliveryDriver = async (req, res) => {
    const { _id, firstName, lastName, email, address, NIC, licenseNo, vehicleNo, password } = req.body;


    DeliveryDriver.findById(_id)
        .then((DeliveryDriver) => {
            if (!DeliveryDriver)
                return res.json({ status: 'No drivers found' });
            else {
                DeliveryDriver.firstName = firstName;
                DeliveryDriver.lastName = lastName;
                DeliveryDriver.email = email;
                DeliveryDriver.NIC = NIC;
                DeliveryDriver.address = address;
                DeliveryDriver.licenseNo = licenseNo;
                DeliveryDriver.vehicleNo = vehicleNo;
                DeliveryDriver.password = password;
                DeliveryDriver.lastModifiedDateTime = new Date();

                DeliveryDriver.save()
                    .then((DeliveryDriver) => {
                        return res.json(DeliveryDriver);
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

export const deleteDeliveryDriver = async (req, res) => {
    let objId = req.params.id;

    await DeliveryDriver.findByIdAndDelete(objId)
        .then(() => {
            return res.json({ status: 'success' });
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}

export const getMinNumberOfOrder = async (req, res) => {
        await DeliveryDriver.find({}, 'numberOfOrder').then((drivers) => {
            if (!drivers || drivers.length === 0) {
                return res.json({ status: 'No drivers found' });
            }
    
            let minOrderDriver = drivers[0];
    
            for (let i = 1; i < drivers.length; i++) {
                if (drivers[i].numberOfOrder < minOrderDriver.numberOfOrder) {
                    minOrderDriver = drivers[i];
                }
            }
    
            DeliveryDriver.findById(minOrderDriver._id)
            .then((DeliveryDriver) => {
                if (!DeliveryDriver)
                    return res.json({ status: 'No drivers found' });
                else {
                    var order = parseInt(DeliveryDriver.numberOfOrder, 10);
                    order = order + 1;
                    DeliveryDriver.numberOfOrder = order.toString();
    
                    DeliveryDriver.save()
                        .then((DeliveryDriver) => {
                            
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
    
            return res.json( minOrderDriver );
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        });
}



export const getAllDeliveryDriverFirstName = async (req, res) => {
        await DeliveryDriver.find({}, 'firstName').then((drivers) => {
            if (!drivers || drivers.length === 0) {
                return res.json({ status: 'No drivers found' });
            }
            return res.json(drivers);
        })
        .catch((err) => {
            console.log({ status: 'Error', err });
            return res.json({ status: 'Error', err });
        })
}


