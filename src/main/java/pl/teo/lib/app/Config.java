package pl.teo.lib.app;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "pl.teo.lib.repository")
@Configuration
public class Config {
}
