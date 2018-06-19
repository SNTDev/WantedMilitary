'use strict';

const parseXlsx = require('excel').default;
const fs = require('fs');
const list = [];

async function parseDataFromExcel() {
    const data = await parseXlsx('List.xlsx');

    for(let i = 4; i < data.length; i++) {
        list.push(data[i][5]);
    }

    let file = fs.createWriteStream('List.txt');

    for(let i = 0; i < list.length; i++) {
        list[i] = list[i].replace('(주)' , '');        
        list[i] = list[i].replace('㈜' , '');
        list[i] = list[i].replace('주식회사' , '');
        list[i] = list[i].replace(' ' , '');
        list[i] = '\'' + list[i] + '\'';
        file.write(list[i]);
        file.write(', ');
    }

    file.end();
}

parseDataFromExcel();