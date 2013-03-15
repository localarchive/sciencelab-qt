var serviceURL = "http://10.10.0.16:8080/sciencelab/@@phonebook";
var employees;

$('#employeeListPage').bind('pageinit', function(event) {
  getEmployeeList();    
});

function getEmployeeList() {
  $.getJSON(serviceURL + '?q=', function(data) {
    $('#employeeList li').remove();
    employees = data;
    $.each(employees, function(index, employee) {
      $('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.userid + '">' +
          '<img src="' + employee.portrait + '"/>' +
          '<h2>' + employee.fullname + '</h2>' +
          '<p>' + employee.title + '</p>' +
          '</li>');
    });
    $('#employeeList').listview('refresh');
  });
}
