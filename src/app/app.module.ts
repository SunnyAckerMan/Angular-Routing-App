import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent,
    SinglePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'posts',
        component: PostListComponent,
      },
      {
        path: 'post/:id/:title',
        component: SinglePostComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
