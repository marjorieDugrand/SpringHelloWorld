package uk.org.webcompere.springhelloworld.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uk.org.webcompere.springhelloworld.dao.UserDao;
import uk.org.webcompere.springhelloworld.model.User;

import java.util.ArrayList;
import java.util.List;

/**
 * Implementation of user service
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    @Transactional
    public List<User> getAllUsers() {
        return userDao.findAll();
    }

    @Override
    @Transactional
    public User findUser(Integer userId) {
        return userDao.find(userId);
    }

    @Override
    @Transactional
    public void save(User user) {
        userDao.save(user);
    }

    @Override
    @Transactional
    public void delete(Integer userId) {
        userDao.removeById(userId);
    }
}
