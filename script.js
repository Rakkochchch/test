


function typede(typedeid,type_name){

    var typed = new Typed(typedeid, {
    strings: [type_name,],	
    typeSpeed: 50,
    backSpeed: 0,
    startDelay: 1000,
    loop: false,
    smartBackspace: true,
    });
    
    
    }


typede("#typed-sample","ここは　平和で　明るい国　きょうも　ゆかいな仲間たちが　たのしくせいかつをしている")
typede("#typed-sample2","はずだったのだが。。。")
typede("#typed-sample3","国を　ほうかい　させるべく　4体の魔物が　国に侵入してきた　のだった")

typede("#typed-sample5","こうなったら　平和も何も　あったもんじゃない　\nきょうあくな　魔物は　すきかってに　あばれだし　芸付は　さながら　むほうちたいとなってしまった")
typede("#typed-sample6","そんなじゅうみんたちの　たったひとつのきぼうは　がくえんないにちらばらる　４つの封印のスタンプだった")
typede("#typed-sample7","それさえあれば　ふたたび　平和をとりもどす　ことができるのだ　しかしどこに　まただれが　そのスタンプをさがしにいくのか？")

typede("#typed-sample9","みんながそうおもったとき　3にんの　ゆうきあるせんしがたちあがった！！　そのなを　ゆうしゃ　ヒーラー　魔法使い　\nはたしてかれらは　ぶじ　スタンプを　さがしだすことができるのであろうか？")

typede("#typed-sample11","3にんは　ふあんときぼうをむねにひめ　いま　たびだつことをけついした　勇敢なるせんしたちよ　ぜひこの高校をまもってくれ！！")


document.addEventListener('DOMContentLoaded', function () {
    var mosaicInElement = document.querySelector('#mosaic-in');
    mosaicInElement.mosaicIn({
        duration: 1500,
        intervalFrame: 5
    });
});

$(document).ready(function () {
    $('#mosaic-in').mosaicIn({
        duration: 1500,
        intervalFrame: 5
    });
});

$(document).ready(function () {
    $('#member_in').mosaicIn({
        duration: 12000,
        intervalFrame: 5
    });
});


$(document).ready(function () {
    $('.img_loop',).mosaicIn({
        duration: 1200,
        intervalFrame: 5
    });
});


