let mongoose = require('mongoose');
// let { validateRole, validateUpdate } = require('./role.validator');
let { validateRole , validateUpdate} = require('./role.validator');
let RoleModel = require('./role.model');
let role = require('./role.model');


//insert new Role
exports.roleInsert = async (req,res,next) => {
    try {
        // Validation
    let { error, value } = validateRole(req.body);

    // Check Error in Validation
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    // Insert table
    let roleModel = new RoleModel(value);
    let savedData = await roleModel.save();

    // Send Response
    res.status(200).json('Data inserted');
    } catch (error) {

      console.log(error);
       // Send Error Response
    res.status(500).json('Error inserting data into database'); 
    }
};


// Update Role
// exports.updateRole = async (req, res, next) => {
//     try {
//       let id = req.params.id;
  
//       // Validation
//       let { error, value } = validateUpdate(req.body);
  
//       // Check Error in Validation
//       if (error) {
//         return res.status(400).send(error.details[0].message);
//       }
  
//       letrole = await RoleModel.findOneAndUpdate({ _id: id }, value, {
//         new: true
//       });
  
//       if (!role) {
//         console.log('Role not found');
//         return res.status(404).json({ message: 'Role not found' });
//       }
  
//       res.status(200).json({role });
//     } catch (error) {
  
//       console.log(error);
//       // Send Error Response
//       res.status(500).json('Error updating table');
//     }
//   };


  // Display Single Role
//   exports.showRole = async (req, res, next) => {
//     try {
//       let id = req.params.id;
//       let role = await RoleModel.findOne({ _id: id });
  
//       if (!role) {
//         console.log('Role not found');
//         return res.status(404).json({ message: 'Role not found' });
//       }
  
//       res.status(200).json({ role });
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   };

  // Display List
//   exports.showRoles = async (req, res, next) => {
//     try {
//       let role = await RoleModel.find();
//       if (!role || role.length === 0) {
//         console.log('Role not found');
//         return res.status(404).json({ message: 'Role not found' });
//       }
//       res.status(200).json({ role });
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   };

//   // Delete Table
exports.deleteRole = async (req, res, next) => {
  try {
    let id = req.params.id;

   let role = await RoleModel.deleteOne({ _id: id });

    if (!role) {
      console.log('Role not found');
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json({ id });
  } catch (error) {
    // Send Error Response
    res.status(500).json({ error });
  }
};

