import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css';
import LazyLoad from 'react-lazy-load';
import { Card, Button, CardImg, CardBody, CardTitle, CardText, Row, Col, CardDeck } from 'reactstrap';

class App extends Component {
  getWantedCardWithIndex(data) {
    return (
      <a target='_blank' href={'https://www.wanted.co.kr/wd/' + data.recruit_id} data-toggle="tooltip" data-placement="bottom" title={data.position}>
        <Card body style={{ margin: "20px" }}>
          <CardImg top height="200px" src={data.title_img} />
          <CardTitle>{data.company_name}</CardTitle>
          <CardText style={{ fontWeight: "300", paddingLeft: "5%" }}>{data.position}</CardText>
        </Card>
      </a>
    );
  }

  render() {
    let rows = [];

    let wantedMilitaryList = require('../../WantedList.json');

    wantedMilitaryList.sort((a, b) => {
      return a.company_name > b.company_name ? 1 : a.company_name === b.company_name ? 0 : -1;
    });

    for (let i = 0; i < wantedMilitaryList.length; i++) {
      rows.push(
        <li>
          {this.getWantedCardWithIndex(wantedMilitaryList[i])}
        </li>
      );

      /*{i + 1 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 1) : <Card />}
          {i + 2 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 2) : <Card />}
          {i + 3 < wantedMilitaryList.length ? this.getWantedCardWithIndex(i + 3) : <Card />}*/
    }

    return (
      <div class="contents">
        <ul>
          {rows};
      </ul>
      </div>
    );
  }
}

export default App;
