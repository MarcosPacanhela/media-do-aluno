function media(){
    let nomealuno = document.getElementById('nomealuno').value
    let not1 = parseInt(document.getElementById('not1').value)
    let not2 = parseInt(document.getElementById('not2').value)
    let res = document.getElementById('res')
    
    if( nomealuno.length == ''){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let mediaaluno = (not1 + not2)/2
        res.innerHTML = `Calculando a média final de ${nomealuno} <br>
        As notas obitidas foram ${not1} e ${not2} <br>
        A média final é ${mediaaluno} <br>
        A mensagem que temos é: <b>Meus parabéns!</b>`

    }
}