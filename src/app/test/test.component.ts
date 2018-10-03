import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { TestService } from '../test.service';
import { People } from '../people';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  peoples:People[];
  hasEdit: boolean = false;

  profileForm = this.fb.group({
    aliases: this.fb.array([
      this.fb.control(this.peoples)
    ])
  });
  constructor(private testService: TestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.getList();
  }
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  getList() {
   this.testService.getList().subscribe(peoples => this.peoples = peoples);
  }

  onEdit() {
    this.hasEdit = true;
    this.aliases.push(this.fb.control(''));
  }
}
