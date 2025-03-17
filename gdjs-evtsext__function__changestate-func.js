
if (typeof gdjs.evtsExt__Function__ChangeState !== "undefined") {
  gdjs.evtsExt__Function__ChangeState.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Function__ChangeState = {};


gdjs.evtsExt__Function__ChangeState.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Function__ChangeState.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Function__ChangeState.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).setBoolean(false);
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).setBoolean(true);
}{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1), eventsFunctionContext.getArgument("Parameter2"), false);
}
}{if (typeof eventsFunctionContext !== 'undefined') {
gdjs.Variable.copy(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0), eventsFunctionContext.getArgument("Parameter"), false);
}
}}

}


};

gdjs.evtsExt__Function__ChangeState.func = function(runtimeScene, Parameter, Parameter2, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Function"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Function"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Parameter") return Parameter;
if (argName === "Parameter2") return Parameter2;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Function__ChangeState.eventsList1(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Function__ChangeState.registeredGdjsCallbacks = [];