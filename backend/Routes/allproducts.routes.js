const {Router}=require("express");
const { ProductModel } = require("../Models/Allproducts.model");

const allproductController=Router();

allproductController.get("/", async (req, res) => {
    const products = await ProductModel.find({userId:req.body.userId});
    console.log(products);
    res.send(products);
  });


  allproductController.post("/create", async (req, res) => {
    const {
        _id,
        all_offer_price,
        description,
        category,
        color,
        display_image,
        other_images,
        flip_image,
        product_sizes,
        stock_status,
        member_price,
        mrp,
        name,
        offer_type,
        price,
        url,
        brand,
        status,
        in_stock,
        gender,
        limited_edition,
        category_info,
        offer,
        average_rating,
        member_discount,
        product_discount,
        manufacturer_brand
    } = req.body;
  
    const product = new ProductModel({
        _id,
        all_offer_price,
        description,
        category,
        color,
        display_image,
        other_images,
        flip_image,
        product_sizes,
        stock_status,
        member_price,
        mrp,
        name,
        offer_type,
        price,
        url,
        brand,
        status,
        in_stock,
        gender,
        limited_edition,
        category_info,
        offer,
        average_rating,
        member_discount,
        product_discount,
        manufacturer_brand
    });
    try {
      await product.save();
      res.send("product is created");
    } catch (err) {
        console.log(err)
      res.send("something went wrong");
    }
  });
  
  allproductController.delete("/delete/:productId", async (req, res) => {
    const { productId } = req.params;
    const deleteproduct = await ProductModel.findOneAndDelete({
      _id: productId,
      userId: req.body.userId,
    });
    if (deleteproduct) {
      res.send("Deleted");
    } else {
      res.send("couldn't delete");
    }
  });
  
  allproductController.patch("/edit/:productId", async (req, res) => {
    const { productId } = req.params;
  
    const updateProduct = await ProductModel.findOneAndUpdate(
      { _id: productId, userId: req.body.userId },
      { ...req.body }
    );
    if (updateProduct) {
      res.send("updated");
    } else {
      res.send("couldn't update");
    }
  });






module.exports={allproductController}