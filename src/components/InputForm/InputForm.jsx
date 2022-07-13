import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from './styledInputForm';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render = () => {
    return (
      <Form
        onSubmit={e => {
          const newUser = this.props.handleSubmit(e, this.state);

          if (newUser) {
            this.setState({ name: '', number: '' });
          }
        }}
      >
        <h2>Name</h2>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="First Name Last Name"
          value={this.state.name}
          required
          onChange={this.handleInput}
        />
        <h2>Phone</h2>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="+38 (099) 999-99-99"
          value={this.state.number}
          required
          onChange={this.handleInput}
        />

        <button type="submit">Add contact</button>
      </Form>
    );
  };
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default InputForm;