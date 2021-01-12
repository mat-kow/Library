package pl.teo.lib.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.teo.lib.entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Long> {
}
