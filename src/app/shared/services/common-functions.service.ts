import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }

  convertDateTime(dateTime) {
    let dateToString = new Date(dateTime).toString();
    let start = dateToString.split(' ').slice(0, 3);
    let end = dateToString.split(' ').slice(3, 5);
    let newDateTime = start.join(' ') + ", " + end.join(' ');

    return newDateTime;
  }

  convertDate(date) {
    let dateToString = new Date(date).toString();
    let start = dateToString.split(' ').slice(0, 3);
    let end = dateToString.split(' ').slice(3, 4);
    let newDateTime = start.join(' ') + ", " + end.join(' ');

    return newDateTime;
  }

  getMonthDate(date) {
    let dateToString = new Date(date).toString();
    let newDate = dateToString.split(' ').slice(1, 3).join(' ');

    return newDate;
  }

  getDateMonthYear(date) {
    let dateToString = new Date(date).toDateString();
    let splitDate = dateToString.split(' ');
    let newDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[3]}`;

    return newDate;
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  cloneArray(arr: any) {
    return arr.map(function(arrr) {
      return arrr.slice();
    });
  }

  templateTable(templateData, headers, width) {
    let result = `<table  style="border-collapse: collapse; width: ${width}%; text-align: center;" border="2"><tr>`
    headers.forEach(header => {
      result += `<th>${header}</th>`
    })
    result += '</tr>'    
    templateData.forEach(element => {
      result += '<tr>'
      Object.keys(element).forEach(key => {
        result += `<td>${element[key]}</td>`
      });
      result += '</tr>'
    });
    return result + '</table>'
  }

  fetchUsername() {
    let userDetails = JSON.parse(localStorage.getItem('userDetails'))
    return `${userDetails['firstName']} ${userDetails['lastName']}`;
  }

  fetchUserEmail() {
    return `${JSON.parse(localStorage.getItem('userDetails'))['email']}`;
  }

}
