import React, { Component } from "react";
import {Table, Button} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage, faThumbsDown, faThumbsUp, faMoneyCheckAlt, faSearchDollar} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  state =
  {
    isLoading : false,
    items :
    [
      {
        "id":"100",
        "Game":"Skat 1.0",
        "Players":"2-10"
      }
    ]
  };

  remove(id) {
    let updatedItems = [...this.state.items].filter (i => i.id !== id);
    this.setState({items : updatedItems});
  }

  render(){
    const isLoading = this.state.isLoading;
    const allitems = this.state.items;


    if (isLoading)
      return (<div>Loading Skat Game...</div>);

    let items = allitems.map( item =>
        <tr key={item.id}>
          <td>{item.Game}</td>
          <td>{item.Players}</td>
          <td><Button className="btn btn-lg btn-success" onClick={() => this.remove(item.id)}> <FontAwesomeIcon icon={faThumbsUp} /> Create Room </Button> </td>
          <td><Button className="btn btn-lg btn-info" onClick={() => this.remove(item.id)}> <FontAwesomeIcon icon={faThumbsUp} /> Join Room </Button> </td>
          <td><Button className="btn btn-lg btn-warning" onClick={() => this.remove(item.id)}> <FontAwesomeIcon icon={faSearchDollar} /> Instructions </Button> </td>
        </tr>
    );

    return (
        <div className="container border border-secondary rounded center">

          <div className="row">
            <div className="col-12">
              <h4>Skat Game</h4>
            </div>
          </div>

            <div className="row">
              <div className=".col-xs-12 center text-center ">
                <Table dark responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th>Game</th>
                      <th>Players</th>
                      <th colSpan="4" scope="row">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.items.length === 0 ? <td colSpan="9">Skat 1.0 coming soon!</td> : items}
                  </tbody>
                </Table>
              </div>
            </div>
        </div>
    );
  }
}

export default App;