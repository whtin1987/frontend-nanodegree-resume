var role = "FRONT-END NINJA";

var formattedName = HTMLheaderName.replace("%data%","Wayne");
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
