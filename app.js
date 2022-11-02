// function* createId(){
//     let index = 1;

//     if (true){
//         yield  index++
//     }
// }
// const id = createId()
// console.log(id.next().value);
const data = [
  {
    name: "Mike Williams",
    age: 30,
    gender: "male",
    location: "Miami Florida",
    lookingFor: "Relationship",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Kara Gold",
    age: 20,
    gender: "Female",
    location: "boston MA",
    lookingFor: "Friendship",
    image: "https://randomuser.me/api/portraits/women/83.jpg",
  },
  {
    name: "Robert Cole",
    age: 32,
    gender: "Male",
    location: "Miami Florida",
    lookingFor: "Relationship",
    image: "https://randomuser.me/api/portraits/men/84.jpg",
  },
  {
    name: "Rebecca Charlet",
    age: 25,
    gender: "Female",
    location: "New York",
    lookingFor: "Relationship",
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
  },
];

////genertae data
const profile = profileLiterator(data);

//next btn
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profile.next().value;
  //list for the data
  document.getElementById("display-data").innerHTML = `
     <ul class = 'list-group'>
     <li class = 'list-group-item'>Name:${currentProfile.name}</li>
     <li class = 'list-group-item'>Age:${currentProfile.age}</li>
     <li class = 'list-group-item'>Gender:${currentProfile.gender}<li>
     <li class = 'list-group-item'>Location:${currentProfile.location}</li>
     <li class = 'list-group-item'>Preference:${currentProfile.lookingFor}</li>
     </ul>
     `;
  //generate umage
  document.getElementById("img-display").innerHTML = `
  <img src = "${currentProfile.image}"> 
  `;
}

///profile literator
function profileLiterator(profile) {
  let index = 0;
  return{
    next: function(){
     return index < profile.length ?
     {value: profile[index++], done: false} :{done: true}
    }
  }
}
