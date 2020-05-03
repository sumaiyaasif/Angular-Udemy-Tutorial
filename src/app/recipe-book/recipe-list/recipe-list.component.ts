import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: 'recipe-list.component.html',
    styleUrls: ['recipe-list.component.css']
})

export class RecipeListComponent implements OnInit{

    recipes :Recipe[] = [
        new Recipe('A test recipe', "this is simply a test", "https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/2:1/w_880,c_limit/chocolate-chip-cookie.jpg?mbid=social_retweet"), 
        new Recipe('Anoter recipe', "this is TWO a test", "https://assets.bonappetit.com/photos/5ca534485e96521ff23b382b/2:1/w_880,c_limit/chocolate-chip-cookie.jpg?mbid=social_retweet") 
 
    ];

    constructor() {

    }

    ngOnInit() {

    }
}