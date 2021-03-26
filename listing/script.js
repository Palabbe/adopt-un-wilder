//Recuperation infos dans l'url
    const urlVariables = location.search.substring(1).split('&')

    let filteredParameters = []
    let searchFilters = {
        region : "null" ,
        remote : "null" ,
        role : "null" ,
    }
    urlVariables.forEach(element => {
        filteredParameters.push(element.split('='))
    });

    filteredParameters.forEach(x => {
        switch (x[0]) {
            case "region":
                x[1] ? searchFilters.region = x[1] : "null";
                break;
            case "remote":
                x[1] ? searchFilters.remote = x[1] : "null";
                break;
            case "role":
                x[1] ? searchFilters.role = x[1] : "null";
                break;
            default:
                break;
        }
    })

    // console.log(searchFilters);

function createAllCards(student) {
    const {name, linkedinProfile, githubProfile, speciality, studentMail, hobbies, photo, id} = student
    const profilList = document.getElementById("profil-list");

    const fullCard = document.createElement("div");
    fullCard.classList.add("fullCard");
    profilList.appendChild(fullCard);
    
    const cardPicture = document.createElement("div");
    cardPicture.classList.add("cardPicture");
    cardPicture.appendChild(document.createElement('img'));
    cardPicture.children[0].src = photo || "/assets/img/avatar.png" ;
    fullCard.appendChild(cardPicture);

    const card = document.createElement("div");
    card.classList.add("card");
    fullCard.appendChild(card);

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");
    card.appendChild(cardContent);

    const studentName = document.createElement("h1");
    studentName.innerHTML = name;
    const studentProfile = document.createElement("h2");
    studentProfile.innerHTML = speciality;
    const studentDescription = document.createElement("p");
    studentDescription.innerHTML = hobbies || '';
    cardContent.appendChild(studentName);
    cardContent.appendChild(studentProfile);
    cardContent.appendChild(studentDescription);

    const cardFooter = document.createElement('div');
    cardFooter.classList.add("cardFooter");
    card.appendChild(cardFooter);

    //container boutons Linkedin + github
    const linksContainer = document.createElement("div")

    //bouton linkedin
    const cardButtonsLinkedin = document.createElement('a');
    cardButtonsLinkedin.classList.add("cardButtons");
    if (linkedinProfile != ""){cardButtonsLinkedin.href = linkedinProfile}
    cardButtonsLinkedin.target = "blank";
    const iconLinkedin = document.createElement('i');
    cardButtonsLinkedin.classList.add("fab", "fa-linkedin", "fa-3x");
    cardButtonsLinkedin.style.color = linkedinProfile != "" ? "var(--wcs-color-lighter)" : "lightgrey"
    linkedinProfile != ""
    cardButtonsLinkedin.appendChild(iconLinkedin);

    //bouton github
    const cardButtonsGithub = document.createElement('a');
    cardButtonsGithub.classList.add("cardButtons");
    if (githubProfile != "") {cardButtonsGithub.href = githubProfile};
    cardButtonsGithub.target = "blank";
    const iconGithub = document.createElement('i');
    cardButtonsGithub.classList.add("fab", "fa-github-square", "fa-3x");
    cardButtonsGithub.style.color = githubProfile ? "var(--wcs-color-lighter)" : "lightgrey"
    cardButtonsGithub.appendChild(iconGithub);

    linksContainer.appendChild(cardButtonsLinkedin)
    linksContainer.appendChild(cardButtonsGithub)
    cardFooter.appendChild(linksContainer)

    // contact me
    // const contactMeContainer = document.createElement("div")

    const contactMe = document.createElement("a");
    contactMe.classList.add("contactMe");
    contactMe.innerHTML = "Seduced? Contact me!"
    contactMe.href = "mailto:" + studentMail

    linksContainer.appendChild(contactMe)
    cardFooter.appendChild(linksContainer)

    //see more
    const seeMoreContainer = document.createElement("div")

    const seeMore = document.createElement("button");
    seeMore.classList.add("seeMore");
    seeMore.innerHTML = "see more";
    seeMore.onclick = () => openModal(id);

    seeMoreContainer.appendChild(seeMore)
    cardFooter.appendChild(seeMoreContainer)

    //chevron see more
    // const chevron = document.createElement("i");
    // chevron.classList.add("fas", "fa-chevron-down", "fa-sm");
    // seeMore.appendChild(chevron);
}

//Recuperation des profils
let studentsQuery = []
studentsQuery = studentsInfos
// console.log("before : " + studentsInfos.length)

for (let i = 0; i < studentsQuery.length; i++)
    {
        if (searchFilters.region != 'null')
        {
            if (studentsQuery[i].region[1] != searchFilters.region)
            {
                console.log("removed because region : " + studentsQuery[i].name + "( " + studentsQuery[i].region + " Vs " + searchFilters.region +" )")
                studentsQuery.splice(i, 1);
                i--;
            }
        }

        if (searchFilters.role != 'null' && studentsQuery[i] != null)
        {
            console.log(searchFilters.role);
            if (studentsQuery[i].speciality != searchFilters.role)
            {
                console.log("removed because role : " + studentsQuery[i].name + "( " + studentsQuery[i].speciality + " Vs " + searchFilters.role +" )")
                studentsQuery.splice(i, 1);
                i--;
            }
        }

        if (searchFilters.remote != 'null' && studentsQuery[i] != null)
        {
            if (studentsQuery[i].remote.toString() != searchFilters.remote)
            {
                console.log("removed because remote : " + studentsQuery[i].name + "( " + studentsQuery[i].remote + " Vs " + searchFilters.remote +" )")
                studentsQuery.splice(i, 1);
                i--;
            }
        }
    };

    // console.log("then : " + studentsQuery.length)s

