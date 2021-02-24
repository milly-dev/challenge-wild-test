import React, { Component } from "react";
import axios from 'axios';
class Form extends Component {
  state = {
      name: "",
  };

  handleSubmit = (event) => {
    axios.post("http://localhost:4000/argonaute/", {name: this.state.name}).then((res) => {
      const data = res.data;
      console.log(data);
      this.setState({ data });
    });
  }

 handleChange = (event) => {
  const value = event.target.value
     this.setState({
        name : value,
     })
 } 

  render() {
    return (
      <form className="new-member-form" onSubmit={this.handleSubmit}>
        <label for="name">Nom de l&apos;Argonaute</label>
        <input onChange={this.handleChange} id="name" name="name" type="text" placeholder="Charalampos" />
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default Form;
