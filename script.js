document.addEventListener('DOMContentLoaded', function() {
    // ฟังก์ชันสำหรับคัดลอกลิงก์
    function copyToClipboard() {
        const link = "minecraft://?addExternalServer=KnightMareAcademy|pm.mc4.in:50216";
        if (navigator.clipboard) {
            navigator.clipboard.writeText(link).then(() => {
                alert("ลิงก์เซิฟเวอร์ถูกคัดลอกแล้ว!");
            }).catch(err => {
                console.error("เกิดข้อผิดพลาดในการคัดลอกลิงก์: ", err);
            });
        } else {
            console.warn("เบราว์เซอร์นี้ไม่สนับสนุนการคัดลอกไปยังคลิปบอร์ด");
        }
    }

    // ฟังก์ชันสำหรับจัดการเมนูบนมือถือ
    const mobileMenu = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.navbar-menu');
    const logo = document.querySelector('.navbar-logo');

    if (mobileMenu && navMenu && logo) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            logo.classList.toggle('smooth-transition');
        });
    } else {
        console.error("ไม่สามารถค้นหาส่วนประกอบที่จำเป็นบางอย่าง");
    }

    // ฟังก์ชันสำหรับเข้าสู่เซิฟเวอร์ด้วยรหัสผ่าน
    function enterServer() {
        const password = prompt("กรุณาใส่รหัสผ่านเพื่อเข้าเซิฟเวอร์:");
        const correctPassword = "141024"; // ค่ารหัสผ่านจริงควรเข้ารหัส

        if (password === correctPassword) {
            window.location.href = "minecraft://?addExternalServer=KnightMareAcademy|pm.mc4.in:50216";
        } else {
            alert("รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง.");
        }
    }

    // เพิ่มการเรียกใช้ฟังก์ชันให้ปุ่มหรือองค์ประกอบที่เกี่ยวข้อง
    const copyButton = document.getElementById('copy-link');
    if (copyButton) {
        copyButton.addEventListener('click', copyToClipboard);
    }

    const enterServerButton = document.getElementById('enter-server');
    if (enterServerButton) {
        enterServerButton.addEventListener('click', enterServer);
    }
});
