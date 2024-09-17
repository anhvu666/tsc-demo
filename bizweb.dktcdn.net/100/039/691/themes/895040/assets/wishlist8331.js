var Ego = {};
Ego.General = {
	init: function() {
		
		Ego.Wishlist.init();
		
	},
}


Ego.Wishlist = {
	init: function() {
		this.setWishlistProductLoop();
		Ego.Wishlist.wishlistProduct();
	},
	setWishlistProductLoop: function() {
		$('body').on('click', '.remove-wishlist', function(e) {
			Ego.Wishlist.removeWishlist($(this).attr('data-wish'));
		})
		$('body').on('click', '.setWishlist', function(e) {
			//debugger;
			e.preventDefault();
			if ($(this).hasClass('active')) {
				Ego.Wishlist.removeWishlist($(this).attr('data-wish'));
				var InfoText = 'Bạn vừa bỏ sản phẩm ra khỏi mục yêu thích.';
				InfoNoti(InfoText);
			} else {
				var phand = [];
				var handle = $(this).attr('data-wish');
				if (document.cookie.indexOf('ego_wishlist_products') !== -1) {
					var las = Cookies.getJSON('ego_wishlist_products');
					if ($.inArray(handle, las) === -1) {
						phand = [handle];
						for (var i = 0; i < las.length; i++) {
							phand.push(las[i]);
							if (phand.length > 100) {
								break;
							}
						}
						Cookies.set('ego_wishlist_products', phand, {
							expires: 15,
							sameSite: 'None',
							secure: true
						});
					}
				} else {
					phand = [handle];
					Cookies.set('ego_wishlist_products', phand, {
						expires: 15,
						sameSite: 'None',
						secure: true
					});
				}
				Ego.Wishlist.wishlistProduct();
				var SuccessText = "Bạn vừa thêm 1 sản phẩm vào mục yêu thích thành công bấm <a style='color:#2196f3' href='/san-pham-yeu-thich'>vào đây</a> để tới trang yêu thích";
				SuccessNoti(SuccessText);
			}
		})
	},
	wishlistProduct: function() {
		if ($('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').length > 0) {
			if (document.cookie.indexOf('ego_wishlist_products') !== -1) {
				$('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').html('')
				var last_wishlist_pro_array = Cookies.getJSON('ego_wishlist_products');
				Ego.Wishlist.activityWishlist();
				var recentview_promises = [];
				for (var i = 0; i < 100; i++) {
					if (typeof last_wishlist_pro_array[i] == 'string') {
						var promise = new Promise(function(resolve, reject) {
							$.ajax({
								url: '/products/' + last_wishlist_pro_array[i] + '?view=wish',
								async: false,
								success: function(product) {
									resolve({
										error: false,
										data: product
									});
								},
								error: function(err) {
									if (err.status === 404) {
										try {
											var u = ((this.url.split('?'))[0]).replace('/products/', '');
											resolve({
												error: true,
												handle: u
											});
										} catch (e) {
											resolve({
												error: false,
												data: ''
											})
										}
									} else {
										resolve({
											error: false,
											data: ''
										});
									}
								}
							})
						});
						recentview_promises.push(promise);

					}
				}
				Promise.all(recentview_promises).then(function(values) {
					if (values.length > 0) {
						var x = [];
						setTimeout(function() {
							$('.headerWishlistCount').html(values.length)
						}, 500)
						$.each(values, function(i, v) {
							if (v.error) {
								x.push(v.handle);
							} else {
								$('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .page-wishlist').append(v.data);
								$('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .page-wishlist').show();
								awe_lazyloadImage();
								//theme.init(); // gọi lại ajax cart
							}
							console.log(values.length);

						});
						if (x.length > 0) {
							var new_last_viewed_pro_array = [];
							$.each(last_wishlist_pro_array, function(i, v) {
								if ($.inArray(v, x) === -1) {
									new_last_viewed_pro_array.push(v);
								}

							})
							if (new_last_viewed_pro_array.length > 0) {
								Cookies.set('last_viewed_products', new_last_viewed_pro_array, {
									expires: 180,
									sameSite: 'None',
									secure: true
								});
							}
						}
					} else {
						$('.headerWishlistCount').html('0')
						$('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').append('<div class="sidebar-all-wrap-right-main-top-error col-12"><span>Bạn chưa có sản phẩm yêu thích, <a href="/collections/all" style="color: #007bff;">vào đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
					}
				});
			} else {
				$('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').append('<div class="sidebar-all-wrap-right-main-top-error col-12"><span>Bạn chưa có sản phẩm yêu thích, <a href="/collections/all" style="color: #007bff;">vào đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
			}
		} else {
			$('#sidebar-all .sidebar-all-wrap-right[data-type="wishlist"] .sidebar-all-wrap-right-main-list').append('<div class="sidebar-all-wrap-right-main-top-error col-12"><span>Bạn chưa có sản phẩm yêu thích, <a href="/collections/all" style="color: #007bff;">vào đây</a> để thêm thật nhiều sản phẩm vào yêu thích nào. </span></div>')
		}
	},
	activityWishlist: function() {
		var last_wishlist_pro_array = Cookies.getJSON('ego_wishlist_products');
		$.each(last_wishlist_pro_array, function(i, v) {
			$('.setWishlist[data-wish="' + v + '"]').html('<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z" fill="#D7443E"/> </svg>').addClass('active').attr('title', 'Bỏ yêu thích');
		})
	},

	removeWishlist: function(handle) {
		var phand = [];

		$('a[data-wish="' + handle + '"]').html('<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-heart fa-w-16"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"/> </svg>').removeClass('active').attr('title', 'Thêm vào yêu thích');
		if (document.cookie.indexOf('ego_wishlist_products') !== -1) {
			var las = Cookies.getJSON('ego_wishlist_products');
			var flagIndex = $.inArray(handle, las);
			las.splice(flagIndex, 1)
			Cookies.set('ego_wishlist_products', las, {
				expires: 15,
				sameSite: 'None',
				secure: true
			});
		} else {
			phand = [handle];
			Cookies.set('ego_wishlist_products', phand, {
				expires: 15,
				sameSite: 'None',
				secure: true
			});
		}
		Ego.Wishlist.wishlistProduct(3, 5);
	}
}




Ego.Wishlist.init();