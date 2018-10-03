import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { TestService } from '../test.service';
import { People } from '../people';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  peoples: People[];
  hasEdit = false;
  items: FormArray;
  peopleForm = this.fb.group({
    items: this.fb.array([
      this.fb.control([ this.createItem(name) ])
    ])
  });
  hasRemoved = false;

  constructor(private testService: TestService, private fb: FormBuilder, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cross.svg'));
  }
  createItem(name): FormGroup {
    return this.fb.group({
      name: name
    });
  }
  ngOnInit() {
    this.getList();
  }


  getList() {
   this.testService.getList().subscribe(peoples => this.peoples = peoples);
  }

  onEdit() {
    this.hasEdit = true;
    this.items = this.peopleForm.get('items') as FormArray;
    this.addToItems();
  }

  addToItems() {
    const items = <FormArray>this.peopleForm.controls.items;
    items.controls = [];
    this.peoples.forEach(element => {

      this.items.push(this.createItem(element.name));
    });
  }

  onRemove(index) {
    this.testService.removePeople(index).subscribe(peoples => this.addToItems());
    this.hasRemoved = true;
  }

  onUpdate() {
    this.hasEdit = false;
    this.testService.updatePeople(this.peopleForm.value).subscribe(peoples => {
      this.peoples = peoples;
    });
  }

  onCancel() {
    this.hasEdit = false;
  }
}
