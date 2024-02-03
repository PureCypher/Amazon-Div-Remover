// contentScript.js
(function() {
  removeDiv();

  function removeDiv() {
    var divToRemove = document.getElementById('contextualIngressPt');
    if (divToRemove) {
      divToRemove.remove();
    }
    var divToRemove = document.getElementById('nav-global-location-slot');
    if (divToRemove) {
      divToRemove.remove();
    }
  }
})();
