var japanese_menu = document.getElementById("japanese_menu");
var programming_menu = document.getElementById("programming_menu");
var art_menu = document.getElementById("art_menu");
var music_menu = document.getElementById("music_menu");
var daily_menu = document.getElementById("daily_menu");

function showSpecificPosts(post_type){
	var i;
	var all_posts = document.getElementsByTagName("article");
	for (i = 0; all_posts.length; i++) {
		if (all_posts[i].className === post_type) {
 			all_posts[i].hidden = false;
		}
		else{
			all_posts[i].hidden = true;
		}	
	}
}
japanese_menu.addEventListener('click', () => {
	showSpecificPosts("japanese");
});
programming_menu.addEventListener('click', () => {
	showSpecificPosts("programming");
});

art_menu.addEventListener('click', () => {
	showSpecificPosts("art");
});

daily_menu.addEventListener('click', () => {
	showSpecificPosts("daily");
});

music_menu.addEventListener('click', () => {
	showSpecificPosts("music");
});
