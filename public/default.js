'use strict';


$(document).ready(() => {
  const $display = $('#display');
  const $singleId = $('#singleId');
  const $newName = $('#newName');
  const $newEmail = $('#newEmail');
  const $newBio = $('#newBio');
  const $updateId = $('#updateId');
  const $updateName = $('#updateName');
  const $updateEmail = $('#updateEmail');
  const $updateBio = $('#updateBio');
  const $deleteId = $('#deleteId');
  const $getAll = $('#getAll');
  const $getSingle = $('#getSingle');
  const $createItem = $('#createItem');
  const $updateItem = $('#updateItem');
  const $deleteItem = $('#deleteItem');

  // GET all items
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

  // GET single item
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

  // POST create new item
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
      console.log('Success created!');
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
  });

  // PUT update item
  $updateItem.click(() => {
    let id = $updateId.val();
    let name = $updateName.val();
    let email = $updateEmail.val();
    let bio = $updateBio.val();
    let body = { "name": name, "email": email, "bio": bio };

    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'PUT',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(body)
    })
    .done(() => {
      console.log('Updated Successfully!');
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
  });

  // DELETE item
  $deleteItem.click(() => {
    let id = $deleteId.val();

    $.ajax({
      url: `api/v1/items/${id}`,
      type: 'DELETE'
    })
    .done(() => {
      console.log('Deleted Successfully!');
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
  });

});
