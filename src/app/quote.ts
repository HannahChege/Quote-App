export class Quote {
  public showDetails: boolean;
  upVoteFunction: Function;
  downVoteFunction: Function;

  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public person: string,
    public upVotes: number,
    public downVotes: number,
    public dateCreated: Date) {
      upVotes=0;
      downVotes=0;
      this.upVoteFunction = function() {
        this.upVotes += 1;
      }
    
      this.downVoteFunction=function() {
          this.downVotes += 1;
        }
      this.showDetails = false;
  }
}
