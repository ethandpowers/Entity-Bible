import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EastonResultComponent } from './Components/easton-result/easton-result.component';
import { EastonComponent } from './Components/easton/easton.component';
import { EntityResultComponent } from './Components/entity-result/entity-result.component';
import { EntitySearchComponent } from './Components/entity-search/entity-search.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ResourcesComponent } from './Components/resources/resources.component';

const routes: Routes = [
  { path: 'easton', component: EastonComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: '',   component: HomeComponent, pathMatch: 'full' },
  { path: 'easton-result', component: EastonResultComponent },
  { path: 'entity-search', component: EntitySearchComponent },
  { path: 'entity-result', component: EntityResultComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
