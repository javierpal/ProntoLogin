import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ContentService } from '../../shared/content/content.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ContentService],
})
export class MainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private contentService : ContentService) { }

  userEmail: String = null;

  ngOnInit() {
  }

  onGetUser() {
    this.contentService.getUser().subscribe((response: any) => {
      console.log(response);
      this.userEmail = response.email;
    }, (error) => {
      console.log(error);
      localStorage.setItem("token", null);
      this.goToLogin();
    });
  }

  onLogout(){
    localStorage.setItem("token", null);
    this.goToLogin();
  }

  goToLogin(){
    this.router.navigate(['/home']);
  }

}
