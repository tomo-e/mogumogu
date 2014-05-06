App.Shop = Backbone.Model.extend({
  defaults: {
    url: null
  },
  validate: function(attrs) {
    if (!attrs.url) {
      return '入力してください';
    }
  }
});

App.Shops = Backbone.Collection.extend({
  model: App.Shop,
  localStorage: new Backbone.LocalStorage('.shopList')
});
