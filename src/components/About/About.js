import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route} from 'react-router-dom';
import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
          <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
          <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
          <h3>Contact</h3>
          </Link>
        </div>


        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact}/>
            <Route exact path='/about' 
            render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit. Convallis posuere morbi leo urna. Ut venenatis tellus in metus. Eu scelerisque felis imperdiet proin fermentum. A iaculis at erat pellentesque. Tempor orci dapibus ultrices in. Etiam erat velit scelerisque in dictum non consectetur a. Est ante in nibh mauris cursus mattis. Massa tempor nec feugiat nisl pretium fusce id velit. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Porta lorem mollis aliquam ut porttitor leo a diam. Dolor purus non enim praesent elementum facilisis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet nisl suscipit adipiscing. Pretium nibh ipsum consequat nisl vel. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Sit amet luctus venenatis lectus magna fringilla urna. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut.
                </p>
              </div>
            )}
          />
          </Switch>
        </div>
      </div>
    )
  }
}