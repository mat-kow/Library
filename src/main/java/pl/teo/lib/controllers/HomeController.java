package pl.teo.lib.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @RequestMapping({"home", ""})
    public String sayHello() {
        return "<h1>Hello World!</h1>";
    }

}
