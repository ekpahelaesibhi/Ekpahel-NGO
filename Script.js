let hindi = false;

function switchLanguage() {
  hindi = !hindi;
  document.querySelectorAll('[id$="-en"]').forEach(el => el.style.display = hindi ? "none" : "block");
  document.querySelectorAll('[id$="-hi"]').forEach(el => el.style.display = hindi ? "block" : "none");
  document.getElementById("lang-btn").innerText = hindi ? "English" : "हिन्दी";
}
