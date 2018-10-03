import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
        MatListModule, MatInputModule, MatIconModule,
        MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule,
            MatInputModule, MatIconModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatListModule,
            MatInputModule, MatIconModule, MatCardModule],
})
export class CustomMaterialModule { }
