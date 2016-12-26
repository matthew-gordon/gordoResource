'use strict';


$(document).ready(() => {
  const $display = $('#display');
  const $getAll = $('#getAll');
  const $getSingle = $('#getSingle');
  const $createItem = $('#createItem');
  const $updateItem = $('#updateItem');
  const $deleteItem = $('#deleteItem');

  $getAll.click(() => {
    $.ajax({
      url: '/api/v1/items',
      type: 'GET'
    })
    .done((items) => {
      $display.empty();
      $.each(items, (index, value) => {
        $display.append(`
          <tr>
            <td>${value.id}</td>
            <td>${value.name}</td>
            <td>${value.email}</td>
            <td>${value.bio}</td>
          </tr>
        `);
      });
    });
  });

  $getSingle.click(() => {
    console.log('Clicked GET Single');
  });
  $createItem.click(() => {
    console.log('Clicked Create Item');
  });
  $updateItem.click(() => {
    console.log('Clicked Update Item');
  });
  $deleteItem.click(() => {
    console.log('Clicked Delete Item');
  });

});
