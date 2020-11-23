window.onload = function(){

    setTimeout(function(){
        document.body.className="";
    }, 80);
    
    const background = document.getElementById('bg');
    const girls = document.getElementById('girls');
    const chibiMonika = document.getElementById('chibi-monika');
    const chibiSayori = document.getElementById('chibi-sayori');
    const chibiNatsuki = document.getElementById('chibi-natsuki');
    const chibiYuri = document.getElementById('chibi-yuri');
    const logo = document.getElementById('logo');
    const text = document.getElementById('text');
    const contentMain = document.getElementById('main');
    const bounce = document.getElementById('bounce');
    const monikaPoems = document.getElementById('monikaPoems');
    const poems = document.getElementById('poems');



    const girlsText = 'Doki Doki Literature Club! é um jogo eletrônico de visual novel desenvolvida pela Team Salvato. Foi lançado em 22 de setembro de 2017 para Microsoft Windows, macOS, e Linux, e mais tarde em 6 de outubro para a Steam. A história segue um aluno do ensino médio que se junta ao Clube de Literatura da escola e interage com quatro garotas. O jogo apresenta uma história principalmente linear, com algumas cenas e finais alternativos dependendo das escolhas que o jogador faz. O jogo começa com você conhecendo Sayori, uma garota que você conhece como uma amiga de longa data';

    const monikaText = 'Monika é notada pelos outros personagens como inteligente, confiante e atlética. Ela não é tão falante quanto as  outras garotas, mas isso está implícito para não ser uma escolha. Monika também é conhecida por ser popular, o que faz com que o protagonista tenha uma admiração por ela. Ela sempre tem uma expressão calma e gentil e é retratada como madura e trabalhadora. <br/><br/> Monika já fazia parte do Debate Club, mas foi embora devido a toda a política e drama internos, destacando o desejo de ordem, liberdade de tópicos e simpatia. O Clube de Literatura, que ela fundou após deixar o Clube de Debate, é muito importante para ela. Ela aspira a ser um lugar para mostrar e aumentar a paixão de todos pela literatura.';

    const natsukiText = 'Natsuki parece ser uma garota impetuosa, brusca, irritada e aparentemente arrogante no início, com um interior fofo e suave como resultado da insegurança, convencendo Monika para classificá-la como a personificação de uma tsundere. Enquanto ela é impulsiva e pode falar sem pensar, Natsuki realmente se importa com seus amigos e, mesmo quando ela tem óbvias questões de raiva, não gosta de brigas ou discussões com as pessoas. <br/> <br/> Ao longo do jogo, é mostrado que ela se preocupa com Yuri e, em uma ocasião, dá ao protagonista uma nota pedindo que ele ajude Yuri, temendo que se ela se manifestasse, isso causaria mais discussões. Natsuki é muito teimosa e tem dificuldade em expressar como se sente e o que quer. Quando desafiada repetidamente, ela geralmente se torna estranha, depois agressiva e simplesmente explode em lágrimas.';

    const sayoriText = 'Sayori é retratado como uma garota Genki, expressando uma disposição faladora e alegre. Ela é muito desajeitada, conhecida por encontrar maneiras de se machucar acidentalmente ou largar as coisas. Monika observando que seus sentimentos são necessários para manter uma atmosfera relaxante no Clube da Literatura. <br/> <br/>Monika observa que, embora possa parecer uma boa líder, Sayori geralmente é melhor quando se trata de lidar com pessoas, principalmente em mediações. Sayori faz o possível para ajudar todos a serem felizes e não gosta da atenção direcionada ao seu bem-estar, porque se sente indigna de tudo o que os outros têm a oferecer. Sayori também é apresentado como o melhor amigo do personagem principal.';

    const yuriText = 'Yuri é retratada durante a maior parte do jogo como sendo tímida, generosa, educada, muito inteligente, madura, eloquente e apaixonada por tópicos pelos quais se interessa, embora ela também seja muito insegura. Sua fachada de passividade e tontura ocasionalmente quebra, no entanto, como Yuri discute apaixonadamente e agressivamente com Natsuki sobre suas opiniões divergentes sobre estilos de escrita. <br/> <br/> Yuri tem um profundo desejo de ser apreciada pelos outros e tem medo de falar o que pensa sobre assuntos, pois acredita que isso fará com que ela pareça improvável. Devido à sua inaptidão social, ela pode ser inocentemente insensível, mas uma vez que percebe o que disse ser considerado rude, quase imediatamente pede desculpas, repetidamente dizendo que não quis dizer isso. Como afirma o protagonista, Yuri gosta de pensar antes de dizer algo.';


    //

    girls.addEventListener('mouseenter', function(){
        girls.style.animationName='slideToRight';
        girls.style.animationDuration='1s';
        girls.style.animationFillMode='backwards';

        setTimeout(function(){
            girls.style.animationDuration='0';
        }, 1200);
    });
    
    girls.addEventListener('animationend', function(){
        text.style.display='inline-block';
        girls.style.marginLeft='0'
        text.style.animationName='fadeIn';
        text.style.animationDuration='2.5s';
        text.style.animationFillMode='forwads';
        text.innerHTML = girlsText;
    });

    logo.addEventListener('click', function(){
        contentMain.style.display='inline-block';
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/newback.png)';


        setTimeout(function(){
            text.style.marginRight='0';
            text.innerHTML = girlsText;
            contentMain.style.animationName='fadeIn';
            document.getElementById('girls').src = "static/images/girls.png";
        }, 600)
    });

    chibiMonika.addEventListener('click', function(){
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/monikabg.png)';

        setTimeout(function(){
            contentMain.style.display='inline-block';
            text.style.marginRight='80px';
            text.innerHTML = monikaText;
            contentMain.style.animationName='fadeIn';
            document.getElementById('girls').src = "static/images/monikamain.png";
        }, 600)
    });

    chibiSayori.addEventListener('click', function(){
        contentMain.style.display='inline-block';
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/sayoribg.png)';


        setTimeout(function(){
            text.style.marginRight='80px';
            text.innerHTML = sayoriText;
            contentMain.style.animationName='fadeIn';
            document.getElementById('girls').src = "static/images/sayorimain.png";
        }, 600)
    });

    chibiNatsuki.addEventListener('click', function(){
        contentMain.style.display='inline-block';
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/natsukibg.png)';


        setTimeout(function(){
            text.style.marginRight='80px';
            text.innerHTML = natsukiText;
            contentMain.style.animationName='fadeIn';
            document.getElementById('girls').src = "static/images/natsukimain.png";
        }, 600)
    });

    chibiYuri.addEventListener('click', function(){
        contentMain.style.display='inline-block';
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/yuribg.png)';


        setTimeout(function(){
            text.style.marginRight='80px';
            text.innerHTML = yuriText;
            contentMain.style.animationName='fadeIn';
            document.getElementById('girls').src = "static/images/yurimain.png";
        }, 600)
    });
    
    girls.addEventListener('click', function(){
        bounce.style.animationName='bounce';
        bounce.style.animationDuration='.3s';
        bounce.style.animationFillMode='forwards';
        
        setTimeout(function(){
            bounce.style.animationName='';
        }, 1050);
    });

    monikaPoems.addEventListener('click', function(){
        //Code;
    });

    monikaPoems.addEventListener('click', function(){
        poems.scrollIntoView(); //Poems Scrolling;
    });

    setTimeout(function(){
        background.style.filter='invert(100%)';
    }, 10000);
    setTimeout(function(){
        background.style.filter='invert(0%)';
    }, 10150);

};
