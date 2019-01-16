const ContinentListView = require('./views/continents_list_view.js');
const Continents = require('./models/continents.js');
// const Button = require('./views/button_view.js');

  document.addEventListener('DOMContentLoaded', () => {
  console.log('javaScript loaded');
  const continentsListContainer = document.querySelector('#continents');
  const continentsListView = new ContinentListView(continentsListContainer);
  continentsListView.bindEvents();

  const button = document.querySelector('#button')
  button.addEventListener('click', handleButtonClick)


  const continents = new Continents();
  continents.getData();

});

const handleButtonClick = function () {
  const resultParagraph = document.querySelector('#button-result');
  resultParagraph.textContent = 'I wanted an image here, but this will have to do. Sorry Alex'
};
