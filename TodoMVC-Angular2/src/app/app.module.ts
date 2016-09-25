import {NgModule} from '@angular/core'
// import {RouterModule} from "@angular/router";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {TodosComponent} from "./todos.component";
import {TodoService} from "./todo.service";

// import {Github} from "./github/shared/github";
// import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
// import {HttpModule} from "@angular/http";
// import {About} from './about/about';
// import {Home} from './home/home';
// import {RepoBrowser} from './github/repo-browser/repo-browser';
// import {RepoList} from './github/repo-list/repo-list';
// import {RepoDetail} from './github/repo-detail/repo-detail';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports     : [BrowserModule, routing],
  providers   : [TodoService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
