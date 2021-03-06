import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container, ContainerTitle } from './styledContainer';

import InputForm from '../InputForm/InputForm';
import PhoneList from '../PhoneList/PhoneList';
import Filter from '../Filter/Filter';


class ContainerApp extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
    filter: '',
  };

  handleSubmitForm = (e, data) => {
    e.preventDefault();
    const item = { id: nanoid(), ...data }
    if (this.checkUsers(data)) {
      alert(`${data.name} is already in contacts`);
      return false;
    }

    this.setState(prevState => prevState.contacts.push(item));
    return true;
  };
  

  handleFilter = e => {
    const lowerCaseWord = e.currentTarget.value.toLowerCase();
    this.setState({
      filter: lowerCaseWord,
    });
  };

  checkUsers(data) {
    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );
  }

  deleteUser = deletedId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== deletedId),
    });
  };

  filterUsers() {
    return this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter)
    );
  }

  render() {
    const renderData = this.filterUsers();

    return (
      <Container>
        <ContainerTitle>Phonebook</ContainerTitle>
        <InputForm handleSubmit={this.handleSubmitForm} />

        <ContainerTitle>Contacts</ContainerTitle>
        <Filter filter={this.handleFilter} value={this.state.filter} />
        <PhoneList contacts={renderData} deleteUser={this.deleteUser} />
      </Container>
    );
  }
}

export default ContainerApp;
