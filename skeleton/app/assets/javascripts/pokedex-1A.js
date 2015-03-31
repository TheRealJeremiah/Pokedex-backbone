Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  // debugger
  // console.log(pokemon);
  var $li = $('<li class="poke-list-item" data-id="' + pokemon.id + '">'); // TA: add poketype
  $li.html('<div style="float:left">' + pokemon.escape('name') + '</div>' +
           '<div style="float:right">' + pokemon.escape('poke_type') + '</div>');
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  var rootView = this;
  this.pokes.fetch({
    success: function (collection, resp, options) {
      collection.each(function (pokemon) {
        rootView.addPokemonToList(pokemon);
      });
    }
  });
};
