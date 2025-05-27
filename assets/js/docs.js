"use strict";


/* ====== Define JS Constants ====== */
const sidebarToggler = document.getElementById('docs-sidebar-toggler');
const sidebar = document.getElementById('docs-sidebar');
const sidebarLinks = document.querySelectorAll('#docs-sidebar .scrollto');



/* ===== Responsive Sidebar ====== */

window.onload=function() 
{ 
    responsiveSidebar(); 
};

window.onresize=function() 
{ 
    responsiveSidebar(); 
};


function responsiveSidebar() {
    let w = window.innerWidth;
	if(w >= 1200) {
	    // if larger 
	    console.log('larger');
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');
		
	} else {
	    // if smaller
	    console.log('smaller');
	    sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');
	}
};

sidebarToggler.addEventListener('click', () => {
	if (sidebar.classList.contains('sidebar-visible')) {
		console.log('visible');
		sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');
		
	} else {
		console.log('hidden');
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');
	}
});


/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

sidebarLinks.forEach((sidebarLink) => {
	
	sidebarLink.addEventListener('click', (e) => {
		
		e.preventDefault();
		
		var target = sidebarLink.getAttribute("href").replace('#', '');
		
		//console.log(target);
		
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        
        
        //Collapse sidebar after clicking
		if (sidebar.classList.contains('sidebar-visible') && window.innerWidth < 1200){
			
			sidebar.classList.remove('sidebar-visible');
		    sidebar.classList.add('sidebar-hidden');
		} 
		
    });
	
});


/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Initialize Gumshoe
var spy = new Gumshoe('#docs-nav a', {
	offset: 69, //sticky header height
});


/* ====== SimpleLightbox Plugin ======= */
/*  Ref: https://github.com/andreknieriem/simplelightbox */

var lightbox = new SimpleLightbox('.simplelightbox-gallery a', {/* options */});

// === Language Toggle ===
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = 'en';

  if (langToggle) {
    langToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentLang === 'en') {
        document.body.setAttribute('dir', 'rtl');
        document.body.style.textAlign = 'right';
        currentLang = 'ar';

        const titleEl = document.getElementById('hero-title');
        const textEl = document.getElementById('hero-text');
        if (titleEl && textEl) {
          titleEl.textContent = 'التوثيق';
          textEl.textContent = 'كل ما تحتاجه لفهم أنظمة المطعم الذكية وإدارتها بسهولة.';
        }
      } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.style.textAlign = 'left';
        currentLang = 'en';

        const titleEl = document.getElementById('hero-title');
        const textEl = document.getElementById('hero-text');
        if (titleEl && textEl) {
          titleEl.textContent = 'Documentation';
          textEl.textContent = 'User Guide and Knowledge Base for Smart Restaurant Solution.';
        }
      }
    });
  }
  langToggle.addEventListener('click', () => {
  console.log("Language toggle clicked");
});

});








