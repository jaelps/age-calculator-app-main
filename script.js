var d = window.document.querySelector('#dia')
var m = document.querySelector('#mes')
var a = document.querySelector('#ano')
var formB = document.querySelector('.formulario')
var atual = new Date()
var dAno = atual.getFullYear()
var dMes = atual.getMonth()
var dDia = atual.getDate()

function calcular(){
    var dia = Number(d.value)
    var mes = Number(m.value)
    var ano = Number(a.value)

    if (dia > 0 && mes > 0 && ano > 0){
        var nDia = String((d.value).length)
        var nMes = String((m.value).length)
        var nAno = String((a.value).length)

        if (nDia == 2 && dia <= 30 && nMes == 2 && mes <=12 && nAno == 4 && ano <= 2023){
            d.style = 'border-color: var(--Light-grey)'
            m.style = 'border-color: var(--Light-grey)'
            a.style = 'border-color: var(--Light-grey)'
            window.document.querySelector('label.tMes').style = 'color: var(--Smokey-grey)'
            window.document.querySelector('label.tMes').style = 'color: var(--Smokey-grey)'
            window.document.querySelector('label.tAno').style = 'color: var(--Smokey-grey)'



            var calculoAno = (dAno - ano)
            alert(calculoAno)
            var resAnos = document.querySelector('.resAnos')
            resAnos.innerHTML = `${calculoAno}`

            var calculoMes = Math.abs((mes - 12)+12)
            alert(calculoMes)
            var resMes = document.querySelector('.resMeses')
            resMes.innerHTML = `${calculoMes}`


            if(ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
                var calculoDias = parseInt(Math.abs((366 / 12) * calculoMes))
                var resDias = document.querySelector('.resDias')
                resDias.innerHTML = `${calculoDias}`
            } else {
                var calculoDias = parseInt(Math.abs((365 / 12) * calculoMes))
                var resDias = document.querySelector('.resDias')
                resDias.innerHTML = `${calculoDias}`
            }

            
        } else {

            if (dia > 30 && mes > 12 && ano > 2023){
                d.style = 'border-color: var(--Light-red)'
                window.document.querySelector('label.tDia').style = 'color: var(--Light-red)'
                m.style = 'border-color: var(--Light-red)'
                window.document.querySelector('label.tMes').style = 'color: var(--Light-red)'
                a.style = 'border-color: var(--Light-red)'
                window.document.querySelector('label.tAno').style = 'color: var(--Light-red)'
            } else {
                if (dia > 30){
                    d.style = 'border-color: var(--Light-red)'
                    window.document.querySelector('label.tDia').style = 'color: var(--Light-red)'
                    var erroDia = document.querySelector('.formularioDia')
                    erroDia.innerHTML += 'Favor informar dia valido'
                } else if (mes > 12){
                    m.style = 'border-color: var(--Light-red)'
                    window.document.querySelector('label.tMes').style = 'color: var(--Light-red)'
                    var erroMes = document.querySelector('.formularioMes')
                    erroMes.innerHTML += 'Favor informar mes valido'
                } else if (ano > 2023) {
                    a.style = 'border-color: var(--Light-red)'
                    window.document.querySelector('label.tAno').style = 'color: var(--Light-red)'
                    var erroAno = document.querySelector('.formularioAno')
                    erroAno.innerHTML += 'Favor informar ano valido'
                }
            }
         
        }
    } else {
        alert('errado')
    }
}