import {Component, OnInit} from '@angular/core';

import { BaAppPicturePipe } from '../../../../theme/pipes/index';
import { MenusService } from './menus.service';
import { CommonLinkComponent,LinkModel } from './../../../../theme/components/index';

@Component({
  moduleId: module.id,
  selector: 'witdor-menus',
  directives:[CommonLinkComponent],
  providers: [MenusService],
  pipes: [BaAppPicturePipe],
  styles:[require('./menus.scss')],
  template: require('./menus.html')
})
export class MenusComponent implements OnInit {


  links:LinkModel[]=[];
  currentId:number = 0;

  smartTableData:Array<any>;

  constructor(private menuService:MenusService) {
    this.smartTableData = menuService.smartTableData;
  }

  ngOnInit() {
  }


  showOperate(id:number):void {
    this.currentId = id;
    if(this.links.length<=0){
      this.links=[
        {
          linkUrl: "/update",
          icon: "ion-information",
          className: "btn-success"
        }, {
          linkUrl: "/delete",
          icon: "ion-nuclear",
          className: "btn-danger"
        }
      ]
    }
  }


  hideOperate():void {
    this.currentId = 0;
  }
}