OpenNav = () => {
    $("#navbar").slideToggle('slow');
}
document.getElementById('open_btn').addEventListener("click", function() {
    this.classList.toggle("is-active");
}, false);