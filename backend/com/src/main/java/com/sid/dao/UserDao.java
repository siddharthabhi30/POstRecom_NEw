package com.sid.dao;

import java.util.List;

import com.sid.model.Comment;
import com.sid.model.Post;
import com.sid.model.User;



public interface UserDao {
	public User readuserById(String userName);

	public List<Post> getAllPosts();

	public Post updatePost(Post post);

	public String addPost(Post post);

	public Post readPostById(String postid);

	public void updateUser(User user);

	public List<User> getAllUsers();

	public List<Post> getPostsByUser(String emailId);

	public List<Comment> getComment(String postid);
	
}
