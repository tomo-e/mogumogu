App.ListFormView = Backbone.View.extend({
  events: {
    'submit': 'onSubmit'
  },

  onSubmit: function(e) {
    e.preventDefault();

    var url = this.$('input[name="url"]').val();
    this.load(url);
  },

  load: function(url) {
    var self = this;

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'html',
      success: function(data) {
        var html = $(data.responseText);
        var title = html.filter('title').text();
      
        var params = {
          title: title,
          url: url
        };

        if(this.model) {
          self.model.save(params, { validate: true });
        } else {
          self.collection.create(params, { validate: true });
        }
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
});

App.ShopListView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function() {
    var $ul = this.$('ul');
    $ul.empty();

    this.collection.each(function(model) {
      var shopTitle = model.get('title');
      var shopURL = model.get('url');
      $ul.append('<li>' + shopTitle + '<br>' + '<a href="' + shopURL + '" target="_blank">' + shopURL + '</a>' + '</li>');
    });
  }
});