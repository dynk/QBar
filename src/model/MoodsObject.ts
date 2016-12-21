export class MoodsObject{
  moodsList:  Array<{moodId: number, image: string, title: string, displayTitle: string, subtitle: string}>;;
  constructor(){

  }

  // teste RDNS - insercao de imagens
  getMoods(){
    this.moodsList = [
        { moodId: 1, image: "img/test/test_1.png", title: 'rock', displayTitle: 'Rock na veia', subtitle: 'Night of Rock' },
        { moodId: 2,image: "img/test/test_2.png", title: 'tunts', displayTitle: 'Tunts Tunts', subtitle: 'Aquela balada com a turma' },
        { moodId: 3,image: "img/test/test_3.png", title: 'pagode', displayTitle: 'Pagode ousadia', subtitle: 'Pagodinho com a galera' },
        { moodId: 4,image: "img/test/test_4.png", title: 'sertanejo', displayTitle: 'Sertanejo', subtitle: 'Para os apaixonados' },
        { moodId: 5,image: "img/test/test_5.png", title: 'samba', displayTitle: 'Samba', subtitle: 'Samba com sua turma' },
        { moodId: 6,image: "img/test/test_6.png", title: 'fome', displayTitle: 'Fome de Leao', subtitle: 'Sair para comer com muita fome' }
      ];

      return this.moodsList;
  }
}
