import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
{ path:"" , component: HomeComponent},
{ path:'category/:category/:id', component: SingleCategoryComponent},
{ path: 'post/:id', component: SinglePostsComponent},

{ path: 'about', component: AboutUsComponent}, 
{ path: 'terms-conditions',  component: TermsAndConditionsComponent},
{ path: 'contact' , component: ContactUsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
