const initFilteringAction = () => {

    const actionButton = document.getElementById("filtering");

    actionButton.addEventListener('click', () => {

        const urlListing = `#roles-filter`;
        console.log(urlListing);
        window.location.href = urlListing;

    });
}



const initAllProfilesAction = () => {

    const actionButton = document.getElementById("allProfiles");

    actionButton.addEventListener('click', () => {

        const urlListing = `listing/listing.html`;
        console.log(urlListing);
        window.location.href = urlListing;

    });
}



/**
 * Initialize roles filtering behaviour
 */
const initRolesFilter = () => {
    const rolesChoices = document.querySelectorAll(".role-choice");
    
    rolesChoices.forEach((choice) => {

        choice.addEventListener('click', function(event) {
            event.preventDefault();

            if(this.classList.contains("choosen-role")){
                this.classList.remove("choosen-role");

            } else {
                const oldChoice = document.querySelector(".roles-filter").querySelector(".choosen-role");
                if(oldChoice !== null){
                    oldChoice.classList.remove("choosen-role");
                }
                this.classList.add("choosen-role");
            }
        });
    });

}


const initRegionsFilter = () => {

    const regionsMap = document.getElementById("map");
    console.log(regionsMap);

    const regionsMapPaths = regionsMap.querySelectorAll(".region");

    console.log(regionsMapPaths);

    regionsMapPaths.forEach((regionPath) => {

        console.log(regionPath);

        regionPath.addEventListener('click', function(event) {
            event.preventDefault();


            console.log('click region: ' + this.getAttribute("id"));

            if(this.classList.contains("choosen-region")){
                this.classList.remove("choosen-region");
                console.log('deja select region: ' + this.getAttribute("id"));

            } else {
                const oldRegion = document.querySelector(".regions-map").querySelector(".choosen-region");

                console.log('new select region: ' + this.getAttribute("id"));

                if(oldRegion !== null){

                    console.log('old select region: ' + oldRegion.getAttribute("id"));
                    oldRegion.classList.remove("choosen-region");
                }
                this.classList.add("choosen-region");
            }


        })

    })

}


/**
 * Initialize checkbox icons "simulated" behaviour
 */
const initInRemote = () => {
    // Toggle check square onclick event
    const inRemote = document.getElementById("inRemote");

    inRemote.addEventListener('click', function() {

        const chkdIconCls = ["fas", "fa-check-square"];
        const unchkdIconCls = ["far", "fa-square"];

        if(this.classList.contains(chkdIconCls[0]) && this.classList.contains(chkdIconCls[1])){

            this.classList.remove(...chkdIconCls);
            this.classList.add(...unchkdIconCls);

        } else if(this.classList.contains(unchkdIconCls[0]) && this.classList.contains(unchkdIconCls[1])){

            this.classList.remove(...unchkdIconCls);
            this.classList.add(...chkdIconCls);

        }
    });
}

const displayFilterSection = (section) => {
    section.style.display = "block";
    //TODO: adding animation effect for the display
}

const showNoFilter = () => {
    //TODO: adding behaviour if required
}

/**
 * Initialize all the filtering interactivity flow
 */
const initFilteringFlow = () => {

    // displaying roles filter
    const rolesSection = document.querySelector(".roles-filter");
    displayFilterSection(rolesSection);

    // hidding regions filter
    const regionsSection = document.querySelector(".regions-filter");
    //regionsSection.style.display = "none";

    // binding region filter display
    /*const skipAction = document.querySelector("section.roles-filter div.skip-action a");
    
    skipAction.addEventListener('click', (event) => {
        event.preventDefault();
        displayFilterSection(regionsSection);
    });*/

    // binding show all profiles
    //showNoFilter();
}

const initFilteringSubmit = () => {
    const filterButton = document.getElementById("filter-btn");

    filterButton.addEventListener('click', (event) => {
        //event.preventDefault();

        //get role choice if one
        let role = null;
        const roleLiChoice = document.querySelector(".choosen-role");
        if(roleLiChoice !== null){
            role = roleLiChoice.getAttribute("id");
        }

        //get region choice if one
        let region = null;
        const regionPath = document.querySelector(".choosen-region");
        if(regionPath !== null){
            region = regionPath.getAttribute("id");
        }

        //check if remote
        const inRemote = document.querySelector("#inRemote").classList.contains("fa-check-square");

        console.log(role);
        console.log(inRemote);

        const urlListing = `listing/listing.html?role=${role}&region=${region}&remote=${inRemote}`;
        console.log(urlListing);
        window.location.href = urlListing;
    })
}

/**
 * Initialize Landing Page filtering interactivity behaviour 
 */
const initLandingPage = () => {

    initRegionsFilter();
    initFilteringAction();
    initAllProfilesAction();
    initRolesFilter();
    initFilteringFlow();
    initFilteringSubmit();
    initInRemote();

};


initLandingPage();
