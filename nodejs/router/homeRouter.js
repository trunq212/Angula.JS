import express from 'express';
import Student from '../models/Product.js';

const router = express.Router();

// http://localhost:3000/home

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching ', error);
    res.status(500).json({ message: 'Error fetching student' });
  }
});

// http://localhost:3000/home/student/id
router.get('/detail/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: ' not found' });
    }
    res.json(student);
  } catch (error) {
    console.error('Error fetching product', error);
    res.status(500).json({ message: 'Error fetching product' });
  }
});

export default router;
