var bio = {
	"name" : "Bryan R. Overseth ",
	"role" : "Sr. Systems Architect ",
	"contacts" : {
		"Mobile" : "678-386-6979",
		"Email" : "Boverseth@hotmail.com",
		"Github" : "https://github.com/BryanOverseth",
		"Twitter" : "NA",
		"Blog" : "NA",
		"Location" : "Bigfork, MT"
	},
	"welcomeMessage" : "Welcome to my site.  Please let me know if you have any questions",
	"skills" : ["Architect", "Design and Engineering", "Consulting", "Technical Training", "Project Management", "Concept Labs", "Technical Writing"
	],
	"bioPic": "images/skynet.jpg"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[2] = name[2].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1] +" "+ name[2];
}

$('#main').append(internationalizeButton);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.Mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.Twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.Github);
var formattedBlog = HTMLblog.replace("%data%", bio.contacts.Blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.Location);

$("#topContacts").prepend(formattedLocation);
$("#topContacts").prepend(formattedBlog);
$("#topContacts").prepend(formattedGithub);
$("#topContacts").prepend(formattedTwitter);
$("#topContacts").prepend(formattedEmail);
$("#topContacts").prepend(formattedMobile);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedPic);

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skillsH3").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skillsH3").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skillsH3").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skillsH3").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skillsH3").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skillsH3").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skillsH3").append(formattedSkill);
}

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
			"location":  "Bigfork,MT",
			"dates": "2007-Present",
			"description": "Enterprise Technology Services"
		},
		{
			"employer": "Cingular Wireless",
			"title": "Architect and Engineering",
			"location":  "Alpharetta, GA",
			"dates": "2001-2007",
			"description": "Infrastructure Architecture and Mobility Services"
		},
		{
			"employer": "Cypress Communications",
			"title": "Principal IT Engineer",
			"location":  "Buckhead, GA",
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
};

function displaywork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer.concat(formattedTitle);
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displaywork();

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

