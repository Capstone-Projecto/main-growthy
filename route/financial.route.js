//make financial.route.js in route folder
const { where } = require('sequelize');
const{ users, financial_dashboard, users_has_financial_dashboard } = require('../models');
const route = require("express").Router();

// Route pemasukan
route.post('/add_pemasukan', async(req, res) => {
    // const id = req.users.id
    const date_time = req.body.date_time
    const pemasukan = req.body.pemasukan
    const desc_pemasukan = req.body.desc_pemasukan

    // Logic add pemasukan
    const financial = await financial_dashboard.create({date_time: date_time, pemasukan: pemasukan, desc_pemasukan: desc_pemasukan})
    if(!financial){
        return res.send('Add financial failed')
    }else {
        await users_has_financial_dashboard.create({user_id: 1, financial_dashboard_id: financial.id})
        return res.send('Add financial success')
    }
})

// Route pengeluaran
route.post('/add_pengeluaran', async(req, res) => {
    // const id = req.users.id
    const date_time = req.body.date_time
    const pengeluaran = req.body.pengeluaran
    const desc_pengeluaran = req.body.desc_pengeluaran

    // Logic add pengeluaran
    const financial = await financial_dashboard.create({date_time: date_time, pengeluaran: pengeluaran, desc_pengeluaran: desc_pengeluaran})
    if(!financial){
        return res.send('Add financial failed')
    }else {
        await users_has_financial_dashboard.create({user_id: 1, financial_dashboard_id: financial.id})
        return res.send('Add financial success')
    }
})

// Route edit pemasukan
route.put('/edit_pemasukan/:id', async(req, res) => {
    const id = req.params.id
    const date_time = req.body.date_time
    const pemasukan = req.body.pemasukan
    const desc_pemasukan = req.body.desc_pemasukan

    // Logic edit pemasukan
    const financial = await financial_dashboard.update({date_time: date_time, pemasukan: pemasukan, desc_pemasukan: desc_pemasukan}, {where: {id: id}})
    if(!financial){
        return res.send('Edit financial failed')
    }else {
        return res.send('Edit financial success')
    }
})

// Route edit pengeluaran
route.put('/edit_pengeluaran/:id', async(req, res) => {
    const id = req.params.id
    const date_time = req.body.date_time
    const pengeluaran = req.body.pengeluaran
    const desc_pengeluaran = req.body.desc_pengeluaran

    // Logic edit pengeluaran
    const financial = await financial_dashboard.update({date_time: date_time, pengeluaran: pengeluaran, desc_pengeluaran: desc_pengeluaran}, {where: {id: id}})
    if(!financial){
        return res.send('Edit financial failed')
    }else {
        return res.send('Edit financial success')
    }
})

// Route delete pemasukan
route.delete('/delete_pemasukan/:id', async(req, res) => {
    const id = req.params.id

    // Logic delete pemasukan
    const financial = await financial_dashboard.destroy({where: {id: id}})
    if(!financial){
        return res.send('Delete financial failed')
    }else {
        return res.send('Delete financial success')
    }
})

// Route delete pengeluaran
route.delete('/delete_pengeluaran/:id', async(req, res) => {
    const id = req.params.id

    // Logic delete pengeluaran
    const financial = await financial_dashboard.destroy({where: {id: id}})
    if(!financial){
        return res.send('Delete financial failed')
    }else {
        return res.send('Delete financial success')
    }
})

// Route get pemasukan
route.get('/get_pemasukan', async(req, res) => {
    // Logic get pemasukan
    const financial = await financial_dashboard.findAll({where: {type: "pemasukan"}})
    if(!financial){
        return res.send('Get financial failed')
    }else {
        return res.send(financial)
    }
})

// Route get pengeluaran
route.get('/get_pengeluaran', async(req, res) => {
    // Logic get pengeluaran
    const financial = await financial_dashboard.findAll({where: {type: "pengeluaran"}})
    if(!financial){
        return res.send('Get financial failed')
    }else {
        return res.send(financial)
    }
})

// Route get all financial
route.get('/get_all_financial', async(req, res) => {
    // Logic get all financial
    const financial = await financial_dashboard.findAll()
    if(!financial){
        return res.send('Get financial failed')
    }else {
        return res.send(financial)
    }
})

module.exports = route;