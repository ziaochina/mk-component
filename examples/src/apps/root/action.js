class action {
	setCurrentAppPath = (currentAppPath) => {
		return injections => {
			injections.reduce('setCurrentAppPath', currentAppPath)
		}
	}
}

export default function creator(option) {
	return new action()
}
