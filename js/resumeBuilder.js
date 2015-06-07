var bio = {
	"name": "Wayne Tin",
	"role": "Nanadegree student",
	"contacts": {
		"mobile": "(86)184-1020-2481",
		"email": "whtin1987@163.com",
		"github": "whtin1987",
		"location": "China/Beijing"
	},
	"welcomeMessage": "Welcome to Wayne's interactive resume!",
	"skills": ["Corporate Finance","Financial Modelling","CFA","HKICPA"],
	"bioPic": "images/fry.jpg"
};

$("#header").prepend(HTMLlocation.replace("%data%",bio.contacts.location));
$("#header").prepend(HTMLgithub.replace("%data%",bio.contacts.github));
$("#header").prepend(HTMLemail.replace("%data%",bio.contacts.email));
$("#header").prepend(HTMLmobile.replace("%data%",bio.contacts.mobile));
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
$("#header").append(HTMLskillsStart);
$("#header").append(HTMLskills.replace("%data%",bio.skills));