function setLanguage(lang) {
    document.querySelectorAll('[data-lang-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
  }
  
  function changeLanguage() {
    const selectedLanguage = document.getElementById('language-dropdown').value;
    setLanguage(selectedLanguage);
  }
  
  // Set default language to English
  setLanguage('en');
  $(window).scroll(function () {
    $(this).scrollTop() > 50 ? $(".topmenu").addClass("sticky_header") : $(".topmenu").removeClass("sticky_header");
  });
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById('back-to-top-btn');

    // Show or hide the button based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };

    // Scroll to the top when the button is clicked
    button.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});

const files = ["about", "autocad", "digital marketing", "web design", "graphics design"];

function showSuggestions() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    
    // Clear previous suggestions
    suggestions.innerHTML = '';

    if (input) {
        const filteredFiles = files.filter(file => file.startsWith(input));
        
        if (filteredFiles.length > 0) {
            suggestions.style.display = 'block';
            filteredFiles.forEach(file => {
                const suggestionItem = document.createElement('li');
                suggestionItem.textContent = file;
                suggestionItem.onclick = () => {
                    document.getElementById('search-bar').value = file;
                    suggestions.style.display = 'none';
                };
                suggestions.appendChild(suggestionItem);
            });
        } else {
            suggestions.style.display = 'none';
        }
    } else {
        suggestions.style.display = 'none';
    }
}

function search() {
    const input = document.getElementById('search-bar').value.toLowerCase();
    if (files.includes(input)) {
        window.location.href = `${input}.html`;
    } else {
        alert('File not found');
    }
}
const allIndicator = document.querySelectorAll(".indicator li");
const allContent = document.querySelectorAll(".content li");

allIndicator.forEach(item=>{
    item.addEventListener("click", function(){
        const content = document.querySelector(this.dataset.target);
        allIndicator.forEach(i=> {
            i.classList.remove("active");
        } );
        allContent.forEach(i=> {
            i.classList.remove("active");
        } );
        content.classList.add("active");
        this.classList.add("active");
    })
})