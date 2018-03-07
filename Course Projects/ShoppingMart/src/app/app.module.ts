import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { ShoppinglistComponent } from './shopping-list/shopping-list.component';
import { ShoppingeditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipelistComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeitemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipedetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
