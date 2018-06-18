'use strict';

const parseXlsx = require('excel').default;
const list = [];

async function parseDataFromExcel() {
    const data = await parseXlsx('List.xlsx');

    for(let i = 4; i < data.length; i++) {
        list.push(data[i][5]);
    }

    console.log(list);
}

parseDataFromExcel();