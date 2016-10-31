angular.module('ionic.ion.autoListDivider',[])

.directive('autoListDivider', function($timeout) {  
	var lastDivideKey = "";

	function remove(el) {
		var toRemove = document.querySelector(el);
		if(toRemove != null)
		{
			toRemove.parentNode.removeChild(toRemove);
		}
	}

	return {
		link: function(scope, element, attrs) {
			var key = attrs.autoListDividerValue;
			var divider_class = attrs.autoListDividerClass;

			var defaultDivideFunction = function(k){
				return k.slice( 0, 1 ).toUpperCase();
			}
      
			var doDivide = function() {
				var divideFunction = scope.$apply(attrs.autoListDividerFunction) || defaultDivideFunction;
				var divideKey = divideFunction(key);
				
				if(divideKey != lastDivideKey) { 
					var contentTr = angular.element("<div class='item item-divider "+divider_class+"'>"+divideKey+"</div>");
					element[0].parentNode.insertBefore(contentTr[0], element[0]);
				}

				lastDivideKey = divideKey;
			}
		  
			$timeout(doDivide,0);
			remove('.'+divider_class);
		}
	}
});
