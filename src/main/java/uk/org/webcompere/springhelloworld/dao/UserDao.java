package uk.org.webcompere.springhelloworld.dao;

import com.googlecode.genericdao.dao.hibernate.GenericDAO;
import uk.org.webcompere.springhelloworld.model.User;

/**
 * Access to the User in the database
 */
public interface UserDao extends GenericDAO<User, Integer> {
    User findByUserName(String username);

    User findByLoginCredentials(String username, String password);

}