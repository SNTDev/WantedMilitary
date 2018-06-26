import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import LazyLoad from 'react-lazy-load';
import { Card, Button, CardImg, CardBody, CardTitle, CardText, Row, Col, CardDeck } from 'reactstrap';
import wantedMilitaryList from './WantedList.json';

class App extends Component {
  getWantedCardWithIndex(index) {
    return (
      <Card style={{ margin: "20px"}}>
        <a href={'https://www.wanted.co.kr/wd/' + wantedMilitaryList[index].recruit_id} style={{ textDecoration: 'none', color:'black' }}>
          <CardImg top width="100%" height="200px" src={wantedMilitaryList[index].title_img} />
          <CardBody>
            <img height="32px" width="32px" src={wantedMilitaryList[index].logo_img} style={{"display":"inline"}}/>
            <CardTitle style={{"display":"inline"}}>{wantedMilitaryList[index].company_name}</CardTitle> 
            <CardText>{wantedMilitaryList[index].position}</CardText>
          </CardBody>
        </a>
      </Card>
    );
  }

  render() {
    let rows = [];

    wantedMilitaryList.sort((a, b) => {
      return a.company_name > b.company_name ? 1 : a.company_name === b.company_name ? 0 : -1;
    });

    for (let i = 0; i < wantedMilitaryList.length; i += 4) {
      rows.push(
        <CardDeck>
          {this.getWantedCardWithIndex(i)}
          {i + 1 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 1) : <Card />}
          {i + 2 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 2) : <Card />}
          {i + 3 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 3) : <Card />}
        </CardDeck>
      );
    }

    return rows;
  }
}

export default App;
