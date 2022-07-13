import PropTypes from 'prop-types';
import { Container, Input, Description } from './styledFilter';

function Filter({ filter, value }) {
  return (
    <Container>
      <Description>Find contacts by name</Description>
      <Input
        type="text"
        onChange={filter}
        placeholder="Search..."
        value={value}
      />
    </Container>
  );
}

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;