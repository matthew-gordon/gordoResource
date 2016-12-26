'use strict';


$(document).ready(() => {
  const $getAll = $('#getAll');
  const $getSingle = $('#getSingle');
  const $createItem = $('#createItem');
  const $updateItem = $('#updateItem');
  const $deleteItem = $('#deleteItem');

  $getAll.click(() => {
    console.log('Clicked GET ALL');
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
