(function() {
  var main = this,
      root = 'http://jsonplaceholder.typicode.com',
      requestUrl = '/users';

  main.getData = function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', root + requestUrl, true);

    xhr.send();

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;

      if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        generateResultsList(JSON.parse(xhr.response));
      }
    }
  }

  ///////////////////

  function generateResultsList(list) {
    if(!list.length) return;

    var documentFragment = '';

    for(var i = 0; i < list.length; i++) {
      documentFragment += getListItem(list[i]);
    }

    document.getElementsByClassName('results-container')[0].innerHTML = documentFragment;
  }

  function getListItem(data) {
    if(!data) return;

    return data.name;
  }

  return main;
})();
