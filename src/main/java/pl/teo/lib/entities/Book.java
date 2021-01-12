package pl.teo.lib.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity @Data
public class Book {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @OneToMany
    private List<Author> authors;
    @OneToOne
    private Category category;
}
