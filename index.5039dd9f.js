var darkMode=localStorage.getItem("darkMode"),darkModeToggle=document.querySelector(".Darkbutton"),enableDarkMode=function(){document.body.classList.add("darkmode"),localStorage.setItem("darkMode","enabled")},disableDarkMode=function(){document.body.classList.remove("darkmode"),localStorage.setItem("darkMode","disabled")};"enabled"===darkMode&&enableDarkMode(),darkModeToggle.addEventListener("click",(function(){"enabled"!==(darkMode=localStorage.getItem("darkMode"))?enableDarkMode():disableDarkMode()}));
//# sourceMappingURL=index.5039dd9f.js.map