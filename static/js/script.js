window.onload = function(){

    setTimeout(function(){
        document.body.className = '';
    }, 80);

    const contentMain = document.getElementById('main');
    const background = document.getElementById('bg');

    const logo = document.getElementById('logo');
    const chibiMonika = document.getElementById('chibi-monika');
    const chibiSayori = document.getElementById('chibi-sayori');
    const chibiNatsuki = document.getElementById('chibi-natsuki');
    const chibiYuri = document.getElementById('chibi-yuri');
    
    const girlsText = document.getElementById('girlsText');
    const monikaText = document.getElementById('monikaText');
    const sayoriText = document.getElementById('sayoriText');
    const natsukiText = document.getElementById('natsukiText');
    const yuriText = document.getElementById('yuriText');

    const girls = document.getElementById('girls');
    const monika = document.getElementById('monika');
    const sayori = document.getElementById('sayori');
    const natsuki = document.getElementById('natsuki');
    const yuri = document.getElementById('yuri');

    const sectionGirls = document.getElementById('sectionGirls');
    const sectionMonika = document.getElementById('sectionMonika');
    const sectionSayori = document.getElementById('sectionSayori');
    const sectionNatsuki = document.getElementById('sectionNatsuki');
    const sectionYuri = document.getElementById('sectionYuri');

    const girlsM = document.getElementsByClassName('girlsM');
    const girlsS = document.getElementsByClassName('girlsS');
    const girlsN = document.getElementsByClassName('girlsN');
    const girlsY = document.getElementsByClassName('girlsY');

    const bounce = document.getElementsByClassName('bounce');

    const monikaButton = document.getElementById('monikaButton');
    const sayoriButton = document.getElementById('sayoriButton');
    const natsukiButton = document.getElementById('natsukiButton');
    const yuriButton = document.getElementById('yuriButton');

    const monikaPoems = document.getElementById('monikaPoems');
    const sayoriPoems = document.getElementById('sayoriPoems');
    const natsukiPoems = document.getElementById('natsukiPoems');
    const yuriPoems = document.getElementById('yuriPoems');


    var textGirls = 'Doki Doki Literature Club! é um jogo eletrônico de visual novel desenvolvida pela Team Salvato. Foi lançado em 22 de setembro de 2017 para Microsoft Windows, macOS, e Linux, e mais tarde em 6 de outubro para a Steam. A história segue um aluno do ensino médio que se junta ao Clube de Literatura da escola e interage com quatro garotas. O jogo apresenta uma história principalmente linear, com algumas cenas e finais alternativos dependendo das escolhas que o jogador faz. O jogo começa com você conhecendo Sayori, uma garota que você conhece como uma amiga de longa data';

    var textMonika = 'Monika é notada pelos outros personagens como inteligente, confiante e atlética. Ela não é tão falante quanto as  outras garotas, mas isso está implícito para não ser uma escolha. Monika também é conhecida por ser popular, o que faz com que o protagonista tenha uma admiração por ela. Ela sempre tem uma expressão calma e gentil e é retratada como madura e trabalhadora. <br/><br/> Monika já fazia parte do Debate Club, mas foi embora devido a toda a política e drama internos, destacando o desejo de ordem, liberdade de tópicos e simpatia. O Clube de Literatura, que ela fundou após deixar o Clube de Debate, é muito importante para ela. Ela aspira a ser um lugar para mostrar e aumentar a paixão de todos pela literatura.';

    var textSayori = 'Sayori é retratado como uma garota Genki, expressando uma disposição faladora e alegre. Ela é muito desajeitada, conhecida por encontrar maneiras de se machucar acidentalmente ou largar as coisas. Monika observando que seus sentimentos são necessários para manter uma atmosfera relaxante no Clube da Literatura. <br/> <br/>Monika observa que, embora possa parecer uma boa líder, Sayori geralmente é melhor quando se trata de lidar com pessoas, principalmente em mediações. Sayori faz o possível para ajudar todos a serem felizes e não gosta da atenção direcionada ao seu bem-estar, porque se sente indigna de tudo o que os outros têm a oferecer. Sayori também é apresentado como o melhor amigo do personagem principal.';

    var textNatsuki = 'Natsuki parece ser uma garota impetuosa, brusca, irritada e aparentemente arrogante no início, com um interior fofo e suave como resultado da insegurança, convencendo Monika para classificá-la como a personificação de uma tsundere. Enquanto ela é impulsiva e pode falar sem pensar, Natsuki realmente se importa com seus amigos e, mesmo quando ela tem óbvias questões de raiva, não gosta de brigas ou discussões com as pessoas. <br/> <br/> Ao longo do jogo, é mostrado que ela se preocupa com Yuri e, em uma ocasião, dá ao protagonista uma nota pedindo que ele ajude Yuri, temendo que se ela se manifestasse, isso causaria mais discussões. Natsuki é muito teimosa e tem dificuldade em expressar como se sente e o que quer. Quando desafiada repetidamente, ela geralmente se torna estranha, depois agressiva e simplesmente explode em lágrimas.';

    var textYuri = 'Yuri é retratada durante a maior parte do jogo como sendo tímida, generosa, educada, muito inteligente, madura, eloquente e apaixonada por tópicos pelos quais se interessa, embora ela também seja muito insegura. Sua fachada de passividade e tontura ocasionalmente quebra, no entanto, como Yuri discute apaixonadamente e agressivamente com Natsuki sobre suas opiniões divergentes sobre estilos de escrita. <br/> <br/> Yuri tem um profundo desejo de ser apreciada pelos outros e tem medo de falar o que pensa sobre assuntos, pois acredita que isso fará com que ela pareça improvável. Devido à sua inaptidão social, ela pode ser inocentemente insensível, mas uma vez que percebe o que disse ser considerado rude, quase imediatamente pede desculpas, repetidamente dizendo que não quis dizer isso. Como afirma o protagonista, Yuri gosta de pensar antes de dizer algo.';

    var monikaPoem1 = '<h3>Buraco na parede</h3> <br> <p class="body-poem">Não poderia ter sido eu. <br> Veja, a direção que o concreto se projeta. <br>Um vizinho barulhento? Um namorado irritado? Nunca saberei. Eu não estava em casa. <br>Eu espio por ele procurando uma pista. <br>Não! Não posso ver. Eu cambaleio, cega, como um filme deixado no sol. <br> Mas já é tarde. Minhas retinas. <br>Já queimadas como uma cópia permanente daquela imagem sem sentido. <br>É apenas um pequeno buraco. Não era muito claro <br>Era muito profundo. <br> Estendendo-se eternamente em tudo. <br>Um buraco de infinitas escolhas. <br> Eu estou olhando para fora. <br>E ele, do outro lado, estava olhando para dentro. <br></p>'

    var monikaPoem2 = '<h3>Me salve</h3> <br> <p class="body-poem">As cores, elas não param. <br>Cores brilhantes e lindas. <br>Piscando, expandindo, perfurando <br>Vermelho, verde, azul <br>Uma infinita <br>cacofonia <br>De um incompreensível <br>barulho <br>O barulho, ele não para. <br>Formas de ondas violentas e irritantes <br>Rangendo chiando, perfurando <br>Seno, cosseno, tangente <br>Como brincar com um quadro de giz em um fonógrafo <br>Como brincar com um vinil em uma massa de pizza <br>Um poema <br>sem fim <br>Sem significado <br></p>'

    var monikaPoem3 = '<h3>A dama que sabe tudo</h3> <p class="body-poem"><br> Um velho conto fala de uma dama que vagueia pela Terra. <br>A Dama Que Sabe Tudo. <br>Uma bela dama que encontrou todas as respostas, <br>Todos os significados, <br>Todos os propósitos, <br>E tudo que já foi procurado <br>E aqui estou eu. <br>uma pena. <br>Perdida à deriva no céu, vítima das correntes do vento. <br>Dia após dia, procuro. <br>Procuro com pouca esperança, sabendo que lendas não existem. <br>Mas quando tudo mais falhou comigo, <br>Quando todos os outros se afastaram, <br>A lenda é tudo o que resta a última estrela fraca cintilando no céu crepuscular. <br>Até que um dia, o vento deixa de soprar. <br>Eu caio. <br>E eu caio e caio, e caio ainda mais. <br>Gentil como uma pena. <br>Uma pena seca, inexpressiva. <br>Mas uma mão me pega entre o polegar e o indicador. <br>A mão de uma bela dama. <br>Olho para os olhos dela e não encontro fim para o seu olhar. <br>A dama que Sabe Tudo sabe o que estou pensando. <br>Antes que eu possa falar, ela responde com uma voz vazia. <br>"Eu encontrei todas as respostas, todas as quais equivalem a nada. <br>Não há significado. <br>Não há propósito. <br>E buscamos apenas o impossível. <br>Eu não sou sua lenda. <br>Sua lenda não existe." <br>E com um sopro, ela me lança de volta ao ar e eu sigo uma rajada de vento. <br></p>'

    var sayoriPoem1 = '<h3>Querida Luz do Sol</h3> <br> <p class="body-poem"> A forma que você brilha através das minhas cortinas pela manhã <br> Me faz sentir como se você estivesse com saudade de mim. <br> Beijando minha testa para me ajudar a levantar da cama. <br> Fazendo eu esfregar o sono dos meus olhos. <br> Você esta me pedindo para sair e brincar? <br> Esta confiando em mim para desejar que um dia chuvoso não venha? <br> Olho para cima. O céu é azul. É um segredo, mas confio em você também. <br> <br>Se não fosse por você, eu poderia dormir para sempre. <br><br>Mas não estou com raiva.</p>'

    var sayoriPoem2 = '<h3>Garrafas</h3> <br> <p class="body-poem"> Eu arranco meu couro cabeludo, como a tampa de um jarro de biscoitos. <br>É o lugar secreto onde guardo todos os meus sonhos.<br>Pequenas bolas de raios solares, todas se esfregando juntas como um bando de gatinhos.<br>Eu alcanço o interior com meu polegar e arranco uma delas. <br><br>É quente e dá um formigamento.<br>Mas não há tempo a perder! Coloquei em uma garrafa para mantê-la segura.<br>E coloquei a garrafa na prateleira, com todas as outras garrafas.<br>Pensamentos felizes, pensamentos felizes, pensamentos felizes em garrafas, todos em fileira.<br><br>Minha coleção me traz muitos amigos.<br>Cada garrafa é uma luz das estrelas para compensar.<br>Às vezes, meu amigo se sente de um certo modo.<br>E aparece uma garrafa para salvar o dia.<br><br>Noite após noite, mais sonhos.<br>Amigo após amigo, mais garrafas.<br>Meus dedos vão cada vez mais fundo.<br>Como se explorando uma caverna escura, descobrindo segredos nos cantos e fendas.<br>Escavando e escavando.<br>Arranhando e arranhando.<br><br>Eu sopro a poeira das tampas de garrafa.<br>Não parece que o tempo passou.<br>Minha prateleira vazia poderia ter algumas mais.<br>Meus amigos olham através da minha porta da frente trancada.<br><br>Por fim, tudo está pronto. Eu abro e meus amigos entram.<br>Eles entram, com tanta pressa. Eles realmente querem minhas garrafas tanto assim?<br>Eu freneticamente puxo elas das prateleiras, uma após a outra.<br>Segurando elas para cada um dos amigos.<br>Cada uma das garrafas.<br>Mas cada vez que deixo uma ir, ela se quebra contra o azulejo entre meus pés.<br>Pensamentos felizes, pensamentos felizes, pensamentos felizes em estilhaços, espalhados pelo chão.<br><br>Elas deveriam ser para meus amigos, meus amigos que não estão sorrindo.<br>Todos estão gritando, implorando. Alguma coisa.<br>Mas tudo que eu escuto é eco, eco, eco, eco, eco.<br><br>Dentro da minha cabeça. </p> <br>';

    var sayoriPoem3 = '<h3>%</h3> <p class="body-poem"> Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia.<br>Da.<br>Minha.<br>Cabeça.<br><br><br><br><br><br><br><br>Saia da minha cabeça antes que eu faça o que sei que é melhor para você.<br>Saia da minha cabeça antes que eu dê ouvidos a tudo que ela me disse.<br>Saia da minha cabeça antes que eu te mostre o quanto te amo.<br>Saia da minha cabeça antes que eu termine de escrever esse poema.<br><br><br><br><br><br><br><br>Mas um poema nunca acaba de verdade.<br>Ele só para de se mover.<br> </p>'

    girls.addEventListener('mouseenter', function(){
        girls.style.animationName = 'slideToRightGirls';
        girls.style.animationDuration = '.5s';
        girls.style.animationFillMode = 'backwards';
    });
    
    girls.addEventListener('animationend', function(){
        girlsText.innerHTML = textGirls;
        girlsText.style.animationName = 'fadeIn';
        girlsText.style.animationDuration = '2.5s';
        girlsText.style.animationFillMode = 'backwards';
        girlsText.style.width = '40%';
    });  

    logo.addEventListener('click', function(){
        contentMain.style.animationName = 'fadeOut';
        contentMain.style.animationDuration = '.5s';
        contentMain.style.animationFillMode = 'forwards';

        background.style.background = 'url(static/images/newback.png)';

        setTimeout(function(){
            girlsText.style.fontSize = '24px';
            monikaText.style.fontSize = '0px';
            sayoriText.style.fontSize = '0px';
            natsukiText.style.fontSize = '0px';
            yuriText.style.fontSize = '0px';

            contentMain.style.animationName = 'fadeIn';

            sectionGirls.style.height ='auto';
            sectionGirls.style.width = 'auto';

            sectionMonika.style.height = '0px';
            sectionMonika.style.width = '0px';  

            sectionSayori.style.height = '0px';
            sectionSayori.style.width = '0px';  

            sectionNatsuki.style.height = '0px';
            sectionNatsuki.style.width = '0px';

            sectionYuri.style.height = '0px';
            sectionYuri.style.width = '0px';  

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height = '0px',
                girlsM[i].style.width = '0px';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height = '0px',
                girlsS[i].style.width = '0px';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height = '0px',
                girlsN[i].style.width = '0px';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height = '0px',
                girlsY[i].style.width = '0px';
            };

            girls.style.animationName = 'slideToRightGirls';
            girls.style.animationDuration = '.5s';
            girls.style.animationFillMode = 'backwards';

        }, 600)
    });

    chibiMonika.addEventListener('click', function(){
        contentMain.style.animationName = 'fadeOut';
        contentMain.style.animationDuration = '.5s';
        contentMain.style.animationFillMode = 'forwards';
        background.style.background = 'url(static/images/monikabg.png)';

        setTimeout(function(){
            girlsText.style.fontSize = '0px';
            monikaText.style.fontSize = '24px';
            sayoriText.style.fontSize = '0px';
            natsukiText.style.fontSize = '0px';
            yuriText.style.fontSize = '0px';

            contentMain.style.animationName = 'fadeIn';

            sectionGirls.style.height = '0px';
            sectionGirls.style.width = '0px';

            sectionSayori.style.height = '0px';
            sectionSayori.style.width = '0px';

            sectionNatsuki.style.height = '0px';
            sectionNatsuki.style.width = '0px';

            sectionMonika.style.height = 'auto';
            sectionMonika.style.width = 'auto';
            
            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height = '800px',
                girlsM[i].style.width = 'auto';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height = '0px',
                girlsS[i].style.width = '0px';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height = '0px',
                girlsN[i].style.width = '0px';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height = '0px',
                girlsY[i].style.width = '0px';
            };

            monika.style.animationName = 'slideToRightMonika';
            monika.style.animationDuration = '.5s';
            monika.style.animationFillMode = 'backwards';

        }, 600)
    });

    monika.addEventListener('animationend', function(){
        monikaText.innerHTML = textMonika;
        monikaText.style.animationName = 'fadeIn';
        monikaText.style.animationDuration = '2.5s';
        monikaText.style.animationFillMode = 'backwards';
        monikaText.style.width = '40%';
        monika.style.marginTop = '-38.4px';
    });

    chibiSayori.addEventListener('click', function(){
        contentMain.style.animationName = 'fadeOut';
        contentMain.style.animationDuration = '.5s';
        contentMain.style.animationFillMode = 'forwards';
        
        background.style.background = 'url(static/images/sayoribg.png)';

        setTimeout(function(){
            girlsText.style.fontSize = '0px';
            monikaText.style.fontSize = '0px';
            sayoriText.style.fontSize = '24px';
            natsukiText.style.fontSize = '0px';
            yuriText.style.fontSize = '0px';

            contentMain.style.animationName = 'fadeIn';
            
            sectionGirls.style.height = '0px';
            sectionGirls.style.width = '0px';

            sectionMonika.style.height = '0px';
            sectionMonika.style.width = '0px';

            sectionYuri.style.height = '0px';
            sectionYuri.style.width = '0px';

            sectionSayori.style.height = 'auto';
            sectionSayori.style.width = 'auto';

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height = '0px',
                girlsM[i].style.width = '0px';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height = '0px',
                girlsN[i].style.width = '0px';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height = '0px',
                girlsY[i].style.width = '0px';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height = '800px',
                girlsS[i].style.width = 'auto';
            };
            
            sayori.style.animationName = 'slideToRightSayori';
            sayori.style.animationDuration = '.5s';
            sayori.style.animationFillMode = 'backwards';

        }, 600)
    });
    
    sayori.addEventListener('animationend', function(){
        sayoriText.innerHTML = textSayori;
        sayoriText.style.animationName = 'fadeIn';
        sayoriText.style.animationDuration = '2.5s';
        sayoriText.style.animationFillMode = 'backwards';
        sayoriText.style.width = '40%';
        sayori.style.marginTop = '-38.4px';
    });

    chibiNatsuki.addEventListener('click', function(){
        contentMain.style.animationName = 'fadeOut';
        contentMain.style.animationDuration = '.5s';
        contentMain.style.animationFillMode = 'forwards';
        background.style.background = 'url(static/images/natsukibg.png)';

        setTimeout(function(){
            girlsText.style.fontSize = '0px';
            monikaText.style.fontSize = '0px';
            sayoriText.style.fontSize = '0px';
            natsukiText.style.fontSize = '24px';
            yuriText.style.fontSize = '0px';

            contentMain.style.animationName = 'fadeIn';
            
            sectionGirls.style.height = '0px';
            sectionGirls.style.width = '0px';

            sectionMonika.style.height = '0px';
            sectionMonika.style.width = '0px';

            sectionSayori.style.height = '0px';
            sectionSayori.style.width = '0px';

            sectionYuri.style.height = '0px';
            sectionYuri.style.width = '0px';

            sectionNatsuki.style.height = 'auto';
            sectionNatsuki.style.width = 'auto';

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height = '0px',
                girlsM[i].style.width = '0px';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height = '0px',
                girlsS[i].style.width = '0px';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height = '800px',
                girlsN[i].style.width = 'auto';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height = '0px',
                girlsY[i].style.width = '0px';

            natsuki.style.animationName = 'slideToRightNatsuki';
            natsuki.style.animationDuration = '.5s';
            natsuki.style.animationFillMode = 'backwards';

            };
        }, 600)
    });
    
    natsuki.addEventListener('animationend', function(){
        natsukiText.innerHTML = textNatsuki;
        natsukiText.style.animationName = 'fadeIn';
        natsukiText.style.animationDuration = '2.5s';
        natsukiText.style.animationFillMode = 'backwards';
        natsukiText.style.width = '40%';
        natsuki.style.marginTop = '-38.4px';
    });

    chibiYuri.addEventListener('click', function(){
        contentMain.style.animationName = 'fadeOut';
        contentMain.style.animationDuration = '.5s';
        contentMain.style.animationFillMode = 'forwards';
        background.style.background = 'url(static/images/yuribg.png)';

        setTimeout(function(){
            girlsText.style.fontSize ='0px';
            monikaText.style.fontSize = '0px';
            sayoriText.style.fontSize = '0px';
            natsukiText.style.fontSize = '0px';
            yuriText.style.fontSize = '24px';

            contentMain.style.animationName = 'fadeIn';
            
            sectionGirls.style.height = '0px';
            sectionGirls.style.width = '0px';

            sectionMonika.style.height = '0px';
            sectionMonika.style.width = '0px';

            sectionNatsuki.style.height = '0px';
            sectionNatsuki.style.width = '0px';

            sectionSayori.style.height = '0px';
            sectionSayori.style.width = '0px';

            sectionYuri.style.height = 'auto';
            sectionYuri.style.width = 'auto';

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height = '0px',
                girlsM[i].style.width = '0px';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height = '0px',
                girlsN[i].style.width = '0px';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height = '0px',
                girlsS[i].style.width = '0px';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height = '800px',
                girlsY[i].style.width = 'auto';

            yuri.style.animationName = 'slideToRightYuri';
            yuri.style.animationDuration = '.5s';
            yuri.style.animationFillMode = 'backwards';

            };
        }, 600)
    });
    
    yuri.addEventListener('animationend', function(){
        yuriText.innerHTML = textYuri;
        yuriText.style.animationName = 'fadeIn';
        yuriText.style.animationDuration = '2.5s';
        yuriText.style.animationFillMode = 'backwards';
        yuriText.style.width = '40%';
        yuri.style.marginTop = '-38.4px';
    });


    var buttonStateM = 0;
    monikaButton.addEventListener('click', function(){

        buttonStateM += 1;

        monikaPoems.style.animationName = 'fadeOut';
        monikaPoems.style.animationDuration = '.5s';
        monikaPoems.style.animationFillMode = 'forwards';

        setTimeout(function(){
            monikaPoems.style.animationName = 'fadeIn';
            monikaPoems.style.animationDuration = '.5s';
            monikaPoems.style.animationFillMode = 'forwards';

            sayoriPoems.innerHTML = '';
        }, 520);
        
        if (buttonStateM == 1){
            setTimeout(function(){
                monikaPoems.innerHTML = monikaPoem1;
            }, 520);
        };

        if (buttonStateM == 2){
            setTimeout(function(){
                monikaPoems.innerHTML = monikaPoem2;
            }, 520);
        };

        if (buttonStateM == 3){
            setTimeout(function(){
                monikaPoems.innerHTML = monikaPoem3;
            }, 520);
            buttonStateM = 0;
        };

        monikaButton.style.animationName = 'contrastIn';
        monikaButton.style.animationDuration = '.5s';
        monikaButton.style.animationFillMode = 'forwards';

        sayoriButton.style.animationName = 'contrastOut';
        sayoriButton.style.animationDuration = '.5s';
        sayoriButton.style.animationFillMode = 'forwards';
    });

    var buttonStateS = 0;
    sayoriButton.addEventListener('click', function(){
        buttonStateS += 1;

        sayoriPoems.style.animationName = 'fadeOut';
        sayoriPoems.style.animationDuration = '.5s';
        sayoriPoems.style.animationFillMode = 'forwards';


        setTimeout(function(){
            sayoriPoems.style.animationName = 'fadeIn';
            sayoriPoems.style.animationDuration = '.5s';
            sayoriPoems.style.animationFillMode = 'forwards';

            monikaPoems.innerHTML = '';
        }, 520);
        
        if (buttonStateS == 1){
            setTimeout(function(){
                sayoriPoems.innerHTML = sayoriPoem1;
            }, 520);
        };

        if (buttonStateS == 2){
            setTimeout(function(){
                sayoriPoems.innerHTML = sayoriPoem2;
            }, 520);
        };

        if (buttonStateS == 3){
            setTimeout(function(){
                sayoriPoems.innerHTML = sayoriPoem3;
            }, 520);
            buttonStateS = 0;

            setTimeout(function(){
                background.style.filter = 'invert(100%)';
            }, 1000);
            
            setTimeout(function(){
                background.style.filter = 'invert(0%)';
            }, 1100);
        };

        sayoriButton.style.animationName = 'contrastIn';
        sayoriButton.style.animationDuration = '.5s';
        sayoriButton.style.animationFillMode = 'forwards';

        monikaButton.style.animationName = 'contrastOut';
        monikaButton.style.animationDuration = '.5s';
        monikaButton.style.animationFillMode = 'forwards';
    });



    //Bounce
    girls.addEventListener('click', function(){
        for(var i = 0; i < bounce.length; i++){
            bounce[i].style.animationName = 'bounce',
            bounce[i].style.animationDuration = '.3s',
            bounce[i].style.animationFillMode = 'forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce.length; i++){
                bounce[i].style.animationName = '';
            };
        }, 1050);
    });

    monika.addEventListener('click', function(){
        for(var i = 0; i < bounce.length; i++){
            bounce[i].style.animationName = 'bounce',
            bounce[i].style.animationDuration = '.3s',
            bounce[i].style.animationFillMode = 'forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce.length; i++){
                bounce[i].style.animationName = '';
            };
        }, 1050);
    });

    sayori.addEventListener('click', function(){
        for(var i = 0; i < bounce.length; i++){
            bounce[i].style.animationName = 'bounce',
            bounce[i].style.animationDuration = '.3s',
            bounce[i].style.animationFillMode = 'forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce.length; i++){
                bounce[i].style.animationName = '';
            };
        }, 1050);
    });

    natsuki.addEventListener('click', function(){
        for(var i = 0; i < bounce.length; i++){
            bounce[i].style.animationName = 'bounce',
            bounce[i].style.animationDuration = '.3s',
            bounce[i].style.animationFillMode  ='forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce.length; i++){
                bounce[i].style.animationName = '';
            };
        }, 1050);
    });

    yuri.addEventListener('click', function(){
        for(var i = 0; i < bounce.length; i++){
            bounce[i].style.animationName = 'bounce',
            bounce[i].style.animationDuration = '.3s',
            bounce[i].style.animationFillMode = 'forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce.length; i++){
                bounce[i].style.animationName = '';
            };
        }, 1050);
    });    

};
