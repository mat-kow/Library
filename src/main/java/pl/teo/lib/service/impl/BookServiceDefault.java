package pl.teo.lib.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.teo.lib.entities.Book;
import pl.teo.lib.exception.ResourceNotFoundException;
import pl.teo.lib.repository.BookRepo;
import pl.teo.lib.service.BookService;

import java.util.List;

@Service
public class BookServiceDefault implements BookService {
    private final BookRepo bookRepo;

    @Autowired
    public BookServiceDefault(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    @Override
    public Book getById(Long id) {
        return bookRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
    }

    @Override
    public void deleteById(Long id) {
        bookRepo.deleteById(id);
    }

    @Override
    public Book save(Book book) {
        return bookRepo.save(book);
    }

    @Override
    public List<Book> getAll() {
        return bookRepo.findAll();
    }
}
