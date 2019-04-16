const japanese_menu = document.getElementById("japanese_menu");
const programming_menu = document.getElementById("programming_menu");
const art_menu = document.getElementById("art_menu");
const music_menu = document.getElementById("music_menu");
const daily_menu = document.getElementById("daily_menu");
const all_posts = document.getElementsByTagName("article");

function showSpecificPosts(post_type){
	for (let i = 0; i < all_posts.length; i++) {
			if (all_posts[i].className === post_type)
			{
				all_posts[i].hidden = false;
			}
			else
			{
				all_posts[i].hidden = true;
		}
	}
}

japanese_menu.addEventListener("click", function(){
	showSpecificPosts("japanese");
});

programming_menu.addEventListener('click', function(){
	showSpecificPosts("programming");
});

art_menu.addEventListener('click', function(){
	showSpecificPosts("art");
});

daily_menu.addEventListener('click', function() {
	showSpecificPosts("daily");
});

music_menu.addEventListener('click', function(){
	showSpecificPosts("music");
});