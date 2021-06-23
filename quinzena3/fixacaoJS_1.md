```salario = 2000
    if(qtdeCarrosVendidos !== 0) {
        let precoCarro = valorTotalVendas / qtdeCarrosVendidos
        let comissao = qtdeCarrosVendidos * (100 + precoCarro * 0.05)
        let salarioFinal = comissao + salario
        return salarioFinal
    } else {
        return salario
    }
}```