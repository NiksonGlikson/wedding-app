import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';

const NewWeddingForm = ({ addWedding }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [author, setAuthor] = useState('');
  const [participants, setParticipants] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addWedding({
      title,
      description,
      budget,
      deadline,
      author,
      participants,
    });
    setTitle('');
    setDescription('');
    setBudget('');
    setDeadline('');
    setAuthor('');
    setParticipants('');
  };

  return (
    <Container>
      <h2>Создание свадьбы</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="title">
          <Form.Label column sm={2}>
            Название свадьбы
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="description">
          <Form.Label column sm={2}>
            Описание
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="budget">
          <Form.Label column sm={2}>
            Бюджет
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="deadline">
          <Form.Label column sm={2}>
            Дата свадьбы
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="author">
                <Form.Label column sm={2}>
                  Автор
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </Col>
              </Form.Group>
      
              <Form.Group as={Row} controlId="participants">
                <Form.Label column sm={2}>
                  Участники
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    placeholder="Участники через запятую"
                  />
                </Col>
              </Form.Group>
      
              <Button type="submit">Создать свадьбу</Button>
            </Form>
          </Container>
        );
      };
      
      export default NewWeddingForm;
      

