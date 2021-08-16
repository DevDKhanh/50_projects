(function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    let anim = ['./assets/images/Pikachu-1.png','./assets/images/Pikachu-2.png','./assets/images/Pikachu-3.png','./assets/images/Pikachu-4.png'];

    const player = $('#pet');
    player.src = anim[0];
    Object.assign(player.style, {
        width: 500+'px',
        height: 350+'px',
    })
    let i = 0;
    setInterval(()=>{
        i++;
        i>=anim.length ? i=0 :'';
        player.src = anim[i];
    }, 1000/8);
})()