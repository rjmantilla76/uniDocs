import React, {Component} from "react";

import PostList from "./PostList.js";
import SearchBox from "./SearchBox.js";
import AddPost from "./AddPost.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      posts:[
      ],
      search: ""
    };
  }
  //Sería bueno sacar lo que está adentro para volverlo a llamar cuando alguien ingrese un post
  //En este momento no se actualiza la lista una vez un usuario añade unpost
  componentDidMount() {
    fetch("/getposts", {method:"GET",
      headers:{accept:"application/json"}})
      .then((res) => {
        if(res.ok)
          return res.json();
      })
      .then((posts) => {
        this.setState({
          posts: posts
        });
      });
  }

  search(text) {
    this.setState ({
      search: text
    });
  }


  render() {
    return (<div>
      <h3>Busqueda por materia</h3>
      <div>
        <SearchBox search={this.search.bind(this)}/>
      </div>
      <PostList posts={this.state.posts.filter((t) => {
        return t.course.startsWith(this.state.search);
      }) }/>
      <AddPost />
    </div>);
  }
}
export default App;
