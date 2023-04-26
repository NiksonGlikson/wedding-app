const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const jwt = require("jsonwebtoken");

// Регистрация пользователя
router.post("/register", async (req, res) => {
  const { name, phone, password } = req.body;

  try {
    // Проверяем, есть ли пользователь с таким телефоном
    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      return res.status(400).json({ message: "Пользователь c таким телефоном уже существует" });
    }

    // Хеширование пароля
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Создаем нового пользователя
    const newUser = new User({
      name,
      phone,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Вход пользователя
router.post("/login", async (req, res) => {
  const { phone, password } = req.body;

  try {
    // Проверяем, существует ли пользователь с таким телефоном
    const user = await user.findOne({ phone });

    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }

    // Сравниваем пароли
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Неверный пароль" });
    }
    res.status(200).json({ message: "Пользователь успешно вошел" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

