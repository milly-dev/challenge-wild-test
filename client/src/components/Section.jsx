import React, { Component } from "react";
import Form from "./Form";
import axios from "axios";

class Section extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/argonaute/list").then((res) => {
      const data = res.data;
      console.log(data);
      this.setState({ data });
    });
  }

  render() {
    return (
      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <Form />
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
          {this.state.data.map((argonaute) => {
            return <div className="member-item">{argonaute.name}</div>;
          })}
        </section>
      </main>
    );
  }
}

export default Section;
