function submitForm() {
  $('#error').css('display', 'none');
  $('#success').css('display', 'none');
  $('#error')[0].innerHTML = '';
  var error;
  ['name', 'mail', 'sub', 'msg'].forEach(field => {
    if ($('#field').value === '') {
      error = true;
      $('#field').css('border','1px solid red');
      $('#error').css('display','block');
      $('#error')[0].innerHTML = 'All fields are mandatory. <br/>';
    }
  });
  if ($('#mail').value &&
    !validateEmail($('#mail').value)) {
    $('#mail').css('border','1px solid red');
    $('#error').css('display','block');
    $('#error')[0].innerHTML =
    $('error')[0].innerHTML + 'Email entered is not valid.';
  }
  if (!error) {
    $.ajax({
      url:'https://formspree.io/pandey.abhishek2770@gmail.com',
      type:'post',
      data:$('#contactus-form').serialize(),
      dataType: "json",
      success:function() {
        $('#success').css('display', 'block');
      },
      error:function() {
        $('#error').css('display','block');
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

function uploadImage (event, targetElementId) {
  var file = event.target.files[0];
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.imgur.com/3/image');
  xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
  var data = new FormData();
  data.append('image', file);
  xhr.send(data);
  xhr.addEventListener('load', () => {
    var imgSrc = JSON.parse(xhr.responseText).data.link;
    $('#' + targetElementId).attr('src', imgSrc);
  });
}

function btn(){
  $("#button-about").css('display', 'none');
  $('#abhide').css('display', 'none');
  $("#bac").css('marginTop', '0px');
}

function parahd(){
  $('#desc2-src').css('display','none');
  $('#x').css('display','none'); 
  $("#about-paragraph-dest").css('textAlign',"center");
  $("#about-paragraph-dest").css('width',"100%");
  $("#about-paragraph-dest").css('display','block');
}

var cln=[];
function myFunction() {
  $('#exp-details').append(
    '<input type="text" placeholder="Company Name" class="exp-company"></input>' +
    '<input type="text" placeholder="Experienced Year" class="exp-year" id="exphy"></input>'
  );
}

function addCollege() {
  $('#college-list').append(
    '<div id="college-details">' +
    ' <input type="text" placeholder="Collage Name" class="college-name"/>' +
    '  <input type="text" placeholder="Course Name" class="course-name"/>' +
    '  <input type="text" placeholder="Years" class="college-year"/>' +
    '</div>'
  );
}

function preview() {

  var fields = [
    'name', 'about', 'desc1', 'desc2', 'exp', 'exp-details', 'exp-details-wrapper',
    'academic', 'clgcolor', 'school', 'school-name', 'clg',
    'school-cls-', 'skil', 'skil-color', 'skil-main', 'school-color', 'skil-about', 'school-section',
    'skill1-title', 'skill1-about', 'skill1-title-section', 
    'skill2-title', 'skill2-about', 'skill2-title-section',
    'skill3-title', 'skill3-about', 'skill3-title-section',
    'contact-details', 'quick', 'quick-phonetitle', 'quick-phonevalue', 'quick-phone',
    'quick-emailtitle', 'quick-emailvalue', 'quick-email', 'quick-addresstitle',
    'quick-address1', 'quick-address2', 'quick-address', 'exp-wrapper','skill-wrapper', 'home',  
    'contact-section', 'contact-title', 'contact-btn', 'about-section', 'about-paragraph'
  ];
  // 'exp-company', exp-experience
  fields.forEach(function(field) {
    const textField = $('#' + field + '-src');
    if (textField && textField.length > 0) {
      $('#' + field + '-dest')[0].innerHTML=textField[0].value;
    }
    const colorField = $('#' + field + '-color');
    if (colorField && colorField.length > 0) {
      $('#' + field + '-dest').css('color', colorField[0].value);
    }
    const bgColorField = $('#' + field + '-bgcolor');
    if (bgColorField && bgColorField.length > 0) {
      $('#' + field + '-dest').css('background-color', bgColorField[0].value);
    }
  });

  var expCompanies = $('.exp-company');
  var expYears = $('.exp-year');
  for (var i = 0;i < expCompanies.length;i++) {
    $('#exp-details-dest').append(
      '<div>' + expCompanies[i].value + '</div>' +
      '<div class="duration">' + expYears[i].value + '</div>'
    );
  }

  var collegeName = $('.college-name');
  var collegeCourse = $('.course-name');
  var collegeYear = $('.college-year');
  for (var i = 0;i < collegeName.length;i++) {
    $('#clgcolor-dest').append(
      '<h2 id="clg-dest"></h2>' +
      '<span id="clgname-dest">' + collegeName[i].value + '</span><br>' +
      '<span id="clgcourse-dest">' + collegeCourse[i].value + '</span>' +
      '<div class="duration" id="clgyear-dest">' + collegeYear[i].value + '</div>'
    );
  }

  var contactInputBgcolor = $('#contact-input-bgcolor')[0].value;
  $('.contactus-input').css('background-color', contactInputBgcolor);
  $('#none').css('display', 'block');
  $('#see').css('display', 'none');
}





