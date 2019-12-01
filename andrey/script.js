const inputUp = document.querySelector('.up textarea');
      const textUp = document.querySelector('p.textUp');

      const inputDown = document.querySelector('.down textarea');
      const textDown = document.querySelector('p.textDown');

      const image = document.querySelector(".meme img");
      const opcoes = document.querySelector('.opcoes');

      const dropArea = document.querySelector(".dropArea");

      const btnReset = document.querySelector("button.reset");
      const btnResetSpan = document.querySelector("button.reset span");
      const btnResetIcon = document.querySelector("button.reset .material-icons");
      const icones = document.querySelectorAll('.optionsText i');
      const selecionado = [];

      const moldura = document.querySelectorAll('.moldura .material-icons');

      moldura.forEach(elem => {
        elem.addEventListener('click', (e) => {
          if(e.target.style.color == 'black') { image.className = ''; image.classList.add('borderBlack'); }
          if(e.target.style.color == 'white') { image.className = ''; image.classList.add('borderWhite'); }
          if(e.target.style.color == 'rgb(7, 39, 66)') { image.className = ''; image.classList.add('borderLess'); }
        })
      })

      inputUp.addEventListener("input", (e) => {
        textUp.innerText = inputUp.value;
      });

      inputDown.addEventListener("input", (e) => {
        textDown.innerText = inputDown.value;
      });

      ;[textUp, textDown].forEach((elem) => {
        ;['mouseover','mouseleave','click'].forEach((eventName) => {
            elem.addEventListener(eventName, (e) => {
              if(e.type == 'mouseover') {e.target.style.backgroundColor = "black";} 
              if(e.type == 'mouseleave') {e.target.style.backgroundColor = "transparent";} 
              if(e.type == 'click') { selecionado.pop(); selecionado.push(e.target); }
          });
        });
      });

      icones.forEach((elem) => {
        elem.addEventListener('click', (e) => {
          if(selecionado[0] !== undefined){
            let size = selecionado[0].style.fontSize;
          switch(elem.innerText) {
            case 'exposure_neg_1':
              selecionado[0].style.fontSize = `${parseInt(size.slice(0, size.length-2)) - 1}px`;
              break;
            case 'exposure_plus_1':
              selecionado[0].style.fontSize = `${parseInt(size.slice(0, size.length-2)) + 1}px`;
              break;
            case 'format_bold':
              console.log(selecionado[0].style.fontWeight == 'normal')
              selecionado[0].style.fontWeight == 'normal' ? selecionado[0].style.fontWeight = 'bold' : selecionado[0].style.fontWeight = 'normal';
              break;  
            case 'format_align_center':
              selecionado[0].style.textAlign = 'center';
              break; 
            case 'format_align_left':
              selecionado[0].style.textAlign = 'left';
              break; 
            case 'format_align_right':
              selecionado[0].style.textAlign = 'right';
              break;    
            default:
              console.log();
            }
          }
      });
      })

      opcoes.querySelectorAll("figure").forEach((item) => {
        item.addEventListener('click', (e) => {
          image.setAttribute("src", `${e.target.getAttribute("src")}`);
        });
      });

      btnReset.addEventListener("mouseover", (e) => {
        btnReset.style.backgroundColor = '#072742';
        btnResetSpan.style.color = 'white';
        btnResetIcon.style.color = 'white';
      });

      btnReset.addEventListener("mouseleave", (e) => {
        btnReset.style.backgroundColor = 'white';
        btnResetSpan.style.color = '#072742';
        btnResetIcon.style.color = '#072742';
      });

      // dropArea.addEventListener('drop', function(e) {
      //   e.preventDefault();
      //   e.stopPropagation();
      // });

      ;['mouseover','dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false)
      })

      ;['mouseleave','dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false)
      })

      function highlight(e) {
        dropArea.classList.add('highlight');
      }

      function unhighlight(e) {
        dropArea.classList.remove('highlight');
      }

      function reset() {
        textUp.style.fontSize = '40px';
        textUp.style.fontWeight = 'normal';
        textUp.style.textAlign = 'center';
        textDown.style.fontSize = '40px';
        textDown.style.fontWeight = 'normal';
        textDown.style.textAlign = 'center';
      }

      function previewFile() {
        var preview = document.querySelector('.meme img');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();

        reader.onloadend = function () {
          preview.src = reader.result;
        }

        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.src = "";
        }
      }
