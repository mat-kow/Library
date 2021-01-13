package pl.teo.lib.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.teo.lib.entities.Category;
import pl.teo.lib.exception.ResourceNotFoundException;
import pl.teo.lib.repository.CategoryRepo;
import pl.teo.lib.service.CategoryService;

@Service
public class CategoryServiceDefault implements CategoryService {
    private final CategoryRepo categoryRepo;

    @Autowired
    public CategoryServiceDefault(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    @Override
    public Category getById(Long id) {
        return categoryRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
    }

    @Override
    public void deleteById(Long id) {
        categoryRepo.deleteById(id);
    }

    @Override
    public Category save(Category category) {
        return categoryRepo.save(category);
    }
}
