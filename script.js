let tours=document.querySelector('.tours');
let ress=document.querySelector(".ress");
let tour=document.querySelector('.tour');
let res=document.querySelector('.res');
let choice=document.querySelector('.choice');
let onpicture=document.querySelector('.onpicture');
let thirdartblock=document.querySelector('.thirdartblock');
let left=document.querySelector('.left');
let right=document.querySelector('.right');
let changing=document.querySelector('.changing');
let thirdartwords=document.querySelector('.thirdartwords');
let allcoords=document.querySelector('.allcoords');
let withphoto=document.querySelector('.withphoto');
const sendButton = document.querySelector('.send');
const spikername = document.querySelector('.spikername');
const spikersurname = document.querySelector('.spikersurname');
const spikerfaculty = document.querySelector('.spikerfaculty');
const imageElement = document.getElementById("changing-image");
const spikergroup = document.querySelector('.spikergroup');
const spikeryear = document.querySelector('.spikerstudyyear');
const spikernumber= document.querySelector('.spikernumber');
let fourthart=document.querySelector('.fourthart');
let resubmit=document.querySelector('.resubmit');
let successful= document.querySelector('.successful');
let backbutton=document.querySelector('.backbutton');
let resend=document.querySelector('.resend');
let cooperation=document.querySelector('.cooperation');
let fifthart=document.querySelector('.fifthart');
let suggestions=document.querySelector('.suggestions');
let yeardiv=document.querySelector('.yeardiv');
let form=document.querySelector('form');
let menu=document.querySelector('.menu');
let others=document.querySelector('.others')
tour.addEventListener('mouseover',()=>{
    tours.classList.remove('none');
})
tour.addEventListener('mouseleave',()=>{
    tours.classList.add('none');
})
tours.addEventListener('mouseover',()=>{
    tours.classList.remove('none');
})
tours.addEventListener('mouseleave',()=>{
    tours.classList.add('none');
})
res.addEventListener('mouseover',()=>{
    ress.classList.remove('none');
})
res.addEventListener('mouseleave',()=>{
    ress.classList.add('none');
})
ress.addEventListener('mouseover',()=>{
    ress.classList.remove('none');
})
ress.addEventListener('mouseleave',()=>{
    ress.classList.add('none');
})

const images = [
    "./img/photochange1.jpeg", 
    "./img/photochange2.jpg",
    "./img/photochange3.jpg",
    "./img/photochange4.jpg",
];
const onpics = [
    "'Debate Tournament in Honor of the Club's XV Anniversary'",
    '"Baku Youth Debate Forum: Winter 2, 2024"',
    '"XVII Internal Tournament in Parliamentary Debate Format"',
    '"Parliamentary Debate Trainings"'
]
let currentIndex = -1;
function changeImage() {
    currentIndex = (currentIndex + 1 ) % images.length;
    imageElement.src = images[currentIndex];
}
setInterval(changeImage, 3000);
let currentIndexPics = 0;
function changeOnPics(){
    currentIndexPics=(currentIndexPics + 1)% onpics.length;
    onpicture.textContent=onpics[currentIndexPics];
}
setInterval(changeOnPics,3000);
let coords=document.createElement('img');
coords.classList.add("coordphotos");
let names=document.createElement('p');
let years=document.createElement('p');
let roles=document.createElement('p');
function changeLanguage(selectElement) {
    const language = selectElement.value;
    if (language === 'az') {
      window.location.href = './indexaz.html';
    }
    else if (language === 'ru') {
      window.location.href = './indexru.html';
    } else if (language === 'en') {
      window.location.href = './index.html';
    }
  }
