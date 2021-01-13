package pl.teo.lib.service;

import pl.teo.lib.entities.Category;

public interface CategoryService {
    Category getById(Long id);
    void deleteById(Long id);
    Category save(Category category);

}
