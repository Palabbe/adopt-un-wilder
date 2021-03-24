function createAllCards(name, linkedin, github, speciality, mail, description) {
    const profilList = document.getElementById("profil-list");

    const fullCard = document.createElement("div");
    fullCard.classList.add("fullCard");
    profilList.appendChild(fullCard);
    
    const cardPicture = document.createElement("div");
    cardPicture.classList.add("cardPicture");
    cardPicture.appendChild(document.createElement('img'));
    cardPicture.children[0].src = "/assets/img/austin-wade-X6Uj51n5CE8-unsplash.jpg";
    fullCard.appendChild(cardPicture);

    const card = document.createElement("div");
    card.classList.add("card");
    fullCard.appendChild(card);

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");
    card.appendChild(cardContent);

    const studentName = document.createElement("h1");
    studentName.innerHTML = name
    const studentProfile = document.createElement("h2");
    studentProfile.innerHTML = speciality
    const studentDescription = document.createElement("p");
    studentDescription.innerHTML = description
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
    const seeMore = document.createElement("a");
    seeMore.classList.add("seeMore");
    seeMore.innerHTML = "see more ";
    cardFooter.appendChild(seeMore);
    
    //chevron see more
    const chevron = document.createElement("i");
    chevron.classList.add("fas", "fa-chevron-down", "fa-sm");
    seeMore.appendChild(chevron);
}

//generation cartes
for (let index = 0; index < studentInfo.length; index++)
{
    createAllCards(studentInfo[index].name,
                    studentInfo[index].linkedinProfile,
                    studentInfo[index].githubProfile,
                    studentInfo[index].speciality,
                    studentInfo[index].studentMail,
                    studentInfo[index].region);
}

//Alternance gauche droite
const allCards = document.getElementsByClassName("fullCard");

for (let i = 0; i < allCards.length; i++)
{
    if (i%2 == true)
    {
        allCards[i].classList.add("reverse-order");
    }
}