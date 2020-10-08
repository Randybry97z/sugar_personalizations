({
    extendsFrom: 'RecordView',

    initialize: function(options) {
        this._super('initialize', [options]);
        //this.model.on("change:un_unidades_accounts_1un_unidades_ida",this.buscarInstitucion, this);
        this.listenTo(this, "data:sync:complete", this.loadLastMeetingDate(options))
    },

/*    buscarInstitucion: function () {
        var self = this;

        if (this.primera_vez){
            this.primera_vez = false;
            return true;
        }

        var renderField = self.getField('in_instituciones_accounts_1_name');
        self.model.set('in_instituciones_accounts_1_name','');
        self.model.set('in_instituciones_accounts_1in_instituciones_ida','');
        renderField.render();

        if (self.model.get("un_unidades_accounts_1un_unidades_ida") == "") return;

        app.alert.show('buscandoinstitucion', {
            level: 'process',
            title: 'Buscando Institución de la Unidad ...'
        });
        app.api.call('GET',app.api.buildURL("UN_Unidades/"+self.model.get("un_unidades_accounts_1un_unidades_ida")+"/link/in_instituciones_un_unidades_2"), null, {
            success: function(data) {

                app.alert.dismissAll();

                if (data.id == "-1") {

                    app.alert.show('noinstitucion', {
                        level: 'error',
                        messages: 'La Unidad seleccionada <b>No tiene Institución</b> definida',
                        autoClose: true
                    });

                    return;
                }

                self.model.set('in_instituciones_accounts_1_name',data.records[0].name);
                self.model.set('in_instituciones_accounts_1in_instituciones_ida',data.records[0].id);
                renderField.render();
            },
        });
    },*/

    loadLastMeetingDate: function(options){
    	myData = new Object();
    	this.myData = myData;

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
	  }

})
