document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filters-item");
    const characterList = document.querySelectorAll(".character-portrait");

    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            const filterType = filter.getAttribute("filter");
            const isActive = filter.classList.contains("active");

            if (isActive) {
                filter.classList.remove("active");
            } else {
                filter.classList.add("active");
            }

            applyFilters();
        });
    });

    function applyFilters() {
        const activeFilters = Array.from(document.querySelectorAll(".filters-item.active")).map(filter => filter.getAttribute("filter"));

        characterList.forEach((character) => {
            const characterElement = character.querySelector(".element-type");
            const characterWeapon = characterElement.classList[1]; // Assumes the weapon class is the second class
            const characterClasses = character.querySelector(".character-icon").classList;

            let isMatching = activeFilters.every(filterType =>
                characterElement.classList.contains(filterType.toLowerCase()) ||
                characterWeapon === filterType.toLowerCase() ||
                Array.from(characterClasses).some(className => className.startsWith(`rarity-${filterType}`))
            );

            character.style.display = isMatching ? "block" : "none";
        });
    }
});
