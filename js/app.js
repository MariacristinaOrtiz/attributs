window.addEventListener('load', function(event){
var personajes = document.querySelectorAll('.personaje');
for (var i = 0; i < personajes.length; i++) {
  personajes[i].addEventListener('click', showInformation);
}
});

function showInformation() {
  var name = this.dataset.name;
  var information = this.dataset.information;

  var paragraphInformation = document.createElement('p');
  paragraphInformation.classList.add('active');
  paragraphInformation.textContent = 'Su nombre es ' + name + ' y ' + information ;

  var space = document.querySelector('.informacion');
  space.appendChild(paragraphInformation);

  var informationVisible = document.querySelector('p.active');
  informationVisible.classList.remove('active');

}
