function submitForm() {
  document.getElementById('error').style.display = 'none';
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').innerHTML = '';
  var error;
  ['name', 'mail', 'sub', 'msg'].forEach(field => {
    if (document.getElementById(field).value === '') {
      error = true;
      document.getElementById(field).style.border = '1px solid red';
      document.getElementById('error').style.display = 'block';
      document.getElementById('error').innerHTML = 'All fields are mandatory. <br/>';
    }
  });
  if (document.getElementById('mail').value &&
    !validateEmail(document.getElementById('mail').value)) {
    document.getElementById('mail').style.border = '1px solid red';
    document.getElementById('error').style.display = 'block';
    document.getElementById('error').innerHTML =
      document.getElementById('error').innerHTML + 'Email entered is not valid.';
  }
  if (!error) {
    $.ajax({
      url:'https://formspree.io/pandey.abhishek2770@gmail.com',
      type:'post',
      data:$('#contactus-form').serialize(),
      dataType: "json",
      success:function(){
        document.getElementById('success').style.display = 'block';
      },
      error:function(){
        document.getElementById('error').style.display = 'block';
      }
    });
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function scrollToTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
}



function uploadImage (event) {
  var file = event.target.files[0];
  var xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
  xhr.open('POST', 'https://api.imgur.com/3/image');
  xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
  var data = new FormData(); // eslint-disable-line no-undef
  data.append('image', file);
  xhr.send(data);
  xhr.addEventListener('load', () => {
    var imgSrc = JSON.parse(xhr.responseText).data.link;
    document.getElementById('pic').src = imgSrc;
  });
}
function image (event) {
  var file = event.target.files[0];
  var xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
  xhr.open('POST', 'https://api.imgur.com/3/image');
  xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
  var data = new FormData(); // eslint-disable-line no-undef
  data.append('image', file);
  xhr.send(data);
  xhr.addEventListener('load', () => {
    var imgSrc = JSON.parse(xhr.responseText).data.link;
    console.log('imgSrc', imgSrc, document.getElementById('backpic'))
    document.getElementById('backpic').src = imgSrc;
  });
}
function show(){
  var fame = document.getElementById('abhi').value;
  var namecolor = document.getElementById('color-name').value;
  var about = document.getElementById('about').value;
  var aboutcolor =document.getElementById('about-color').value;
  var aboutpara1 =document.getElementById('about-para-one').value;
  var aboutpara2 =document.getElementById('about-para-second').value;
  var para =document.getElementById('paracolor').value;
  var aboutback =document.getElementById('about-backcolor').value;
  var acd = document.getElementById('ac-color').value;
  var adccolor = document.getElementById('acdd-color').value;
  var adc=document.getElementById('acdd').value;
  var ex =document.getElementById('exph').value;
  var ex1 =document.getElementById('exph1').value;
  var ex2 =document.getElementById('exph2').value;
  var ex3 =document.getElementById('exphc').value; 
  var ex4 =document.getElementById('exphb').value;
  var ex5 =document.getElementById('exphy').value;
  var ex6 =document.getElementById('exphy1').value;
  var result=[
              document.getElementById('namecome').innerHTML=fame,
              document.getElementById('namecome').style.color=namecolor,
              document.getElementById('aboutcome').innerHTML=about,
              document.getElementById('aboutcome').style.color=aboutcolor,
              document.getElementById('paraonecome').innerHTML=aboutpara1,
              document.getElementById('parasecondcome').innerHTML=aboutpara2,
              document.getElementById('paraonecome').style.color=para,
              document.getElementById('parasecondcome').style.color=para,
              document.getElementById('comecolor').style.backgroundColor=aboutback,
              document.getElementById('acdd-come').innerHTML=adc,
              document.getElementById('acdd-come').style.color=adccolor,
              document.getElementById('bac').style.backgroundColor=acd,
              document.getElementById('exp').innerHTML=ex,
              document.getElementById('exp1').innerHTML=ex1,
              document.getElementById('exp2').innerHTML=ex2,
              document.getElementById('expy').innerHTML=ex5,
              document.getElementById('expy1').innerHTML=ex6,
              document.getElementById('expc').style.color=ex3,
              document.getElementById('expc').style.backgroundColor=ex4,
            ]
            document.getElementById('none').style.display="block",
            document.getElementById('see').style.display="none"

          }