import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId:any
  datau:any

  constructor(private Activatedroute: ActivatedRoute,private ds:DataService) {

    this.userId =
    this.Activatedroute.snapshot.queryParamMap.get('userid') || 0;
    this.ds.getoneuser(this.userId).subscribe((data) => (this.datau = data));
   }

  ngOnInit(): void {
  }


  

}
