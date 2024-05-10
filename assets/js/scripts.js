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
    }
);