import { Component ,Input,Output,EventEmitter} from "@angular/core";

@Component({
    selector:'employee-count',
    templateUrl:'./employeecount.component.html',
    styleUrls:['./employeecount.component.css']
})

export class EmployeeCountComponent {
    @Input() all:number;
    @Input() male:number; 
    @Input() female: number;

    selectedRadioButtonValue: string = 'All';

    @Output() countRadioButtonSelectionChanged :EventEmitter<string> = new EventEmitter<string>();

    onRadionButtonSelectionChaged()
    {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}