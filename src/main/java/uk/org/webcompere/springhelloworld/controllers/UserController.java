package uk.org.webcompere.springhelloworld.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;
import uk.org.webcompere.springhelloworld.model.User;
import uk.org.webcompere.springhelloworld.service.UserService;

/**
 * Controller for the user object
 */
@Controller
@RequestMapping( "/user/" )
public class UserController {
	private static final String REDIRECT_TO_HOME = "redirect:/";
    @Autowired
    private UserService userService;

    @RequestMapping( value = "view/{userId}", method = { RequestMethod.GET } )
    public ModelAndView get( @PathVariable("userId") Integer userId) {

        User user = userService.findUser(userId);
        if (user!=null) {
            ModelAndView modelAndView = new ModelAndView("user");
            modelAndView.addObject("user", user);
            return modelAndView;
        } else {
            // show home page instead
            return new ModelAndView(REDIRECT_TO_HOME);
        }
    }

    @RequestMapping( value = "delete/{userId}", method = { RequestMethod.GET } )
    public ModelAndView delete( @PathVariable("userId") Integer userId) {

        userService.delete(userId);

        return new ModelAndView(REDIRECT_TO_HOME);
    }

    @RequestMapping( value = "save", method = { RequestMethod.POST } )
    public String saveUser( @ModelAttribute User user) {
        userService.save(user);
        return REDIRECT_TO_HOME;
    }
}
