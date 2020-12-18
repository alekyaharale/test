import {Component, OnInit} from '@angular/core';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  ngOnInit() {
  }

  public chartType:string='line';

  public chartDatasets:Array<any> = [

    {data: [28, 48, 40, 19, 86, 27, 90], label: 'My First dataset' }

  ];

  public chartLabels:Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public chartColors:Array<any> = [

    {
      backgroundColor:  'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    }

  ];

  public chartOptions:any= {
    responsive:true
  };

  public chartClicked(e:any):void {}

  public chartHovered(e:any):void {}
}
