const $ = el => document.querySelector(el);

const $inputSearch = $('.inputSearch');
$inputSearch.addEventListener('keyup', buscar);

function buscar() {
  let $input, $inputValor, $nav, $a, $aValor;
  $input = document.querySelector('input');
  $inputValor = $input.value.toUpperCase();
  $nav = document.querySelector('nav');
  $a = $nav.querySelectorAll('a');
  for (let i = 0; i < $a.length; i++) {
    $aValor = $a[i].textContent;
    if ($aValor.toUpperCase().indexOf($inputValor) > -1) {
      $a[i].style.display = 'block';
    } else {
      $a[i].style.display = 'none';
    }
  }
}

document.addEventListener('click', e => {
  if (e.target.matches('a')) {
    $inputSearch.value = e.target.textContent;
    buscar();
    e.target.style.display = 'none';
  }
  if (e.target.matches('input[type=reset]')) {
    $inputSearch.value = '';
  }
});
