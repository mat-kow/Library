package pl.teo.lib.service;

import pl.teo.lib.entities.Category;

import java.util.List;

public interface CategoryService {
    Category getById(Long id);
    void deleteById(Long id);
    Category save(Category category);

    List<Category> getAll();
}
