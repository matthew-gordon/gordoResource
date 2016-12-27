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
          <div class="panel panel-default">
            <div class="panel-body">
              <span>${value.id}</span><br>
              <span>${value.name}</span><br>
              <span>${value.email}</span><br>
              <span>${value.bio}</span>
            </div>
          </div>
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
      $display.append(`
        <div class="panel panel-default">
          <div class="panel-body">
            <span>${data.id}</span><br>
            <span>${data.name}</span><br>
            <span>${data.email}</span><br>
            <span>${data.bio}</span>
          </div>
        </div>
      `);
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
            <div class="panel panel-default">
              <div class="panel-body">
                <span>${value.id}</span><br>
                <span>${value.name}</span><br>
                <span>${value.email}</span><br>
                <span>${value.bio}</span>
              </div>
            </div>
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
            <div class="panel panel-default">
              <div class="panel-body">
                <span>${value.id}</span><br>
                <span>${value.name}</span><br>
                <span>${value.email}</span><br>
                <span>${value.bio}</span>
              </div>
            </div>
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
            <div class="panel panel-default">
              <div class="panel-body">
                <span>${value.id}</span><br>
                <span>${value.name}</span><br>
                <span>${value.email}</span><br>
                <span>${value.bio}</span>
              </div>
            </div>
          `);
        });
      });
    });
  });

});
