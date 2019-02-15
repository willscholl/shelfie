module.exports = {
  getAllProducts: (req, res) => {
    const db = req.app.get('db');

    db.get_inventory().then(resp => {
      res.status(200).send(resp)
    });
  },
  createProduct: (req, res) => {
    const db = req.app.get('db');
    const { name, price, imgurl } = req.body

    db.create_product( name, price, imgurl).then(resp => {
      res.status(200).send(resp);
    });
  },
  deleteProduct: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params

    db.delete_product( id ).then(resp => {
      res.status(200).send(resp);
    })
  }
};