import React, { Component } from 'react';
import { Label, List, Image, Grid } from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import menuList from './menu.js'

function getStatus(amount) {
  if (amount === 0) {
    return "settled up";
  } else if (amount > 0) {
    return "owes you";
  } else {
    return "you owe";
  }
};

function getStatusClass(amount) {
  const badge = "badge ";
  if (amount === 0) {
    return badge + "badge-secondary";
  } else if (amount > 0) {
    return badge + "badge-success";
  } else {
    return badge + "badge-danger";
  }
};
function myFunction() {
  alert("I am an alert box!");
}
export default function splitApp() {

  var statusByFriends = [
    { name: 'Shubhi', amount: '0' },
    { name: 'Ashu', amount: '1' },
    { name: 'Roli', amount: '-1' },
    { name: 'Jhinu', amount: '1' }
  ];


  return (
    <div style={{ margin: '10px' }}>
      <List class="list-group col-lg-6">
        {
          statusByFriends.map((item, index) => (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {item.name}
              <span onClick={myFunction} class={getStatusClass(item.amount)}>{getStatus(item.amount) + ": " + item.amount}</span>

            </li>
          ))
        }
      </List>
      {menuList()}
    </div>


  );
};




