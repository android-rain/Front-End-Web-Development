var bio = {
    "name": "Yi Yun",
    "role": "Web Developer",
    "contacts": {
        "mobile": "0571-88916588",
        "email": "cutejs@gmail.com",
        "github": "Android-rain",
        "twitter": "cutejs@gmail.com",
        "location": "XiHu HangZhou"
    },
    "welcomeMessage": "STILL HUNGRY STILL FOOLISH",
    "skills": ["Play with Python", "Saving the Human", "Cook Eat Delicious", "Precise Shot"],
    "biopic": "images/fry.jpg",
};
bio.display = function () {
    
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);   
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    

    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);

    /* display skills*/
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(e){    
    var formattedSkills = HTMLskills.replace("%data%", e);    
        $("#skills").append(formattedSkills);
    });

    /* display contacts*/
    $("#topContacts, #footerContacts").append(formattedMobile + 
                             formattedEmail + 
                             formattedGithub + 
                             formattedTwitter + 
                             formattedlocation);
};

var work = {
    "jobs": [{
        "employer": "MEPON",
        "title": "Technicist",
        "location": "HangZhou",
        "dates": "in process",
        "description": "A company produces equipment for fire protection."
    }, {
        "employer": "ZhongHeng",
        "title": "Electrical Engineer",
        "location": "HangZhou",
        "dates": "2012.6-2012.9",
        "description": "A company produces high frequency power."

    }]
};
work.display = function(){

    if (work.jobs.length > 0) {
        work.jobs.forEach(function(job) {           
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
            var formattedwork = formattedworkEmployer+formattedworkTitle+formattedworkLocation+formattedworkDates+formattedworkDescription;
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedwork);

        });
}
};

var projects = {
    "projects": [{
        "title": "Joes",
        "dates": "2014.4 - 2014.7",
        "description": "An android APP",
        "images": ["images/197x148.gif"]
    }, {
        "title": "Sunshine",
        "dates": "2015.3 - 2015.11",
        "description": "An application for play stock",
        "images": ["images/197x148.gif"]
    }, {
        "title": "wechat",
        "dates": "2016 - current",
        "description": "A social community platform",
        "images": ["images/197x148.gif"]
    }]
};
/* display function of Project*/
projects.display = function(){
    projects.projects.forEach(function(project){
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedProject = formattedTitle + formattedDates + formattedDescription;
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedProject);
        project.images.forEach(function(image){
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

var education = {
    "schools": [{
        "name": "YanTai University",
        "location": "YanTai ShanDong",
        "degree": "Undergraduate Degree",
        "majors": ['CE'],
        "dates": "2008.9 - 2012.6",
        "url": "http://www.ytu.edu.cn/",
    }, {
        "name": "ZheJiang University",
        "location": "HangZhou ZheJiang",
        "degree": "None Degree",
        "majors": ['CS'],
        "dates": "2011.10",
        "url": "http://www.zju.edu.cn/",
    }],
    "onlineCourses": [{
        "title": "Intro to Java Programming",
        "school": "San Jose State University",
        "dates": "2015.10 - 2015.12",
        "url": "https://www.udacity.com/course/intro-to-java-programming--cs046"
    }, {
        "title": "Using Python to Access Web Data",
        "school": "University of Michigan",
        "dates": "2015.12 - 2016.2",
        "url": "https://www.coursera.org/learn/python-network-data/home/welcome"
    }, {
        "title": "Introduction to Computer Science and Programming Using Python",
        "school": "MIT",
        "dates": "2014.8 - 2014.10",
        "url": "https://courses.edx.org/courses/MITx/6.00.1_4x/3T2014/info"
    }],
    
};
/* display function of Education*/
education.display = function () {
    education.schools.forEach(function(school){
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolUrl = formattedSchoolName.replace("#", school.url);
        
        var formettedSchool = formattedSchoolUrl + 
            formattedSchoolDegree + 
            formattedSchoolDates  + 
            formattedSchoolLocation;
            
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formettedSchool);
        school.majors.forEach(function(major){
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);

        });
    });
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course){
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedUrl = formattedTitle.replace("#", course.url);
        var formattedOnlineCourse = formattedUrl + formattedSchool + formattedDates;
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineCourse);
    });
};




bio.display();
work.display();
projects.display();
education.display();
// $("#main").append(internationalizeButton);
// function inName(string){
// 	var name = string.split(" ");
// 	return name[0].charAt(0).toUpperCase()+name[0].slice(1).toLowerCase()+" "+name[1].toUpperCase();
// }
/* enable google map*/
$("#mapDiv").append(googleMap);
