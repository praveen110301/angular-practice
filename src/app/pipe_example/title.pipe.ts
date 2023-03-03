import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'giveTitle',
})

export class GiveTitlePipe implements PipeTransform {
    transform(value: string, gender: string): string {
        if (gender == 'male') {
            // value = "Mr." + value
            return "Mr. " + value;
        }
        else {
            // value = "Mrs" + value
            return "Miss. " + value;
        }
    }
}