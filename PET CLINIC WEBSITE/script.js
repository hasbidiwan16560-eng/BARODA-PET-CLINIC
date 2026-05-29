const services = JSON.parse(
localStorage.getItem("services")
) || [

{
name:"Vaccination",
price:"₹500",
image:"images/service1.jpg"
},

{
name:"Checkup",
price:"₹700",
image:"images/service2.jpg"
}

];

const gallery = JSON.parse(
localStorage.getItem("gallery")
) || [

"images/gallery1.jpg",
"images/gallery2.jpg"

];

const testimonials = JSON.parse(
localStorage.getItem("testimonials")
) || [

{
name:"Rahul",
text:"Best clinic experience"
}

];

const slots = JSON.parse(
localStorage.getItem("slots")
) || [

"10:00 AM",
"11:00 AM",
"1:00 PM"

];

function loadServices(){

const container =
document.getElementById(
"servicesContainer"
);

const select =
document.getElementById(
"serviceSelect"
);

container.innerHTML="";
select.innerHTML="";

services.forEach(service=>{

container.innerHTML += `
<div class="card">

<img src="${service.image}">

<h3>${service.name}</h3>

<p>${service.price}</p>

</div>
`;

select.innerHTML += `
<option>${service.name}</option>
`;

});

}

function loadGallery(){

const container =
document.getElementById(
"galleryContainer"
);

container.innerHTML="";

gallery.forEach(img=>{

container.innerHTML += `
<div class="card">

<img src="${img}">

</div>
`;

});

}

function loadTestimonials(){

const container =
document.getElementById(
"testimonialContainer"
);

container.innerHTML="";

testimonials.forEach(t=>{

container.innerHTML += `
<div class="card">

<h3>${t.name}</h3>

<p>${t.text}</p>

</div>
`;

});

}

function loadSlots(){

const select =
document.getElementById(
"slotSelect"
);

select.innerHTML="";

slots.forEach(slot=>{

select.innerHTML += `
<option>${slot}</option>
`;

});

}

window.addEventListener("load", ()=>{

loadServices();
loadGallery();
loadTestimonials();
loadSlots();

const title =
localStorage.getItem("heroTitle");

const desc =
localStorage.getItem("heroDesc");

const contact =
localStorage.getItem("contact");

const footer =
localStorage.getItem("footer");

if(title){
document.getElementById(
"heroTitle"
).innerText=title;
}

if(desc){
document.getElementById(
"heroDesc"
).innerText=desc;
}

if(contact){
document.getElementById(
"contactNumber"
).innerText=contact;
}

if(footer){
document.getElementById(
"footerText"
).innerText=footer;
}

});

document.getElementById(
"bookingForm"
).addEventListener("submit",
function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const phone =
document.getElementById("phone").value;

const pet =
document.getElementById("pet").value;

const service =
document.getElementById("serviceSelect").value;

const date =
document.getElementById("date").value;

const slot =
document.getElementById("slotSelect").value;

const notes =
document.getElementById("notes").value;

const whatsapp =
localStorage.getItem(
"ownerWhatsapp"
) || "919876543210";

const message =
`🐾 NEW APPOINTMENT BOOKING

👤 Name: ${name}
📞 Phone: ${phone}
🐶 Pet: ${pet}
💉 Service: ${service}
📅 Date: ${date}
⏰ Slot: ${slot}
📝 Notes: ${notes}`;

window.open(
`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
"_blank"
);

});