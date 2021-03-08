/* global instantsearch */

// import { hitTemplate } from "algolia-helper";
function hitTemplate(hit) {
    return `
      <div class="hit">
        <div class="hit-content">
            <div class="hit-name">
                <a href="${hit._highlightResult.url.value}">${hit._highlightResult.title.value}</a>
            </div>            
        </div>
      </div>
    `;
  }

const search = instantsearch({
  appId: "SU1SMVVTDL",
  apiKey: "70dd150abf3c3445e210eb1a49b068ec",
  indexName: "ghost",
  searchParameters: {
    attributesToSnippet: ["description:24"],
    snippetEllipsisText: " [...]"
  }
});


search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Keyword",
    autofocus: true
  })
);

search.addWidget(
    instantsearch.widgets.hits({
      container: "#hits",
      templates: {
        empty: "No results.",
        item: function (hit) {
          return hitTemplate(hit);
        }
      }
    })
  );
  


// Uncomment the following widget to add search stats.

/* search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `⚡️ <strong>${hit.nbHits}</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
); */

// Uncomment the following widget to add categories list.

/* search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#categories",
    attributeName: "categories",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    }
  })
); */

// Uncomment the following widget to add brands list.

/* search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#brands",
    attributeName: "brand",
    searchForFacetValues: true,
    autoHideContainer: false,
    templates: {
      header: "Brands"
    }
  })
); */

// Uncomment the following widget to add price range.

/*  search.addWidget(
  instantsearch.widgets.rangeSlider({
    container: "#price",
    autoHideContainer: false,
    attributeName: "price",
    templates: {
      header: "Price"
    }
  })
); */

// Uncomment the following widget to add pagination.

/* search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
); */

search.start();
