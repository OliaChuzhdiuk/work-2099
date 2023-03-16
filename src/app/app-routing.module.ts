import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardHeroComponent } from './card-hero/card-hero.component';
import { FilterComponent } from './filter/filter.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
{path: '', component: FilterComponent,},
{path: 'card', component: CardHeroComponent },
{path: 'info/:id', component: InfoComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}



