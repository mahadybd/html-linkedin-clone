
let profileMenu = document.querySelector('#profileMenu');
let sideBarActivity = document.querySelector('#sideBarActivity');
let showMoreLink = document.querySelector('#showMoreLink');

let hideMe = document.querySelectorAll('.hideMe');

function toggleMenu(){
    profileMenu.classList.toggle('open-menu');
}

function toggleActivity(){
    sideBarActivity.classList.toggle('open-activity');

    hideMe.forEach(function(div) {
        div.classList.toggle('hideMe');
    });
    
    if(sideBarActivity.classList.contains("open-activity")){
        showMoreLink.innerHTML = "Show less <b>-</b>";
    }
    else{
        showMoreLink.innerHTML = "Show more <b>+</b>";
    }
}

window.onload = function() {
    let content = document.getElementById('content');
    let words = content.textContent.split(' ');
    let truncatedContent = words.slice(0, 50).join(' ');
    content.textContent = truncatedContent + '...';
  
    let seeBtn = document.createElement('button');
    seeBtn.textContent = 'See more';
    seeBtn.id = 'seeMoreBtn';
  
    contentContainer.appendChild(seeBtn);
  
    let isExpanded = false;
    seeBtn.onclick = function() {
      if (isExpanded) {
        content.textContent = truncatedContent + '...';
        seeBtn.textContent = 'See more';
      } else {
        content.textContent = words.join(' ');
        seeBtn.textContent = 'See less';
      }
      isExpanded = !isExpanded;
    };
  };
  
  
  
    