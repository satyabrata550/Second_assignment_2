import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SquaresComponent extends Component {
    @action
    handleValue(val){
       let id=val
       if(this.Winner){
        alert(`${this.Winner} already won the match`)
        return
       }
 
       if(this.previousValue === "O"){
        this.previousValue="X"
        this.fututeValue="O"
      }else{
        this.previousValue="O"
        this.fututeValue="X"
      }
      this.inputArr[id]=this.previousValue
      this.inputArr=[...this.inputArr]


       //find who won
       //row
       for (let i = 0; i < 9; i += 3) {
        if((this.inputArr[i] == this.inputArr[i+1]) && (this.inputArr[i+1] == this.inputArr[i+2]) &&
            (this.inputArr[i] == this.inputArr[i+2] ) &&(this.inputArr[i]!="")){
              this.Winner=this.inputArr[i]
        } 
       }
       //column
       for (let i = 0; i < 3; i++) {
        if( (this.inputArr[i]  == this.inputArr[i+3])  &&  (this.inputArr[i+3] == this.inputArr[i+6]) &&
            (this.inputArr[i] == this.inputArr[i+6]) && (this.inputArr[i]!="")){
              this.Winner=this.inputArr[i]
        } 
        }
       //diagonal
       if((this.inputArr[0] == this.inputArr[4] )&&  (this.inputArr[4] ==this.inputArr[8]) &&
         (this.inputArr[0] ==this.inputArr[8])){
             this.Winner=this.inputArr[0]
       }
       if((this.inputArr[2] == this.inputArr[4]) && (this.inputArr[2] == this.inputArr[6]) &&
         (this.inputArr[4] == this.inputArr[6])){
           this.Winner=this.inputArr[2]
       }

       if( (this.inputArr[0] =="X" || this.inputArr[0] =="O" ) &&
           (this.inputArr[1] =="X" || this.inputArr[1] =="O" ) &&
           (this.inputArr[2] =="X" || this.inputArr[2] =="O" ) &&
           (this.inputArr[3] =="X" || this.inputArr[3] =="O" ) &&
           (this.inputArr[4] =="X" || this.inputArr[4] =="O" ) &&
           (this.inputArr[5] =="X" || this.inputArr[5] =="O" ) &&
           (this.inputArr[6] =="X" || this.inputArr[6] =="O" ) &&
           (this.inputArr[7] =="X" || this.inputArr[7] =="O" ) &&
           (this.inputArr[8] =="X" || this.inputArr[8] =="O" ) && (this.Winner =="")){
           this.draw=true
       }

    } 

    @tracked previousValue="O"
    @tracked fututeValue="X"
    @tracked draw=false
   
    @tracked inputArr =["","","","","","","","",""]

    @tracked Winner="";
}