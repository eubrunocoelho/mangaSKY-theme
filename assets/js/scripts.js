$(document).ready(
    () => {
        let searchButton = $('#search-button');
        let searchWrapper = $('#search-wrapper');

        searchWrapper.height(0);

        searchButton.click(
            () => {
                searchWrapper.toggleClass('closed');

                searchWrapper.height(
                    searchWrapper.hasClass('closed')
                        ? 0 : '90px'
                );
            }
        );

        let genresPreloader = $('#genres-pre-loader');
        let genresButton = $('#genres-button');
        let genresItems = $('#genres-wrapper li');
        let genresItemsLength = genresItems.length;

        setTimeout(
            () => {
                genresPreloader.hide();
                genresItems.slice(0, 18).show();
            }, 1600
        );

        genresButton.click(
            () => {
                genresItems.slice(0, genresItemsLength).show();
                genresButton.hide();
            }
        )
    }
);