import React from 'react';
import PropTypes from 'prop-types';
import { Container, List, ListItem, Button } from './styledPhoneList';

function PhoneList({ contacts, deleteUser }) {
  console.log(contacts);
  return (
    <Container>
      {contacts.length === 0 ? (
        <p>There is no user</p>
      ) : (
        <List>
          {contacts.map(item => (
            <ListItem key={item.id}>
              <p>
                {item.name}: {item.number}
              </p>
              <Button type="button" onClick={() => deleteUser(item.id)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

PhoneList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteUser: PropTypes.func.isRequired,
};

export default PhoneList;
