package pl.teo.lib.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.teo.lib.entities.Book;

public interface BookRepo extends JpaRepository<Book, Long> {

}
