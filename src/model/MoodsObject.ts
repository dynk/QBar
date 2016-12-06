export class MoodsObject{
  moodsList:  Array<{moodId: number, image: string, title: string, subtitle: string}>;;
  constructor(){

  }

  // teste RDNS - insercao de imagens
  getMoods(){
    this.moodsList = [
        { moodId: 1, image: "img/test/test_1.png", title: 'Rock na veia', subtitle: 'Night of Rock' },
        { moodId: 2,image: "img/test/test_2.png", title: 'Tunts Tunts', subtitle: 'Aquela balada com a turma' },
        { moodId: 3,image: "img/test/test_3.png", title: 'Pagode ousadia', subtitle: 'Pagodinho com a galera' },
        { moodId: 4,image: "img/test/test_4.png", title: 'Sertanejo', subtitle: 'Para os apaixonados' },
        { moodId: 5,image: "img/test/test_5.png", title: 'A luz de velas', subtitle: 'Jantar romantico' },
        { moodId: 6,image: "img/test/test_6.png", title: 'Fome de Leao', subtitle: 'Sair para comer com muita fome' }
      ];

      return this.moodsList;
  }
}
