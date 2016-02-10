function Agent(name) {
	var self = this;
	self.name = name;
	self.scenariosCompleted = 0;
	self.levelsCompleted = 0;
	self.demosCompleted = 0;
	self.scenario1 = true;
}

function adminViewModel() {

	var self = this;

	this.agents = ko.observableArray([new Agent("player 1")]);

	this.currentAgent = ko.observable(this.agents()[0]);

	this.input = ko.observable('');

	self.addAgent = function() {
		self.agents.push(new Agent(self.input()));
		self.input('');
	}

	self.removeAgent = function(agent) {
		self.agents.remove(agent);
	}

	self.editAgent = function(agent) {
		self.currentAgent(agent);
	}

	self.clear = function() {
		self.agents.removeAll();
	}

	self.toggle1 = function() {
		$('.1').toggleClass('hidden');
	}

	self.toggle2 = function() {
		$('.2').toggleClass('hidden');
	}

	self.toggle3 = function() {
		$('.3').toggleClass('hidden');
	}

	self.toggle4 = function() {
		$('.4').toggleClass('hidden');
	}

	self.toggle5 = function() {
		$('.5').toggleClass('hidden');
	}

	self.toggle6 = function() {
		$('.6').toggleClass('hidden');
	}

	self.toggle7 = function() {
		$('.7').toggleClass('hidden');
	}

	self.toggle8 = function() {
		$('.8').toggleClass('hidden');
	}

	self.toggle9 = function() {
		$('.9').toggleClass('hidden');
	}
}

ko.applyBindings(new adminViewModel());