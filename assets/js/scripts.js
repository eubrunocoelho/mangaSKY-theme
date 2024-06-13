$(document).ready(
    () => {
        const search = $('#search');
        const searchButton = $('#searchButton');

        search.height(0);

        searchButton.click(
            () => {
                search.toggleClass('visible');
            }
        );

        const genresPreloader = $('#genresPreloader');
        const genresItems = $('.genres__wrapper li');
        const genresItemsLength = genresItems.length;
        const genresButton = $('#genresButton');

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

        const windowOverlay = $('#windowOverlay');
        const sidebar = $('#sidebar');
        const sidebarOpen = $('#sidebarOpen');
        const sidebarClose = $('#sidebarClose');

        sidebarOpen.click(
            () => {
                windowOverlay.addClass('visible');
                sidebar.addClass('visible');
            }
        );

        sidebarClose.click(
            () => {
                sidebar.removeClass('visible');
                windowOverlay.removeClass('visible');
            }
        )

        $(document).click(
            (e) => {
                if (windowOverlay.is(e.target)) {
                    sidebar.removeClass('visible');
                    windowOverlay.removeClass('visible');
                }
            }
        );
    }
);