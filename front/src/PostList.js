import React, {Component} from "react";
import PropTypes from "prop-types";

import Post from "./Post.js";

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  renderPosts() {
    return this.props.posts.map((t,i) => {
      return <Post post={t} key={i} />
    });
  }

  render() {
    return(<div>
      {this.props.posts ? this.renderPosts() : "No posts :("}
    </div>);
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostList;
