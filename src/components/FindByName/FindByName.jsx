import PropTypes from 'prop-types';
import s from './Input.module.css';
import { connect } from 'react-redux';
import { filterUser } from 'redux/contacts/contacts-actions';
//-----------------------------------------------//
export const FindByName = ({ value, onChange }) => {
  //   handleChange = (event) => {
  //     const {value} = event.target
  //     this.setState({filter : value})
  //   }
  return (
    <label className={s.label}>
      Find Contacts By name:{' '}
      <input
        className={s.input}
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

// FindByName.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
const mapStateToProps = state => {
  const { filter } = state.contacts;
  return { value: filter };
};
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterUser(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FindByName);
