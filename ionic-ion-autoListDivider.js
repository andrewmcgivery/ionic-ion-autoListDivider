angular.module('ionic.ion.autoListDivider',[])

.directive('autoListDivider', function() {  
	var lastDivideKey = "";

	return {
		scope: {
			autoListDividerFunction: "="
		}
		link: function(scope, element, attrs) {
			var index = scope.$index;

			var key = attrs.autoListDividerValue;

			var defaultDivideFunction = function(k){
				return k.slice( 0, 1 ).toUpperCase();
			}

			var divideFunction = scope.autoListDividerFunction || defaultDivideFunction;
			var divideKey = divideFunction(key);

			if(divideKey != lastDivideKey) { 
				var contentTr = angular.element("<div class='item item-divider'>"+divideKey+"</div>");
				element[0].parentNode.insertBefore(contentTr[0], element[0]);
			}

			lastDivideKey = divideKey;
		}
	}
});
