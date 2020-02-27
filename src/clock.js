import React from 'react';


//toLocaleString will show both date and time together

class clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    render(){
        return(
            <p>The time is {this.state.time.toLocaleTimeString()}</p>
        );
    }
}

setInterval(1000);

export default clock;