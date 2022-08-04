import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { connect } from 'react-redux';
import { deleteUser } from 'redux/contacts/contacts-actions';
//-----------------------------------------------------------------//
import { Item } from './Item';
const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id} name={name} phone={phone} onDelete={onDelete} id={id} />
      ))}
    </ul>
  );
};

// Item.propTypes = {
//   contact: PropTypes.array,
//   onDelete: PropTypes.func.isRequired,
// };

const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const visibleContacts = items.filter(({ name }) => name.includes(filter));
  return { contacts: visibleContacts };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteUser(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
