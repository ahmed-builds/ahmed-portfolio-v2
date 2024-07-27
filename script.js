$(document).ready(function() {
    // Initially hide all content sections except the first one
    $('.page_content').not('#home').hide();
  
    // Add click event handlers to navigation links
    $('nav a').click(function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Remove active class from all anchor tags
      $('nav a').removeClass('active');
  
      // Get the ID of the clicked link
      var targetId = $(this).attr('id');
  
      // Hide all content sections
      $('.page_content').hide();
  
      // Show the corresponding content section
      $('#' + targetId).toggle();
      $(this).addClass('active');
    });
    $('.nav_toggle').click(function(e){
        e.preventDefault();
        $('.vertical_nav').toggleClass('open_menu');

        $('body').toggleClass('open_nav');
        
        if($('.nav_toggle i').hasClass('fa-bars')){
            $('.nav_toggle i').addClass('fa-xmark');
            $('.nav_toggle i').removeClass('fa-bars');
        } else {
            $('.nav_toggle i').removeClass('fa-xmark');
            $('.nav_toggle i').addClass('fa-bars');
        }
        $('.nav_link').click(function(a) {
            a.preventDefault();
            $('nav').removeClass('open_menu');
            if($('body').hasClass('open_nav')){
                $('body').removeClass('open_nav');
            }
            $('.nav_toggle i').removeClass('fa-xmark');
            $('.nav_toggle i').addClass('fa-bars');
        });
    });
});

const HtmlProgressBar = document.getElementById('htmlProgress');
const progressValue = HtmlProgressBar.value;
const maxProgress = HtmlProgressBar.max;
const animationDuration = (1 - (progressValue / maxProgress)) * 30; // Adjust the base duration as needed
HtmlProgressBar.style.animation = `animateProgressBar ${animationDuration}s linear forwards`;
const html5ProgressValueElement = document.getElementById('html5ProgressValue');
html5ProgressValueElement.textContent = `${progressValue}%`;

const CssProgressBar = document.getElementById('cssProgress');
const CssProgressValue = CssProgressBar.value;
const CssMaxProgress = CssProgressBar.max;
const cssAnimationDuration = (1 - (CssProgressValue / CssMaxProgress)) * 3; // Adjust the base duration as needed
CssProgressBar.style.animation = `animateProgressBar ${cssAnimationDuration}s linear forwards`;
const css3ProgressValueElement = document.getElementById('css3ProgressValue');
css3ProgressValueElement.textContent = `${CssProgressValue}%`;

const jsProgressBar = document.getElementById('jsProgress');
const jsProgressValue = jsProgressBar.value;
const jsMaxProgress = jsProgressBar.max;
const jsAnimationDuration = (1 - (jsProgressValue / jsMaxProgress)) * 1; // Adjust the base duration as needed
jsProgressBar.style.animation = `animateProgressBar ${jsAnimationDuration}s linear forwards`;
const jsProgressValueElement = document.getElementById('jsProgressValue');
jsProgressValueElement.textContent = `${jsProgressValue}%`;

const jqProgressBar = document.getElementById('jqueryProgress');
const jqProgressValue = jqProgressBar.value;
const jqMaxProgress = jqProgressBar.max;
const jqAnimationDuration = (1 - (jqProgressValue / jqMaxProgress)) * 1; // Adjust the base duration as needed
jqProgressBar.style.animation = `animateProgressBar ${jqAnimationDuration}s linear forwards`;
const jqProgressValueElement = document.getElementById('jqyProgressValue');
jqProgressValueElement.textContent = `${jqProgressValue}%`;

const bsProgressBar = document.getElementById('bootstrapProgress');
const bSprogressValue = bsProgressBar.value;
const bSmaxProgress = bsProgressBar.max;
const bSanimationDuration = (1 - (bSprogressValue / bSmaxProgress)) * 30; // Adjust the base duration as needed
bsProgressBar.style.animation = `animateProgressBar ${bSanimationDuration}s linear forwards`;
const bspProgressValueElement = document.getElementById('bspProgressValue');
bspProgressValueElement.textContent = `${bSprogressValue}%`;

const wpProgressBar = document.getElementById('wordpressProgress');
const wpProgressValue = jqProgressBar.value;
const wpMaxProgress = jqProgressBar.max;
const wpAnimationDuration = (1 - (wpProgressValue / wpMaxProgress)) * 1; // Adjust the base duration as needed
wpProgressBar.style.animation = `animateProgressBar ${wpAnimationDuration}s linear forwards`;
const wpsProgressValueElement = document.getElementById('wpsProgressValue');
wpsProgressValueElement.textContent = `${wpProgressValue}%`;


const phpProgressBar = document.getElementById('phpProgress');
const phpProgressValue = phpProgressBar.value;
const phpMaxProgress = phpProgressBar.max;
const phpAnimationDuration = (1 - (phpProgressValue / phpMaxProgress)) * 1; // Adjust the base duration as needed
phpProgressBar.style.animation = `animateProgressBar ${phpAnimationDuration}s linear forwards`;
const phpProgressValueElement = document.getElementById('phpProgressValue');
phpProgressValueElement.textContent = `${phpProgressValue}%`;


const ciProgressBar = document.getElementById('ciProgress');
const ciProgressValue = ciProgressBar.value;
const ciMaxProgress = ciProgressBar.max;
const ciAnimationDuration = (1 - (ciProgressValue / ciMaxProgress)) * 1; // Adjust the base duration as needed
ciProgressBar.style.animation = `animateProgressBar ${ciAnimationDuration}s linear forwards`;
const ciProgressValueElement = document.getElementById('ciProgressValue');
ciProgressValueElement.textContent = `${ciProgressValue}%`;

const dbProgressBar = document.getElementById('mysqlProgress');
const dbProgressValue = dbProgressBar.value;
const dbMaxProgress = dbProgressBar.max;
const dbAnimationDuration = (1 - (dbProgressValue / dbMaxProgress)) * 1; // Adjust the base duration as needed
dbProgressBar.style.animation = `animateProgressBar ${dbAnimationDuration}s linear forwards`;
const dbProgressValueElement = document.getElementById('mysqlProgressValue');
dbProgressValueElement.textContent = `${dbProgressValue}%`;