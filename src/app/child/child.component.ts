import { Component, Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  count=0;
  @Input() add=''
  @Input() rst=''
  @Input() sub=''
  @Output() counter_task=new EventEmitter
  increment(){
    this.count+=1;
    this.counter_task.emit(this.count)
  }
  reset(){
    this.count=0;
    this.counter_task.emit(this.count)
  }
  decrement(){
    this.count-=1;
    this.counter_task.emit(this.count)
  }

}
