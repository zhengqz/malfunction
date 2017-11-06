import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <div className="list-group">
          <a href="#" className="list-group-item active">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
        </div>
      </div>
    );
  }
};

export default Navbar;