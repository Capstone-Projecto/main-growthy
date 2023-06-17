const { users, financial_dashboard, users_has_financial_dashboard } = require('../models');
const route = require("express").Router();

// Route add financial
route.post('/add_financial', async (req, res) => {
  const userId = req.user.id;
  const date_time = req.body.date_time;
  const pemasukan = req.body.pemasukan;
  const pengeluaran = req.body.pengeluaran;
  const desc_pemasukan = req.body.desc_pemasukan;
  const desc_pengeluaran = req.body.desc_pengeluaran;
  const type = req.body.type;

  try {
    const user = await users.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (type === 'pemasukan') {
      // Update user balance by adding the income
      const total = user.balance + pemasukan;
      await users.update({ balance: total }, { where: { id: userId } });
    } else if (type === 'pengeluaran') {
      // Check if user balance is sufficient for the expense
      if (user.balance < pengeluaran) {
        return res.status(400).json({ message: 'Your balance is not enough' });
      } else {
        // Update user balance by subtracting the expense
        const total = user.balance - pengeluaran;
        await users.update({ balance: total }, { where: { id: userId } });
      }
    }

    // Create a new entry in the financial dashboard
    const financial = await financial_dashboard.create({
      date_time: date_time,
      pemasukan: pemasukan,
      desc_pemasukan: desc_pemasukan,
      pengeluaran: pengeluaran,
      desc_pengeluaran: desc_pengeluaran,
      type: type,
    });

    // Save the relationship between the user and financial dashboard
    await users_has_financial_dashboard.create({
      user_id: userId,
      financial_dashboard_id: financial.id,
    });

    return res.json({ message: 'Add financial success' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Add financial failed' });
  }
});

// Route get financial by financial id
route.get('/get_financial/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Get user financial data by financial id
    const userFinancial = await users_has_financial_dashboard.findOne({
      where: { financial_dashboard_id: id, user_id: req.user.id },
      include: [
        {
          model: financial_dashboard,
          as: 'financial_dashboard',
        },
      ],
    });

    // Check if there is any financial data
    if (!userFinancial) {
      // If there is no financial data, return an empty array or any appropriate response
      return res.json({
        message: 'No financial data found',
        balance: 0,
        data: null,
      });
    } else {
      const data = userFinancial.financial_dashboard;
      return res.json({ message: 'Get financial success', data: data });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Get financial failed',
      data: null,
    });
  }
});

