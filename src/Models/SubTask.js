import Task from './Task'

class SubTask extends Task {
	constructor(id, owner, name, done) {
		super(id, name, done)
		this.owner = owner
	}
}
export default SubTask
