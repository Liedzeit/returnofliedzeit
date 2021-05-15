(function (window, document) {
    "use strict";
    console.log("Search Funktion!!!!");
    const search = (e) => {
        console.log("received event " + e.target.value);
     
      const results = window.searchIndex.search(e.target.value, {
        bool: "OR",
        expand: true,
      });
  
  
      const resEl = document.getElementById("searchResults");
      const noResultsEl = document.getElementById("noResultsFound");
 
      //console.log("noResultsEl:  "+ noResultsEl.style.display)
  
      resEl.innerHTML = "";
      if (results) {
        console.log("received results " + JSON.stringify(results));
        try{
            document.getElementById("noResultsFound").style.display = "none";
        }
        catch(e){
            console.log("ERROR: " +e.message);
        }
        results.map((r) => {
          const { id, title, description } = r.doc;
          const el = document.createElement("li");
          resEl.appendChild(el);
  
          const h5 = document.createElement("h5");
          el.appendChild(h5);
  
          const a = document.createElement("a");
          a.setAttribute("href", id);
          a.textContent = title;
          h5.appendChild(a);
  
          const p = document.createElement("p");
          p.textContent = description;
          el.appendChild(p);
        });
      } else {
        noResultsEl.style.display = "block";
      }
    };
  
    fetch("/search-index.json").then((response) =>
      response.json().then((rawIndex) => {
        window.searchIndex = elasticlunr.Index.load(rawIndex);
        document.getElementById("searchField").addEventListener("input", search);
      })
    );
  })(window, document);