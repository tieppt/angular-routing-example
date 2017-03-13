import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExamRoutingModule
  ],
  declarations: [ExamComponent, ExamDetailComponent, ExamListComponent]
})
export class ExamModule { }
