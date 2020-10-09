({
    extendsFrom: 'RecordView',

    initialize: function(options) {
        this._super('initialize', [options]);
        this.listenTo(this, "data:sync:complete", this.loadMeetingsData(options))
    },

    loadMeetingsData: function(options){
    	myData = new Object();
    	this.myData = myData;
    	this.myData['plannedMeetings'] = [];
    	this.myData['heldedMeetings'] = [];
    	this.myData['notheldeddMeetings'] = [];
    	this.myData['otherMeetings'] = [];
	  	this.myData['ytd'] = [];
	  	this.myData['amount_ytd'] = 0;

    	this.render();

    	if(options && _.isFunction(options.complete)){
    		options.complete();
    	}

    	let self = this;

    	let account = self.model.attributes.id;
    	//let url = "Accounts/"+ account +"/link/Meetings";
    	app.api.call('GET', app.api.buildURL("Accounts/"+ account +"/link/meetings"), null , {
    		success: function(data){
    			if(data.records.length == 0) {
    				self.myData['lastMeeting'] = '';
    				self.render();
    				return;
    			}
    			let records = data.records;
    			for(record of records){
    				let status = record.status.toLowerCase();
    				if(status == 'planned'){
    					self.myData['plannedMeetings'].push(record);
    					self.render();
    				}else if(status == 'held'){
    					self.myData['heldedMeetings'].push(record);
    					self.render();
    				}else if(status == 'not held'){
    					self.myData['notheldedMeetings'].push(record);
    					self.render();
    				}else{
    					self.myData['otherMeetings'].push(record);
    					self.render();
    				}
    			}
    			self.myData['meetingsCount'] = data.records.length;
    			self.render();
    			let today = new Date();
    			let date_start = new Date(data.records[0].date_start);
    			let months = today.getMonth() - date_start.getMonth();
    			if(months == 0){
    				let days = Math.abs(today.getDate() - date_start.getDate());
    				self.myData['lastMeeting'] = days + ' días';
    				self.render();
    			}else{
    				self.myData['lastMeeting'] = months + ' meses';
    				self.render();
    			}
    		}
    	})

    	this.loadOpportunitiesData(self,account);
	  },

	  loadOpportunitiesData: function(obj,account){

    	app.api.call('GET', app.api.buildURL("Accounts/"+ account +"/link/opportunities"), null , {
    		success: function(data){
    			if(data.records.length == 0) return;
    			let records = data.records;
					let arr = [];
    			for(record of records){
    				let status = record.sales_status.toLowerCase();
    				let today = new Date();
    				let year = today.getFullYear();
    				let close_date = new Date(record.date_closed);
    				let year_close = close_date.getFullYear();
    				if(year == year_close){
	    				if(status == 'closed won'){
	    					let amount = Number(record.amount);
	    					arr.push(amount);
	    				}
    				}
    			}
					let result = arr.reduce(function(a,b){ return a+b});
					obj.myData['amount_ytd'] = '$' + Number(result).toLocaleString();
					obj.render();
    		}
    	})
	  }

})
