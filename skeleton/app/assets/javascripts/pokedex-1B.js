Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var pokemonAttr = pokemon.attributes;
  this.$pokeDetail.html(
    '<h1>' + pokemon.escape('name') + '</h1>' +
    '<p>Attack: ' + pokemon.escape('attack') + '</p>' +
    '<p>Defense: ' + pokemon.escape('defense') + '</p>' +
    '<p>Moves: ' + pokemon.escape('moves') + '</p>' +
    '<img src="' + pokemon.escape('image_url') + '">'
  );
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  return this.pokes.get($(event.currentTarget).data('id'));
};
