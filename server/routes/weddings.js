const express = require("express");
const router = express.Router();
const Wedding = require("../models/wedding");

// Возвращаю все свадьбы из базы данных
router.get("/", async (req, res) => {
  try {
    const weddings = await Wedding.find();
    res.json(weddings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Возвращаю одну свадьбу используя айди
router.get("/:id", getWedding, (req, res) => {
  res.json(res.wedding);
});

// создаю новую свадьбу в БД на основе данных, переданных в теле запроса
router.post("/", async (req, res) => {
  const wedding = new Wedding({
    title: req.body.title,
    description: req.body.description,
    attachments: req.body.attachments,
    deadline: req.body.deadline,
    author: req.body.author,
    participants: req.body.participants
  });

  try {
    const newWedding = await wedding.save();
    res.status(201).json(newWedding);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// обновляю свадьбу на основе данных переданных в теле запроса
router.patch("/:id", getWedding, async (req, res) => {
  if (req.body.title != null) {
    res.wedding.title = req.body.title;
  }
  if (req.body.description != null) {
    res.wedding.description = req.body.description;
  }
  if (req.body.attachments != null) {
    res.wedding.attachments = req.body.attachments;
  }
  if (req.body.deadline != null) {
    res.wedding.deadline = req.body.deadline;
  }
  if (req.body.author != null) {
    res.wedding.author = req.body.author;
  }
  if (req.body.participants != null) {
    res.wedding.participants = req.body.participants;
  }
  try {
    const updatedWedding = await res.wedding.save();
    res.json(updatedWedding);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// удаляю свадьбу
router.delete("/:id", getWedding, async (req, res) => {
  try {
    await res.wedding.remove();
    res.json({ message: "Wedding deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// эта функция, которая получает свадьбу из базы данных на основе
// ее уникального идентификатора :id и сохраняет ее в объекте ответа
// res.wedding. Она используется в функциях обработки маршрутов
// для получения и обновления свадеб в базе данных
async function getWedding(req, res, next) {
  let wedding;
  try {
    wedding = await Wedding.findById(req.params.id);
    if (wedding == null) {
      return res.status(404).json({ message: "Cannot find wedding" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.wedding = wedding;
  next();
}

module.exports = router;
