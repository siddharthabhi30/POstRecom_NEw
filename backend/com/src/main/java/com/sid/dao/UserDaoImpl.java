package com.sid.dao;



import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.sid.model.Comment;
import com.sid.model.Post;
import com.sid.model.User;




@Repository("userDao")
public class UserDaoImpl implements UserDao{

	@PersistenceContext
	private EntityManager entityManager;
	
	
	@Override
	public User readuserById(String userName) {
		System.out.println("till here dao");
		return entityManager.find(User.class, userName);
	}


	@Override
	public List<Post> getAllPosts() {
		String jpql ="Select p from Post p";
		System.out.println("is there");
		TypedQuery<Post> tquery = entityManager.createQuery(jpql, Post.class);
		return tquery.getResultList();
	}


	@Override
	@Transactional(propagation = Propagation.MANDATORY)
	public Post updatePost(Post post) {
		Post post1=entityManager.find(Post.class, post.getPostId());
		post=entityManager.merge(post1);
		return post;
	}


	@Override
	@Transactional(propagation = Propagation.MANDATORY)
	public String addPost(Post post) {
		entityManager.persist(post);
		return "true";
	}


	@Override
	public Post readPostById(String postid) {
		return entityManager.find(Post.class, postid);
	}


	@Override
	@Transactional(propagation = Propagation.MANDATORY)
	public void updateUser(User user) {
		entityManager.merge(user);
		
	}


	@Override
	public List<User> getAllUsers() {
		String jpql ="Select u from User u";
		System.out.println("checking users");
		TypedQuery<User> tquery = entityManager.createQuery(jpql, User.class);
		return tquery.getResultList();
	}


	@Override
	public List<Post> getPostsByUser(String emailId) {
		String jpql ="Select p from Post p where p.user.userName=:userName";
		System.out.println("checking users");
		TypedQuery<Post> tquery = entityManager.createQuery(jpql, Post.class);
		tquery.setParameter("userName", emailId);
		return tquery.getResultList();
	}


	@Override
	public List<Comment> getComment(String postid) {
		String jpql ="Select c from Comment c where c.post.postId=:postId";
		System.out.println("checking comments");
		TypedQuery<Comment> tquery = entityManager.createQuery(jpql, Comment.class);
		tquery.setParameter("postId", postid);
		return tquery.getResultList();
	}

}
