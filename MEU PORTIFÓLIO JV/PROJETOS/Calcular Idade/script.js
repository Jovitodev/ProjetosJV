function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.querySelector('#result')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Preencha os dados corretamente')
    } else {
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        let sex = document.getElementsByName('radSex')

        let idade = ano - fano.value

        if (sex[0].checked) {
            if (idade < 10) {
                res.innerHTML = `Um guri com seus ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/crianca.jpg')
            } else if (idade < 20) {
                res.innerHTML = `Um jovem guerreiro redpilado MonoLux m7 midlaner diamante de ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/adolescente.webp')

            } else if (idade < 60) {
                res.innerHTML = `Um verdadeiro macho alpha que lidera a sua alcateia para a vitória com seus ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/Adulto.jpg')

            } else if (idade < 100) {
                res.innerHTML = `Um idoso do sexo masculino de ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/idoso.jpg')
            } else if (idade < 10000) {
                res.innerHTML = `Você tem ${idade} anos. Mas nunca será ela <br>`
                img.setAttribute('src', 'img/imortal.webp')
            }




            res.appendChild(img)
        }
        else if (sex[1].checked) {
            if (idade < 10) {
                res.innerHTML = `Uma mini querida com ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/criancafemea.jpg')
            } else if (idade < 20) {
                res.innerHTML = `Uma linda quase mulher de ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/feminista.webp')

            } else if (idade < 60) {
                res.innerHTML = `Uma mulher empoderada com seus ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/mulheradulta.jpg')

            } else if (idade < 100) {
                res.innerHTML = `Uma querida vovó com seus ${idade} anos de idade <br>`
                img.setAttribute('src', 'img/idosam.jpg')
            } else if (idade < 10000) {
                res.innerHTML = `Você tem ${idade} anos. Mas nunca será ela <br>`
                img.setAttribute('src', 'img/imortal.webp')
            }




            res.appendChild(img)
        }

    }

}