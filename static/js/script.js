window.onload = function () {
  setTimeout(function () {
    document.body.className = "";
  }, 100);

  let ddlcSong = new Audio("static/song/ddlcmusic.mpeg");
  ddlcSong.loop = true;
  ddlcSong.play();

  const texts = {
    girlsText:
      "Doki Doki Literature Club! é um jogo eletrônico de visual novel desenvolvida pela Team Salvato. Foi lançado em 22 de setembro de 2017 para Microsoft Windows, macOS, e Linux, e mais tarde em 6 de outubro para a Steam. A história segue um aluno do ensino médio que se junta ao Clube de Literatura da escola e interage com quatro garotas. O jogo apresenta uma história principalmente linear, com algumas cenas e finais alternativos dependendo das escolhas que o jogador faz. O jogo começa com você conhecendo Sayori, uma garota que você conhece como uma amiga de longa data",
    monikaText:
      "Monika é notada pelos outros personagens como inteligente, confiante e atlética. Ela não é tão falante quanto as outras garotas, mas isso está implícito para não ser uma escolha. Monika também é conhecida por ser popular, o que faz com que o protagonista tenha uma admiração por ela. Ela sempre tem uma expressão calma e gentil e é retratada como madura e trabalhadora. Monika já fazia parte do Debate Club, mas foi embora devido a toda a política e drama internos, destacando o desejo de ordem, liberdade de tópicos e simpatia. O Clube de Literatura, que ela fundou após deixar o Clube de Debate, é muito importante para ela. Ela aspira a ser um lugar para mostrar e aumentar a paixão de todos pela literatura.",
    sayoriText:
      "Sayori é retratada como uma garota Genki, expressando uma disposição faladora e alegre. Ela é muito desajeitada, conhecida por encontrar maneiras de se machucar acidentalmente ou largar as coisas. Monika observando que seus sentimentos são necessários para manter uma atmosfera relaxante no Clube da Literatura. Monika observa que, embora possa parecer uma boa líder, Sayori geralmente é melhor quando se trata de lidar com pessoas, principalmente em mediações. Sayori faz o possível para ajudar todos a serem felizes e não gosta da atenção direcionada ao seu bem-estar, porque se sente indigna de tudo o que os outros têm a oferecer. Sayori também é apresentado como o melhor amigo do personagem principal.",
    natsukiText:
      "Natsuki parece ser uma garota impetuosa, brusca, irritada e aparentemente arrogante no início, com um interior fofo e suave como resultado da insegurança, convencendo Monika para classificá-la como a personificação de uma tsundere. Enquanto ela é impulsiva e pode falar sem pensar, Natsuki realmente se importa com seus amigos e, mesmo quando ela tem óbvias questões de raiva, não gosta de brigas ou discussões com as pessoas. Ao longo do jogo, é mostrado que ela se preocupa com Yuri e, em uma ocasião, dá ao protagonista uma nota pedindo que ele ajude Yuri, temendo que se ela se manifestasse, isso causaria mais discussões. Natsuki é muito teimosa e tem dificuldade em expressar como se sente e o que quer. Quando desafiada repetidamente, ela geralmente se torna estranha, depois agressiva e simplesmente explode em lágrimas.",
    yuriText:
      "Yuri é retratada durante a maior parte do jogo como sendo tímida, generosa, educada, muito inteligente, madura, eloquente e apaixonada por tópicos pelos quais se interessa, embora ela também seja muito insegura. Sua fachada de passividade e tontura ocasionalmente quebra, no entanto, como Yuri discute apaixonadamente e agressivamente com Natsuki sobre suas opiniões divergentes sobre estilos de escrita. Yuri tem um profundo desejo de ser apreciada pelos outros e tem medo de falar o que pensa sobre assuntos, pois acredita que isso fará com que ela pareça improvável. Devido à sua inaptidão social, ela pode ser inocentemente insensível, mas uma vez que percebe o que disse ser considerado rude, quase imediatamente pede desculpas, repetidamente dizendo que não quis dizer isso. Como afirma o protagonista, Yuri gosta de pensar antes de dizer algo.",
    monikaglitchText: 
      "-9SIK98u-()dvU dWDWDWDU*WUWAEDERU#AUR$R(VMr$R#)@4I@) $R@ I05I B)%I#53)MI@)BMI 54i023IQ%$)23i5402B)I i 40m2$!$#!@%)(#@%*@#5823 5#)58 b S<$e2. 4,32pQLp4~2 $@Q,4^LÇ2q ,54q~pçLf^PEQlf,as~dç,. a .A>.a#P-0LK #a <#ap< okja #ak #)ak5 30Ak03kar%)#kak53A)k 3)ak A0k apLEKAoKR#r%a%#%q@k 3Kqa^$r#a ok#a% %3a%3k%#) %#)kaak ak#K3Ak 3A%rp#)k%tyklrdpyKL%yed&y <,D,D,5, D5,5ap#lk3AP5lk5KA3AkKAkp$ kak po 4#ok4 O#akOAk KOak oKOK -0i324r3q$%#Q$I3q %)$3iq%ibq#53Qi%#)q95V#qRTWT iw4b%¨$#i5w#$I%B3wI 53WI53Iwb5I#w b%i#w5I3WB%i3wI%3W%iW35 3WI53W5#w%i# W5bi#W%IB3w%I",
  };

  const girls = document.getElementById("girls");
  const text = document.getElementById("text");

  girls.onmouseover = () => {
    girls.classList.add("slideToRight");

    girls.onanimationend = (event) => {
      text.style.animation = "fadeIn 0.5s forwards";
      
      if (girls.getAttribute("src") == "static/images/girlsmain.png") {
        text.innerText = texts.girlsText;
      }
      
      event.stopPropagation();
    };
  };
  
  const main = document.querySelector("main");
  const bg = document.getElementById("bg");

  var handleExtension = "bg.png"
  function fade(girl) {
    main.classList.add("fadeOut");

    glitched == true && girl == "monikaglitch" ? 
    handleExtension = "bg.gif" : 
    handleExtension = "bg.png"

    setTimeout(() => {
      main.classList.remove("fadeOut");
      main.classList.add("fadeIn");


      bg.style.backgroundImage = `url(static/images/${girl + handleExtension})`;
      girls.src = `static/images/${girl + "main.png"}`;
      text.innerText = `${texts[girl + "Text"]}`;

      if (girls.getAttribute("src") == "static/images/girlsmain.png") {
        main.style.minHeight = "500px";
      } else {
        main.style.minHeight = "1000px";
      }
    }, 500);
  }

  const logo = document.getElementById("logo");
  const chibiMonika = document.getElementById("chibiMonika");
  const chibiSayori = document.getElementById("chibiSayori");
  const chibiNatsuki = document.getElementById("chibiNatsuki");
  const chibiYuri = document.getElementById("chibiYuri");

  logo.onclick = () => {
    fade("girls");
  };
  
  var monika;
  chibiMonika.onclick = () => {
    glitched == false ? 
    monika = "monika" : 
    monika = "monikaglitch"

    fade(monika);
  };

  chibiSayori.onclick = () => {
    fade("sayori");
  };

  chibiNatsuki.onclick = () => {
    fade("natsuki");
  };

  chibiYuri.onclick = () => {
    fade("yuri");
  };

  const girlsSection = document.getElementById("girlsSection");

  [logo, chibiMonika, chibiSayori, chibiNatsuki, chibiYuri].forEach((chibi) => {
    chibi.addEventListener("click", () => {
      setTimeout(() => {
        if (girls.getAttribute("src") == "static/images/girlsmain.png") {
          girlsSection.style.left = "0";
        } else {
          girlsSection.style.left = "150px";
        }
      }, 500);
    });
  });

  const girlsWrapper = document.getElementById("girlsWrapper");
  var counter = 0;
  var glitched = false;

  girlsWrapper.onclick = () => {
    if (girls.getAttribute("src") != "static/images/monikaglitchmain.png") {
      girlsWrapper.classList.add("bounce");
    }

    if (girls.getAttribute("src") == "static/images/monikamain.png") {
      counter += 1;

      if (counter == 6) {
        const glitchScreen = document.getElementById("glitchScreen");
        let glitch = new Audio("static/song/jscare.mp3");

        glitchScreen.style.display = "block";

        ddlcSong.pause();
        glitch.play();

        setTimeout(() => {
          glitchScreen.style.display = "none";
        }, 300);

        glitched = true;
        fade("monikaglitch");
      }
    }

    girlsWrapper.onanimationend = () => {
      girlsWrapper.classList.remove("bounce");
    };
  };

  girls.onmouseenter = () => {
    if (girls.getAttribute("src") == "static/images/monikaglitchmain.png") {
      girls.style.cursor = "not-allowed";
    } else {
      girls.style.cursor = "pointer";
    }
  };


};
