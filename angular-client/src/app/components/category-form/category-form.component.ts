import {Component, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../model/Category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Input() model = new Category(-1, '');
  @Input() @Output() categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.categoryService.save(this.model).subscribe(c => this.categories.push(c));
  }

}
