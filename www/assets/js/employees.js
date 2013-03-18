var serviceURL = "http://10.10.0.16:8080/sciencelab/@@phonebook";
var employees;


$(function() {
    getEmployeeList();
});

function getEmployeeList() {
  $.getJSON(serviceURL + '?q=', function(data) {
    // Build the first page with it's list of contacts
    $('#employeeList li').remove();
    employees = data;
    $.each(employees, function(index, employee) {
      $('#employeeList').append('<li><a href="#' + employee.userid + '" data-transition="slide">' +
          '<img src="' + employee.portrait + '"/>' +
          '<h2>' + employee.fullname + '</h2>' +
          '<p>' + employee.title + '</p>' +
          '</li>');
    });
    $('#employeeList').listview('refresh');

    // Build individual pages for each contact
    $.each(employees, function(index, employee) {
      console.log(employee.fullname);
      $('body').append(
      '<div id="'+ employee.userid +'" data-role="page" data-add-back-btn="true" class="ui-page">' +
      '<div class="header" data-theme="a" data-role="header" data-position="fixed"><div class="logo"><img border="0" src="assets/images/logo_sciencelab.png" alt="ScienceBook" /></div></div>' +
      '<div data-role="content">' +
      '<div class="ui-grid-a"><div class="ui-block-a"><img id="portrait" src="' + employee.portrait + '" alt="foto" class="ui-shadow" />' +
      '<h2>' + employee.fullname + '</h2>' +
      '<pclass="function">' + employee.title + '</p>' +
      '</div><div class="ui-block-b">' +
      '<a id="callto" href="tel:' + employee.mobile + '" data-role="button" data-theme="b" data-icon="myapp-phone" data-iconshadow="false"  onclick="searchForTestContact();">Bellen</a>' +
      '<a id="mailto" href="mailto:' + employee.email + '" data-role="button" data-icon="myapp-email" data-iconshadow="false">Mailen</a>' +
      '</div></div><hr /><div class="ui-grid-a" id="details">' +
      '<div class="ui-block-a label">Werkt aan:</div><div class="ui-block-b content">' + employee.workingon + '</div>' +
      '<div class="ui-block-a label">Mail:</div><div class="ui-block-b content">' + employee.email + '</div>' +
      '<div class="ui-block-a label">Mobiel:</div><div class="ui-block-b content">' + employee.mobile + '</div>' +
      '<div class="ui-block-a label">IM:</div><div class="ui-block-b content">' + employee.im + '</div>' +
      '<div class="ui-block-a label">Skype:</div><div class="ui-block-b content">' + employee.skype + '</div>' +
      '<div class="ui-block-a label">Verjaardag:</div><div class="ui-block-b content">' + employee.birthdate + '</div>' +
      '</div>' +
//      '<div data-role="footer" data-position="fixed" data-fullscreen="true" data-id="ftr" data-tap-toggle="false">' +
//      '<a href="#" class="prev" data-role="button" data-icon="arrow-l" data-iconpos="notext" data-theme="d">Previous</a>' +
//      '<a href="#" class="next" data-role="button" data-icon="arrow-r" data-iconpos="notext" data-theme="d">Next</a>' +
//      '</div>' +
      '</div>'
      );
    });
  });
}

// Add some swipe magic after the pages are build
$('div.ui-page').live("swipeleft", function(){
  var nextpage = $(this).next('div[data-role="page"]');
  if (nextpage.length > 0) {
    $.mobile.changePage(nextpage, "slide", false, true);
  }
});

$('div.ui-page').live("swiperight", function(){
  var prevpage = $(this).prev('div[data-role="page"]');
  if (prevpage.length > 0) {
    $.mobile.changePage(prevpage, {transition: "slide",
    reverse: true}, true, true);
  }
});
