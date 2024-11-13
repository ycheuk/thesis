document.addEventListener("DOMContentLoaded", function () {
    showContent('overview');
});

function showContent(section) {
    const contentContainer = document.getElementById('contentContainer');
    const overviewContent = document.getElementById('overview-content');
    const weaponsContent = document.getElementById('weapons-content');
    const artifactsContent = document.getElementById('artifacts-content');
    const constellationsContent = document.getElementById('constellations-content');
    const talentsContent = document.getElementById('talents-content');
    const teamsContent = document.getElementById('teams-content');
    const starterContent = document.getElementById('starter-content');

    if (section === 'overview') {
        overviewContent.style.display = 'flex';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'weapons') {
        overviewContent.style.display = 'none';
        weaponsContent.style.display = 'block';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'artifacts') {
        overviewContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'flex';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'constellations') {
        overviewContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'flex';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'teams') {
        overviewContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'flex';
        starterContent.style.display = 'none';
    } else if (section === 'talents') {
        overviewContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        talentsContent.style.display = 'block';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'starter') {
        overviewContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'flex';
    } else {
        overviewContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
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
