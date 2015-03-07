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



