module.exports = {
    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => {
            res.status(500).send({ errorMessage: "THAT wasn't supposed to happen..." });
            console.log(err)
        });
    },
    addProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {image_url, product_name, price} = req.body;

        dbInstance.add_product([image_url, product_name, price])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "THAT wasn't supposed to happen..."});
        })
    }
}