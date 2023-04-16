import React, { useState } from "react";

// В этом компоненте мы создаем форму для создания новой свадьбы. 
// Используем useState для создания состояний для каждого поля ввода формы. 
// При отправке формы вызывается функция handleSubmit, которая создает новую свадьбу, 
// используя функцию addWedding, переданную в компонент через пропсы. 
// После отправки формы все поля ввода сбрасываются.

const NewWeddingForm = ({ addWedding }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState("");
  const [deadline, setDeadline] = useState("");
  const [author, setAuthor] = useState("");
  const [participants, setParticipants] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWedding({
      title,
      description,
      attachments,
      deadline,
      author,
      participants,
    });
    setTitle("");
    setDescription("");
    setAttachments("");
    setDeadline("");
    setAuthor("");
    setParticipants("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Wedding</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Attachments:
        <input
          type="text"
          value={attachments}
          onChange={(e) => setAttachments(e.target.value)}
        />
      </label>
      <br />
      <label>
        Deadline:
        <input
          type="text"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </label>
      <br />
      <label>
        Author:
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
      <br />
      <label>
        Participants:
        <input
          type="text"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
};

export default NewWeddingForm;
