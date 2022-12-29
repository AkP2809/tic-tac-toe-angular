import { Component } from '@angular/core';

//Toastr service
import { ToastrService } from "ngx-toastr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';

  winningMsg : string = '';
  crossTurn : boolean = false;
  board : string[] = new Array(9).fill('empty');

  constructor(private toastr : ToastrService) {
  }
  
  handleClick = (idx : number) => {

    if(this.winningMsg) {
      return this.toastr.info(this.winningMsg);
    }

    if(this.board[idx] === 'empty') {
      this.board[idx] = (this.crossTurn ? 'cross' : 'circle');

      this.crossTurn = !this.crossTurn;
    } else {
      return this.toastr.warning("This tile has already been selected!");
    }

    this.checkWinner();
  }

  checkWinner = () => {
    if(this.board[0] !== 'empty' && this.board[0] === this.board[1] && this.board[1] === this.board[2]) {
      this.winningMsg = "Congratulations " + `${this.board[0]}` + ", You have won";
    } else if(this.board[3] !== 'empty' && this.board[3] === this.board[4] && this.board[4] === this.board[5]) {
      this.winningMsg = "Congratulations " + `${this.board[3]}` + ", You have won";
    } else if(this.board[6] !== 'empty' && this.board[6] === this.board[7] && this.board[7] === this.board[8]) {
      this.winningMsg = "Congratulations " + `${this.board[6]}` + ", You have won";
    } else if(this.board[0] !== 'empty' && this.board[0] === this.board[3] && this.board[3] === this.board[6]) {
      this.winningMsg = "Congratulations " + `${this.board[0]}` + ", You have won";
    } else if(this.board[1] !== 'empty' && this.board[1] === this.board[4] && this.board[4] === this.board[7]) {
      this.winningMsg = "Congratulations " + `${this.board[1]}` + ", You have won";
    } else if(this.board[2] !== 'empty' && this.board[2] === this.board[5] && this.board[5] === this.board[8]) {
      this.winningMsg = "Congratulations " + `${this.board[2]}` + ", You have won";
    } else if(this.board[0] !== 'empty' && this.board[0] === this.board[4] && this.board[4] === this.board[8]) {
      this.winningMsg = "Congratulations " + `${this.board[0]}` + ", You have won";
    } else if(this.board[2] !== 'empty' && this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
      this.winningMsg = "Congratulations " + `${this.board[2]}` + ", You have won";
    }
  }

  resetBoard = () => {
    this.winningMsg = '';
    this.crossTurn = false;

    //resetting the boards values
    for(let i = 0; i < 9; ++i) 
      this.board[i] = 'empty';
  }
}
