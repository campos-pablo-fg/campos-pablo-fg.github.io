const japanese_menu = document.getElementById("japanese_menu");
const programming_menu = document.getElementById("programming_menu");
const art_menu = document.getElementById("art_menu");
const music_menu = document.getElementById("music_menu");
const daily_menu = document.getElementById("daily_menu");
const all_posts = document.getElementsByTagName("article");
const post_values = Object.values(all_posts);
const main_wrap = document.getElementById("Main");
let good_post_array = [];

sortPost(post_values);

function sortPost(array){

	array.sort(function(a, b) {
    return new Date(b.children[1].getAttribute("datetime")) - new Date(a.children[1].getAttribute("datetime"));
	});
	for(const order_post of array)
	{
		main_wrap.appendChild(order_post);
	}
}

function showSpecificPosts(post_type){
	good_post_array = [];
	for (const post of post_values) {
		if(post.className === post_type){
			good_post_array.push(post);
			main_wrap.removeChild(post);
			post.hidden = false;
		}
		else{
			post.hidden = true;
		}
	}
	sortPost(good_post_array);
}

japanese_menu.addEventListener("click", function(){
	//sortPost();
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