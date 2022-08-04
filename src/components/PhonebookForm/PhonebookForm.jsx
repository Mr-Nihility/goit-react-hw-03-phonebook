import { Component } from 'react';
import { FormSubmit } from './FormSubmit';
import { NameInput } from './NameInput';
import { PhoneInput } from './PhoneInput';
// import PropTypes from 'prop-types';
import { addUser } from 'redux/contacts/contacts-actions';

import { connect } from 'react-redux';

export class PhonebookForm extends Component {
  state = {
    name: '',
    phone: '',
  };

  //   static propTypes = {
  //     onSubmit: PropTypes.func,
  //   };

  handlerInput = event => {
    const { name, value } = event.target;
    return this.setState({ [name]: value });
  };

  //   handlerSubmit = (contact) => {
  //     const isHere = this.state.contacts.some(({name}) => name === contact.name)

  //     if (isHere) {
  //       alert(`Name already in contacts`)
  //     return
  //     }
  //     this.setState((ps) => ({ contacts: [...ps.contacts, {...contact, id: nanoid()}] }) )

  //   }

  handSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    // const isHere = this.props.items.some(
    //   ({ name }) => name === this.state.name
    // );
    // if (isHere) {
    //   alert(`Name already in contacts`);
    //   return;
    // }
    this.props.onAddContact({ ...this.state });

    this.setState({ name: '', phone: '' });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handSubmit}>
        <NameInput
          value={name}
          name="name"
          func={this.handlerInput}
        ></NameInput>
        <PhoneInput
          value={phone}
          name="phone"
          func={this.handlerInput}
        ></PhoneInput>
        <FormSubmit title="Add contact"></FormSubmit>
      </form>
    );
  }
}
// const mapStateToProps = state => {
//   const { items } = state.contacts;
//   return { items: items };
// };
const mapDispatchToProps = dispatch => ({
  onAddContact: user => dispatch(addUser(user)),
});
export default connect(null, mapDispatchToProps)(PhonebookForm);
