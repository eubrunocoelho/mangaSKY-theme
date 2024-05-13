$(document).ready(
    () => {
        const searchButton = $('#search-button');
        const searchWrapper = $('#search-wrapper');

        searchWrapper.height(0);

        searchButton.click(
            () => {
                searchWrapper.toggleClass('visible');
            }
        );

        const genresPreloader = $('#genres-pre-loader');
        const genresButton = $('#genres-button');
        const genresItems = $('#genres-wrapper li');
        const genresItemsLength = genresItems.length;

        setTimeout(
            () => {
                genresPreloader.hide();
                genresItems.slice(0, 18).show();
                genresButton.show();
            }, 1600
        );

        genresButton.click(
            () => {
                genresItems.slice(0, genresItemsLength).show();
                genresButton.hide();
            }
        );

        const sidebarButton = $('#sidebar-button');
        const windowOverlay = $('#window-overlay');

        sidebarButton.click(
            () => {
                windowOverlay.addClass('visible');
            }
        );

        $(document).click(
            (event) => {
                if (windowOverlay.is(event.target)) {
                    windowOverlay.removeClass('visible');
                }
            }
        )
    }
);