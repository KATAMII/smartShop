import { Router } from "express";
import pool from "../db.config.js";
const router = Router();


router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json({ success: true, data: result.rows });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});


router.get("/:producttitle", async (req, res) => {
    const { producttitle } = req.params;
    try {
        const result = await pool.query("SELECT * FROM products WHERE productTitle = $1", [producttitle]);
        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, data: result.rows[0] });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.post("/", async (req, res) => {
    const { productthumbnail, producttitle, productdescription, productcost, onoffer } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [productthumbnail, producttitle, productdescription, productcost, onoffer]
        );
        res.status(201).json({ success: true, data: result.rows[0] });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

router.patch("/:producttitle",(req,res)=>{
    res.send ("updating a user")
})
router.delete("/:producttitle",(req,res)=>{
    res.send ("deleting a user")
})




export default router;
