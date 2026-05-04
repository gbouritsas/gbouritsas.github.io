function toggleBibtex(button) {
  var bibtexDiv = button.parentNode.parentNode.nextElementSibling;
  if (bibtexDiv.style.display === 'none') {
    bibtexDiv.style.display = 'block';
  } else {
    bibtexDiv.style.display = 'none';
  }
}

function copyBibtex(button) {
  var content = button.previousElementSibling.textContent;
  navigator.clipboard.writeText(content).then(function () {
    var originalText = button.textContent;
    button.textContent = 'Copied';
    setTimeout(function () {
      button.textContent = originalText;
    }, 3000);
  }, function (err) {
    console.error('Could not copy BibTeX: ', err);
  });
}
