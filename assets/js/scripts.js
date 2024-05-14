$(document).ready(
    () => {
        /*===== TOP SEARCH =====*/
        const openSearch = $('#search-open');
        const search = $('#search-wrapper');

        search.height(0);

        openSearch.click(
            () => {
                search.toggleClass('visible');
            }
        );

        /*===== GENRES LIST =====*/
        const genresPreloader = $('#genres-pre-loader');
        const genresShowMore = $('#genres-show-more');
        const genresItems = $('#genres-wrapper li');
        const genresItemsLength = genresItems.length;

        setTimeout(
            () => {
                genresPreloader.hide();
                genresItems.slice(0, 18).show();
                genresShowMore.show();
            }, 1600
        );

        genresShowMore.click(
            () => {
                genresItems.slice(0, genresItemsLength).show();
                genresShowMore.hide();
            }
        );

        /*===== SIDEBAR =====*/
        const openSidebar = $('#sidebar-open');
        const closeSidebar = $('#sidebar-close');
        const sidebar = $('#sidebar-wrapper');
        const windowOverlay = $('#window-overlay');

        openSidebar.click(
            () => {
                windowOverlay.addClass('visible');
                sidebar.addClass('visible');
            }
        );

        closeSidebar.click(
            () => {
                sidebar.removeClass('visible');
                windowOverlay.removeClass('visible');
            }
        )

        $(document).click(
            (event) => {
                if (windowOverlay.is(event.target)) {
                    sidebar.removeClass('visible');
                    windowOverlay.removeClass('visible');
                }
            }
        );
    }
);