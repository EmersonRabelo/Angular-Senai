export class Vaga {

    id: Number = 0;
    nome: String = "";
    foto: String = "";
    descricao: String = "";
    salario: Number = 0;

    constructor(id: Number, nome: String, foto: String, descricao: String, salario: Number){
        this.id = id;
        this.nome= nome;
        this.foto = foto;
        this.descricao = descricao;
        this.salario = salario;
    }


}