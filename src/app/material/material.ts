import { NgModule } from '@angular/core';
// tslint:disable-next-line: max-line-length
import {MatButtonModule, MatTableModule, MatSortModule, MatToolbarModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatListModule, MatCardModule, MatSidenavModule, MatSelectModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';


const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatTableModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatSidenavModule,
  MatSelectModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule { }