import $ from 'jquery';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

$(() => {
    $('.loading').remove();
    ReactDOM.render(
        <Router>
            <div>
                <Route exact path="/" component={() => (<div>Hello World</div>)}/>
            </div>
        </Router>,
        document.getElementById('app')
    );
});
