$('#detailsPage').live('pageshow', function(event) {
    var id = $.url().param('id');
    console.log("Getting: " + id);
    $.getJSON(serviceURL + '?user='+id, displayEmployee);
});


function displayEmployee(data) {
    var employee = data;
    console.log(employee);
    $('#employeePic').attr('src',  + employee.portrait);
    $('#fullName').text(employee.fullname);
};




//$('#employeeListPage').bind('pageinit', function(event) {
//  getEmployeeList();
//});

//function getEmployeeList() {
//  $.getJSON(serviceURL + '?q=', function(data) {
//    $('#employeeList li').remove();
//    employees = data;
//    $.each(employees, function(index, employee) {
//      $('#employeeList').append('<li><a href="employee.html?id=' + employee.userid + '">' +
//          '<img src="' + employee.portrait + '"/>' +
//          '<h2>' + employee.fullname + '</h2>' +
//          '<p>' + employee.title + '</p>' +
//          '</li>');
//    });
//    $('#employeeList').listview('refresh');
//  });
//}
