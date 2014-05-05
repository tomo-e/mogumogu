App.ListFormView = Backbone.View.extend({
  events: {
    'submit': 'onSubmit'
  },

  onSubmit: function(e) {
    e.preventDefault();

　   console.log('onSubmit動いてるか')

    var url = this.$('input[name="url"]').val();
    this.load(url);
  },

  load: function(url) {
    var self = this;

    console.log('loadがきてるか');
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'html',
      success: function(data) {
        var html = $(data.responseText);
        var title = html.filter('title').text();
      
        self.collection.add({
          title: title,
          url: url
        }, { validate: true });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

});