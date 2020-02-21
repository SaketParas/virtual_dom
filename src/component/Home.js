import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age:30,
        }
    }
    change_age = () => {
        const age_change = setTimeout(function (){
            this.setState({
                age:35
            });
        }.bind(this),2000)
        console.log(this.state);
        
    }
    render() {
        
        return (
            <div>
                My Age {this.state.age}<br/><br/>
                <button onClick={this.change_age}>Change Age</button>
            </div>
        )
    }
}
export default Home 