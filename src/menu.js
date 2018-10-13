import React, { Component } from 'react';
import { Label, List, Image, Grid } from 'semantic-ui-react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function getStatus(amount) {
  if (amount === 0) {
    return "settled up";
  } else if (amount > 0) {
    return "you lent";
  } else {
    return "you borrowed";
  }
};

function getMenuClass(amount) {
  const badge = "badge ";
  if (amount === 0) {
    return badge + "badge-secondary";
  } else if (amount > 0) {
    return badge + "badge-success";
  } else {
    return badge + "badge-danger";
  }
};

export default function menuList() {
  var statusByFriends = [
    { name: 'Lunch', amount: '0' },
    { name: 'dinner', amount: '1' },
    { name: 'Breakfast', amount: '-1' },
    { name: 'Night Out', amount: '1' }
  ];

  return (
    <div style={{ margin: '10px' }}>
      <List class="list-group col-lg-6">
        {
          statusByFriends.map((item, index) => (
            <li class="list-group-item d-flex justify-content-between align-items-center">
              {item.name}
              <span class={getMenuClass(item.amount)}>{getStatus(item.amount) + ": " + item.amount}</span>

            </li>
          ))
        }
      </List>
    </div>
  );
};




