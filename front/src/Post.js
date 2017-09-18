import React, {Component} from "react";
import PropTypes from "prop-types";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div>
      <div className="text">Nombre Persona: {this.props.post.username}</div>
      <div className="name">Materia: {this.props.post.course}</div>
      <div className="text">Descripción: {this.props.post.post}</div>
      <div className="text">Precio: {this.props.post.price}</div>
      <div className="text">Contacto: {this.props.post.contact}</div>
      <br/>
      <br/>
    </div>);
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
