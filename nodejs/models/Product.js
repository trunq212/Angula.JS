import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  MSSV: String,
  firstName: String,
  lastName: String,
  dob: String,
  classCode: String,
  imageUrlChinh: String, 
  imageUrlPhu: [{ type: String }], 
  programmingLanguages: [{ type: String }]

});

const Student = mongoose.model('student', studentSchema);

export default Student;
     