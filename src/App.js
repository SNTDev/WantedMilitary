import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LazyLoad from 'react-lazy-load';
import { Card, Button, CardTitle, CardText, Row, Col, CardDeck } from 'reactstrap';
import wantedMilitaryList from './WantedList.json';

class App extends Component {
  getWantedCardWithIndex(index) {
    return (
      <Card body style={{margin: "20px"}}>
            <CardTitle>{wantedMilitaryList[index].company_name}</CardTitle>
            <CardText>{wantedMilitaryList[index].position}</CardText>
            <Button>Go somewhere</Button>
    </Card>
    );
  }

  render() {
    let rows = [];

    for (let i = 0; i < wantedMilitaryList.length; i += 3) {
      rows.push(
        <CardDeck>
          {this.getWantedCardWithIndex(i)}
          {i + 1 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i+1) : <Card/>}
          {i + 2 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i+2) : <Card/>}
        </CardDeck>
      );
    }

    console.log(rows);
    return rows;
  }
}

export default App;
