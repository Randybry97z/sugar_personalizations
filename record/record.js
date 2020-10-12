({
    extendsFrom: 'RecordView',

    initialize: function(options) {
        this._super('initialize', [options]);
        this.listenTo(this, "data:sync:complete", this.loadAccountData(options));
    },

    loadAccountData: function(options){
    	myData = new Object();
    	this.myData = myData;
        //Meetings data
    	this.myData['plannedMeetings'] = [];
    	this.myData['heldedMeetings'] = [];
    	this.myData['notheldeddMeetings'] = [];
    	this.myData['otherMeetings'] = [];

        //Calls data
        this.myData['plannedCalls'] = [];
        this.myData['heldedCalls'] = [];
        this.myData['notHeldedCalls'] = [];
        this.myData['otherCalls'] = [];

        //Events
        this.myData['plannifiedEvents'] = [];
        this.myData['finishedEvents'] = [];

        //Accounts data
	  	this.myData['ytd'] = [];
	  	this.myData['amount_ytd'] = 0;
        this.myData['contact'] = [];
        this.myData['customerData'] = {};
    	this.render();

    	if(options && _.isFunction(options.complete)){
    		options.complete();
    	}

    	let self = this;
    	let account = self.model.attributes.id;
        //Get account Data
        app.api.call('GET', app.api.buildURL("Accounts/"+account), null, {
            success: function(data){
                if(!data.id){
                    return;
                }
                let record = data;
                self.myData['customerData'].industry = data.industry;
                self.myData['customerData'].type= data.account_type;
                self.myData['customerData'].employees= data.employees;
                self.myData['customerData'].revenue_target= '$'+data.annual_revenue;
                self.render();
            }
        });

        //Get meetings related to account
    	app.api.call('GET', app.api.buildURL("Accounts/"+ account +"/link/meetings"), null , {
    		success: function(data){
    			if(data.records.length == 0) {
    				self.myData['lastMeeting'] = '';
    				return;
    			}
    			let records = data.records;
    			for(record of records){
    				let status = record.status.toLowerCase();
    				if(status == 'planned'){
    					self.myData['plannedMeetings'].push(record);
                        self.myData['plannifiedEvents'].push(record);
    				}else if(status == 'held'){
    					self.myData['heldedMeetings'].push(record);
                        self.myData['finishedEvents'].push(record);
    				}else if(status == 'not held'){
    					self.myData['notheldedMeetings'].push(record);
    				}else{
    					self.myData['otherMeetings'].push(record);
    				}
    			}
    			self.myData['meetingsCount'] = data.records.length;
    			let today = new Date();
    			let date_start = new Date(data.records[0].date_start);
    			let months = today.getMonth() - date_start.getMonth();
    			if(months == 0){
    				let days = Math.abs(today.getDate() - date_start.getDate());
    				self.myData['lastMeeting'] = days + ' días';
    			}else{
    				self.myData['lastMeeting'] = months + ' meses';
    			}
                self.render();
    		}
    	});

        //Get calls related to account
        app.api.call('GET', app.api.buildURL("Accounts/"+account+"/link/calls"), null, {
            success: function(data){
                if(!data.records.length){
                    return;
                }
                let records = data.records;
                for(record of records){
                    let status = record.status.toLowerCase();
                    if(status == 'planned'){
                        self.myData['plannedCalls'].push(record);
                        self.myData['plannifiedEvents'].push(record);
                    }else if(status == 'held'){
                        self.myData['heldedCalls'].push(record);
                        self.myData['finishedEvents'].push(record);
                    }else if(status == 'not held'){
                        self.myData['notHeldedCalls'].push(record);
                    }else{
                        self.myData['otherCalls'].push(record);
                    }
                }
                self.render();
            }
        });
    	this.loadOpportunitiesData(self,account);
        this.loadContactData(self,account);
        console.log(self.myData);
	},

    loadOpportunitiesData: function(obj,account){
        //Get opportunities related to account
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
                    //Validate the current year eq to the year of close in opportunities
    				if(year == year_close){
	    				if(status == 'closed won'){
	    					let amount = Number(record.amount);
	    					arr.push(amount);
	    				}
    				}
    			}
                    //Sum of the n elements in arrat
					let result = arr.reduce(function(a,b){ return a+b});
					obj.myData['amount_ytd'] = '$' + Number(result).toLocaleString();
					obj.render();
    		}
    	})
    },

    loadContactData: function(obj, account){
        //Get the first contact related to account
        app.api.call('GET', app.api.buildURL("Accounts/"+account+"/link/contacts"), null, {
            success: function(data){
                if(!data.records.length) return;
                let record = data.records[0];
                let email = data.records[0].email[0].email_address;
                obj.myData['contact'].name = record.name;
                obj.myData['contact'].image = record.picture;
                obj.myData['contact'].title = record.title;
                obj.myData['contact'].email = email;
                obj.myData['contact'].mobile = record.phone_mobile;
                obj.myData['contact'].country = record.primary_address_country;
                obj.myData['contact'].state = record.primary_address_state;
                obj.myData['contact'].city = record.primary_address_city;
                obj.myData['contact'].id = record.id;
                obj.myData['contact'].link_contact = "#Contacts/"+record.id;
                obj.render();
            }
        });
    }

})
