import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <footer>
        <p>&copy; Company 2017</p>
      </footer>
    );
  }
};

export default Footer;