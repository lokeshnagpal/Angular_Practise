import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
    selector: 'rb-recipe-new',
   template: `
     <div>{{param}}</div>
   `
})

export class RecipeNew{
    private subscription: Subscription;
    private param:string;
    constructor(private route: ActivatedRoute){
        this.subscription = this.route.queryParams.subscribe(
         (queryParam:any) => this.param = queryParam['analytics']
        )
    }
}

