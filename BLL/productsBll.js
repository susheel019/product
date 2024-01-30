const Connection = require('./connection');

class Products{
    addProducts(p){
    let products = Connection.myDb.collection('products');
    products.insertOne(p);
    }

   async getAllProducts(){
        let Products = Connection.myDb.collection('products');
        let allProducts =await Products.find({}).toArray();
        return allProducts;
    }
 
    async getProductById(p){
        let id = parseInt(p)
        let products = Connection.myDb.collection('products');
        try{
            let getOneProduct = await products.findOne({id:id});
            return getOneProduct;
        }
        catch(err){
            console.log(err);
        }
    }

    async deleteProductById(p){
        let id = parseInt(p);
        let products = Connection.myDb.collection('products');
        let deletedProducts = await products.deleteMany({id:id});
        return deletedProducts;
    }

    async modifyProductsById(Id , updatedata){
        let id = parseInt(Id);
        console.log(updatedata);
        let products = Connection.myDb.collection('products');
        let result = await products.updateOne( {id:id}, {$set: {updatedata}});
        if(result.modifiedCount>0){
            return {success:true ,message:'Product updated successfully'}
        }
        else{
            return { success: false, message: 'Product not found' };
        }

    }
    async getProductByCategory(p){
        let products = Connection.myDb.collection('products')
        try{
        let product = await products.find({}).toArray()
        console.log(product);
        var data = product.filter(e => e.category === p)
        console.log(data);
        return data;
       }
       catch(err){
        console.log(err);
       }

    }
}

module.exports = Products;