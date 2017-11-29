(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("AgMA3IgzhtIArAAIAXA6IAVg6IAoAAIgtBtg");
	this.shape.setTransform(111.4,61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1.setTransform(101.9,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AgyBQIAhhBIg3heIAvAAIAeA8IAag8IApAAIhPCfg");
	this.shape_2.setTransform(91.6,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AASBQIguhFIAABFIgtAAIAAigIAtAAIAABEIAvhEIA1AAIg9BPIA/BRg");
	this.shape_3.setTransform(77.4,59.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AgTBUIAAioIAnAAIAACog");
	this.shape_4.setTransform(59.9,58.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AglA1QgLgHgHgOQgHgNAAgTQAAgKADgKQACgLAHgIQAGgJAKgFQAKgFANAAQALgBAJAFQAIAEAIAJIAAgNIAmAAIAABuIgmAAIAAgNQgGAHgJAFQgJAFgMAAQgOAAgMgHgAgLgVQgFAEgCAFQgDAHAAAFQAAAHADAGQACAGAGAEQAFAEAHAAQALAAAHgHQAGgHAAgNQAAgLgGgHQgHgHgLAAQgHAAgGAEg");
	this.shape_5.setTransform(48.9,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_6.setTransform(37.9,60.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("AASA5IAAg8IgBgIQgBgFgDgEQgDgEgHABQgEAAgFACQgEADgEAGQgDAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAHgIAJgEQAHgFAMAAQAOABAHAFQAIAFAFAHQADAJABAIIACAQIAAA/g");
	this.shape_7.setTransform(27,61.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0071BC").s().p("AAAA7QgQAAgOgGQgOgHgIgOQgIgNAAgTQAAgRAHgOQAHgNAOgHQAOgIASAAQAUAAAMAHQAMAHAHALQAGALACALQACAMAAAJIhUAAQAAAHADAGQACAGAGADQAFAEAHAAQAJAAAFgDQAGgEABgHIAnAAQgFAOgIAIQgJAIgJAEQgJADgIABIgJABIgDgBgAAWgMQAAgGgDgFQgCgFgFgEQgFgDgHAAQgGAAgFADQgFADgDAGQgCAFgBAGIAsAAIAAAAg");
	this.shape_8.setTransform(13.1,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0071BC").s().p("AARA5IAAg8IAAgIQgBgFgDgEQgDgEgGABQgFAAgFACQgEADgDAGQgEAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAGgIAJgEQAIgFAMAAQAOABAIAFQAHAFAFAHQADAJACAIIABAQIAAA/g");
	this.shape_9.setTransform(-0.6,61.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0071BC").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_10.setTransform(-11.1,58.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_11.setTransform(-18.4,60.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0071BC").s().p("AARA5IAAg8IAAgIQAAgFgEgEQgDgEgGABQgFAAgFACQgEADgDAGQgEAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAGgIAJgEQAJgFALAAQAOABAIAFQAHAFAEAHQAEAJACAIIABAQIAAA/g");
	this.shape_12.setTransform(-29.3,61.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0071BC").s().p("AglAzQgPgIgGgOQgIgNAAgQQAAgPAIgNQAGgOAPgIQAPgJAWAAQAWAAAQAJQAPAIAGAOQAIANAAAPQAAAQgIANQgGAOgPAIQgQAJgWAAQgWAAgPgJgAgSgWQgGAJAAANQAAAOAGAIQAHAJALgBQAMABAGgJQAHgIgBgOQABgNgHgJQgGgHgMAAQgLAAgHAHg");
	this.shape_13.setTransform(-43.7,61.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BC").s().p("AATBVQgXAAgSgLQgTgKgKgTQgLgTAAgaQAAgTAHgQQAGgQAMgLQALgLAOgGQAOgFARAAQALAAALADQALADALAHIAAAuIgKgJQgFgFgIgCQgHgDgIAAQgNAAgJAGQgIAGgFAKQgFALAAAMQAAAMAEAKQAFAKAJAGQAJAGANAAQAIAAAHgDIANgHQAGgDAEgFIAAAuQgLAHgLADQgJACgJAAIgEAAg");
	this.shape_14.setTransform(-58.2,59.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0071BC").s().p("AgnA5IAAhuIAmAAIAAAOIABgCIACgCQAHgIAIgCQAHgDAGAAIAGAAIAEABIAAAjIgFgBIgFAAQgLAAgGAEQgHAEgCAGQgDAGgBAEIAAAGIAAAwg");
	this.shape_15.setTransform(-69.4,61.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071BC").s().p("AAAA7QgQAAgOgGQgOgHgIgOQgIgNAAgTQAAgRAHgOQAHgNAOgHQAOgIASAAQAUAAAMAHQAMAHAHALQAGALACALQACAMAAAJIhUAAQAAAHADAGQACAGAGADQAFAEAHAAQAJAAAFgDQAGgEABgHIAnAAQgFAOgIAIQgJAIgJAEQgJADgIABIgJABIgDgBgAAWgMQAAgGgDgFQgCgFgFgEQgFgDgHAAQgGAAgFADQgFADgDAGQgCAFgBAGIAsAAIAAAAg");
	this.shape_16.setTransform(-81.5,61.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_17.setTransform(-92.3,60.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0071BC").s().p("AARA5IAAg8IAAgIQgBgFgDgEQgDgEgGABQgFAAgFACQgEADgDAGQgEAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAGgIAJgEQAIgFAMAAQAOABAIAFQAHAFAEAHQAEAJACAIIABAQIAAA/g");
	this.shape_18.setTransform(-103.2,61.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0071BC").s().p("AgVBQIAAigIAsAAIAACgg");
	this.shape_19.setTransform(-114,59.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0071BC").s().p("AglAzIAAhlIAXAAIAAAkIAOAAIAJABIALACQAGACAEAFIAGAIQACAGAAAIQAAAKgDAGQgDAGgDACQgHAGgIACIgOABgAgOAfIALAAIAFgBIAGgCQAEgCABgDIABgFIgBgFQgBgDgDgCIgHgCIgFgBIgLAAg");
	this.shape_20.setTransform(-60.4,33.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0071BC").s().p("AgsAzIgDAAIAAgWIACAAIACABQAEAAADgCIAFgDQADgDAAgEIABgHIAAg9IBLAAIAABlIgXAAIAAhQIgeAAIAAAoQABAGgCAJQgCAHgGAHQgEAFgHADQgHADgKAAIgCAAg");
	this.shape_21.setTransform(-71.9,33.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0071BC").s().p("AAAA2QgLAAgKgGQgMgFgIgMQgGgMgBgSQABgQAFgMQAGgMALgHQALgHAOAAQAOAAAKAGQAJAFAGAIQAEAHADAKQACAKAAAJIAAAEIhIAAQABAJAEAGQAEAGAGADQAGADAGAAQAFAAAEgCIAHgEIAEgEQADgDADgHIAUALIgFAJIgIAJQgHAFgGADIgNADIgHABIgDAAgAAYgNQgCgJgGgFQgHgEgJgBQgHABgHAFQgGAFgCAIIAuAAIAAAAg");
	this.shape_22.setTransform(-82.7,33.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0071BC").s().p("AgLAzIAAhQIgdAAIAAgVIBSAAIAAAVIgeAAIAABQg");
	this.shape_23.setTransform(-92.9,33.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMgBgQQABgPAHgMQAHgMAMgHQANgHAOAAQAPAAANAHQAMAHAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAHQgNAHgPAAQgOAAgNgHgAgNgcQgHADgEAHQgFAIAAAKQAAAMAFAHQAEAHAHAEQAGADAHAAQAHAAAHgDQAHgEAEgHQAFgHAAgMQAAgKgFgIQgEgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_24.setTransform(-103.6,33.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0071BC").s().p("AgeAzIAAhlIA9AAIAAAVIgmAAIAABQg");
	this.shape_25.setTransform(-113.2,33.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0071BC").s().p("AguBLIAjhEIgthRIAdAAIAcA5IAdg5IAbAAIhMCVg");
	this.shape_26.setTransform(-15.8,-24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0071BC").s().p("AAPAzIgkgvIAAAvIgYAAIAAhlIAYAAIAAAlIAhglIAfAAIgsAsIAuA5g");
	this.shape_27.setTransform(-26.2,-26.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMgBgQQABgPAHgMQAHgMAMgHQAMgHAPAAQAQAAAMAHQAMAHAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAHQgMAHgQAAQgPAAgMgHgAgNgcQgHADgFAHQgEAIAAAKQAAAMAEAHQAFAHAHAEQAHADAGAAQAHAAAHgDQAHgEAEgHQAFgHAAgMQAAgKgFgIQgEgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_28.setTransform(-38.5,-26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0071BC").s().p("AgzBMIAAiVIAXAAIAAAMQAIgJAJgDQAIgCAFgBQAOABALAGQALAHAHAMQAGALABARQgBARgHALQgHAMgLAGQgLAHgMAAQgDABgFgCQgFgBgGgDQgGgEgGgGIAAA8gAgOgyQgHADgEAHQgEAIAAAKQAAAJADAIQAEAGAGAEQAGAFAKAAQAIAAAGgFQAGgDAEgHQADgIAAgJQAAgKgEgIQgEgHgHgDQgGgEgGAAQgIAAgGAEg");
	this.shape_29.setTransform(-51,-24.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0071BC").s().p("Ag6BQIA8h7IhBAAIAAglIB/AAIhJCgg");
	this.shape_30.setTransform(-69.3,-29.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0071BC").s().p("AgHBQIAAh7IgZAAIAAglIBBAAIAACgg");
	this.shape_31.setTransform(-83.8,-29.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0071BC").s().p("AgMBUQgHgBgJgEQgIgEgHgKQgHgJgGgQQgEgQAAgYQAAgXAEgQQAGgQAHgJQAHgJAIgEQAJgFAHgBQAIgBAEAAQAFAAAIABQAHABAJAFQAIAEAHAJQAHAJAGAQQAEAQAAAXQAAAYgEAQQgGAQgHAJQgHAKgIAEQgJAEgHABIgNABIgMgBgAgLgtQgDAFgCAIQgDAIAAAIIAAAQIAAARQAAAJADAIQACAIADAEQAFAFAGABQAHgBAFgFQADgEACgIQADgIAAgJIAAgRIAAgQQAAgIgDgIQgCgIgDgFQgFgFgHAAQgGAAgFAFg");
	this.shape_32.setTransform(-97.2,-29.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0071BC").s().p("Ag+BTIBChOIALgNQAEgGACgEQACgEgBgFQAAgFgCgFQgCgFgEgDQgEgDgHAAQgGAAgEADQgEAEgCAEIgDAJIAAAHIgoAAQAAgJADgKQADgLAHgJQAGgKAMgGQAMgGARAAQAUAAANAIQAOAIAFAMQAHAMAAAOQAAAJgCAIQgDAHgGAIIgPATQgKALgOANIAwAAIAAAkg");
	this.shape_33.setTransform(-111.3,-29.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAFgMAMgIQALgHAQgBIAIABQAFABAFADQAHAEAEAGIAAgMIAYAAIAABlIgYAAIAAgLIgFAGQgFADgFACQgHADgHAAQgQAAgLgIgAgNgbQgGAEgEAIQgDAHgBAIQABAJADAHQADAIAHAEQAGAFAIAAQAJAAAGgFQAHgEADgHQADgHAAgKQAAgKgEgHQgDgHgHgEQgHgEgHAAQgHABgHAEg");
	this.shape_34.setTransform(44.3,-56.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0071BC").s().p("AAkBBIAAgdIhHAAIAAAdIgVAAIAAgyQAIgBAEgEQAFgEACgEQACgFABgHIABgOIAAgoIBLAAIAABPIAPAAIAAAygAgLgPQAAAOgEAGQgEAHgEADIAqAAIAAg6IgeAAg");
	this.shape_35.setTransform(32.2,-54.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAFgMALgIQAMgHAPgBIAJABQAFABAFADQAGAEAGAGIAAgMIAXAAIAABlIgXAAIAAgLIgHAGQgEADgFACQgHADgIAAQgPAAgLgIgAgNgbQgGAEgEAIQgEAHAAAIQAAAJAEAHQAEAIAGAEQAGAFAIAAQAJAAAGgFQAHgEADgHQAEgHAAgKQAAgKgFgHQgEgHgGgEQgGgEgIAAQgIABgGAEg");
	this.shape_36.setTransform(19.8,-56.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0071BC").s().p("AAUAzIAAhQIgoAAIAABQIgXAAIAAhlIBXAAIAABlg");
	this.shape_37.setTransform(7.9,-56.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMgBgQQABgPAHgMQAHgMAMgHQAMgHAPAAQAQAAAMAHQAMAHAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAHQgMAHgQAAQgPAAgMgHgAgNgcQgHADgFAHQgEAIAAAKQAAAMAEAHQAFAHAHAEQAHADAGAAQAHAAAHgDQAHgEAEgHQAFgHAAgMQAAgKgFgIQgEgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_38.setTransform(-4.3,-56.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0071BC").s().p("AgLAzIAAhQIgdAAIAAgVIBSAAIAAAVIgeAAIAABQg");
	this.shape_39.setTransform(-15,-56.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0071BC").s().p("AAOA2QgNAAgJgEQgLgEgIgIQgHgIgEgJQgDgKAAgKQAAgOAFgKQAFgKAGgGQAJgHAJgEQAIgDAMAAQAKAAAHADQAHACAFADIAAAeQgFgIgIgEQgHgEgJgBQgIAAgGAEQgHAEgEAHQgFAHAAAKQAAAJAEAHQADAIAHAEQAGAFAJAAQAJAAAGgEQAHgDADgEIAFgHIAAAfQgIAFgHABIgKACIgDAAg");
	this.shape_40.setTransform(-24.3,-56.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0071BC").s().p("AgugxIAYAAIAAA4IBFhBIAABtIgYAAIAAg6IhFBDg");
	this.shape_41.setTransform(-35.5,-56.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0071BC").s().p("AgsAzIgDgBIAAgUIACAAIACAAQAEAAADgBIAFgEQADgEAAgDIABgGIAAg+IBLAAIAABkIgXAAIAAhPIgeAAIAAAoQABAHgCAHQgCAIgGAHQgEAFgHADQgHADgKAAIgCAAg");
	this.shape_42.setTransform(-47.9,-56.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0071BC").s().p("AgbBRQgKgFgHgHQgGgHgEgIQgDgIgBgGIgBgLIAnAAIACAJQABAGAFAEQAEADAIABQAJgBAEgDQAEgEACgGQABgFAAgEQAAgIgEgEQgDgEgGgBIgJAAIgEAAIAAgbIAEAAIAGgBQAFgBADgEQAEgEAAgIQAAgHgDgEQgDgEgDgBIgHgBQgHAAgFAFQgEAFAAAHIgpAAQAEgSAGgLQAIgKAJgFQAJgFAJgBQAIgBAFAAQAOAAAMAFQAMAEAIAKQAIAJABAQQgBANgGAIQgGAJgMADIAAABQAIACAGAEQAGAEAFAJQAEAIAAANQAAAPgHAMQgIALgOAHQgNAGgSAAQgQAAgLgEg");
	this.shape_43.setTransform(-65.2,-59.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAFgMALgIQAMgHAPgBIAJABQAFABAFADQAHAEAEAGIAAgMIAYAAIAABlIgYAAIAAgLIgFAGQgFADgFACQgHADgIAAQgPAAgLgIgAgNgbQgHAEgDAIQgDAHgBAIQABAJADAHQADAIAHAEQAGAFAIAAQAJAAAGgFQAHgEADgHQADgHABgKQgBgKgEgHQgDgHgHgEQgHgEgHAAQgHABgHAEg");
	this.shape_44.setTransform(-83.9,-56.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0071BC").s().p("AgKAzIAAhQIgeAAIAAgVIBSAAIAAAVIgeAAIAABQg");
	this.shape_45.setTransform(-94.3,-56.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0071BC").s().p("Ag+BTIBChOIALgNQAEgGACgEQACgEgBgFQAAgFgCgFQgCgFgEgDQgEgDgHAAQgGAAgEADQgEAEgCAEIgDAJIAAAHIgoAAQAAgJADgKQADgLAHgJQAGgKAMgGQAMgGARAAQAUAAANAIQAOAIAFAMQAHAMAAAOQAAAJgCAIQgDAHgGAIIgPATQgKALgOANIAwAAIAAAkg");
	this.shape_46.setTransform(-111.3,-59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.7,-75.1,239.6,150.4);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("AgMA3IgzhtIArAAIAXA6IAVg6IAoAAIgtBtg");
	this.shape.setTransform(111.4,61.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0071BC").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_1.setTransform(101.9,58.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0071BC").s().p("AgyBQIAhhBIg3heIAvAAIAeA8IAag8IApAAIhPCfg");
	this.shape_2.setTransform(91.6,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0071BC").s().p("AASBQIguhFIAABFIgtAAIAAigIAtAAIAABEIAvhEIA1AAIg9BPIA/BRg");
	this.shape_3.setTransform(77.4,59.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0071BC").s().p("AgTBUIAAioIAnAAIAACog");
	this.shape_4.setTransform(59.9,58.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0071BC").s().p("AglA1QgLgHgHgOQgHgNAAgTQAAgKADgKQACgLAHgIQAGgJAKgFQAKgFANAAQALgBAJAFQAIAEAIAJIAAgNIAmAAIAABuIgmAAIAAgNQgGAHgJAFQgJAFgMAAQgOAAgMgHgAgLgVQgFAEgCAFQgDAHAAAFQAAAHADAGQACAGAGAEQAFAEAHAAQALAAAHgHQAGgHAAgNQAAgLgGgHQgHgHgLAAQgHAAgGAEg");
	this.shape_5.setTransform(48.9,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_6.setTransform(37.9,60.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0071BC").s().p("AASA5IAAg8IgBgIQgBgFgDgEQgDgEgHABQgEAAgFACQgEADgEAGQgDAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAHgIAJgEQAHgFAMAAQAOABAHAFQAIAFAFAHQADAJABAIIACAQIAAA/g");
	this.shape_7.setTransform(27,61.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0071BC").s().p("AAAA7QgQAAgOgGQgOgHgIgOQgIgNAAgTQAAgRAHgOQAHgNAOgHQAOgIASAAQAUAAAMAHQAMAHAHALQAGALACALQACAMAAAJIhUAAQAAAHADAGQACAGAGADQAFAEAHAAQAJAAAFgDQAGgEABgHIAnAAQgFAOgIAIQgJAIgJAEQgJADgIABIgJABIgDgBgAAWgMQAAgGgDgFQgCgFgFgEQgFgDgHAAQgGAAgFADQgFADgDAGQgCAFgBAGIAsAAIAAAAg");
	this.shape_8.setTransform(13.1,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0071BC").s().p("AARA5IAAg8IAAgIQgBgFgDgEQgDgEgGABQgFAAgFACQgEADgDAGQgEAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAGgIAJgEQAIgFAMAAQAOABAIAFQAHAFAFAHQADAJACAIIABAQIAAA/g");
	this.shape_9.setTransform(-0.6,61.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0071BC").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_10.setTransform(-11.1,58.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_11.setTransform(-18.4,60.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0071BC").s().p("AARA5IAAg8IAAgIQAAgFgEgEQgDgEgGABQgFAAgFACQgEADgDAGQgEAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAGgIAJgEQAJgFALAAQAOABAIAFQAHAFAEAHQAEAJACAIIABAQIAAA/g");
	this.shape_12.setTransform(-29.3,61.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0071BC").s().p("AglAzQgPgIgGgOQgIgNAAgQQAAgPAIgNQAGgOAPgIQAPgJAWAAQAWAAAQAJQAPAIAGAOQAIANAAAPQAAAQgIANQgGAOgPAIQgQAJgWAAQgWAAgPgJgAgSgWQgGAJAAANQAAAOAGAIQAHAJALgBQAMABAGgJQAHgIgBgOQABgNgHgJQgGgHgMAAQgLAAgHAHg");
	this.shape_13.setTransform(-43.7,61.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0071BC").s().p("AATBVQgXAAgSgLQgTgKgKgTQgLgTAAgaQAAgTAHgQQAGgQAMgLQALgLAOgGQAOgFARAAQALAAALADQALADALAHIAAAuIgKgJQgFgFgIgCQgHgDgIAAQgNAAgJAGQgIAGgFAKQgFALAAAMQAAAMAEAKQAFAKAJAGQAJAGANAAQAIAAAHgDIANgHQAGgDAEgFIAAAuQgLAHgLADQgJACgJAAIgEAAg");
	this.shape_14.setTransform(-58.2,59.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0071BC").s().p("AgnA5IAAhuIAmAAIAAAOIABgCIACgCQAHgIAIgCQAHgDAGAAIAGAAIAEABIAAAjIgFgBIgFAAQgLAAgGAEQgHAEgCAGQgDAGgBAEIAAAGIAAAwg");
	this.shape_15.setTransform(-69.4,61.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0071BC").s().p("AAAA7QgQAAgOgGQgOgHgIgOQgIgNAAgTQAAgRAHgOQAHgNAOgHQAOgIASAAQAUAAAMAHQAMAHAHALQAGALACALQACAMAAAJIhUAAQAAAHADAGQACAGAGADQAFAEAHAAQAJAAAFgDQAGgEABgHIAnAAQgFAOgIAIQgJAIgJAEQgJADgIABIgJABIgDgBgAAWgMQAAgGgDgFQgCgFgFgEQgFgDgHAAQgGAAgFADQgFADgDAGQgCAFgBAGIAsAAIAAAAg");
	this.shape_16.setTransform(-81.5,61.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_17.setTransform(-92.3,60.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0071BC").s().p("AARA5IAAg8IAAgIQgBgFgDgEQgDgEgGABQgFAAgFACQgEADgDAGQgEAGAAAJIAAA2IgoAAIAAhtIAoAAIAAAMQAGgIAJgEQAIgFAMAAQAOABAIAFQAHAFAEAHQAEAJACAIIABAQIAAA/g");
	this.shape_18.setTransform(-103.2,61.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0071BC").s().p("AgVBQIAAigIAsAAIAACgg");
	this.shape_19.setTransform(-114,59.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0071BC").s().p("AglAzIAAhlIAXAAIAAAkIAOAAIAJABIALACQAGACAEAFIAGAIQACAGAAAIQAAAKgDAGQgDAGgDACQgHAGgIACIgOABgAgOAfIALAAIAFgBIAGgCQAEgCABgDIABgFIgBgFQgBgDgDgCIgHgCIgFgBIgLAAg");
	this.shape_20.setTransform(-60.4,33.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0071BC").s().p("AgsAzIgDAAIAAgWIACAAIACABQAEAAADgCIAFgDQADgDAAgEIABgHIAAg9IBLAAIAABlIgXAAIAAhQIgeAAIAAAoQABAGgCAJQgCAHgGAHQgEAFgHADQgHADgKAAIgCAAg");
	this.shape_21.setTransform(-71.9,33.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0071BC").s().p("AAAA2QgLAAgKgGQgMgFgIgMQgGgMgBgSQABgQAFgMQAGgMALgHQALgHAOAAQAOAAAKAGQAJAFAGAIQAEAHADAKQACAKAAAJIAAAEIhIAAQABAJAEAGQAEAGAGADQAGADAGAAQAFAAAEgCIAHgEIAEgEQADgDADgHIAUALIgFAJIgIAJQgHAFgGADIgNADIgHABIgDAAgAAYgNQgCgJgGgFQgHgEgJgBQgHABgHAFQgGAFgCAIIAuAAIAAAAg");
	this.shape_22.setTransform(-82.7,33.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0071BC").s().p("AgLAzIAAhQIgdAAIAAgVIBSAAIAAAVIgeAAIAABQg");
	this.shape_23.setTransform(-92.9,33.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMgBgQQABgPAHgMQAHgMAMgHQANgHAOAAQAPAAANAHQAMAHAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAHQgNAHgPAAQgOAAgNgHgAgNgcQgHADgEAHQgFAIAAAKQAAAMAFAHQAEAHAHAEQAGADAHAAQAHAAAHgDQAHgEAEgHQAFgHAAgMQAAgKgFgIQgEgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_24.setTransform(-103.6,33.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0071BC").s().p("AgeAzIAAhlIA9AAIAAAVIgmAAIAABQg");
	this.shape_25.setTransform(-113.2,33.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0071BC").s().p("AguBLIAjhEIgthRIAdAAIAcA5IAdg5IAbAAIhMCVg");
	this.shape_26.setTransform(-15.8,-24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0071BC").s().p("AAPAzIgkgvIAAAvIgYAAIAAhlIAYAAIAAAlIAhglIAfAAIgsAsIAuA5g");
	this.shape_27.setTransform(-26.2,-26.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMgBgQQABgPAHgMQAHgMAMgHQAMgHAPAAQAQAAAMAHQAMAHAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAHQgMAHgQAAQgPAAgMgHgAgNgcQgHADgFAHQgEAIAAAKQAAAMAEAHQAFAHAHAEQAHADAGAAQAHAAAHgDQAHgEAEgHQAFgHAAgMQAAgKgFgIQgEgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_28.setTransform(-38.5,-26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0071BC").s().p("AgzBMIAAiVIAXAAIAAAMQAIgJAJgDQAIgCAFgBQAOABALAGQALAHAHAMQAGALABARQgBARgHALQgHAMgLAGQgLAHgMAAQgDABgFgCQgFgBgGgDQgGgEgGgGIAAA8gAgOgyQgHADgEAHQgEAIAAAKQAAAJADAIQAEAGAGAEQAGAFAKAAQAIAAAGgFQAGgDAEgHQADgIAAgJQAAgKgEgIQgEgHgHgDQgGgEgGAAQgIAAgGAEg");
	this.shape_29.setTransform(-51,-24.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0071BC").s().p("Ag6BQIA8h7IhBAAIAAglIB/AAIhJCgg");
	this.shape_30.setTransform(-69.3,-29.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0071BC").s().p("AgHBQIAAh7IgZAAIAAglIBBAAIAACgg");
	this.shape_31.setTransform(-83.8,-29.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0071BC").s().p("AgMBUQgHgBgJgEQgIgEgHgKQgHgJgGgQQgEgQAAgYQAAgXAEgQQAGgQAHgJQAHgJAIgEQAJgFAHgBQAIgBAEAAQAFAAAIABQAHABAJAFQAIAEAHAJQAHAJAGAQQAEAQAAAXQAAAYgEAQQgGAQgHAJQgHAKgIAEQgJAEgHABIgNABIgMgBgAgLgtQgDAFgCAIQgDAIAAAIIAAAQIAAARQAAAJADAIQACAIADAEQAFAFAGABQAHgBAFgFQADgEACgIQADgIAAgJIAAgRIAAgQQAAgIgDgIQgCgIgDgFQgFgFgHAAQgGAAgFAFg");
	this.shape_32.setTransform(-97.2,-29.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0071BC").s().p("Ag+BTIBChOIALgNQAEgGACgEQACgEgBgFQAAgFgCgFQgCgFgEgDQgEgDgHAAQgGAAgEADQgEAEgCAEIgDAJIAAAHIgoAAQAAgJADgKQADgLAHgJQAGgKAMgGQAMgGARAAQAUAAANAIQAOAIAFAMQAHAMAAAOQAAAJgCAIQgDAHgGAIIgPATQgKALgOANIAwAAIAAAkg");
	this.shape_33.setTransform(-111.3,-29.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAFgMAMgIQALgHAQgBIAIABQAFABAFADQAHAEAEAGIAAgMIAYAAIAABlIgYAAIAAgLIgFAGQgFADgFACQgHADgHAAQgQAAgLgIgAgNgbQgGAEgEAIQgDAHgBAIQABAJADAHQADAIAHAEQAGAFAIAAQAJAAAGgFQAHgEADgHQADgHAAgKQAAgKgEgHQgDgHgHgEQgHgEgHAAQgHABgHAEg");
	this.shape_34.setTransform(44.3,-56.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0071BC").s().p("AAkBBIAAgdIhHAAIAAAdIgVAAIAAgyQAIgBAEgEQAFgEACgEQACgFABgHIABgOIAAgoIBLAAIAABPIAPAAIAAAygAgLgPQAAAOgEAGQgEAHgEADIAqAAIAAg6IgeAAg");
	this.shape_35.setTransform(32.2,-54.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAFgMALgIQAMgHAPgBIAJABQAFABAFADQAGAEAGAGIAAgMIAXAAIAABlIgXAAIAAgLIgHAGQgEADgFACQgHADgIAAQgPAAgLgIgAgNgbQgGAEgEAIQgEAHAAAIQAAAJAEAHQAEAIAGAEQAGAFAIAAQAJAAAGgFQAHgEADgHQAEgHAAgKQAAgKgFgHQgEgHgGgEQgGgEgIAAQgIABgGAEg");
	this.shape_36.setTransform(19.8,-56.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0071BC").s().p("AAUAzIAAhQIgoAAIAABQIgXAAIAAhlIBXAAIAABlg");
	this.shape_37.setTransform(7.9,-56.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMgBgQQABgPAHgMQAHgMAMgHQAMgHAPAAQAQAAAMAHQAMAHAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAHQgMAHgQAAQgPAAgMgHgAgNgcQgHADgFAHQgEAIAAAKQAAAMAEAHQAFAHAHAEQAHADAGAAQAHAAAHgDQAHgEAEgHQAFgHAAgMQAAgKgFgIQgEgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_38.setTransform(-4.3,-56.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0071BC").s().p("AgLAzIAAhQIgdAAIAAgVIBSAAIAAAVIgeAAIAABQg");
	this.shape_39.setTransform(-15,-56.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0071BC").s().p("AAOA2QgNAAgJgEQgLgEgIgIQgHgIgEgJQgDgKAAgKQAAgOAFgKQAFgKAGgGQAJgHAJgEQAIgDAMAAQAKAAAHADQAHACAFADIAAAeQgFgIgIgEQgHgEgJgBQgIAAgGAEQgHAEgEAHQgFAHAAAKQAAAJAEAHQADAIAHAEQAGAFAJAAQAJAAAGgEQAHgDADgEIAFgHIAAAfQgIAFgHABIgKACIgDAAg");
	this.shape_40.setTransform(-24.3,-56.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0071BC").s().p("AgugxIAYAAIAAA4IBFhBIAABtIgYAAIAAg6IhFBDg");
	this.shape_41.setTransform(-35.5,-56.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0071BC").s().p("AgsAzIgDgBIAAgUIACAAIACAAQAEAAADgBIAFgEQADgEAAgDIABgGIAAg+IBLAAIAABkIgXAAIAAhPIgeAAIAAAoQABAHgCAHQgCAIgGAHQgEAFgHADQgHADgKAAIgCAAg");
	this.shape_42.setTransform(-47.9,-56.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#0071BC").s().p("AgbBRQgKgFgHgHQgGgHgEgIQgDgIgBgGIgBgLIAnAAIACAJQABAGAFAEQAEADAIABQAJgBAEgDQAEgEACgGQABgFAAgEQAAgIgEgEQgDgEgGgBIgJAAIgEAAIAAgbIAEAAIAGgBQAFgBADgEQAEgEAAgIQAAgHgDgEQgDgEgDgBIgHgBQgHAAgFAFQgEAFAAAHIgpAAQAEgSAGgLQAIgKAJgFQAJgFAJgBQAIgBAFAAQAOAAAMAFQAMAEAIAKQAIAJABAQQgBANgGAIQgGAJgMADIAAABQAIACAGAEQAGAEAFAJQAEAIAAANQAAAPgHAMQgIALgOAHQgNAGgSAAQgQAAgLgEg");
	this.shape_43.setTransform(-65.2,-59.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAFgMALgIQAMgHAPgBIAJABQAFABAFADQAHAEAEAGIAAgMIAYAAIAABlIgYAAIAAgLIgFAGQgFADgFACQgHADgIAAQgPAAgLgIgAgNgbQgHAEgDAIQgDAHgBAIQABAJADAHQADAIAHAEQAGAFAIAAQAJAAAGgFQAHgEADgHQADgHABgKQgBgKgEgHQgDgHgHgEQgHgEgHAAQgHABgHAEg");
	this.shape_44.setTransform(-83.9,-56.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#0071BC").s().p("AgKAzIAAhQIgeAAIAAgVIBSAAIAAAVIgeAAIAABQg");
	this.shape_45.setTransform(-94.3,-56.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0071BC").s().p("Ag+BTIBChOIALgNQAEgGACgEQACgEgBgFQAAgFgCgFQgCgFgEgDQgEgDgHAAQgGAAgEADQgEAEgCAEIgDAJIAAAHIgoAAQAAgJADgKQADgLAHgJQAGgKAMgGQAMgGARAAQAUAAANAIQAOAIAFAMQAHAMAAAOQAAAJgCAIQgDAHgGAIIgPATQgKALgOANIAwAAIAAAkg");
	this.shape_46.setTransform(-111.3,-59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.7,-75.1,239.6,150.4);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662E8F").s().p("AAdBuIg1hYIgSASIAABGIhGAAIAAjbIBGAAIAABJIA+hJIBSAAIhOBRIBZCKg");
	this.shape.setTransform(32.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#662E8F").s().p("AhSBuIAAjbIBGAAIAAChIBfAAIAAA6g");
	this.shape_1.setTransform(10.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#662E8F").s().p("AArBuIgIgdIhFAAIgJAdIhFAAIBNjbIBHAAIBNDbgAgWAjIAsAAIgWhMg");
	this.shape_2.setTransform(-11.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#662E8F").s().p("AgiBuIAAihIhAAAIAAg6IDFAAIAAA6Ig/AAIAAChg");
	this.shape_3.setTransform(-33.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-20.9,91.8,41.9);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662E8F").s().p("AAdBuIg1hYIgSASIAABGIhGAAIAAjbIBGAAIAABJIA+hJIBSAAIhOBRIBZCKg");
	this.shape.setTransform(32.6,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#662E8F").s().p("AhSBuIAAjbIBGAAIAAChIBfAAIAAA6g");
	this.shape_1.setTransform(10.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#662E8F").s().p("AArBuIgIgdIhFAAIgJAdIhFAAIBNjbIBHAAIBNDbgAgWAjIAsAAIgWhMg");
	this.shape_2.setTransform(-11.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#662E8F").s().p("AgiBuIAAihIhAAAIAAg6IDFAAIAAA6Ig/AAIAAChg");
	this.shape_3.setTransform(-33.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.9,-20.9,91.8,41.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F72BA").s().p("AArBuIgIgdIhFAAIgJAdIhGAAIBOjbIBHAAIBNDbgAgWAjIAsAAIgWhMg");
	this.shape.setTransform(42.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F72BA").s().p("AgjBuIAAjbIBHAAIAADbg");
	this.shape_1.setTransform(25.8,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F72BA").s().p("AhnBuIAAjbIBVAAQAgAAAQADQAQADAMAGQAXAOAMAYQALAZAAAiQAAAmgPAZQgOAagbAMQgLAFgQACQgRACgiAAgAggA2IATAAQAZAAALgLQAKgMgBgfQABgdgLgMQgKgMgYAAIgUAAg");
	this.shape_2.setTransform(8.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F72BA").s().p("AhZBuIAAjbICvAAIAAA1IhpAAIAAAdIBYAAIAAAyIhYAAIAAAiIBtAAIAAA1g");
	this.shape_3.setTransform(-14.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F72BA").s().p("AA8BuIABhsIAAgSIAAgUIgJAkIAAACIgbBsIgxAAIgbhpIgEgQIgFgZIAAAYIABAQIAABqIhAAAIAAjbIBWAAIAeBtIADAKIAEAWIAEgTIADgNIAfhtIBWAAIAADbg");
	this.shape_4.setTransform(-39.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-20.9,113.9,41.9);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F72BA").s().p("AArBuIgIgdIhFAAIgJAdIhGAAIBOjbIBHAAIBNDbgAgWAjIAsAAIgWhMg");
	this.shape.setTransform(42.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F72BA").s().p("AgjBuIAAjbIBHAAIAADbg");
	this.shape_1.setTransform(25.8,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F72BA").s().p("AhnBuIAAjbIBVAAQAgAAAQADQAQADAMAGQAXAOAMAYQALAZAAAiQAAAmgPAZQgOAagbAMQgLAFgQACQgRACgiAAgAggA2IATAAQAZAAALgLQAKgMgBgfQABgdgLgMQgKgMgYAAIgUAAg");
	this.shape_2.setTransform(8.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F72BA").s().p("AhZBuIAAjbICvAAIAAA1IhpAAIAAAdIBYAAIAAAyIhYAAIAAAiIBtAAIAAA1g");
	this.shape_3.setTransform(-14.3,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F72BA").s().p("AA8BuIABhsIAAgSIAAgUIgJAkIAAACIgbBsIgxAAIgbhpIgEgQIgFgZIAAAYIABAQIAABqIhAAAIAAjbIBWAAIAeBtIADAKIAEAWIAEgTIADgNIAfhtIBWAAIAADbg");
	this.shape_4.setTransform(-39.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.9,-20.9,113.9,41.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1663").s().p("AhQBvIAAjdIAWAAIAADIICLAAIAAAVg");
	this.shape.setTransform(76.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1663").s().p("ABcBvIgfhFIh4AAIggBFIgWAAIBmjdIAYAAIBlDdgAgyAVIBlAAIgzhwg");
	this.shape_1.setTransform(54.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B1663").s().p("ABJBvIiZjGIAADGIgVAAIAAjdIAcAAICaDGIAAjGIAVAAIAADdg");
	this.shape_2.setTransform(29.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1663").s().p("AhUBVQgfgfAAg2QAAg1AfgfQAfggA1AAQA2AAAfAgQAfAfAAA1QAAA2gfAfQgfAgg2AAQg1AAgfgggAhEhFQgZAZAAAsQAAAtAZAZQAZAZArAAQAsAAAZgZQAZgZAAgtQAAgsgZgZQgZgZgsAAQgrAAgZAZg");
	this.shape_3.setTransform(3.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1663").s().p("AgKBvIAAjdIAVAAIAADdg");
	this.shape_4.setTransform(-13.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1663").s().p("AgKBvIAAjIIhWAAIAAgVIDBAAIAAAVIhWAAIAADIg");
	this.shape_5.setTransform(-26.9,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B1663").s().p("ABcBvIgfhFIh4AAIggBFIgWAAIBmjdIAYAAIBlDdgAgyAVIBlAAIgzhwg");
	this.shape_6.setTransform(-48.3,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B1663").s().p("ABJBvIiZjGIAADGIgVAAIAAjdIAcAAICaDGIAAjGIAVAAIAADdg");
	this.shape_7.setTransform(-72.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.2,-20.7,176.6,41.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1663").s().p("AhQBvIAAjdIAWAAIAADIICLAAIAAAVg");
	this.shape.setTransform(76.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1B1663").s().p("ABcBvIgfhFIh4AAIggBFIgWAAIBmjdIAYAAIBlDdgAgyAVIBlAAIgzhwg");
	this.shape_1.setTransform(54.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B1663").s().p("ABJBvIiZjGIAADGIgVAAIAAjdIAcAAICaDGIAAjGIAVAAIAADdg");
	this.shape_2.setTransform(29.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1B1663").s().p("AhUBVQgfgfAAg2QAAg1AfgfQAfggA1AAQA2AAAfAgQAfAfAAA1QAAA2gfAfQgfAgg2AAQg1AAgfgggAhEhFQgZAZAAAsQAAAtAZAZQAZAZArAAQAsAAAZgZQAZgZAAgtQAAgsgZgZQgZgZgsAAQgrAAgZAZg");
	this.shape_3.setTransform(3.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B1663").s().p("AgKBvIAAjdIAVAAIAADdg");
	this.shape_4.setTransform(-13.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B1663").s().p("AgKBvIAAjIIhWAAIAAgVIDBAAIAAAVIhWAAIAADIg");
	this.shape_5.setTransform(-26.9,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1B1663").s().p("ABcBvIgfhFIh4AAIggBFIgWAAIBmjdIAYAAIBlDdgAgyAVIBlAAIgzhwg");
	this.shape_6.setTransform(-48.3,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1B1663").s().p("ABJBvIiZjGIAADGIgVAAIAAjdIAcAAICaDGIAAjGIAVAAIAADdg");
	this.shape_7.setTransform(-72.9,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.2,-20.7,176.6,41.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662E8F").s().p("AgDArIAAg7IAHAAIAAA7gAgDgfQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(94.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#662E8F").s().p("AARAeIAAgcIghAAIAAAcIgIAAIAAg7IAIAAIAAAaIAhAAIAAgaIAIAAIAAA7g");
	this.shape_1.setTransform(89.5,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#662E8F").s().p("AgDArIAAg7IAHAAIAAA7gAAEgfQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgMgfQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIgCAFQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_2.setTransform(84.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#662E8F").s().p("AgPAcQgHgEgEgHQgDgIAAgJQAAgIADgIQAEgHAIgEQAHgFAHAAIAIABQAEACAEADQAEACADAGIAAgLIAIAAIAAA7IgIAAIAAgKQgEAGgGADQgGADgHABQgIAAgHgFgAgKgWQgFAEgDAFQgDAHAAAGQAAAHADAGQADAGAFADQAEAEAGAAQAHAAAFgEQAFgDACgFQAEgGAAgIQgBgGgCgGQgDgFgEgEQgGgDgGgBQgGABgFACg");
	this.shape_3.setTransform(78.6,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#662E8F").s().p("AgeAuIAAhYIAIAAIAAAKQACgDADgDQADgDAEgCQAFgCAFAAQAJAAAHAEQAHAFAEAHQADAHABAKQgBAJgDAGQgDAIgIAEQgGAEgKAAQgFAAgFgCQgEgCgCgCIgFgFIAAAmgAgMgiQgEADgDAGQgCAGgBAHQAAAIADAFQAEAGAFADQAFADAFAAQAHAAAFgEQAFgDADgGQACgFAAgHQAAgGgCgGQgCgGgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_4.setTransform(71.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#662E8F").s().p("AANAeIgbgeIAAAeIgJAAIAAg7IAJAAIAAAbIAZgbIAKAAIgbAcIAeAfg");
	this.shape_5.setTransform(64.5,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#662E8F").s().p("AgPAwIANgdIgjhCIALAAIAcA4IAag4IAKAAIgrBfg");
	this.shape_6.setTransform(57.4,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#662E8F").s().p("AgWAeIAAg7IAWAAQAIAAAEADQAEADACADIAAAGQAAAEgBADQgCAEgFACIAAABQAEAAADABQADABABAEQACADAAAEIgBAFIgCAGIgHAEQgEACgIAAgAgOAYIAPAAIAGgBIAFgDQACgCABgFIgCgEQgBgDgDgCQgCgBgGgBIgPAAgAgOgEIANAAQAFAAAEgCQACgCAAgFIAAgEQAAgCgDgBQgDgCgFgBIgNAAg");
	this.shape_7.setTransform(47.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#662E8F").s().p("AgPAcQgHgEgEgHQgEgIABgJQAAgIADgIQAEgHAHgEQAIgFAHAAIAIABQAEACAEADQADACAEAGIAAgLIAIAAIAAA7IgIAAIAAgKQgEAGgGADQgGADgHABQgIAAgHgFgAgKgWQgFAEgDAFQgDAHAAAGQAAAHADAGQADAGAFADQAFAEAFAAQAHAAAFgEQAFgDACgFQAEgGAAgIQAAgGgDgGQgDgFgEgEQgGgDgGgBQgGABgFACg");
	this.shape_8.setTransform(36.6,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#662E8F").s().p("AgDArIAAg7IAHAAIAAA7gAgDgfQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_9.setTransform(31.5,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#662E8F").s().p("AAXAmIAAgQIgtAAIAAAQIgHAAIAAgWQAGgBADgEQACgDABgGIABgJIAAgeIAmAAIAAA1IAJAAIAAAWgAgIgCQAAAFgCAFQgBAEgEAEIAdAAIAAguIgWAAg");
	this.shape_10.setTransform(26.7,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#662E8F").s().p("AgPAbQgGgEgEgHQgDgIAAgIQAAgHADgIQAEgHAGgFQAHgFAJAAQAIAAAFAEQAGADADAEQADAEACAGIABAJIAAADIgxAAQAAAGADAFQACAGAFAEQAFAEAGAAIAHgBQADgBAEgDQAEgDAEgHIAGAEQgCAEgEAFQgEAEgFACQgGADgHAAQgJgBgHgFgAAVgFQAAgFgDgFQgCgEgEgDQgEgCgGgBQgIAAgGAGQgGAFgBAJIAoAAIAAAAg");
	this.shape_11.setTransform(19.9,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#662E8F").s().p("AgVgLIgIApIgIAAIANg/IAYA0IAZg0IANA/IgIAAIgIgpIgWAtg");
	this.shape_12.setTransform(12.2,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#662E8F").s().p("AARAeIgRgZIgQAZIgKAAIAWgeIgVgdIAKAAIAPAXIAPgXIAKAAIgUAdIAWAeg");
	this.shape_13.setTransform(1.9,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#662E8F").s().p("AgXgdIAIAAIAAAqIAnguIAAA/IgIAAIAAgqIgnAug");
	this.shape_14.setTransform(-4.4,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#662E8F").s().p("AARAeIAAgcIghAAIAAAcIgIAAIAAg7IAIAAIAAAaIAhAAIAAgaIAIAAIAAA7g");
	this.shape_15.setTransform(-11.4,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#662E8F").s().p("AAfAeIgbgeIAAAeIgHAAIAAgeIgbAeIgLAAIAdgfIgbgcIAKAAIAaAcIAAgcIAHAAIAAAcIAagcIAKAAIgbAcIAdAfg");
	this.shape_16.setTransform(-19.3,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#662E8F").s().p("AgPAbQgGgEgEgHQgDgIAAgIQAAgHADgIQAEgHAGgFQAHgFAJAAQAIAAAFAEQAGADADAEQADAEACAGIABAJIAAADIgxAAQAAAGADAFQACAGAFAEQAFAEAGAAIAHgBQADgBAEgDQAEgDAEgHIAGAEQgCAEgEAFQgEAEgFACQgGADgHAAQgJgBgHgFgAAVgFQAAgFgDgFQgCgEgEgDQgEgCgGgBQgIAAgGAGQgGAFgBAJIAoAAIAAAAg");
	this.shape_17.setTransform(-27.1,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#662E8F").s().p("AASAeIAAg1IgYAAIAAAjQAAAFgCAEQgCAEgEACQgEADgIAAIAAgGQAFgBADgCQADgCAAgDIABgIIAAglIApAAIAAA7g");
	this.shape_18.setTransform(-34.4,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#662E8F").s().p("AgPAcQgHgEgEgHQgDgIgBgJQAAgIAFgIQADgHAIgEQAGgFAJAAIAHABQAEACAEADQADACADAGIAAgLIAIAAIAAA7IgIAAIAAgKQgDAGgGADQgGADgGABQgJAAgHgFgAgKgWQgFAEgDAFQgDAHAAAGQAAAHADAGQACAGAFADQAGAEAGAAQAGAAAFgEQAFgDADgFQACgGAAgIQABgGgDgGQgDgFgFgEQgEgDgHgBQgGABgFACg");
	this.shape_19.setTransform(-41.3,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#662E8F").s().p("AgKAeQgFgCgDgCIgFgIIAGgDQADAEADADQADACAEABIAFABQAGAAAEgEQAEgCABgHQAAgEgCgBQgCgDgCgBIgFgCIgDAAIgHAAIAAgFIAHAAQAFAAAEgDQADgCABgGIgCgGIgEgEIgEgBIgDAAIgEAAIgGADQgDADgDAFIgGgEQADgGAFgDQAEgDAEgBIAHgBQAFAAAFADQAEACADAEQADAEAAAFQAAAEgCADQgDAEgGADQADAAADABQADACABAEQACADAAAEQAAAGgDAFQgEADgFACQgFACgGABQgGgBgFgCg");
	this.shape_20.setTransform(-48.2,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#662E8F").s().p("AgPAbQgGgEgEgHQgDgIAAgIQAAgHADgIQAEgHAGgFQAHgFAJAAQAIAAAFAEQAGADADAEQADAEACAGIABAJIAAADIgxAAQAAAGADAFQACAGAFAEQAFAEAGAAIAHgBQADgBAEgDQAEgDAEgHIAGAEQgCAEgEAFQgEAEgFACQgGADgHAAQgJgBgHgFgAAVgFQAAgFgDgFQgCgEgEgDQgEgCgGgBQgIAAgGAGQgGAFgBAJIAoAAIAAAAg");
	this.shape_21.setTransform(-54.5,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#662E8F").s().p("AARAeIAAgcIghAAIAAAcIgIAAIAAg7IAIAAIAAAaIAhAAIAAgaIAIAAIAAA7g");
	this.shape_22.setTransform(-61.6,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#662E8F").s().p("AgUAeIAAg7IAIAAIAAAYIAMAAIAGABIAHACQAEACACACQACAEAAAGQAAAIgDAEQgEAEgFABIgJABgAgMAYIALAAIAFgBQADAAADgDQADgDAAgFQAAgFgDgDQgDgCgDgBIgEAAIgMAAg");
	this.shape_23.setTransform(-71,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#662E8F").s().p("AASAeIAAg1IgYAAIAAAjQAAAFgCAEQgCAEgEACQgEADgIAAIAAgGQAGgBACgCQADgCAAgDIAAgIIAAglIAqAAIAAA7g");
	this.shape_24.setTransform(-77.9,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#662E8F").s().p("AgQAcQgIgEgDgHQgFgIAAgJQAAgIAFgIQADgHAIgEQAHgFAJAAQAKAAAHAFQAHAEAEAHQAEAIABAIQgBAJgEAIQgEAHgHAEQgHAFgKAAQgJAAgHgFgAgLgWQgFAEgDAFQgEAGAAAHQAAAIAEAFQADAHAFACQAGAEAFAAQAGAAAGgEQAFgCADgHQADgFABgIQgBgHgDgGQgDgFgFgEQgGgCgGgBQgFABgGACg");
	this.shape_25.setTransform(-84.6,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#662E8F").s().p("AgbAwIAAhfIAbAAIAIAAIAKAEQAEACADAFQACAGABAIQgBAJgCAFQgDAFgFADQgEABgFABIgIABIgRAAIAAAtgAgRgEIARAAIAEAAQAEgBADgCQADgCACgDQACgEAAgGQAAgHgCgDQgDgEgDgCIgHgBIgDgBIgRAAg");
	this.shape_26.setTransform(-91.9,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-8.5,194.3,17.2);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662E8F").s().p("AgDArIAAg7IAHAAIAAA7gAgDgfQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape.setTransform(94.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#662E8F").s().p("AARAeIAAgcIghAAIAAAcIgIAAIAAg7IAIAAIAAAaIAhAAIAAgaIAIAAIAAA7g");
	this.shape_1.setTransform(89.5,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#662E8F").s().p("AgDArIAAg7IAHAAIAAA7gAAEgfQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBQAAAAAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAgMgfQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAIgCAFQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_2.setTransform(84.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#662E8F").s().p("AgPAcQgHgEgEgHQgDgIAAgJQAAgIADgIQAEgHAIgEQAHgFAHAAIAIABQAEACAEADQAEACADAGIAAgLIAIAAIAAA7IgIAAIAAgKQgEAGgGADQgGADgHABQgIAAgHgFgAgKgWQgFAEgDAFQgDAHAAAGQAAAHADAGQADAGAFADQAEAEAGAAQAHAAAFgEQAFgDACgFQAEgGAAgIQgBgGgCgGQgDgFgEgEQgGgDgGgBQgGABgFACg");
	this.shape_3.setTransform(78.6,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#662E8F").s().p("AgeAuIAAhYIAIAAIAAAKQACgDADgDQADgDAEgCQAFgCAFAAQAJAAAHAEQAHAFAEAHQADAHABAKQgBAJgDAGQgDAIgIAEQgGAEgKAAQgFAAgFgCQgEgCgCgCIgFgFIAAAmgAgMgiQgEADgDAGQgCAGgBAHQAAAIADAFQAEAGAFADQAFADAFAAQAHAAAFgEQAFgDADgGQACgFAAgHQAAgGgCgGQgCgGgFgEQgGgEgHAAQgHAAgFAEg");
	this.shape_4.setTransform(71.1,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#662E8F").s().p("AANAeIgbgeIAAAeIgJAAIAAg7IAJAAIAAAbIAZgbIAKAAIgbAcIAeAfg");
	this.shape_5.setTransform(64.5,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#662E8F").s().p("AgPAwIANgdIgjhCIALAAIAcA4IAag4IAKAAIgrBfg");
	this.shape_6.setTransform(57.4,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#662E8F").s().p("AgWAeIAAg7IAWAAQAIAAAEADQAEADACADIAAAGQAAAEgBADQgCAEgFACIAAABQAEAAADABQADABABAEQACADAAAEIgBAFIgCAGIgHAEQgEACgIAAgAgOAYIAPAAIAGgBIAFgDQACgCABgFIgCgEQgBgDgDgCQgCgBgGgBIgPAAgAgOgEIANAAQAFAAAEgCQACgCAAgFIAAgEQAAgCgDgBQgDgCgFgBIgNAAg");
	this.shape_7.setTransform(47.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#662E8F").s().p("AgPAcQgHgEgEgHQgEgIABgJQAAgIADgIQAEgHAHgEQAIgFAHAAIAIABQAEACAEADQADACAEAGIAAgLIAIAAIAAA7IgIAAIAAgKQgEAGgGADQgGADgHABQgIAAgHgFgAgKgWQgFAEgDAFQgDAHAAAGQAAAHADAGQADAGAFADQAFAEAFAAQAHAAAFgEQAFgDACgFQAEgGAAgIQAAgGgDgGQgDgFgEgEQgGgDgGgBQgGABgFACg");
	this.shape_8.setTransform(36.6,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#662E8F").s().p("AgDArIAAg7IAHAAIAAA7gAgDgfQgBgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_9.setTransform(31.5,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#662E8F").s().p("AAXAmIAAgQIgtAAIAAAQIgHAAIAAgWQAGgBADgEQACgDABgGIABgJIAAgeIAmAAIAAA1IAJAAIAAAWgAgIgCQAAAFgCAFQgBAEgEAEIAdAAIAAguIgWAAg");
	this.shape_10.setTransform(26.7,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#662E8F").s().p("AgPAbQgGgEgEgHQgDgIAAgIQAAgHADgIQAEgHAGgFQAHgFAJAAQAIAAAFAEQAGADADAEQADAEACAGIABAJIAAADIgxAAQAAAGADAFQACAGAFAEQAFAEAGAAIAHgBQADgBAEgDQAEgDAEgHIAGAEQgCAEgEAFQgEAEgFACQgGADgHAAQgJgBgHgFgAAVgFQAAgFgDgFQgCgEgEgDQgEgCgGgBQgIAAgGAGQgGAFgBAJIAoAAIAAAAg");
	this.shape_11.setTransform(19.9,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#662E8F").s().p("AgVgLIgIApIgIAAIANg/IAYA0IAZg0IANA/IgIAAIgIgpIgWAtg");
	this.shape_12.setTransform(12.2,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#662E8F").s().p("AARAeIgRgZIgQAZIgKAAIAWgeIgVgdIAKAAIAPAXIAPgXIAKAAIgUAdIAWAeg");
	this.shape_13.setTransform(1.9,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#662E8F").s().p("AgXgdIAIAAIAAAqIAnguIAAA/IgIAAIAAgqIgnAug");
	this.shape_14.setTransform(-4.4,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#662E8F").s().p("AARAeIAAgcIghAAIAAAcIgIAAIAAg7IAIAAIAAAaIAhAAIAAgaIAIAAIAAA7g");
	this.shape_15.setTransform(-11.4,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#662E8F").s().p("AAfAeIgbgeIAAAeIgHAAIAAgeIgbAeIgLAAIAdgfIgbgcIAKAAIAaAcIAAgcIAHAAIAAAcIAagcIAKAAIgbAcIAdAfg");
	this.shape_16.setTransform(-19.3,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#662E8F").s().p("AgPAbQgGgEgEgHQgDgIAAgIQAAgHADgIQAEgHAGgFQAHgFAJAAQAIAAAFAEQAGADADAEQADAEACAGIABAJIAAADIgxAAQAAAGADAFQACAGAFAEQAFAEAGAAIAHgBQADgBAEgDQAEgDAEgHIAGAEQgCAEgEAFQgEAEgFACQgGADgHAAQgJgBgHgFgAAVgFQAAgFgDgFQgCgEgEgDQgEgCgGgBQgIAAgGAGQgGAFgBAJIAoAAIAAAAg");
	this.shape_17.setTransform(-27.1,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#662E8F").s().p("AASAeIAAg1IgYAAIAAAjQAAAFgCAEQgCAEgEACQgEADgIAAIAAgGQAFgBADgCQADgCAAgDIABgIIAAglIApAAIAAA7g");
	this.shape_18.setTransform(-34.4,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#662E8F").s().p("AgPAcQgHgEgEgHQgDgIgBgJQAAgIAFgIQADgHAIgEQAGgFAJAAIAHABQAEACAEADQADACADAGIAAgLIAIAAIAAA7IgIAAIAAgKQgDAGgGADQgGADgGABQgJAAgHgFgAgKgWQgFAEgDAFQgDAHAAAGQAAAHADAGQACAGAFADQAGAEAGAAQAGAAAFgEQAFgDADgFQACgGAAgIQABgGgDgGQgDgFgFgEQgEgDgHgBQgGABgFACg");
	this.shape_19.setTransform(-41.3,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#662E8F").s().p("AgKAeQgFgCgDgCIgFgIIAGgDQADAEADADQADACAEABIAFABQAGAAAEgEQAEgCABgHQAAgEgCgBQgCgDgCgBIgFgCIgDAAIgHAAIAAgFIAHAAQAFAAAEgDQADgCABgGIgCgGIgEgEIgEgBIgDAAIgEAAIgGADQgDADgDAFIgGgEQADgGAFgDQAEgDAEgBIAHgBQAFAAAFADQAEACADAEQADAEAAAFQAAAEgCADQgDAEgGADQADAAADABQADACABAEQACADAAAEQAAAGgDAFQgEADgFACQgFACgGABQgGgBgFgCg");
	this.shape_20.setTransform(-48.2,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#662E8F").s().p("AgPAbQgGgEgEgHQgDgIAAgIQAAgHADgIQAEgHAGgFQAHgFAJAAQAIAAAFAEQAGADADAEQADAEACAGIABAJIAAADIgxAAQAAAGADAFQACAGAFAEQAFAEAGAAIAHgBQADgBAEgDQAEgDAEgHIAGAEQgCAEgEAFQgEAEgFACQgGADgHAAQgJgBgHgFgAAVgFQAAgFgDgFQgCgEgEgDQgEgCgGgBQgIAAgGAGQgGAFgBAJIAoAAIAAAAg");
	this.shape_21.setTransform(-54.5,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#662E8F").s().p("AARAeIAAgcIghAAIAAAcIgIAAIAAg7IAIAAIAAAaIAhAAIAAgaIAIAAIAAA7g");
	this.shape_22.setTransform(-61.6,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#662E8F").s().p("AgUAeIAAg7IAIAAIAAAYIAMAAIAGABIAHACQAEACACACQACAEAAAGQAAAIgDAEQgEAEgFABIgJABgAgMAYIALAAIAFgBQADAAADgDQADgDAAgFQAAgFgDgDQgDgCgDgBIgEAAIgMAAg");
	this.shape_23.setTransform(-71,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#662E8F").s().p("AASAeIAAg1IgYAAIAAAjQAAAFgCAEQgCAEgEACQgEADgIAAIAAgGQAGgBACgCQADgCAAgDIAAgIIAAglIAqAAIAAA7g");
	this.shape_24.setTransform(-77.9,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#662E8F").s().p("AgQAcQgIgEgDgHQgFgIAAgJQAAgIAFgIQADgHAIgEQAHgFAJAAQAKAAAHAFQAHAEAEAHQAEAIABAIQgBAJgEAIQgEAHgHAEQgHAFgKAAQgJAAgHgFgAgLgWQgFAEgDAFQgEAGAAAHQAAAIAEAFQADAHAFACQAGAEAFAAQAGAAAGgEQAFgCADgHQADgFABgIQgBgHgDgGQgDgFgFgEQgGgCgGgBQgFABgGACg");
	this.shape_25.setTransform(-84.6,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#662E8F").s().p("AgbAwIAAhfIAbAAIAIAAIAKAEQAEACADAFQACAGABAIQgBAJgCAFQgDAFgFADQgEABgFABIgIABIgRAAIAAAtgAgRgEIARAAIAEAAQAEgBADgCQADgCACgDQACgEAAgGQAAgHgCgDQgDgEgDgCIgHgBIgDgBIgRAAg");
	this.shape_26.setTransform(-91.9,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-8.5,194.3,17.2);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8lUiMAAAgpDMA5LAAAMAAAApDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-182.9,-131.3,365.9,262.8), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDB4C").s().p("A9cXDMAAAguFMA65AAAMAAAAuFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-188.5,-147.4,377,295), null);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("A5kSYMAAAgkvMAzJAAAMAAAAkvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4copy, new cjs.Rectangle(-163.6,-117.6,327.4,235.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662D91").s().p("A5kSYMAAAgkvMAzJAAAMAAAAkvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-163.6,-117.6,327.4,235.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0071BC").s().p("A0xNeIAA67MApjAAAIAAa7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-133,-86.2,266.1,172.5), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A7JUcMAAAgo3MA2TAAAMAAAAo3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-173.8,-130.7,347.6,261.5), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDB4C").s().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-153.6,-132.5,307.4,265.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B1464").s().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-153.6,-132.5,307.4,265.2), null);


(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A5xWXMAAAgstMAzjAAAMAAAAstg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-143,329.9,286.2);


(lib._8ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAgQgOgNAAgTQAAgSAOgNQANgOASAAQATAAANAOQAOANAAASQAAATgOANQgNAOgTAAQgSAAgNgOg");
	this.shape.setTransform(15.1,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGg");
	this.shape_1.setTransform(23.9,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAAQABgEADABQAEgBAAAEQAAAFgEAAQgDAAgBgFg");
	this.shape_2.setTransform(0.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.9,28.6);


(lib._7ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape.setTransform(15.6,29.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQASQgIgIABgKQgBgJAIgIQAHgHAJAAQAKAAAHAHQAIAIgBAJQABAKgIAIQgHAHgKAAQgJAAgHgHg");
	this.shape_1.setTransform(39.1,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAbQgLgMAAgPQAAgPALgLQALgLAPAAQAPAAAMALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_2.setTransform(24.4,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.6,4.1,29.9,29.8);


(lib._6ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1563").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(1.4,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1563").s().p("AgRARQgGgHAAgKQAAgJAGgIQAIgGAJAAQAKAAAHAGQAIAIgBAJQABAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_1.setTransform(59.2,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1563").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgGAFAAQAHAAAFAGQAEAEAAAGQAAAHgEAEQgFAGgHAAQgFAAgFgGg");
	this.shape_2.setTransform(57.4,18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1563").s().p("AgbAdQgNgMAAgRQAAgPANgNQAMgMAPAAQARAAALAMQAMANAAAPQAAARgMAMQgLAMgRgBQgPABgMgMg");
	this.shape_3.setTransform(36,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1563").s().p("AgJAJQgDgEAAgFQAAgFADgEQAFgDAEAAQAFAAAEADQAFAEAAAFQAAAFgFAEQgEAFgFAAQgEAAgFgFg");
	this.shape_4.setTransform(11.1,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.7,47.3);


(lib._5ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1563").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKALAAANQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape.setTransform(3.5,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1563").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAFQAAAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(59.5,29.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1563").s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_2.setTransform(46.6,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C1563").s().p("AgWAYQgKgKAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAANQAAAOgJAKQgKAJgOAAQgNAAgJgJg");
	this.shape_3.setTransform(20.9,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1563").s().p("AgDAAQAAgDADgBQAEABABADQgBAFgEgBQgDABAAgFg");
	this.shape_4.setTransform(1.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.9,50.4);


(lib._4ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F72BA").s().p("AgGAAQABgGAFABQAHgBgBAGQABAGgHABQgFgBgBgGg");
	this.shape.setTransform(0.7,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F72BA").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(139.9,80.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F72BA").s().p("AgJAJQgDgEAAgFQAAgEADgFQAEgDAFAAQAGAAADADQAEAFABAEQgBAFgEAEQgDAFgGAAQgFAAgEgFg");
	this.shape_2.setTransform(137.3,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F72BA").s().p("AgOAOQgFgFAAgJQAAgIAFgFQAHgHAHAAQAIAAAHAHQAFAFAAAIQAAAJgFAFQgHAHgIAAQgHAAgHgHg");
	this.shape_3.setTransform(125.1,30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F72BA").s().p("AgXAYQgJgKgBgOQABgNAJgJQAKgLANAAQAOAAAKALQAJAJABANQgBAOgJAKQgKAKgOAAQgNAAgKgKg");
	this.shape_4.setTransform(104.9,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F72BA").s().p("AgbAdQgMgMAAgRQAAgQAMgMQALgMAQAAQARAAALAMQANAMAAAQQAAARgNAMQgLAMgRgBQgQABgLgMg");
	this.shape_5.setTransform(79.7,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F72BA").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAOAAAKAKQALALAAANQAAAOgLALQgKAKgOAAQgNAAgLgKg");
	this.shape_6.setTransform(53.1,5.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F72BA").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_7.setTransform(28.9,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F72BA").s().p("AgDAEQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgFAFAAQAGAAAAAFQAAAGgGAAQAAAAAAAAQAAAAgBgBQgBAAAAAAQgBgBAAAAg");
	this.shape_8.setTransform(10.5,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.6,82);


(lib._3ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F72BA").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(1.2,74.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F72BA").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(141.7,67.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F72BA").s().p("AgKALQgFgFABgGQgBgFAFgFQAFgFAFAAQAGAAAFAFQAFAFgBAFQABAGgFAFQgFAEgGABQgFgBgFgEg");
	this.shape_2.setTransform(134.1,41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F72BA").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgHAIgMAAQgKAAgIgIg");
	this.shape_3.setTransform(117.6,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F72BA").s().p("AgbAbQgKgLgBgQQABgPAKgMQAMgLAPABQAQgBALALQAMAMAAAPQAAAQgMALQgLALgQAAQgPAAgMgLg");
	this.shape_4.setTransform(94.5,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F72BA").s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape_5.setTransform(68.1,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F72BA").s().p("AgSAUQgJgIABgMQgBgKAJgJQAIgIAKAAQAMAAAHAIQAJAJAAAKQAAAMgJAIQgHAIgMAAQgKAAgIgIg");
	this.shape_6.setTransform(42.3,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F72BA").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_7.setTransform(20.6,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F72BA").s().p("AgDAAQAAgEADABQAEgBABAEQgBAFgEAAQgDAAAAgFg");
	this.shape_8.setTransform(6.2,48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.1,75.6);


(lib._2ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662E8F").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAGgGAJgBQAJABAHAGQAHAHAAAIQAAAJgHAHQgHAGgJABQgJgBgGgGg");
	this.shape.setTransform(2.3,216);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#662E8F").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_1.setTransform(329.8,216.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#662E8F").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_2.setTransform(334.6,189.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#662E8F").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFAAQAGAAAFAEQAEAEAAAFQAAAGgEAFQgFADgGAAQgFAAgEgDg");
	this.shape_3.setTransform(335.2,163);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#662E8F").s().p("AgJAKQgDgFAAgFQAAgEADgFQAFgEAEABQAFgBAEAEQAFAFAAAEQAAAFgFAFQgEAEgFgBQgEABgFgEg");
	this.shape_4.setTransform(331.5,136.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#662E8F").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(323.6,110.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#662E8F").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_6.setTransform(311.7,86.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#662E8F").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_7.setTransform(296.2,64.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#662E8F").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_8.setTransform(277.4,45.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#662E8F").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgKAMAAQANAAAKAKQAJAKAAAMQAAANgJAKQgKAKgNAAQgMAAgKgKg");
	this.shape_9.setTransform(255.8,29.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#662E8F").s().p("AgZAaQgLgLAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_10.setTransform(231.9,16.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#662E8F").s().p("AgbAcQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAAQgMAMQgMAMgQAAQgQAAgLgMg");
	this.shape_11.setTransform(206.3,8.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#662E8F").s().p("AgbAdQgMgMgBgRQABgQAMgLQALgMAQAAQARAAAMAMQAMALgBAQQABARgMAMQgMALgRAAQgQAAgLgLg");
	this.shape_12.setTransform(179.8,4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#662E8F").s().p("AgaAbQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAAMALQALAMAAAPQAAAQgLALQgMAMgQAAQgPAAgLgMg");
	this.shape_13.setTransform(152.8,4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#662E8F").s().p("AgYAZQgKgLAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgOAAgKgKg");
	this.shape_14.setTransform(126.3,8.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#662E8F").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_15.setTransform(100.7,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#662E8F").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_16.setTransform(76.8,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.7,218.5);


(lib._1ai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662E8F").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape.setTransform(1.9,203.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#662E8F").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHg");
	this.shape_1.setTransform(8.8,229.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#662E8F").s().p("AgPAQQgHgGAAgKQAAgIAHgIQAHgGAIAAQAKAAAGAGQAHAIAAAIQAAAJgHAHQgGAIgKAAQgIAAgHgIg");
	this.shape_2.setTransform(328.3,229.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#662E8F").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_3.setTransform(335.3,203.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#662E8F").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_4.setTransform(338,177);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#662E8F").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_5.setTransform(336.4,150.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#662E8F").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_6.setTransform(330.6,123.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#662E8F").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_7.setTransform(320.7,98.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#662E8F").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_8.setTransform(307,75.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#662E8F").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_9.setTransform(289.8,55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#662E8F").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgIgJg");
	this.shape_10.setTransform(269.5,37.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#662E8F").s().p("AgYAYQgKgJAAgPQAAgNAKgKQALgLANABQAOgBAKALQALAKAAANQAAAOgLAKQgKAKgOAAQgNAAgLgKg");
	this.shape_11.setTransform(246.6,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#662E8F").s().p("AgaAbQgLgLAAgQQAAgOALgMQALgMAPAAQAQAAALAMQALAMAAAOQAAAQgLALQgLAMgQAAQgPAAgLgMg");
	this.shape_12.setTransform(221.8,12.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#662E8F").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQARAAAMAMQALAMAAAPQAAARgLALQgMAMgRAAQgPAAgMgMg");
	this.shape_13.setTransform(195.7,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#662E8F").s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQAQAAANAMQALALAAAQQAAARgLALQgNAMgQAAQgPAAgMgMg");
	this.shape_14.setTransform(168.9,4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#662E8F").s().p("AgZAaQgLgKAAgQQAAgOALgLQALgLAOAAQAQAAAKALQALALAAAOQAAAQgLAKQgKALgQAAQgOAAgLgLg");
	this.shape_15.setTransform(142,6.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#662E8F").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_16.setTransform(115.9,12.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#662E8F").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKABQAKgBAIAIQAHAHAAAKQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_17.setTransform(91.1,22.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#662E8F").s().p("AgMANQgFgGAAgHQAAgHAFgFQAGgFAGAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_18.setTransform(68.2,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,339.6,232.1);


// stage content:
(lib.banner1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.Button.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://nationalmediatalk.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(179));

	// URL
	this.Button = new lib.Button();
	this.Button.parent = this;
	this.Button.setTransform(150.2,129.8);
	this.Button.alpha = 0.012;
	new cjs.ButtonHelper(this.Button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Button).wait(203));

	// Layer 31
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9cXDMAAAguFMA65AAAMAAAAuFg");
	this.shape.setTransform(522.6,126);

	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(305.8,126,1,1,0,0,0,-188.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},192).to({state:[{t:this.instance}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(192).to({_off:false},0).to({regX:-188.4,scaleX:0.05,x:7.4},10,cjs.Ease.quintIn).wait(1));

	// Layer 32
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(488.7,128.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).to({x:194.9},10,cjs.Ease.quintIn).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_139 = new cjs.Graphics().p("A5kYFMAAAgxPMAzJAAAMAAAAxPg");
	var mask_graphics_140 = new cjs.Graphics().p("A5kYoMAAAgxQMAzJAAAMAAAAxQg");
	var mask_graphics_141 = new cjs.Graphics().p("A5kYpMAAAgxRMAzJAAAMAAAAxRg");
	var mask_graphics_142 = new cjs.Graphics().p("A5kYpMAAAgxQMAzJAAAMAAAAxQg");
	var mask_graphics_143 = new cjs.Graphics().p("A5kYoMAAAgxPMAzJAAAMAAAAxPg");
	var mask_graphics_144 = new cjs.Graphics().p("A5kYoMAAAgxPMAzJAAAMAAAAxPg");
	var mask_graphics_145 = new cjs.Graphics().p("A5kYoMAAAgxQMAzJAAAMAAAAxQg");
	var mask_graphics_146 = new cjs.Graphics().p("A5kYpMAAAgxRMAzJAAAMAAAAxRg");
	var mask_graphics_147 = new cjs.Graphics().p("A5kYpMAAAgxQMAzJAAAMAAAAxQg");
	var mask_graphics_148 = new cjs.Graphics().p("A5kYoMAAAgxPMAzJAAAMAAAAxPg");
	var mask_graphics_149 = new cjs.Graphics().p("A5kYoMAAAgxPMAzJAAAMAAAAxPg");
	var mask_graphics_150 = new cjs.Graphics().p("A5kYpMAAAgxRMAzJAAAMAAAAxRg");
	var mask_graphics_151 = new cjs.Graphics().p("A5kYpMAAAgxRMAzJAAAMAAAAxRg");
	var mask_graphics_152 = new cjs.Graphics().p("A5kYpMAAAgxQMAzJAAAMAAAAxQg");
	var mask_graphics_153 = new cjs.Graphics().p("A5kYoMAAAgxPMAzJAAAMAAAAxPg");
	var mask_graphics_154 = new cjs.Graphics().p("A5kYoMAAAgxQMAzJAAAMAAAAxQg");
	var mask_graphics_155 = new cjs.Graphics().p("A5kYpMAAAgxRMAzJAAAMAAAAxRg");
	var mask_graphics_156 = new cjs.Graphics().p("A5kYpMAAAgxQMAzJAAAMAAAAxQg");
	var mask_graphics_157 = new cjs.Graphics().p("A5kYoMAAAgxPMAzJAAAMAAAAxPg");
	var mask_graphics_158 = new cjs.Graphics().p("A5kYoMAAAgxPMAzJAAAMAAAAxPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(139).to({graphics:mask_graphics_139,x:153.6,y:-161.1}).wait(1).to({graphics:mask_graphics_140,x:153.6,y:-151}).wait(1).to({graphics:mask_graphics_141,x:153.6,y:-137.3}).wait(1).to({graphics:mask_graphics_142,x:153.6,y:-123.7}).wait(1).to({graphics:mask_graphics_143,x:153.6,y:-110}).wait(1).to({graphics:mask_graphics_144,x:153.6,y:-96.3}).wait(1).to({graphics:mask_graphics_145,x:153.6,y:-82.7}).wait(1).to({graphics:mask_graphics_146,x:153.6,y:-69}).wait(1).to({graphics:mask_graphics_147,x:153.6,y:-55.3}).wait(1).to({graphics:mask_graphics_148,x:153.6,y:-41.7}).wait(1).to({graphics:mask_graphics_149,x:153.6,y:-28}).wait(1).to({graphics:mask_graphics_150,x:153.6,y:-14.3}).wait(1).to({graphics:mask_graphics_151,x:153.6,y:-0.7}).wait(1).to({graphics:mask_graphics_152,x:153.6,y:13}).wait(1).to({graphics:mask_graphics_153,x:153.6,y:26.7}).wait(1).to({graphics:mask_graphics_154,x:153.6,y:40.3}).wait(1).to({graphics:mask_graphics_155,x:153.6,y:54}).wait(1).to({graphics:mask_graphics_156,x:153.6,y:67.7}).wait(1).to({graphics:mask_graphics_157,x:153.6,y:81.3}).wait(1).to({graphics:mask_graphics_158,x:153.6,y:95}).wait(45));

	// text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguA4IA+hnIg9AAIAAgRIBcAAIhOCBg");
	this.shape_1.setTransform(211,167.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABA/IAAhsIgVAAIALgRIAeAAIAAB9g");
	this.shape_2.setTransform(199.4,167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA+QgHgDgGgHQgGgIgEgIQgEgKgBgIQgBgKAAgIQAAgHABgKQABgJAEgJQAEgIAGgIQAGgHAHgDQAHgEAIABQAIgBAHAEQAHADAGAHQAHAIAEAIQADAJABAJIACARIgCASQgBAIgDAKQgEAIgHAIQgGAHgHADQgHAEgIgBQgIABgHgEgAgJgtQgEADgDAFQgEAHgCAGIgCAOIgBAKIABAKIACAPQACAGAEAHQADAEAEADQAEADAFAAQAFAAAFgDQAEgDADgEQAEgHACgGIACgPIABgKIgBgKIgCgOQgCgGgEgHQgDgFgEgDQgFgCgFAAQgFAAgEACg");
	this.shape_3.setTransform(189.5,167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpBAIArg1IAIgJIAHgJIAEgIQACgEAAgGQAAgGgCgEQgDgFgEgDQgFgDgHAAQgFAAgEADQgFADgDAFQgDAFgBAHIgSAAQAAgIADgHQACgHAFgGQAGgGAHgDQAHgDAJAAQANAAAJAFQAJAFAFAJQAEAJAAAKQAAAHgCAHIgHAMIgIAKIgKAMIgTAYIAuAAIAAARg");
	this.shape_4.setTransform(178.4,166.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOAoIAAgeIgDAAIgVAeIgWAAIAZggIgHgCIgFgEQgFgDgBgFIgBgHIABgJQACgFAEgFQAFgEAGgCIALgBIAeAAIAABPgAgBgXIgFACIgCADIgCAFIACAFIACADIAEABIAFAAIALAAIAAgTIgLAAIgDAAIgBAAg");
	this.shape_5.setTransform(165,169.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQAoIAAgiIgfAAIAAAiIgTAAIAAhPIATAAIAAAeIAfAAIAAgeIATAAIAABPg");
	this.shape_6.setTransform(157,169.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAoIAAg+IgXAAIAAgRIA/AAIAAARIgXAAIAAA+g");
	this.shape_7.setTransform(149,169.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAoIAAhPIAfAAIAJABQAEABAFADIAEAFQADAEAAAGQgBAFgCAEQgCAEgEADIAFACIAFACQADACABAEQACAEAAAFQAAAHgDAFQgCAEgEADQgEADgFABIgJABgAgNAZIAOAAIAEgBIAFgCIADgDIABgEIgBgDIgDgEIgFgBIgEgBIgOAAgAgNgIIAKAAIADAAIADgBIADgDIABgEIAAgDIgDgDIgEgCIgEAAIgJAAg");
	this.shape_8.setTransform(141.6,169.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAkQgJgFgGgJQgFgKAAgMQAAgLAFgKQAGgJAJgGQAKgFALAAQANAAAJAFQAKAGAFAJQAGAKgBALQABAMgGAKQgFAJgKAFQgJAGgNAAQgLAAgKgGgAgKgWQgFADgEAFQgDAGAAAIQAAAJADAGQAEAFAFADQAGACAEAAQAGAAAGgCQAEgDAEgFQADgGAAgJQAAgIgDgGQgDgFgGgDQgFgDgGAAIgBAAQgEAAgFADg");
	this.shape_9.setTransform(132.3,169.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAjAoIgagjIAAAjIgSAAIAAgjIgZAjIgXAAIAhgqIgfglIAXAAIAXAeIAAgeIASAAIAAAeIAYgeIAXAAIggAlIAiAqg");
	this.shape_10.setTransform(121.5,169.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABA/IAAhsIgVAAIALgRIAeAAIAAB9g");
	this.shape_11.setTransform(105.4,167);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSA+QgIgEgEgFQgEgFgDgFIgBgHIgBgHIATAAQAAAIAFAGQAGAFAJAAQAKAAAFgGQAGgGAAgLQAAgIgFgHQgGgFgKAAIgDAAIAAgQIADAAIAHgBQAFgBAEgEQADgDAAgIQAAgJgEgFQgGgFgJAAQgGgBgFAFQgGAEAAAJIgTAAQABgIACgFIAEgHQAEgGAFgDQAFgDAGgBIAJgBQAMgBAJAFQAIAEAFAJQAEAHAAALQAAAHgCAFIgFAJIgGAGQAIADADAIQAFAHAAAKQAAAFgDAHQgBAHgFAHQgEAGgJAEQgHADgMAAQgLABgHgEg");
	this.shape_12.setTransform(95.1,167);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAlQgJgGgFgKQgGgJAAgMQAAgMAGgJQAFgJAJgGQAKgFALAAQAMAAAKAFQAJAGAGAJQAGAJgBAMQABAMgGAJQgGAKgJAGQgKAFgMAAQgLAAgKgFgAgKgWQgFACgEAGQgDAGAAAIQAAAJADAFQADAHAGACQAFADAFAAQAGAAAGgDQAEgCAEgHQAEgFgBgJQABgIgEgGQgDgGgGgCQgFgDgGABIgBgBQgEAAgFADg");
	this.shape_13.setTransform(229.2,145.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcAzIAAgXIg3AAIAAAXIgRAAIAAgnQAGAAAEgEIAFgHQACgDABgFQAAgFAAgGIAAggIA7AAIAAA+IAMAAIAAAngAgIgLQgBAKgCAFQgEAGgCACIAgAAIAAguIgXAAg");
	this.shape_14.setTransform(219.6,146.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAnQgIgEgGgFQgFgGgDgIQgDgHAAgJQABgKADgIQAEgHAFgFQAHgGAHgDQAHgCAJAAQAHAAAFACQAGABAEACIAAAUQgEgEgGgCQgGgCgGAAQgFAAgFABQgDACgEAEQgEADgBAFIAjAAIAAAQIgkAAQABAGAEAFQADAEAFACQAEACAGAAQAJAAAFgDIAIgGIAAATQgDADgFABQgFACgJAAQgLAAgHgDg");
	this.shape_15.setTransform(206.8,145.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAkQgJgGgEgKQgGgJAAgLQABgKAEgJQAEgKAKgGQAIgGAMAAIAGABIAJADQAFADAEAFIAAgKIARAAIAABPIgRAAIAAgJIgGAFIgHAEQgFACgGAAQgMAAgIgGgAgKgVQgEADgEAGQgCAGAAAGQAAAHACAGQADAGAFADQAFAEAGAAQAHAAAFgEQAFgDADgGQADgGgBgHQAAgHgDgGQgDgGgFgDQgFgCgGAAQgFAAgGADg");
	this.shape_16.setTransform(197.6,145.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAoIAAhPIAfAAIAJABQAEABAFADIAEAFQADAEAAAGQgBAFgCAEQgCAEgEADIAFACIAFACQADACABAEQACAEAAAFQAAAHgDAFQgCAEgEADQgEADgFABIgJABgAgNAZIAOAAIAEgBIAFgCIADgDIABgEIgBgDIgDgEIgFgBIgEgBIgOAAgAgNgIIAKAAIADAAIADgBIADgDIABgEIAAgDIgDgDIgEgCIgEAAIgJAAg");
	this.shape_17.setTransform(188.9,145.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkgmIATAAIAAAsIA2gzIAABVIgTAAIAAgtIg2Azg");
	this.shape_18.setTransform(179.8,145.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoA8IAAh1IATAAIAAAJQAGgHAHgCQAGgCAEAAQAKAAAJAFQAJAFAGAKQAEAJAAANQAAANgFAIQgFAKgJAFQgJAFgJAAIgGgBQgEAAgFgDQgFgCgEgFIAAAvgAgLgnQgFACgDAGQgDAGAAAIQAAAHACAGQADAFAFADQAFAEAHAAQAHAAAFgEQAEgDADgFQACgGAAgHQAAgIgCgGQgEgGgFgCQgFgDgFAAQgFAAgGADg");
	this.shape_19.setTransform(170.2,147.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgIAoIAAg+IgYAAIAAgRIBAAAIAAARIgXAAIAAA+g");
	this.shape_20.setTransform(161.7,145.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAPAoIAAgeIgFAAIgUAeIgWAAIAZggIgGgCIgHgEQgEgDgBgFIgCgHIACgJQABgFAFgFQAFgEAGgCIALgBIAeAAIAABPgAgBgXIgEACIgEADIgBAFIABAFIADADIAEABIAGAAIALAAIAAgTIgMAAIgCAAIgCAAg");
	this.shape_21.setTransform(149.7,145.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIA+IAAhOIARAAIAABOgAgHgpQgEgEAAgFQAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_22.setTransform(144.2,143.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAYAzIAAgXIhAAAIAAhOIATAAIAAA+IAeAAIAAg+IASAAIAAA+IAOAAIAAAng");
	this.shape_23.setTransform(138,146.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAkQgIgGgEgKQgGgJAAgLQABgKAEgJQAFgKAIgGQAJgGANAAIAFABIAJADQAEADAEAFIAAgKIASAAIAABPIgSAAIAAgJIgEAFIgIAEQgFACgGAAQgMAAgJgGgAgJgVQgGADgCAGQgDAGAAAGQAAAHADAGQACAGAFADQAFAEAGAAQAHAAAFgEQAFgDADgGQACgGAAgHQABgHgEgGQgDgGgFgDQgFgCgGAAQgFAAgFADg");
	this.shape_24.setTransform(127.6,145.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoA8IAAh1IATAAIAAAJQAGgHAHgCQAGgCAEAAQAKAAAKAFQAIAFAGAKQAEAJAAANQAAANgFAIQgFAKgJAFQgJAFgJAAIgGgBQgEAAgFgDQgFgCgEgFIAAAvgAgLgnQgFACgDAGQgDAGAAAIQAAAHACAGQADAFAFADQAFAEAHAAQAHAAAFgEQAEgDADgFQACgGABgHQAAgIgDgGQgEgGgFgCQgFgDgFAAQgFAAgGADg");
	this.shape_25.setTransform(118,147.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAoIAAg+IgYAAIAAgRIBAAAIAAARIgXAAIAAA+g");
	this.shape_26.setTransform(109.5,145.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgGAnQgIgDgHgGQgFgGgDgIQgDgHAAgJQABgKADgIQAEgHAFgFQAHgGAHgDQAGgCAJAAQAIAAAGACQAFABAEADIAAAYQgEgGgGgEQgGgDgHAAQgGAAgFACQgFADgDAGQgDAGgBAHQABAHACAGQADAGAFADQAFAEAHAAQAHAAAFgDQAFgDADgDIADgFIAAAYQgGAEgFABIgLABQgKAAgHgDg");
	this.shape_27.setTransform(102.2,145.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIAnQgHgEgFgFQgHgGgCgIQgDgHAAgJQABgKADgIQAEgHAFgFQAHgGAHgDQAHgCAIAAQAIAAAGACQAFABAEACIAAAUQgEgEgGgCQgGgCgGAAQgFAAgFABQgEACgDAEQgDADgCAFIAjAAIAAAQIgjAAQAAAGAEAFQADAEAEACQAFACAGAAQAJAAAFgDIAIgGIAAATQgDADgFABQgFACgKAAQgKAAgIgDg");
	this.shape_28.setTransform(94.1,145.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAmQgIgFgHgJQgFgKAAgNQAAgNAEgJQAFgJAJgGQAIgFALAAQALAAAHAEQAIAEAEAHQAEAFACAHIABAQIAAACIg3AAQAAAIADAEQAEAFAEACQAFADAEAAQAEAAADgCIAGgDIADgDQADgCACgGIAPAJIgEAHIgGAGQgFAFgGABIgJADIgIABQgIAAgJgEgAASgKQgBgHgFgEQgFgDgHAAQgFAAgFADQgGAFgBAGIAjAAIAAAAg");
	this.shape_29.setTransform(85.6,145.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgiA/IAAh9IAbAAIAMABQAHACAIAEQAGAEAEAFQADAGABAFIACALQgBAKgEAGQgDAHgFADQgIAGgIACQgHACgGAAIgJAAIAAAzgAgPgFIAJAAIAIgBQAGgBAEgFQADgEABgJQAAgGgDgEQgDgFgEgBIgHgCIgGgBIgIAAg");
	this.shape_30.setTransform(77.1,143.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAzA5IAAhAIgBgFQAAgFgDgDQgDgEgGAAQgFAAgEADQgDACgEAFQgCAFAAAIIAAA6IgnAAIAAhAIAAgFQgBgFgDgDQgCgEgHAAQgFAAgEADQgEACgCAFQgDAFAAAIIAAA6IgoAAIAAhuIAoAAIAAAMQAHgIAJgEQAJgDAKAAQAMAAAHADQAJAFAFAJQAGgKAJgEQAIgDAMAAQAOgBAJAHQAIAGAEAJQADAJAAAJIAABKg");
	this.shape_31.setTransform(270,116.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglAzQgPgIgGgNQgIgOABgQQgBgPAIgOQAGgNAPgIQAPgJAWABQAWgBAPAJQAQAIAGANQAIAOAAAPQAAAQgIAOQgGANgQAIQgPAJgWAAQgWAAgPgJgAgSgVQgGAIAAANQAAAOAGAIQAHAJALAAQAMAAAGgJQAHgIgBgOQABgNgHgIQgGgJgMABQgLgBgHAJg");
	this.shape_32.setTransform(252.3,116.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRA0QgNgGgHgOQgIgOAAgSQAAgPAGgOQAHgNAMgIQANgJASABQAJAAAIACQAJACAJAEIAAAjQgGgFgHgDQgHgEgHAAQgLABgGAHQgFAIAAALQAAAMAFAHQAHAIAMAAQAFAAAGgCQAGgDAIgGIAAAjIgGACIgNAFQgHACgJAAQgQAAgMgIg");
	this.shape_33.setTransform(239.6,116.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgQAQQgGgGAAgKQAAgIAGgIQAHgGAJAAQAKAAAGAGQAHAIABAIQgBAKgHAGQgGAIgKAAQgJAAgHgIg");
	this.shape_34.setTransform(230.6,120.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOBUIgoguIAAAuIgoAAIAAinIAoAAIAABjIAlgqIAyAAIgzA0IA5A6g");
	this.shape_35.setTransform(220.3,113.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_36.setTransform(209.1,113.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AglA1QgLgHgHgOQgHgNAAgTQAAgKADgKQACgLAHgIQAGgJAKgFQAKgFANAAQALgBAJAFQAIAEAIAJIAAgNIAmAAIAABuIgmAAIAAgNQgGAHgJAFQgJAFgMAAQgOAAgMgHgAgLgVQgFAEgCAFQgDAHAAAFQAAAHADAGQACAGAGAEQAFAEAHAAQALAAAHgHQAGgHAAgNQAAgLgGgHQgHgHgLAAQgHAAgGAEg");
	this.shape_37.setTransform(198.1,116.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_38.setTransform(187.1,115.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglA1QgLgHgHgOQgHgNAAgTQAAgKADgKQACgLAHgIQAGgJAKgFQAKgFANAAQALgBAJAFQAIAEAIAJIAAgNIAmAAIAABuIgmAAIAAgNQgGAHgJAFQgJAFgMAAQgOAAgMgHgAgLgVQgFAEgCAFQgDAHAAAFQAAAHADAGQACAGAGAEQAFAEAHAAQALAAAHgHQAGgHAAgNQAAgLgGgHQgHgHgLAAQgHAAgGAEg");
	this.shape_39.setTransform(175.4,116.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_40.setTransform(165.1,114.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AglBPQgLgGgIgOQgHgOAAgSQAAgLAEgKQACgKAHgIQAGgJAJgGQALgEANAAQALgBAHAEQAJADAHAJIAAhFIAoAAIAACnIgnAAIAAgNQgFAIgJAFQgKAEgLABQgOAAgMgIgAgLAFQgFADgDAGQgCAGAAAHQAAAGACAHQADAGAFAEQAFADAIAAQALABAGgIQAHgGAAgNQAAgMgHgIQgGgGgLgBQgIAAgFAFg");
	this.shape_41.setTransform(154.2,114.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAA7QgQAAgOgGQgOgHgIgOQgIgNAAgTQAAgRAHgOQAHgNAOgHQAOgIASAAQAUAAAMAHQAMAHAHALQAGALACALQACAMAAAJIhUAAQAAAHADAGQACAGAGADQAFAEAHAAQAJAAAFgDQAGgEABgHIAnAAQgFAOgIAIQgJAIgJAEQgJADgIABIgJABIgDgBgAAWgMQAAgGgDgFQgCgFgFgEQgFgDgHAAQgGAAgFADQgFADgDAGQgCAFgBAGIAsAAIAAAAg");
	this.shape_42.setTransform(140.3,116.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAyA5IAAhAIAAgFQgBgFgCgDQgDgEgGAAQgEAAgEADQgFACgCAFQgDAFAAAIIAAA6IgnAAIAAhAIgBgFQAAgFgDgDQgCgEgHAAQgFAAgDADQgEACgDAFQgDAFAAAIIAAA6IgoAAIAAhuIAoAAIAAAMQAHgIAJgEQAJgDAKAAQALAAAIADQAJAFAEAJQAHgKAIgEQAJgDALAAQAPgBAJAHQAIAGADAJQAEAJAAAJIAABKg");
	this.shape_43.setTransform(123.3,116.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTBUIAAinIAnAAIAACng");
	this.shape_44.setTransform(109.6,113.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AglA1QgLgHgHgOQgHgNAAgTQAAgKADgKQACgLAHgIQAGgJAKgFQAKgFANAAQALgBAJAFQAIAEAIAJIAAgNIAmAAIAABuIgmAAIAAgNQgGAHgJAFQgJAFgMAAQgOAAgMgHgAgLgVQgFAEgCAFQgDAHAAAFQAAAHADAGQACAGAGAEQAFAEAHAAQALAAAHgHQAGgHAAgNQAAgLgGgHQgHgHgLAAQgHAAgGAEg");
	this.shape_45.setTransform(98.7,116.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AARA5IAAg7IAAgJQgBgFgDgDQgDgFgGAAQgFAAgFADQgEADgDAGQgEAHAAAIIAAA2IgoAAIAAhuIAoAAIAAAOQAGgJAKgEQAIgFALABQAOAAAIAEQAIAGAEAIQADAHABAJIACAPIAABAg");
	this.shape_46.setTransform(84.8,116.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AglAzQgPgIgGgNQgIgOABgQQgBgPAIgOQAGgNAPgIQAPgJAWABQAWgBAPAJQAPAIAHANQAIAOAAAPQAAAQgIAOQgHANgPAIQgPAJgWAAQgWAAgPgJgAgSgVQgGAIAAANQAAAOAGAIQAHAJALAAQAMAAAGgJQAHgIAAgOQAAgNgHgIQgGgJgMABQgLgBgHAJg");
	this.shape_47.setTransform(70.4,116.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_48.setTransform(59.7,114.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_49.setTransform(52.3,115.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AglA1QgLgHgHgOQgHgNAAgTQAAgKADgKQACgLAHgIQAGgJAKgFQAKgFANAAQALgBAJAFQAIAEAIAJIAAgNIAmAAIAABuIgmAAIAAgNQgGAHgJAFQgJAFgMAAQgOAAgMgHgAgLgVQgFAEgCAFQgDAHAAAFQAAAHADAGQACAGAGAEQAFAEAHAAQALAAAHgHQAGgHAAgNQAAgLgGgHQgHgHgLAAQgHAAgGAEg");
	this.shape_50.setTransform(40.7,116.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AASA5IAAg7IgBgJQgBgFgDgDQgDgFgHAAQgEAAgFADQgFADgDAGQgDAHAAAIIAAA2IgoAAIAAhuIAoAAIAAAOQAHgJAIgEQAJgFAMABQANAAAHAEQAJAGADAIQAFAHAAAJIACAPIAABAg");
	this.shape_51.setTransform(26.8,116.6);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},145).wait(58));

	// Layer 28 copy
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(153.6,-164.6,1,1.341);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(139).to({_off:false},0).to({y:95},19,cjs.Ease.quintInOut).wait(45));

	// Layer 28
	this.instance_3 = new lib.Symbol4copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(147.5,-119.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.6,96,1,1.341);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},136).to({state:[{t:this.instance_4}]},19).to({state:[]},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(136).to({_off:false},0).to({_off:true,scaleY:1.34,x:153.6,y:96},19,cjs.Ease.quintInOut).wait(48));

	// Layer 26
	this.instance_5 = new lib.Symbol3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(444.4,125.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(87).to({scaleX:0.03,x:28.8},13,cjs.Ease.quartOut).to({regY:86.3,y:212.1},1).wait(1).to({regY:0,scaleY:1,y:125.9},0).wait(1).to({scaleY:1,y:126.2},0).wait(1).to({scaleY:0.99,y:126.8},0).wait(1).to({scaleY:0.98,y:127.7},0).wait(1).to({scaleY:0.96,y:128.9},0).wait(1).to({scaleY:0.95,y:130.5},0).wait(1).to({scaleY:0.92,y:132.4},0).wait(1).to({scaleY:0.89,y:134.9},0).wait(1).to({scaleY:0.86,y:137.9},0).wait(1).to({scaleY:0.82,y:141.5},0).wait(1).to({scaleY:0.77,y:145.9},0).wait(1).to({scaleY:0.71,y:151.2},0).wait(1).to({scaleY:0.63,y:157.6},0).wait(1).to({scaleY:0.54,y:165.6},0).wait(1).to({scaleY:0.43,y:175.3},0).wait(1).to({scaleY:0.29,y:187.1},0).wait(1).to({scaleY:0.14,y:199.6},0).wait(1).to({scaleY:0.04,y:208.7},0).wait(1).to({regY:86.5,scaleY:0.01,y:212},0).to({_off:true},1).wait(82));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ADiQkIAA68MAplAAAIAAa8g");
	var mask_1_graphics_87 = new cjs.Graphics().p("ADiQkIAA68MAplAAAIAAa8g");
	var mask_1_graphics_88 = new cjs.Graphics().p("ABnQkIAA68MAqBAAAIAAa8g");
	var mask_1_graphics_89 = new cjs.Graphics().p("AgUQkIAA68MAqcAAAIAAa8g");
	var mask_1_graphics_90 = new cjs.Graphics().p("AiQQkIAA68MAq5AAAIAAa8g");
	var mask_1_graphics_91 = new cjs.Graphics().p("AkLQkIAA68MArUAAAIAAa8g");
	var mask_1_graphics_92 = new cjs.Graphics().p("AmHQkIAA68MArxAAAIAAa8g");
	var mask_1_graphics_93 = new cjs.Graphics().p("AoDQlIAA68MAsOAAAIAAa8g");
	var mask_1_graphics_94 = new cjs.Graphics().p("Ap+QlIAA68MAspAAAIAAa8g");
	var mask_1_graphics_95 = new cjs.Graphics().p("Ar6QlIAA68MAtGAAAIAAa8g");
	var mask_1_graphics_96 = new cjs.Graphics().p("At2QlIAA68MAtiAAAIAAa8g");
	var mask_1_graphics_97 = new cjs.Graphics().p("AvxQlIAA68MAt+AAAIAAa8g");
	var mask_1_graphics_98 = new cjs.Graphics().p("AxtQlIAA68MAuaAAAIAAa8g");
	var mask_1_graphics_99 = new cjs.Graphics().p("AzpQlIAA68MAu3AAAIAAa8g");
	var mask_1_graphics_100 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_101 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_102 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_103 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_104 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_105 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_106 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_107 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_108 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_109 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_110 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_111 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_112 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_113 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_114 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_115 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_116 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_117 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_118 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_119 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_120 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_121 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_122 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_123 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_124 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_125 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_126 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_127 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_128 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_129 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_130 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_131 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_132 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_133 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_134 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_135 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_136 = new cjs.Graphics().p("A1kQlIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_137 = new cjs.Graphics().p("A1kReIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_138 = new cjs.Graphics().p("A1kSWIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_139 = new cjs.Graphics().p("A1kTPIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_140 = new cjs.Graphics().p("A1kUHIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_141 = new cjs.Graphics().p("A1kU/IAA68MAvSAAAIAAa8g");
	var mask_1_graphics_142 = new cjs.Graphics().p("A1kV4IAA68MAvSAAAIAAa8g");
	var mask_1_graphics_143 = new cjs.Graphics().p("A1kWwIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_144 = new cjs.Graphics().p("A1kXpIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_145 = new cjs.Graphics().p("A1kYhIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_146 = new cjs.Graphics().p("A1kZaIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_147 = new cjs.Graphics().p("A1kaSIAA68MAvSAAAIAAa8g");
	var mask_1_graphics_148 = new cjs.Graphics().p("A1kbLIAA69MAvSAAAIAAa9g");
	var mask_1_graphics_149 = new cjs.Graphics().p("A1kcDIAA69MAvSAAAIAAa9g");
	var mask_1_graphics_150 = new cjs.Graphics().p("A1kc8IAA69MAvSAAAIAAa9g");
	var mask_1_graphics_151 = new cjs.Graphics().p("A1kd0IAA69MAvSAAAIAAa9g");
	var mask_1_graphics_152 = new cjs.Graphics().p("A1kesIAA69MAvSAAAIAAa9g");
	var mask_1_graphics_153 = new cjs.Graphics().p("A1kflIAA69MAvSAAAIAAa9g");
	var mask_1_graphics_154 = new cjs.Graphics().p("EgVkAgdIAA69MAvSAAAIAAa9g");
	var mask_1_graphics_155 = new cjs.Graphics().p("EgVkAhWIAA69MAvSAAAIAAa9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:288.7,y:106}).wait(87).to({graphics:mask_1_graphics_87,x:288.7,y:106}).wait(1).to({graphics:mask_1_graphics_88,x:279.2,y:106}).wait(1).to({graphics:mask_1_graphics_89,x:269.6,y:106}).wait(1).to({graphics:mask_1_graphics_90,x:260.1,y:106}).wait(1).to({graphics:mask_1_graphics_91,x:250.5,y:106}).wait(1).to({graphics:mask_1_graphics_92,x:241,y:106}).wait(1).to({graphics:mask_1_graphics_93,x:231.5,y:106.1}).wait(1).to({graphics:mask_1_graphics_94,x:221.9,y:106.1}).wait(1).to({graphics:mask_1_graphics_95,x:212.4,y:106.1}).wait(1).to({graphics:mask_1_graphics_96,x:202.8,y:106.1}).wait(1).to({graphics:mask_1_graphics_97,x:193.3,y:106.1}).wait(1).to({graphics:mask_1_graphics_98,x:183.7,y:106.1}).wait(1).to({graphics:mask_1_graphics_99,x:174.2,y:106.1}).wait(1).to({graphics:mask_1_graphics_100,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_101,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_102,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_103,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_104,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_105,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_106,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_107,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_108,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_109,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_110,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_111,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_112,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_113,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_114,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_115,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_116,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_117,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_118,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_119,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_120,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_121,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_122,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_123,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_124,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_125,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_126,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_127,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_128,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_129,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_130,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_131,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_132,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_133,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_134,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_135,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_136,x:164.6,y:106.1}).wait(1).to({graphics:mask_1_graphics_137,x:164.6,y:111.8}).wait(1).to({graphics:mask_1_graphics_138,x:164.6,y:117.4}).wait(1).to({graphics:mask_1_graphics_139,x:164.6,y:123.1}).wait(1).to({graphics:mask_1_graphics_140,x:164.6,y:128.7}).wait(1).to({graphics:mask_1_graphics_141,x:164.6,y:134.3}).wait(1).to({graphics:mask_1_graphics_142,x:164.6,y:140}).wait(1).to({graphics:mask_1_graphics_143,x:164.6,y:145.6}).wait(1).to({graphics:mask_1_graphics_144,x:164.6,y:151.3}).wait(1).to({graphics:mask_1_graphics_145,x:164.6,y:156.9}).wait(1).to({graphics:mask_1_graphics_146,x:164.6,y:162.6}).wait(1).to({graphics:mask_1_graphics_147,x:164.6,y:168.2}).wait(1).to({graphics:mask_1_graphics_148,x:164.6,y:173.9}).wait(1).to({graphics:mask_1_graphics_149,x:164.6,y:179.5}).wait(1).to({graphics:mask_1_graphics_150,x:164.6,y:185.2}).wait(1).to({graphics:mask_1_graphics_151,x:164.6,y:190.8}).wait(1).to({graphics:mask_1_graphics_152,x:164.6,y:196.4}).wait(1).to({graphics:mask_1_graphics_153,x:164.6,y:202.1}).wait(1).to({graphics:mask_1_graphics_154,x:164.6,y:207.7}).wait(1).to({graphics:mask_1_graphics_155,x:164.6,y:213.4}).wait(48));

	// text
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#0071BC").s().p("AgMA3IgzhtIArAAIAXA6IAVg6IAoAAIgtBtg");
	this.shape_52.setTransform(274.9,186.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0071BC").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_53.setTransform(265.4,183.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0071BC").s().p("AgzBQIAihBIg2heIAuAAIAeA8IAZg8IArAAIhQCfg");
	this.shape_54.setTransform(255.1,189);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0071BC").s().p("AASBQIguhFIAABFIgtAAIAAigIAtAAIAABEIAwhEIA1AAIg+BPIA/BRg");
	this.shape_55.setTransform(240.9,184.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0071BC").s().p("AgTBUIAAioIAnAAIAACog");
	this.shape_56.setTransform(223.4,183.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0071BC").s().p("AglA1QgLgHgHgOQgHgNAAgTQAAgKADgKQACgLAHgIQAGgJAKgFQAKgFANAAQALgBAJAFQAIAEAIAJIAAgNIAmAAIAABuIgmAAIAAgNQgGAHgJAFQgJAFgMAAQgOAAgMgHgAgLgVQgFAEgCAFQgDAHAAAFQAAAHADAGQACAGAGAEQAFAEAHAAQALAAAHgHQAGgHAAgNQAAgLgGgHQgHgHgLAAQgHAAgGAEg");
	this.shape_57.setTransform(212.4,186.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_58.setTransform(201.4,185.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0071BC").s().p("AASA5IAAg8IgBgIQAAgFgEgEQgDgDgGAAQgFgBgFADQgFADgCAGQgEAHAAAIIAAA2IgoAAIAAhtIAoAAIAAAMQAHgIAIgEQAJgEAMgBQANAAAHAGQAJAFADAHQAFAJABAIIABAQIAAA/g");
	this.shape_59.setTransform(190.5,186.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0071BC").s().p("AAAA7QgQAAgOgGQgOgHgIgOQgIgNAAgTQAAgRAHgOQAHgNAOgHQAOgIASAAQAUAAAMAHQAMAHAHALQAGALACALQACAMAAAJIhUAAQAAAHADAGQACAGAGADQAFAEAHAAQAJAAAFgDQAGgEABgHIAnAAQgFAOgIAIQgJAIgJAEQgJADgIABIgJABIgDgBgAAWgMQAAgGgDgFQgCgFgFgEQgFgDgHAAQgGAAgFADQgFADgDAGQgCAFgBAGIAsAAIAAAAg");
	this.shape_60.setTransform(176.6,186.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#0071BC").s().p("AASA5IAAg8IgBgIQgBgFgDgEQgDgDgHAAQgEgBgFADQgEADgEAGQgDAHAAAIIAAA2IgoAAIAAhtIAoAAIAAAMQAHgIAJgEQAHgEAMgBQAOAAAHAGQAIAFAFAHQADAJABAIIACAQIAAA/g");
	this.shape_61.setTransform(162.9,186.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0071BC").s().p("AgTBSIAAhuIAnAAIAABugAgOgtQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_62.setTransform(152.4,183.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_63.setTransform(145.1,185.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0071BC").s().p("AARA5IAAg8IAAgIQgBgFgDgEQgDgDgHAAQgEgBgFADQgFADgDAGQgDAHAAAIIAAA2IgoAAIAAhtIAoAAIAAAMQAGgIAKgEQAHgEAMgBQAOAAAHAGQAIAFAFAHQADAJABAIIACAQIAAA/g");
	this.shape_64.setTransform(134.2,186.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#0071BC").s().p("AglAzQgOgIgIgOQgGgNAAgQQAAgPAGgNQAIgOAOgIQAPgJAWAAQAWAAAPAJQAQAIAGAOQAIANgBAPQABAQgIANQgGAOgQAIQgPAJgWgBQgWABgPgJgAgRgWQgHAJAAANQAAAOAHAIQAFAIAMAAQAMAAAGgIQAHgIAAgOQAAgNgHgJQgGgHgMgBQgMABgFAHg");
	this.shape_65.setTransform(119.8,186.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0071BC").s().p("AATBVQgXAAgSgLQgTgKgKgTQgLgTAAgaQAAgTAHgQQAGgQAMgLQALgLAOgGQAOgFARAAQALAAALADQALADALAHIAAAuIgKgJQgFgFgIgCQgHgDgIAAQgNAAgJAGQgIAGgFAKQgFALAAAMQAAAMAEAKQAFAKAJAGQAJAGANAAQAIAAAHgDIANgHQAGgDAEgFIAAAuQgLAHgLADQgJACgJAAIgEAAg");
	this.shape_66.setTransform(105.3,184.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#0071BC").s().p("AgnA5IAAhuIAmAAIAAAOIABgCIACgCQAHgIAIgCQAHgDAGAAIAGAAIAEABIAAAjIgFgBIgFAAQgLAAgGAEQgHAEgCAGQgDAGgBAEIAAAGIAAAwg");
	this.shape_67.setTransform(94.1,186.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0071BC").s().p("AAAA7QgQAAgOgGQgOgHgIgOQgIgNAAgTQAAgRAHgOQAHgNAOgHQAOgIASAAQAUAAAMAHQAMAHAHALQAGALACALQACAMAAAJIhUAAQAAAHADAGQACAGAGADQAFAEAHAAQAJAAAFgDQAGgEABgHIAnAAQgFAOgIAIQgJAIgJAEQgJADgIABIgJABIgDgBgAAWgMQAAgGgDgFQgCgFgFgEQgFgDgHAAQgGAAgFADQgFADgDAGQgCAFgBAGIAsAAIAAAAg");
	this.shape_68.setTransform(82,186.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0071BC").s().p("AgXBHIAAhRIgPAAIAAgdIAPAAIAAgfIAnAAIAAAfIAXAAIAAAdIgXAAIAABRg");
	this.shape_69.setTransform(71.2,185.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0071BC").s().p("AASA5IAAg8IgBgIQgBgFgDgEQgDgDgHAAQgEgBgFADQgEADgEAGQgDAHAAAIIAAA2IgoAAIAAhtIAoAAIAAAMQAHgIAJgEQAHgEAMgBQAOAAAHAGQAIAFAFAHQADAJABAIIACAQIAAA/g");
	this.shape_70.setTransform(60.3,186.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0071BC").s().p("AgWBQIAAigIAsAAIAACgg");
	this.shape_71.setTransform(49.5,184.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0071BC").s().p("AglAzIAAhlIAXAAIAAAkIAOAAIAJABIALACQAGACAEAFIAGAIQACAGAAAIQAAAKgDAGQgDAGgDACQgHAGgIACIgOABgAgOAfIALAAIAFgBIAGgCQAEgCABgDIABgFIgBgFQgBgDgDgCIgHgCIgFgBIgLAAg");
	this.shape_72.setTransform(103.1,158.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#0071BC").s().p("AgsAzIgDAAIAAgWIACAAIACABQAEAAADgCIAFgDQADgDAAgEIABgHIAAg9IBLAAIAABlIgXAAIAAhQIgeAAIAAAoQABAGgCAJQgCAHgGAHQgEAFgHADQgHADgKAAIgCAAg");
	this.shape_73.setTransform(91.6,158.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0071BC").s().p("AABA2QgLAAgMgGQgLgFgIgMQgGgMgBgSQABgQAFgMQAGgMALgHQALgHAOAAQAOAAAJAGQAKAFAGAIQAEAHADAKQACAKAAAJIAAAEIhIAAQABAJAEAGQAEAGAHADQAFADAGAAQAFAAAEgCIAHgEIAEgEQAEgDACgHIAUALIgFAJIgIAJQgGAFgIADIgMADIgHABIgCAAgAAYgNQgCgJgHgFQgGgEgIgBQgIABgHAFQgFAFgDAIIAuAAIAAAAg");
	this.shape_74.setTransform(80.8,158.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0071BC").s().p("AgKAzIAAhQIgfAAIAAgVIBTAAIAAAVIgeAAIAABQg");
	this.shape_75.setTransform(70.6,158.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgMAMgHQAMgHAPAAQAQAAAMAHQAMAHAHAMQAHAMAAAPQAAAQgHAMQgHAMgMAHQgMAHgQAAQgPAAgMgHgAgNgcQgHADgFAHQgEAIAAAKQAAAMAEAHQAFAHAHAEQAGADAHAAQAIAAAGgDQAHgEAFgHQAEgHAAgMQAAgKgEgIQgFgHgHgDQgGgEgIAAQgGAAgHAEg");
	this.shape_76.setTransform(59.9,158.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0071BC").s().p("AgeAzIAAhlIA9AAIAAAVIgmAAIAABQg");
	this.shape_77.setTransform(50.3,158.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0071BC").s().p("AguBLIAjhEIgthRIAdAAIAcA5IAdg5IAbAAIhMCVg");
	this.shape_78.setTransform(147.7,101);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#0071BC").s().p("AAQAzIglgvIAAAvIgYAAIAAhlIAYAAIAAAlIAhglIAfAAIgrAsIAtA5g");
	this.shape_79.setTransform(137.3,98.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgMAMgHQAMgHAPAAQAQAAAMAHQAMAHAHAMQAHAMABAPQgBAQgHAMQgHAMgMAHQgMAHgQAAQgPAAgMgHgAgNgcQgHADgEAHQgFAIAAAKQAAAMAFAHQAEAHAHAEQAHADAGAAQAHAAAHgDQAHgEAFgHQAEgHAAgMQAAgKgEgIQgFgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_80.setTransform(125,98.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#0071BC").s().p("AgzBMIAAiVIAXAAIAAAMQAIgJAJgDQAIgCAFAAQAOAAALAGQALAHAHAMQAGAMABAQQgBARgHALQgHAMgLAGQgLAHgMAAQgDAAgFgBQgFgBgGgDQgGgEgGgGIAAA8gAgOgyQgHADgEAHQgEAIAAAKQAAAJADAIQAEAGAGAEQAGAFAKAAQAIAAAGgFQAGgDAEgHQADgHAAgKQAAgKgEgIQgEgHgHgDQgGgEgGAAQgIAAgGAEg");
	this.shape_81.setTransform(112.5,100.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0071BC").s().p("Ag6BQIA8h7IhBAAIAAglIB/AAIhJCgg");
	this.shape_82.setTransform(94.2,95.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0071BC").s().p("AgHBQIAAh7IgZAAIAAglIBBAAIAACgg");
	this.shape_83.setTransform(79.7,95.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0071BC").s().p("AgLBUQgIgBgIgEQgJgEgHgKQgIgJgEgQQgFgQAAgYQAAgXAFgQQAEgQAIgJQAHgJAJgEQAIgFAIgBQAHgBAEAAQAFAAAIABQAHABAIAFQAJAEAHAJQAIAJAEAQQAFAQAAAXQAAAYgFAQQgEAQgIAJQgHAKgJAEQgIAEgHABIgNABIgLgBgAgKgtQgEAFgDAIQgCAIAAAIIAAAQIAAARQAAAJACAIQADAIAEAEQADAFAHABQAHgBAEgFQAFgEABgIQACgIABgJIAAgRIAAgQQgBgIgCgIQgBgIgFgFQgEgFgHAAQgHAAgDAFg");
	this.shape_84.setTransform(66.3,95.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0071BC").s().p("Ag+BTIBChOIALgNQAEgGACgEQACgEAAgFQAAgFgCgFQgDgFgEgDQgFgDgGAAQgGAAgEADQgEAEgCAEIgCAJIgBAHIgoAAQAAgJADgKQADgLAHgJQAGgKAMgGQAMgGARAAQAVAAANAIQAMAIAHAMQAGAMAAAOQAAAJgDAIQgDAHgFAIIgPATQgKALgOANIAwAAIAAAkg");
	this.shape_85.setTransform(52.2,95.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAGgMALgIQAKgHARgBIAIABQAFABAGADQAGAEAEAGIAAgMIAYAAIAABlIgYAAIAAgLIgGAGQgDADgHACQgGADgHAAQgQAAgLgIgAgNgbQgHAEgDAIQgEAHABAIQgBAJAEAHQAEAIAFAEQAHAFAIAAQAJAAAHgFQAGgEAEgHQACgHAAgKQAAgKgDgHQgFgHgGgEQgGgEgIAAQgIABgGAEg");
	this.shape_86.setTransform(207.8,68.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#0071BC").s().p("AAkBBIAAgdIhHAAIAAAdIgVAAIAAgyQAIgBAEgEQAFgEACgEQACgFABgHIABgOIAAgoIBLAAIAABPIAPAAIAAAygAgLgPQAAAOgEAGQgEAHgEADIAqAAIAAg6IgeAAg");
	this.shape_87.setTransform(195.7,70.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAFgMAMgIQALgHAQgBIAIABQAFABAFADQAHAEAEAGIAAgMIAYAAIAABlIgYAAIAAgLIgFAGQgFADgFACQgHADgHAAQgQAAgLgIgAgNgbQgGAEgEAIQgDAHgBAIQABAJADAHQADAIAHAEQAGAFAIAAQAJAAAGgFQAHgEADgHQADgHAAgKQAAgKgEgHQgDgHgHgEQgHgEgHAAQgHABgHAEg");
	this.shape_88.setTransform(183.3,68.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0071BC").s().p("AAVAzIAAhQIgpAAIAABQIgXAAIAAhlIBXAAIAABlg");
	this.shape_89.setTransform(171.4,68.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#0071BC").s().p("AgbAvQgMgHgHgMQgHgMAAgQQAAgPAHgMQAHgMAMgHQAMgHAPAAQAQAAAMAHQAMAHAHAMQAHAMABAPQgBAQgHAMQgHAMgMAHQgMAHgQAAQgPAAgMgHgAgNgcQgHADgFAHQgEAIAAAKQAAAMAEAHQAFAHAHAEQAGADAHAAQAHAAAHgDQAHgEAFgHQAEgHAAgMQAAgKgEgIQgFgHgHgDQgHgEgHAAQgGAAgHAEg");
	this.shape_90.setTransform(159.2,68.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0071BC").s().p("AgKAzIAAhQIgfAAIAAgVIBTAAIAAAVIgeAAIAABQg");
	this.shape_91.setTransform(148.5,68.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0071BC").s().p("AAOA2QgNAAgJgEQgLgEgIgIQgHgIgEgJQgDgKAAgKQAAgOAFgKQAFgKAGgGQAJgHAJgEQAIgDAMAAQAKAAAHADQAHACAFADIAAAeQgFgIgIgEQgHgEgJgBQgIAAgGAEQgHAEgEAHQgFAHAAAKQAAAJAEAHQADAIAHAEQAGAFAJAAQAJAAAGgEQAHgDADgEIAFgHIAAAfQgIAFgHABIgKACIgDAAg");
	this.shape_92.setTransform(139.2,68.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0071BC").s().p("AgugxIAYAAIAAA4IBEhBIAABuIgXAAIAAg7IhFBDg");
	this.shape_93.setTransform(128,68.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0071BC").s().p("AgsAzIgDAAIAAgVIACAAIACAAQAEAAADgCIAFgDQADgEAAgDIABgGIAAg+IBLAAIAABlIgXAAIAAhQIgeAAIAAAoQABAHgCAHQgCAIgGAHQgEAFgHADQgHADgKAAIgCAAg");
	this.shape_94.setTransform(115.6,68.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#0071BC").s().p("AgbBRQgKgFgHgHQgHgHgDgIQgDgIgBgGIgCgLIApAAIABAJQACAGAEAEQAFADAHABQAJgBAFgDQAEgEABgGQACgFgBgEQAAgIgEgEQgDgEgGgBIgIAAIgGAAIAAgbIAGAAIAFgBQAEgBAEgEQAEgEAAgIQAAgHgDgEQgCgEgEgBIgHgBQgHAAgEAFQgFAFAAAHIgoAAQACgSAIgLQAHgKAJgFQAKgFAIgBQAJgBADAAQAOAAANAFQAMAEAIAKQAIAJAAAQQAAANgGAIQgGAJgLADIAAABQAGACAHAEQAHAEAEAJQAEAIABANQgBAPgHAMQgHALgOAHQgOAGgSAAQgQAAgLgEg");
	this.shape_95.setTransform(98.3,65.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#0071BC").s().p("AgcAuQgLgIgGgMQgGgMAAgOQAAgNAGgMQAGgMALgIQAKgHARgBIAIABQAFABAGADQAFAEAFAGIAAgMIAYAAIAABlIgYAAIAAgLIgGAGQgDADgHACQgGADgHAAQgQAAgLgIgAgNgbQgHAEgDAIQgDAHAAAIQAAAJADAHQAEAIAFAEQAHAFAIAAQAJAAAHgFQAGgEAEgHQACgHAAgKQAAgKgDgHQgFgHgGgEQgGgEgIAAQgIABgGAEg");
	this.shape_96.setTransform(79.6,68.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#0071BC").s().p("AgKAzIAAhQIgfAAIAAgVIBSAAIAAAVIgdAAIAABQg");
	this.shape_97.setTransform(69.2,68.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#0071BC").s().p("Ag+BTIBChOIALgNQAEgGACgEQACgEAAgFQAAgFgCgFQgDgFgEgDQgFgDgGAAQgGAAgEADQgEAEgCAEIgCAJIgBAHIgoAAQAAgJADgKQADgLAHgJQAGgKAMgGQAMgGARAAQAVAAANAIQAMAIAHAMQAGAMAAAOQAAAJgDAIQgDAHgFAIIgPATQgKALgOANIAwAAIAAAkg");
	this.shape_98.setTransform(52.2,65.4);

	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(163.5,125);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween14("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(163.5,339.5);

	var maskedShapeInstanceList = [this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.instance_6}]},136).to({state:[{t:this.instance_7}]},19).to({state:[]},14).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(136).to({_off:false},0).to({_off:true,y:339.5},19,cjs.Ease.quintInOut).wait(48));

	// Layer 24
	this.instance_8 = new lib.Symbol2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-179.4,127.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(84).to({_off:false},0).to({x:131.1},15,cjs.Ease.quartOut).to({_off:true},34).wait(70));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("AgNUuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_45 = new cjs.Graphics().p("AldUuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_46 = new cjs.Graphics().p("AqIUuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_47 = new cjs.Graphics().p("AuAUuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_48 = new cjs.Graphics().p("Aw/UuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_49 = new cjs.Graphics().p("AzLUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_50 = new cjs.Graphics().p("A0tUuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_51 = new cjs.Graphics().p("A1yUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_52 = new cjs.Graphics().p("A2iUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_53 = new cjs.Graphics().p("A3CUuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_54 = new cjs.Graphics().p("A3ZUuMAAAgpbMAwAAAAMAAAApbg");
	var mask_2_graphics_55 = new cjs.Graphics().p("A3pUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_56 = new cjs.Graphics().p("A3zUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_57 = new cjs.Graphics().p("A36UuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_58 = new cjs.Graphics().p("A3+UuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_59 = new cjs.Graphics().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_60 = new cjs.Graphics().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_61 = new cjs.Graphics().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_63 = new cjs.Graphics().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");
	var mask_2_graphics_84 = new cjs.Graphics().p("A4AUuMAAAgpbMAwBAAAMAAAApbg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:305.9,y:126}).wait(1).to({graphics:mask_2_graphics_45,x:272.3,y:126}).wait(1).to({graphics:mask_2_graphics_46,x:242.4,y:126}).wait(1).to({graphics:mask_2_graphics_47,x:217.6,y:126}).wait(1).to({graphics:mask_2_graphics_48,x:198.5,y:126}).wait(1).to({graphics:mask_2_graphics_49,x:184.6,y:126}).wait(1).to({graphics:mask_2_graphics_50,x:174.7,y:126}).wait(1).to({graphics:mask_2_graphics_51,x:167.9,y:126}).wait(1).to({graphics:mask_2_graphics_52,x:163.1,y:126}).wait(1).to({graphics:mask_2_graphics_53,x:159.8,y:126}).wait(1).to({graphics:mask_2_graphics_54,x:157.5,y:126}).wait(1).to({graphics:mask_2_graphics_55,x:156,y:126}).wait(1).to({graphics:mask_2_graphics_56,x:155,y:126}).wait(1).to({graphics:mask_2_graphics_57,x:154.3,y:126}).wait(1).to({graphics:mask_2_graphics_58,x:153.9,y:126}).wait(1).to({graphics:mask_2_graphics_59,x:153.5,y:126}).wait(1).to({graphics:mask_2_graphics_60,x:153.3,y:126}).wait(1).to({graphics:mask_2_graphics_61,x:153.1,y:126}).wait(1).to({graphics:mask_2_graphics_62,x:153.1,y:126}).wait(1).to({graphics:mask_2_graphics_63,x:153.1,y:126}).wait(21).to({graphics:mask_2_graphics_84,x:153.1,y:126}).wait(119));

	// Text
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFDB4C").s().p("AhABoIAxhdIg/hyIAoAAIAoBQIAohQIAlAAIhqDPg");
	this.shape_99.setTransform(226.6,173.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFDB4C").s().p("AAWBHIg0hCIAABCIggAAIAAiNIAgAAIAAA0IAvg0IArAAIg9A+IBABPg");
	this.shape_100.setTransform(212.1,169.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFDB4C").s().p("AAdBHIAAg8Ig5AAIAAA8IghAAIAAiNIAhAAIAAA1IA5AAIAAg1IAhAAIAACNg");
	this.shape_101.setTransform(195.6,169.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFDB4C").s().p("AhAhFIAgAAIAABQIBhhdIAACZIghAAIAAhRIhgBdg");
	this.shape_102.setTransform(179,169.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFDB4C").s().p("AhHBqIAAjPIAgAAIAAAPQALgMAMgDQALgEAJAAQASAAAQAJQAPAJAJARQAKAQAAAXQAAAXgLAQQgJARgPAJQgRAJgQABIgKgCQgIgBgIgFQgJgEgIgJIAABTgAgUhGQgJAFgFAKQgGAKAAAPQAAAMAEALQAEAJAKAGQAJAGAMAAQAMAAAJgGQAIgGAFgJQAFgLAAgMQgBgPgFgKQgGgKgJgFQgIgGgKAAQgKAAgJAGg");
	this.shape_103.setTransform(162,172.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFDB4C").s().p("AgnARIAAghIBPAAIAAAhg");
	this.shape_104.setTransform(147.5,169.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFDB4C").s().p("AgoBAQgPgLgIgRQgIgRAAgTQAAgTAIgQQAIgSAPgKQAQgLAVAAIANABQAGACAJAEQAHAFAHAJIAAgRIAhAAIAACMIghAAIAAgOQgDADgFAFQgGAEgIAEQgIACgMABQgWgBgPgKgAgSgmQgKAGgFAKQgEAKAAANQAAAMAEAJQAFALAJAGQAJAHALAAQANgBAJgGQAJgFAFgLQAEgKAAgNQAAgOgFgKQgGgLgJgFQgJgEgLAAQgLgBgIAHg");
	this.shape_105.setTransform(133.1,169.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFDB4C").s().p("AgPBuIAAiMIAgAAIAACMgAgOhJQgFgHgBgIQABgJAFgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAIgGAHQgGAFgJABQgIgBgGgFg");
	this.shape_106.setTransform(120.9,165.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFDB4C").s().p("AAxBbIAAgpIhiAAIAAApIgdAAIAAhGQALgBAGgGQAGgGADgGQADgGABgKIABgUIAAg4IBpAAIAABvIAWAAIAABGgAgPgWQgBAUgFAJQgFAKgGAEIA6AAIAAhSIgpAAg");
	this.shape_107.setTransform(109.1,171.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFDB4C").s().p("AgfBDQgPgIgLgQQgKgQAAgaQAAgWAIgRQAJgRAPgKQAPgIAUgBQATABANAGQAOAIAIALQAHAKADAOQADAOAAANIAAAFIhkAAQAAANAGAIQAGAJAIADQAJAFAIAAQAHAAAFgDQAGgBAEgEIAGgGQAEgFAEgIIAcAOQgDAHgFAHQgEAGgHAFQgIAHgKAEQgJADgJACIgMABQgQAAgQgIgAAhgSQgDgMgJgIQgIgGgMAAQgLgBgJAIQgJAHgEAMIBBAAIAAAAg");
	this.shape_108.setTransform(92.9,169.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFDB4C").s().p("AgsABIgOBGIgiAAIAjiZIA5BrIA7hrIAiCZIghAAIgPhGIgtBSg");
	this.shape_109.setTransform(75.1,169.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFDB4C").s().p("AgmBBQgRgKgKgQQgKgRABgWQgBgVAKgRQAKgRARgJQARgKAVAAQAVAAASAKQARAJAKARQAJARABAVQgBAWgJARQgKAQgRAKQgSAKgVAAQgVAAgRgKgAgTgoQgJAFgHAKQgFAKgBAPQABARAFAJQAHALAJAEQAJAFAKgBQAKABAJgFQAKgEAGgLQAHgJAAgRQgBgPgGgKQgGgKgKgFQgJgEgKgBQgJABgKAEg");
	this.shape_110.setTransform(230.7,129);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFDB4C").s().p("AgqBHIAAiNIBVAAIAAAeIg1AAIAABvg");
	this.shape_111.setTransform(217.2,128.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFDB4C").s().p("AgmBBQgRgKgJgQQgKgRAAgWQAAgVAKgRQAJgRARgJQARgKAVAAQAVAAARAKQASAJAJARQAKARAAAVQAAAWgKARQgJAQgSAKQgRAKgVAAQgVAAgRgKgAgSgoQgKAFgHAKQgFAKgBAPQABARAFAJQAHALAJAEQAKAFAJgBQAKABAJgFQAKgEAGgLQAGgJABgRQAAgPgHgKQgGgKgKgFQgJgEgKgBQgJABgJAEg");
	this.shape_112.setTransform(202.1,129);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFDB4C").s().p("AAWBHIg0hCIAABCIggAAIAAiNIAgAAIAAA0IAvg0IArAAIg9A+IBABPg");
	this.shape_113.setTransform(186.9,128.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFDB4C").s().p("AAABHIg0AAIAAiNIAhAAIAAAzIATAAIANAAQAHABAIADQAIADAGAHQAEAEADAHQAEAIAAALQgBAOgEAIQgEAIgEAEQgJAIgLACQgJACgIAAIgDAAgAgTArIAOAAIAIgBQAFAAADgCQAFgEACgEIABgHIgCgHQgBgEgEgDQgEgCgFgBIgHAAIgPAAg");
	this.shape_114.setTransform(172.5,128.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFDB4C").s().p("AgMBFQgOgEgLgMQgLgLgFgNQgFgOABgPQAAgSAHgOQAGgOAKgJQALgKANgFQAMgEAQAAQAPAAAJADQAKAEAHADIAAAsQgHgMgLgGQgLgGgMgBQgLAAgIAGQgKAFgGAKQgGAKgBAOQAAANAFAKQAFAKAKAHQAIAFANAAQANAAAIgEQAJgFAFgFIAHgJIAAAqQgLAHgKABQgKADgIAAQgSAAgOgGg");
	this.shape_115.setTransform(158.4,129);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFDB4C").s().p("AAdBHIAAg8Ig5AAIAAA8IghAAIAAiNIAhAAIAAA1IA5AAIAAg1IAhAAIAACNg");
	this.shape_116.setTransform(143.1,128.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFDB4C").s().p("AgPBpIAAiMIAfAAIAACMgAAKhNQgFgEAAgHQAAgHAFgFQAEgEAHAAQAHAAAFAEQAEAFAAAHQAAAHgEAEQgFAFgHAAQgHAAgEgFgAgghNQgEgEAAgHQAAgHAEgFQAFgEAHAAQAHAAAEAEQAFAFAAAHQAAAHgFAEQgEAFgHAAQgHAAgFgFg");
	this.shape_117.setTransform(130.8,125.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFDB4C").s().p("AgoBAQgPgLgIgRQgIgRAAgTQAAgTAIgRQAIgRAPgKQAQgLAVAAIANABQAGACAIAEQAIAFAHAJIAAgRIAhAAIAACMIghAAIAAgPQgDAFgFADQgGAFgIADQgJADgLABQgVAAgQgLgAgSgmQgKAGgFAKQgEAKgBAMQABAMAEALQAFAKAJAGQAJAHAMgBQAMAAAJgFQAIgHAGgJQAEgLAAgNQAAgOgFgLQgGgJgJgFQgJgGgKAAQgMABgIAGg");
	this.shape_118.setTransform(117.7,129);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFDB4C").s().p("AhHBqIAAjPIAgAAIAAAPQALgMAMgDQALgEAJAAQASAAAQAJQAPAJAJARQAKAQAAAXQAAAXgLAQQgJARgQAJQgPAJgRABIgKgCQgIgBgIgFQgJgEgIgJIAABTgAgUhGQgJAFgGAKQgFAKAAAPQgBAMAFALQAEAJAKAGQAIAGANAAQAMAAAJgGQAIgGAFgJQAFgLAAgMQAAgPgGgKQgFgKgKgFQgIgGgKAAQgKAAgJAGg");
	this.shape_119.setTransform(100.7,132.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFDB4C").s().p("AAWBHIg0hCIAABCIggAAIAAiNIAgAAIAAA0IAvg0IArAAIg9A+IBABPg");
	this.shape_120.setTransform(85.1,128.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFDB4C").s().p("AhABoIAxhdIg/hyIAnAAIApBQIAohQIAlAAIhqDPg");
	this.shape_121.setTransform(68.7,132.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFDB4C").s().p("AAaBHIAAg0IgHAAIgmA0IgnAAIAtg4QgGgBgGgDQgFgCgFgEQgIgHgCgJQgCgIAAgFQAAgHACgJQACgJAJgIQAJgIAKgCQALgDAKAAIA0AAIAACNgAgDgpIgHADQgEABgCAEQgCADAAAGQAAAGACADQADADACACQACABAFABIAKABIAUAAIAAgjIgUAAIgJABg");
	this.shape_122.setTransform(243.3,88.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFDB4C").s().p("AgPBvIAAiNIAfAAIAACNgAgNhKQgHgFAAgJQAAgJAHgGQAFgGAIgBQAJABAGAGQAGAGAAAJQAAAJgGAFQgGAHgJAAQgIAAgFgHg");
	this.shape_123.setTransform(233.6,84.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFDB4C").s().p("AAyBbIAAgoIhiAAIAAAoIgeAAIAAhGQALgBAGgGQAGgGACgGQAFgHAAgIIABgVIAAg4IBqAAIAABvIAUAAIAABGgAgPgVQgBATgFAJQgFALgGADIA6AAIAAhSIgpAAg");
	this.shape_124.setTransform(221.8,90.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFDB4C").s().p("AgmBBQgRgKgKgRQgJgQgBgWQABgVAJgQQAKgSARgJQARgJAVgBQAWABARAJQAQAJALASQAKAQgBAVQABAWgKAQQgLARgQAKQgRAJgWABQgVgBgRgJgAgTgoQgJAFgGAKQgHAKAAAPQAAAQAHALQAFAKAKAEQAKAEAJAAQAKAAAKgEQAJgEAHgKQAFgLAAgQQAAgPgGgKQgGgKgJgFQgKgEgKAAQgJAAgKAEg");
	this.shape_125.setTransform(204.9,88.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFDB4C").s().p("AAdBHIAAhvIg5AAIAABvIggAAIAAiNIB5AAIAACNg");
	this.shape_126.setTransform(187.9,88.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFDB4C").s().p("AgnBAQgQgLgIgRQgIgRAAgTQAAgTAIgQQAIgRAPgLQAPgKAXgBIALACQAHABAIAEQAJAFAGAJIAAgRIAhAAIAACNIghAAIAAgQQgCAEgGAEQgGAFgIAEQgIADgLAAQgXgBgOgKgAgTgmQgJAGgEAKQgGALABALQgBANAGAJQAEALAJAGQAJAGALAAQANABAJgHQAJgGAEgJQAFgLAAgNQAAgOgGgLQgFgKgJgFQgJgEgLAAQgKAAgKAGg");
	this.shape_127.setTransform(163.2,88.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFDB4C").s().p("Ag4BHIAAiNIA3AAIAQACQAIABAIAGQADADAFAGQAEAHAAALQAAAJgEAHQgEAHgIAEIAKAEQAFACAEADQAFAEADAHQACAHABAJQgBANgEAIQgFAHgGAFQgHAFgJACIgQACgAgXAsIAXAAIAJgBQAEgBAFgCIAEgGQACgDAAgEIgCgGQgBgEgDgCQgFgDgEAAIgIgBIgYAAgAgXgPIARAAIAGAAIAFgCIAFgFQACgCAAgFIgBgGQgBgDgEgCQgDgCgEgBIgGAAIgQAAg");
	this.shape_128.setTransform(147.7,88.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFDB4C").s().p("AgmBBQgRgKgJgRQgLgQABgWQgBgVALgQQAJgSARgJQARgJAVgBQAVABASAJQARAJAKASQAJAQABAVQgBAWgJAQQgKARgRAKQgSAJgVABQgVgBgRgJgAgTgoQgKAFgGAKQgFAKgBAPQABAQAFALQAHAKAJAEQAJAEAKAAQAKAAAJgEQAKgEAGgKQAHgLAAgQQgBgPgGgKQgGgKgKgFQgJgEgKAAQgJAAgKAEg");
	this.shape_129.setTransform(131.2,88.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFDB4C").s().p("AAYBHIAAg3IgOACIgOABQgJAAgKgCQgKgCgIgGQgJgIgDgHQgCgJAAgJIAAguIAgAAIAAAnQAAAGACAFQACAFAFAEQAEACAFAAIAGABIANgBIAKgDIAAg6IAgAAIAACNg");
	this.shape_130.setTransform(114.7,88.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFDB4C").s().p("AgGBEQgNgGgIgKQgGgFgFgLQgFgKgBgPIgXAAIAAA8IggAAIAAiNIAgAAIAAA1IAXAAQACgLAFgJQAEgJAIgHQAHgIANgGQAMgHATAAQAWABAQAJQARAJAKASQAJARAAAUQAAAWgJARQgKAQgRAKQgQAJgWABQgTgBgNgGgAAGgoQgIAFgGAKQgFAKgBAPQABAQAFALQAGAKAIAEQAJAEALAAQAKAAAKgEQAJgEAGgKQAFgLAAgQQAAgPgFgKQgGgKgJgFQgKgEgKAAQgLAAgJAEg");
	this.shape_131.setTransform(96.2,88.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFDB4C").s().p("Ag+BHIgEAAIAAgeIADABIADAAQAFAAAFgCQAEgCADgDQAEgFAAgEIABgKIAAhWIBpAAIAACNIggAAIAAhwIgqAAIAAA5QABAIgDAMQgCALgJAJQgFAHgKAEQgJAEgOAAIgEAAg");
	this.shape_132.setTransform(75.4,88.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFDB4C").s().p("AAmBwIhWhsIAABsIgiAAIAAjfIAiAAIAABZIBWhZIAtAAIhkBmIBkB5g");
	this.shape_133.setTransform(59.8,84);

	var maskedShapeInstanceList = [this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},44).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},40).to({state:[]},49).wait(70));

	// Layer 21
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(458.2,126);
	this.instance_9._off = true;

	this.instance_10 = new lib.Symbol2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-180.5,127.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},44).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},21).to({state:[{t:this.instance_9},{t:this.instance_10}]},48).to({state:[]},1).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).wait(1).to({x:390.9},0).wait(1).to({x:331.1},0).wait(1).to({x:281.6},0).wait(1).to({x:243.4},0).wait(1).to({x:215.5},0).wait(1).to({x:195.8},0).wait(1).to({x:182},0).wait(1).to({x:172.5},0).wait(1).to({x:165.9},0).wait(1).to({x:161.4},0).wait(1).to({x:158.3},0).wait(1).to({x:156.2},0).wait(1).to({x:154.9},0).wait(1).to({x:154},0).wait(1).to({x:153.5},0).wait(1).to({x:153.2},0).wait(1).to({x:153.1},0).wait(71).to({_off:true},1).wait(70));

	// Layer 21 copy
	this.instance_11 = new lib.Symbol1copy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(456.8,126.1);
	this.instance_11._off = true;

	this.instance_12 = new lib.Symbol1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(153.1,126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},41).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},24).to({state:[]},49).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({_off:false},0).wait(1).to({x:389.8,y:126},0).wait(1).to({x:330.3},0).wait(1).to({x:281},0).wait(1).to({x:242.9},0).wait(1).to({x:215.2},0).wait(1).to({x:195.6},0).wait(1).to({x:181.9},0).wait(1).to({x:172.4},0).wait(1).to({x:165.8},0).wait(1).to({x:161.3},0).wait(1).to({x:158.3},0).wait(1).to({x:156.2},0).wait(1).to({x:154.9},0).wait(1).to({x:154},0).wait(1).to({x:153.5},0).wait(1).to({x:153.2},0).wait(1).to({x:153.1},0).wait(1).to({_off:true},1).wait(143));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AtmCDIAAkEIbNAAIAAEEg");
	mask_3.setTransform(102,92.1);

	// Layer 2 copy 6
	this.instance_13 = new lib.Tween3("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(101.5,116.8);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween4("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(101.5,91.9);

	var maskedShapeInstanceList = [this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},11).to({state:[{t:this.instance_14}]},30).to({state:[]},92).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(11).to({_off:false},0).to({_off:true,y:91.9},30,cjs.Ease.quartOut).wait(162));

	// mask copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AtmCCIAAkEIbNAAIAAEEg");
	mask_4.setTransform(102,124.6);

	// Layer 2 copy 7
	this.instance_15 = new lib.Tween6("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(70.6,149.6);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween7("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(70.6,124.8);

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},11).to({state:[{t:this.instance_16}]},30).to({state:[]},92).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11).to({_off:false},0).to({_off:true,y:124.8},30,cjs.Ease.quartOut).wait(162));

	// mask copy 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AtmCCIAAkEIbNAAIAAEEg");
	mask_5.setTransform(102,156.1);

	// Layer 2 copy 8
	this.instance_17 = new lib.Tween9("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(60.2,182.3);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween10("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(60.2,157.5);

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},11).to({state:[{t:this.instance_18}]},30).to({state:[]},92).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(11).to({_off:false},0).to({_off:true,y:157.5},30,cjs.Ease.quartOut).wait(162));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AwTBSIAAijMAgnAAAIAACjg");
	mask_6.setTransform(181.6,184.9);

	// Layer 2 copy 9
	this.instance_19 = new lib.Tween1("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(174.3,199.7);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween2("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(174.3,185.3);

	var maskedShapeInstanceList = [this.instance_19,this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},11).to({state:[{t:this.instance_20}]},30).to({state:[]},92).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(11).to({_off:false},0).to({_off:true,y:185.3},30,cjs.Ease.quartOut).wait(162));

	// Layer 2 copy 10
	this.instance_21 = new lib._7ai("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(171.5,161.1,0.075,0.075,0,0,0,15.4,15.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(6).to({_off:false},0).to({regX:15.2,regY:15.1,scaleX:0.65,scaleY:0.65,x:165.6,y:157.5},8,cjs.Ease.cubicOut).to({_off:true},105).wait(84));

	// Layer 2 copy 11
	this.instance_22 = new lib._8ai("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(171.7,161.4,0.047,0.047,0,0,0,13.8,11.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regX:13.2,regY:12,scaleX:0.71,scaleY:0.7,x:171.8,y:163.1},11,cjs.Ease.cubicOut).to({_off:true},112).wait(80));

	// Layer 2 copy 3
	this.instance_23 = new lib._5ai("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(171.6,161.2,0.029,0.029,0,0,0,31.2,26);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(5).to({_off:false},0).to({regX:30.7,regY:25.4,scaleX:0.65,scaleY:0.65,x:172.5,y:157.7},11,cjs.Ease.cubicOut).to({_off:true},107).wait(80));

	// Layer 2 copy 4
	this.instance_24 = new lib._6ai("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(171.7,161.2,0.039,0.039,0,0,0,30.8,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regX:31.1,regY:23.9,scaleX:0.65,scaleY:0.65,x:171.5,y:155.7},19,cjs.Ease.cubicOut).to({_off:true},104).wait(80));

	// Layer 2 copy 5
	this.instance_25 = new lib._4ai("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(171.7,161.5,0.015,0.015,0,0,0,70.5,40.3);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(7).to({_off:false},0).to({regX:71,regY:41.1,scaleX:0.65,scaleY:0.65,x:172.6,y:140.9},14,cjs.Ease.cubicOut).to({_off:true},102).wait(80));

	// Layer 2 copy 2
	this.instance_26 = new lib._3ai("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(171.7,161.4,0.014,0.014,0,0,0,72.7,38.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({regX:71.8,regY:38,scaleX:0.65,scaleY:0.65,x:171.8,y:138.5},24,cjs.Ease.cubicOut).to({_off:true},99).wait(80));

	// Layer 2 copy
	this.instance_27 = new lib._1ai("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(171.6,161.3,0.008,0.008,0,0,0,173.5,117.7);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(6).to({_off:false},0).to({regX:170,regY:116.3,scaleX:0.65,scaleY:0.65,x:173.1,y:124.5},20,cjs.Ease.quartOut).to({_off:true},97).wait(80));

	// Layer 2
	this.instance_28 = new lib._2ai("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(171.7,161.4,0.007,0.007,0,0,0,168.4,112.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({regX:168.6,regY:109.5,scaleX:0.65,scaleY:0.65,x:173.6,y:120.1},29,cjs.Ease.quartOut).to({_off:true},94).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.2,103.5,725.8,295);
// library properties:
lib.properties = {
	id: '56B59F56D9776141B7DA61FA2D76E10F',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['56B59F56D9776141B7DA61FA2D76E10F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;