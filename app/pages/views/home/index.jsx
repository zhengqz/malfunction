import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../../components/Home';

const Content = (
  <div className="col-xs-12 col-sm-9">
    <p className="pull-right visible-xs">
      <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
    </p>
    <div className="jumbotron">
      <h1>Hello, world!</h1>
      <p>This is an example to show the potential of an offcanvas layout pattern in Bootstrap. Try some responsive-range viewport sizes to see it in action.</p>
    </div>
    <div className="row">
      <div className="col-xs-6 col-lg-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-xs-6 col-lg-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-xs-6 col-lg-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-xs-6 col-lg-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-xs-6 col-lg-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
      </div>
      <div className="col-xs-6 col-lg-4">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
      </div>
    </div>
  </div>
);


ReactDOM.render(<Home Content={Content}/>, document.getElementById('app'));