module.exports ={
    getProducts: (req,res)=>{
    const database = req.app.get('db');
    database.get_products().then(products=>{ res.status(200).json(products)})
    .catch(error=>{
        console.log('ERROR: cannot get products',error);
    });
},
    createProduct:(req,res)=>{
        const database = req.app.get('db');
        const {name, price, imgurl} = req.body;
        database.create_product({name, price, imgurl}).then(products=>{ res.status(200).json(products)})
        .catch(error=>{ console.log('ERROR: cannot create product', error)});
    },
    deleteProduct: (req,res)=>{
        const database = req.app.get('db');
        
        database.delete_product({product_id: req.params.id}).then(product=>{ res.status(200).json(product)})
        .catch(error=>{
            console.log('ERROR: cannot delete product',error)});
    }
}