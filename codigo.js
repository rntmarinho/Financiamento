const calcular = document.getElementById('calcular');

function financiamento ()
{
    const rendamensal = document.getElementById('rendamensal').value;
    const valordobem = document.getElementById('valordobem').value;
    const entrada = document.getElementById('entrada').value;
    const juros = document.getElementById('juros').value;
    const prestacoes = document.getElementById('prestacoes').value;
    const resultado = document.getElementById('resultado');

    if (rendamensal !== '' && valordobem !== '' && entrada !== '' && juros !== '' && prestacoes != '')
    {
     

        const divisaoJuros = (juros/ 100);
        const PMT = valordobem*(1+ divisaoJuros) ** prestacoes * (divisaoJuros) / ((1 + divisaoJuros) ** prestacoes - 1);
        var porcentagemrenda = (rendamensal * 0.3);
        var PMTparaCalculo = PMT.toFixed();

        if(porcentagemrenda < PMTparaCalculo){ 
        resultado.textContent = `Seu financiamento foi negado.`;
        }
        else{
        const PMTFormatado = PMT.toFixed(2);
        resultado.textContent = `Financiando R$ ${Financiamento} em ${Parcelas} vezes, 
        com o juros de ${juros}%, você irá pagar R$ ${PMTFormatado} por mês. `;
        }

    }
   
    else
    {
        resultado.textContent = ` Para calcular o resultado, nenhum campo pode estar em branco! `;
    }
}

calcular.addEventListener('click', financiamento); 
