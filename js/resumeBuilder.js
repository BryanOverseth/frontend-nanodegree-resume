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

// Console x abd y coordinates of a mouse click on the web page
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//display Google map locations
$("#mapDiv").append(googleMap);