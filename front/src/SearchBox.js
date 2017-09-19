import React, {Component} from "react";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }

  onEnter(evt) {
    this.props.search(evt.target.value);
  }

  render() {
    return(<div>
      <input type="text"
        placeholder="Buscar"
        onInput = {this.onEnter.bind(this)}/>
    </div>);
  }
}
