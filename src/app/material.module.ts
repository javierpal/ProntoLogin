import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MaterialComponents = [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
];

@NgModule({
    imports: [...MaterialComponents],
    exports: [...MaterialComponents]
})
export class MaterialModule { }