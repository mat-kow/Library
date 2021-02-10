package pl.teo.lib.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.teo.lib.entities.Book;
import pl.teo.lib.service.BookService;

import java.util.List;

@RestController
@RequestMapping("/api/book")
@CrossOrigin(origins = "http://localhost:4200")
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }
    @GetMapping("/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable Long id) {
        bookService.deleteById(id);
    }

    @PostMapping()
    public Book addBook(@RequestBody Book book) {
        return bookService.save(book);
    }

    @PutMapping("/{id}")
    public boolean editBook(@PathVariable Long id, @RequestBody Book book) {
        if (id.equals(book.getId())) {
            bookService.save(book);
            return true;
        }
        return false;
    }

    @GetMapping()
    public List<Book> getAll() {
        return bookService.getAll();
    }


}
