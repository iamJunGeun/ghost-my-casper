/* global instantsearch */

// import { hitTemplate } from "algolia-helper";
function hitTemplate(hit) {
    return `
      <div class="hit">
        <div class="hit-content">
          <a class="hit-name" href="${hit.url}">${hit.title}</a>
          <p class="hit-preview">${hit.preview}</p>
        </div>
      </div>
    `;
  }

const search = instantsearch({
  appId: "07AC6NKDJ8",
  apiKey: "4447489a4349e9a350c1ac11162a3b6f",
  indexName: "Ghost blog",
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
