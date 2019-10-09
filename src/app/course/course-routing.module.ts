import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';


const routes: Routes = [
  {path:'',component:CourseListComponent,

  children: [
    { path:'course/:id', component: CourseDetailComponent },
    // { path: '', component: CustomerListComponent }
  ]}
  // {path:'course/:id',component:CourseDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
