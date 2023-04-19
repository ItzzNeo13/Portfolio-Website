var images = [ 'https://www.dropbox.com/s/memt4mc71ubv015/Credit-Card-checkout.jpg?raw=1',  // credit card
    'https://www.dropbox.com/s/2vmdtuw95j5uxyc/Facebook-UI.png?raw=1',       //fb-ui
    'https://www.dropbox.com/s/gprtddc10oev7rk/Software-business-card.png?raw=1', //software-card
    'https://www.dropbox.com/s/kcfv27c0s91cw51/Portfolio.png?raw=1', //portfolio-concept
    'https://www.dropbox.com/s/m1p5nwcmz2ngn3c/ho-deliveries.png?raw=1', //ho-deliveries-card
    'https://www.dropbox.com/s/wpm5b1jlj2o1a76/brooklyn-club-ad.png?raw=1',  //club-poster
    'https://www.dropbox.com/s/nxf56tnfqtjqlqz/ganesh-chaturthi-wishes.png?raw=1', //wishes-graphic
    'https://www.dropbox.com/s/qvqpfqoouo4q1o3/InnovateX-card-mockup.png?raw=1',  // business-card-mockup
    'https://www.dropbox.com/s/723uznv5afki0gl/Thank-you.png?raw=1' ]; // thank-you-card

var num = 0;
var imgElements = images.map(function(src) {
  var img = new Image();
  img.src = src;
  return img;
});

function next() {
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = imgElements[num].src;
}

function prev() {
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = imgElements[num].src;
}
