window.App = {};

$(function() {
  var shops = new App.Shops();

  var listFormView = new App.ListFormView({
    el: '.listForm',
    collection: shops
  });

  shops.on('add', function(model) {
    var $li = $('<li>').html(
      model.get('title') + '<br>' + model.get('url')
    );

    $('.shopList').append($li);
  });

  shops.on('invalid', function(model, message) {
    alert(message);
  });
});

$(function() {
  var shops = new Backbone.Collection();
});