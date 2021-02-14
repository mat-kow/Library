import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.categoryService.getAll().subscribe(c => this.categories = c);
  }

  addCategory(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.categoryService.save({ name } as Category)
      .subscribe(c => {
        this.categories.push(c);
      });  }
}
