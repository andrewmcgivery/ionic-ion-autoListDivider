# ionic-ion-autoListDivider
Gives a set of directives for automatically adding in list dividers for an ng-repeat. (Works for Alphabetical or by Categories)

# Setup
You'll need a list of objects (sorted) and an `ng-repeat`.

Import the script and include the module

```
angular.module('ionicApp', ['ionic','ionic.ion.autoListDivider'])
```

An example sorting function in your controller:

```
items.sort(function(a,b){
      var textA = a.user.name.first.toUpperCase();
      var textB = b.user.name.first.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
})
```

# Basic Usage
Take any `ng-repeat` and add the `auto-list-divider` and the `auto-list-divider-value` attributes. The `auto-list-divider-value` attribute should have the property passed in that you are sorting on.

```
<ion-item auto-list-divider auto-list-divider-value="{{item.user.name.first}}" ng-repeat="item in items">
```

By default, it will divide these items alphabetically by the first letter of the value passed in.

# Example: Default Behavior
Default behavior is to take the first letter of the `auto-list-divider-value` passed in and use that to create alphabetical dividers.

```
<ion-list>
        <ion-item auto-list-divider auto-list-divider-value="{{item.user.name.first}}" class="item-avatar" ng-repeat="item in items">
	</ion-item>
</ion-list>
```

# Example: Custom Divider Function
A custom function to calculate the divider based on the passed in value can be specified using `auto-divider-function`. This should be the name of a fucction in your controllers scope.

```
<ion-list>
        <ion-item auto-divider auto-divider-value="{{item.user.gender}}" auto-divider-function="dividerFunction" class="item-avatar" ng-repeat="item in items">
	</ion-item>
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
