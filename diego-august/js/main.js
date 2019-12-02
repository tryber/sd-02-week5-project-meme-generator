   var canvas;
   var canvasWidth;
   var ctx;
   var x;
   var y;
   var download;
   var data;
   var fileInput;
   var img;


  window.onload = function() {


    prepareExample();
  }

  function prepareExample() {
    img = document.getElementById('imgg');

    var deviceWidth = window.innerWidth;;
      canvasWidth = Math.min(600, deviceWidth-20);
  canvasHeight = Math.min(480, deviceWidth-20);
    canvas = document.getElementById('myCanvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;


    ctx = canvas.getContext('2d');

     x = canvas.width/2 - img.width/2;
     y = canvas.height/2 - img.height/2;

    ctx.drawImage(img, x, y);

    ctx.textAlign = 'center';
    ctx.lineWidth  = 10;
    ctx.font = '20pt impact';
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineJoin = 'round';
    doTransform();


    fileInput = document.getElementById('fileInput');

  fileInput.addEventListener('change', function(e) {

    var reader = new FileReader();
    reader.onload = function(event){

        img.onload = function(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById('scale').value = 1;
            document.getElementById('rotate').value = 0;
                 x = canvas.width/2 - img.width/2;
     y = canvas.height/2 - img.height/2;
            ctx.drawImage(img,x,y);
        }
        img.src = reader.result;
    }
    reader.readAsDataURL(fileInput.files[0]);




   }, false);

   var controls = document.getElementById('controls');
   var save = document.getElementById('save');
   save.addEventListener('click', function(e) {
     controls.style.display = 'none';
     document.getElementById('spinner-div').style.display='inline';
     var data = canvas.toDataURL();

     request = $.ajax({
          url: "/meme/save",
          type: "post",
          data: data
      });

      request.done(function (response, textStatus, jqXHR){
          window.location.href = '/meme/view/'+response;
      });
    }, false);

    scale = document.getElementById('scale');
    scale.addEventListener('change', doTransform, false);

    rotate = document.getElementById('rotate');
    rotate.addEventListener('change', doTransform, false);

    download = document.getElementById('img-download');
    download.addEventListener('click', prepareDownload, false);



  }

  function doTransform() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width/2, canvas.height/2);

    var val = document.getElementById('scale').value;
    ctx.scale(val,val);

    val = document.getElementById('rotate').value;
    ctx.rotate(val*Math.PI/180);

    ctx.translate(-canvas.width/2, -canvas.height/2);

    ctx.drawImage(img, x, y);

    ctx.restore();

    text = document.getElementById('custom-text').value;
     text = text.toUpperCase();
     wrapText(ctx, text, canvas.width/2, canvas.height - canvas.height/4.5, canvasWidth-canvasWidth/3, 30);
  }


  function prepareDownload() {
    var data = canvas.toDataURL();
    download.href = data;
  }


  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) { var testLine = line + words[n] + ' '; var metrics = ctx.measureText(testLine); var testWidth = metrics.width; if (testWidth > maxWidth && n > 0) {
        ctx.strokeText(line, x, y);
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    ctx.strokeText(line, x, y);
    ctx.fillText(line, x, y);
  }

  function dlCanvas(eldllink) {
      var canvas = document.querySelector('.myCanvas');

      var dt = canvas.toDataURL('image/png');
      dt = dt.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

      dt = dt.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=meme.png');

      eldllink.href = dt;
  }

  function previewText() {
  console.log("teste de texto")
  var input1 = document.getElementById('textInputBox1');
  render.font = "30pt Calibri"
  render.textAlign = "left"
  render.fillText(input1.value, 300, 20);
}
