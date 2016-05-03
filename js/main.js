(function() {
  var main = this,
      root = 'http://jsonplaceholder.typicode.com',
      requestUrl = '/users';

  main.getData = function () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', root + requestUrl, true);

    xhr.send();
    document.getElementById('preloader').style.display = 'block';
    document.getElementById('get-data').setAttribute('disabled', '');
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;

      if (xhr.status !== 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('get-data').removeAttribute('disabled');
        renderResultsList(JSON.parse(xhr.response));
      }
    }
  }

  ///////////////////

  function renderResultsList(list) {
    if(!list.length) return;

    var documentFragment = '';

    for(var i = 0; i < list.length; i++) {
      documentFragment += getListItem(list[i]);
    }

    document.getElementsByClassName('results-container')[0].innerHTML = documentFragment;
  }

  function getListItem(data) {
    if(!data) return;

    return '<div class="contact-holder">' +
      '<div class="personal info">' +
        '<p><span>Name:</span> ' + data.name + '</p>' +
        '<p><span>Username:</span> ' + data.username + '</p>' +
        '<p><span>Email:</span> ' + data.email + '</p>' +
      '</div>' +
      '<div class="contacts info">' +
        '<span id="address">' +
          'Address:' +
          '<p><span>Street:</span> ' + data.address.street + '</p>' +
          '<p><span>Suite:</span> ' + data.address.suite + '</p>' +
        '</span>' +
      '</div>' +
      '<div class="company info">' +
        '<span id="company">' +
          'Company:' +
          '<p><span>Name:</span> ' + data.company.name + '</p>' +
          '<p><span>Catch Phrase:</span> ' + data.company.catchPhrase + '</p>' +
        '</span>' +
      '</div>' +
    '</div>';
  }

  return main;
})();
