import React, { Component } from 'react';
import shortid from 'shortid';
import s from "../Form/Form.module.css";


export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  InputValues = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();

    const checkName = this.props.contactList({ name: this.state.name });
    if (checkName) {
      alert('Це ім"я вже існує');

      return;
    }

    this.props.onSubmit({
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });
    this.resetInputValues();
  };

  resetInputValues = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const idName = shortid.generate();
    const idNumber = shortid.generate();
    //   const  = onAlert;
    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label htmlFor={idName} className={s.labelName}>
          Имя
        </label>
        <input
          id={idName}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <label htmlFor={idNumber} className={s.labelNumber}>
          Номер
        </label>
        <input
          id={idNumber}
          type="tel"
          pattern="^[ 0-9]+$"
          name="number"
          value={this.state.number}
          onChange={this.InputValues}
          autoComplete="off"
        ></input>
        <button className={s.btnForm} type="submite">
          Добавить контакт
        </button>
      </form>
    );
  }
}