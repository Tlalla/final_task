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
const imageElement = document.getElementById("changing-image");
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
// fetch('https://sheetdb.io/api/v1/kp4l6j7im8058')
//   .then(response => {
//     if (!response) {
//       throw new Error('Şəbəkə xətası baş verdi');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data); 
//         thirdartwords.prepend(names);
//         thirdartwords.append(years);
//         thirdartwords.append(roles);
//         withphoto.insertBefore(coords,thirdartwords);
//         i=0;
//         names.textContent = `${data[i].name} ${data[i].surname}`;
//         years.textContent = ` Years in club : ${data[i].years} years`; 
//         roles.textContent = ` Role : ${data[i].role}`; 
//         coords.src = data[i].photo;
//         coords.alt="photo";
//         right.addEventListener('click',()=>{
//             if (i < data.length-1) {
//                 i++
//                 names.textContent = `${data[i].name} ${data[i].surname}`;
//                 years.textContent = ` Years in club : ${data[i].years} years`; 
//                 roles.textContent = ` Role : ${data[i].role}`; 
//         coords.src = data[i].photo;

//               }else{
//               i=0; 
//              names.textContent=`${data[i].name} ${data[i].surname}`
//              years.textContent = ` Years in club : ${data[i].years} years`; 
//              roles.textContent = ` Role : ${data[i].role}`; 
//              coords.src = data[i].photo;

//               }});
//         left.addEventListener('click',()=>{
//             if (i>0) {
//                 i--;
//                 names.textContent = `${data[i].name} ${data[i].surname}`;
//                 years.textContent = ` Years in club : ${data[i].years} years`; 
//                 roles.textContent = ` Role : ${data[i].role}`;  
//                 coords.src = data[i].photo;

                
//               }else{
//               i=7; 
//              names.textContent=`${data[i].name} ${data[i].surname}`;
//              years.textContent = ` Years in club : ${data[i].years} years`; 
//              roles.textContent = ` Role : ${data[i].role}`; 
//              coords.src = data[i].photo;

//               }});
//         })

        
    // const changeName =()=>{
        
    // };
