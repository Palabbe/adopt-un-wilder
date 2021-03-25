//Recuperation infos dans l'url
    const urlVariables = location.search.substring(1).split('&')

    let filteredParameters = []
    let searchFilters = {
        region : "" ,
        remote : "" ,
        role : "" ,
    }
    urlVariables.forEach(element => {
        filteredParameters.push(element.split('='))
    });

    filteredParameters.forEach(x => {
        switch (x[0]) {
            case "region":
                x[1] ? searchFilters.region = x[1] : null;
                break;
            case "remote":
                x[1] ? searchFilters.remote = x[1] : null;
                break;
            case "role":
                x[1] ? searchFilters.role = x[1] : null;
                break;
            default:
                break;
        }
    })

    console.log(searchFilters);

function createAllCards(name, linkedin, github, speciality, mail, description, photo) {
    const profilList = document.getElementById("profil-list");

    const fullCard = document.createElement("div");
    fullCard.classList.add("fullCard");
    profilList.appendChild(fullCard);
    
    const cardPicture = document.createElement("div");
    cardPicture.classList.add("cardPicture");
    cardPicture.appendChild(document.createElement('img'));
    cardPicture.children[0].src = photo;
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

//Recuperation des profils
let studentsQuery = []
studentsQuery = studentInfo
console.log("before : " + studentInfo.length)

for (let i = 0; i < studentsQuery.length; i++)
    {
        if (searchFilters.region != 'null')
        {
            if (studentsQuery[i].region != searchFilters.region)
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

    console.log("then : " + studentsQuery.length)

console.log(studentsQuery);
// S'il n'y a pas de profil, nous affichons un message d'erreur
const listingTitle = document.getElementById("listing-title");
listingTitle.innerHTML = "Nous n'avons pas trouvé de profils correspondant à votre sélection"

//generation cartes
for (let index = 0; index < studentsQuery.length; index++)
{

    createAllCards(studentsQuery[index].name,
                    studentsQuery[index].linkedinProfile,
                    studentsQuery[index].githubProfile,
                    studentsQuery[index].speciality,
                    studentsQuery[index].studentMail,
                    studentsQuery[index].region,
                    studentsQuery[index].photo ? studentsQuery[index].photo : "/assets/img/avatar.png" );
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