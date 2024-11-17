function copyToClipboard() {
    const link = "minecraft://?addExternalServer=KnightMareAcademy|pm.mc4.in:50216";
    navigator.clipboard.writeText(link).then(() => {
        alert("ลิงก์เซิฟเวอร์ถูกคัดลอกแล้ว!");
    });
}
