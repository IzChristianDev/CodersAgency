let toggleButton = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");

toggleButton.addEventListener("click", ()=>{
    toggleButton.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigation.addEventListener("click", ()=>{
    toggleButton.classList.toggle("active");
    navigation.classList.toggle("active");
});