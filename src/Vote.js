import React from 'react';
export default class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      votes:[],
      totalReactPackages:[]
    };
  }

  componentDidMount(){
    this.loadData();
  }
  
  loadData = () =>{
    let votes = this.state.votes;
    //votes.push('vote1')
    //this.setState({votes:votes});
    fetch('http://127.0.0.1:5000/api/v1/users/')
        .then(response => response.json())
        .then(data => {
                this.setState({ totalReactPackages: data })
                this.setState({votes:data.employees});
                console.log(data);
            });
  }

  addVote = () => {
    let votes = this.state.votes;
    votes.push('vote2')
    this.setState({votes:votes});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <p>Votes</p>
        </div>
        {this.state.votes.map((vote) => <p>vote : {vote}</p>)}
        <button onClick={() => {this.addVote()}}>Add Vote</button>
      </div>
    );
  }
}