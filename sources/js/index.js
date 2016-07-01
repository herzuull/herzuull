window.addEventListener('load', function() {

  var viewContent = document.querySelector('#contentObject');
  viewContent.setAttribute('data', './news.html');
  var content = (viewContent.contentWindow || viewContent.contentDocument);
  var contentDocument = content.document || content;
  document.querySelector('#content').innerHTML = contentDocument.body.innerHTML;

  var navButtons = document.querySelectorAll('.nav');
  Array.from(navButtons).forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var url = e.target.getAttribute('href');
      var viewContent = document.querySelector('#contentObject');
      viewContent.setAttribute('data', url);
      var content = (viewContent.contentWindow || viewContent.contentDocument);
      var contentDocument = content.document || content;
      document.querySelector('#content').innerHTML = contentDocument.body.innerHTML;
      return false;
    }, false);
  });
}, false);
