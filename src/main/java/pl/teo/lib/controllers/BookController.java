package pl.teo.lib.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.teo.lib.entities.Author;
import pl.teo.lib.entities.Book;
import pl.teo.lib.entities.Category;
import pl.teo.lib.repository.BookRepo;

@RestController
public class BookController {
    private final BookRepo bookRepo;

//    @Autowired
    public BookController(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

//    @GetMapping("book")
//    public String addBook() {
//        Book book = new Book();
//        Author author = new Author();
//        author.setFirstName("George");
//        author.setLastName("Martin");
//        Category category = new Category();
//        category.setName("fantasy");
//        book.
//        bookRepo.save(book);
//        return book.getId().toString();
//    }
}
