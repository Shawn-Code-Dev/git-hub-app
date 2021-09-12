import React, { Component } from 'react'

class UserInfo extends Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login);
    console.log(this.props.user)
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gist,
      hireable
    } = this.props.user
    
    const {loading} = this.props;
    
    return (
      <div>
        {name}
        {location}
      </div>
    )
  }
}

export default UserInfo
