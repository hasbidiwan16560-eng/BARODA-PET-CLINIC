let password =
localStorage.getItem("ownerPassword")
|| "mohit2807";

function login(){

const entered =
document.getElementById(
"password"
).value;

if(entered === password){

document.getElementById(
"loginBox"
).style.display="none";

document.getElementById(
"dashboard"
).style.display="block";

}else{

alert("Wrong Password");

}

}

function saveWhatsapp(){

const number =
document.getElementById(
"whatsappInput"
).value;

localStorage.setItem(
"ownerWhatsapp",
number
);

alert("WhatsApp Saved");

}

function saveHero(){

const title =
document.getElementById(
"heroTitleInput"
).value;

const desc =
document.getElementById(
"heroDescInput"
).value;

localStorage.setItem(
"heroTitle",
title
);

localStorage.setItem(
"heroDesc",
desc
);

alert("Hero Updated");

}

function saveContact(){

const contact =
document.getElementById(
"contactInput"
).value;

localStorage.setItem(
"contact",
contact
);

alert("Contact Saved");

}

function saveFooter(){

const footer =
document.getElementById(
"footerInput"
).value;

localStorage.setItem(
"footer",
footer
);

alert("Footer Saved");

}

function addService(){

const services =
JSON.parse(
localStorage.getItem("services")
) || [];

services.push({

name:
document.getElementById(
"serviceName"
).value,

price:
document.getElementById(
"servicePrice"
).value,

image:
document.getElementById(
"serviceImage"
).value

});

localStorage.setItem(
"services",
JSON.stringify(services)
);

alert("Service Added");

}

function addGallery(){

const gallery =
JSON.parse(
localStorage.getItem("gallery")
) || [];

gallery.push(

document.getElementById(
"galleryImage"
).value

);

localStorage.setItem(
"gallery",
JSON.stringify(gallery)
);

alert("Gallery Updated");

}

function addTestimonial(){

const testimonials =
JSON.parse(
localStorage.getItem(
"testimonials"
)
) || [];

testimonials.push({

name:
document.getElementById(
"testimonialName"
).value,

text:
document.getElementById(
"testimonialText"
).value

});

localStorage.setItem(
"testimonials",
JSON.stringify(testimonials)
);

alert("Testimonial Added");

}

function addSlot(){

const slots =
JSON.parse(
localStorage.getItem(
"slots"
)
) || [];

slots.push(

document.getElementById(
"slotInput"
).value

);

localStorage.setItem(
"slots",
JSON.stringify(slots)
);

alert("Slot Added");

}

function changePassword(){

const newPass =
document.getElementById(
"newPassword"
).value;

localStorage.setItem(
"ownerPassword",
newPass
);

password = newPass;

alert("Password Changed");

}