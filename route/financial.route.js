const { users, financial_dashboard, users_has_financial_dashboard } = require('../models');
const route = require("express").Router();

// Route add financial
route.post('/add_financial', async (req, res) => {
  const id = req.user.id;
  const date_time = req.body.date_time;
  const pemasukan = req.body.pemasukan;
  const pengeluaran = req.body.pengeluaran;
  const desc_pemasukan = req.body.desc_pemasukan;
  const desc_pengeluaran = req.body.desc_pengeluaran;
  const type = req.body.type;

  try {
    const user = await users.findOne({ where: { id: id } });
    if (user) {
      if (type === 'pemasukan') {
        // Mengupdate saldo pengguna dengan menambahkan pemasukan
        const total = user.balance + pemasukan;
        await users.update({ balance: total }, { where: { id: id } });
      } else if (type === 'pengeluaran') {
        // Memeriksa apakah saldo pengguna cukup untuk melakukan pengeluaran
        if (user.balance < pengeluaran) {
          return res.send('Your balance is not enough');
        } else {
          // Mengupdate saldo pengguna dengan mengurangi pengeluaran
          const total = user.balance - pengeluaran;
          await users.update({ balance: total }, { where: { id: id } });
        }
      }

      // Membuat entitas baru untuk financial dashboard
      const financial = await financial_dashboard.create({
        date_time: date_time,
        pemasukan: pemasukan,
        desc_pemasukan: desc_pemasukan,
        pengeluaran: pengeluaran,
        desc_pengeluaran: desc_pengeluaran,
        type: type,
      });

      // Menyimpan hubungan antara pengguna dan financial dashboard
      await users_has_financial_dashboard.create({
        user_id: id,
        financial_dashboard_id: financial.id,
      });

      return res.send('Add financial success');
    }
  } catch (error) {
    return res.send('Add financial failed');
  }
});

// Route edit pemasukan
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
      return res.send('You are not authorized to edit this financial');
    } else {
      const financial = await financial_dashboard.findOne({ where: { id: id } });

      if (!financial) {
        return res.send('Financial not found');
      }

      const previousPemasukan = financial.pemasukan; // Nilai pemasukan sebelumnya
      const previousPengeluaran = financial.pengeluaran; // Nilai pengeluaran sebelumnya

      // Mengupdate financial dashboard dengan data baru
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
        // Menghitung selisih antara nominal pemasukan baru dengan sebelumnya
        const difference = pemasukan - previousPemasukan;
        total += difference;
      } else if (type === 'pengeluaran') {
        // Menghitung selisih antara nominal pengeluaran baru dengan sebelumnya
        const difference = pengeluaran - previousPengeluaran;
        total -= difference;
      }

      // Mengupdate saldo pengguna dengan saldo terbaru
      await users.update({ balance: total }, { where: { id: req.user.id } });

      return res.send('Financial successfully updated');
    }
  } catch (error) {
    return res.send('Edit financial failed');
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
      return res.send('You are not authorized to delete this financial');
    } else {
      const userFinancial = await financial_dashboard.findOne({ where: { id: id } });
      const user = await users.findOne({ where: { id: req.user.id } });

      if (userFinancial.type === 'pemasukan') {
        // Mengembalikan saldo dengan menambahkan pemasukan yang dihapus
        const total = user.balance + userFinancial.pemasukan;
        await users.update({ balance: total }, { where: { id: req.user.id } });
      } else if (userFinancial.type === 'pengeluaran') {
        // Mengembalikan saldo dengan mengurangi pengeluaran yang dihapus
        const total = user.balance - userFinancial.pengeluaran;
        await users.update({ balance: total }, { where: { id: req.user.id } });
      }

      // Menghapus entitas keuangan dari financial dashboard
      await financial_dashboard.destroy({ where: { id: id } });

      return res.send('Financial successfully deleted');
    }
  } catch (error) {
    return res.send('Delete financial failed');
  }
});

// Route get pemasukan
route.get('/get_pemasukan', async (req, res) => {
  try {
    // Mengambil data pemasukan pengguna
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

    if (!userFinancial) {
      return res.send('Get financial failed');
    } else {
      const data = userFinancial.map((item) => {
        return item.financial_dashboard;
      });

      return res.send({
        message: 'Get financial success',
        data: data,
      });
    }
  } catch (error) {
    return res.send('Get financial failed');
  }
});

// Route get pengeluaran
route.get('/get_pengeluaran', async (req, res) => {
  try {
    // Mengambil data pengeluaran pengguna
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
      return res.send('Get financial failed');
    } else {
      const data = userFinancial.map((item) => {
        return item.financial_dashboard;
      });

      return res.send({
        message: 'Get financial success',
        data: data,
      });
    }
  } catch (error) {
    return res.send('Get financial failed');
  }
});

// Route get all financial
route.get('/get_all_financial', async (req, res) => {
  try {
    // Mengambil semua data keuangan pengguna
    const userFinancial = await users_has_financial_dashboard.findAll({
      where: { user_id: req.user.id },
      include: [
        {
          model: financial_dashboard,
          as: 'financial_dashboard',
        },
      ],
    });

    if (!userFinancial || userFinancial.length === 0) {
      return res.send('Get financial failed');
    } else {
      const data = userFinancial.map((item) => {
        return item.financial_dashboard;
      });

      const { balance } = await users.findOne({ where: { id: req.user.id } });

      return res.send({
        message: 'Get financial success',
        balance: balance,
        data: data,
      });
    }
  } catch (error) {
    return res.send('Get financial failed');
  }
});

module.exports = route;