Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon();
  pokemon.save(attrs, {
    success: callback
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var attributes = $(event.currentTarget).serializeJSON();
  var parsedAttributes = attributes.pokemon;
  this.createPokemon(parsedAttributes, function (pokemon) {
    this.addPokemonToList(pokemon);
    this.refreshPokemon();
    this.renderPokemonDetail(pokemon);
    this.$newPoke[0].reset();
  }.bind(this));
};
