import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ThemeModule } from '@theme/theme.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';

import { BookDetailListComponent } from './detail/list/list.component';
import { BookDetailAddComponent } from './detail/add/add.component';
import { BookDetailDetailComponent } from './detail/detail/detail.component';


@NgModule({
  imports: [
    ThemeModule,
    BookRoutingModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    BookComponent,
    BookDetailListComponent,
    BookDetailAddComponent,
    BookDetailDetailComponent,
  ],
})
export class BookModule { }
