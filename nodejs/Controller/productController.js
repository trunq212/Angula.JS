import Student from '../models/Product.js';

async function createStudent( MSSV, firstName, lastName, imageUrlChinh,imageUrlPhu, dob, classCode,  programmingLanguages) {
  try {
    const student = await Student.create({   MSSV, firstName, lastName, imageUrlChinh,imageUrlPhu, dob, classCode,  programmingLanguages});
    await student.save();
    return { message: 'User registered successfully' };
  } catch (error) {
    throw new Error('Error registering user');
  }
}

module.exports = {
  createStudent
};