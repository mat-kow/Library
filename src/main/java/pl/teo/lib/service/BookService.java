package pl.teo.lib.service;

import pl.teo.lib.entities.Book;

import java.util.List;

public interface BookService {
    Book getById(Long id);
    void deleteById(Long id);
    Book save(Book book);
    List<Book> getAll();
}
