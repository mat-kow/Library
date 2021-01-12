package pl.teo.lib.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.teo.lib.entities.Author;

public interface AuthorRepo extends JpaRepository<Author, Long> {
}
