'use strict';

const Employee = require("../models/employee.model");

exports.findAll = (req, res) => {
    Employee.findAll((err, employee) => {
        console.log('controller')
        if (err) {
            res.send(err);
        }
        console.log('res ', employee)
        res.send(employee);
    })
}

exports.create = (req, res) => {
    const new_employee = new Employee(req.body);

    //handle null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({
            error: true,
            message: 'Please provide all required fields'
        })
    } else {
        Employee.create(new_employee, (err, employee) => {
            if (err) res.send(err);
            request.json({
                error: false,
                message: "Employee added successfully",
                data: employee
            })
        })
    }
}

exports.findById = (req, res) => {
    Employee.findById(req.params.id, (err, employee) => {
        if (err) res.send(err);
        request.json(employee)
    })
}

exports.update = (req, res) => {
    //handle null response
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(4000).send({
            error: true,
            message: "Please provide all required fields"
        })
    } else {
        Employee.update(req.params.id, new Employee(req.body), (err, employee) => {
            if (err) res.send(err);
            request.json({
                error: false,
                message: "Employye successfully updated!"
            })
        })
    }
}

exports.delete = (req, res) => {
    Employee.delete(req.params.id, (err, employee) => {
        if (err) res.send(err);
        res.json({
            error: false,
            message: "Employee successfully deleted!"
        })
    })
}