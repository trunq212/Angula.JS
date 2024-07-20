import express from 'express';
import Student from '../models/Product.js';

const router = express.Router();

// http://localhost:3000/products/add
router.post('/add', async (req, res) => {
  try {
    const { MSSV, firstName, lastName, imageUrlChinh,imageUrlPhu, dob, classCode,  programmingLanguages } = req.body; 
    const newStudent = new Student({ MSSV, firstName, lastName, imageUrlChinh, imageUrlPhu, dob, classCode,  programmingLanguages});
    await newStudent.save();
    res.status(201).json({ message: 'Product added successfully', student: newStudent });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product' });
  }
});

// http://localhost:3000/products/list
router.get('/list', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching products', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// router.get('/updatePro/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
//     res.json(product);
//   } catch (error) {
//     console.error('Error fetching product', error);
//     res.status(500).json({ message: 'Error fetching product' });
//   }
// });


export default router;
