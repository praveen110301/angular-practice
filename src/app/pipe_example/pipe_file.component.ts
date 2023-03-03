import { Component } from "@angular/core";

@Component({
    selector: 'app-pipe_file',
    templateUrl: './pipe_file.component.html',

})

export class PipeFileComponent {
    name: string = 'praveen singh'
    genderValue: string = ''
    genderof(value: string) {
        this.genderValue = value
    }
}