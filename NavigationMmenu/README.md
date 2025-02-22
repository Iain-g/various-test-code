# Navigation Mmenu

Using Mmenu-js - installed with npm in node_modules - recommended js for fire does nothing:
```
    document.addEventListener(
        "DOMContentLoaded", () => {
            new Mmenu( "#mmenu", {
                // options
            }, {
                // configuration
                offCanvas: {
                    "position": "right"
                }
            });
        }
    );
```

Current solution (found in their html demo file)
```
new Mmenu(
      document.querySelector("#mmenu"),
      {
        "offCanvas": {
          "position": "right"
        }
      },
    );
```
This works **BUT** causes error in console:
```
FlyntComponent.js:48 Uncaught TypeError: Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only 1 present.
    at FlyntComponent.disconnectedCallback (FlyntComponent.js:48:26)
    at mmenu.js?v=f01cbceb:2:12983
    at Array.forEach (<anonymous>)
    at S.setPage (mmenu.js?v=f01cbceb:2:12968)
    at S.<anonymous> (mmenu.js?v=f01cbceb:2:24717)
    at S.trigger (mmenu.js?v=f01cbceb:2:5388)
    at S._initMenu (mmenu.js?v=f01cbceb:2:6806)
    at new S (mmenu.js?v=f01cbceb:2:3146)
    at init (script.js:15:5)
    at Module.default (script.js:8:3)
```

Pages also have a **fouc** - possibly caused by above error?.
