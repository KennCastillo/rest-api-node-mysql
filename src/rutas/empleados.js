const express = require('express');
const router = express.Router();

const mysqlConnection = require('../databaseSqlServer');

//Obtiene todos los registros desde la rais "/""
// router.get('/', (req, res) => {
//     mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
//         if(!err){
//             res.json(rows);
//         } else {
//             console.log(err);
//         }
//     });
// });
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err){
            res.json(rows.recordset);
        } else {
            console.log(err);
        }
    });
});

//Obtener un registro mediante el "id"
// router.get('/:id', (req, res) => {
//     const {id} = req.params;
//     mysqlConnection.query('SELECT * FROM employees WHERE ID = ?', [id], (err, rows, fields) => {
//         if (!err){
//             res.json(rows[0]);
//         } else {
//             console.log(err);
//         }
//     });
// });
router.get('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM employees WHERE id = ' + id, (err, rows, fields) => {
        if(!err){
            res.json(rows.recordset[0]);
        } else {
            console.log(err);
        }
    });
});

// Insertar un nuevo registro
// router.post('/', (req, res) => {
//     const { id, name, salary } = req.body;
//     // const query = `    
//     //     CALL employeeAddOrEdit ?, ?, ?;
//     // `;
//     const query = `exec employeeAddOrEdit ?, ?, ?`;
//     mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
//         if(!err){
//             res.json({Status: 'Empleado guardado'});
//         } else {
//             console.log(err);
//         }
//     });
// });
router.post('/', (req, res) => {
    const { id, name, salary } = req.body;
    const query = 'exec employeeAddOrEdit @id = ' + id + ', @name = \'' + name + '\', @salary=' + salary;
    mysqlConnection.query(query, (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Empleado guardado'});
        } else {
            console.log(err);
        }
    });
});

// Actualizar un registro
// router.put('/:id', (req, res) => {
//     const {name, salary} = req.body;
//     const {id} = req.params;
//     const query = 'CALL employeeAddOrEdit(?, ?, ?)';
//     mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
//         if(!err){
//             res.json({Status: 'Empleado actualizado'});
//         } else {
//             console.log(err);
//         }
//     });
// });
router.put('/:id', (req, res) => {
    const {name, salary} = req.body;
    const {id} = req.params;
    const query = 'exec employeeAddOrEdit @id = ' + id + ', @name = \'' + name + '\', @salary = ' + salary;
    mysqlConnection.query(query, (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Empleado actualizado'});
        } else {
            console.log(err);
        }
    });
});

// Eliminar registro
// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
//     mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err, rows, fields) => {
//         if(!err){
//             res.json({status: 'Empleado eliminado'});
//         } else {
//             console.log(err);
//         }
//     });
// });
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ' + id, (err, rows, fields) => {
        if(!err){
            res.json({status: 'Empleado eliminado'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;