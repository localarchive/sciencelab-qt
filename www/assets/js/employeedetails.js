$('#detailsPage').live('pageshow', function(event) {
    var id = getUrlVars()["id"];
    $.getJSON(serviceURL + '?user='+id, displayEmployee);
});

function displayEmployee(data) {
    var employee = data[0];
    $('#portrait').attr('src', employee.portrait);
    $('#fullName').text(employee.fullname);
    $('#title').text(employee.title);
    $('#callto').attr('src', 'tel:' + employee.mobile);
    $('#mailto').attr('src', 'mailto:' + employee.email);

    if (employee.workingon) {
        $('#details').append('<div class="ui-block-a label">Werkt aan:</div><div class="ui-block-b content">' + employee.workingon + '</div>')
    }
    if (employee.email) {
        $('#details').append('<div class="ui-block-a label">Mail:</div><div class="ui-block-b content">' + employee.email + '</div>')
    }
    if (employee.mobile) {
        $('#details').append('<div class="ui-block-a label">Mobiel:</div><div class="ui-block-b content">' + employee.mobile + '</div>')
    }
    if (employee.im) {
        $('#details').append('<div class="ui-block-a label">IM:</div><div class="ui-block-b content">' + employee.im + '</div>')
    }
    if (employee.skype) {
        $('#details').append('<div class="ui-block-a label">Skype:</div><div class="ui-block-b content">' + employee.skype + '</div>')
    }
    if (employee.birthdate) {
        $('#details').append('<div class="ui-block-a label">Verjaardag:</div><div class="ui-block-b content">' + employee.birthdate + '</div>')
    }
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
