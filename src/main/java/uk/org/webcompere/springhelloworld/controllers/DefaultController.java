package uk.org.webcompere.springhelloworld.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import uk.org.webcompere.springhelloworld.model.User;
import uk.org.webcompere.springhelloworld.service.UserService;

@Controller
@RequestMapping( "/" )
public class DefaultController {
    @Autowired
    private UserService userService;

    @RequestMapping( method = { RequestMethod.GET } )
    public ModelAndView get( ) {

        ModelAndView modelAndView = new ModelAndView("index");
        modelAndView.addObject("users", userService.getAllUsers());
        return modelAndView;
    }

    @RequestMapping( value = "newuser", method = { RequestMethod.GET } )
    public ModelAndView newUser( ) {

        ModelAndView modelAndView = new ModelAndView("user");
        modelAndView.addObject("user", new User());
        return modelAndView;
    }

}