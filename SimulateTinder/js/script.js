var app = angular.module("myApp", ["hmTouchevents"]);
app.controller("MyCtrl", ["$scope", "$http", "$timeout", function ($scope, $http, $timeout) {
	//TODO不应该在controller里面操纵dom，应该将其写成directive。
	var like = document.getElementById("like"),
		dislike = document.getElementById("dislike");

	$scope.images = [{
			id: "test1"
		}, {
			id: "test2"
		}, {
			id: "test3"
		}, {
			id: "test4"
		}];

	$scope.dragged = function (ev) {
		ev.gesture.preventDefault();
		var ele = ev.target,
			deltaX = ev.gesture.deltaX + "px",
			deltaY = ev.gesture.deltaY + "px",
			deltaR = ev.gesture.deltaX / 20 + "deg",
			tansformStr = "translate3d(" + deltaX + "," + deltaY + ",0px) rotate(" + deltaR + ")";

		angular.element(ele).css({
			transform: tansformStr,
			"-ms-transform": tansformStr,
			"-webkit-transform": tansformStr,
			"-moz-transform": tansformStr
		});
	};

	$scope.dragLeft = function (ev) {
		ev.gesture.preventDefault();
		angular.element(dislike).css("display", "block");
		angular.element(like).css("display", "none");
	};
	$scope.dragRight = function (ev) {
		ev.gesture.preventDefault();
		angular.element(like).css("display", "block");
		angular.element(dislike).css("display", "none");
	};
	$scope.released = function (ev) {
		ev.gesture.preventDefault();
		var ele = ev.target,
			speed = ev.gesture.velocityX + ev.gesture.velocityY,
			finalX = ev.gesture.deltaX * 10 * speed + "px",
			finalY = ev.gesture.deltaY * 10 * speed + "px",
			finalR = ev.gesture.deltaX / 10 + "deg";

		if (ev.gesture.distance > 200 || speed > 1) {
			var tansformStr = "translate3d(" + finalX + "," + finalY + ",0px) rotate(" + finalR + ")";

			angular.element(ele).css({
				transform: tansformStr,
				"-ms-transform": tansformStr,
				"-webkit-transform": tansformStr,
				"-moz-transform": tansformStr,
				"-webkit-transition": "all 1s",
				"-moz-transition:": "all 1s",
				"transition": "all 1s"
			});

			removeIcon(like, dislike);

//			setTimeout(function () {
//				angular.element(ele).remove();
//				$scope.$apply(function () {
//					$scope.images.pop();
//					if ($scope.images.length == 1) {
//						$scope.images.unshift({
//							id: "test1"
//						}, {
//							id: "test2"
//						}, {
//							id: "test3"
//						}, {
//							id: "test4"
//						});
//					}
//				})
//			}, 1000);
			$timeout(function () {
				angular.element(ele).remove();
				$scope.images.pop();
				if ($scope.images.length == 1) {
					$scope.images.unshift({
						id: "test1"
					}, {
						id: "test2"
					}, {
						id: "test3"
					}, {
						id: "test4"
					});
				}
			}, 1000);
		}
		else {
			var tansformStr = "translate3d(0px,0px,0px) rotate(0deg)";

			angular.element(ele).css({
				transform: tansformStr,
				"-ms-transform": tansformStr,
				"-webkit-transform": tansformStr,
				"-moz-transform": tansformStr,
				"-webkit-transition": "all .5s",
				"-moz-transition:": "all .5s",
				"transition": "all .5s"
			});

			removeIcon(like, dislike);

			setTimeout(function () {
				angular.element(ele).css({
					"-webkit-transition": "all 0s",
					"-moz-transition:": "all 0s",
					"transition": "all 0s"
				});
			}, 500);
		}
	};
	function removeIcon(like, dislike) {
		angular.element(like).css("display", "none");
		angular.element(dislike).css("display", "none");
	}
}]);
