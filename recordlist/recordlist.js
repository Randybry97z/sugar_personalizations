({
    extendsFrom: 'RecordlistView',

    initialize: function(options) {

        this._super('initialize', [options]);

        this.listenTo(this.collection, 'data:sync:complete', this.renderPriorityColor);
    },

    renderPriorityColor: function(){
    	_.each(this.rowFields, function(field) {

        var obj = _.findWhere(field, {name: 'pc_prioridad_c'});

        // Fix an error when Next Review Date hidden
        if (!_.isUndefined(obj)) {

            // Get Last Revenue date
            var prioridad = obj.model.get('pc_prioridad_c');
            if (prioridad) {
                if (prioridad == 1) {
                    obj.$el.css({'color': '#fff', 'display':'flex', 'background-color': '#800000', 'border-radius': '1.5rem','height':'2rem','align-items': 'center', 'justify-content':'center', 'font-weight': 'bold', 'font-size':'1.2rem'});
                }else if(prioridad == 2) {
                    obj.$el.css({'color': '#fff', 'background-color': '#FF8000', 'border-radius': '1.5rem','height':'2rem','align-items': 'center', 'justify-content':'center', 'font-weight': 'bold', 'font-size':'1.2rem'});
                }else if(prioridad == 3){
                	obj.$el.css({'color': '#fff', 'background-color': '#0080FF', 'border-radius': '1.5rem','height':'2rem','align-items': 'center', 'justify-content':'center', 'font-weight': 'bold', 'font-size':'1.2rem'});
                }else{
                	obj.$el.css({'color': '#000', 'background-color': '#808080', 'border-radius': '1.5rem','height':'2rem', 'align-items': 'center', 'justify-content':'center', 'font-weight': 'bold', 'font-size':'1.2rem'});
                }

                obj.render();
            }
        }
    });
    }

})
