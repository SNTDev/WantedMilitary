import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import wantedMilitaryList from './WantedList.json';

class App extends Component {
  getWantedList() {
    console.log(wantedMilitaryList);
  }

  render() {
    this.getWantedList();

    return (
      <div>
        {wantedMilitaryList.map((wantedData) => {
          return (<Card body>
            <CardTitle>{wantedData.company_name}</CardTitle>
            <CardText>{wantedData.position}</CardText>
            <Button>Go somewhere</Button>
          </Card>);
        })}
      </div>
    );
  }
}

export default App;
