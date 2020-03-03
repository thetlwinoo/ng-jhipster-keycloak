import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddressTypesService } from 'src/app/shared/services/address-types.service';
import { IAddressTypes } from 'src/app/shared/model/address-types.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  addressTypes: IAddressTypes[];

  constructor(private addressTypesService: AddressTypesService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.addressTypesService.query().subscribe((res: HttpResponse<IAddressTypes[]>) => {
      this.addressTypes = res.body;
    });
  }
}
