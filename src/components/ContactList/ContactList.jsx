import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import { ListBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>

            <ListBtn type="button" onClick={() => onDelete(id)}>
              Delete contact
            </ListBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
