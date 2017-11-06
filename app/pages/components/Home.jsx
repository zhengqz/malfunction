import React from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row row-offcanvas row-offcanvas-right">
            {this.props.Content}
            <Navbar />
          </div>
          <hr/>
          <Footer/>
        </div>
      </div>
    );
  }
};

export default Home;