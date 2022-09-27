function resetTabs(){
    const tabsContent = document.querySelectorAll('.tab-container');
    const tabs = document.querySelectorAll('.tab-links');
    for (content of tabsContent){
        content.style.display = 'none';}
    for (tab of tabs){
        tab.style.backgroundColor = '#242429';
    }
};

const labs = document.querySelector('#labs');
labs.addEventListener('click', ()=>{ 

    resetTabs();

    document.querySelector('#labs-content').style.display = 'flex';
    labs.style.backgroundColor = '#131315';
});

const projects = document.querySelector('#projects');
projects.addEventListener('click',()=>{

    resetTabs();

    document.querySelector('#projects-content').style.display = 'flex';
    projects.style.backgroundColor = '#131315';
});