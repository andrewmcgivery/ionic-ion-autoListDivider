# ionic-ion-autoListDivider
Gives a set of directives for automatically adding in list dividers for an ng-repeat. (Works for Alphabetical or by Categories)

# Setup
You'll need a list of objects (sorted) and an ng-repeat.

Import the script and include the module

```
angular.module('ionicApp', ['ionic','ionic.ion.autoListDivider'])
```

# Example: Default Behavior
Default behavior is to take the first letter of the `auto-list-divider-value` passed in and use that to create alphabetical dividers.

```
<ion-list>
        <div auto-list-divider auto-list-divider-value="{{item.user.name.first}}" class="item item-avatar" ng-repeat="item in items">
		</div>
</ion-list>
```

# Example: Custom Divider Function
A custom function to calculate the divider based on the passed in value can be specified using `auto-divider-function`. This should be the name of a fucction in your controllers scope.

```
<ion-list>
        <div auto-divider auto-divider-value="{{item.user.gender}}" auto-divider-function="dividerFunction" class="item item-avatar" ng-repeat="item in items">
		</div>
</ion-list>
```

In your controller...

```
$scope.dividerFunction = function(key){
  return key;
}
```

`key` will be the value passed into `auto-divider-value`.

CodePen of examples: http://codepen.io/andrewmcgivery/pen/XJeQyW
