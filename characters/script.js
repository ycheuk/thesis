document.addEventListener("DOMContentLoaded", function () {
    showContent('overview');
});

function showContent(section) {
    const contentContainer = document.getElementById('contentContainer');
    const overviewContent = document.getElementById('overview-content');
    const interviewsContent = document.getElementById('interviews-content');
    const gingerbreadContent = document.getElementById('gingerbread-content');
    const subjectcContent = document.getElementById('subjectc-content');
    const talentsContent = document.getElementById('talents-content');
    const teamsContent = document.getElementById('teams-content');
    const starterContent = document.getElementById('starter-content');

    if (section === 'overview') {
        overviewContent.style.display = 'flex';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'interviews') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'block';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'gingerbread') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'flex';
        subjectcContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'subjectc') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'flex';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'teams') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'flex';
        starterContent.style.display = 'none';
    } else if (section === 'talents') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        talentsContent.style.display = 'none';
        talentsContent.style.display = 'block';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'starter') {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        talentsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'flex';
    } else {
        overviewContent.style.display = 'none';
        interviewsContent.style.display = 'none';
        gingerbreadContent.style.display = 'none';
        subjectcContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';

        let sectionContent = '';
        switch(section) {
            case 'talents':
                sectionContent = 'Your Talents Content Here...';
                break;
            default:
                sectionContent = 'Default Content';
        }
        contentContainer.innerHTML = sectionContent;
    }
}

function changeTheme(theme) {
    document.getElementById("theme-stylesheet").setAttribute("href", theme);
}
