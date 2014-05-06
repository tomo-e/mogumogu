window.App = {};

$(function() {
  var shops = new App.Shops();
  shops.fetch();

  var listFormView = new App.ListFormView({
    el: '.listForm',
    collection: shops
  });

  shops.on('invalid', function(model, message) {
    alert(message);
  });

  var shopListView = new App.ShopListView({
    el: '.shopList',
    collection: shops
  })

  var shops = new Backbone.Collection();
});