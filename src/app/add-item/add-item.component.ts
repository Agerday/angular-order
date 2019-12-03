import {Component, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from '../item.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup;
  item: Item;

  constructor(private itemService: ItemService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit(): void {
    this.itemForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      amountOfStock: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    this.itemService.addItem(this.itemForm.value);
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
