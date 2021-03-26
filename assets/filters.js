const hiddenSections = [".roles-filter", ".regions-filter", "#submit-filtering"];

/**
 * Toggle the display of previously hidden section to be visible, or hidde it if forced as parameter.
 * @param {*} selector a CSS selector
 * @param {*} display a display value to apply to the section
 */
const toggleDisplaySectionBySelector = (selector, display = "block") => {
    const section = document.querySelector(selector)
    section.style.display = display;
    //TODO: adding animation effect for the display
}

/**
 * Initialize Event Listener first step of filtering
 */
const initFilteringAction = () => {

    const actionButton = document.getElementById("filtering");

    actionButton.addEventListener('click', (event) => {

        for(let i = 0; i < hiddenSections.length; i++){
            toggleDisplaySectionBySelector(hiddenSections[i]);
        }
        
        
        const urlListing = `#roles-filter`;
        window.location.href = urlListing;

    });
}

/**
 * Initialize Event Listener for skipping to all profiles action button
 */
const initAllProfilesAction = () => {

    const actionButton = document.getElementById("allProfiles");

    actionButton.addEventListener('click', () => {

        const urlListing = `listing/listing.html`;
        window.location.href = urlListing;

    });
}

/**
 * Initialize Event Listener for roles filtering behaviour
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

/**
 * Initialize Event Listener for regions map filtering behaviour
 */
const initRegionsMapFilter = () => {

    const regionsMap = document.getElementById("map");
    const regionsMapPaths = regionsMap.querySelectorAll(".region");

    regionsMapPaths.forEach((regionPath) => {

        regionPath.addEventListener('click', function(event) {
            event.preventDefault();

            regionsMap.classList.add("active");
            const regionsSelect = document.getElementById("regions-select");
            if(regionsSelect.classList.contains("active")){
                regionsSelect.classList.remove("active");
            }


            if(this.classList.contains("choosen-region")){
                this.classList.remove("choosen-region");

            } else {
                const oldRegion = document.querySelector(".regions-map").querySelector(".choosen-region");

                if(oldRegion !== null){

                    oldRegion.classList.remove("choosen-region");
                }
                this.classList.add("choosen-region");
            }

        })

    })

}

/**
 * Initialize Event Listener for regions select filtering behaviour
 */
 const initRegionsSelectFilter = () => {
    const regionsSelect = document.getElementById("regions-select");

    const events = ["click", "change"];

    events.forEach((eventName) => {
        regionsSelect.addEventListener(eventName, () => {
            regionsSelect.classList.add("active");

            const regionsMap = document.getElementById("map");
            if(regionsMap.classList.contains("active")){
                regionsMap.classList.remove("active");
            }
        })
    });
 }

/**
 * Initialize Event Listener for the checkbox icons "simulated" behaviour
 */
const initInRemote = () => {
    
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

/**
 * Setup the filtering section display
 */
const initFilteringFlow = () => {

    for(let i = 0; i < hiddenSections.length; i++){
        toggleDisplaySectionBySelector(hiddenSections[i], "none");
    }

}

/**
 * Initialize Event Listener for Filtering Submission
 */
const initFilteringSubmit = () => {
    const filterButton = document.getElementById("filter-btn");

    filterButton.addEventListener('click', (event) => {
        //event.preventDefault();

        let role = null;
        const roleLiChoice = document.querySelector(".choosen-role");
        if(roleLiChoice !== null){
            role = roleLiChoice.getAttribute("id");
        }


        let region = null;

        const regionsMap = document.getElementById("map");
        const regionsSelect = document.getElementById("regions-select");

        if(regionsMap.classList.contains("active")){
            const regionPath = document.querySelector(".choosen-region");

            if(regionPath !== null){
                region = regionPath.getAttribute("id");
            }
        } else if(regionsSelect.classList.contains("active")){
            region = regionsSelect.selectedOptions[0].value;
            region = region !== "Sélectionnez une région" ? region : null;
        }
        

       

        const inRemote = document.querySelector("#inRemote").classList.contains("fa-check-square");

        const urlListing = `listing/listing.html?role=${role}&region=${region}&remote=${inRemote}`;
        window.location.href = urlListing;
    })
}

/**
 * Initialize Landing Page filtering main interactivity workflow behaviour 
 */
const initLandingPage = () => {

    initRegionsMapFilter();
    initRegionsSelectFilter();
    initFilteringAction();
    initAllProfilesAction();
    initRolesFilter();
    initFilteringFlow();
    initFilteringSubmit();
    initInRemote();

};


initLandingPage();
