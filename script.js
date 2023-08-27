


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
function type2in(){
    typede("#typed-sample2","はずだったのだが。。。")
}
function type3in(){
    typede("#typed-sample3","国を　ほうかい　させるべく　4体の魔物が　国に侵入してきた　のだった")
}
function type4in(){
   typede("#typed-sample4","こうなったら　平和も何も　あったもんじゃない　きょうあくな　魔物は　すきかってに　あばれだし　芸付は　さながら　むほうちたいとなってしまった")
 
}
function type5in(){
    typede("#typed-sample5","そんなじゅうみんたちの　たったひとつのきぼうは　がくえんないにちらばらる　４つの封印スタンプだった　それさえあれば　ふたたび　平和をとりもどす　ことができるのだ　しかしどこに　まただれが　そのスタンプをさがしにいくのか？")
  
}
function type6in(){
    typede("#typed-sample6","みんながそうおもったとき　3にんの　ゆうきあるせんしがたちあがった！！　そのなを　ゆうしゃ　ヒーラー　魔法使い　\nはたしてかれらは　ぶじ　スタンプを　さがしだすことができるのであろうか？")

}
function type7in(){
    typede("#typed-sample7","3にんは　ふあんときぼうをむねにひめ　いま　たびだつことをけついした!　勇敢なるせんしたちよ　ぜひこの国をまもってくれ！！")


}











document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        

        // 質問5のボタンがクリックされた場合、結果を表示
        if (this.classList.contains("end")) {
            showResult();
        } else {
            // 質問の親要素を隠す
            const parentDiv = this.closest("div");
            console.log(parentDiv)
            parentDiv.style.display = "none";

            // 次の質問を表示
            const id = this.getAttribute("href");
            console.log(id)
            const nextQuestion = document.querySelector(id);
            nextQuestion.classList.add("fit");
            nextQuestion.style.display = "block";
            
        }
    });
});