// Route edit income
route.put('/edit_financial/:id', async (req, res) => {
  const id = req.params.id;
  const date_time = req.body.date_time;
  const pemasukan = req.body.pemasukan;
  const pengeluaran = req.body.pengeluaran;
  const desc_pemasukan = req.body.desc_pemasukan;
  const desc_pengeluaran = req.body.desc_pengeluaran;
  const type = req.body.type;

  const isFinancialUser = await users_has_financial_dashboard.findOne({
    where: { financial_dashboard_id: id, user_id: req.user.id },
  });

  try {
    if (!isFinancialUser) {
      return res.status(403).json({ message: 'You are not authorized to edit this financial' });
    } else {
      const financial = await financial_dashboard.findOne({ where: { id: id } });

      if (!financial) {
        return res.status(404).json({ message: 'Financial not found' });
      }

      const previousPemasukan = financial.pemasukan; // Previous income value
      const previousPengeluaran = financial.pengeluaran; // Previous expense value

      // Update financial dashboard with new data
      await financial_dashboard.update(
        {
          date_time: date_time,
          pemasukan: pemasukan,
          pengeluaran: pengeluaran,
          desc_pemasukan: desc_pemasukan,
          desc_pengeluaran: desc_pengeluaran,
          type: type,
        },
        { where: { id: id } }
      );

      const user = await users.findOne({ where: { id: req.user.id } });
      let total = user.balance;

      if (type === 'pemasukan') {
        // Calculate the difference between the new and previous income amount
        const difference = pemasukan - previousPemasukan;
        total += difference;
      } else if (type === 'pengeluaran') {
        // Calculate the difference between the new and previous expense amount
        const difference = pengeluaran - previousPengeluaran;
        total -= difference;
      }

      // Update user balance with the latest balance
      await users.update({ balance: total }, { where: { id: req.user.id } });

      return res.json({ message: 'Financial successfully updated' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Edit financial failed' });
  }
});

// Route delete financial
route.delete('/delete_financial/:id', async (req, res) => {
  const id = req.params.id;

  const isFinancialUser = await users_has_financial_dashboard.findOne({
    where: { financial_dashboard_id: id, user_id: req.user.id },
  });

  try {
    if (!isFinancialUser) {
      return res.status(403).json({ message: 'You are not authorized to delete this financial' });
    } else {
      const userFinancial = await financial_dashboard.findOne({ where: { id: id } });
      const user = await users.findOne({ where: { id: req.user.id } });

      if (!userFinancial) {
        return res.status(404).json({ message: 'Financial not found' });
      }

      if (userFinancial.type === 'pemasukan') {
        // Return balance by adding the deleted income
        const total = user.balance + userFinancial.pemasukan;
        await users.update({ balance: total }, { where: { id: req.user.id } });
      } else if (userFinancial.type === 'pengeluaran') {
        // Return balance by subtracting the deleted expense
        const total = user.balance - userFinancial.pengeluaran;
        await users.update({ balance: total }, { where: { id: req.user.id } });
      }

      // Delete financial entity from the financial dashboard
      await financial_dashboard.destroy({ where: { id: id } });

      // Delete relationship between the user and financial dashboard
      await users_has_financial_dashboard.destroy({
        where: { financial_dashboard_id: id, user_id: req.user.id },
      });

      return res.json({ message: 'Financial successfully deleted' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Delete financial failed' });
  }
});

// Route get income
route.get('/get_pemasukan', async (req, res) => {
  try {
    // Get user income data
    const userFinancial = await users_has_financial_dashboard.findAll({
      where: { user_id: req.user.id },
      include: [
        {
          model: financial_dashboard,
          as: 'financial_dashboard',
          where: { type: 'pemasukan' },
        },
      ],
    });

    if (!userFinancial || userFinancial.length === 0) {
      return res.status(404).json({ message: 'Get financial failed' });
    } else {
      const data = userFinancial.map((item) => {
        return item.financial_dashboard;
      });

      return res.json({
        message: 'Get financial success',
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Get financial failed',
      data: null,
    });
  }
});

// Route get expenses
route.get('/get_pengeluaran', async (req, res) => {
  try {
    // Get user expense data
    const userFinancial = await users_has_financial_dashboard.findAll({
      where: { user_id: req.user.id },
      include: [
        {
          model: financial_dashboard,
          as: 'financial_dashboard',
          where: { type: 'pengeluaran' },
        },
      ],
    });

    if (!userFinancial || userFinancial.length === 0) {
      return res.status(404).json({ message: 'Get financial failed' });
    } else {
      const data = userFinancial.map((item) => {
        return item.financial_dashboard;
      });

      return res.json({
        message: 'Get financial success',
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Get financial failed',
      data: null,
    });
  }
});

// Route get all financial
route.get('/get_all_financial', async (req, res) => {
  try {
    // Get all user financial data
    const userFinancial = await users_has_financial_dashboard.findAll({
      where: { user_id: req.user.id },
      include: [
        {
          model: financial_dashboard,
          as: 'financial_dashboard',
        },
      ],
    });

    // Check if there is any financial data
    if (!userFinancial || userFinancial.length === 0) {
      // If there is no financial data, return an empty array or any appropriate response
      return res.json({
        message: 'No financial data found',
        balance: 0,
        data: null,
      });
    } else {
      const data = userFinancial.map((item) => {
        return item.financial_dashboard;
      });

      const { balance } = await users.findOne({ where: { id: req.user.id } });

      return res.json({
        message: 'Get financial success',
        balance: balance,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Get financial failed',
      data: null,
    });
  }
});

// Route get all financial by user id
route.get('/get_all_financial/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Get all user financial data
    const userFinancial = await users_has_financial_dashboard.findAll({
      where: { user_id: id },
      include: [
        {
          model: financial_dashboard,
          as: 'financial_dashboard',
        },
      ],
    });

    // Check if there is any financial data
    if (!userFinancial || userFinancial.length === 0) {
      // If there is no financial data, return an empty array or any appropriate response
      return res.json({
        message: 'No financial data found',
        balance: 0,
        data: null,
      });
    } else {
      const data = userFinancial.map((item) => {
        return item.financial_dashboard;
      });

      const { balance } = await users.findOne({ where: { id: id } });

      return res.json({
        message: 'Get financial success',
        balance: balance,
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Get financial failed',
      data: null,
    });
  }
});

module.exports = route;
