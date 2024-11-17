function copyToClipboard() {
    const link = "minecraft://?addExternalServer=KnightMareAcademy|pm.mc4.in:50216";
    navigator.clipboard.writeText(link).then(() => {
        alert("ลิงก์เซิฟเวอร์ถูกคัดลอกแล้ว!");
    });
}
// script.js
const mobileMenu = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
