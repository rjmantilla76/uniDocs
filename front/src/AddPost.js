import React, {Component} from 'react';
import axios from 'axios';
import update from 'immutability-helper';


class AddPost extends Component {

  constructor(props){
    super(props);
    this.state={
      post: {
        username: "",
        course: "",
        post: "",
        price: "",
        contact: "",
      }
    }
  }

  addPost() {
    axios.post('/addPost', this.state.post)
    .then(response => {
      this.clearAddPostFields();
    })
  }

  clearAddPostFields() {
    this.setState({post: update(this.state.post, {username: {$set: ""}})});
    this.setState({post: update(this.state.post, {course: {$set: ""}})});
    this.setState({post: update(this.state.post, {post: {$set: ""}})});
    this.setState({post: update(this.state.post, {price: {$set: ""}})});
    this.setState({post: update(this.state.post, {contact: {$set: ""}})});
  }

  render(){
    return (
      <div>
        <h2>Agregar Post</h2>
        <table className="table table-striped custab">
          <thead>
            <tr>
              <th>Campo</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Nombre </td>
              <td> <input type="text" value={this.state.post.username} onChange={(event) => { this.setState({post: update(this.state.post, {username: {$set: event.target.value}})}) }} /> </td>
            </tr>
            <tr>
              <td> Materia </td>
              <td> <input type="text" value={this.state.post.course} onChange={(event) => { this.setState({post: update(this.state.post, {course: {$set: event.target.value}})}) }} /> </td>
            </tr>
            <tr>
              <td> Descripción </td>
              <td> <input type="text" value={this.state.post.post} onChange={(event) => { this.setState({post: update(this.state.post, {post: {$set: event.target.value}})}) }} /> </td>
            </tr>
            <tr>
              <td> Precio </td>
              <td> <input type="text" value={this.state.post.price} onChange={(event) => { this.setState({post: update(this.state.post, {price: {$set: event.target.value}})}) }} /> </td>
            </tr>
            <tr>
              <td> Info Contacto </td>
              <td> <input type="text" value={this.state.post.contact} onChange={(event) => { this.setState({post: update(this.state.post, {contact: {$set: event.target.value}})}) }} /> </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-default btn-xs pull-right" onClick={this.addPost.bind(this)}> Agregar </button>
      </div>
    );
  }
}

export default AddPost;