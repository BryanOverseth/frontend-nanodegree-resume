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
	"skills" : ["Architect", "Design and Engineering", "Consulting", "Technical Training", "Project Management", "Concept Labs", "Technical Writing"],
	"bioPic": "images/skynet.jpg",
	"biography" : function () {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedPic);
		var formattedwelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedwelcomeMsg);
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
	}
};
// biography function - builds name and role and contact information
bio.biography();

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior Technical Architect",
			"location":  "Bigfork, MT",
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
	],
	"displaywork" : function () {
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
	}
};
// work function - builds work related information
work.displaywork();

var projects = {
	"projects": [
		{
			"title": "Udacity - P1 - HTML and CSS",
			"dates": "January - February 2015",
			"description":  "Create a mock website using HTML and CSS",
			"images": "images/robot.jpg",
		},
		{
			"title": "Udacity - P2 - Javascript and Jquery",
			"dates": "January - February 2015",
			"description":  "Create your own resume using Javascript and Jquery",
			"images": "images/tank.jpg"
		}
	],
	"displayworkprojects" : function () {
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
   		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
      	$(".project-entry:last").append(formattedImage);
		}
	}
};
// project function - builds project related information
projects.displayworkprojects();

var education = {
	"schools": [
		{
			"name": "Dekalb",
			"location":  "Dekalb, GA",
			"degree": "NA",
			"majors": ["Business Administration"],
			"dates": "1+ years",
			"url": "http://www.gpc.edu/",
		},
		{
			"name": "Devry",
			"location":  "Alpharetta, GA",
			"degree": "NA",
			"majors": ["Telecommunications Management", "Computer Science"],
			"dates": "2+ years",
			"url": "http://www.devry.edu/",
		}
	],
	"onlineCourses": [
		{
			"school": "Udacity",
			"url": "http://www.udacity.com/",
			"location":  "Mountain View, CA",
			"degree": "NanoDegree",
			"dates": "2014-2015",
			"title": ["Front-End Web Developer"]
		}
	],
	"displayeducationschools" : function () {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedschoolNameDegree = formattedschoolName.concat(formattedschoolDegree);
			$(".education-entry:last").append(formattedschoolNameDegree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedschoolDates);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedschoolLocation);
		}
	},
	"displayeducationonline" : function () {
		for (online in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			var formattedschoolTitleSchool = formattedOnlineSchool.concat(formattedOnlineTitle);
			$(".education-entry:last").append(formattedschoolTitleSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedOnlineUrl);
		}
	}
};


// education function - builds education related information
education.displayeducationschools();
education.displayeducationonline();

// function that changes the case of bio.name
function inName(name) {
	name = bio.name.trim().split(" ");
	console.log(name);
	name[2] = name[2].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
		name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1] +" "+ name[2];
}

// Internationlize bio.name
$('#main').append(internationalizeButton);

// Console x and y coordinates of a mouse click on the web page
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//display Google map locations
$("#mapDiv").append(googleMap);