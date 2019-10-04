const { remote } = require('electron');
const fs = require('fs');
const picture = require('cat-picture');
const image = require('lightning-image-poly');
const src = picture.src;
picture.remove();

var viz = new image('#visualization', null, [src], { hullAlgorithm: 'convex' })

const save = () => {
  remote.getCurrentWebContents().printToPDF({
    portrait: true
  }, function (err, data) {
    fs.writeFile('annotation.pdf', data, function (err) {
      if (err) alert('error generating pdf! ', err.message);
      else alert('pdf saved');
    })
  });
};

window.addEventListener('keydown', function (e) {
  if (e.keyCode == 80) save();
});