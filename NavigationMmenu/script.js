import { buildRefs } from '@/assets/scripts/helpers.js'
import '/node_modules/mmenu-js/dist/mmenu.js'
import '/node_modules/mmenu-js/dist/mmenu.css'

export default function (el) {
  const refs = buildRefs(el)

  init()

  return () => {
    // on onmount
  }

  function init() {
    new Mmenu(
      document.querySelector("#mmenu"),
      {
        "offCanvas": {
          "position": "right"
        }
      },
    );
    
  }
}
