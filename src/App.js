import React, { Component } from 'react';
import {Friend} from './Friend'
import Big from './Big'
import FIND from './FIND.js'
import Scroll from './Scroll'







class App extends Component {
    constructor() {
        super()

        this.state = {
            Friend: Friend,
            finder: "",
        }
    }

    changer = (event) => {
        this.setState({finder : event.target.value})
   
    }


    render() {
        const y = this.state.Friend.filter(Friend =>
            {
              return  Friend.name.toLowerCase().includes(this.state.finder.toLowerCase())
            })
        return (
         
            <div className="tc ">
                <h1 className ="title">Salem's Friends </h1>
                <FIND big={this.changer}/>
                <Scroll>
                <Big Friend={y} />
                </Scroll>
            </div>
        );
    }
}
export default App;