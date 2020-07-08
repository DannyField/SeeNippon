class BlogsController < ApplicationController

def index 
    blogs = Blog.all
    render json: blogs
end

def show
    render json: @blog
end


end
