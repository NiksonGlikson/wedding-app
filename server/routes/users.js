const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middlewares/auth");

// Регистрация пользователя
router.post("/register", async (req, res) => {
  console.log("Received register request:", req.body);
  const { name, phone, password } = req.body;

  try {
    // Проверяем, существует ли пользователь с таким номером телефона
    let user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({ msg: "Пользователь уже существует" });
    }

    user = new User({
      name,
      phone,
      password,
    });

    // Хеширование пароля
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Создаем и отправляем токен
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ошибка сервера");
  }
});

// Вход пользователя
router.post("/login", async (req, res) => {
  const { phone, password } = req.body;

  try {
    let user = await User.findOne({ phone });

    if (!user) {
      return res.status(400).json({ msg: "Неверный номер телефона или пароль" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Неверный номер телефона или пароль" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Ошибка сервера");
  }
});

module.exports = router;
