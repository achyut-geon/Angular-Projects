import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe:Recipe
  @Output() SelectedRecipe = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit() {
  }
  onRecipeClick(recipe:Recipe)
  {
    this.SelectedRecipe.emit(recipe)
  }
}
