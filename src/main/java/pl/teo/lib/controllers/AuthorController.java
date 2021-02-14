package pl.teo.lib.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.teo.lib.entities.Author;
import pl.teo.lib.service.AuthorService;

import java.util.List;

@RestController
@RequestMapping("/api/author")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthorController {
    private final AuthorService authorService;

    @Autowired
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping("/{id}")
    public Author getAuthor(@PathVariable Long id) {
        return authorService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteAuthor(@PathVariable Long id) {
        authorService.deleteById(id);
    }

    @PostMapping()
    public Author addAuthor(@RequestBody Author author) {
        return authorService.save(author);
    }

    @PutMapping("/{id}")
    public boolean editAuthor(@PathVariable Long id, @RequestBody Author author) {
        if (id.equals(author.getId())) {
            authorService.save(author);
            return true;
        }
        return false;
    }

    @GetMapping()
    public List<Author> getAll() {
        return authorService.getAll();
    }
}
