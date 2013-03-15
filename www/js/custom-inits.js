$(document).bind("mobileinit", function(){
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;

    this.entryTpl = Handlebars.compile($("#entry-template").html());
//    this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
});
