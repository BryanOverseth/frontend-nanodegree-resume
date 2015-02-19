var bio = {
	"name" : "Bryan R. Overseth ",
	"role" : "Sr. Systems Architect ",
	"contacts" : {
		"mobile" : "678-386-6979",
		"email" : "Boverseth@hotmail.com",
		"github" : "https://github.com/BryanOverseth",
		"twitter" : "NA",
		"location" : "Bigfork, MT"
	},
	"welcomeMessage" : "Welcome to my site.  Please let me know if you have any questions",
	"skills" : ["Architect", "Design and Engineering", "Consulting", "Technical Training", "Project Management", "Concept Labs", "Technical Writing"
	],
	"bioPic": "images/Overssth.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderName.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// console.log(formattedName);
// console.log(formattedRole);

var eduction = {
	"schools": [
		{
			"name": "Dekalb",
			"url": "http://www.gpc.edu/",
			"city":  "Atlanta Area",
			"degree": "NA",
			"years": "1+",
			"minor": ["Business Administration"]
		},
		{
			"name": "Devry",
			"url": "http://www.devry.edu/",
			"city":  "Atlanta Area",
			"degree": "NA",
			"years": "2+",
			"major": ["Telecommunications Management", "Computer Science"]
		}
	],
	"onlineCourses": [
		{
			"name": "Udacity",
			"url": "http://www.udacity.com/",
			"city":  "Online",
			"degree": "NanoDegree",
			"years": "8 months",
			"major": ["Front-End Web Developer"]
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior Technical Architect",
			"location":  "Atlanta, GA",
			"dates": "2007-Present",
			"description": "Enterprise Technology Services"
		},
		{
			"employer": "Cingular Wireless",
			"title": "Architect and Engineering",
			"location":  "Atlanta, GA",
			"dates": "2001-2007",
			"description": "Infrastructure Architecture and Mobility Services"
		},
		{
			"employer": "Cypress Communications",
			"title": "Principal IT Engineer",
			"location":  "Atlanta, GA",
			"dates": "2000-2001",
			"description": "Information Technology Services"
		},
		{
			"employer": "Bellsouth Technical Services Inc.",
			"title": "Systems Analyst",
			"location":  "Atlanta, GA",
			"dates": "1999-2000",
			"description": "Corporate Datacenter Services"
		},
		{
			"employer": "Bellsouth Mobility",
			"title": "Senior Network Engineer",
			"location":  "Atlanta, GA",
			"dates": "1998-1999",
			"description": "Regional Datacenter Services"
		}
	]
}