fetch('https://sheetdb.io/api/v1/7axaezay79gf4')
  .then(response => {
    if (!response) {
      throw new Error('Şəbəkə xətası baş verdi');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); 
        thirdartwords.prepend(names);
        thirdartwords.append(years);
        thirdartwords.append(roles);
        withphoto.insertBefore(coords,thirdartwords);
        i=0;
        names.textContent = `${data[i].name} ${data[i].surname}`;
        years.textContent = ` Years in club : ${data[i].years} years`; 
        roles.textContent = ` Role : ${data[i].role}`; 
        coords.src = data[i].photo;
        coords.alt="photo";
        right.addEventListener('click',()=>{
            if (i < data.length-1) {
                i++
                names.textContent = `${data[i].name} ${data[i].surname}`;
                years.textContent = ` Years in club : ${data[i].years} years`; 
                roles.textContent = ` Role : ${data[i].role}`; 
        coords.src = data[i].photo;

              }else{
              i=0; 
             names.textContent=`${data[i].name} ${data[i].surname}`
             years.textContent = ` Years in club : ${data[i].years} years`; 
             roles.textContent = ` Role : ${data[i].role}`; 
             coords.src = data[i].photo;

              }});
        left.addEventListener('click',()=>{
            if (i>0) {
                i--;
                names.textContent = `${data[i].name} ${data[i].surname}`;
                years.textContent = ` Years in club : ${data[i].years} years`; 
                roles.textContent = ` Role : ${data[i].role}`;  
                coords.src = data[i].photo;

                
              }else{
              i=7; 
             names.textContent=`${data[i].name} ${data[i].surname}`;
             years.textContent = ` Years in club : ${data[i].years} years`; 
             roles.textContent = ` Role : ${data[i].role}`; 
             coords.src = data[i].photo;

              }});
        })
let registrationData=[];
sendButton.addEventListener('click', function(event) {
    event.preventDefault();
    // console.log(!spikername.value.trim)
    if (!!spikername.value.trim() && !!spikersurname.value.trim() && !!spikerfaculty.value.trim() && !!spikergroup.value.trim() && !!spikeryear.value.trim() && !!spikernumber.value.trim()) {
    registrationData.push({
        name: spikername.value,
        surname: spikersurname.value,
        faculty: spikerfaculty.value,
        groupnumber: spikergroup.value,
        year: spikeryear.value,
        phone: spikernumber.value
    });
    console.log(registrationData);
    successful.classList.remove('none');
    fourthart.classList.add('none');
}else{
    alert("Please fill out all fields.");
}

})
resubmit.addEventListener('click', ()=>{
    
    successful.classList.add('none');
    fourthart.classList.remove('none');
    spikername.value='',
        spikersurname.value='',
        spikerfaculty.value='',
        spikergroup.value='',
        spikeryear.value='',
        spikernumber.value=''
})
let suggestionData=[];
backbutton.addEventListener('click', function(event) {
    event.preventDefault();
    if(!!suggestions.value.trim()){
        suggestionData.push({
            feedback: suggestions.value,
        });
        console.log(suggestionData);
        cooperation.classList.remove('none');
        fifthart.classList.add('none');
    }
    
})
resend.addEventListener('click', ()=>{
    cooperation.classList.add('none');
    fifthart.classList.remove('none');
    suggestions.value='';
})

let yearerror=document.createElement('p');
yearerror.classList.add('rederror');
spikeryear.addEventListener('input', function () {
    const value = parseInt(this.value, 10);
    if (value < 1 || value > 4) {
        yeardiv.append(yearerror);
        yearerror.textContent="Year of study must be between 1 and 4."
        this.value = '';
    }
});
spikernumber.addEventListener('input', () => {
    spikernumber.value = spikernumber.value.replace(/[^0-9+]/g, '');
});
spikerfaculty.addEventListener('input', () => {
    spikerfaculty.value = spikerfaculty.value.replace(/[0-9]/g, '');
});
spikername.addEventListener('input', () => {
    spikername.value = spikername.value.replace(/[0-9]/g, '');
});
spikersurname.addEventListener('input', () => {
    spikersurname.value = spikersurname.value.replace(/[0-9]/g, '');
});
menu.addEventListener('click',()=>{
    others.classList.toggle('none');
})