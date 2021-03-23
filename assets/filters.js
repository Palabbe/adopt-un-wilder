
// Toggle check square onclick event
const inRemote = document.getElementById("inRemote");

inRemote.addEventListener('click', function() {

    console.log('onclick');

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