window.onload = function(){

    setTimeout(function(){
        document.body.className="";
    }, 80);
    
    const background = document.getElementById('bg');
    const chibiMonika = document.getElementById('chibi-monika');
    const chibiSayori = document.getElementById('chibi-sayori');
    const chibiNatsuki = document.getElementById('chibi-natsuki');
    const chibiYuri = document.getElementById('chibi-yuri');
    const logo = document.getElementById('logo');
    const contentMain = document.getElementById('main');
    const bounce = document.getElementById('bounce');
    const monikaPoems = document.getElementById('monikaPoems');
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
    const bounce1 = document.getElementsByClassName('bounce');




    const girlsText1 = 'Doki Doki Literature Club! é um jogo eletrônico de visual novel desenvolvida pela Team Salvato. Foi lançado em 22 de setembro de 2017 para Microsoft Windows, macOS, e Linux, e mais tarde em 6 de outubro para a Steam. A história segue um aluno do ensino médio que se junta ao Clube de Literatura da escola e interage com quatro garotas. O jogo apresenta uma história principalmente linear, com algumas cenas e finais alternativos dependendo das escolhas que o jogador faz. O jogo começa com você conhecendo Sayori, uma garota que você conhece como uma amiga de longa data';

    const monikaText1 = 'Monika é notada pelos outros personagens como inteligente, confiante e atlética. Ela não é tão falante quanto as  outras garotas, mas isso está implícito para não ser uma escolha. Monika também é conhecida por ser popular, o que faz com que o protagonista tenha uma admiração por ela. Ela sempre tem uma expressão calma e gentil e é retratada como madura e trabalhadora. <br/><br/> Monika já fazia parte do Debate Club, mas foi embora devido a toda a política e drama internos, destacando o desejo de ordem, liberdade de tópicos e simpatia. O Clube de Literatura, que ela fundou após deixar o Clube de Debate, é muito importante para ela. Ela aspira a ser um lugar para mostrar e aumentar a paixão de todos pela literatura.';

    const natsukiText1 = 'Natsuki parece ser uma garota impetuosa, brusca, irritada e aparentemente arrogante no início, com um interior fofo e suave como resultado da insegurança, convencendo Monika para classificá-la como a personificação de uma tsundere. Enquanto ela é impulsiva e pode falar sem pensar, Natsuki realmente se importa com seus amigos e, mesmo quando ela tem óbvias questões de raiva, não gosta de brigas ou discussões com as pessoas. <br/> <br/> Ao longo do jogo, é mostrado que ela se preocupa com Yuri e, em uma ocasião, dá ao protagonista uma nota pedindo que ele ajude Yuri, temendo que se ela se manifestasse, isso causaria mais discussões. Natsuki é muito teimosa e tem dificuldade em expressar como se sente e o que quer. Quando desafiada repetidamente, ela geralmente se torna estranha, depois agressiva e simplesmente explode em lágrimas.';

    const sayoriText1 = 'Sayori é retratado como uma garota Genki, expressando uma disposição faladora e alegre. Ela é muito desajeitada, conhecida por encontrar maneiras de se machucar acidentalmente ou largar as coisas. Monika observando que seus sentimentos são necessários para manter uma atmosfera relaxante no Clube da Literatura. <br/> <br/>Monika observa que, embora possa parecer uma boa líder, Sayori geralmente é melhor quando se trata de lidar com pessoas, principalmente em mediações. Sayori faz o possível para ajudar todos a serem felizes e não gosta da atenção direcionada ao seu bem-estar, porque se sente indigna de tudo o que os outros têm a oferecer. Sayori também é apresentado como o melhor amigo do personagem principal.';

    const yuriText1 = 'Yuri é retratada durante a maior parte do jogo como sendo tímida, generosa, educada, muito inteligente, madura, eloquente e apaixonada por tópicos pelos quais se interessa, embora ela também seja muito insegura. Sua fachada de passividade e tontura ocasionalmente quebra, no entanto, como Yuri discute apaixonadamente e agressivamente com Natsuki sobre suas opiniões divergentes sobre estilos de escrita. <br/> <br/> Yuri tem um profundo desejo de ser apreciada pelos outros e tem medo de falar o que pensa sobre assuntos, pois acredita que isso fará com que ela pareça improvável. Devido à sua inaptidão social, ela pode ser inocentemente insensível, mas uma vez que percebe o que disse ser considerado rude, quase imediatamente pede desculpas, repetidamente dizendo que não quis dizer isso. Como afirma o protagonista, Yuri gosta de pensar antes de dizer algo.';


    girls.addEventListener('mouseenter', function(){
        girls.style.animationName='slideToRightGirls';
        girls.style.animationDuration='.5s';
        girls.style.animationFillMode='backwards';
    });

    girls.addEventListener('animationend', function(){
        girlsText.innerHTML=girlsText1;

        girlsText.style.animationName='fadeIn';
        girlsText.style.animationDuration='2.5s';
        girlsText.style.animationFillMode='backwards';
        girlsText.style.width='40%';
    });

    logo.addEventListener('click', function(){
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';

        background.style.background = 'url(static/images/newback.png)';

        setTimeout(function(){
            contentMain.style.animationName='fadeIn';

            sectionGirls.style.height='auto';
            sectionGirls.style.width='auto';

            girlsText.innerHTML=girlsText1;
            girlsText.style.width='40%';

            sectionMonika.style.height='0px';
            sectionMonika.style.width='0px';  

            sectionSayori.style.height='0px';
            sectionSayori.style.width='0px';  

            sectionNatsuki.style.height='0px';
            sectionNatsuki.style.width='0px';

            sectionYuri.style.height='0px';
            sectionYuri.style.width='0px';  

            monikaText.innerHTML='';
            sayoriText.innerHTML='';
            natsukiText.innerHTML='';
            yuriText.innerHTML='';

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height='0',
                girlsM[i].style.width='0';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height='0',
                girlsS[i].style.width='0';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height='0',
                girlsN[i].style.width='0';
            };

            setInterval(function(){
                girls.style.animationName='';
            }, 10)
        }, 600)
    });

    chibiMonika.addEventListener('click', function(){
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';

        background.style.background = 'url(static/images/monikabg.png)';

        setTimeout(function(){
            contentMain.style.animationName='fadeIn';

            sectionGirls.style.height='0px';
            sectionGirls.style.width='0px';

            sectionSayori.style.height='0px';
            sectionSayori.style.width='0px';

            sectionNatsuki.style.height='0px';
            sectionNatsuki.style.width='0px';

            girlsText.innerHTML='';
            sayoriText.innerHTML='';
            natsukiText.innerHTML='';
            yuriText.innerHTML='';
            

            sectionMonika.style.height='auto';
            sectionMonika.style.width='auto';
            
            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height='800px',
                girlsM[i].style.width='auto';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height='0px',
                girlsS[i].style.width='0px';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height='0px',
                girlsN[i].style.width='0px';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height='0px',
                girlsY[i].style.width='0px';
            };

        }, 600)
    });

    monika.addEventListener('mouseenter', function(){
        monika.style.animationName='slideToRightMonika';
        monika.style.animationDuration='.5s';
        monika.style.animationFillMode='backwards';
    });
    
    monika.addEventListener('animationend', function(){
        monikaText.innerHTML=monikaText1;
        monikaText.style.animationName='fadeIn';
        monikaText.style.animationDuration='2.5s';
        monikaText.style.animationFillMode='backwards';
        monikaText.style.width='40%';
        monika.style.marginTop='-38.4px';
    });

    chibiSayori.addEventListener('click', function(){
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/sayoribg.png)';

        setTimeout(function(){
            contentMain.style.animationName='fadeIn';
            
            sectionGirls.style.height='0px';
            sectionGirls.style.width='0px';

            sectionMonika.style.height='0px';
            sectionMonika.style.width='0px';

            sectionYuri.style.height='0px';
            sectionYuri.style.width='0px';

            girlsText.innerHTML='';
            monikaText.innerHTML='';
            natsukiText.innerHTML='';
            yuriText.innerHTML='';

            sectionSayori.style.height='auto';
            sectionSayori.style.width='auto';

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height='0',
                girlsM[i].style.width='0';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height='0',
                girlsN[i].style.width='0';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height='0',
                girlsY[i].style.width='0';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height='800px',
                girlsS[i].style.width='auto';
            };           
        }, 600)
    });

    sayori.addEventListener('mouseenter', function(){
        sayori.style.animationName='slideToRightSayori';
        sayori.style.animationDuration='.5s';
        sayori.style.animationFillMode='backwards';
    });
    
    sayori.addEventListener('animationend', function(){
        sayoriText.innerHTML=sayoriText1;
        sayoriText.style.animationName='fadeIn';
        sayoriText.style.animationDuration='2.5s';
        sayoriText.style.animationFillMode='backwards';
        sayoriText.style.width='40%';
        sayori.style.marginTop='-38.4px';
    });

    chibiNatsuki.addEventListener('click', function(){
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/natsukibg.png)';

        setTimeout(function(){
            contentMain.style.animationName='fadeIn';
            
            sectionGirls.style.height='0px';
            sectionGirls.style.width='0px';

            sectionMonika.style.height='0px';
            sectionMonika.style.width='0px';

            sectionSayori.style.height='0px';
            sectionSayori.style.width='0px';

            sectionYuri.style.height='0px';
            sectionYuri.style.width='0px';

            girlsText.innerHTML='';
            monikaText.innerHTML='';
            sayoriText.innerHTML='';
            yuriText.innerHTML='';

            sectionNatsuki.style.height='auto';
            sectionNatsuki.style.width='auto';

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height='0px',
                girlsM[i].style.width='0px';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsS[i].style.height='0px',
                girlsS[i].style.width='0px';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height='800px',
                girlsN[i].style.width='auto';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height='0',
                girlsY[i].style.width='0';
            };
        }, 600)
    });

    natsuki.addEventListener('mouseenter', function(){
        natsuki.style.animationName='slideToRightNatsuki';
        natsuki.style.animationDuration='.5s';
        natsuki.style.animationFillMode='backwards';
    });
    
    natsuki.addEventListener('animationend', function(){
        natsukiText.innerHTML=natsukiText1;
        natsukiText.style.animationName='fadeIn';
        natsukiText.style.animationDuration='2.5s';
        natsukiText.style.animationFillMode='backwards';
        natsukiText.style.width='40%';
        natsuki.style.marginTop='-38.4px';
    });

    chibiYuri.addEventListener('click', function(){
        contentMain.style.animationName='fadeOut';
        contentMain.style.animationDuration='.5s';
        contentMain.style.animationFillMode='forwards';
        background.style.background = 'url(static/images/yuribg.png)';

        setTimeout(function(){
            contentMain.style.animationName='fadeIn';
            
            sectionGirls.style.height='0px';
            sectionGirls.style.width='0px';

            sectionMonika.style.height='0px';
            sectionMonika.style.width='0px';

            sectionNatsuki.style.height='0px';
            sectionNatsuki.style.width='0px';

            sectionSayori.style.height='0px';
            sectionSayori.style.width='0px';

            girlsText.innerHTML='';
            monikaText.innerHTML='';
            natsukiText.innerHTML='';
            sayoriText.innerHTML='';

            sectionYuri.style.height='auto';
            sectionYuri.style.width='auto';

            for (var i = 0; i < girlsM.length; i++){
                girlsM[i].style.height='0',
                girlsM[i].style.width='0';
            };

            for (var i = 0; i < girlsN.length; i++){
                girlsN[i].style.height='0',
                girlsN[i].style.width='0';
            };

            for (var i = 0; i < girlsS.length; i++){
                girlsM[i].style.height='0',
                girlsM[i].style.width='0';
            };

            for (var i = 0; i < girlsY.length; i++){
                girlsY[i].style.height='800px',
                girlsY[i].style.width='auto';
            };           
        }, 600)
    });

    yuri.addEventListener('mouseenter', function(){
        yuri.style.animationName='slideToRightYuri';
        yuri.style.animationDuration='.5s';
        yuri.style.animationFillMode='backwards';
    });
    
    yuri.addEventListener('animationend', function(){
        yuriText.innerHTML=yuriText1;
        yuriText.style.animationName='fadeIn';
        yuriText.style.animationDuration='2.5s';
        yuriText.style.animationFillMode='backwards';
        yuriText.style.width='40%';
        yuri.style.marginTop='-38.4px';
    });
    

    
    //Bounce

    girls.addEventListener('click', function(){
        bounce.style.animationName='bounce';
        bounce.style.animationDuration='.3s';
        bounce.style.animationFillMode='forwards';
        
        setTimeout(function(){
            bounce.style.animationName='';
        }, 1050);
    });

    monika.addEventListener('click', function(){
        for(var i = 0; i < bounce1.length; i++){
            bounce1[i].style.animationName='bounce',
            bounce1[i].style.animationDuration='.3s',
            bounce1[i].style.animationFillMode='forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce1.length; i++){
                bounce1[i].style.animationName='';
            };
        }, 1050);
    });

    sayori.addEventListener('click', function(){
        for(var i = 0; i < bounce1.length; i++){
            bounce1[i].style.animationName='bounce',
            bounce1[i].style.animationDuration='.3s',
            bounce1[i].style.animationFillMode='forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce1.length; i++){
                bounce1[i].style.animationName='';
            };
        }, 1050);
    });

    natsuki.addEventListener('click', function(){
        for(var i = 0; i < bounce1.length; i++){
            bounce1[i].style.animationName='bounce',
            bounce1[i].style.animationDuration='.3s',
            bounce1[i].style.animationFillMode='forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce1.length; i++){
                bounce1[i].style.animationName='';
            };
        }, 1050);
    });

    yuri.addEventListener('click', function(){
        for(var i = 0; i < bounce1.length; i++){
            bounce1[i].style.animationName='bounce',
            bounce1[i].style.animationDuration='.3s',
            bounce1[i].style.animationFillMode='forwards';
        };
       
        setTimeout(function(){
            for(var i = 0; i < bounce1.length; i++){
                bounce1[i].style.animationName='';
            };
        }, 1050);
    });

    monikaPoems.addEventListener('click', function(){
        //Code;
    });

    setTimeout(function(){
        background.style.filter='invert(100%)';
    }, 10000);
    
    setTimeout(function(){
        background.style.filter='invert(0%)';
    }, 10150);

};
