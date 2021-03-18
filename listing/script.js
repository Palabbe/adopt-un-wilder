
const profil = document.querySelectorAll(".profil");


for (let i = 0; i < profil.length; i++)
{
    if (i % 2 ==0)
    profil[i].appendChild(profil[i].lastElementChild.previousElementSibling)
}
