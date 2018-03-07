import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Test Recipe',
    'This is a sample recipe',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4jOG1_HeqOvuJpdPs2-efKZg4rlfuTWBUyE7dJYeHjAbd4Kzc'),
    new Recipe('Test Recipe 2',
    'This is second sample recipe',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jwf1Ei6VPl9kMvLK8nQO6Sco5wbQG6y0ih4bgY22jXvGgmat')
  ];

  constructor() { }

  ngOnInit() {
  }

}
