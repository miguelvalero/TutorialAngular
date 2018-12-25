import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule } from '@angular/material';
import {NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule ({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule, MatTableModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSelectModule, MatTableModule, MatGridListModule]
})
export class MaterialModule {}
