import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path:"",
  redirectTo:"",
  pathMatch:'full'
},
//  {path:"**",
 
// component:PageNotFoundComponent
// //  }
     // { path:'course',loadChildren:'./src/app/course/course.module#CourseModule'},
      { path: 'course',
      loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
      { path: 'contact-us',
      loadChildren: () => import('./staticpages/staticpages.module').then(m => m.StaticpagesModule) },
      {path:'register',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule )},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
