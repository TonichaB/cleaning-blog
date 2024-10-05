from django.contrib import admin
from django.urls import path, include
from core.views import home, about, contact
from blog.views import blog, top_posts, get_popular_posts, user_post_detail, user_posts_api, create_post_view, edit_post, delete_post, like_post, my_posts
from comments.views import add_comment, load_comments
from users.views import register_view, login_view, logout_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'), # Home Page
    path('about/', about, name='about'), # About Page
    path('contact/', contact, name='contact'), # Contact Page
    path('blog/', blog, name='blog'), # Blog Page
    path('top-posts/', top_posts, name='top_posts'),
    path('get-popular-posts/', get_popular_posts, name='get_popular_posts'),
    path('user-posts-api/', user_posts_api, name='user_posts_api'),
    path('user-post-detail/<int:post_id>/', user_post_detail, name='user_post_detail'),
    path('register/', register_view, name='register'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('my-posts/', my_posts, name='my_posts'),
    path('create-post/', create_post_view, name='create_post'),
    path('edit-post/<int:post_id>/', edit_post, name='edit_post'),
    path('delete-post/<int:pk>/', delete_post, name='delete_post'),
    path('like-post/', like_post, name='like_post'),
    path('load-comments/<int:post_id>/', load_comments, name='load_comments'),
    path('add-comment/<int:post_id>/', add_comment, name='add_comment'),
] + static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])
