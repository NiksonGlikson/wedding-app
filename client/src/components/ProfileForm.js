import React, { useState } from "react";
import { Button, Form, Col, Row, Container } from "react-bootstrap";

const ProfileForm = ({ onClose }) => {
  const [user, setUser] = useState({
    name: '',
    phone: ''
  });
  const [surname, setSurname] = useState("");
  const [org, setOrg] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Здесь вы можете отправить обновленные данные пользователя на сервер.
    // После успешного обновления, обновите состояние пользователя.
    // setUser({ name: user.name, phone: user.phone });
  };

  return (
    <Container>
      <h2>Редактирование профиля</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="nameInput">
          <Form.Label column sm={2}>
            Имя
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={user.name}
              readOnly
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="surnameInput">
          <Form.Label column sm={2}>
            Фамилия
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Введите фамилию"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="phoneInput">
          <Form.Label column sm={2}>
            Номер телефона
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="tel"
              value={user.phone}
              readOnly
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formFile">
          <Form.Label column sm={2}>
            Загрузить фото
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="orgInput">
          <Form.Label column sm={2}>
            Организация
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
              placeholder="Введите название организации"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="currentPasswordInput">
          <Form.Label column sm={2}>
            Текущий пароль
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              value="********"
              readOnly
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="newPasswordInput">
          <Form.Label column sm={2}>
            Новый пароль
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Введите новый пароль"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="repeatPasswordInput">
          <Form.Label column sm={2}>
            Повторите новый пароль
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Введите новый пароль еще раз"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="justify-content-end">
          <Col sm="auto">
            <Button type="submit">Сохранить изменения</Button>
          </Col>
          <Col sm="auto">
            <Button variant="secondary" onClick={onClose}>
              Закрыть
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ProfileForm;