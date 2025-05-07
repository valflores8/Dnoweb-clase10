const filas = document.querySelector("tbody");
const texto = document.querySelector("#promedio");
var total = 0;
function carita(nota) {
    var emoji;
    if (nota > 5.9) {
        emoji = "😃";
    } else if (nota == 5.9) {
        emoji = "😐";
    } else if (nota <= 4) {
        emoji = "😭";
    } else {
        emoji = "🙁";
    }
    return emoji;
}
// if (nota > 5.9) {  return "😃" } else

function barrita(n) {
    let width = n * 40;
    return width;
}
// viewbox {0 0 210 30}

async function notas() {
    let consulta = await fetch("http://raw.githubusercontent.com/valflores8/Dnoweb-clase10/refs/heads/main/notas.json");
    let data = await consulta.json();
    console.log(data);
    data.forEach((d) => {
        filas.innerHTML += `<tr> 
        <td>${carita(d.nota)}</td>
        <td>${d.nombre}</td> 
        <td>
            <svg width="280" height="30"> 
            <rect x="0" y="0" width="280" height="30" fill="var(--ClaroROsa)"> </rect>
            <rect x="0" y="0" width="${barrita(d.nota)}" height="30" fill="var(--OscuroMOra)"> </rect>
                <text x="10%" y="70%" fill="var(--ClaronAM)" font-weight="700">
                ${d.nota.toFixed(1)} </text>
            <line x1="${5.9 * 40}" y1="0" x2="${5.9 * 40}" y2="15" stroke="var(--notaspromedio)" stroke-width="2"></line>
            <line x1="${4 * 40}" y1="0" x2="${4 * 40}" y2="15" stroke="var(--notaminima)" stroke-width="2"></line>
            </svg> 
        </td>
        </tr> `;

        total = total + d.nota;
    });
    texto.innerHTML = (total / 12).toFixed(1);
}

//  <td> ${(d.nota).toFixed(1)} </td>

notas().catch((error) => console.error(error));

//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 20"> <rect x="0" y="0" width="${barrita(d.nota)}" height="20" fill="blue"></rect> <text x="20%" y="60%" fill="black"> ${d.nota} </text> </svg>
