import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    messageFormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        subject: new FormControl('', Validators.required),
        message: new FormControl('', [
            Validators.required,
            Validators.minLength(20)
        ])
    });

    constructor(private snackBar: MatSnackBar) {}

    openMessageSnackBar() {
        this.snackBar.open('Bericht verzonden', 'Ok', {
             panelClass: ['message-snackbar']
            }
        );
    }
}
