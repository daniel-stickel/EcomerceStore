import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private products: Array<ProductType> = [
    {
        id: 1,
        imagem: 'https://share.google/images/gfkl5WwRihEqcpVKy',
        nome: 'Super Mario Word',
        console: 'Super Nintendo',
        descricao: 'Lançado no dia 21 de novembro de 1990, no Japão, Super Mario World foi o símbolo de uma geração de ouro dos videogames. A fantástica aventura de Mario pela terra dos dinossauros, que marcou o surgimento do Super Nintendo, levou fantasia, diversão e desafio para os jogadores que se deixaram levar pela magia da Nintendo e encararam a inesquecível jornada de um encanador em busca de sua amada princesa.',
        preco: 59.90
    },
    {
        id: 2,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ign.com%2Fgames%2Fdonkey-kong-country%2Fvideos&psig=AOvVaw3hsdMSMeWB3PVswRh1OL_F&ust=1761656778794000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIivk4e5xJADFQAAAAAdAAAAABAJ",
        nome: "Donk Kong Country",
        console: "Super Nintendo",
        descricao: "Donkey Kong Country é um jogo de plataforma 2D que se destaca por sua jogabilidade, gráficos revolucionários para a época e trilha sonora memorável. O jogo, lançado originalmente para Super Nintendo em 1994, apresenta o protagonista Donkey Kong e seu parceiro Diddy Kong em uma aventura por nove mundos para recuperar o estoque de bananas roubado pelo vilão Rei K. Rool e seus Kremlings. A jogabilidade inclui fases com elementos de plataforma clássica, segmentos com carrinhos de mineração, barris e aliados animais, além de coletáveis como bananas, letras K-O-N-G e balõe",
        preco: 49.90
    },
    {
        id: 3,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.killscreen.com%2Fthe-forgotten-politics-behind-contras-name%2F&psig=AOvVaw2aKnkmj74-zcIyNNO9ZHEn&ust=1761657133169000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICrm7W6xJADFQAAAAAdAAAAABAK",
        nome: "Contra", 
        console:"Nintendinho, Mega Drive, Dynavision, ...",
        descricao: "É uma série de jogos eletrônicos de plataforma (Shoot 'em up) criados pela Konami em 1987. Enquanto que os primeiros jogos da série foi lançada para arcade, a série ganhou maior popularidade devido aos lançamentos de seus jogos para consoles, especialmente os títulos criados para o Nintendo Entertainment System (NES).As fases são variadas, alternando scroll horizontal e vertical e até fases em pseudo 3D. A principio parece uma guerra normal, mas nas fases mais adiantadas o cenário vai se tornando bizarro e alienígena",
        preco: 39.90
    },
    {
        id: 4,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FRock_%2526_Roll_Racing&psig=AOvVaw3qfg73fDDGii4VKH3LllMZ&ust=1761657452747000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICl0sq7xJADFQAAAAAdAAAAABAE",
        nome: "Rock in Roll Racing",
        console: "Super Nintendo",
        descricao: "Rock N' Roll Racing é um jogo eletrônico de corrida e de combate de veículos que possui um estilo único para um jogo de 1993. Desenvolvido pela Blizzard Entertainment (que na época se chamava Silicon & Synapse) e publicado pela Interplay, o grande forte do jogo é a trilha sonora no estilo rock n' roll, o que adiciona mais emoção às corridas, ultrapassagens e principalmente a batidas "que acontecem em excesso no decorrer das fases". Outro destaque é o estilo batalha que acompanha as corridas com tiros e bombas voando para todos os lados. O game foi portado para o Game Boy Advance em 2003",
        preco: 49.90
    },
    {
        id: 5,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FResident-Directors-Original-Americano-Completo%2Fdp%2FB00000I1BY&psig=AOvVaw3qh4i1OAfpebmRysStQUkZ&ust=1761657723941000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC-kcy8xJADFQAAAAAdAAAAABAE",
        nome: "Resident Evil",
        console: "Play Station",
        descricao: "Resident Evil, conhecido no Japão como Biohazard, é um jogo eletrônico de survival horror lançado originalmente para Playstation. É o primeiro título da série de jogos Resident Evil. O enredo segue Chris Redfield e Jill Valentine, membros de uma força-tarefa de elite conhecida como S.T.A.R.S., enquanto investigam os arredores da cidade de Raccoon City após o desaparecimento de seus membros de equipe. Eles logo ficam presos em uma mansão infestada por zumbis e outros monstros. O jogador, tendo escolhido jogar como Chris ou Jill no início do jogo, deve explorar a mansão para descobrir seus segredos e encontrar uma maneira de escapar.",
        preco: 69.90
    }
    {
        id: 6,
        imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FTwisted_Metal&psig=AOvVaw1CglabTF-woDlT7p-8WWMq&ust=1761658014735000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDM_9y9xJADFQAAAAAdAAAAABAE",
        nome: "Twisted Metal",
        console: "Play Station",
        descricao: "Twisted Metal é um jogo eletrônico de combate de veículos. Ele foi desenvolvido pela SingleTrac e publicado pela Sony, e lançado em 1995 para PlayStation. Vendendo cerca de 1,12 milhões de unidades, Twisted Metal foi relançado em 1998, sendo colocado na coletânea do PlayStation Greatest Hits ao lado de Twisted Metal 2, assim como todos da série.",
        preco: 69.90
    }
  ];

  public getProducts(): Array<ProductType> {
    return this.products;
  }
  public getprodutoId(id: number): any {
    return this.products.find((item: ProductType) => item.id == id);
  }
}

export interface ProductType {
  id: number;
  imagem: string;
  nome: string;
  console: string;
  descricao: string;
  preco: number;
}
