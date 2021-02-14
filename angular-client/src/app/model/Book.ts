import {Author} from './Author';
import {Category} from './Category';

export class Book {
  constructor(
    public id: number,
    public title: string,
    public authors: Author[],
    public category: Category,
  ) {
  }
}
