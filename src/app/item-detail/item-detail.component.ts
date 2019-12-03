import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ItemService} from '../item.service';
import {Location} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item: Item;
  itemForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private itemService: ItemService) {
  }

  ngOnInit() {
    this.getItem();
    this.itemForm = this.getFormGroup();
  }

  getFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      amountOfStock: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.itemService.updateItem(this.itemForm.value);
    this.router.navigate(['/items']);
  }

  get name() {
    return this.itemForm.get('name');
  }

  get description() {
    return this.itemForm.get('description');
  }

  get price() {
    return this.itemForm.get('price');
  }

  get amountOfStock() {
    return this.itemForm.get('amountOfStock');
  }
}
