export function setCurrentAppPath(currentAppPath){
	return injectFuns=>{
		injectFuns.reduce('setCurrentAppPath', currentAppPath)
	}
}