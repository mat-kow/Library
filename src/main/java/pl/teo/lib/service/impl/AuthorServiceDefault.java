package pl.teo.lib.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.teo.lib.entities.Author;
import pl.teo.lib.exception.ResourceNotFoundException;
import pl.teo.lib.repository.AuthorRepo;
import pl.teo.lib.service.AuthorService;

import java.util.List;

@Service
public class AuthorServiceDefault implements AuthorService {
    private final AuthorRepo authorRepo;

    @Autowired
    public AuthorServiceDefault(AuthorRepo authorRepo) {
        this.authorRepo = authorRepo;
    }

    @Override
    public Author save(Author author) {
        return authorRepo.save(author);
    }

    @Override
    public List<Author> getAll() {
        return authorRepo.findAll();
    }

    @Override
    public void deleteById(Long id) {
        authorRepo.deleteById(id);
    }

    @Override
    public Author getById(Long id) {
        return authorRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
    }
}
