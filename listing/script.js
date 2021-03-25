function createAllCards(student) {
    const {name, linkedin, github, speciality, studentMail, description, photo, id} = student
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
    studentDescription.innerHTML = description || '';
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
    cardButtonsLinkedin.href = linkedin;
    cardButtonsLinkedin.target = "blank";
    const iconLinkedin = document.createElement('i');
    cardButtonsLinkedin.classList.add("fab", "fa-linkedin", "fa-3x");
    cardButtonsLinkedin.style.color = "var(--wcs-color-lighter)"
    cardButtonsLinkedin.appendChild(iconLinkedin);

    //bouton github
    const cardButtonsGithub = document.createElement('a');
    cardButtonsGithub.classList.add("cardButtons");
    cardButtonsGithub.href = github;
    cardButtonsGithub.target = "blank";
    const iconGithub = document.createElement('i');
    cardButtonsGithub.classList.add("fab", "fa-github-square", "fa-3x");
    cardButtonsGithub.style.color = "var(--wcs-color-lighter)"
    cardButtonsGithub.appendChild(iconGithub);

    linksContainer.appendChild(cardButtonsLinkedin)
    linksContainer.appendChild(cardButtonsGithub)
    cardFooter.appendChild(linksContainer)

    // contact me
    const contactMeContainer = document.createElement("div")

    const contactMe = document.createElement("a");
    contactMe.classList.add("contactMe");
    contactMe.innerHTML = "Seduced? Contact me!"
    contactMe.href = "mailto:" + studentMail

    contactMeContainer.appendChild(contactMe)
    cardFooter.appendChild(contactMeContainer)

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

//generation cartes
studentsInfos.forEach(student => createAllCards(student))


//Alternance gauche droite
const allCards = document.getElementsByClassName("fullCard");

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
    region.innerHTML = selectedStudent.region
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

    const softSkills = document.createElement("div")
    softSkills.classList.add("resume-list")
    modalBody.appendChild(softSkills)

    const softSkillsTitle = document.createElement("h3")
    softSkillsTitle.classList.add("title")
    softSkillsTitle.innerHTML = "Soft Skills"
    softSkills.appendChild(softSkillsTitle)

    const softSkillsList = document.createElement("ul")
    selectedStudent.softSkills.forEach(softSkills => {
        const softSkillsItem = document.createElement("li")
        softSkillsItem.innerHTML = softSkills
        softSkillsList.appendChild(softSkillsItem)
    })
    softSkills.appendChild(softSkillsList)

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
    linkedinLink.style.color = "var(--wcs-color-lighter)"
    linkedinLink.href = selectedStudent.linkedinProfile
    linkedinLink.target = "blank";
    links.appendChild(linkedinLink)

    const githubLink = document.createElement("a")
    githubLink.classList.add("fab", "fa-github-square", "fa-3x");
    githubLink.style.color = "var(--wcs-color-lighter)"
    githubLink.href = selectedStudent.githubProfile
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