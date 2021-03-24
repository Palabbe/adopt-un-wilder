function createAllCards(student) {
    const {name, linkedin, github, speciality, mail, description, photo, id} = student
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

    //bouton linkedin
    const cardButtonsLinkedin = document.createElement('a');
    cardButtonsLinkedin.classList.add("cardButtons");
    cardButtonsLinkedin.href = linkedin;
    cardButtonsLinkedin.target = "blank";
    const iconLinkedin = document.createElement('i');
    cardButtonsLinkedin.classList.add("fab", "fa-linkedin", "fa-3x");
    cardButtonsLinkedin.style.color = "var(--wcs-color-lighter)"
    cardButtonsLinkedin.appendChild(iconLinkedin);
    cardFooter.appendChild(cardButtonsLinkedin);

    //bouton github
    const cardButtonsGithub = document.createElement('a');
    cardButtonsGithub.classList.add("cardButtons");
    cardButtonsGithub.href = github;
    cardButtonsGithub.target = "blank";
    const iconGithub = document.createElement('i');
    cardButtonsGithub.classList.add("fab", "fa-github-square", "fa-3x");
    cardButtonsGithub.style.color = "var(--wcs-color-lighter)"
    cardButtonsGithub.appendChild(iconGithub);
    cardFooter.appendChild(cardButtonsGithub);

    // contact me
    const contactMe = document.createElement("a");
    contactMe.classList.add("contactMe");
    contactMe.innerHTML = "Seduced? Contact me!"
    contactMe.href = "mailto:" + mail
    cardFooter.appendChild(contactMe);

    //see more
    const seeMore = document.createElement("button");
    seeMore.classList.add("seeMore");
    seeMore.innerHTML = "see more ";
    seeMore.onclick = () => openModal(id);
    cardFooter.appendChild(seeMore);
    
    //chevron see more
    const chevron = document.createElement("i");
    chevron.classList.add("fas", "fa-chevron-down", "fa-sm");
    seeMore.appendChild(chevron);
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


function openModal(studentId) {
    const selectedStudent = studentsInfos.find(student => student.id === studentId)

    const modalContainer = document.createElement("div")
    modalContainer.classList.add("modal-container")

    const modal = document.createElement("div")
    modal.classList.add("modal")
    modalContainer.appendChild(modal)

    const modalHeader = document.createElement("div")
    modalHeader.classList.add("modal-header")
    modal.appendChild(modalHeader)

    const profilImg = document.createElement("img")
    profilImg.classList.add("profil-img")
    modalHeader.appendChild(profilImg)



    const nameTitle = document.createElement("h2")
    nameTitle.innerHTML = selectedStudent.name

    const hobbyList = document.createElement("ul")
    selectedStudent.hobbies.forEach(hobby => {
        const hobbyItem = document.createElement("li")
        hobbyItem.innerHTML = hobby
        hobbyList.appendChild(hobbyItem)
    })



    // document.body.appendChild(modalContainer)
}
