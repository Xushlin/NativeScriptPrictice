import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { Router } from "@angular/router";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";
@Component({
  selector: "Login",
  moduleId: module.id,
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  user: User;
  isLoading = false;
  isLoggingIn = true;
  constructor(private router: Router, private userService: UserService, private page: Page) {
    this.user = new User();
    this.user.email = "my.test.account@nativescript.org";
    this.user.password = "mypassword";
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.isLoading = true;
    this.userService.login(this.user).subscribe(() => {
      this.router.navigate(["/list"]);
      this.isLoading = false;
    },
      (error) => {
        alert("Unfortunately we could not find your account.");
        this.isLoading = false;
      }
    );

  }

  signUp() {
  this.isLoading = true;
    this.userService.register(this.user).subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
        this.isLoading = false;
      },
      () => {
        alert("Unfortunately we were unable to create your account.");
        this.isLoading = false;
      }
    );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}