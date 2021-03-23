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
    regionsSection.style.display = "none";

    // binding region filter display
    const skipAction = document.querySelector("section.roles-filter div.skip-action a");
    
    skipAction.addEventListener('click', (event) => {
        event.preventDefault();
        displayFilterSection(regionsSection);
    });

    // binding show all profiles
    //showNoFilter();
}

/**
 * Initialize Landing Page interactivity behaviour 
 */
const initLandingPage = () => {
    initRolesFilter();
    initFilteringFlow();
    initInRemote();
};


initLandingPage();