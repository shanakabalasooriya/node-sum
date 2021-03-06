const { json } = require('express');
const express=require('express');
const app=express();
const {products}=require('./data');


app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.json(newProducts);
})
app.get('/api/products/:productID',(req,res)=>{
    const{productID}=req.params;

    const singleProducts=products.find((product)=>product.id===Number(productID))

    res.json(singleProducts);
    
    
})

app.listen(5000,()=>{
    console.log('jhdsjds');
})

