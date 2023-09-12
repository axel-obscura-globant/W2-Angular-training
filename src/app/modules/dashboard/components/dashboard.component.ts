import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: { id: number; name: string; } | undefined

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
      this.user = {
        id: this.route.snapshot.params['id'],
        name: this.route.snapshot.params['name'],
      }
  }
}
