const card = document.querySelector('a');
const mensaje = ['Lentaaa!','echele ganaaas!','mi abuela lo hace mas rapido y ni siquiera es ingeniera!','son solo 23 años, ya parece de la tercera edad con su lentitud','con esa lentitud me ganó en pasar los calculos?','cada vez que fallas el click un perrito hace la morisión :c', 'bueno... perci no :3', 'pudo subir un proyecto en laravel, esto no es nadaaaa','se imagina que al dar click no pase nada?', 'ya no sé que mas pendejadas decir hagale a ver'];
anteriorTop = 0;
anteriorLef = 0;
i = 0;
primera = true;
card.addEventListener("mouseover", muevetePerraPorqueSiNoEllaSeGanaElRegalo);
card.addEventListener("click",clickeado);

function muevetePerraPorqueSiNoEllaSeGanaElRegalo() {
    let nuevoTop = Math.random() * (80-10)+10;
    let nuevoLef = Math.random() * (80-10)+10;
    if (nuevoTop == anteriorTop && (Math.abs(nuevoTop - anteriorTop) < 20 ) || nuevoLef == anteriorLef && (Math.abs(nuevoLef - anteriorLef) < 20)) {
        muevetePerraPorqueSiNoEllaSeGanaElRegalo();
    } else {        
        card.setAttribute('style','top: '+nuevoTop+'vh; left: '+nuevoLef+'vw');
        if (primera) {
            card.innerHTML=`<div class="card">
                                <div class="card-body">
                                    <h3 class="fw-bold">Te la kreiste!!!!!</h3>
                                </div>
                            </div>`;
            primera = false;
        }
        else{
            if (i < mensaje.length) {
                card.innerHTML=`<div class="card">
                                    <div class="card-body">
                                        <h3 class="fw-bold">${mensaje[i]}</h3>
                                    </div>
                                </div>`;
                i++;
            } else {
                card.innerHTML=`<div class="card">
                                    <div class="card-body">
                                        <h3 class="fw-bold">ya no sé que mas pendejadas decir hagale a ver</h3>
                                    </div>
                                </div>`;
            }
            
        }
        
    }
    anteriorTop = nuevoTop;
    anteriorLef = nuevoLef;
}
function clickeado() {
/* 







Aquí no hay nada no siga bajando no sea sapa



















































































































Malditasea no siga bajando que va a perder el tiempo

































































































































Marica yaaaaaaaaaa :c





































































































No sé si siquiera va a ver esto, pero espero que tome buena awita :3



































































































































Ay weno aquí está
*/
alert('Felicidades :3');
/* Esperaba mas? yo también, pero no supe como programarlo, además, todo esto se me ocurrió ayer en la noche jajajajjajaa */
}