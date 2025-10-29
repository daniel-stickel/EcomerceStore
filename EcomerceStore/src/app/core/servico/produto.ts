import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoServico {
  private produto: Array<ProdutoTipo> = [
    {
        id: 1,
        imagem: 'https://jogoveio.com.br/wp-content/uploads/2016/11/4928-super-mario-world-cover-front--418x350.jpg',
        nome: 'Super Mario Word',
        console: 'Super Nintendo',
        descricao: 'Lançado no dia 21 de novembro de 1990, no Japão, Super Mario World foi o símbolo de uma geração de ouro dos videogames. A fantástica aventura de Mario pela terra dos dinossauros, que marcou o surgimento do Super Nintendo, levou fantasia, diversão e desafio para os jogadores que se deixaram levar pela magia da Nintendo e encararam a inesquecível jornada de um encanador em busca de sua amada princesa.',
        preco: 59.90
    },
    {
        id: 2,
        imagem: "https://assets-prd.ignimgs.com/2025/02/15/dkcsnes-1739578170756.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80",
        nome: "Donk Kong Country",
        console: "Super Nintendo",
        descricao: "Donkey Kong Country é um jogo de plataforma 2D que se destaca por sua jogabilidade, gráficos revolucionários para a época e trilha sonora memorável. O jogo, lançado originalmente para Super Nintendo em 1994, apresenta o protagonista Donkey Kong e seu parceiro Diddy Kong em uma aventura por nove mundos para recuperar o estoque de bananas roubado pelo vilão Rei K. Rool e seus Kremlings. A jogabilidade inclui fases com elementos de plataforma clássica, segmentos com carrinhos de mineração, barris e aliados animais, além de coletáveis como bananas, letras K-O-N-G e balõe",
        preco: 49.90
    },
    {
        id: 3,
        imagem: "https://www.vgdb.com.br/gf/fotos/games/media_10775/contra--10775.jpg",
        nome: "Contra", 
        console:"Nintendinho, Mega Drive, Dynavision, ...",
        descricao: "É uma série de jogos eletrônicos de plataforma (Shoot 'em up) criados pela Konami em 1987. Enquanto que os primeiros jogos da série foi lançada para arcade, a série ganhou maior popularidade devido aos lançamentos de seus jogos para consoles, especialmente os títulos criados para o Nintendo Entertainment System (NES).As fases são variadas, alternando scroll horizontal e vertical e até fases em pseudo 3D. A principio parece uma guerra normal, mas nas fases mais adiantadas o cenário vai se tornando bizarro e alienígena",
        preco: 39.90
    },
    {
        id: 4,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/7/7f/Rock_N%27_Roll_Racing.jpg",
        nome: "Rock in Roll Racing",
        console: "Super Nintendo",
        descricao: "Rock N' Roll Racing é um jogo eletrônico de corrida e de combate de veículos que possui um estilo único para um jogo de 1993. Desenvolvido pela Blizzard Entertainment (que na época se chamava Silicon & Synapse) e publicado pela Interplay, o grande forte do jogo é a trilha sonora no estilo rock n' roll, o que adiciona mais emoção às corridas, ultrapassagens e principalmente a batidas que acontecem em excesso no decorrer das fases. Outro destaque é o estilo batalha que acompanha as corridas com tiros e bombas voando para todos os lados. O game foi portado para o Game Boy Advance em 2003",
        preco: 49.90
    },
    {
        id: 5,
        imagem: "https://m.media-amazon.com/images/I/817WQVAXeXL._AC_SL1500_.jpg",
        nome: "Resident Evil",
        console: "Play Station",
        descricao: "Resident Evil, conhecido no Japão como Biohazard, é um jogo eletrônico de survival horror lançado originalmente para Playstation. É o primeiro título da série de jogos Resident Evil. O enredo segue Chris Redfield e Jill Valentine, membros de uma força-tarefa de elite conhecida como S.T.A.R.S., enquanto investigam os arredores da cidade de Raccoon City após o desaparecimento de seus membros de equipe. Eles logo ficam presos em uma mansão infestada por zumbis e outros monstros. O jogador, tendo escolhido jogar como Chris ou Jill no início do jogo, deve explorar a mansão para descobrir seus segredos e encontrar uma maneira de escapar.",
        preco: 69.90
    },
    {
        id: 6,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/d/dd/Twisted_Metal_2.jpg",
        nome: "Twisted Metal",
        console: "Play Station",
        descricao: "Twisted Metal é um jogo eletrônico de combate de veículos. Ele foi desenvolvido pela SingleTrac e publicado pela Sony, e lançado em 1995 para PlayStation. Vendendo cerca de 1,12 milhões de unidades, Twisted Metal foi relançado em 1998, sendo colocado na coletânea do PlayStation Greatest Hits ao lado de Twisted Metal 2, assim como todos da série.",
        preco: 69.90
    }
  ];

  public getProduto(): Array<ProdutoTipo> {
    return this.produto;
  }
  public getProdutoId(id: number): any {
    return this.produto.find((item: ProdutoTipo) => item.id == id);
  }
}

export interface ProdutoTipo {
  id: number;
  imagem: string;
  nome: string;
  console: string;
  descricao: string;
  preco: number;
}
