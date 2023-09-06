import { useState } from "react"
import { View, TextInput, Text, StyleSheet } from "react-native"
import Botao from "../Botao/Botao";


const Formulario = () => {

    const [pessoa, setPessoa] = useState({
        nome: "",
        altura: 0,
        peso: 0,
        imc: 0
    });

    const calculo = () => {
        let imc = parseFloat(pessoa.peso) / ((parseFloat(pessoa.altura) * 0.01) ** 2)

        setPessoa({...pessoa, imc: imc})
    }

    const voltar = () => {
        setPessoa({...pessoa, imc: 0})
    }

    const resetar = () => {
        setPessoa({nome: "", altura: 0, peso: 0, imc: 0})
    }

    const respostaIMC = () => {
        if(pessoa.imc < 18.5) {
            return 'Classificação: ( Abaixo do peso )'
        } else if (pessoa.imc >= 18.5 && pessoa.imc < 25) {
            return 'Classificação: ( Peso normal )'
        } else if (pessoa.imc >= 25 && pessoa.imc < 30) {
            return 'Classificação: ( Sobrepeso )'
        } else if (pessoa.imc >= 30 && pessoa.imc < 35) {
            return 'Classificação: ( Obesidade grau 1 )'
        } else if (pessoa.imc >= 35 && pessoa.imc < 40) {
            return 'Classificação: ( Obesidade grau 2 )'
        } else if (pessoa.imc > 40) {
            return 'Classificação: ( Obesidade grau 3 )'
        }
    }

    return (

        ((pessoa.imc == 0) ?

        <View>

            <View>
                <Text style={style.texto}>Nome</Text>
            </View>
            <View style={style.input}>
                <TextInput
                    placeholder="Nome"
                    value={pessoa.nome}
                    onChangeText={(e) => {setPessoa({...pessoa, nome: e})}}
                />
            </View>

            <View>
                <Text style={style.texto}>Altura (cm)</Text>
            </View>
            <View style={style.input}>
                <TextInput
                    placeholder="Ex. 170"
                    value={pessoa.altura}
                    onChangeText={(e) => {setPessoa({...pessoa, altura: e})}}
                    keyboardType="decimal-pad"
                />
            </View>

            <View>
                <Text style={style.texto}>Peso (Kg)</Text>
            </View>
            <View style={style.input}>
                <TextInput
                    placeholder="Ex. 70.0"
                    value={pessoa.peso}
                    onChangeText={(e) => {setPessoa({...pessoa, peso: e})}}
                    keyboardType="decimal-pad"
                />
            </View>
            
            <View>
                <Botao titulo="Calcular IMC" click={calculo}/>
            </View>
        </View>

        :

        <View>
            <Text style={style.resposta}>Olá {pessoa.nome}, seu IMC é {pessoa.imc.toFixed(2)}</Text>
            <Text style={style.resposta}>{respostaIMC()}</Text>
            <View>
                <Botao titulo="Voltar" click={voltar}/>
            </View>
            <View>
                <Botao titulo="Resetar" click={resetar}/>
            </View>
        </View>

        )
    )

}

const style = StyleSheet.create({
    texto: {
        color: '#000000',
        fontSize: 18
    },
    input: {
        borderColor: '#000000'
    },
    resposta: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000000',
        padding: 20
    }
})

export default Formulario