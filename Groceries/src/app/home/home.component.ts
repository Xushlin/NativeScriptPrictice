import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    onButtonTap(){
        console.log("this is a button");
        this.router.navigate(["/login"]);
    }
}
