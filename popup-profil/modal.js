const studentInfo = [
  //// Tranche 1 ----------------------------------------------------------------------------------------------
  {
      name : "Julien Nicolas",
      lastname : "Brachelet-Randoulet",
      linkedinProfile : "",
      githubProfile : "https://github.com/Julien-Brcht-Rndlt",
      studentMail: "jn.brachet.randlt@gmail.com",
      region : "Provence-Alpes-Côte d'Azur",
      remote : true,
      speciality : "Fullstack",
      softSkills : "",
      hobbies : "lecture, BD, photo",
      previousExperience : "",
      photo : "",
  },

  {
      name :"Milad",
      lastname :"Behzadi",
      linkedinProfile : " " ,
      githubProfile : "https://github.com/MiladBhzd",
      studentMail: "milad.bhzdi@gmail.com",
      region : "Île-de-France",
      remote : false,
      speciality : "Fullstack",
      softSkills : "",
      hobbies : "tennis, lecture",
      previousExperience : "",
      photo : "",
  },

  {
      name : "Sarah",
      lastname : "Bensouna",
      linkedinProfile :"https://www.linkedin.com/in/sarah-bensouna-b25779152/",
      githubProfile : "",
      studentMail: "sarahbensouna.wild@gmail.com",
      region : "Nouvelle-Aquitaine",
      remote : true,
      speciality : "Fullstack",
      softSkills : "",
      hobbies : "randonnée, musculation, tennis",
      previousExperience : "",
      photo : "",
  },
  
  {
      name : "Julien",
      lastname : "Bourgineau",
      linkedinProfile : "https://www.linkedin.com/in/julien-bourgineau-1bb8211bb/", 
      githubProfile : "https://github.com/Sparco10",
      studentMail: "jbourgineau@gmail.com",
      region : "Malte",
      remote : true,
      speciality : "Front-end",
      softSkills : "",
      hobbies : "football",
      previousExperience : "",
      photo : "",
  },

  {
      name : "Gregory",
      lastname : "Bouteville",
      linkedinProfile : "https://www.linkedin.com/in/gregory-bouteville-14b464207/", 
      githubProfile : "https://github.com/Gregory-Bouteville",
      studentMail: "gregorybouteville@gmail.com",
      region : "Nouvelle-Aquitaine",
      remote : true,
      speciality : "Front-end",
      softSkills : "",
      hobbies : "randonnée, musique, photo, sport",
      previousExperience : "",
      photo : "/assets/img/gregory-bouteville.jpg",
  },

  {
      name : "Tom",
      lastname : "Carpentier",
      linkedinProfile : "https://www.linkedin.com/in/tom-carpentier-46ab84120/", 
      githubProfile : "https://github.com/TomWebd",
      studentMail: "t.carpentier.19@gmail.com",
      region : "Occitanie",
      remote : false,
      speciality : "Fullstack",
      softSkills : "",
      hobbies : "jeux vidéos, moto, guitare, tennis",
      previousExperience : "",
      photo : "",
  },

  {
      name : "David",
      lastname : "D'Amato",
      linkedinProfile : "https://www.linkedin.com/in/david-damato/", 
      githubProfile : "https://github.com/david-damato",
      studentMail: "david67230@gmail.com",
      region : "Grand Est",
      remote : false,
      speciality : "Fullstack",
      softSkills : "",
      hobbies : "bricolage, running, boxe",
      previousExperience : "",
      photo : "",
  },

  {
      name : "Aline",
      lastname : "Dubois",
      linkedinProfile : "https://www.linkedin.com/in/aline-dubois-95a0351aa/", 
      githubProfile : "https://github.com/alinedubois",
      studentMail: "juillet.aline@gmail.com",
      region : "Nouvelle-Aquitaine",
      remote : false,
      speciality : "Front-end",
      softSkills : " ",
      hobbies : "musique, jardinage, musculation",
      previousExperience : "",
      photo : "",
  },

  {
      name : "Marie-Anne",
      lastname : "Duvieu",
      linkedinProfile : " ", 
      githubProfile : "https://github.com/Sseven-lab",
      studentMail: "ma.duvieu@gmail.com",
      region : "Île-de-France",
      remote : false,
      speciality : "Front-end",
      softSkills : "",
      hobbies : "jeux vidéos, bricolage",
      previousExperience : "",
      photo : "",
  },

  {
      name : "Violaine",
      lastname : "Ernotte",
      linkedinProfile : "https://www.linkedin.com/in/violaine-ernotte/", 
      githubProfile : "https://github.com/vio9",
      studentMail: "ernotte.violaine@gmail.com",
      region : "Île-de-France",
      remote : false,
      speciality : "Front-end",
      softSkills : "",
      hobbies : "fanfare, batterie",
      previousExperience : "",
      photo : "",
  },
]

function modal(name, lastname, linkedinProfile, githubProfile, studentMail, region, remote, speciality, softSkills, hobbies, previousExperience) {

  const container = document.createElement("div")
  container.classList.add("modal-container")
  modal.appendChild(container)

  const header = document.createElement("div")
  header.classList.add("modal-header")
  modal.appendChild(header)

  const picture = document.createElement("img")
  picture.classList.add("modal-picture")

  const presentation = document.createElement("div")
  presentation.classList.add("modal-presentation")

  const fullName = document.createElement("h2")
  fullName.classList.add("modal-fullname")
  presentation.appendChild(fullName)

}