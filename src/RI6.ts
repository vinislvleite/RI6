import * as readline from 'readline';
import Mensagens from './mensagens';
import Calculo from './calculo';
import Soma from './soma';
import Subtracao from './subtração';
import Multiplicacao from './multiplicação';
import Divisao from './divisão';
import Potencia from './potencia';
import Radiciacao from './radiciação';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens();

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let iniciar = () => {
    leitor.question(`Quais são os números e a operação desejada?\n`, (valor) => {
        let instrucoes = valor.split(' ');
        let n1 = Number(instrucoes[0]);
        let n2 = Number(instrucoes[1]);
        let operacao = instrucoes[2];

        if (instrucoes.length === 1) {
            operacao = instrucoes[0];
        }

        console.log(`Estas foram suas instruções: ${instrucoes}\n`);

        let calculo: Calculo;

        switch (operacao) {
            case 'Soma':
                calculo = new Soma();
                console.log(`O resultado da soma é ${calculo.calcular(n1, n2)}\n`);
                break;
            case 'Subtração':
                calculo = new Subtracao();
                console.log(`O resultado da subtração é ${calculo.calcular(n1, n2)}\n`);
                break;
            case 'Multiplicação':
                calculo = new Multiplicacao();
                console.log(`O resultado da Multiplicação é ${calculo.calcular(n1, n2)}\n`);
                break;
            case 'Divisão':
                calculo = new Divisao();
                console.log(`O resultado da Divisão é ${calculo.calcular(n1, n2)}\n`);
                break;
            case 'Potenciação':
                calculo = new Potencia();
                console.log(`O resultado da Potenciação é ${calculo.calcular(n1, n2)}\n`);
                break;
            case 'Radiciação':
                calculo = new Radiciacao();
                console.log(`O resultado da Radiciação é ${calculo.calcular(n1, n2)}\n`);
                break;
            case 'Bhaskara':
                if (instrucoes.length >= 4) {
                    let n3 = Number(instrucoes[2]);
                    let bhaskara = new Bhaskara();
                    let raizes = bhaskara.calcular(n1, n2, n3);
                    if (raizes.length === 0) {
                        console.log(`Não existem raízes reais para a equação\n`);
                    } else if (raizes.length === 1) {
                        console.log(`A raiz da equação é ${raizes[0]}\n`);
                    } else {
                        console.log(`As raízes da equação são ${raizes[0]} e ${raizes[1]}\n`);
                    }
                } else {
                    console.log(`Bhaskara precisa de 3 coeficientes: a, b, c\n`);
                }
                break;
            case 'Sair':
                console.log('Tchauuuu')
                break;
            default:
                console.log(`Operação não reconhecida: ${operacao}\n`);
        }
        leitor.close()
        if (operacao != 'Sair'){
            mensagens.comoUsar
            iniciar();
        }
    });
}

mensagens.boasVindas();
mensagens.comoUsar();
mensagens.listarOpcoes();
iniciar();