class Atleta {
  constructor(nome,idade,peso,altura,notas){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  calculaCategoria(){
    if(this.idade <= 11 && this.idade >= 9){
      return "Infantil";
    }
    else if(this.idade <= 13){
      return "Juvenil";
    }
    else if(this.idade <=15 ){
      return "Intermediário";
    }
    else if(this.idade <= 30){
      return "Adulto"
    }
    else{
      return "Sem categoria"
    }
  }
  calculaIMC(){
    return this.peso/(this.altura*this.altura);
  }
  ObterAltura(){
    return this.altura;
  }
  
  
  ObterMediaValida(){
    let notasGeral = this.notas;
        let notasOrganizadas = notasGeral.sort(function compara(a, b) {
            if (a == b) return 0;
            if (a < b) return -1;
            if (a > b) return 1;
        });


        let notasComputadas = notasOrganizadas.slice(1, 4)

        let somaNotasComputadas = notasComputadas.reduce(function (total, atual) {
            return total + atual
        }, 0)

        let media = (somaNotasComputadas / notasComputadas.length).toFixed(2);

        return media;
  }
  obterNome(){
    return this.nome;
  }
  obterIdade(){
    return this.idade;
  }
  obterNotas(){
    return this.notas.join(", ");
  }
  obterPeso(){
    return this.peso;
  }
}

let a = new Atleta("Cesar Abascal",
30, 80, 1.70,
[10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: "+a.obterNome()+"\nIdade: "+a.obterIdade()+"\nCategoria: "+a.calculaCategoria()+"\nPeso: "+a.obterPeso()+"\nAltura: "+a.ObterAltura()+
"\nIMC: "+a.calculaIMC()+"\nNotas: "+a.obterNotas()+"\nMédia: "+a.ObterMediaValida());