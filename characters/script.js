document.addEventListener("DOMContentLoaded", function () {
    showContent('profile');
});

function showContent(section) {
    const contentContainer = document.getElementById('contentContainer');
    const profileContent = document.getElementById('profile-content');
    const weaponsContent = document.getElementById('weapons-content');
    const artifactsContent = document.getElementById('artifacts-content');
    const constellationsContent = document.getElementById('constellations-content');
    const talentsContent = document.getElementById('talents-content');
    const teamsContent = document.getElementById('teams-content');
    const starterContent = document.getElementById('starter-content');

    if (section === 'profile') {
        profileContent.style.display = 'flex';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'weapons') {
        profileContent.style.display = 'none';
        weaponsContent.style.display = 'block';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'artifacts') {
        profileContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'flex';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'constellations') {
        profileContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'flex';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'teams') {
        profileContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'flex';
        starterContent.style.display = 'none';
    } else if (section === 'talents') {
        profileContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        talentsContent.style.display = 'block';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'none';
    } else if (section === 'starter') {
        profileContent.style.display = 'none';
        weaponsContent.style.display = 'none';
        artifactsContent.style.display = 'none';
        constellationsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        talentsContent.style.display = 'none';
        teamsContent.style.display = 'none';
        starterContent.style.display = 'flex';
    } else {
        profileContent.style.display = 'none';
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
