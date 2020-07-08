class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]

  def index 
    blogs = Blog.all
    render json: blogs
  end

  def show
    render json: @blog
  end

  def create 
    Blog.create(blog_params)
    render json: "Blog Post Created", status: 201
  end

  def update 
    @blog.update(blog_params)
    render json: "Blog updated", status: 200
  end

  def destroy 
    @blog.destroy 
    render json: "Blog removed", status: 200
  end 

  private
  def blog_params
    params.require(:blog).permit(:title, :description, :image, :city, :prefecture, :tipOne, :tipTwo, :tipThree)
  end

  def set_blog
    @blog = Blog.find(params[:id])
  end
end
