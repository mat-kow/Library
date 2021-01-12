package pl.teo.lib.service;

import pl.teo.lib.entities.Author;

public interface AuthorService {
    Author getById(Long id);
    void deleteById(Long id);
    Author save(Author author);
}
