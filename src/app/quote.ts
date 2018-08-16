export class Quote {
  public showDetails: boolean;
  upVoteFunction: Function;
  downVoteFunction: Function;

  constructor(public id: number,public quote: string,public author: string,public person: string, public upVotes: number,public downVotes: number,public dateCreated: Date){
    this.showDetails = false;
  }
}