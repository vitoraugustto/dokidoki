window.onload = function(){

    setTimeout(function(){
        document.body.className = '';
    }, 80);

    const contentMain = document.getElementById('main');
    const background = document.getElementById('bg');
    const screen = document.getElementById('screen');
    const bounce = document.getElementsByClassName('bounce');

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

    var monikaPoem2 = '<h3>Me salve</h3> <br> <p class="body-poem">As cores, elas não param. <br>Cores brilhantes e lindas. <br>Piscando, expandindo, perfurando <br>Vermelho, verde, azul <br>Uma infinita <br>cacofonia <br>De um incompreensível <br>barulho <br><br>O barulho, ele não para. <br>Formas de ondas violentas e irritantes <br>Rangendo chiando, perfurando <br>Seno, cosseno, tangente <br>Como brincar com um quadro de giz em um fonógrafo <br>Como brincar com um vinil em uma massa de pizza <br>Um poema <br>sem fim <br>Sem significado <br></p>'

    var monikaPoem3 = '<h3>A dama que sabe tudo</h3> <p class="body-poem"><br> Um velho conto fala de uma dama que vagueia pela Terra. <br>A Dama Que Sabe Tudo. <br>Uma bela dama que encontrou todas as respostas, <br>Todos os significados, <br>Todos os propósitos, <br>E tudo que já foi procurado <br><br>E aqui estou eu. <br><br>uma pena. <br><br>Perdida à deriva no céu, vítima das correntes do vento. <br><br>Dia após dia, procuro. <br>Procuro com pouca esperança, sabendo que lendas não existem. <br>Mas quando tudo mais falhou comigo, <br>Quando todos os outros se afastaram, <br>A lenda é tudo o que resta a última estrela fraca cintilando no céu crepuscular. <br><br>Até que um dia, o vento deixa de soprar. <br>Eu caio. <br>E eu caio e caio, e caio ainda mais. <br>Gentil como uma pena. <br>Uma pena seca, inexpressiva. <br><br> Mas uma mão me pega entre o polegar e o indicador. <br>A mão de uma bela dama. <br>Olho para os olhos dela e não encontro fim para o seu olhar. <br><br>A dama que Sabe Tudo sabe o que estou pensando. <br>Antes que eu possa falar, ela responde com uma voz vazia. <br>"Eu encontrei todas as respostas, todas as quais equivalem a nada. <br>Não há significado. <br>Não há propósito. <br>E buscamos apenas o impossível. <br>Eu não sou sua lenda. <br>Sua lenda não existe." <br><br>E com um sopro, ela me lança de volta ao ar e eu sigo uma rajada de vento. <br></p>'

    var sayoriPoem1 = '<h3>Querida Luz do Sol</h3> <br> <p class="body-poem"> A forma que você brilha através das minhas cortinas pela manhã <br> Me faz sentir como se você estivesse com saudade de mim. <br> Beijando minha testa para me ajudar a levantar da cama. <br> Fazendo eu esfregar o sono dos meus olhos. <br> Você esta me pedindo para sair e brincar? <br> Esta confiando em mim para desejar que um dia chuvoso não venha? <br> Olho para cima. O céu é azul. É um segredo, mas confio em você também. <br> <br>Se não fosse por você, eu poderia dormir para sempre. <br><br>Mas não estou com raiva.</p>'

    var sayoriPoem2 = '<h3>Garrafas</h3> <br> <p class="body-poem"> Eu arranco meu couro cabeludo, como a tampa de um jarro de biscoitos. <br>É o lugar secreto onde guardo todos os meus sonhos.<br>Pequenas bolas de raios solares, todas se esfregando juntas como um bando de gatinhos.<br>Eu alcanço o interior com meu polegar e arranco uma delas. <br><br>É quente e dá um formigamento.<br>Mas não há tempo a perder! Coloquei em uma garrafa para mantê-la segura.<br>E coloquei a garrafa na prateleira, com todas as outras garrafas.<br>Pensamentos felizes, pensamentos felizes, pensamentos felizes em garrafas, todos em fileira.<br><br>Minha coleção me traz muitos amigos.<br>Cada garrafa é uma luz das estrelas para compensar.<br>Às vezes, meu amigo se sente de um certo modo.<br>E aparece uma garrafa para salvar o dia.<br><br>Noite após noite, mais sonhos.<br>Amigo após amigo, mais garrafas.<br>Meus dedos vão cada vez mais fundo.<br>Como se explorando uma caverna escura, descobrindo segredos nos cantos e fendas.<br>Escavando e escavando.<br>Arranhando e arranhando.<br><br>Eu sopro a poeira das tampas de garrafa.<br>Não parece que o tempo passou.<br>Minha prateleira vazia poderia ter algumas mais.<br>Meus amigos olham através da minha porta da frente trancada.<br><br>Por fim, tudo está pronto. Eu abro e meus amigos entram.<br>Eles entram, com tanta pressa. Eles realmente querem minhas garrafas tanto assim?<br>Eu freneticamente puxo elas das prateleiras, uma após a outra.<br>Segurando elas para cada um dos amigos.<br>Cada uma das garrafas.<br>Mas cada vez que deixo uma ir, ela se quebra contra o azulejo entre meus pés.<br>Pensamentos felizes, pensamentos felizes, pensamentos felizes em estilhaços, espalhados pelo chão.<br><br>Elas deveriam ser para meus amigos, meus amigos que não estão sorrindo.<br>Todos estão gritando, implorando. Alguma coisa.<br>Mas tudo que eu escuto é eco, eco, eco, eco, eco.<br><br>Dentro da minha cabeça. </p> <br>';

    var sayoriPoem3 = '<h3>%</h3><br><p class="body-poem"> Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia da minha Cabeça. Saia da minha cabeça. Saia da minha cabeça. Saia da minha cabeça.<br>Saia.<br>Da.<br>Minha.<br>Cabeça.<br><br><br><br><br><br><br><br>Saia da minha cabeça antes que eu faça o que sei que é melhor para você.<br>Saia da minha cabeça antes que eu dê ouvidos a tudo que ela me disse.<br>Saia da minha cabeça antes que eu te mostre o quanto te amo.<br>Saia da minha cabeça antes que eu termine de escrever esse poema.<br><br><br><br><br><br><br><br>Mas um poema nunca acaba de verdade.<br>Ele só para de se mover.<br> </p>'

    var natsukiPoem1 = '<h3>Aguias Podem Voar</h3> <br> <p class="body-poem"> Macacos podem escalar<br>Grilos podem saltar<br>Cavalos podem correr<br>Corujas podem caçar<br>Guepardos podem correr<br>Águias podem voar<br>Pessoas podem tentar<br>Mas isso é tudo.</p>'

    var natsukiPoem2 = '<h3>Amy gosta de aranhas</h3> <br><p class="body-poem">Sabe o que ouvi sobre Amy?<br>Amy gosta de aranhas.<br>Aranhas nojentas, evasivas, cabeludas e feias!<br>E por isso que não sou amiga dela.<br><br>Amy tem uma bela voz para cantar.<br>Eu ouvi ela cantando minha música de amor favorita.<br>Toda vez que ela cantava o refrão. Meu coração batia ao ritmo das palavras.<br>Mas ela gosta de aranhas.<br><br>É por isso que não sou amiga dela.<br><br>Certa vez, eu machuquei minha perna.<br>Amy me ajudou e me levou á enfermaria.<br>Tentei não deixá-la tocar em mim.<br>Ela gosta de aranhas, então suas mãos provavelmente são nojentas.<br>É por isso que não sou amiga dela.<br><br>Amy tem muitos amigos.<br>Sempre vejo ela conversando com as pessoas.<br>Ela provavelmente fala sobre aranhas.<br>E se os amigos dela começarem a gostar de aranhas também?<br>É por isso que não sou amiga dela.<br><br>Não importa se ela tem outros passatempos.<br>Não importa se ela faz isso em privado.<br>Não importa se isso não machuca ninguém.<br><br>É nojento.<br>Ela é nojenta.<br><br>O mundo é melhor sem amantes de aranhas.<br><br><br>Eu vou contar a todos.</p>';

    var natsukiPoem3 = '<h3>Porquê Você </h3> <br> <p class="body-poem">Amanhã será mais brilhante comigo por perto <br>Mas quando o hoje é sombrio, eu só posso abaixar a cabeça<br>Vejo um pouco mais para o futuro<br>Porque você olha para mim.<br><br>Quando eu quero dizer algo, eu digo com um grito!<br>Mas meus sentimentos mais genuínos nunca podem sair.<br>Minhas palavras são um pouco menos vazias<br>Porque você me escuta.<br><br>Quando algo esta acima de mim, eu alcanço as estrelas.<br>Mas quando me sinto pequena, não chego muito longe.<br>Minha postura é um pouco mais alta<br>Porque você se senta comigo.<br><br>Eu acredito em mim mesma com todo o meu coração.<br>Mas o que eu faço quando ele está despedaçado?<br>Minha fé é um pouco mais forte<br>Porque você confiou em mim.<br><br>Minha caneta sempre coloca os meus sentimentos a prova.<br>Eu não sou uma boa escritora, mas o meu melhor é o meu melhor.<br>Meus poemas são um pouco mais estimados<br>Porque você pensa em mim.<br><br>Porque você, porque você, porque você.</p>';

    var yuriPoem1 = '<h3>Fantasma sob a luz</h3> <br>  <p class="body-poem">As mechas do meu cabelo iluminam-se sob o brilho âmbar <br>banhando-se<br>deve ser esse<br>o último poste de luz restante a ter resistido ao teste do tempo<br>o último ainda a ser substituído pela tonalidade azul-verde doentia do futuro<br>eu me banho. Calma; respirando o ar do presente, mas vivendo no passado<br>a luz cintila<br>e eu cintilo de volta.<br></p>'

    var yuriPoem2 = '<h3>O Guaxinim</h3> <br> <p class="body-poem">Aconteceu no meio da noite enquanto eu estava cortando um pão para um lanche culpado <br>Minha atenção foi apanhada pela raspagem de um guaxinim fora da minha janela.<br>Foi, creio eu, a primeira vez que notei as minhas estranhas tendências de uma incomum humana.<br>Dei ao guaxinim um pedaço de pão, meu subconsciente bem ciente de suas consequências<br>Bem ciente, de que quando um guaxinim é alimentado, ele volta por mais.<br>A beleza sedutora da minha faca de corte foi o sintoma.<br>O pão, minha curiosidade está com fome.<br>O Guaxinim, um impulso.<br><br>A lua incrementa sua fase e reflete muito mais sobre a luz da lâmina de minha faca.<br>A mesma luz que cintila nos olhos do Guaxinim.<br>Eu faço o pão, fresco e macio, o Guaxinim fica ansioso.<br>Ou eu esteja apenas projetando minhas emoções para o animal recém-satisfeito.<br><br>O Guaxinim começou a me seguir.<br>Podíamos dizer que nos acostumamos um com o outro.<br>O Guaxinim fica com fome mais e mais frequentemente, então o meu pão sempre servia.<br>Toda vez que brando minha faca de corte, ele me mostra sua excitação.<br>Uma onda de sangue. Comportamento clássico. Eu faço o pão.<br></p>'

    var yuriPoem3 = '<h3>Praia</h3> <br> <p class="body-poem">Uma maravilha milhões de anos em construção. <br>Onde o útero da terra encontra caoticamente a superfície.<br> Sob um céu azul claro, uma vastidão de felicidade<br>Mas sob nuvens cinzentas, um enigma sem fim.<br>O mundo mais fácil no qual se perder<br>É aquele onde tudo pode ser encontrado.<br><br>Uma pessoa só pode construir um castelo de areia onde a areia esta molhada.<br>Mas onde a areia está molhada, a maré vem.<br>Irá ela lamber suavemente seus alicerces até você ceder?<br>Ou será que uma onda repentina o derrubará em um piscar de olhos?<br>De qualquer forma, o resultado é o mesmo.<br>Mesmo assim, nós ainda construímos castelos de areia.<br><br>Eu fico parada onde a espuma envolve meus tornozelos.<br>Onde meus dedos do pé afundam na areia.<br>O ar salgado é terapêutico.<br>A brisa é suave, mas poderosa.<br>Eu afundo meus dedos do pé na fronteira final, tentada pelas ondas espumosas.<br>Volte e eu abandono minha paz para me desgastar na costa.<br>Continue em frente e eu retorno para a Terra para sempre.<br></p>';

    
    function contentMainFadeOut(){
        contentMain.style.animationName = 'fadeOut';
        contentMain.style.animationDuration = '.5s';
        contentMain.style.animationFillMode = 'forwards';
    };

    function sectionGirlsOut(){
        girlsText.style.fontSize = '0px';
        sectionGirls.style.height = '0px';
        sectionGirls.style.width = '0px';
    };

    function sectionMonikaOut(){
        monikaText.style.fontSize = '0px';
        sectionMonika.style.height = '0px';
        sectionMonika.style.width = '0px';

        for (var i = 0; i < girlsM.length; i++){
            girlsM[i].style.height = '0px',
            girlsM[i].style.width = '0px';
        };
    };

    function sectionSayoriOut(){
        sayoriText.style.fontSize = '0px';
        sectionSayori.style.height = '0px';
        sectionSayori.style.width = '0px';

        for (var i = 0; i < girlsS.length; i++){
            girlsS[i].style.height = '0px',
            girlsS[i].style.width = '0px';
        };
    };

    function sectionNatsukiOut(){
        natsukiText.style.fontSize = '0px';
        sectionNatsuki.style.height = '0px';
        sectionNatsuki.style.width = '0px';

        for (var i = 0; i < girlsN.length; i++){
            girlsN[i].style.height = '0px',
            girlsN[i].style.width = '0px';
        };
    };

    function sectionYuriOut(){
        yuriText.style.fontSize = '0px';
        sectionYuri.style.height = '0px';
        sectionYuri.style.width = '0px';

        for (var i = 0; i < girlsY.length; i++){
            girlsY[i].style.height = '0px',
            girlsY[i].style.width = '0px';
        };
    };

    girls.addEventListener('mouseenter', function(){
        girls.style.animationName = 'slideToRightGirls';
        girls.style.animationDuration = '.5s';
        girls.style.animationFillMode = 'backwards';
    });
    
    girls.addEventListener('animationend', function(){
        girlsText.classList.add('fadeIn');

        girlsText.innerHTML = textGirls;
        girlsText.style.width = '40%';
    });  

    

    logo.addEventListener('click', function(){
        contentMainFadeOut();

        background.style.background = 'url(static/images/newback.png)';

        setTimeout(function(){
            sectionMonikaOut();
            sectionSayoriOut();
            sectionNatsukiOut();
            sectionYuriOut();

            contentMain.style.animationName = 'fadeIn';

            girlsText.style.fontSize = '24px';
            sectionGirls.style.height ='auto';
            sectionGirls.style.width = 'auto';

            girls.style.animationName = 'slideToRightGirls';
            girls.style.animationDuration = '.5s';
            girls.style.animationFillMode = 'backwards';

        }, 600)
    });

    var glitch = new Audio('static/song/jscare.mp3');
    var glitchCounter = 0;

    chibiMonika.addEventListener('click', function(){
        glitchCounter += 1;
        
        background.style.background = 'url(static/images/monikabg.png)';
        contentMainFadeOut();

        setTimeout(function(){
            sectionGirlsOut();
            sectionSayoriOut();
            sectionNatsukiOut();
            sectionYuriOut();

            contentMain.style.animationName = 'fadeIn';

            monika.style.animationName = 'slideToRightMonika';
            monika.style.animationDuration = '.5s';
            monika.style.animationFillMode = 'backwards';

            monikaText.style.fontSize = '24px';
            sectionMonika.style.height = 'auto';
            sectionMonika.style.width = 'auto';
            
            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height = '800px',
                girlsM[i].style.width = 'auto';
            };

            //Glitch Check
            if(glitchCounter == 5){
                screen.style.display = 'block';
                chibiMonika.style.opacity = '0';
                monika.src = 'static/images/monikaglitch.png';
                glitch.play();

                setTimeout(function(){
                    screen.style.display = 'none';
                    chibiMonika.style.opacity = '1';
                }, 200);
            };

            if(monika.getAttribute('src') == 'static/images/monikaglitch.png'){
                monikaText.innerHTML = '-9SIK98u-()dvU dWDWDWDU*WUWAEDERU#AUR$R(VMr $R#)@4I@) $R@ I05I B)%I#53)MI@)BMI 54i023IQ%$)23i5402B)I i 40m2$!$#!@%)(#@%*@#5823 5#)58 b S<Dsa a:><$e2. 4,32pQLp4~2 $@Q,4^LÇ2q ,54q~pçLf^PEQlf,as~dç,.<A,<a<A<,A< < a< ,@< @â< ç$<%@a<%ç<A< < <@#%$ ka#@²3Q5 0k#@%)#kq q#3# k%#p  5k##qpa^p%#k  k%#ap^k%p#a^%k#a_<a#<<<a, a#@p$kl#ap)_kl #ap <,a ,A<a< #@_alR4 a#l_{L3%^prl #)pk#%r<< #ak)ka%k K)k% k%k<< a< <a<#a<a# p_)K5L3)aK pKLa> a .A>.a#P-0LK #a <#ap< okja #ak #)ak5 30Ak03kar%)#kak53A)k 3)ak A0k apLEKAoKR#r%a%#%q@k 3Kqa^$r#a ok#a% %3a%3k%#) %#)kaak ak#K3Ak 3A%rp#)k%tyklrdpyKL%yed&y <,D,D,5, D5,5ap#lk3AP5lk5KA3AkKAkp$ kak po 4#ok4 O#akOAk KOak oKOK -0i324r3q$%#Q$I3q %)$3iq%ibq#53Qi%#)q95V#qRTWT iw4b%¨$#i5w#$I%B3wI 53WI53Iwb5I#w b%i#w5I3WB%i3wI%3W%iW35 3WI53W5#w%i# W5bi#W%IB3w%I';
                //Glitch Check
            };
        }, 600)
    });

    monika.addEventListener('animationend', function(){
        monikaText.classList.add('fadeIn');

        monikaText.innerHTML = textMonika;
        monikaText.style.width = '40%';
        monika.style.marginTop = '-38.4px';
    });

    chibiSayori.addEventListener('click', function(){
        background.style.background = 'url(static/images/sayoribg.png)';
        contentMainFadeOut();        

        setTimeout(function(){
            contentMain.style.animationName = 'fadeIn';

            sectionGirlsOut();
            sectionMonikaOut();
            sectionNatsukiOut();
            sectionYuriOut();
                        
            sayori.style.animationName = 'slideToRightSayori';
            sayori.style.animationDuration = '.5s';
            sayori.style.animationFillMode = 'backwards';

            sayoriText.style.fontSize = '24px';
            sectionSayori.style.height = 'auto';
            sectionSayori.style.width = 'auto';

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height = '800px',
                girlsS[i].style.width = 'auto';
            };
        }, 600)
    });
    
    sayori.addEventListener('animationend', function(){
        sayoriText.classList.add('fadeIn');

        sayoriText.innerHTML = textSayori;
        sayoriText.style.width = '40%';
        sayori.style.marginTop = '-38.4px';
    });

    chibiNatsuki.addEventListener('click', function(){
        background.style.background = 'url(static/images/natsukibg.png)';
        contentMainFadeOut();

        setTimeout(function(){
            sectionGirlsOut();
            sectionMonikaOut();
            sectionSayoriOut();
            sectionYuriOut();

            contentMain.style.animationName = 'fadeIn';

            natsuki.style.animationName = 'slideToRightNatsuki';
            natsuki.style.animationDuration = '.5s';
            natsuki.style.animationFillMode = 'backwards';

            natsukiText.style.fontSize = '24px';
            sectionNatsuki.style.height = 'auto';
            sectionNatsuki.style.width = 'auto';

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height = '800px',
                girlsN[i].style.width = 'auto';
            };
        }, 600)
    });
    
    natsuki.addEventListener('animationend', function(){
        natsukiText.classList.add('fadeIn');

        natsukiText.innerHTML = textNatsuki;
        natsukiText.style.width = '40%';
        natsuki.style.marginTop = '-38.4px';
    });

    chibiYuri.addEventListener('click', function(){
        background.style.background = 'url(static/images/yuribg.png)';
        contentMainFadeOut();

        setTimeout(function(){
            sectionGirlsOut();
            sectionMonikaOut();
            sectionSayoriOut();
            sectionNatsukiOut();

            contentMain.style.animationName = 'fadeIn';

            yuri.style.animationName = 'slideToRightYuri';
            yuri.style.animationDuration = '.5s';
            yuri.style.animationFillMode = 'backwards';

            yuriText.style.fontSize = '24px';
            sectionYuri.style.height = 'auto';
            sectionYuri.style.width = 'auto';

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height = '800px',
                girlsY[i].style.width = 'auto';
            };
        }, 600)
    });
    
    yuri.addEventListener('animationend', function(){
        yuriText.classList.add('fadeIn');

        yuriText.innerHTML = textYuri;
        yuriText.style.width = '40%';
        yuri.style.marginTop = '-38.4px';
    });


    var buttonStateM = 1;
    monikaPoems.innerHTML = monikaPoem1;
    monikaButton.addEventListener('click', function(){
    buttonStateM += 1;

        monikaPoems.className = 'fadeOut';

        setTimeout(function(){
            monikaPoems.className = 'fadeIn';

            [sayoriPoems, natsukiPoems, yuriPoems].forEach((Poems) =>
                Poems.innerHTML = '');
        }, 520);
        
        if (buttonStateM == 1){
            setTimeout(function(){
                monikaPoems.innerHTML = monikaPoem1;
            }, 520);
        } else if (buttonStateM == 2){
            setTimeout(function(){
                monikaPoems.innerHTML = monikaPoem2;
            }, 520);
        } else if (buttonStateM == 3){
            setTimeout(function(){
                monikaPoems.innerHTML = monikaPoem3;
            }, 520);
            buttonStateM = 0;
        };
    });

    var buttonStateS = 0;

    sayoriButton.addEventListener('click', function(){
        buttonStateS += 1;

        sayoriPoems.className = 'fadeOut';

        setTimeout(function(){
            sayoriPoems.className = 'fadeIn';

            [monikaPoems, natsukiPoems, yuriPoems].forEach((Poems) =>
                Poems.innerHTML = '');
        }, 520);
        
        if (buttonStateS == 1){
            setTimeout(function(){
                sayoriPoems.innerHTML = sayoriPoem1;
            }, 520);
        } else if (buttonStateS == 2){
            setTimeout(function(){
                sayoriPoems.innerHTML = sayoriPoem2;
            }, 520);
        } else if (buttonStateS == 3){
            setTimeout(function(){
                sayoriPoems.innerHTML = sayoriPoem3;
            }, 520);
            buttonStateS = 0;
        };
    });

    var buttonStateN = 0;

    natsukiButton.addEventListener('click', function(){
        buttonStateN += 1;

        natsukiPoems.className = 'fadeOut';

        setTimeout(function(){
            natsukiPoems.className = 'fadeIn';

            [monikaPoems, sayoriPoems, yuriPoems].forEach((Poems) =>
                Poems.innerHTML = '');
        }, 520);
        
        if (buttonStateN == 1){
            setTimeout(function(){
                natsukiPoems.innerHTML = natsukiPoem1;
            }, 520);
        } else if (buttonStateN == 2){
            setTimeout(function(){
                natsukiPoems.innerHTML = natsukiPoem2;
            }, 520);
        } else if (buttonStateN == 3){
            setTimeout(function(){
                natsukiPoems.innerHTML = natsukiPoem3;
            }, 520);
            buttonStateN = 0;
        };
    });

    var buttonStateY = 0;

    yuriButton.addEventListener('click', function(){
        buttonStateY += 1;

        yuriPoems.className = 'fadeOut';

        setTimeout(function(){
            yuriPoems.className = 'fadeIn';

            [monikaPoems, sayoriPoems, natsukiPoems].forEach((Poems) => 
                Poems.innerHTML = '');
        }, 520);
        
        if (buttonStateY == 1){
            setTimeout(function(){
                yuriPoems.innerHTML = yuriPoem1;
            }, 520);
        } else if (buttonStateY == 2){
            setTimeout(function(){
                yuriPoems.innerHTML = yuriPoem2;
            }, 520);
        } else if (buttonStateY == 3){
            setTimeout(function(){
                yuriPoems.innerHTML = yuriPoem3;
            }, 520);
            buttonStateY = 0;
        };
    });

    //Bounce
    function bounceAnimation(event){    // Event - Research!
        for(var i = 0; i < bounce.length; i++){
            bounce[i].classList.add('bounceAnimation');
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce.length; i++){
                bounce[i].classList.remove('bounceAnimation');
            };
        }, 1050);
    };

    [girls, monika, sayori, natsuki, yuri].forEach((characters) => 
        characters.addEventListener('click', bounceAnimation));
 
};
