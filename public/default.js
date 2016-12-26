'use strict';


$(document).ready(() => {
  const $display = $('#display');
  const $singleId = $('#singleId');
  const $newName = $('#newName');
  const $newEmail = $('#newEmail');
  const $newBio = $('#newBio');
  const $getAll = $('#getAll');
  const $getSingle = $('#getSingle');
  const $createItem = $('#createItem');
  const $updateItem = $('#updateItem');
  const $deleteItem = $('#deleteItem');

  $getAll.click(() => {
    $.ajax({
      url: 'api/v1/items',
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

  // GET single message
  $getSingle.click(() => {
    let id = $singleId.val();

    $.ajax({
      url: `api/v1/items/${id}`,
      type: "GET"
    }).done(function(data) {
      $display.empty();
      $display.append(
        `<tr>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.email}</td>
          <td>${data.bio}</td>
        </tr>`
      );
    });
  });

  $createItem.click(() => {
    let name = $newName.val();
    let email = $newEmail.val();
    let bio = $newBio.val();
    let body = { "name": name, "email": email, "bio": bio };

    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(body)
    })
    .done(() => {
      console.log('Success!');
    });
  });

  $updateItem.click(() => {
    console.log('Clicked Update Item');
  });

  $deleteItem.click(() => {
    console.log('Clicked Delete Item');
  });

});
