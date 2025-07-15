function downloadResume() {
  alert("Your download will begin shortly...");
  
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Dhanush_Resume.pdf";
  link.click();
}