// console.log(studentsQuery);
// S'il n'y a pas de profil, nous affichons un message d'erreur
if (studentsQuery[0] == null)
{
    const listingTitle = document.getElementById("listing-title");
    listingTitle.innerHTML = "Nous n'avons pas trouvé de profils correspondant à votre sélection"
}

//generation cartes
//shuffle all profiles
studentsQuery.sort(() => 0.5 - Math.random());
studentsQuery.forEach(student => createAllCards(student))

//Alternance gauche droite

const allCards = document.getElementsByClassName("fullCard");
 Array.from(allCards)

for (let i = 0; i < allCards.length; i++) {
    if (i % 2) {
        allCards[i].classList.add("reverse-order");
    }
}

// --------- MODAL ----------

function openModal(studentId) {
    const selectedStudent = studentsInfos.find(student => student.id === studentId)

    const modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")
    modalContainer.setAttribute('id', 'modal')

    const modal = document.createElement("div")
    modal.classList.add("modal")
    modalContainer.appendChild(modal)

    const modalHeader = document.createElement("div")
    modalHeader.classList.add("modal-header")
    modal.appendChild(modalHeader)

    const profilImg = document.createElement("img")
    profilImg.classList.add("profil-img")
    profilImg.src = selectedStudent.photo || "/assets/img/avatar.png" 
    modalHeader.appendChild(profilImg)

    const close = document.createElement("div")
    close.classList.add("close")
    close.innerHTML = "&#10006;"
    close.onclick = () => closeModal()
    modalHeader.appendChild(close)

    const modalBody = document.createElement("div")
    modalBody.classList.add("modal-body")
    modal.appendChild(modalBody)

    const presentation = document.createElement("div")
    presentation.classList.add("presentation")
    modalBody.appendChild(presentation)

    const Nametitle = document.createElement("h2")
    Nametitle.classList.add("name-title")
    Nametitle.innerHTML = selectedStudent.name
    presentation.appendChild(Nametitle)

    const speciality = document.createElement("p")
    speciality.classList.add("subtitle")
    speciality.innerHTML = selectedStudent.speciality
    presentation.appendChild(speciality)

    const region = document.createElement("p")
    region.classList.add("subtitle")
    region.innerHTML = selectedStudent.region[0]
    presentation.appendChild(region)

    const presentationText = document.createElement("p")
    presentationText.innerHTML = selectedStudent.presentation
    presentation.appendChild(presentationText)

    const experiences = document.createElement("div")
    experiences.classList.add("resume-list")
    modalBody.appendChild(experiences)

    const resumeTitle = document.createElement("h3")
    resumeTitle.classList.add("title")
    resumeTitle.innerHTML = "Expériences"
    experiences.appendChild(resumeTitle)

    const experiencesList = document.createElement("ul")
    selectedStudent.previousExperience.forEach(experience => {
        const experienceItem = document.createElement("li")
        experienceItem.innerHTML = experience
        experiencesList.appendChild(experienceItem)
    })
    experiences.appendChild(experiencesList)

    const skills = document.createElement("div")
    skills.classList.add("resume-list")
    modalBody.appendChild(skills)

    const skillsTitle = document.createElement("h3")
    skillsTitle.classList.add("title")
    skillsTitle.innerHTML = "Soft Skills"
    skills.appendChild(skillsTitle)

    const skillsList = document.createElement("ul")
    selectedStudent.skills.forEach(skills => {
        const skillsItem = document.createElement("li")
        skillsItem.innerHTML = skills
        skillsList.appendChild(skillsItem)
    })
    skills.appendChild(skillsList)

    const hobbies = document.createElement("div")
    hobbies.classList.add("resume-list")
    modalBody.appendChild(hobbies)

    const hobbiesTitle = document.createElement("h3")
    hobbiesTitle.classList.add("title")
    hobbiesTitle.innerHTML = "Hobbies"
    hobbies.appendChild(hobbiesTitle)

    const hobbyList = document.createElement("ul")
    selectedStudent.hobbies.forEach(hobby => {
        const hobbyItem = document.createElement("li")
        hobbyItem.innerHTML = hobby
        hobbyList.appendChild(hobbyItem)
    })
    hobbies.appendChild(hobbyList)

    const links = document.createElement("div")
    links.classList.add("links")
    modalBody.appendChild(links)

    const linkedinLink = document.createElement("a")
    linkedinLink.classList.add("fab", "fa-linkedin", "fa-3x");
    linkedinLink.style.color = selectedStudent.linkedinProfile ? "var(--wcs-color-lighter)" : "lightgrey"
    if (selectedStudent.linkedinProfile != "") {linkedinLink.href = selectedStudent.linkedinProfile}
    linkedinLink.target = "blank";
    links.appendChild(linkedinLink)

    const githubLink = document.createElement("a")
    githubLink.classList.add("fab", "fa-github-square", "fa-3x");
    githubLink.style.color = selectedStudent.githubProfile ? "var(--wcs-color-lighter)": "lightgrey"
    if (selectedStudent.githubProfile != "") {githubLink.href = selectedStudent.githubProfile}
    githubLink.target = "blank";
    links.appendChild(githubLink)

    const contactMe = document.createElement("a")
    contactMe.classList.add("contactMe");
    contactMe.innerHTML = "Seduced? Contact me!"
    contactMe.href = "mailto:" + selectedStudent.studentMail
    contactMe.style.marginBottom = "40px"
    modalBody.appendChild(contactMe)

    document.body.appendChild(modalContainer)
}

function closeModal(){
    document.getElementById("modal").remove()
}