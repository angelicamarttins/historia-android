function verificar(){
    var res = document.getElementById('res')
    var ano = document.getElementById('ano').value
    var sem = document.getElementsByName('semestre')
    var data = new Date
    var agora = data.getFullYear()
    res.style.textAlign = 'center'
    res.style.width = '50%'
    res.style.margin = 'auto'
    res.style.paddingBottom = '1.5em'
    if (ano.length == 0 || ano > agora){
        alert('ERRO! O ano digitado não pode ficar em branco e nem ser maior que o ano atual.')
    } else if (sem[0].checked) {
        if (ano < 2009){
            res.innerHTML = `A primeira versão do Android foi lançada em 2009. Portanto, em ${ano} não havia nenhum sistema Android nos dispositivos disponíveis no mercado.`
        } else if (ano == 2009) {
            res.innerHTML = `No primeiro semestre de ${ano}, saíram duas versões do Android: em 27 de abril de ${ano}, surgiu a versão 1.5 chamada Cupcake e, em 15 de setembro de ${ano}, surgiu a versão 1.6 denominada Donut. Você possivelmente usou uma delas.`
        } else if (ano == 2010) {
            res.innerHTML = `No primeiro semestre de ${ano} a versão 2.2 do Android, chamada Froyo, foi lançada em 20 de maio. Você possivelmente usou essa versão.`
        } else if (ano == 2011) {
            res.innerHTML = `No primeiro semestre de ${ano} a versão 3.0 do Android, chamada Honeycomb, foi lançada em 22 de fevereiro. Você possivelmente usou essa versão.`
        } else if (ano == 2012) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 09 de julho: a Jelly Bean, versão 4.1. Você possivelmente usou essa versão.`
        } else if (ano == 2013) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 31 de outubro: a KitKat, versão 4.4. Você possivelmente usou essa versão.`
        } else if (ano == 2014) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 25 de junho: a Lolipop, versão 5.0. Você possivelmente usou essa versão.`
        } else if (ano == 2015) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 02 de outubro: a Marshmallow, versão 6.0. Você possivelmente usou essa versão.`
        } else if (ano == 2016) {
            res.innerHTML = `No primeiro semestre de ${ano}, nenhuma versão do Android foi lançada. Apenas no segundo semestre de ${ano}, duas versões foram lançadas: em 22 de agosto, a versão 7.0, chamada Nougat e, em 04 de outubro, a versão 8.0, denominada Oreo.`
        } else if (ano == 2017 || ano == 2018) {
            res.innerHTML = `Em ${ano}, a versão 9 do Android foi lançada em 21 de agosto: a Pie. Você possivelmente usou essa versão.`
        } else if (ano == 2019) {
            res.innerHTML = `Em ${ano}, a 10ª versão do Android foi lançada em 03 de setembro. Porém, a partir desta versão, o Android deixou de ser nomeado com nomes de doces. Você possivelmente usou essa versão.`
        } else if (ano == 2020) {
            res.innerHTML = `Em ${ano}, a 11ª versão do Android foi lançada em 08 de setembro. Porém, a partir da 10ª versão, o Android deixou de ser nomeado com nomes de doces. Você possivelmente está usando essa versão.`
        } else if (ano == 2021) {
            res.innerHTML = `Em ${ano}, a 12ª versão do Android foi lançada em 18 de maio. Porém, a partir da 10ª versão, o Android deixou de ser nomeado com nomes de doces. Você possivelmente usará essa versão em breve.` 
        }  
    } else {
        if (ano < 2009){
            res.innerHTML = `A primeira versão do Android foi lançada em 2009. Portanto, em ${ano} não havia nenhum sistema Android nos dispositivos disponíveis no mercado.`
        } else if (ano == 2009) {
            res.innerHTML = `No primeiro semestre de ${ano}, saíram as duas versões do Android. Já no segundo semestre, a versão 3.0, chamada Eclair, foi lançada em 23 de outubro. Você possivelmente usou essa versão.`
        } else if (ano == 2010) {
            res.innerHTML = `Além da versão 2.2, no segundo semestre de ${ano}, a versão 2.3 do Android, chamada Gingerbread, foi lançada em 06 de dezembro. Você possivelmente usou essa versão.`
        } else if (ano == 2011) {
            res.innerHTML = `Além da versão 2.2, no segundo semestre de ${ano}, a versão 4.0 do Android, chamada Ice Cream Sandwich, foi lançada em 19 de outubro. Você possivelmente usou essa versão.`
        } else if (ano == 2012) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 09 de julho: a Jelly Bean, versão 4.1. Você possivelmente usou essa versão.`
        } else if (ano == 2013) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 31 de outubro: a KitKat, versão 4.4. Você possivelmente usou essa versão.`
        } else if (ano == 2014) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 25 de junho: a Lolipop, versão 5.0. Você possivelmente usou essa versão.`
        } else if (ano == 2015) {
            res.innerHTML = `Em ${ano}, apenas uma versão do Android foi lançada em 02 de outubro: a Marshmallow, versão 6.0. Você possivelmente usou essa versão.`
        } else if (ano == 2016) {
            res.innerHTML = `No primeiro semestre de ${ano}, nenhuma versão do Android foi lançada. Apenas no segundo semestre de ${ano}, duas versões foram lançadas: em 22 de agosto, a versão 7.0, chamada Nougat e, em 04 de outubro, a versão 8.0, denominada Oreo.`
        } else if (ano == 2017 || ano == 2018) {
            res.innerHTML = `Em ${ano}, a versão 9 do Android foi lançada em 21 de agosto: a Pie. Você possivelmente usou essa versão.`
        } else if (ano == 2019) {
            res.innerHTML = `Em ${ano}, a 10ª versão do Android foi lançada em 03 de setembro. Porém, a partir desta versão, o Android deixou de ser nomeado com nomes de doces. Você possivelmente usou essa versão.`
        } else if (ano == 2020) {
            res.innerHTML = `Em ${ano}, a 11ª versão do Android foi lançada em 08 de setembro. Porém, a partir da 10ª versão, o Android deixou de ser nomeado com nomes de doces. Você possivelmente está usando essa versão.`
        } else if (ano == 2021) {
            res.innerHTML = `Em ${ano}, a 12ª versão do Android foi lançada em 18 de maio. Porém, a partir da 10ª versão, o Android deixou de ser nomeado com nomes de doces. Você possivelmente usará essa versão em breve.`
        } 
    }    
}