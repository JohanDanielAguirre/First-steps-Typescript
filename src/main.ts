import './style.css'
import {final_age, height, isvalid, message, name} from './type_basics/type_basics.ts'
import {estudentsids} from "./objects/objects.ts";
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>GUTENTAG MY NAME IS ${name} AND MY HEIGHT IS ${height} AND MY STATUS IS ${isvalid} AND MINE EDAD ES ${final_age}
    ${message}
    </h1>
    <div class="card">
    </div>
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
 <h1>${estudentsids}</h1>
</div>
`