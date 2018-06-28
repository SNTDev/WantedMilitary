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
      <a target='_blank' href={'https://www.wanted.co.kr/wd/' + wantedMilitaryList[index].recruit_id} data-toggle="tooltip" data-placement="bottom" title={wantedMilitaryList[index].position}>
      <Card body style={{ margin: "20px" }}>
          <CardImg top height="200px" src={wantedMilitaryList[index].title_img} />
          <CardTitle>{wantedMilitaryList[index].company_name}</CardTitle>
          <CardText style={{ fontWeight: "300", paddingLeft: "5%" }}>{wantedMilitaryList[index].position}</CardText>
      </Card>
      </a>
    );
  }

  render() {
    let rows = [];

    wantedMilitaryList.sort((a, b) => {
      return a.company_name > b.company_name ? 1 : a.company_name === b.company_name ? 0 : -1;
    });

    for (let i = 0; i < wantedMilitaryList.length; i ++) {
      rows.push(
        <li>
          {this.getWantedCardWithIndex(i)}
        </li>
      );

      /*{i + 1 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 1) : <Card />}
          {i + 2 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 2) : <Card />}
          {i + 3 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 3) : <Card />}*/
    }

    return (
      <ul>
      {rows};
      </ul>
    );
  }
}

export default App;
