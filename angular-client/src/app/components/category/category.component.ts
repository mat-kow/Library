import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../model/Category';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category;
  showingEdit = false;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.get(id).subscribe(c => this.category = c);
  }

  delete(): void {
    this.categoryService.delete(this.category.id).subscribe(_ => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  showEdit(): void {
    this.showingEdit = true;
  }

}
