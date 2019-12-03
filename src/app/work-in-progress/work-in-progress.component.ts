import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.scss']
})
export class WorkInProgressComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/items']);
    }, 5000);
  }

}
